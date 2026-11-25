import type { ChecklistGroup } from '../../types';

export const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    id: 'chk-pre-arrival',
    titleZh: '行前 30 天准备清单',
    titleEn: 'Pre-Arrival (30 Days Before Landing)',
    descriptionZh: '把核心证件、看牙与海关申报提前理顺，落地零慌乱',
    items: [
      {
        id: 'pa-1',
        textZh: '整理原件与公证件：护照、签证信、学历成绩单（NZQA 备用）、出生/结婚证、驾照翻译件',
        textEn: 'Pack vital documents: Passport, Visa letter, Degrees/Transcripts, Birth/Marriage certs & Driver Licence translation',
        tipZh: '建议扫描存加密云盘，同时随身带纸质备份',
      },
      {
        id: 'pa-2',
        textZh: '出发前完成国内看牙洗牙与常规体检，配好备用眼镜（带度数处方）',
        textEn: 'Complete dental check-up, medical exam & pack spare glasses with prescription',
        tipZh: '新西兰成人看牙公立不报销且极贵，强烈建议出国前处理完蛀牙和智齿！',
      },
      {
        id: 'pa-3',
        textZh: '核对常用药合规性：处方药保留原包装 + 英文医生证明（≤3 个月用量）',
        textEn: 'Keep prescription meds in original packs with English doctor letter (max 3 months)',
        tipZh: '含伪麻黄碱（如康泰克/白加黑等感冒药）切勿携带！',
      },
      {
        id: 'pa-4',
        textZh: '彻底洗净徒步鞋/户外装备泥土，起飞前 24 小时填报电子入境卡（NZTD）',
        textEn: 'Scrub mud off hiking boots/gear & submit NZ Traveller Declaration (NZTD) 24h prior',
        tipZh: '任何食品/干货拿不准一律选“申报（Declare）”！申报最多没收，瞒报立罚 $400 起！',
      },
      {
        id: 'pa-5',
        textZh: '确认签证对应的公立医疗资格，买好过渡期旅行/商业医疗险',
        textEn: 'Verify public health eligibility for your visa & buy transitional medical insurance',
      },
    ],
  },
  {
    id: 'chk-week-1',
    titleZh: '落地第 1 周必办事项',
    titleEn: 'First Week on the Ground',
    descriptionZh: '搞定手机卡、银行账户、IRD 税号与日常必备 App',
    items: [
      {
        id: 'w1-1',
        textZh: '办理本地手机卡（Spark / One NZ / 2degrees / Skinny）拿到 02x 本地号码',
        textEn: 'Get a local NZ mobile SIM (02x number) for banking, rentals & job hunting',
      },
      {
        id: 'w1-2',
        textZh: '注册 RealMe 账号并在线申请 IRD 税号',
        textEn: 'Create RealMe login & apply for your IRD tax number online',
        tipZh: '无 IRD 号上班会被按最高 45% 非申报税率扣税！',
      },
      {
        id: 'w1-3',
        textZh: '预约本地银行（ANZ / ASB / BNZ / Westpac / Kiwibank）激活账户并领 EFTPOS 卡',
        textEn: 'Verify ID at an NZ bank branch & activate your EFTPOS/Debit card',
        tipZh: '带护照、签证信及地址证明（Proof of Address）',
      },
      {
        id: 'w1-4',
        textZh: '安装本地生存 App：MetService、GeoNet、Trade Me、本地公交 App、Gaspy、Grocer',
        textEn: 'Install essential apps: MetService, GeoNet, Trade Me, Transit app, Gaspy & Grocer',
      },
      {
        id: 'w1-5',
        textZh: '办理免费超市会员卡（Everyday Rewards / New World Clubcard）',
        textEn: 'Join free supermarket loyalty programmes (Everyday Rewards & Clubcard)',
      },
    ],
  },
  {
    id: 'chk-month-1',
    titleZh: '落地第 1 个月安顿清单',
    titleEn: 'First Month Settling In',
    descriptionZh: '搞定 GP、长租房、水电网、保险与驾照规划',
    items: [
      {
        id: 'm1-1',
        textZh: '注册附近家庭医生（GP）并开通诊所线上预约（ManageMyHealth / MyIndici）',
        textEn: 'Enrol with a local GP & activate ManageMyHealth / MyIndici',
        tipZh: '别等发烧才找 GP，热门诊所新病人排队常需 1–2 周！',
      },
      {
        id: 'm1-2',
        textZh: '长租签约：核实 Bond 押金交至官方 Tenancy Services、入住当天全屋拍照留证',
        textEn: 'Verify Bond is lodged with Tenancy Services & take move-in condition photos',
      },
      {
        id: 'm1-3',
        textZh: '用 Powerswitch 比价开通电力/燃气与 Fibre 光纤宽带',
        textEn: 'Compare & set up power, gas & Fibre broadband via Powerswitch',
      },
      {
        id: 'm1-4',
        textZh: '规划海外驾照转换（2026.11 起新入境限 12 个月）并刷通本应用交规题库',
        textEn: 'Schedule overseas licence conversion (12-month window) & pass Road Code quiz',
      },
      {
        id: 'm1-5',
        textZh: '配置家财险（Contents）和至少第三方车险（Third Party）',
        textEn: 'Set up Contents insurance & at least Third Party car insurance',
      },
    ],
  },
  {
    id: 'chk-renting',
    titleZh: '租房看房 & 避坑自查表（2026 版）',
    titleEn: 'Renting & Healthy Homes Checklist',
    descriptionZh: '新西兰木结构老房易潮冷，看房签约逐条核验',
    items: [
      {
        id: 'rt-1',
        textZh: '客厅装有合规固定取暖设备（首选 Heat Pump 热泵冷暖空调）',
        textEn: 'Main living room has compliant fixed heating (ideally a Heat Pump)',
      },
      {
        id: 'rt-2',
        textZh: '厨卫排风扇直排室外，窗框和天花板无霉斑或严重水渍',
        textEn: 'Extractor fans vent outside; no mould or heavy condensation stains',
      },
      {
        id: 'rt-3',
        textZh: '确认房屋朝向（南半球**朝北 North-facing** 采光最佳）与是否双层玻璃',
        textEn: 'Check sun aspect (North-facing = sunniest in NZ!) & double glazing',
      },
      {
        id: 'rt-4',
        textZh: '确认 Fixed-term 还是 Periodic（2025起租客 21 天/房东 90 天解约）及水费归属',
        textEn: 'Confirm Fixed-term vs Periodic notice rules & water bill responsibility',
      },
      {
        id: 'rt-5',
        textZh: '常规押金 ≤ 4 周租金；养宠申请依 2025.12 新政另付宠物押金 ≤ 2 周（须交官方 Bond Hub）',
        textEn: 'General bond ≤ 4 weeks; Pet Bond (if any) ≤ 2 weeks lodged with MBIE Bond Hub',
      },
    ],
  },
  {
    id: 'chk-car',
    titleZh: '新西兰买二手车避坑清单',
    titleEn: 'Buying a Used Car Safely in NZ',
    descriptionZh: '花小钱查清车辆底细，远离事故车与抵押车',
    items: [
      {
        id: 'car-1',
        textZh: '用 CarJam / MotorWeb 查车牌报告：确保无未还清贷款（Money Owing）及调表史',
        textEn: 'Run CarJam/PPSR report: check zero money owing, true odometer & no write-off history',
      },
      {
        id: 'car-2',
        textZh: '查 WOF 车检（私人交易须 1 个月内）与 Rego 路税到期日',
        textEn: 'Verify fresh WOF (< 1 month old for private sale) & valid Rego',
      },
      {
        id: 'car-3',
        textZh: '若买柴油/纯电 EV/插混 PHEV，核查 RUC 里程配额是否已欠费',
        textEn: 'For Diesel / EV / PHEV, check prepaid RUC kilometres are up to date',
      },
      {
        id: 'car-4',
        textZh: '做 AA / VTNZ 购前机械检测（Pre-purchase Inspection）',
        textEn: 'Book an AA or VTNZ pre-purchase mechanical inspection',
      },
      {
        id: 'car-5',
        textZh: '付款当天线上办妥 NZTA 过户并立刻生效车险后再开走',
        textEn: 'Complete NZTA Notice of Acquisition & activate insurance BEFORE driving off',
      },
    ],
  },
  {
    id: 'chk-emergency',
    titleZh: 'Get Ready 地震与海啸应急包清单',
    titleEn: 'NEMA Get Ready Emergency Kit (3+ Days)',
    descriptionZh: '环太平洋地震带必备家庭 3 天自救物资',
    items: [
      {
        id: 'em-1',
        textZh: '饮用水：每人每天 3 升 × 至少 3 天（每人 9 升+）',
        textEn: 'Water: 3 litres per person per day for at least 3 days',
      },
      {
        id: 'em-2',
        textZh: '免煮食物（罐头+手动开罐器、能量棒、干粮、宠物/婴儿口粮）',
        textEn: 'Non-perishable food, manual can opener & pet/baby supplies',
      },
      {
        id: 'em-3',
        textZh: '手电筒、电池、满电充电宝与电池/手摇收音机',
        textEn: 'Torch, spare batteries, charged power bank & battery/solar radio',
      },
      {
        id: 'em-4',
        textZh: '急救包、1 周处方药、保暖毯、结实鞋（防碎玻璃）与哨子',
        textEn: 'First aid kit, 1-week meds, thermal blanket, sturdy shoes & whistle',
      },
      {
        id: 'em-5',
        textZh: '现金、证件复印件，并查清住宅所在海啸疏散高地路线',
        textEn: 'Cash, ID copies & know your local Tsunami Evacuation high-ground route',
        tipZh: '海啸保命口诀：Long or Strong, Get Gone!（震感长或剧烈立刻撤往高处！）',
      },
    ],
  },
  {
    id: 'chk-prv-cit',
    titleZh: '扎根进阶：PRV 永久回头签与入籍准备',
    titleEn: 'Long-Term Milestone: PRV & Citizenship',
    descriptionZh: '迈向永不过期回头签与新西兰公民身份',
    items: [
      {
        id: 'pc-1',
        textZh: '居留签（RV）住满 1 年后上 vote.nz 登记成为合法选民',
        textEn: 'Enrol at vote.nz after 12 months continuous residence in NZ',
      },
      {
        id: 'pc-2',
        textZh: 'RV 满 2 年且每年住满 184 天，换取永不过期无移民监的 PRV',
        textEn: 'Hold RV for 2 years (184 days/yr) to apply for Permanent Resident Visa (PRV)',
      },
      {
        id: 'pc-3',
        textZh: '在 4 年新移民海外免税期满前做好海外资产与 FIF 税务规划',
        textEn: 'Consult an NZ accountant before your 4-year Transitional Tax Residency expires',
      },
      {
        id: 'pc-4',
        textZh: '立好新西兰遗嘱（Will）与持久授权书（EPA）保护家人',
        textEn: 'Set up an NZ Will and Enduring Power of Attorney (EPA)',
      },
      {
        id: 'pc-5',
        textZh: '核对 5 年累计居住 1,350 天（每年 ≥240 天）与原国籍政策，备战入籍宣誓',
        textEn: 'Check 5-year presence (1,350 days total, ≥240/yr) for NZ Citizenship',
      },
    ],
  },
];
