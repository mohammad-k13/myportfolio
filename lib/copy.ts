export type Project = {
  name: string;
  desc: string;
  tags: string;
  href: string;
  sourceHref: string;
  techs: string[];
  about: string;
  features: string[];
};

export type Blog = {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
};

export type Lang = 'en' | 'fa';

export const DEFAULT_LANG: Lang = 'en';

export type Copy = {
  navProjects: string; navBlogs: string; navContact: string;
  whoami: string;
  heroDesc: string;
  ctaContact: string; ctaResume: string;
  stackLabel: string;
  projectsLabel: string; viewAll: string; detailsLabel: string;
  writingLabel: string;
  activityLabel: string; activityPlaceholder: string;
  footerCredit: string; emailLine: string;
  connectTitle: string; connectDesc: string;
  backLabel: string; viewSourceLabel: string; techUsedLabel: string; aboutLabel: string; featuresLabel: string;
  projects: Project[];
  blogs: Blog[];
};

export const COPY: Record<Lang, Copy> = {
  en: {
    navProjects: 'projects', navBlogs: 'blogs', navContact: 'contact',
    whoami: 'whoami',
    heroDesc: '[ Full-stack developer — placeholder for a one-line role/positioning statement. Replace with the pitch you want visitors to read first. ]',
    ctaContact: 'get in touch', ctaResume: 'resume →',
    stackLabel: 'stack',
    projectsLabel: 'projects', viewAll: 'view all →', detailsLabel: 'details →',
    writingLabel: 'writing',
    activityLabel: 'activity', activityPlaceholder: '[ github contribution graph placeholder ]',
    footerCredit: 'designed & built by Shitanshu Kumar',
    emailLine: 'hello@example.com →',
    connectTitle: "Let's connect",
    connectDesc: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, feel free to drop a message!",
    backLabel: '← back', viewSourceLabel: 'View Source', techUsedLabel: 'Technologies Used', aboutLabel: 'About the Project', featuresLabel: 'Key Features',
    projects: [
      { name: '[Project One]', desc: '[One or two sentences describing what this project does and why it matters.]', tags: '[tag] · [tag] · [tag]', href: '#', sourceHref: '#', techs: ['[Tech]', '[Tech]', '[Tech]'], about: '[A longer paragraph describing what the project does, the problem it solves, and how it works.]', features: ['[Feature one]', '[Feature two]', '[Feature three]', '[Feature four]'] },
      { name: '[Project Two]', desc: '[One or two sentences describing what this project does and why it matters.]', tags: '[tag] · [tag] · [tag]', href: '#', sourceHref: '#', techs: ['[Tech]', '[Tech]', '[Tech]'], about: '[A longer paragraph describing what the project does, the problem it solves, and how it works.]', features: ['[Feature one]', '[Feature two]', '[Feature three]', '[Feature four]'] },
      { name: '[Project Three]', desc: '[One or two sentences describing what this project does and why it matters.]', tags: '[tag] · [tag] · [tag]', href: '#', sourceHref: '#', techs: ['[Tech]', '[Tech]', '[Tech]'], about: '[A longer paragraph describing what the project does, the problem it solves, and how it works.]', features: ['[Feature one]', '[Feature two]', '[Feature three]', '[Feature four]'] },
    ],
    blogs: [
      { title: '[Blog post title]', date: '[Mon YYYY]', readTime: '[N min read]', excerpt: '[One-line summary of the post.]', href: '#' },
      { title: '[Blog post title]', date: '[Mon YYYY]', readTime: '[N min read]', excerpt: '[One-line summary of the post.]', href: '#' },
    ],
  },
  fa: {
    navProjects: 'پروژه‌ها', navBlogs: 'وبلاگ', navContact: 'تماس',
    whoami: 'کیستم',
    heroDesc: '[ توسعه‌دهنده فول‌استک — جای‌نگه‌دار برای یک جمله معرفی و جایگاه شما. با متنی که می‌خواهید بازدیدکنندگان اول بخوانند جایگزین کنید. ]',
    ctaContact: 'در تماس باشید', ctaResume: 'رزومه ←',
    stackLabel: 'مهارت‌ها',
    projectsLabel: 'پروژه‌ها', viewAll: 'مشاهده همه ←', detailsLabel: 'جزئیات ←',
    writingLabel: 'نوشته‌ها',
    activityLabel: 'فعالیت', activityPlaceholder: '[ جای‌نگه‌دار نمودار فعالیت گیت‌هاب ]',
    footerCredit: 'طراحی و توسعه توسط شیتانشو کومار',
    emailLine: 'hello@example.com ←',
    connectTitle: 'بیایید در ارتباط باشیم',
    connectDesc: 'همیشه برای صحبت درباره‌ی پروژه‌های جدید، ایده‌های خلاقانه یا همکاری در کنار شما آماده‌ام. اگر سوالی دارید یا فقط می‌خواهید سلام کنید، خوشحال می‌شوم پیامی برایم بفرستید!',
    backLabel: '→ بازگشت', viewSourceLabel: 'مشاهده کد', techUsedLabel: 'فناوری‌های استفاده‌شده', aboutLabel: 'درباره پروژه', featuresLabel: 'ویژگی‌های کلیدی',
    projects: [
      { name: '[پروژه یک]', desc: '[یکی دو جمله درباره‌ی این پروژه و اهمیت آن.]', tags: '[برچسب] · [برچسب] · [برچسب]', href: '#', sourceHref: '#', techs: ['[فناوری]', '[فناوری]', '[فناوری]'], about: '[یک پاراگراف طولانی‌تر درباره‌ی کاری که این پروژه انجام می‌دهد، مشکلی که حل می‌کند و نحوه‌ی کارکرد آن.]', features: ['[ویژگی یک]', '[ویژگی دو]', '[ویژگی سه]', '[ویژگی چهار]'] },
      { name: '[پروژه دو]', desc: '[یکی دو جمله درباره‌ی این پروژه و اهمیت آن.]', tags: '[برچسب] · [برچسب] · [برچسب]', href: '#', sourceHref: '#', techs: ['[فناوری]', '[فناوری]', '[فناوری]'], about: '[یک پاراگراف طولانی‌تر درباره‌ی کاری که این پروژه انجام می‌دهد، مشکلی که حل می‌کند و نحوه‌ی کارکرد آن.]', features: ['[ویژگی یک]', '[ویژگی دو]', '[ویژگی سه]', '[ویژگی چهار]'] },
      { name: '[پروژه سه]', desc: '[یکی دو جمله درباره‌ی این پروژه و اهمیت آن.]', tags: '[برچسب] · [برچسب] · [برچسب]', href: '#', sourceHref: '#', techs: ['[فناوری]', '[فناوری]', '[فناوری]'], about: '[یک پاراگراف طولانی‌تر درباره‌ی کاری که این پروژه انجام می‌دهد، مشکلی که حل می‌کند و نحوه‌ی کارکرد آن.]', features: ['[ویژگی یک]', '[ویژگی دو]', '[ویژگی سه]', '[ویژگی چهار]'] },
    ],
    blogs: [
      { title: '[عنوان پست وبلاگ]', date: '[ماه سال]', readTime: '[N دقیقه مطالعه]', excerpt: '[خلاصه‌ی یک‌خطی پست.]', href: '#' },
      { title: '[عنوان پست وبلاگ]', date: '[ماه سال]', readTime: '[N دقیقه مطالعه]', excerpt: '[خلاصه‌ی یک‌خطی پست.]', href: '#' },
    ],
  },
};

export const TECH_STACK = ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Vite', 'Git', 'AWS'];

export const CONNECT_LINKS = [
  { label: 'Github', mono: 'G', color: '#333', href: '#' },
  { label: 'X', mono: 'X', color: '#000', href: '#' },
  { label: 'Linkedin', mono: 'in', color: '#0a66c2', href: '#' },
  { label: 'Gmail', mono: '@', color: '#c53929', href: 'mailto:hello@example.com' },
  { label: 'Leetcode', mono: 'LC', color: '#b8860b', href: '#' },
];
