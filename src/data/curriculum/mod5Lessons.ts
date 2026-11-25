import type { Lesson } from '../../types';

/**
 * Module 5: 金钱、税务、保险与法律维权 (Lessons #25 – #30)
 * Verified against IRD (ird.govt.nz), Justice NZ (Jan 2026 $60k Disputes Tribunal), and Consumer Protection NZ.
 */
export const MOD5_LESSONS: Lesson[] = [
  {
    id: 'l-25',
    number: 25,
    moduleId: 'mod-5',
    title: {
      zh: '看懂工资单与个税体系：2026 五档税阶、副业税码与年度退税',
      en: 'Decoding Your Payslip: 2026 PAYE Brackets, Secondary Tax & myIR Refunds',
    },
    summary: {
      zh: '逐项拆解新西兰工资单（PAYE、ACC 1.67%、KiwiSaver 3.5%），彻底消除“打两份工副业税码多扣税就亏了”的经典误区，并教你每年 5–7 月在 myIR 核对自动退税。',
      en: 'Read every line of an NZ payslip, debunk the “secondary tax myth,” and check your automatic end-of-year myIR tax assessment.',
    },
    targetLevel: 2,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Inland Revenue (ird.govt.nz)',
    terms: [
      { term: 'PAYE (Pay As You Earn)', phonetic: '/peɪ iː/', zh: '雇主发薪时按累进税率代扣代缴的个人所得税（含 ACC 征费）' },
      { term: 'Tax Year (1 Apr – 31 Mar)', phonetic: '/tæks jɪə/', zh: '新西兰财年（每年 4 月 1 日至次年 3 月 31 日，不是自然年！）' },
      { term: 'Secondary Tax Code (SB/S/SH/ST)', phonetic: '/ˈsekəndri/', zh: '第二份工作/副业税码（只是预扣高税率防欠税，年底合并算总税多退少补！）' },
      { term: 'ACC Earner’s Levy (1.67%)', phonetic: '/ˈlevi/', zh: '2026/27 雇员 ACC 意外险征费（税率 1.67%，年应税上限 NZ$152,790）' },
      { term: 'PIR (Prescribed Investor Rate)', phonetic: '/piː aɪ ɑː/', zh: 'PIE 基金（如 KiwiSaver）税率（10.5% / 17.5% / 28%，填太高多交不退，填太低补税！）' },
      { term: 'Donation Tax Credit (33.33%)', phonetic: '/dəʊˈneɪʃn/', zh: '向注册慈善机构/公立学校捐款可申请高达 33.33% 的现金退税！' },
    ],
    cards: [
      {
        id: 'l25-c1',
        type: 'concept',
        title: {
          zh: '2026/27 新西兰五档累进个税 + 工资单逐行解剖',
          en: '2026/27 NZ Progressive PAYE Brackets & Payslip Breakdown',
        },
        body: {
          zh: '新西兰个税是严格的超额累进制（Progressive Tax）——涨薪跨进高一档，只有超出门槛的那一小部分按高税率交税，绝不会“涨薪反而到手变少”！',
          en: 'NZ uses marginal progressive brackets—only dollars ABOVE each threshold are taxed at the higher rate:',
        },
        keyPoints: [
          { zh: '① $0 – $15,600：10.5%；② $15,601 – $53,500：17.5%；③ $53,501 – $78,100：30%；④ $78,101 – $180,000：33%；⑤ $180,001 以上：39%。', en: 'Brackets: 10.5% ($0–$15.6k), 17.5% (to $53.5k), 30% (to $78.1k), 33% (to $180k), 39% ($180k+).' },
          { zh: '再加上 ACC Earner’s Levy（2026/27 为 1.67%，封顶应税收入 $152,790，最高扣约 $2,551.59/年）与个人 KiwiSaver（2026.04 起默认 3.5%）。', en: 'Plus ACC Earner’s Levy (1.67% capped at $152,790) and employee KiwiSaver (default 3.5%).' },
          { zh: '新西兰工薪族没有复杂的个人抵扣项申报——每年 5–7 月 IRD 会根据雇主实时上报的数据自动算账，直接把退税打回你绑定在 myIR 里的银行卡！', en: 'For standard PAYE workers, IRD auto-calculates your tax wash-up between May and July and refunds straight to your bank.' },
        ],
      },
      {
        id: 'l25-c2',
        type: 'comparison',
        title: {
          zh: '破除经典谣言：“打第二份工（Secondary Tax）会被政府多收冤枉税”？',
          en: 'Debunking the #1 NZ Tax Myth: Secondary Tax Codes',
        },
        body: {
          zh: '很多新移民兼职两份工时看到第二份工资单按 S（17.5%）或 SH（30%）扣税，误以为“副业税率惩罚太重不划算”。真相完全不是这样！',
          en: 'You NEVER pay extra total tax for having two jobs—secondary codes only prevent a surprise tax bill at year-end:',
        },
        keyPoints: [
          { zh: '为什么副业要选 S/SH/ST？因为主业（税码 M）已经把你的低税档额度用光了，副业必须从你合并总收入所在的边际税档起扣，否则年底你得补交几千块欠税！', en: 'Your main job (M) already uses your lower brackets, so your second job withholds at your combined marginal rate.' },
          { zh: '年度总结算时，IRD 把你两份工作总收入合在一起按完全相同的五档税阶算总税——一年多扣的一分钱都会在 5–7 月全额退给你！', en: 'At year-end, IRD taxes your combined income identically to one job and refunds every overpaid cent.' },
        ],
      },
      {
        id: 'l25-c3',
        type: 'warning',
        title: {
          zh: '上班族最容易白白亏钱的 2 个税务细节：PIR 税率 & 捐款退税',
          en: '2 Easy Tax Wins Most Workers Miss: PIR Rate & 33.33% Donation Credits',
        },
        body: {
          zh: '每年花 5 分钟在 myIR 里检查这两项，往往能多省/多退好几百纽币：',
          en: 'Spend 5 minutes each April checking these two items in myIR:',
        },
        keyPoints: [
          { zh: '① 检查 KiwiSaver 与基金的 PIR（Prescribed Investor Rate，最高封顶 28%）：根据过去两个财年中较低那一年的收入核定（10.5% / 17.5% / 28%）。特别注意：PIR 设低了年底会被追缴补税，设高了过去容易多交，务必在基金 App 及时更新！', en: 'Keep your KiwiSaver/PIE PIR accurate (10.5% / 17.5% / 28%) using the lower of your last two tax years.' },
          { zh: '② 公立学校捐赠与慈善捐款退 1/3 现金：孩子在公立学校交的“School Donation（自愿捐款）”以及给红十字会/St John 等注册慈善机构的捐款（保留带慈善编号的收据），拍照上传 myIR 直接退回 **33.33% 现金**！', en: 'Upload receipts for registered charities and voluntary state school donations in myIR to claim a 33.33% cash tax credit!' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l25-q1',
        prompt: {
          zh: '你在新西兰同时打一份全职主业（年薪 $60,000）和一份周末兼职（年收入 $10,000）。年底财年结算时，你交的个人所得税总额与“只打一份年薪 $70,000 的工作”相比？',
          en: 'You earn $60k in a main job plus $10k in a weekend job. At year-end tax wash-up, how does your total tax compare to a single $70k job?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '完全一模一样！副业税码（SH）只是平时预扣防欠税，年底 IRD 合并总收入核算，多扣的自动退回', en: 'Exactly the same! Secondary tax only adjusts withholding; IRD reconciles total income at year-end' },
            isCorrect: true,
            feedback: { zh: '彻底告别“副业多交税”误区！放心合法搞副业！', en: 'Spot on!' },
          },
          {
            id: 'b',
            text: { zh: '打两份工总税额会多交一大截，非常不划算', en: 'You permanently pay much higher tax for holding two jobs' },
            isCorrect: false,
            feedback: { zh: '这是新西兰流传最广的税务谣言之一！年底总税额只看全年总收入，与打几份工无关。', en: 'Classic myth—total tax depends solely on total annual income.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '立刻用本应用「工具与新政 → 2026 税薪计算器」输入你的预期年薪，核对每一分钱的 PAYE、ACC 和 KiwiSaver！',
      en: 'Open Tools → 2026 Tax Calculator to inspect your exact PAYE, ACC, and take-home pay.',
    },
  },

  {
    id: 'l-26',
    number: 26,
    moduleId: 'mod-5',
    title: {
      zh: 'KiwiSaver 退休金深度攻略（2026 年 4 月 3.5% 与补贴新政全解）',
      en: 'KiwiSaver Deep Dive (April 2026 3.5% Rate, Govt Contribution & First Home)',
    },
    summary: {
      zh: '彻底吃透 2026 年 4 月起默认涨至 3.5%（2028 升至 4%）、政府补贴上限调整至 $260.72 且年收超 $180k 取消、如何挑低费率成长基金，以及满 3 年提取买首套房实操。',
      en: 'Master the April 2026 3.5% KiwiSaver rate, the $260.72 govt contribution & $180k income cap, picking low-fee Growth funds, and First Home withdrawals.',
    },
    targetLevel: 2,
    durationMin: 9,
    xpReward: 80,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Inland Revenue (ird.govt.nz) / Sorted.org.nz (Te Ara Ahunga Ora)',
    terms: [
      { term: 'KiwiSaver (3.5% from Apr 2026)', phonetic: '/ˈkiːwiˌseɪvə/', zh: '新西兰国民自愿退休储蓄计划（2026.04.01 起默认雇员+雇主最低配捐升至 3.5%）' },
      { term: 'Government Contribution ($260.72)', phonetic: '/ˌkɒntrɪˈbjuːʃn/', zh: '政府年度配捐（每自存 $1 补 25 分，存满 $1,042.86 拿满 $260.72；年应税超 $180k 为 $0）' },
      { term: 'Temporary Rate Reduction', phonetic: '/rɪˈdʌkʃn/', zh: '临时降比申请（2026.04 起可在 myIR 申请将个人缴存暂降回 3%，每次 3–12 个月）' },
      { term: 'ESCT', phonetic: '/iː es siː tiː/', zh: '雇主配捐税（雇主交进你 KiwiSaver 的 3.5% 需按税阶扣 10.5%–39% ESCT 税后入账）' },
      { term: 'Smart Investor (Sorted)', phonetic: '/ˈsɔːtɪd/', zh: '新西兰政府官方公益对比网 smartinvestor.sorted.org.nz（对比所有 KiwiSaver 管理费与收益！）' },
      { term: 'First Home Withdrawal', phonetic: '/wɪðˈdrɔːəl/', zh: '加入满 3 年可提取几乎全部 KiwiSaver 余额作新西兰首套自住房首付（至少留 $1,000）' },
    ],
    cards: [
      {
        id: 'l26-c1',
        type: 'comparison',
        title: {
          zh: '【2025–2026 重大改革】KiwiSaver 最新 4 大变化一览',
          en: '2025–2026 KiwiSaver Reforms Every Migrant Must Know',
        },
        body: {
          zh: '只要你是新西兰公民或居民（RV/PRV，持工签一般不可加入！），入职新公司时默认自动加入 KiwiSaver。2025–2026 年政策变动极大，切勿看旧文章：',
          en: 'NZ citizens and residents qualify for KiwiSaver (work visa holders generally do not). Four huge changes took effect across 2025–2026:',
        },
        keyPoints: [
          { zh: '① 2026 年 4 月 1 日起最低缴存比例升至 3.5%：个人默认与雇主法定最低配捐双双从 3% 涨至 3.5%（2028 年 4 月再涨至 4%）；如短期手头紧，可在 myIR 申请 3–12 个月的临时降回 3%。', en: 'Default employee & minimum employer rate rose from 3% to 3.5% on 1 Apr 2026 (4% in Apr 2028); temporary 3% reduction available via myIR.' },
          { zh: '② 政府年度补贴减半且设高收入门槛：自 2025.07.01 起政府补贴从每 $1 补 50 分调整为补 25 分，每年（7月1日–次年6月30日）自存满 $1,042.86 最高领 NZ$260.72；且年应税收入超过 NZ$180,000 不再享受政府补贴！', en: 'Govt contribution is now 25c per $1 up to NZ$260.72/yr (requires $1,042.86 personal contribution by 30 June), and $0 if taxable income exceeds $180,000.' },
          { zh: '③ 青少年纳入：16–17 岁青少年打工族自 2026.04 起同样享有雇主强制 3.5% 配捐！', en: '16–17 year olds now receive compulsory 3.5% employer matching.' },
          { zh: '④ 自雇人士别忘了自己拿补贴：虽然自雇没雇主配捐，但只要每年 6 月 30 日前手动往自己 KiwiSaver 转入 $1,042.86（只要年收入 ≤$180k），照样白拿政府 $260.72！', en: 'Self-employed earning ≤$180k can manually top up $1,042.86 before 30 June to claim the free $260.72.' },
        ],
      },
      {
        id: 'l26-c2',
        type: 'checklist',
        title: {
          zh: '选对基金与管理费：几十年复利差距可达几十万纽币！',
          en: 'Picking Your Fund Type & Low Fees: Worth $100,000+ Over Time',
        },
        body: {
          zh: '很多人随便留在银行默认 Balanced 基金一辈子不管，其实不同风险等级和每年 0.2% vs 1.3% 的管理费，20–30 年后账户余额天差地别：',
          en: 'Your fund risk profile and annual fees dramatically compound over decades:',
        },
        keyPoints: [
          { zh: '① 按“何时要用这笔钱”选风险档：计划 1–3 年内提出来买首套房 → 选 Defensive / Conservative（低波动保本，防买房前股市大跌！）；距离买房或 65 岁退休还有 10 年以上 → 优先考虑 Growth / High Growth（股票占比 75%–95%，长期复利最强）！', en: 'Buying a house in 1–3 years? Switch to Conservative/Cash to protect your deposit. 10+ years away? Growth/High Growth historically outperforms.' },
          { zh: '② 盯紧年度管理费（Fees）：去政府官方公益网 smartinvestor.sorted.org.nz 一键对比所有 KiwiSaver 机构（如低费率被动指数派 Simplicity、Kernel、InvestNow Foundation Series，以及传统银行与主动基金 Milford、Generate 等）。', en: 'Compare real fees and net returns objectively at smartinvestor.sorted.org.nz.' },
          { zh: '③ 更换机构极其简单：只需去新机构官网花 5 分钟填 IRD 号提交转入，新机构会自动帮你跟旧机构和 IRD 完成无损转移，零手续费！', en: 'Switching KiwiSaver providers takes 5 minutes online and is free.' },
        ],
      },
      {
        id: 'l26-c3',
        type: 'concept',
        title: {
          zh: 'KiwiSaver 什么时候能取出来？仅限 4 种法定情形',
          en: 'When Can You Withdraw KiwiSaver? Only 4 Legal Pathways',
        },
        body: {
          zh: 'KiwiSaver 资金被严格锁定在个人信托账户里，确保真正用于安家与养老：',
          en: 'KiwiSaver is locked in until one of 4 statutory events:',
        },
        keyPoints: [
          { zh: '① 买新西兰首套自住房（First Home Withdrawal）：加入满 3 年，可提取个人存款+雇主配捐+政府补贴+投资收益（账户最少留 $1,000，须通过过户律师提前 10–15 工作日申请）。', en: 'First Home Withdrawal after 3 years of membership (leave min $1,000).' },
          { zh: '② 年满 65 岁退休自由支取（无论继续工作还是退休均可随取随用）。', en: 'Turning 65 (NZ Super eligibility age).' },
          { zh: '③ 永久移居海外满 1 年（除澳洲外，可提取个人与雇主部分，但政府补贴须退还政府；移居澳洲可转入澳洲 Super 账户）。', en: 'Permanent emigration (after 1 year overseas, minus govt contributions; or transfer to Australian Super).' },
          { zh: '④ 极端财务困难（Significant Financial Hardship）或严重疾病。', en: 'Significant financial hardship or serious illness.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l26-q1',
        prompt: {
          zh: '你计划 18 个月后把 KiwiSaver 里的 $60,000 全取出来付奥克兰首套房首付，目前资金全部放在波动极大的 High Growth（95% 股票）基金里。最稳健的理财动作是？',
          en: 'You plan to withdraw your $60k KiwiSaver in 18 months for a first-home deposit, currently in a 95%-equities High Growth fund. What is the smartest move?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '尽快把资金切换到 Conservative / Cash（保守/现金型）基金，防止买房前夕股市突然暴跌 20% 导致首付泡汤', en: 'Switch to a Conservative or Cash fund now so a sudden market crash cannot wipe out your house deposit' },
            isCorrect: true,
            feedback: { zh: '满分风控意识！短周期刚需用钱，保本永远排第一！', en: 'Textbook risk management!' },
          },
          {
            id: 'b',
            text: { zh: '继续留在 High Growth 赌一把最后 18 个月翻倍', en: 'Stay in High Growth hoping to double it in 18 months' },
            isCorrect: false,
            feedback: { zh: '极高风险！股市短期波动不可预测，绝不能拿即将付房款的首付去搏短期涨跌。', en: 'Too risky for an imminent house deposit!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '打开政府公益网站 smartinvestor.sorted.org.nz，对比你现在的 KiwiSaver 基金年费与风险等级，并确认自己每年 6 月 30 日前存满 $1,042.86 拿全政府补贴！',
      en: 'Check your current KiwiSaver fees on smartinvestor.sorted.org.nz and verify your PIR rate.',
    },
  },

  {
    id: 'l-27',
    number: 27,
    moduleId: 'mod-5',
    title: {
      zh: '征信评分（Credit Score）、商业医疗险与家庭全险种配置指南',
      en: 'NZ Credit Scores, Private Health Insurance & Family Risk Protection',
    },
    summary: {
      zh: '搞懂新西兰三大征信机构（Centrix/Equifax/Illion）免费查分与养分法、商业医疗险“既往症”铁律，以及房贷（Mortgage）固定与浮动利率锁定策略。',
      en: 'Build a strong NZ credit score across Centrix/Equifax/Illion, navigate pre-existing medical insurance rules, and understand NZ fixed vs floating mortgages.',
    },
    targetLevel: 3,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Sorted.org.nz / Privacy Commissioner / Centrix / Equifax / Illion',
    terms: [
      { term: 'Centrix / Equifax / Illion', phonetic: '/ˈsentrɪks/', zh: '新西兰三大法定信用报告机构（每年均可免费查自己的完整信用分！）' },
      { term: 'Credit Default', phonetic: '/dɪˈfɔːlt/', zh: '逾期违约黑记录（哪怕欠了 $125 宽带/手机费没付清也会在征信挂 5 年！）' },
      { term: 'Pre-existing Condition', phonetic: '/ˌpriː ɪɡˈzɪstɪŋ/', zh: '商业医疗险“既往症”（投保前已有的病症通常免责不保，务必趁健康早买！）' },
      { term: 'Southern Cross / NIB / AIA', phonetic: '/ˈsʌðən krɒs/', zh: '新西兰主流商业医疗保险公司（主打私立手术、专科检查与非医保抗癌药）' },
      { term: 'Fixed vs Floating / Offset', phonetic: '/ˈɒfset/', zh: '新西兰房贷核心结构（常把房贷拆成 1–3 年固定 + 小部分对冲 Offset 账户省利息！）' },
      { term: 'Buy Now Pay Later (BNPL)', phonetic: '/biː en piː el/', zh: 'Afterpay / Zip 等分期神器（频用或逾期会被银行视为消费失控，严重拖累房贷额度！）' },
    ],
    cards: [
      {
        id: 'l27-c1',
        type: 'checklist',
        title: {
          zh: '新西兰征信养成与防毁指南（别为 $100 账单毁 5 年信用！）',
          en: 'Building & Protecting Your NZ Credit Score',
        },
        body: {
          zh: '新移民落地征信一片空白，但只要租房、开后付费宽带/电费或信用卡，三大机构（Centrix、Equifax、Illion）就会开始为你打分（满分 1000，700+ 为优）：',
          en: 'NZ uses comprehensive credit reporting across Centrix, Equifax, and Illion (both positive on-time payments and missed bills are recorded):',
        },
        keyPoints: [
          { zh: '✅ 免费查分：通过 Credit Simple（Illion）、ClearScore（Illion）或直接去 Centrix / Equifax 官网免费申领个人信用报告，每年至少查一次防身份盗用！', en: 'Check your credit report free every year via Centrix, Equifax, or Illion/ClearScore.' },
          { zh: '⚠️ 隐形杀手：搬家忘了停宽带或手机卡，欠下 $150 被转给催收公司（Debt Collector）形成 Default，会在征信上留疤整整 5 年，导致租房被拒、买房贷款被卡！', en: 'An unpaid $150 final power or phone bill sent to collections leaves a 5-year default scar!' },
          { zh: '⚠️ 准备买房前 3–6 个月：果断关掉用不着的 Afterpay/Zip（BNPL）、调低冗余信用卡额度（哪怕一张 $10,000 信用卡一分没刷，银行也会按刷满额度扣减你的房贷借款能力约 $50,000！）', en: 'Before applying for a mortgage, close unused BNPL accounts and trim excess credit card limits—unused limits slash borrowing power!' },
        ],
      },
      {
        id: 'l27-c2',
        type: 'concept',
        title: {
          zh: '新西兰商业医疗险怎么买最划算？（核心看“大病手术 + 既往症”）',
          en: 'Private Health Insurance in NZ: What to Cover & When to Buy',
        },
        body: {
          zh: '新西兰公立医院保急症与癌症救命极强且免费，但非危及生命的私立专科检查（Specialist）、择期手术（如胆囊、半月板、白内障、肠胃镜）以及部分 Pharmac 未资助的高价进口靶向药，常需商业医疗险兜底：',
          en: 'Private health insurance complements NZ’s public hospitals by eliminating waitlists for diagnostics, elective surgeries, and non-Pharmac drugs:',
        },
        keyPoints: [
          { zh: '核心配置思路：“保大不保小”！优先买 Hospital & Surgical（住院手术）+ Specialists & Tests（专科与影像检查）+ Non-Pharmac Drugs（非医保特效药），把日常看 GP/配镜等小额消费剔除并适当提高 Excess（如 $500–$1,000），保费立省 30%–50%！', en: 'Insure major risks (Surgery + Diagnostics + Non-Pharmac) with a $500–$1,000 excess instead of paying steep premiums for routine GP visits.' },
          { zh: '铁律：绝对如实健康告知（Duty of Disclosure）！隐瞒既往病史（哪怕是国内体检报告记录）理赔时会被直接拒赔并取消保单！越年轻健康时投保越容易零除外承保。', en: 'Always disclose full medical history honestly—non-disclosure voids claims!' },
        ],
      },
      {
        id: 'l27-c3',
        type: 'concept',
        title: {
          zh: '新西兰房贷（Mortgage）与寿险/收入保障险基础',
          en: 'NZ Mortgages (Fixed/Offset) & Family Income Protection',
        },
        body: {
          zh: '背上房贷后，整个家庭抗风险能力取决于利率结构与人寿/收入保障：',
          en: 'Once you hold a mortgage, structure both your loan and family protection smartly:',
        },
        keyPoints: [
          { zh: '🏠 房贷分拆策略（Splitting）：新西兰很少 30 年锁定一个利率，通常每 6 个月、1 年、2 年或 3 年重锁一次（Refix）。老手常把房贷拆成 2–3 笔不同到期日分散利率波动风险，并留一小笔做 Offset（对冲账户）——把应急现金存进去直接 100% 抵扣房贷利息且零税负！', en: 'Split mortgages across staggered fixed terms plus a small Offset portion so your emergency savings directly save tax-free mortgage interest!' },
          { zh: '👨‍👩‍👧 寿险（Life）与收入保障险（Income Protection / Mortgage Protection）：ACC 只赔意外不赔生病！如果家庭顶梁柱患重疾（如中风、癌症）无法工作，收入保障险每月按比例发生活费，保住房子不断供。', en: 'Remember ACC excludes illness—Life and Mortgage/Income Protection shield your family if serious illness strikes.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l27-q1',
        prompt: {
          zh: '你打算 3 个月后向银行申请买房贷款，手里有两张平时根本不刷、但合计授信额度高达 NZ$25,000 的信用卡。银行审批房贷时会怎么看这两张卡？',
          en: 'You are applying for an NZ mortgage in 3 months and hold two unused credit cards with $25,000 combined credit limit. How do NZ banks assess them?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '即使一分钱没刷，银行也会按“可能随时刷爆 $25,000”来计算潜在还款压力，大幅砍掉你的房贷可贷额度——建议提前降低额度或注销多余卡', en: 'Banks assess full credit limits as potential debt even at $0 balance, slashing mortgage borrowing capacity—reduce or cancel unused cards first' },
            isCorrect: true,
            feedback: { zh: '超级实用的买房前财务体检秘诀！', en: 'Spot on!' },
          },
          {
            id: 'b',
            text: { zh: '只要账单余额为 0，额度越高说明信用越好，能多贷 20 万', en: 'Higher unused limits boost your mortgage limit' },
            isCorrect: false,
            feedback: { zh: '恰恰相反！在新西兰责任借贷法规（CCCFA）下，未使用的信用卡额度会被当作潜在负债大幅拉低可贷金额。', en: 'Under NZ lending rules, unused credit limits reduce borrowing power!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '找一位独立的免费持牌保险顾问（Insurance Adviser）和贷款经纪（Mortgage Adviser），在身体健康时提前做一次家庭保障与征信体检。',
      en: 'Check your credit report free online and review your family insurance coverage before any health issues arise.',
    },
  },

  {
    id: 'l-28',
    number: 28,
    moduleId: 'mod-5',
    title: {
      zh: '新移民跨境税务与金融合规：4 年海外免税期、FIF 与中新税务协定',
      en: 'Cross-Border Tax: 4-Year Transitional Exemption, FIF & China-NZ DTA',
    },
    summary: {
      zh: '彻底掌握新移民含金量最高的财税红利——4 年海外被动收入免税期（Transitional Tax Residency），搞懂 FIF 海外股票投资税（含 2026 新规）与全球征税触发节点。',
      en: 'Maximise NZ’s 4-year transitional tax exemption on foreign passive income, understand FIF thresholds (including 2026 reforms), and plan before Year 4 ends.',
    },
    targetLevel: 4,
    durationMin: 9,
    xpReward: 85,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Inland Revenue (ird.govt.nz) / NZ-China Double Tax Agreement',
    terms: [
      { term: 'Transitional Tax Resident', phonetic: '/trænˈzɪʃənl/', zh: '过渡税务居民（首次定居或离境 10 年+回流自动享有约 48 个月大部分海外被动收入免税！）' },
      { term: 'FIF (Foreign Investment Fund)', phonetic: '/ef aɪ ef/', zh: '海外投资基金税制（过渡期结束后，持有海外股票/美股/港股成本超 NZ$50,000 须按 FIF 申报！）' },
      { term: 'DTA (Double Tax Agreement)', phonetic: '/diː tiː eɪ/', zh: '中新避免双重征税协定（避免同一笔收入在两国重复全额交税）' },
      { term: '183-Day Rule & PPOA', phonetic: '/ˈpɜːmənənt pleɪs/', zh: '新西兰税务居民两大判定标准：任意 12 个月住满 183 天，或在新西兰建立永久居住地（PPOA）' },
      { term: 'CRS (Common Reporting Standard)', phonetic: '/siː ɑː es/', zh: '全球金融账户涉税信息自动交换（中新两地银行账户余额与利息会自动互通！）' },
    ],
    cards: [
      {
        id: 'l28-c1',
        type: 'concept',
        title: {
          zh: '新移民黄金税务大礼包：4 年海外收入免税期（Transitional Tax Residency）',
          en: 'The Golden Migrant Perk: 4-Year Transitional Tax Exemption',
        },
        body: {
          zh: '新西兰对普通税务居民实行全球征税，但为了吸引国际人才，法律自动送给首次成为新西兰税务居民的新移民（或已非税务居民满 10 年的回流者）一份长达约 48 个月的超级免税窗口！',
          en: 'New migrants automatically receive a ~4-year temporary exemption from NZ tax on most foreign passive income:',
        },
        keyPoints: [
          { zh: '✅ 4 年内免税的海外收入：海外银行存款利息、海外房产租金、海外股票股息与资本利得、海外养老金/信托收益，并且这 4 年内完全豁免复杂的 FIF 海外股票税！', en: 'Exempt for ~4 years: overseas interest, foreign rental income, foreign dividends, and FIF rules.' },
          { zh: '❌ 4 年内依然必须交新西兰税的收入：你在新西兰本地赚的所有工资/生意收入，以及你人在新西兰境内远程为海外公司打工赚的劳务/薪资收入（Personal Services Income）！', en: 'NOT exempt: NZ-sourced income AND foreign employment/personal services income performed while physically in NZ!' },
          { zh: '🚨 极易踩爆的自毁按钮：申请 Working for Families（家庭退税补贴）会立刻永久作废你（及配偶）的 4 年海外免税资格！如果海外有较多资产/租金/股票，申请家庭补贴前务必先找持牌 NZ 会计师算总账！', en: 'WARNING: Applying for Working for Families tax credits permanently forfeits your 4-year transitional exemption!' },
        ],
      },
      {
        id: 'l28-c2',
        type: 'warning',
        title: {
          zh: '第 4 年到期前必做规划：FIF 海外股票税（$50,000 成本红线 + 2026 新政）',
          en: 'Planning Before Year 4 Ends: FIF ($50k Threshold) & 2026 Reforms',
        },
        body: {
          zh: '一旦 4 年过渡期结束，你正式进入全球征税，必须直面新西兰著名的 FIF（Foreign Investment Fund）规则（美股、港股、A 股、非澳新海外 ETF 均受管辖）：',
          en: 'Once your 4-year exemption ends, foreign equities become subject to NZ’s FIF rules:',
        },
        keyPoints: [
          { zh: '💰 NZ$50,000 成本豁免线（De Minimis）：个人名下持有的海外股票总买入成本（Cost Basis，非市值！）如果 ≤ NZ$50,000（夫妻分开独立账户可各享 $50,000），只需按实际收到的股息交税，免按 FIF 估算！', en: 'If total foreign share COST stays ≤ NZ$50,000 per individual, you are exempt from FIF and only pay tax on actual dividends.' },
          { zh: '📊 超过 $50,000 成本：传统上需按 FDR（每年按年初市值 5% 视同收益交税，哪怕没卖股票！）或 CV（当年实际涨跌，跌了可按 0 报税）择优申报；2026 年税法改革也已重点放宽部分新移民非上市/特定海外股权适用实收法（RAM）以减少现金流痛点。', en: 'Above $50k cost, FDR (5% deemed return) or CV applies; 2026 tax legislation also expanded Revenue Account Method (RAM) relief for certain migrant unlisted foreign shares.' },
          { zh: '💡 省心本地替代方案：通过新西兰本地 PIE 基金（如 Kernel / Simplicity / InvestNow Foundation Series US 500）投资全球或标普 500 指数，基金公司自动帮你处理全部 FIF 税务且税率最高封顶 28%（低于高收入 33%/39% 个税）！', en: 'NZ-domiciled PIE funds (Kernel, Simplicity, InvestNow) handle FIF automatically and cap tax at 28% PIR!' },
        ],
      },
      {
        id: 'l28-c3',
        type: 'checklist',
        title: {
          zh: 'CRS 信息互通时代：合法报税与中新免双重征税',
          en: 'Living Cleanly in the CRS Era & Using the China-NZ Tax Treaty',
        },
        body: {
          zh: '中国与新西兰均已全面实施 CRS（金融账户涉税信息自动交换），两地银行账户利息和金融资产信息早已透明互通，绝不要抱侥幸心理瞒报：',
          en: 'China and NZ automatically exchange bank/financial account data under CRS—stay 100% compliant:',
        },
        keyPoints: [
          { zh: '① 过渡期第 3 年半时，花几百纽币找熟悉跨境税务的 NZ 注册会计师（CA）做一次全身税务规划，理清国内房产、股票、理财和养老金的处置策略。', en: 'Book a cross-border NZ Chartered Accountant (CA) at Year 3.5 before your transitional exemption expires.' },
          { zh: '② 根据中新 DTA 协定，若第 4 年后你在国内已合法缴纳过所得税（保留完税证明），可在新西兰申报时申请 Foreign Tax Credit（海外税收抵免），只补差额不重复交两遍全税！', en: 'Under the China-NZ DTA, claim Foreign Tax Credits in NZ for tax already paid in China (keep official tax receipts).' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l28-q1',
        prompt: {
          zh: '你刚登陆新西兰第 2 年（正处于 4 年过渡税务居民免税期内），在国内有两套收租房产和美股账户。突然听说可以申请一点 Working for Families 家庭补贴，直接点提交了。最严重的隐藏后果是？',
          en: 'In Year 2 of your 4-year transitional tax exemption (with overseas rentals & US stocks), you apply for Working for Families. What happens?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '申请 Working for Families 会立刻永久丧失剩余的 4 年海外收入免税资格，导致海外房租和美股提前进入新西兰全球征税！', en: 'Claiming Working for Families immediately and permanently forfeits your 4-year transitional exemption!' },
            isCorrect: true,
            feedback: { zh: '价值几万纽币的避坑知识点！凡海外有被动资产的新移民，前 4 年千万别随手乱点家庭退税补贴！', en: 'A mistake worth tens of thousands—always check with a CA first!' },
          },
          {
            id: 'b',
            text: { zh: '完全不影响，两项福利可以叠加享受', en: 'No impact—both can be claimed together freely' },
            isCorrect: false,
            feedback: { zh: '大错特错！IRD 明文规定一旦领取 Working for Families 即视同放弃过渡免税期且不可逆转！', en: 'IRD rules explicitly revoke transitional residency once WfF is claimed!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '在日历上标出你成为新西兰税务居民满 3.5 年的提醒日期，提前做好海外股票、房产与本地 PIE 基金的配置衔接（本节供科普，实操请咨询持牌 NZ CA）。',
      en: 'Set a calendar reminder at Year 3.5 of NZ tax residency to consult a licensed NZ Chartered Accountant.',
    },
  },

  {
    id: 'l-29',
    number: 29,
    moduleId: 'mod-5',
    title: {
      zh: '消费维权尚方宝剑：《消费者保障法》CGA 与 $60,000 小额仲裁庭',
      en: 'Consumer Power: Consumer Guarantees Act (CGA) & $60k Disputes Tribunal',
    },
    summary: {
      zh: '彻底掌握新西兰让商家最敬畏的两大法律武器：凌驾于“1年保修期”之上的 CGA 免费维修/退换权，以及 2026 年 1 月上限翻倍至 $60,000 的免律师 Disputes Tribunal！',
      en: 'Wield NZ’s strongest consumer weapons: the CGA (which overrides 1-year warranties) and the Disputes Tribunal (doubled to $60,000 from Jan 2026, no lawyers allowed).',
    },
    targetLevel: 2,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Consumer Protection NZ / Ministry of Justice (Disputes Tribunal Amendment Act 2025)',
    terms: [
      { term: 'CGA (Consumer Guarantees Act)', phonetic: '/ˌsiː dʒiː ˈeɪ/', zh: '《消费者保障法》（商品须质量合格、耐用达合理寿命，凌驾于商家短保修期之上！）' },
      { term: 'Fair Trading Act (FTA)', phonetic: '/feə ˈtreɪdɪŋ/', zh: '《公平交易法》（严禁虚假广告、价格误导、虚构原价打折）' },
      { term: 'Extended Warranty', phonetic: '/ɪkˈstendɪd/', zh: '商家推销的付费延保（在新西兰往往多余！因为 CGA 本身就保合理使用寿命）' },
      { term: 'Disputes Tribunal ($60,000)', phonetic: '/dɪˈspjuːts/', zh: '小额仲裁庭（2026.01.24 起索赔上限翻倍至 NZ$60,000，不许请律师，成本极低！）' },
      { term: 'Acceptable Quality', phonetic: '/əkˈseptəbl/', zh: '合理品质标准（$2,500 笔记本或洗衣机合理寿命远超 1 年，用 15 个月坏了照样受 CGA 保护！）' },
    ],
    cards: [
      {
        id: 'l29-c1',
        type: 'concept',
        title: {
          zh: '为什么新西兰几乎不需要买付费“延保（Extended Warranty）”？',
          en: 'Why You Rarely Need Extended Warranties in New Zealand',
        },
        body: {
          zh: '在 Noel Leeming、Harvey Norman、PB Tech 买家电电脑时，店员常极力推销几百刀的 3 年延保。其实新西兰《消费者保障法》（CGA）比几乎任何商业保修都强硬：商品必须具备与价格相匹配的“合理耐用年限（Reasonable Durability）”！',
          en: 'Under the Consumer Guarantees Act (CGA), goods must last a reasonable time for their price—completely overriding short 12-month manufacturer warranties:',
        },
        keyPoints: [
          { zh: '📺 举例：花 $2,000 买的冰箱、洗衣机、电视或高端笔记本，哪怕厂家保修只写了 1 年，如果第 18 个月主板自然烧了，零售商依法必须免费维修、换新或退款！', en: 'A $2,000 fridge or laptop dying at 18 months is STILL covered by CGA—retailers cannot hide behind a 1-year warranty!' },
          { zh: '🏢 谁来负责？直接卖给你东西的新西兰零售商（Retailer）承担首要法定责任！他们绝不能推诿说“你去联系苹果/三星海外厂家”！', en: 'The NZ retailer who sold it to you is legally responsible—they cannot palm you off to the manufacturer!' },
          { zh: '📌 注意排除范围：CGA 仅保护个人/家庭消费向商家（In Trade）购买的商品与服务；私人二手买卖（Trade Me 个人卖家）和“自己买错颜色反悔（Change of Mind）”不受 CGA 强制退货保护！', en: 'CGA covers consumer purchases from businesses (not private sales or simple change-of-mind returns).' },
        ],
      },
      {
        id: 'l29-c2',
        type: 'comparison',
        title: {
          zh: '【2026.01.24 生效】Disputes Tribunal 小额仲裁庭上限翻倍至 $60,000！',
          en: 'Disputes Tribunal Limit Doubled to $60,000 (Effective 24 Jan 2026)',
        },
        body: {
          zh: '如果商家死活赖账、装修工干成烂尾工程、车商卖故障车拒修、或合租室友卷押金跑路，别觉得“请律师打官司太贵只能认栽”！新西兰有全社会公认最好用的平民维权神器——Disputes Tribunal（小额仲裁庭）！',
          en: 'Since 24 January 2026, the Disputes Tribunal handles claims up to NZ$60,000 quickly, privately, and without lawyers:',
        },
        keyPoints: [
          { zh: '⚖️ 索赔上限翻倍：2026 年 1 月 24 日起从原来的 $30,000 翻倍至 NZ$60,000（绝大部分汽车纠纷、家装烂尾、合租押金、商业消费维权全部覆盖！）。', en: 'Maximum claim doubled from $30,000 to $60,000.' },
          { zh: '🚫 双方严禁请律师出庭！由专业仲裁官（Referee）主持私密听证会，大公司也不能派高薪律师欺负普通移民，只看事实证据和情理法！', en: 'Lawyers are NOT allowed to represent either side—level playing field!' },
          { zh: '💵 极低申请费（按标的阶梯收费）：$2,000 以下仅约 $61；$2,000–$4,999 约 $122；$5,000–$30,000 约 $243；$30,001–$60,000 档为 $468（全部可在 justice.govt.nz 在线递交！）。', en: 'Affordable tiered filing fees ($61 to $468 for $30k–$60k claims), filed online at justice.govt.nz.' },
        ],
      },
      {
        id: 'l29-c3',
        type: 'dialogue',
        title: {
          zh: '一招镇住推诿店员的 CGA 维权英文话术 & 邮件模板',
          en: 'Polite But Firm CGA Escalation Script That Works Every Time',
        },
        body: {
          zh: '在新西兰不需要大吵大闹，只要礼貌平静地说出 "Consumer Guarantees Act" 三个词，绝大多数正规连锁店经理态度立刻 180 度大转弯：',
          en: 'Stay calm, polite, and cite the exact law—managers know their CGA obligations:',
        },
        dialogueLines: [
          {
            speaker: 'Store Staff',
            en: 'Sorry, your laptop is 16 months old and the 1-year manufacturer warranty has expired, so you’ll need to pay $650 for repairs.',
            zh: '抱歉，您的笔记本买了 16 个月，厂家 1 年保修过期了，维修需要自付 $650。',
          },
          {
            speaker: 'You',
            en: 'Kia ora, I understand the manufacturer’s warranty is 12 months, however under New Zealand’s Consumer Guarantees Act (CGA), a $2,200 laptop is expected to last significantly longer than 16 months with normal use. As the retailer, could we please arrange a free remedy (repair, replacement, or refund) under the CGA? Happy to follow up in writing if you need manager approval.',
            zh: '你好，我理解厂家质保是 12 个月，但依据新西兰《消费者保障法》（CGA），一台 $2,200 的笔记本在正常使用下合理寿命远超 16 个月。作为零售商，请问是否可以按 CGA 安排免费维修、更换或退款？如需经理审批我也可以发书面邮件跟进。',
            subtextZh: '把这句话发给客服邮箱并抄送门店，若 7 天内仍拒绝，直接回复将向 Disputes Tribunal 递交申诉，90% 的商家会立刻妥协！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l29-q1',
        prompt: {
          zh: '2026 年你找一家持牌装修公司花 $42,000 翻新厨房，完工后发现橱柜严重歪斜漏水且对方拒不返工。你能向 Disputes Tribunal（小额仲裁庭）直接起诉索赔吗？',
          en: 'In 2026 a renovation company botches your $42,000 kitchen and refuses to fix it. Can you claim the full amount at the Disputes Tribunal?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '可以！2026 年 1 月 24 日起 Disputes Tribunal 索赔上限已翻倍至 $60,000，无需请律师，缴 $468 申请费即可在线立案', en: 'Yes—from 24 Jan 2026 the limit doubled to $60,000 (filing fee $468, no lawyers allowed)' },
            isCorrect: true,
            feedback: { zh: '太给力了！再也不用因为标的超过 3 万被迫去花大钱请律师打地方法院官司了！', en: 'Spot on!' },
          },
          {
            id: 'b',
            text: { zh: '不行，小额仲裁庭上限只有 $30,000，超过必须请高价律师打地方法院官司', en: 'No, it is still capped at $30,000 so you must hire lawyers for District Court' },
            isCorrect: false,
            feedback: { zh: '那是 2026 年 1 月之前的旧上限啦！现在上限已经是 $60,000！', en: 'Outdated limit—it doubled to $60,000 on 24 January 2026!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '以后买任何大件家电、数码或从车商买车，务必拍照保存电子发票（Receipt），遇质量推诿第一时间上 consumerprotection.govt.nz 查 CGA 模板信！',
      en: 'Snap photos of all major receipts and bookmark consumerprotection.govt.nz.',
    },
  },

  {
    id: 'l-30',
    number: 30,
    moduleId: 'mod-5',
    title: {
      zh: '新西兰高发防诈骗大全、警务流程与 2026 反跟踪骚扰/安全资源',
      en: 'Anti-Scam Shield, NZ Policing & 2026 Harassment / Personal Safety Laws',
    },
    summary: {
      zh: '拆解专盯新西兰新移民的 6 大高发骗局（假 NZ Post/Waka Kotahi 短信、假使领馆、杀猪盘、租房定金骗局），以及 2026.05 反跟踪骚扰入罪与家暴安全援助。',
      en: 'Spot NZ’s top 6 migrant-targeted scams (fake NZTA/NZ Post texts, embassy spoofing, rental scams) and know NZ’s May 2026 stalking law & safety helplines.',
    },
    targetLevel: 2,
    durationMin: 7,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Own Your Online (NCSC / CERT NZ) / NZ Police / Ministry of Justice',
    terms: [
      { term: '7726 (SPAM)', phonetic: '/ˈsevən ˈsevən tuː sɪks/', zh: '新西兰内政部免费举报诈骗短信短号（收到钓鱼短信免费转发到 7726！）' },
      { term: 'NCSC / Own Your Online', phonetic: '/ˌen siː es ˈsiː/', zh: '新西兰国家网络安全中心防骗官网 ownyouronline.govt.nz' },
      { term: 'Stalking & Harassment (2026 Law)', phonetic: '/ˈstɔːkɪŋ/', zh: '2026 年 5 月起新西兰正式将跟踪骚扰单独立罪，最高可判 5 年监禁！' },
      { term: 'Victim Support', phonetic: '/ˈvɪktɪm/', zh: '受害者免费支持热线 0800 842 846（遇犯罪/入室/诈骗创伤提供 24/7 免费帮扶）' },
      { term: 'Women’s Refuge / Shine', phonetic: '/ˈrefjuːdʒ/', zh: '反家暴 24/7 免费保密援助热线（0800 733 843 / 0508 744 633）' },
    ],
    cards: [
      {
        id: 'l30-c1',
        type: 'warning',
        title: {
          zh: '新西兰专坑华人和新移民的 6 大高发骗局（一个都别信！）',
          en: 'Top 6 Scams Targeting NZ Migrants Right Now',
        },
        body: {
          zh: '别以为到了海外治安好就没骗子——跨国电信诈骗和本地钓鱼短信在新西兰同样每天都在发生：',
          en: 'Scammers actively target NZ mobile numbers and Chinese-speaking communities:',
        },
        keyPoints: [
          { zh: '① 假 NZ Post / Waka Kotahi（NZTA）/ IRD 钓鱼短信：谎称“你有包裹未派送/过路费欠 $3.50/退税待领”，附带短链接骗你输银行卡和短信验证码！记住：政府和邮局绝不会发链接让你在短信里输卡号！', en: 'Fake NZ Post / NZTA toll / IRD refund texts—never click SMS links asking for card or banking logins!' },
          { zh: '② 假使领馆 / 假国内公检法电话：自动语音说“您有一份重要领事文件未领，请按 1 接中文客服”，随后恐吓你卷入洗钱案要转保证金——立刻挂断！', en: 'Robocalls claiming to be the Embassy or overseas police—hang up immediately!' },
          { zh: '③ 假银行客服索要远程控制（AnyDesk / TeamViewer）：骗子冒充 ANZ/ASB 风控部称你账户被盗，诱导你装远程软件或念出动态验证码——真银行绝不会索要你的密码、验证码或远程控制电脑！', en: 'Real NZ banks NEVER ask for your PIN, 2FA code, or remote screen-sharing.' },
          { zh: '④ 私人换汇骗局、租房先付定金骗局与社交媒体高回报加密货币“杀猪盘”。', en: 'Informal FX swaps, sight-unseen rental deposits, and crypto romance/investment scams.' },
        ],
      },
      {
        id: 'l30-c2',
        type: 'checklist',
        title: {
          zh: '如果不幸被骗或遇到骚扰威胁，黄金 30 分钟应急止损步法',
          en: 'Emergency Playbook If You Click a Scam Link or Face Harassment',
        },
        body: {
          zh: '万一不小心点错链接或转了账，千万别因为害羞隐瞒，黄金半小时内行动最有机会追回损失：',
          en: 'Act fast without embarrassment if you suspect fraud or personal danger:',
        },
        keyPoints: [
          { zh: '① 立刻致电你的新西兰银行 24/7 欺诈冻结专线（如 ANZ/ASB/BNZ App 紧急冻卡），要求拦截转账并换新卡！', en: 'Freeze your card immediately in your bank app and call your bank’s 24/7 fraud line.' },
          { zh: '② 把诈骗短信原封不动免费转发给内政部短号 **7726** 举报，同时在 **105.police.govt.nz** 报警并向 **ownyouronline.govt.nz** 提交网络诈骗报告。', en: 'Forward scam texts free to 7726, report to Police 105, and log at ownyouronline.govt.nz.' },
          { zh: '③ 2026 年 5 月反跟踪骚扰新法生效：如果遭遇反复恶意尾随、网络人肉骚扰或持续恐吓（哪怕未造成身体伤害），保留所有截图/行车记录仪证据立刻报警方（紧急 111 / 非紧急 105），最高可判 5 年监禁并可申请法院限制令！', en: 'Under NZ’s May 2026 Stalking & Harassment Act, repeated stalking/cyber-harassment is a standalone criminal offence carrying up to 5 years prison—save all screenshots and report to Police.' },
          { zh: '④ 新西兰对家庭暴力（Family Violence，包括语言精神控制、经济控制与肢体暴力）零容忍！无论什么签证，遭遇家暴绝不会因此被遣返（反而有专门家暴受害者签证保护！），随时致电 Shine 0508 744 633 或 111 求助。', en: 'NZ has zero tolerance for family violence—migrant victims can access confidential help (Shine 0508 744 633) and dedicated Family Violence Visas.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l30-q1',
        prompt: {
          zh: '手机收到一条短信：“NZTA: You have an unpaid toll of $2.60, pay now at nzta-pay-nz.com to avoid a $40 penalty.” 最正确的处理方式是？',
          en: 'You get a text: "NZTA: Unpaid $2.60 toll, pay at nzta-pay-nz.com to avoid a $40 penalty." What should you do?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '绝不点链接！这是钓鱼假域名（真官网是 nzta.govt.nz），免费转发该短信到 7726 举报后删除', en: 'Never click—fake domain! Forward the text free to 7726 to report and delete it' },
            isCorrect: true,
            feedback: { zh: '认准新西兰政府唯一官方顶级域名 `.govt.nz`！转发 7726 还能帮全纽人民拦截骗子！', en: 'Spot on—always check for official .govt.nz domains and forward scams to 7726!' },
          },
          {
            id: 'b',
            text: { zh: '才 $2.60 怕罚款赶紧点进去刷卡交了', en: 'Pay the $2.60 quickly to avoid the $40 fine' },
            isCorrect: false,
            feedback: { zh: '骗子就是故意把金额写得很小降低你防备，输完卡号和验证码瞬间就能盗刷你几千纽币！', en: 'Small amounts are bait to harvest your credit card and 2FA code!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '记住两点防身法则：新西兰所有真政府网站一律以 `.govt.nz` 结尾；收到可疑短信免费转发给 **7726**！',
      en: 'Trust only .govt.nz government websites and forward any suspicious SMS free to 7726.',
    },
  },
];
