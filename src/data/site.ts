export type Discipline = 'service' | 'infra' | 'tooling' | 'data'

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
    name: '高明岗',
    latin: 'Gao Minggang',
    role: '软件工程师',
    roleLatin: 'Software engineer',
    email: 'minggang@example.com',
    phone: '+86 138 0000 0000',
    phoneHref: 'tel:+8613800000000',
    city: '上海，中国',
    cityLatin: 'Shanghai, China. Remote and on-site',
  },
  facts: [
    { big: '上海', note: 'Shanghai: 工作与生活 Based and working here' },
    { big: '十年', note: 'Ten years: 自 2016 年起 Writing code since 2016' },
    { big: '中英', note: 'Bilingual: 工作与写作 Working and writing in both' },
    { big: '开放', note: 'Open: 2026 秋冬可接项目 Taking projects from autumn 2026' },
  ],
  projects: [
    {
      id: 'p1', name: '归档服务', latin: 'Archive Service', discipline: 'service',
      disciplineLabel: '后端服务', disciplineLatin: 'Back-end services',
      year: '2024', credit: '独立开发 Solo build',
      note: '一个把文档按标签归档的服务：写入按规则路由，检索走索引。',
      noteLatin: 'A service that files documents by tag: writes are routed by rules, reads go through an index.',
    },
    {
      id: 'p2', name: '排字', latin: 'Typeset', discipline: 'tooling',
      disciplineLabel: '开发工具', disciplineLatin: 'Developer tools',
      year: '2025', credit: '与人合作 Built with someone',
      note: '一个中英并排的排版引擎，标点挤压与基线对齐都算在里面。',
      noteLatin: 'A bilingual typesetting engine: punctuation kerning and baseline alignment included.',
    },
    {
      id: 'p3', name: '网关', latin: 'Gateway', discipline: 'infra',
      disciplineLabel: '基础设施', disciplineLatin: 'Infrastructure',
      year: '2023', credit: '设计 + 开发 Design & build',
      note: '边缘网关：限流、灰度和路由，收敛到同一份配置里。',
      noteLatin: 'An edge gateway: rate limits, staged rollouts and routing, all from one config.',
    },
    {
      id: 'p4', name: '索引器', latin: 'Indexer', discipline: 'data',
      disciplineLabel: '数据与存储', disciplineLatin: 'Data & storage',
      year: '2024', credit: '独立开发 Solo build',
      note: '增量索引：只重算变过的部分，一百万份文档几秒钟跟得上。',
      noteLatin: 'An incremental index: only what changed is recomputed, a million documents in seconds.',
    },
    {
      id: 'p5', name: '流水线', latin: 'Pipeline', discipline: 'infra',
      disciplineLabel: '基础设施', disciplineLatin: 'Infrastructure',
      year: '2022', credit: '独立开发 Solo build',
      note: 'CI 流水线配置成代码：构建、测试、发布都写在一个文件里。',
      noteLatin: 'CI as code: build, test and release all written in one file.',
    },
    {
      id: 'p6', name: '表格', latin: 'Table', discipline: 'tooling',
      disciplineLabel: '开发工具', disciplineLatin: 'Developer tools',
      year: '2023', credit: '设计 + 开发 Design & build',
      note: '给内部系统用的数据表格组件，一万行也不卡。',
      noteLatin: 'A data table for internal tools that stays smooth at ten thousand rows.',
    },
    {
      id: 'p7', name: '队列', latin: 'Queue', discipline: 'data',
      disciplineLabel: '数据与存储', disciplineLatin: 'Data & storage',
      year: '2022', credit: '独立开发 Solo build',
      note: '带背压的消息队列：慢消费者不会把生产者一起拖垮。',
      noteLatin: 'A message queue with backpressure: slow consumers never sink the producers.',
    },
    {
      id: 'p8', name: '审计', latin: 'Audit', discipline: 'service',
      disciplineLabel: '后端服务', disciplineLatin: 'Back-end services',
      year: '2023', credit: '自由职业 Freelance',
      note: '给一家金融客户做的操作审计：谁、什么时候、动了哪条数据。',
      noteLatin: 'An audit trail for a fintech client: who changed which record, and when.',
    },
    {
      id: 'p9', name: '迁移', latin: 'Migrate', discipline: 'infra',
      disciplineLabel: '基础设施', disciplineLatin: 'Infrastructure',
      year: '2021', credit: '与人合作 Built with someone',
      note: '数据库迁移工具：先影子表，再切流，最后还能退回去。',
      noteLatin: 'A migration tool: shadow table, then cut over, and still a way back.',
    },
    {
      id: 'p10', name: '备份', latin: 'Backup', discipline: 'data',
      disciplineLabel: '数据与存储', disciplineLatin: 'Data & storage',
      year: '2024', credit: '独立开发 Solo build',
      note: '定时备份加校验，是那种删掉了真能还原回来的备份。',
      noteLatin: 'Scheduled backups with verification: the kind that can actually be restored.',
    },
    {
      id: 'p11', name: '面板', latin: 'Panel', discipline: 'tooling',
      disciplineLabel: '开发工具', disciplineLatin: 'Developer tools',
      year: '2024', credit: '设计 + 开发 Design & build',
      note: '运维面板：告警按影响排序，不按触发顺序排。',
      noteLatin: 'An ops panel that ranks alerts by impact, not by the order they fired in.',
    },
    {
      id: 'p12', name: '访问日志', latin: 'Access Log', discipline: 'infra',
      disciplineLabel: '基础设施', disciplineLatin: 'Infrastructure',
      year: '2023', credit: '独立开发 Solo build',
      note: '访问日志的采样与聚合，省下八成存储，尾巴还留着。',
      noteLatin: 'Sampling and aggregation for access logs: eight tenths of the storage gone, the tail kept.',
    },
    {
      id: 'p13', name: '缓存', latin: 'Cache', discipline: 'service',
      disciplineLabel: '后端服务', disciplineLatin: 'Back-end services',
      year: '2022', credit: '独立开发 Solo build',
      note: '带失效策略的缓存层，别让缓存和数据各说各话。',
      noteLatin: 'A cache layer with a real invalidation story, so cache and data stop disagreeing.',
    },
    {
      id: 'p14', name: '密钥', latin: 'Secrets', discipline: 'infra',
      disciplineLabel: '基础设施', disciplineLatin: 'Infrastructure',
      year: '2025', credit: '独立开发 Solo build',
      note: '密钥轮换工具：到期前提醒，轮换的时候不用重启。',
      noteLatin: 'A secret rotation tool: warns before expiry, rotates without a restart.',
    },
    {
      id: 'p15', name: '压测', latin: 'Load Test', discipline: 'tooling',
      disciplineLabel: '开发工具', disciplineLatin: 'Developer tools',
      year: '2022', credit: '与人合作 Built with someone',
      note: '压测脚本从真实流量里采样，结果才不至于自说自话。',
      noteLatin: 'Load tests sampled from real traffic, so the numbers mean something.',
    },
    {
      id: 'p16', name: '值班', latin: 'On-call', discipline: 'service',
      disciplineLabel: '后端服务', disciplineLatin: 'Back-end services',
      year: '2025', credit: '自由职业 Freelance',
      note: '值班手册和告警路由，让半夜被叫醒的时候有据可依。',
      noteLatin: 'An on-call handbook and alert routing, so the middle of the night has a procedure.',
    },
  ],
  essays: [
    {
      id: 'e1', title: '先写测试，还是先写能跑的代码', titleLatin: 'Tests first, or code that runs',
      excerpt: '顺序不是信仰，是成本：先写能跑的代码，是为了让第一个反馈早点到。',
      excerptLatin: 'The order is not a belief, it is a cost: running code first gets the first feedback earlier.',
      date: '2026-08-14',
    },
    {
      id: 'e2', title: '接口的版本是一种承诺', titleLatin: 'A version is a promise',
      excerpt: '改接口之前先想清楚谁在依赖它；版本号记的不是变化，是承诺。',
      excerptLatin: 'Before changing an interface, think about who depends on it; the version records a promise, not a change.',
      date: '2026-05-02',
    },
    {
      id: 'e3', title: '缓存失效比缓存更难', titleLatin: 'Invalidation is harder than caching',
      excerpt: '把数据放进缓存只要一行，把数据从缓存里拿走才是那道题。',
      excerptLatin: 'Putting data in a cache is one line; getting it out again is the whole problem.',
      date: '2026-03-21',
    },
    {
      id: 'e4', title: '中英并排的排版', titleLatin: 'Setting two languages side by side',
      excerpt: '并排排版比逐段翻译难，但更像一份真的文件：文件从来不是翻译出来的。',
      excerptLatin: 'Setting two languages side by side is harder than translating, and reads more like a real document.',
      date: '2026-01-09',
    },
    {
      id: 'e5', title: '半夜被叫醒的那次', titleLatin: 'The night we got paged',
      excerpt: '告警响的时候，能在三分钟内知道是哪一层坏了，比什么都值钱。',
      excerptLatin: 'When the alert fires, knowing within three minutes which layer broke is worth more than anything.',
      date: '2025-11-30',
    },
    {
      id: 'e6', title: '关于可观测性', titleLatin: 'On observability',
      excerpt: '指标、链路、日志不是为了看得全，是为了在半夜能少猜一点。',
      excerptLatin: 'Metrics, traces and logs are not for seeing everything; they are for guessing less at night.',
      date: '2025-09-18',
    },
  ],
  letter: {
    zh: [
      '我叫高明岗，写后端和基础设施，也写让写代码更省事的小工具。大部分时间花在系统的边界上：接口怎么定，数据怎么留，真出问题的时候能不能一眼看出是哪一层坏了。',
      '我从 2016 年开始独立做事，做过网关、索引和消息队列，也做过给金融与内容团队用的内部系统。判断做得好不好，我只有两个标准：半年后还有人用吗？它坏了的时候，我是第一个知道吗？',
      '现在大部分时间在一个自写的部署与观测工具上，想让「上线」这件事从半天缩短到十分钟。',
      '如果你手上有一个说不清楚、但总觉得哪里不对的系统问题——延迟、可靠性，或者那段谁都不想碰的老代码——欢迎写信给我。',
    ],
    en: [
      'I’m Gao Minggang. I write back-end and infrastructure, plus the small tools that make writing code less painful. Most of my time goes into the edges of a system: how the interfaces are drawn, how the data is kept, and whether you can tell at a glance which layer broke.',
      'I have worked independently since 2016 — gateways, indexes and message queues, and internal systems for teams in finance and content. I judge the work by two questions: will anyone still be using it in six months, and when it breaks, will I be the first to know?',
      'Most of my time now goes into a deployment and observability tool of my own, trying to get “shipping it” down from half a day to ten minutes.',
      'If you have a system problem you cannot quite name — latency, reliability, or that old stretch of code nobody wants to touch — write to me.',
    ],
  },
  hours: [
    { day: '工作日', dayLatin: 'Weekdays', time: '09:00 – 18:00' },
    { day: '周六', dayLatin: 'Saturday', time: '10:00 – 16:00' },
    { day: '周日', dayLatin: 'Sunday', time: '不见客 Off' },
  ],
  links: [
    { label: 'minggang@example.com', href: 'mailto:minggang@example.com' },
    { label: '+86 138 0000 0000', href: 'tel:+8613800000000' },
    { label: '上海 Shanghai', href: '#top' },
    { label: 'github.com/minggang', href: '#top' },
  ],
}
