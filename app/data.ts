type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'personnel - aarch:ve',
    description:
      'creation & transmission héritage numérique',
    link: 'https://aarchive.xyz/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'freelance - Dyleo',
    description: 'design landing page + dev frontend + backoffice',
    link: 'https://dyleopizza.fr/',
    video:
      '/blog/assets/000868.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'eïdethic',
    title: 'foundateur & CTO',
    start: 'nov. 2023',
    end: 'aujourd\'hui',
    link: 'https://linkedin.com/in/melvin-eidethic',
    id: 'work1',
  },
  {
    company: 'Forj',
    title: 'developpeur full stack',
    start: 'nov. 2023',
    end: 'aujourd\'hui',
    link: 'https://linkedin.com/in/melvin-eidethic',
    id: 'work2',
  },
  {
    company: 'Mokovel',
    title: 'consultant numérique',
    start: 'juin 2023',
    end: 'aout 2023',
    link: 'https://linkedin.com/in/melvin-eidethic',
    id: 'work3',
  },
  {
    company: 'GMX',
    title: 'chargé de projet',
    start: 'sept. 2021',
    end: 'sept. 2022',
    link: 'https://linkedin.com/in/melvin-eidethic',
    id: 'work4',
  },
  {
    company: 'Big Youth',
    title: 'chargé de projet',
    start: 'sept. 2019',
    end: 'sept. 2022',
    link: 'https://linkedin.com/in/melvin-eidethic',
    id: 'work5',
  },
  {
    company: 'Colegram',
    title: 'responsable produit',
    start: 'mars 2021',
    end: 'sept. 2021',
    link: 'https://linkedin.com/in/melvin-eidethic',
    id: 'work6',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/un3trois7',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/un3trois7',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/melvin-eidethic',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/melvinowski',
  },
]

export const EMAIL = 'contact@mel-v.in'
