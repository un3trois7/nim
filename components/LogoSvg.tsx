import type { ComponentPropsWithoutRef } from "react";

export type LogoSvgProps = ComponentPropsWithoutRef<"svg"> & { size?: number };

export const LogoSvg = ({ size = 32, ...props }: LogoSvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.0095 54.3709L0 30.593L26.5738 71.3321L32.0095 54.3709Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.2526 64.2401L13.1781 88.0194L59.3462 74.7392L45.2526 64.2401Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.4518 54.4394L70.6338 92.9871L72.5973 43.9671L58.4518 54.4394Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.4232 38.5008L93 38.5025L48.071 21.6569L53.4232 38.5008Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.4055 1.6195e-06L19.5687 38.5052L37.0646 38.4869L49.4055 1.6195e-06Z"
        fill="currentColor"
      />
    </svg>
  );
};
