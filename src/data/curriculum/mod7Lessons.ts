import type { Lesson } from '../../types';

/**
 * Module 7: 医疗、家庭、教育与心理融入 (Lessons #37 – #42)
 * Verified against Health NZ, Employment NZ (Jul 2026 PPL $811.05), IRD (Apr 2026 Best Start), MoE (2028 NCEA overhaul), and MSD (NZ Super).
 */
export const MOD7_LESSONS: Lesson[] = [
  {
    id: 'l-37',
    number: 37,
    moduleId: 'mod-7',
    title: {
      zh: '看病进阶：公立专科转诊、成人看牙省钱攻略、配镜与体检',
      en: 'Healthcare Deep Dive: Specialist Referrals, Adult Dental & Check-Ups',
    },
    summary: {
      zh: '看懂新西兰公立转诊打分机制、为什么说“成人看牙是最大自费坑”及 4 招省钱法、验光配镜（Specsavers）与国内不同的年度体检逻辑。',
      en: 'Understand NZ specialist triage, survive high adult dental costs with 4 practical savings strategies, and navigate optometry and routine check-ups.',
    },
    targetLevel: 2,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Health New Zealand / NZ Dental Association',
    terms: [
      { term: 'Specialist Referral', phonetic: '/rɪˈfɜːrəl/', zh: '专科转诊信（新西兰不能自己直接挂医院专科号，必须先由 GP 写转诊信！）' },
      { term: 'Pharmac', phonetic: '/ˈfɑːmæk/', zh: '新西兰国家药品采购局（负责谈判公费补贴药清单，进清单的药几乎免费）' },
      { term: 'Community Services Card (CSC)', phonetic: '/kəˈmjuːnəti/', zh: '社区服务卡（低收入家庭/学生可申请，大幅减免 GP 诊费与看牙紧急补贴）' },
      { term: 'Dental Hygienist', phonetic: '/haɪˈdʒiːnɪst/', zh: '洗牙师（常规洗牙找 Hygienist 约 $150–$220，比找牙医本人便宜）' },
      { term: 'Specsavers / Bailey Nelson', phonetic: '/spekˈseɪvəz/', zh: '新西兰连锁平价验光配镜店（验光约 $60，常有买一送一框架活动）' },
    ],
    cards: [
      {
        id: 'l37-c1',
        type: 'concept',
        title: {
          zh: '公立专科等待名单 vs 私立专科：什么时候该自费或用商保？',
          en: 'Public Specialist Waitlists vs Private Care: How NZ Triage Works',
        },
        body: {
          zh: '新西兰医院看病不靠“凌晨抢号”，而是由 GP 写 Referral（转诊信）发往公立医院，医院专科团队按病情紧急度打分排期：',
          en: 'GP referrals to public hospital specialists are scored strictly on clinical urgency:',
        },
        keyPoints: [
          { zh: '🚨 高度危急或疑似恶性肿瘤（如癌症筛查阳性、急症心脏病）：公立系统极快且 100% 免费，2 周内直通检查与顶级治疗！', en: 'Urgent/suspected cancer cases are fast-tracked rapidly and 100% free in public hospitals.' },
          { zh: '⏳ 慢性非危急专科（皮肤科、轻度肠胃镜、骨科关节置换、耳鼻喉）：公立可能排队 4–12 个月甚至因分数不够被退回 GP 保守治疗！此时若有商业医疗险（或预算充足自费 $250–$450 看一次私立专科初诊）可在 1–2 周内看上。', en: 'Non-urgent chronic issues face long public waits—private insurance or paying ~$250–$450 for a private specialist consult cuts waits to 1–2 weeks.' },
          { zh: '🔬 验血与体检文化不同：新西兰不流行国内那种“每年花大钱做全身 CT 肿瘤标志物大套餐”，GP 遵循循证医学按年龄/家族史免费开针对性血液筛查（如血脂血糖肝肾功能、免费宫颈/乳腺/肠癌国家筛查项目）。', en: 'NZ favours evidence-based targeted screening (free national breast, cervical, and bowel screening) over annual full-body CT packages.' },
        ],
      },
      {
        id: 'l37-c2',
        type: 'warning',
        title: {
          zh: '成人看牙自费巨坑：真实价格与 4 招合法省钱秘籍！',
          en: 'Adult Dental Costs in NZ & 4 Smart Ways to Save Thousands',
        },
        body: {
          zh: '18 岁以下孩子在新西兰看牙（含补牙和常规检查，不含正畸箍牙）全部政府免费！但满 18 岁后牙科几乎全自费：常规检查+X 光约 $100–$150，补一颗牙 $250–$450，拔阻生智齿 $500–$900，根管+牙冠常达 $2,000–$3,500！',
          en: 'Under-18 basic dental is free, but adults pay full private fees ($250–$450 per filling, $2,000+ for root canal + crown):',
        },
        keyPoints: [
          { zh: '① 预防胜于一切：每天用电动牙刷+牙线（Floss），每年花 $180 定期洗牙检查，绝不拖到牙神经发炎花 $3,000！', en: 'Annual $180 clean/check prevents $3,000 root canals.' },
          { zh: '② 意外撞断牙/啃硬物崩裂立刻报 ACC！凡属外力意外导致的牙齿损伤，ACC 补贴一大笔治疗费（普通蛀牙不行）。', en: 'Accidental tooth damage (sports/falls/hard bone bite) qualifies for ACC subsidies!' },
          { zh: '③ 大学牙医学院教学诊所（奥塔哥大学但尼丁/奥克兰诊所）与部分连锁 GrabOne 团购新客洗牙套餐，费用可低 30%–50%。', en: 'University of Otago dental student clinics and GrabOne new-patient exam deals save 30–50%.' },
          { zh: '④ 回国探亲顺路看牙或配置含牙科的商保附加项（注意年度报销封顶通常 $500–$1,000，算清保费是否划算）。', en: 'Compare dental insurance caps ($500–$1,000/yr) carefully against annual premiums.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l37-q1',
        prompt: {
          zh: '你 30 岁，在新西兰打篮球时不小心被对手手肘撞断半颗门牙。看牙医时应该怎么做最省钱？',
          en: 'At age 30 you chip half your front tooth playing basketball in NZ. What saves you the most money at the dentist?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '立刻告诉牙医这是打球意外撞伤，请牙医当场申报 ACC 意外赔付补贴！', en: 'Tell the dentist it was a sports accident so they lodge an ACC dental claim immediately!' },
            isCorrect: true,
            feedback: { zh: '满分！虽然成人普通蛀牙自费，但意外撞断牙受 ACC 保护，能省下大几百甚至上千纽币！', en: 'Spot on—accidental tooth injury is covered by ACC!' },
          },
          {
            id: 'b',
            text: { zh: '成人看牙一律没有任何补贴，只能全额自费', en: 'Adults never receive any dental subsidy under any circumstances' },
            isCorrect: false,
            feedback: { zh: '错啦！ACC 明确涵盖意外导致的牙齿损伤！', en: 'ACC specifically covers accidental dental injuries!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '如果你符合年龄段，登录 timetoscreen.nz 查一下新西兰国家免费癌症筛查项目（乳腺/宫颈/肠癌均免费通知）！',
      en: 'Check free national screening programmes at timetoscreen.nz.',
    },
  },

  {
    id: 'l-38',
    number: 38,
    moduleId: 'mod-7',
    title: {
      zh: '生育、免费 LMC 助产士与 2026 带薪产假 / Best Start 福利全解',
      en: 'Maternity Care, Free LMC Midwives & 2026 Paid Parental Leave / Best Start',
    },
    summary: {
      zh: '读懂新西兰全球独树一帜的免费 LMC 助产士全程跟产体系、Plunket 免费母婴上门跟踪，以及 2026 年 7 月起带薪产假涨至 $811.05/周 与 2026.04 Best Start 收入门槛新规！',
      en: 'Navigate NZ’s free Lead Maternity Carer (LMC) midwife system, Plunket home visits, the July 2026 $811.05/wk Paid Parental Leave cap, and April 2026 Best Start rules.',
    },
    targetLevel: 2,
    durationMin: 9,
    xpReward: 80,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Health NZ / Employment NZ (Jul 2026) / IRD (Apr 2026 Best Start)',
    terms: [
      { term: 'LMC (Lead Maternity Carer)', phonetic: '/el em siː/', zh: '主责助产士（从怀孕验出立刻预约！孕检、接生、产后 6 周上门访视全程 100% 政府免费！）' },
      { term: 'Plunket', phonetic: '/ˈplʌŋkɪt/', zh: '新西兰公益母婴护理机构（宝宝 6 周到 5 岁免费上门体检与育儿指导，24h 热线 0800 933 922）' },
      { term: 'Paid Parental Leave ($811.05/wk)', phonetic: '/pəˈrentl liːv/', zh: '2026.07.01 起政府带薪产假上限升至税前 NZ$811.05/周（最长 26 周，自雇最低 $239.50/周）' },
      { term: 'Best Start ($77/wk)', phonetic: '/best stɑːt/', zh: '新生儿育儿补贴（$77/周；2026.04.01 起出生宝宝第 1 年起即实行 $79,000 家庭年收入审查！）' },
      { term: 'Find Your Midwife', phonetic: '/ˈmɪdwaɪf/', zh: '全纽官方助产士查找网 findyourmidwife.co.nz（可筛选说中文的华人助产士！）' },
    ],
    cards: [
      {
        id: 'l38-c1',
        type: 'checklist',
        title: {
          zh: '在新西兰怀孕第一步：立刻上 findyourmidwife.co.nz 抢订免费 LMC 助产士！',
          en: 'Pregnant in NZ? Book Your Free LMC Midwife Immediately!',
        },
        body: {
          zh: '新西兰公立体系下，正常怀孕不是去医院挂产科主任号，而是由一位专属注册助产士（LMC）从孕早期一路陪护到产后 6 周！符合公立医疗资格（公民/居民/2年+工签，或配偶符合资格！）的孕妈全程免费：',
          en: 'Eligible expectant mothers choose a dedicated Lead Maternity Carer (LMC) midwife funded 100% by the government:',
        },
        keyPoints: [
          { zh: '① 一验出两条杠立刻预约！好口碑（尤其是会说中文）的 LMC 极其抢手，孕 6–8 周就可能约满，上 findyourmidwife.co.nz 按地区与语言发消息！', en: 'Book at 5–8 weeks via findyourmidwife.co.nz—popular and Mandarin-speaking midwives book out fast!' },
          { zh: '② 如出现高危妊娠（妊娠糖尿病、前置胎盘、双胞胎或需剖宫产），LMC 会无缝免费转诊公立医院产科专科医生（Obstetrician）联合保驾护航！', en: 'High-risk pregnancies are seamlessly referred to free public hospital obstetricians.' },
          { zh: '③ 产后 6 周由 LMC 上门给妈妈和新生儿检查，满 6 周后无缝交接给公益机构 Plunket 一直免费跟踪宝宝发育到 5 岁（附带一本蓝色 Well Child 成长手册）！', en: 'After 6 weeks of midwife home visits, Plunket provides free Well Child checks up to age 5.' },
        ],
      },
      {
        id: 'l38-c2',
        type: 'comparison',
        title: {
          zh: '【2026 最新育儿真金白银】带薪产假 $811.05/周 + Best Start 重大变化',
          en: '2026 Parental Benefits: $811.05/wk PPL & April 2026 Best Start Rules',
        },
        body: {
          zh: '2026 年新西兰育儿补贴有两项核心数字变化，准爸妈务必按最新标准算账：',
          en: 'Two key 2026 financial updates for new NZ parents:',
        },
        keyPoints: [
          { zh: '💰 政府带薪产假（Paid Parental Leave，2026.07.01 生效）：产前 52 周内至少有 26 周平均每周工作 ≥10 小时（雇员或自雇均可），可连续领取最长 26 周带薪产假！2026.07 起最高标准升至税前 NZ$811.05/周（自雇最低 $239.50/周），在 myIR 在线申领！', en: 'Paid Parental Leave (from 1 Jul 2026): up to 26 weeks at max $811.05/wk before tax ($239.50/wk self-employed minimum).' },
          { zh: '🍼 Best Start 育儿补贴（$77/周，2026.04.01 重大收紧！）：过去新生儿第 1 年无论家庭多富都能无条件领 $77/周；但自 2026 年 4 月 1 日及之后出生的宝宝，从第 1 年起即实行收入审查——家庭年收入超过 NZ$79,000 后补贴将按比例递减！', en: 'Best Start ($77/wk): for babies born on/after 1 Apr 2026, income testing applies from Year 1 (abates above $79,000 family income)!' },
          { zh: '⚠️ 再次提醒跨境税务红线：若你还在 4 年新移民海外收入免税期内且海外资产较多，申领 Best Start / Working for Families 前务必先咨询会计师以免触发放弃 4 年免税期！', en: 'Remember: claiming Working for Families / Best Start can forfeit your 4-year transitional tax exemption—check with an accountant first!' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l38-q1',
        prompt: {
          zh: '你的宝宝于 2026 年 8 月在新西兰出生，你和配偶税前家庭总年收入为 NZ$160,000。关于 Best Start（$77/周）补贴，以下哪项准确？',
          en: 'Your baby is born in August 2026 and your household income is $160,000. Which statement about Best Start ($77/wk) is accurate?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '2026 年 4 月 1 日起出生的新生儿从第 1 年起就实行 $79,000 收入审查，高收入家庭不再自动全额领取第 1 年 Best Start', en: 'For babies born on/after 1 Apr 2026, Best Start is income-tested above $79,000 from Year 1' },
            isCorrect: true,
            feedback: { zh: '精准掌握 2026 年 4 月新政！再也不会被旧小红书帖子误导啦！', en: 'Spot on with the April 2026 change!' },
          },
          {
            id: 'b',
            text: { zh: '所有宝宝第 1 年不管家庭年薪多少都能无条件领满 $77/周', en: 'All babies receive $77/wk in Year 1 regardless of income' },
            isCorrect: false,
            feedback: { zh: '那是 2026 年 4 月 1 日之前出生宝宝的旧规啦！', en: 'That only applies to babies born BEFORE 1 April 2026.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '备孕或已孕家庭立刻收藏 findyourmidwife.co.nz（找助产士）与 plunket.org.nz（24 小时免费母婴热线 0800 933 922）。',
      en: 'Bookmark findyourmidwife.co.nz and PlunketLine (0800 933 922).',
    },
  },

  {
    id: 'l-39',
    number: 39,
    moduleId: 'mod-7',
    title: {
      zh: '新西兰教育全景：ECE 20小时补贴、学区（School Zone）与 NCEA 2028 大改',
      en: 'NZ Education Guide: 20 Hours ECE, School Zones, Equity Index & NCEA Overhaul',
    },
    summary: {
      zh: '从 3 岁幼儿园 20 小时政府补贴到 18 岁高中升学全打通：怎么看懂 Equity Index（取代旧 Decile）、学区租房买房规则，以及 NCEA 将于 2028–2030 全面改革为分级证书制度！',
      en: 'Navigate NZ schooling from 20 Hours ECE to secondary qualifications: School Zones, the Equity Index (replacing Deciles), and the 2028–2030 NCEA overhaul.',
    },
    targetLevel: 3,
    durationMin: 9,
    xpReward: 80,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Ministry of Education (education.govt.nz) / Education Counts',
    terms: [
      { term: '20 Hours ECE', phonetic: '/iː siː iː/', zh: '3–5 岁幼儿园政府免费 20 小时/周补贴（每天最多 6 小时，不管收入高低人人可享！）' },
      { term: 'School Zone (In-Zone)', phonetic: '/skuːl zəʊn/', zh: '公立学校学区（住进学区内无论买房还是整租都有法定入学权！）' },
      { term: 'Equity Index (EQI)', phonetic: '/ˈekwəti ˈɪndeks/', zh: '教育公平指数（已取代旧 Decile 1–10 分，数值越低代表生源家庭社会经济背景越富裕）' },
      { term: 'NCEA → 2028 Overhaul', phonetic: '/en siː iː eɪ/', zh: '新西兰高中体系：2028 年起逐步由 Y11 Foundational Award 与 Y12/Y13 新证书（A+至E评分）取代传统 NCEA' },
      { term: 'Term Dates (4 Terms)', phonetic: '/tɜːm/', zh: '新西兰中小学每年 4 个学期（每读 10 周放 2 周假，圣诞放 6 周大暑假！）' },
    ],
    cards: [
      {
        id: 'l39-c1',
        type: 'concept',
        title: {
          zh: '学前教育（ECE）：3–5 岁 20 小时免费补贴 + FamilyBoost 托儿退税',
          en: 'Early Childhood Education: 20 Hours ECE & FamilyBoost',
        },
        body: {
          zh: '新西兰幼儿园（Daycare / Kindergarten / Montessori）满 6 个月即可送，但 3 岁之前全自费（每周约 $300–$420）。熬到孩子满 3 周岁迎来重大减负：',
          en: 'Childcare becomes far more affordable once your child turns 3:',
        },
        keyPoints: [
          { zh: '👶 20 Hours ECE：所有 3、4、5 岁儿童（哪怕持工签子女只要在境内！）在参与补贴的持牌幼儿园，每周最多 20 小时（每天≤6小时）免收基础学费！', en: '20 Hours ECE covers up to 6 hrs/day (20 hrs/wk) for all 3–5 year olds at participating centres.' },
          { zh: '💰 FamilyBoost 托儿补贴退税：符合家庭收入门槛的家长可通过 myIR 每季度上传幼儿园账单申请部分学费现金返还！', en: 'Eligible working families can claim quarterly FamilyBoost childcare rebates via myIR.' },
          { zh: '🎂 5 岁生日即入小学：新西兰孩子满 5 周岁当天即可入读公立小学（Primary School，Year 1），义务教育免学费（仅偶有自愿 School Donation 与文具校服费）！', en: 'Children can start free state Primary School on their 5th birthday.' },
        ],
      },
      {
        id: 'l39-c2',
        type: 'comparison',
        title: {
          zh: '学区（School Zone）真相 & 读懂新指标 Equity Index（别再问 Decile 10 了！）',
          en: 'School Zones (Renting Counts!) & Equity Index Explained',
        },
        body: {
          zh: '在国内“学区房”必须买房落户，在新西兰只要你在目标名校的 **School Zone（学区边界内）合法整租居住**，你的孩子就享有与买房完全平等的法定入学权！',
          en: 'In New Zealand, renting inside a state school’s zone grants the exact same legal right to enrol as owning a house there:',
        },
        keyPoints: [
          { zh: '🗺️ 查学区唯一官方神器：上 educationcounts.govt.nz 的「Find a School」，输入精确地址立刻显示你家对应的小学（Primary）、初中（Intermediate Y7–8）和高中（Secondary Y9–13）！', en: 'Verify exact street-level zoning at educationcounts.govt.nz before signing a lease or buying!' },
          { zh: '📊 Equity Index（EQI，范围约 344–569）取代旧 Decile：注意方向刚好跟旧 Decile 相反——EQI 分数越低（如 360–400）代表生源社区平均经济条件越好，学校获额外政府扶贫拨款越少；分数越高代表获政府额外公平补助越多。它只衡量社区经济，绝不直接等同于教学好坏！', en: 'Equity Index replaced Deciles: LOWER EQI numbers indicate higher socio-economic communities (opposite to old Deciles).' },
          { zh: '🏫 选高中三大体系：主流公立高中多走本地体系，部分头部公立（如 Auckland Grammar、Macleans、Westlake）和私立名校同步开设 **Cambridge（剑桥 CIE）** 或 **IB 国际文凭**，方便申英美澳顶尖大学。', en: 'NZ high schools offer the national qualification alongside Cambridge (CIE) or IB at select state and private schools.' },
        ],
      },
      {
        id: 'l39-c3',
        type: 'warning',
        title: {
          zh: '【最新前瞻】传统 NCEA 将在 2028–2030 全面退出，改制新证书体系！',
          en: 'Major Education Reform: NCEA Replacement Starting 2028–2030',
        },
        body: {
          zh: '带学龄娃的家长务必关注新西兰教育部已正式宣布的高中升学制度大改：',
          en: 'Parents of school-age children should note the government’s structural replacement of NCEA:',
        },
        keyPoints: [
          { zh: '📅 2028 年起（Year 11）：取消传统 NCEA Level 1，推出 Foundational Award（基础读写算能力证书）。', en: 'From 2028 (Year 11): Foundational Award focusing on core literacy and numeracy.' },
          { zh: '📅 2029–2030 年起（Year 12 & 13）：过渡为学科导向的两级证书——NZ Certificate of Education（Y12）与 NZ Advanced Certificate of Education（Y13），采用更清晰易懂的 **A+ 到 E 六档评分制**，与海外名校录取更好衔接！', en: 'From 2029–2030 (Y12–13): subject-based NZ Certificate / Advanced Certificate of Education with clear A+ to E grades.' },
          { zh: '🏕️ 校园文化差异：新西兰学校极度重视户外露营（School Camp）、集体运动（游泳/橄榄球/篮网球）与家长志愿参与（PTA/协助带队），不要只盯着刷题成绩！', en: 'NZ schools prize School Camps, team sport, and parent volunteering—embrace the holistic culture!' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l39-q1',
        prompt: {
          zh: '你刚登陆奥克兰，还没买房，但在心仪的公立高中 School Zone（学区边界内）签了 1 年正式整租合同居住。你的孩子有权入读该公立高中吗？',
          en: 'You haven’t bought a home yet, but you rent a house legally inside a top state high school’s School Zone. Does your child have the right to enrol?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '完全有权！新西兰公立学区看的是实际真实居住地（提供租房合同与水电账单），租房与买房享有同等法定入学权', en: 'Yes! NZ state school zoning is based on genuine residence—renting gives equal enrolment rights to owning' },
            isCorrect: true,
            feedback: { zh: '超级实用的家庭规划常识！不过切记必须是真实居住，假借亲友地址被查实会被取消入学资格！', en: 'Spot on—just make sure it is your genuine primary residence!' },
          },
          {
            id: 'b',
            text: { zh: '不行，必须拥有房产证（Freehold Title）才能进学区', en: 'No, you must own a Freehold house to qualify for in-zone enrolment' },
            isCorrect: false,
            feedback: { zh: '错啦！新西兰租房完全享有学区入学权。', en: 'Renting in-zone qualifies equally under NZ education law.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '带娃租房或买房前，务必在 educationcounts.govt.nz 核对精确门牌号的学区归属，并预约一次 School Tour 实地参观校园氛围！',
      en: 'Check exact street zoning on educationcounts.govt.nz and book a school tour before choosing a suburb.',
    },
  },

  {
    id: 'l-40',
    number: 40,
    moduleId: 'mod-7',
    title: {
      zh: '社交礼仪与社区融入：Bring a plate、BYO、BBQ 与交本地朋友指南',
      en: 'Kiwi Social Etiquette: Bring a Plate, BYO, BBQs & Making Local Friends',
    },
    summary: {
      zh: '读懂新西兰社交密码：千万别真带个空盘子去聚会、不流行给小费、进门看主人拖鞋习惯，以及靠体育俱乐部/志愿服务打破“礼貌但难深交”的破冰攻略。',
      en: 'Master Kiwi hospitality rules (Bring a Plate, BYO, no tipping pressure, shoes off) and break past polite surface chats into real friendships.',
    },
    targetLevel: 2,
    durationMin: 7,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'New Zealand Now Community & Culture Guide',
    terms: [
      { term: 'Bring a Plate', phonetic: '/brɪŋ ə pleɪt/', zh: '聚餐自带一盘食物和大家分享（绝不是带个空盘子！）' },
      { term: 'BYO (Bring Your Own)', phonetic: '/ˌbiː waɪ ˈəʊ/', zh: '自带酒水饮料（去朋友家 BBQ 通常带自己喝的酒水 + 一道菜；部分中餐/泰餐厅支持 BYO 红酒收少量开瓶费 Corkage）' },
      { term: 'No Tipping Culture', phonetic: '/ˈtɪpɪŋ/', zh: '新西兰没有强制小费文化！（服务员拿法定最低工资 $23.95+，不给小费完全正常！）' },
      { term: 'Volunteer / Club', phonetic: '/ˌvɒlənˈtɪə/', zh: '新西兰交铁哥们最有效通道：运动俱乐部（羽毛球/跑步/网球/徒步）与社区公益（Volunteering NZ）' },
      { term: 'Jandals / Barefoot', phonetic: '/ˈbeəfʊt/', zh: '夏天超市和街上经常能看到 Kiwi 光脚逛街——纯粹随性文化，不必大惊小怪！' },
    ],
    cards: [
      {
        id: 'l40-c1',
        type: 'comparison',
        title: {
          zh: '新西兰社交礼仪 6 条潜规则（懂了瞬间融入！）',
          en: '6 Everyday Kiwi Social Rules You Will Use Weekly',
        },
        body: {
          zh: '新西兰人看似随和，其实有很多心照不宣的礼貌边界：',
          en: 'Kiwi hospitality is relaxed yet thoughtful—follow these 6 norms:',
        },
        keyPoints: [
          { zh: '🍽️ "Bring a plate" & BYO：受邀去 Kiwi 家 BBQ，自带一道容易分享的食物（春卷、饺子、凉拌沙拉、水果拼盘超受欢迎！）+ 自己想喝的饮料酒水，临走不必把没喝完的整箱酒全拿走。', en: 'Always bring a shareable dish ("a plate") and your own drinks (BYO) to a Kiwi BBQ.' },
          { zh: '💵 不需要给小费（No Tipping）：和北美完全不同！餐厅结账按账单原价刷卡即可，POS 机偶尔弹出小费界面直接大方点 "Skip / No Tip" 毫无压力！', en: 'Zero tipping pressure in NZ—clicking "No Tip" on payment terminals is completely normal.' },
          { zh: '👟 进别人家门：先看门口玄关有没有摆着一排鞋子，有的话自觉脱鞋（尤其毛利与亚洲家庭必脱鞋！）。', en: 'Glance at the doorway—if shoes are lined up, take yours off automatically.' },
          { zh: '⏰ 守时与提前通知：商业/医生/面试绝不迟到；私人聚会迟到 10–15 分钟提前发短信说一声；不能去务必提前告知（临时放鸽子很失礼）。', en: 'Be punctual for appointments and text early if running late or cancelling.' },
        ],
      },
      {
        id: 'l40-c2',
        type: 'checklist',
        title: {
          zh: '破解“新西兰人礼貌友好但很难深交”：4 个最有效的交友入口',
          en: 'Making Real Friends in NZ: 4 Proven Community Pathways',
        },
        body: {
          zh: '很多移民发现 Kiwi 表面上都笑眯眯 "How are ya?"，但下班后各自回家陪家人，很难走近。秘诀是融入**有固定每周共同活动的兴趣圈**：',
          en: 'Kiwis bond best through regular shared activities rather than forced networking:',
        },
        keyPoints: [
          { zh: '① Parkrun（每周六早 8 点全纽几十个公园免费 5 公里社区跑/快走，老少皆宜，跑完大家一起喝咖啡超容易交友！）。', en: 'Join Saturday 8am free Parkrun—friendly, zero pressure, coffee afterwards!' },
          { zh: '② 本地运动俱乐部 & Meetup：羽毛球、匹克球（Pickleball）、徒步俱乐部（Tramping Club）、桌游社，固定每周见一次面自然变熟！', en: 'Regular weekly clubs (badminton, tramping, pickleball, board games) build natural friendships.' },
          { zh: '③ 社区志愿服务（volunteeringnz.org.nz）：帮植树、照顾动物收容所（SPCA）、协助社区活动或学校 PTA，极受 Kiwi 尊重且最易结交志同道合的朋友。', en: 'Volunteering (conservation tree planting, SPCA, community events) connects you with warm locals.' },
          { zh: '④ 善用邻里 App Neighbourly：了解社区动态、互借工具、团购果蔬与邻里守望。', en: 'Join Neighbourly to stay connected with your immediate street and suburb.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l40-q1',
        prompt: {
          zh: '你在皇后镇一家普通餐厅吃完晚餐结账，刷卡机屏幕上弹出 "Add a tip? 10% / 15% / No Tip"。在新西兰点 "No Tip" 会很失礼吗？',
          en: 'At a restaurant in Queenstown, the payment terminal prompts "Add a tip? 10% / 15% / No Tip." Is tapping "No Tip" rude in NZ?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '完全不失礼！新西兰没有强制小费文化，员工领取法定高额底薪，只有遇到特别惊艳的服务才凭心意给', en: 'Not rude at all—NZ does not have a compulsory tipping culture; staff earn full statutory minimum wage+' },
            isCorrect: true,
            feedback: { zh: '放心大胆点 No Tip，很多本地 Kiwi 自己也不给小费且挺反感北美式小费弹窗！', en: 'Spot on!' },
          },
          {
            id: 'b',
            text: { zh: '非常失礼，必须至少给 15% 小费否则会被服务员追出来', en: 'Very rude—you must leave at least 15%' },
            isCorrect: false,
            feedback: { zh: '那是美国规则，不是新西兰！新西兰不需要被迫给小费。', en: 'That’s the US—not New Zealand!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '去 parkrun.co.nz 或 meetup.com 搜一个离你家 15 分钟车程内的周末兴趣活动，这周迈出交本地朋友第一步！',
      en: 'Find a local Saturday Parkrun or Meetup group near your suburb this week.',
    },
  },

  {
    id: 'l-41',
    number: 41,
    moduleId: 'mod-7',
    title: {
      zh: '移民心理健康、文化休克与冬季情绪自我照顾',
      en: 'Migrant Mental Wellbeing, Culture Shock & Winter Mood Care',
    },
    summary: {
      zh: '正视“蜜月期后的孤独低谷（6–18 个月常见）”、南半球 6–8 月漫长阴雨冬季的情绪调节、家庭代际文化磨合，以及新西兰全部免费的心理支持渠道。',
      en: 'Recognise the post-honeymoon migrant dip, beat NZ winter blues, navigate family generational shifts, and access free confidential mental health support.',
    },
    targetLevel: 3,
    durationMin: 6,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Mental Health Foundation NZ / Health NZ (1737)',
    terms: [
      { term: 'Culture Shock Curve', phonetic: '/ˈkʌltʃə ʃɒk/', zh: '跨文化适应 U 型曲线：蜜月期 → 挫败孤独低谷（常在第 4–12 个月）→ 逐步适应 → 真正融入' },
      { term: '1737 (Need to Talk?)', phonetic: '/wʌn ˈsevən θriː ˈsevən/', zh: '新西兰 24/7 免费保密心理支持热线（发短信或拨打 1737 即可连线受训咨询师）' },
      { term: 'HIP (Health Improvement Practitioner)', phonetic: '/hɪp/', zh: '驻点 GP 诊所的免费心理健康改善师（许多注册 GP 诊所提供 100% 免费心理面谈！）' },
      { term: 'Asian Family Services', phonetic: '/ˈeɪʒn/', zh: '亚裔家庭服务中心（免费普通话/粤语心理辅导热线 0800 862 342！）' },
      { term: 'SAD (Seasonal Affective)', phonetic: '/sæd/', zh: '冬季日照缩短引发的季节性情绪低落（补维生素 D + 晴天出门晒太阳极有效！）' },
    ],
    cards: [
      {
        id: 'l41-c1',
        type: 'concept',
        title: {
          zh: '落地 6 个月突然想家、觉得好安静好孤独？你不是脆弱，这是必经规律！',
          en: 'Feeling Lonely at Month 6? Understanding the Culture Shock Curve',
        },
        body: {
          zh: '几乎每位新移民都会经历相似的情绪曲线：前 2 个月看蓝天白云一切新鲜（蜜月期）；第 4–12 个月当新鲜感退去、遇到找工作受挫、晚上 6 点大街空无一人、父母远在万里之外时，突然袭来强烈的孤独感与自我怀疑。请一定告诉自己：**这极其正常，而且一定会过去！**',
          en: 'Almost every migrant hits a dip around Months 4–12 once the novelty wears off and quiet NZ evenings set in—this is normal and temporary.',
        },
        keyPoints: [
          { zh: '🌧️ 南半球冬季防抑郁（6–8 月）：下午 5 点就天黑、连绵阴雨，容易缺乏维生素 D 导致情绪低落。趁中午出太阳出去散步 20 分钟、保持规律运动、室内开足暖光灯与除湿机，效果立竿见影！', en: 'Combat June–August winter blues with midday sunlight walks, regular exercise, and Vitamin D.' },
          { zh: '🗣️ 勇敢求助不是丢人的事！新西兰全社会把看心理咨询师当成和去健身房一样正常健康的日常保养！', en: 'Seeking mental health support in NZ carries zero stigma—it is viewed as healthy self-care.' },
        ],
      },
      {
        id: 'l41-c2',
        type: 'checklist',
        title: {
          zh: '新西兰 4 个超好用且 100% 免费的中文/英文心理援助通道',
          en: '4 Free & Confidential Mental Wellbeing Channels in NZ',
        },
        body: {
          zh: '情绪低谷、失眠焦虑、夫妻或婆媳磨合压力大时，千万别一个人硬扛，这些全部免费且严格保密：',
          en: 'Reach out early—all 4 services are completely free and confidential:',
        },
        keyPoints: [
          { zh: '💛 Asian Family Services（亚裔家庭服务中心）：免费热线 0800 862 342（周一至周五 9am–8pm），直接提供普通话/粤语专业注册心理咨询师免费辅导！', en: 'Asian Family Services (0800 862 342): free Mandarin/Cantonese professional counselling!' },
          { zh: '💛 1737（Need to Talk?）：24/7 全天候免费发短信或致电 1737，随时有人听你倾诉。', en: 'Call or text 1737 anytime 24/7.' },
          { zh: '💛 你注册的 GP 诊所免费 HIP（Health Improvement Practitioner）：直接问你的 GP 诊所前台有没有免费 HIP 预约，通常一周内即可免费面对面聊 30 分钟且不收挂号费！', en: 'Ask your GP clinic for a free appointment with their in-house Health Improvement Practitioner (HIP).' },
          { zh: '💛 雇主 EAP（Employee Assistance Programme）：大多数新西兰正规中大型公司免费提供每年 3–6 次保密心理/职场/家庭咨询（雇主完全看不到你的记录！）。', en: 'Check if your NZ employer offers free confidential EAP counselling sessions.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l41-q1',
        prompt: {
          zh: '移居新西兰第 8 个月，你发现自己连续几周失眠、孤独感很重，想找一位能说中文的专业心理咨询师聊聊，但担心收费太贵。哪个官方公益渠道 100% 免费且提供中文服务？',
          en: 'At Month 8 in NZ you feel lonely and stressed and want a free Mandarin-speaking counsellor. Which NZ service offers this?',
        },
        options: [
          {
            id: 'a',
            text: { zh: 'Asian Family Services（亚裔家庭服务中心，免费热线 0800 862 342），同时也可 24/7 发短信给 1737 或预约 GP 免费 HIP', en: 'Asian Family Services (0800 862 342) for free Mandarin counselling, plus 24/7 1737 or your GP’s free HIP' },
            isCorrect: true,
            feedback: { zh: '记住这个温暖的资源！照顾好情绪，才能真正享受新西兰的慢生活。', en: 'Spot on—remember you are never alone in NZ!' },
          },
          {
            id: 'b',
            text: { zh: '新西兰所有心理咨询都必须自费每小时 $250，没有免费公益渠道', en: 'All counselling in NZ costs $250/hr out-of-pocket with no free options' },
            isCorrect: false,
            feedback: { zh: '错啦！新西兰有非常丰富的免费心理支持网络！', en: 'NZ offers extensive free mental health support including Mandarin services!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '把 Asian Family Services（0800 862 342）与 1737 存进手机备用，也记得在晴朗冬天每天中午出去晒 15 分钟太阳！',
      en: 'Save Asian Family Services (0800 862 342) and 1737, and schedule a daily midday walk.',
    },
  },

  {
    id: 'l-42',
    number: 42,
    moduleId: 'mod-7',
    title: {
      zh: '养宠法规、养老金（NZ Super 20年新规）、遗嘱（Will）与持久授权书（EPA）',
      en: 'Pet Laws, NZ Super (20-Year Rule), Wills & Enduring Power of Attorney',
    },
    summary: {
      zh: '长居新西兰的必知法律与规划：养狗芯片与市议会注册、看兽医账单、NZ Super 公立养老金逐步拉长至 20 年居住门槛，以及为什么买房有娃后必须立遗嘱和 EPA！',
      en: 'Long-term NZ life essentials: dog registration & microchipping, vet insurance, NZ Super’s 20-year residency rule, and why every adult homeowner needs a Will & EPA.',
    },
    targetLevel: 4,
    durationMin: 8,
    xpReward: 80,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Work and Income (MSD) / Public Trust / Dog Control Act / Local Councils',
    terms: [
      { term: 'Dog Registration & Microchip', phonetic: '/ˈmaɪkrəʊtʃɪp/', zh: '养狗法定双义务：满 3 个月须向市议会年年交注册费（约 $100–$180/年）并植入皮下芯片！' },
      { term: 'NZ Super (Age 65 / 20-Year Rule)', phonetic: '/ˈsuːpə/', zh: '新西兰国家养老金（65 岁起领，无论贫富不查资产；Fair Residency 规则已逐步将居住门槛升至 20 岁后住满 20 年含 50 岁后 5 年！）' },
      { term: 'Will (遗嘱)', phonetic: '/wɪl/', zh: '新西兰资产/房产/未成年子女监护权分配遗嘱（不立遗嘱去世会陷入漫长高昂的法定继承程序！）' },
      { term: 'EPA (Enduring Power of Attorney)', phonetic: '/iː piː eɪ/', zh: '持久授权书（分财产与个人医疗两份，万一意外昏迷失智由谁合法代你管账户做医疗决定！）' },
      { term: 'SPCA', phonetic: '/es piː siː eɪ/', zh: '新西兰防止虐待动物协会（领养靠谱宠物首选，极严执行《动物福利法》）' },
    ],
    cards: [
      {
        id: 'l42-c1',
        type: 'checklist',
        title: {
          zh: '在新西兰养宠物：严格动物福利法与“比人还贵”的兽医费',
          en: 'Pet Ownership in NZ: Registration, Beach Rules & Vet Costs',
        },
        body: {
          zh: '新西兰是全球动物保护法规最严的国家之一，决定领养猫狗前先算清两笔账：',
          en: 'NZ’s Animal Welfare Act and Dog Control Act carry strict legal responsibilities:',
        },
        keyPoints: [
          { zh: '🐶 养狗法定义务：小狗满 3 个月必须每年向当地 Council 缴费注册（带狗牌挂脖子上），并在注册 2 个月内植入电子芯片（Microchip），否则最高罚款可达 $3,000！', en: 'Dogs aged 3+ months must be registered annually with council and microchipped.' },
          { zh: '🏖️ 海滩与原生鸟保护禁令：夏季白天热门海滩常禁狗或要求拴绳（On-leash）；有企鹅、奇异鸟（Kiwi）等原生鸟类的保护区与国家公园严禁带狗进入！', en: 'Respect seasonal beach dog rules and strict DOC no-dog zones protecting native kiwi & penguins.' },
          { zh: '🏥 兽医看病全自费极贵（无 ACC！）：一次急诊手术动辄 NZ$3,000–$8,000，强烈建议趁宠物年轻买一份靠谱宠物险（Pet Insurance，如 Southern Cross Pet / PD Insurance）！', en: 'Vet bills have no public subsidy—emergencies easily hit $3k–$8k, so consider pet insurance early.' },
        ],
      },
      {
        id: 'l42-c2',
        type: 'concept',
        title: {
          zh: '新西兰国家养老金（NZ Super）最新 Fair Residency 20 年门槛',
          en: 'NZ Superannuation: Understanding the 20-Year Fair Residency Rule',
        },
        body: {
          zh: '新西兰 65 岁以上的国家养老金（NZ Super）不查资产不查你有多富，只要满足身份与居住年限人人可领（当前单身/夫妻双人每年可领数万纽币基础生活费），但新移民务必注意居住年限已延长：',
          en: 'NZ Super is non-means-tested at age 65, but residency requirements have increased under Fair Residency reforms:',
        },
        keyPoints: [
          { zh: '📅 20 年居住门槛：针对较年轻一代（1977 年 7 月后出生已全面适用 20 年，此前出生按出生年份阶梯过渡 10–20 年），需在 20 岁以后在新西兰累计住满 20 年，且其中至少 5 年须在 50 岁以后！', en: 'Fair Residency requires 20 years living in NZ since age 20 (including at least 5 years since age 50), phased by birth date.' },
          { zh: '⚠️ 海外社保抵扣规则（Section 187）：如果你同时领取某些海外政府强制养老金，NZ Super 可能会按规则做相应扣减（Direct Deduction），退休前务必提前向 Work and Income 核实！', en: 'Certain overseas state pensions can be deducted from NZ Super—check with MSD before turning 65.' },
        ],
      },
      {
        id: 'l42-c3',
        type: 'warning',
        title: {
          zh: '华人最易忽略的家庭防线：买房有娃后必须立 Will（遗嘱）+ EPA！',
          en: 'Crucial Adult Planning: Why Every Homeowner & Parent Needs a Will & EPA',
        },
        body: {
          zh: '在国内大家忌讳谈遗嘱，但在新西兰只要你名下有房产、KiwiSaver 超过 NZ$15,000 或有未成年子女，法律极度强调提前立好遗嘱与持久授权书：',
          en: 'In NZ, dying without a Will (intestate) freezes assets >$15,000 in slow, costly court administration:',
        },
        keyPoints: [
          { zh: '📜 Will（遗嘱）：写清房产、银行账户、KiwiSaver 分配及未成年子女监护人！结婚会自动作废婚前旧遗嘱，买房/生娃/结婚后务必找过户律师或 Public Trust（在线仅约 $70–$150）立一份合规遗嘱！', en: 'A Will specifies asset distribution and child guardians (note: marriage automatically revokes an earlier Will!).' },
          { zh: '✍️ EPA（Enduring Power of Attorney 持久授权书）：分为“财产 EPA”和“个人健康照护 EPA”。哪怕是合法夫妻，如果一方不幸车祸昏迷或失智，没有 EPA 另一方连动用对方单独账户或签字卖房都无权操作，必须去家庭法院漫长申请！', en: 'Even spouses cannot automatically manage each other’s individual bank accounts or medical decisions if incapacitated—set up both Property and Personal Care EPAs!' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l42-q1',
        prompt: {
          zh: '你在新西兰结了婚、一起买了房，但只办了共同房贷没办 EPA（持久授权书）。万一配偶意外重伤昏迷失去意识，你作为合法妻子/丈夫可以直接去银行操作配偶名下独立定期存款账户吗？',
          en: 'You are legally married with no EPA. If your spouse falls into a coma, can you automatically access their individual bank account?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '不能！在新西兰，婚姻关系并不自动赋予配偶代管独立财产或替失智者做医疗决定的法定权力，必须提前签立 EPA', en: 'No—marriage does not automatically grant authority over individual assets or medical decisions; you must set up an EPA beforehand' },
            isCorrect: true,
            feedback: { zh: '极关键的本地法律认知！买房找律师过户时顺手把夫妻双方的 Will 和 EPA 一起办了最划算省心。', en: 'Essential NZ legal knowledge!' },
          },
          {
            id: 'b',
            text: { zh: '当然可以，拿结婚证去银行就能直接取钱', en: 'Yes, showing your marriage certificate gives full access' },
            isCorrect: false,
            feedback: { zh: '在新西兰银行和法院绝对行不通！没有 EPA 只能向家庭法院花几千纽币走漫长申请程序。', en: 'NZ banks will freeze individual accounts without a valid Property EPA.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '买房或生娃后，向你的过户律师或 Public Trust（publictrust.co.nz）了解立一份规范的 Will 与 EPA，把家庭兜底安排妥当。',
      en: 'Check publictrust.co.nz or ask your property lawyer about setting up a Will and EPA.',
    },
  },
];
