'use client'

import { useEffect, useRef } from 'react'

export function useEidethicWebGLV2(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const canvasEl: HTMLCanvasElement = canvas

    const gl = canvasEl.getContext('webgl')
    if (!gl) {
      console.error('WebGL not supported')
      return
    }
    const glCtx: WebGLRenderingContext = gl

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `

    const fsSource = `
      precision mediump float;

      uniform vec2 u_resolution;
      uniform float u_time;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
      }

      float fbm(in vec2 st) {
        float value = 0.0;
        float amplitude = .5;
        float frequency = 0.0;
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= .5;
        }
        return value;
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        float scale = 60.0;
        vec2 grid = floor(st * scale);
        vec2 uv = fract(st * scale);

        float n = fbm(grid * 0.05 + vec2(u_time * 0.1, u_time * 0.2));

        float wave = sin(grid.y * 0.2 + u_time) * 0.5 + 0.5;
        n = mix(n, random(grid), 0.3 * wave);

        float color = 0.0;

        vec2 centerPos = uv - 0.5;
        float dist = length(centerPos);

        if (n > 0.7) {
          color = 1.0;
        } else if (n > 0.5) {
          if (abs(centerPos.x) < 0.1 || abs(centerPos.y) < 0.1) color = 1.0;
        } else if (n > 0.4) {
          if (dist < 0.2) color = 1.0;
        } else if (n > 0.3) {
          if (abs(centerPos.y) < 0.1) color = 1.0;
        }

        float mask = smoothstep(0.0, 0.8, st.y + sin(st.x * 3.0 + u_time * 0.5) * 0.2);
        color *= mask;

        gl_FragColor = vec4(vec3(0.0), color);
      }
    `

    function loadShader(
      gl: WebGLRenderingContext,
      type: number,
      source: string
    ): WebGLShader | null {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    function initShaderProgram(
      gl: WebGLRenderingContext,
      vsSource: string,
      fsSource: string
    ): WebGLProgram | null {
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource)
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource)
      if (!vertexShader || !fragmentShader) return null
      const shaderProgram = gl.createProgram()
      if (!shaderProgram) return null
      gl.attachShader(shaderProgram, vertexShader)
      gl.attachShader(shaderProgram, fragmentShader)
      gl.linkProgram(shaderProgram)
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error(
          'Shader program failed to link:',
          gl.getProgramInfoLog(shaderProgram)
        )
        return null
      }
      return shaderProgram
    }

    const shaderProgram = initShaderProgram(glCtx, vsSource, fsSource)
    if (!shaderProgram) return

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: glCtx.getAttribLocation(
          shaderProgram,
          'aVertexPosition'
        ),
      },
      uniformLocations: {
        resolution: glCtx.getUniformLocation(shaderProgram, 'u_resolution'),
        time: glCtx.getUniformLocation(shaderProgram, 'u_time'),
      },
    }

    const positionBuffer = glCtx.createBuffer()
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, positionBuffer)
    const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]
    glCtx.bufferData(
      glCtx.ARRAY_BUFFER,
      new Float32Array(positions),
      glCtx.STATIC_DRAW
    )

    function resize() {
      canvasEl.width = window.innerWidth
      canvasEl.height = window.innerHeight
      glCtx.viewport(0, 0, canvasEl.width, canvasEl.height)
    }
    window.addEventListener('resize', resize)
    resize()

    let animId: number
    function render() {
      glCtx.clearColor(0.0, 0.0, 0.0, 0.0)
      glCtx.clear(glCtx.COLOR_BUFFER_BIT)

      glCtx.bindBuffer(glCtx.ARRAY_BUFFER, positionBuffer)
      glCtx.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2,
        glCtx.FLOAT,
        false,
        0,
        0
      )
      glCtx.enableVertexAttribArray(programInfo.attribLocations.vertexPosition)
      glCtx.useProgram(programInfo.program)

      glCtx.enable(glCtx.BLEND)
      glCtx.blendFunc(glCtx.SRC_ALPHA, glCtx.ONE_MINUS_SRC_ALPHA)

      glCtx.uniform2f(
        programInfo.uniformLocations.resolution,
        glCtx.canvas.width,
        glCtx.canvas.height
      )
      glCtx.uniform1f(
        programInfo.uniformLocations.time,
        (Date.now() - startTimeRef.current) / 1000.0
      )

      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4)
      animId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [canvasRef])
}
