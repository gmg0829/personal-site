export type Discipline = 'archives' | 'type' | 'ui' | 'city'

export interface Project {
  id: string
  name: string
  latin: string
  discipline: Discipline
  disciplineLabel: string
  disciplineLatin: string
  year: string
  credit: string
  note: string
  noteLatin: string
}

export interface Essay {
  id: string
  title: string
  titleLatin: string
  excerpt: string
  excerptLatin: string
  date: string
}

export interface SiteContent {
  person: {
    name: string
    latin: string
    role: string
    roleLatin: string
    lead: string
    leadLatin: string
    email: string
    phone: string
    phoneHref: string
    city: string
    cityLatin: string
  }
  facts: { big: string; note: string }[]
  projects: Project[]
  essays: Essay[]
  letter: { zh: string[]; en: string[] }
  hours: { day: string; dayLatin: string; time: string }[]
  links: { label: string; href: string }[]
}

export const siteContent: SiteContent = {
  person: {
    name: '沈砚',
    latin: 'Yan Lin',
    role: '设计工程师',
    roleLatin: 'Design engineer',
    lead: '设计工程师：界面、排版与小工具。',
    leadLatin: 'Design engineer: interfaces, type and small tools.',
    email: 'yanlin@example.com',
    phone: '+86 138 0000 0000',
    phoneHref: 'tel:+8613800000000',
    city: '上海，中国',
    cityLatin: 'Shanghai, China. Remote and on-site',
  },
  facts: [
    { big: '上海', note: 'Shanghai: 工作与生活 Based and working here' },
    { big: '十年', note: 'Ten years: 自 2014 年起 Designing since 2014' },
    { big: '中英', note: 'Bilingual: 工作与写作 Working and writing in both' },
    { big: '开放', note: 'Open: 2026 秋冬可接项目 Taking projects from autumn 2026' },
  ],
  projects: [
    {
      id: 'p1', name: '折叠目录', latin: 'Folding Index', discipline: 'archives',
      disciplineLabel: '档案与索引', disciplineLatin: 'Archives & index',
      year: '2024', credit: '独立开发 Solo build',
      note: '给档案室做的一套目录：标签能拖、顺序能换，一百个文件也能一眼看完。',
      noteLatin: 'A filing index for an archive: draggable tags, reorderable rows, a hundred files at a glance.',
    },
    {
      id: 'p2', name: '活字', latin: 'Typeset', discipline: 'type',
      disciplineLabel: '排版工具', disciplineLatin: 'Type tools',
      year: '2025', credit: '与人合作 Built with someone',
      note: '一个中英并排的排版器，段落对齐和标点挤压都交给它。',
      noteLatin: 'A bilingual typesetter: side-by-side setting, punctuation kerning included.',
    },
    {
      id: 'p3', name: '纸面', latin: 'Paper UI', discipline: 'ui',
      disciplineLabel: '界面系统', disciplineLatin: 'Interface systems',
      year: '2023', credit: '设计 + 开发 Design & build',
      note: '给阅读类应用做的一套界面规范，从版心到行距都写死了。',
      noteLatin: 'An interface system for reading apps, from margins to leading.',
    },
    {
      id: 'p4', name: '墨盒', latin: 'Ink Kit', discipline: 'ui',
      disciplineLabel: '界面系统', disciplineLatin: 'Interface systems',
      year: '2024', credit: '设计 + 开发 Design & build',
      note: '一套以纸墨为隐喻的组件库，颜色只留三种，其余靠留白。',
      noteLatin: 'A component library built on paper and ink: three colours, the rest is space.',
    },
    {
      id: 'p5', name: '步行', latin: 'Pecha', discipline: 'city',
      disciplineLabel: '城市记录', disciplineLatin: 'City records',
      year: '2022', credit: '独立开发 Solo build',
      note: '记录走过的街巷，地图上只留脚印，不留轨迹。',
      noteLatin: 'A log of the streets walked: footprints on the map, never a trail.',
    },
    {
      id: 'p6', name: '标尺', latin: 'Ruler', discipline: 'type',
      disciplineLabel: '排版工具', disciplineLatin: 'Type tools',
      year: '2025', credit: '独立开发 Solo build',
      note: '在浏览器里量间距的对齐工具，所见即所得，量完就带走。',
      noteLatin: 'A spacing ruler that measures alignment in the browser, and takes the numbers with it.',
    },
    {
      id: 'p7', name: '归档', latin: 'Archive', discipline: 'archives',
      disciplineLabel: '档案与索引', disciplineLatin: 'Archives & index',
      year: '2023', credit: '自由职业 Freelance',
      note: '给出版社做的资料归档系统，把三十年的旧刊编目入库。',
      noteLatin: 'A catalogue for a publisher: thirty years of journals, indexed and shelved.',
    },
    {
      id: 'p8', name: '素纸', latin: 'Blank', discipline: 'ui',
      disciplineLabel: '界面系统', disciplineLatin: 'Interface systems',
      year: '2024', credit: '设计 Design',
      note: '一个只管写的编辑器，其余功能都收进抽屉，需要才拉出来。',
      noteLatin: 'An editor that only writes; everything else lives in a drawer until wanted.',
    },
    {
      id: 'p9', name: '折页', latin: 'Fold', discipline: 'type',
      disciplineLabel: '排版工具', disciplineLatin: 'Type tools',
      year: '2021', credit: '与人合作 Built with someone',
      note: '给画册做的折页排版工具，跨页图像自己配准。',
      noteLatin: 'A fold-out layout tool for art books; the spreads align themselves.',
    },
    {
      id: 'p10', name: '灯箱', latin: 'Lightbox', discipline: 'city',
      disciplineLabel: '城市记录', disciplineLatin: 'City records',
      year: '2023', credit: '设计 + 开发 Design & build',
      note: '给一位街头摄影师做的作品集，放大时暗部不丢。',
      noteLatin: "A photographer's portfolio that keeps the shadows when you zoom in.",
    },
    {
      id: 'p11', name: '刻痕', latin: 'Notch', discipline: 'ui',
      disciplineLabel: '界面系统', disciplineLatin: 'Interface systems',
      year: '2025', credit: '独立开发 Solo build',
      note: '在页面上画一条线，就能把那个问题原样发给对方。',
      noteLatin: 'Mark a line on a page and send the problem exactly as it looks.',
    },
    {
      id: 'p12', name: '留白', latin: 'Margin', discipline: 'type',
      disciplineLabel: '排版工具', disciplineLatin: 'Type tools',
      year: '2022', credit: '独立开发 Solo build',
      note: '量行距、栏距和页边的小工具，只有一页，够了。',
      noteLatin: 'A one-page tool for measuring leading, columns and margins.',
    },
    {
      id: 'p13', name: '抄本', latin: 'Copybook', discipline: 'archives',
      disciplineLabel: '档案与索引', disciplineLatin: 'Archives & index',
      year: '2023', credit: '自由职业 Freelance',
      note: '给一所学校做的借书登记册，一页一行，谁借的、什么时候还。',
      noteLatin: 'A lending ledger for a school: one line per book, who has it and until when.',
    },
    {
      id: 'p14', name: '铅字', latin: 'Lead', discipline: 'type',
      disciplineLabel: '排版工具', disciplineLatin: 'Type tools',
      year: '2020', credit: '独立开发 Solo build',
      note: '把老式字模的排版规则搬上屏幕：字身、字面、空铅，一样一样算给你看。',
      noteLatin: 'Old metal type rules, on screen: body, face and sidebearings, counted out for you.',
    },
    {
      id: 'p15', name: '窗口', latin: 'Window', discipline: 'ui',
      disciplineLabel: '界面系统', disciplineLatin: 'Interface systems',
      year: '2022', credit: '设计 + 开发 Design & build',
      note: '一个让长表格也能看懂的表格组件：横着看是表，竖着看是卡片。',
      noteLatin: 'A table component that stays readable: across it is a table, down it is cards.',
    },
    {
      id: 'p16', name: '步幅', latin: 'Stride', discipline: 'city',
      disciplineLabel: '城市记录', disciplineLatin: 'City records',
      year: '2024', credit: '独立开发 Solo build',
      note: '记录每天走了多少步，画成一行一行的小柱子；一年之后，城市有了自己的字。',
      noteLatin: 'A year of daily steps drawn as small bars; after a year the city has a handwriting.',
    },
  ],
  essays: [
    {
      id: 'e1', title: '把界面当成纸', titleLatin: 'Treat the interface like paper',
      excerpt: '先把版心定下来，再定字号，最后才动颜色；顺序错了，后面全是白做。',
      excerptLatin: 'Margins first, type second, colour last. In the wrong order the rest is wasted.',
      date: '2026-08-14',
    },
    {
      id: 'e2', title: '索引比网格更早到', titleLatin: 'The index came before the grid',
      excerpt: '目录页比网格更早发明，因为人先要知道东西在哪，才谈得上摆得好不好。',
      excerptLatin: 'The table of contents came before the grid: people first ask where things are.',
      date: '2026-05-02',
    },
    {
      id: 'e3', title: '标签的两副面孔', titleLatin: 'Two faces of a tab',
      excerpt: '文件夹的标签既是分类，也是给下一个人看的说明；两者打架时，先说明后分类。',
      excerptLatin: 'A folder tab is both a category and a note to whoever opens it next.',
      date: '2026-03-21',
    },
    {
      id: 'e4', title: '中英并排', titleLatin: 'Two languages, side by side',
      excerpt: '并排排版比逐段翻译难，但更像一份真的文件：文件从来不是翻译出来的。',
      excerptLatin: 'Setting two languages side by side is harder than translating, and reads more like a real document.',
      date: '2026-01-09',
    },
    {
      id: 'e5', title: '做工具的十年', titleLatin: 'Ten years of making tools',
      excerpt: '工具会旧，习惯不会。所以做工具的人真正在维护的，是别人的习惯。',
      excerptLatin: 'Tools get old; habits do not. What a tool-maker really maintains is somebody else’s habit.',
      date: '2025-11-30',
    },
    {
      id: 'e6', title: '关于安静', titleLatin: 'On quiet interfaces',
      excerpt: '安静的界面不是没有反馈，而是反馈从不抢戏；该出声的时候，它出声。',
      excerptLatin: 'A quiet interface is not one without feedback, but one where feedback never steals the scene.',
      date: '2025-09-18',
    },
  ],
  letter: {
    zh: [
      '我叫沈砚，做界面和排版，也做些小工具。大部分时间在两种语言之间来回：中文的句子短而直接，英文的句子长、要拐弯。两种都得排好，这大概就是我这份工作的全部。',
      '我从 2014 年开始独立做事，做过出版系统、品牌站，也做过给团队用的内部工具。喜欢的工作有两点：东西真的被人用，以及它十年后还能修。',
      '现在大部分时间在一个自写的排版工具上，想让中英并排这件事简单一点。',
      '如果你手上有一个说不清楚、但总觉得哪里不对的界面问题，欢迎写信给我。',
    ],
    en: [
      'I’m Yan Lin. I design interfaces and set type; I also build small tools. Most of the work sits between two languages: Chinese sentences are short and direct, English ones run long and turn. Both have to be set well, and that is most of the job.',
      'I have worked independently since 2014: publishing systems, brand sites, internal tools for teams. Two things I like about the work: that people really use it, and that it can still be repaired in ten years.',
      'Most of my time now goes into a typesetting tool of my own, trying to make side-by-side bilingual setting a little less painful.',
      'If you have an interface problem you cannot quite name, write to me.',
    ],
  },
  hours: [
    { day: '工作日', dayLatin: 'Weekdays', time: '09:00 – 18:00' },
    { day: '周六', dayLatin: 'Saturday', time: '10:00 – 16:00' },
    { day: '周日', dayLatin: 'Sunday', time: '不见客 Off' },
  ],
  links: [
    { label: 'yanlin@example.com', href: 'mailto:yanlin@example.com' },
    { label: '+86 138 0000 0000', href: 'tel:+8613800000000' },
    { label: '上海 Shanghai', href: '#top' },
    { label: 'github.com/yanlin', href: '#top' },
  ],
}
