import type { CurriculumModule } from '../../types';

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'mod-1',
    number: 1,
    domain: 'systems',
    title: {
      zh: '落地 1–30 天：生存基建与官方系统',
      en: 'Days 1–30: Arrival Survival & NZ Government Systems',
    },
    subtitle: {
      zh: '海关检疫、IRD 税号、RealMe、银行、JP 太平绅士、GP 与 ACC',
      en: 'Biosecurity, IRD, RealMe, Banking, JP/CAB & GP/ACC Basics',
    },
    levelRange: 'Lv.1',
    iconName: 'Compass',
    accentColor: 'emerald',
    linkedFeature: 'tools',
  },
  {
    id: 'mod-2',
    number: 2,
    domain: 'housing',
    title: {
      zh: '安家居住：租房新政、买房与居家文化',
      en: 'Home & Living: Tenancy Laws, Buying & Kiwi Homes',
    },
    subtitle: {
      zh: '2025–2026 租房与宠物押金新规、除湿取暖、DIY 与买房避坑',
      en: '2025–2026 Tenancy & Pet Bond, Healthy Homes, DIY & Buying',
    },
    levelRange: 'Lv.1–Lv.3',
    iconName: 'Home',
    accentColor: 'teal',
    linkedFeature: 'tools',
  },
  {
    id: 'mod-3',
    number: 3,
    domain: 'systems',
    title: {
      zh: '出行与驾照：左行驾驶与 2026 新交规',
      en: 'Driving, Licensing & 2026 Road Rules',
    },
    subtitle: {
      zh: '12 个月驾照新规、Road Code 难点、1.5m 超车、让行公交与电车 RUC',
      en: '12-Month Licence Rule, Give Way, Oct 2026 Rules & EV RUC',
    },
    levelRange: 'Lv.1–Lv.2',
    iconName: 'Car',
    accentColor: 'sky',
    linkedFeature: 'tools',
  },
  {
    id: 'mod-4',
    number: 4,
    domain: 'career',
    title: {
      zh: '求职通关、职场文化与自雇创业',
      en: 'Career, Kiwi Workplace Culture & Contracting',
    },
    subtitle: {
      zh: '职业注册、NZ 简历、面试与背调、2026 雇佣法、Tall Poppy 与自雇',
      en: 'NZ CV, Job Hunting, STAR Interviews, 2026 Employment Law & Business',
    },
    levelRange: 'Lv.2–Lv.4',
    iconName: 'Briefcase',
    accentColor: 'indigo',
    linkedFeature: 'jobs',
  },
  {
    id: 'mod-5',
    number: 5,
    domain: 'moneyLaw',
    title: {
      zh: '金钱、税务、保险与法律维权',
      en: 'Money, Tax, Insurance & Consumer Law',
    },
    subtitle: {
      zh: 'PAYE 个税、KiwiSaver 3.5% 新政、4 年免税期、CGA 维权与防诈骗',
      en: 'PAYE, KiwiSaver 3.5%, 4-Yr Tax Exemption, CGA & Anti-Scam',
    },
    levelRange: 'Lv.2–Lv.4',
    iconName: 'Landmark',
    accentColor: 'amber',
    linkedFeature: 'tools',
  },
  {
    id: 'mod-6',
    number: 6,
    domain: 'language',
    title: {
      zh: '语言通关：Kiwi 英语、口音与日常毛利语',
      en: 'Kiwi English, Accent Shifts & Everyday Te Reo Māori',
    },
    subtitle: {
      zh: '元音大漂移、高频俚语、职场潜台词、毛利语拼读与 Small Talk',
      en: 'Vowel Shifts, Kiwi Slang, Banter Subtext, Te Reo & Small Talk',
    },
    levelRange: 'Lv.1–Lv.5',
    iconName: 'MessageSquareQuote',
    accentColor: 'violet',
    linkedFeature: 'language',
  },
  {
    id: 'mod-7',
    number: 7,
    domain: 'housing',
    title: {
      zh: '医疗、家庭、教育与心理融入',
      en: 'Healthcare, Family, Education & Wellbeing',
    },
    subtitle: {
      zh: '12 个月处方、看牙攻略、LMC 助产士、学区 NCEA、心理孤独与养宠',
      en: '12-Month Rx, Dental Reality, LMC Midwives, Schools, Mental Health & Pets',
    },
    levelRange: 'Lv.2–Lv.5',
    iconName: 'HeartPulse',
    accentColor: 'rose',
  },
  {
    id: 'mod-8',
    number: 8,
    domain: 'cultureSafety',
    title: {
      zh: '历史、双文化、公民政治与自然安全',
      en: 'Aotearoa History, Civics, Outdoors & Safety',
    },
    subtitle: {
      zh: '怀唐伊条约、Matariki、MMP 投票、徒步赶海、离岸流/地震与入籍 PRV',
      en: 'Te Tiriti, Matariki, MMP Voting, Tramping, Rip Currents & PRV/Citizenship',
    },
    levelRange: 'Lv.3–Lv.6',
    iconName: 'Mountain',
    accentColor: 'green',
  },
];
