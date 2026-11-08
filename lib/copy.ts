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

export const PROFILE = {
  name: 'Mohammad Keshavarz',
  handle: 'mohammad',
  email: 'mohammad.helloworld@gmail.com',
  github: 'https://github.com/mohammad-k13',
  linkedin: 'https://www.linkedin.com/in/mohammad-k13',
  npm: 'https://www.npmjs.com/~mk13',
};

export const COPY: Record<Lang, Copy> = {
  en: {
    navProjects: 'projects', navBlogs: 'blogs', navContact: 'contact',
    whoami: 'whoami',
    heroDesc: 'Software developer building products in TypeScript, with a focus on giving AI systems the ability to act — from MCP servers to AI agents. Based in Isfahan, open to remote work.',
    ctaContact: 'get in touch', ctaResume: 'linkedin →',
    stackLabel: 'stack',
    projectsLabel: 'projects', viewAll: 'view all →', detailsLabel: 'details →',
    writingLabel: 'writing',
    activityLabel: 'activity', activityPlaceholder: '',
    footerCredit: 'designed & built by Mohammad Keshavarz',
    emailLine: 'mohammad.helloworld@gmail.com →',
    connectTitle: "Let's connect",
    connectDesc: "I'm open to remote roles and interesting projects, especially around TypeScript, Next.js, MCP and AI agents. Whether you have a question or just want to say hi, feel free to drop a message!",
    backLabel: '← back', viewSourceLabel: 'View on GitHub', techUsedLabel: 'Technologies Used', aboutLabel: 'About the Project', featuresLabel: 'Key Features',
    projects: [
      {
        name: 'FormaKit',
        desc: 'Open-source form toolkit published on npm: generates forms with custom UI and validation from JSON Schema.',
        tags: 'open source · npm · json schema',
        href: PROFILE.npm, sourceHref: PROFILE.github,
        techs: ['TypeScript', 'React', 'JSON Schema', 'Ant Design'],
        about: 'FormaKit builds forms from a JSON Schema, so the UI and the validation rules come from one definition. It is published on npm and comes with FormaKit Panel and an Ant Design adaptor (FormaKit Ant Adaptor).',
        features: ['Forms and validation generated from JSON Schema', 'Custom UI through adaptors', 'Ant Design adaptor (FormaKit Ant Adaptor)', 'FormaKit Panel'],
      },
      {
        name: 'Codal-MCP',
        desc: 'Open-source MCP server that lets AI agents work with data through the Model Context Protocol.',
        tags: 'mcp · ai agents · typescript',
        href: PROFILE.github, sourceHref: PROFILE.github,
        techs: ['TypeScript', 'MCP', 'Node.js'],
        about: 'An open-source MCP server written in TypeScript, so AI agents can use it as a tool.',
        features: ['Model Context Protocol server', 'Usable from any MCP-compatible AI agent', 'Open source'],
      },
      {
        name: 'TSETMC-History-MCP',
        desc: 'Open-source MCP server that lets AI agents query Tehran Stock Exchange (TSETMC) historical data.',
        tags: 'mcp · finance data · typescript',
        href: PROFILE.github, sourceHref: PROFILE.github,
        techs: ['TypeScript', 'MCP', 'Node.js'],
        about: 'An MCP server that exposes Tehran Stock Exchange historical data to AI agents.',
        features: ['Model Context Protocol server', 'Historical market data for AI agents', 'Open source'],
      },
      {
        name: 'Smart Organizational Portal (BPMS)',
        desc: 'A business-process management portal connected via MCP, so management processes can be understood and executed by AI. In production use.',
        tags: 'bpms · mcp · next.js · private',
        href: '#', sourceHref: PROFILE.github,
        techs: ['Next.js', 'TypeScript', 'SWR', 'Axios'],
        about: 'A private side project in production use. It has a unified data-fetching layer (SWR + Axios interceptors with caching), a Next.js BFF, a feature-based code structure, and a permission system down to the smallest operation.',
        features: ['Unified data-fetching layer with caching', 'Next.js backend-for-frontend (BFF)', 'Feature-based architecture', 'Fine-grained permission system', 'Connected to AI through MCP'],
      },
    ],
    blogs: [],
  },
  fa: {
    navProjects: 'پروژه‌ها', navBlogs: 'وبلاگ', navContact: 'تماس',
    whoami: 'کیستم',
    heroDesc: 'توسعه‌دهنده نرم‌افزار؛ ساخت محصول با TypeScript و تمرکز روی این‌که سیستم‌های هوش مصنوعی بتوانند عمل کنند — از سرورهای MCP تا ایجنت‌های هوش مصنوعی. ساکن اصفهان و آماده‌ی کار دورکار.',
    ctaContact: 'در تماس باشید', ctaResume: 'لینکدین ←',
    stackLabel: 'مهارت‌ها',
    projectsLabel: 'پروژه‌ها', viewAll: 'مشاهده همه ←', detailsLabel: 'جزئیات ←',
    writingLabel: 'نوشته‌ها',
    activityLabel: 'فعالیت', activityPlaceholder: '',
    footerCredit: 'طراحی و توسعه توسط محمد کشاورز',
    emailLine: 'mohammad.helloworld@gmail.com ←',
    connectTitle: 'بیایید در ارتباط باشیم',
    connectDesc: 'برای همکاری دورکار و پروژه‌های جذاب، به‌ویژه حول TypeScript، Next.js، MCP و ایجنت‌های هوش مصنوعی آماده‌ام. اگر سوالی دارید یا فقط می‌خواهید سلام کنید، خوشحال می‌شوم پیامی برایم بفرستید!',
    backLabel: '→ بازگشت', viewSourceLabel: 'مشاهده در گیت‌هاب', techUsedLabel: 'فناوری‌های استفاده‌شده', aboutLabel: 'درباره پروژه', featuresLabel: 'ویژگی‌های کلیدی',
    projects: [
      {
        name: 'FormaKit',
        desc: 'ابزار متن‌باز ساخت فرم روی npm: فرم با ظاهر دلخواه و اعتبارسنجی را از روی JSON Schema می‌سازد.',
        tags: 'متن‌باز · npm · json schema',
        href: PROFILE.npm, sourceHref: PROFILE.github,
        techs: ['TypeScript', 'React', 'JSON Schema', 'Ant Design'],
        about: 'FormaKit فرم‌ها را از روی JSON Schema می‌سازد تا ظاهر و قوانین اعتبارسنجی از یک تعریف واحد بیایند. روی npm منتشر شده و FormaKit Panel و یک آداپتور Ant Design هم دارد.',
        features: ['ساخت فرم و اعتبارسنجی از JSON Schema', 'ظاهر دلخواه با آداپتورها', 'آداپتور Ant Design', 'FormaKit Panel'],
      },
      {
        name: 'Codal-MCP',
        desc: 'سرور متن‌باز MCP که به ایجنت‌های هوش مصنوعی اجازه می‌دهد از طریق Model Context Protocol با داده کار کنند.',
        tags: 'mcp · ایجنت هوش مصنوعی · typescript',
        href: PROFILE.github, sourceHref: PROFILE.github,
        techs: ['TypeScript', 'MCP', 'Node.js'],
        about: 'یک سرور MCP متن‌باز با TypeScript که ایجنت‌های هوش مصنوعی می‌توانند به‌عنوان ابزار از آن استفاده کنند.',
        features: ['سرور Model Context Protocol', 'قابل استفاده با هر ایجنت سازگار با MCP', 'متن‌باز'],
      },
      {
        name: 'TSETMC-History-MCP',
        desc: 'سرور متن‌باز MCP برای پرسش ایجنت‌های هوش مصنوعی از داده‌های تاریخی بورس تهران (TSETMC).',
        tags: 'mcp · داده مالی · typescript',
        href: PROFILE.github, sourceHref: PROFILE.github,
        techs: ['TypeScript', 'MCP', 'Node.js'],
        about: 'یک سرور MCP که داده‌های تاریخی بورس تهران را در اختیار ایجنت‌های هوش مصنوعی می‌گذارد.',
        features: ['سرور Model Context Protocol', 'داده‌ی تاریخی بازار برای ایجنت‌ها', 'متن‌باز'],
      },
      {
        name: 'پرتال سازمانی هوشمند (BPMS)',
        desc: 'پرتال مدیریت فرایندهای کسب‌وکار متصل به MCP تا فرایندهای مدیریتی برای هوش مصنوعی قابل فهم و اجرا باشند. در حال استفاده‌ی واقعی.',
        tags: 'bpms · mcp · next.js · خصوصی',
        href: '#', sourceHref: PROFILE.github,
        techs: ['Next.js', 'TypeScript', 'SWR', 'Axios'],
        about: 'یک پروژه‌ی جانبی خصوصی که در حال استفاده‌ی واقعی است. لایه‌ی یکپارچه‌ی دریافت داده (SWR و اینترسپتورهای Axios با کش)، BFF با Next.js، ساختار feature-based و سیستم دسترسی تا کوچک‌ترین عملیات دارد.',
        features: ['لایه‌ی یکپارچه‌ی دریافت داده همراه با کش', 'BFF با Next.js', 'معماری feature-based', 'سیستم دسترسی دقیق', 'اتصال به هوش مصنوعی از طریق MCP'],
      },
    ],
    blogs: [],
  },
};

export const TECH_STACK = ['TypeScript', 'React', 'Next.js', 'Node.js', 'MCP', 'AI Agents', 'Ant Design', 'JSON Schema', 'REST APIs', 'Git'];

export const CONNECT_LINKS = [
  { label: 'Github', mono: 'G', color: '#333', href: PROFILE.github },
  { label: 'Linkedin', mono: 'in', color: '#0a66c2', href: PROFILE.linkedin },
  { label: 'npm', mono: 'n', color: '#cb3837', href: PROFILE.npm },
  { label: 'Gmail', mono: '@', color: '#c53929', href: `mailto:${PROFILE.email}` },
];
