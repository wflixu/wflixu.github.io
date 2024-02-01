type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  postPerPage: number;
};

export const SITE: Site = {
  website: 'https://wflixu.github.io',
  author: 'Luke',
  desc: 'Record some issues encountered in daily work.',
  title: "Luke'S BLOG",
  postPerPage: 6,
};

export const LOCALE = ['zh-CN'];

type SocialObjects = {
  name: string;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/wflixu/',
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'Mail',
    href: 'mailto:wflixu@88.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
