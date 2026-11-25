import type { BilingualTier, BilingualText } from '../types';

export interface LevelDefinition {
  level: number;
  minXp: number;
  titleEn: string;
  titleZh: string;
  badgeEmoji: string;
  autoTier: BilingualTier;
  descriptionZh: string;
}

export const LEVELS: LevelDefinition[] = [
  {
    level: 1,
    minXp: 0,
    titleEn: 'Fresh Off the Plane',
    titleZh: '初登长白云之乡',
    badgeEmoji: '✈️',
    autoTier: 1,
    descriptionZh: '生存护航期：中文为主 + 高频原词入门',
  },
  {
    level: 2,
    minXp: 200,
    titleEn: 'Settling In',
    titleZh: '安顿落脚新手',
    badgeEmoji: '🏡',
    autoTier: 1,
    descriptionZh: '搞定 IRD、租房、GP 与驾照基础',
  },
  {
    level: 3,
    minXp: 500,
    titleEn: 'Local Navigator',
    titleZh: '独立生活达人',
    badgeEmoji: '🧭',
    autoTier: 2,
    descriptionZh: '双语过渡：开始用英文处理工作与生活事务',
  },
  {
    level: 4,
    minXp: 900,
    titleEn: 'Workplace & Kiwi Pro',
    titleZh: '职场社交进阶者',
    badgeEmoji: '💼',
    autoTier: 3,
    descriptionZh: '语境进阶：听懂职场潜台词、自信直聘沟通',
  },
  {
    level: 5,
    minXp: 1400,
    titleEn: 'Culture Insider',
    titleZh: '双文化深度通',
    badgeEmoji: '🌿',
    autoTier: 3,
    descriptionZh: '理解怀唐伊条约、MMP 与 Kiwi 幽默文化',
  },
  {
    level: 6,
    minXp: 2000,
    titleEn: 'True Kiwi (Tino Pai!)',
    titleZh: '真正的新西兰人',
    badgeEmoji: '🥝',
    autoTier: 4,
    descriptionZh: '全英文与毛利语自在生活，拥抱 Aotearoa',
  },
];

export function getLevelForXp(xp: number): {
  current: LevelDefinition;
  next: LevelDefinition | null;
  progressPct: number;
} {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.minXp) current = lvl;
  }
  const idx = LEVELS.findIndex((l) => l.level === current.level);
  const next = idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
  if (!next) {
    return { current, next: null, progressPct: 100 };
  }
  const span = next.minXp - current.minXp;
  const gained = xp - current.minXp;
  const progressPct = Math.min(100, Math.max(0, Math.round((gained / span) * 100)));
  return { current, next, progressPct };
}

export interface BadgeDefinition {
  id: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  emoji: string;
}

export const BADGES: BadgeDefinition[] = [
  {
    id: 'kia-ora-starter',
    titleZh: 'Kia Ora 启程者',
    titleEn: 'Kia Ora Starter',
    descZh: '开启新西兰人成长之旅',
    emoji: '🌱',
  },
  {
    id: 'first-lesson',
    titleZh: '第一课通关',
    titleEn: 'First Lesson Done',
    descZh: '完成任意 1 节课程学习',
    emoji: '📘',
  },
  {
    id: 'five-lessons',
    titleZh: '稳步扎根',
    titleEn: 'Five Lessons Mastered',
    descZh: '累计完成 5 节课程',
    emoji: '🏡',
  },
  {
    id: 'boss-chatter',
    titleZh: '直聘开聊达人',
    titleEn: 'Direct Chat Pioneer',
    descZh: '在「Kiwi 直聘」完成至少 1 场 BOSS 完整沟通',
    emoji: '💬',
  },
  {
    id: 'offer-getter',
    titleZh: '拿到模拟 Offer',
    titleEn: 'Offer Winner',
    descZh: '在「Kiwi 直聘」成功拿到面试邀请或模拟 Offer',
    emoji: '🎉',
  },
  {
    id: 'cv-ready',
    titleZh: 'NZ 简历合规官',
    titleEn: 'NZ CV Ready',
    descZh: '保存一份符合新西兰规范的简历名片',
    emoji: '📄',
  },
  {
    id: 'road-code-ace',
    titleZh: '2026 交规老司机',
    titleEn: 'Road Code Ace',
    descZh: '交规模拟测验拿到 80% 及以上正确率',
    emoji: '🚗',
  },
  {
    id: 'te-reo-friend',
    titleZh: '语言探索者',
    titleEn: 'Slang & Te Reo Friend',
    descZh: '在语言实验室完成 10 张以上闪卡复习',
    emoji: '🗣️',
  },
  {
    id: 'checklist-doer',
    titleZh: '实干行动派',
    titleEn: 'Action Taker',
    descZh: '在全周期生活清单中勾选完成 10 项以上',
    emoji: '✅',
  },
  {
    id: 'daily-challenger',
    titleZh: '每日精进',
    titleEn: 'Daily Challenger',
    descZh: '完成每日 3 分钟 Kiwi 挑战',
    emoji: '⚡',
  },
];

export interface DailyChallengeItem {
  id: string;
  slangTerm: string;
  slangPhonetic: string;
  slangMeaningZh: string;
  question: BilingualText;
  options: Array<{
    id: string;
    text: BilingualText;
    isCorrect: boolean;
    explanationZh: string;
  }>;
}

export const DAILY_CHALLENGES: DailyChallengeItem[] = [
  {
    id: 'dc-1',
    slangTerm: 'Bring a plate',
    slangPhonetic: '/brɪŋ ə pleɪt/',
    slangMeaningZh: '聚餐时自带一道菜分享（千万别只带个空盘子！）',
    question: {
      zh: '同事发消息说："We are having a barbie at 5pm on Saturday, bring a plate, sweet as?" 你应该怎么做？',
      en: 'A colleague texts: "We’re having a barbie at 5pm on Saturday, bring a plate, sweet as?" What should you do?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '带一个洗干净的空盘子去装烤肉', en: 'Bring an empty clean plate for the BBQ' },
        isCorrect: false,
        explanationZh: '这是新移民最经典的误会之一！在新西兰 "bring a plate" 指的是带一盘能和大家分享的食物（沙拉、甜点、小吃等）。',
      },
      {
        id: 'b',
        text: { zh: '准备一盘沙拉、饺子或甜点带去大家一起分享，回复 "Sounds great, count me in!"', en: 'Bring a dish of food (e.g. salad, dumplings, or dessert) to share and reply "Sounds great, count me in!"' },
        isCorrect: true,
        explanationZh: '满分！Kiwi 聚餐文化极爱分享，带一道拿手菜（配个夹子更好）再自然不过。',
      },
      {
        id: 'c',
        text: { zh: '必须买一束很贵的鲜花和昂贵红酒', en: 'Buy expensive flowers and fine wine only' },
        isCorrect: false,
        explanationZh: 'BBQ 很轻松随性，BYO 自己喝的饮料 + 一道菜分享最地道，太隆重反而显得拘谨。',
      },
    ],
  },
  {
    id: 'dc-2',
    slangTerm: 'Yeah, nah',
    slangPhonetic: '/jeə nɑː/',
    slangMeaningZh: '口头禅：委婉的“不太行 / 不是 / 算了”（核心看最后一个词！）',
    question: {
      zh: '2026年10月1日起新西兰新交规生效：在限速 50km/h 的城市道路上，前方公交车打右灯准备从站点驶出，你应该？',
      en: 'Under NZ’s October 2026 road rules, on a 50 km/h urban road a bus signals right to pull out from a bus stop. What must you do?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '加速抢先超过，因为你在主车道有路权', en: 'Speed up and pass because you are in the main lane' },
        isCorrect: false,
        explanationZh: '错了！2026年10月1日起生效的新交规明确规定，在 60km/h 及以下道路必须让行出站公交车。',
      },
      {
        id: 'b',
        text: { zh: '减速让行（Give way），让公交车安全汇入车道', en: 'Slow down and give way so the bus can safely pull out' },
        isCorrect: true,
        explanationZh: '完全正确！2026年10月新交规：限速 60km/h 或以下的道路，车辆必须让行从站点/路边/公交道驶出的公交车。',
      },
      {
        id: 'c',
        text: { zh: '鸣笛提醒公交车等你过去', en: 'Honk to warn the bus to wait for you' },
        isCorrect: false,
        explanationZh: '既违反 2026 新交规，也不符合新西兰温和礼让的驾驶文化。',
      },
    ],
  },
  {
    id: 'dc-3',
    slangTerm: 'Ngā mihi',
    slangPhonetic: '/ŋaː ˈmihi/ (nga mee-hee)',
    slangMeaningZh: '毛利语高频邮件结尾：“诚挚感谢 / Kind regards”',
    question: {
      zh: '你刚签下一份新西兰工作 Offer，老板让你第一天上班后再补签“90 天试用期（90-day trial）”条款，这在法律上？',
      en: 'Your employer asks you to sign a 90-day trial clause AFTER you already started your first shift. Legally, is this valid?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '有效，只要在前 90 天内签字就行', en: 'Valid as long as it is signed within the first 90 days' },
        isCorrect: false,
        explanationZh: '错误！新西兰雇佣法对 90 天试用期有极其严格的程序要求。',
      },
      {
        id: 'b',
        text: { zh: '无效！90 天试用期必须在正式开始工作前书面约定并签署，且仅适用于全新雇员', en: 'Invalid! A 90-day trial must be agreed in writing and signed BEFORE starting work, and only for genuinely new employees' },
        isCorrect: true,
        explanationZh: '精准避坑！哪怕你已经干了一小时活才签合同，该 90 天试用期条款在法律上都可能被判无效。',
      },
      {
        id: 'c',
        text: { zh: '只有 20 人以下的小公司才能用 90 天试用期', en: 'Only businesses with fewer than 20 staff can use it' },
        isCorrect: false,
        explanationZh: '旧规啦！早在 2023 年底新西兰已恢复所有规模企业均可使用 90 天试用期，但入职前签字红线从未放松。',
      },
    ],
  },
  {
    id: 'dc-4',
    slangTerm: 'Chur',
    slangPhonetic: '/tʃɜː/',
    slangMeaningZh: '超地道口语：“谢了 / 酷 / 稳了”（相当于 Cheers / Thanks bro）',
    question: {
      zh: '你在新西兰商场买了一台 \$1,500 的洗衣机，用了 15 个月坏了，店员说“厂家 1 年质保已过，不管修”。你该怎么维权？',
      en: 'You bought a $1,500 washing machine in NZ. After 15 months it breaks, and staff say "1-year warranty expired, sorry." What are your rights?',
    },
    options: [
      {
        id: 'a',
        text: { zh: '自认倒霉，花钱找人修或买新的', en: 'Accept it and pay for repairs yourself' },
        isCorrect: false,
        explanationZh: '千万别吃哑巴亏！新西兰有极其强力的消费者保护法。',
      },
      {
        id: 'b',
        text: { zh: '援引《消费者保障法》（CGA）要求零售商免费维修、更换或退款；若推诿可向 Disputes Tribunal 申诉', en: 'Cite the Consumer Guarantees Act (CGA) for a free repair, replacement, or refund from the retailer; escalate to the Disputes Tribunal if needed' },
        isCorrect: true,
        explanationZh: '太懂新西兰了！一台 \$1,500 的洗衣机合理使用寿命远超 15 个月，CGA 凌驾于商家 1 年保修之上，而且 2026 年 Disputes Tribunal 仲裁上限已翻倍至 \$60,000！',
      },
      {
        id: 'c',
        text: { zh: '只能联系海外厂家，零售店没有责任', en: 'You must contact the overseas manufacturer, not the NZ retailer' },
        isCorrect: false,
        explanationZh: '在 CGA 下，直接卖给你商品的新西兰零售商必须承担首要责任，不能踢皮球给厂家。',
      },
    ],
  },
];

export function getDailyChallengeForToday(): DailyChallengeItem {
  const dayNum = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  return DAILY_CHALLENGES[dayNum % DAILY_CHALLENGES.length];
}
