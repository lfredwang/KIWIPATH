import type { Lesson } from '../../types';

/**
 * Module 4: 求职通关、职场文化与自雇创业 (Lessons #18 – #24)
 * Verified against Employment NZ (employment.govt.nz), NZQA, and 2026 Employment Relations Amendment Act.
 */
export const MOD4_LESSONS: Lesson[] = [
  {
    id: 'l-18',
    number: 18,
    moduleId: 'mod-4',
    title: {
      zh: '新西兰就业市场全景、NZQA 学历评估与职业持证红线',
      en: 'NZ Job Market, NZQA Assessment (IQA) & Regulated Professions',
    },
    summary: {
      zh: '看清新西兰“小而精”的职场结构，搞懂什么时候必须做 NZQA 学历认证（IQA），以及水工/电工/医疗/教师/建筑等必须本地持证上岗的行业红线。',
      en: 'Understand NZ’s SME-driven job market, when NZQA IQA is required, and which licensed professions legally forbid practising without NZ registration.',
    },
    targetLevel: 2,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'NZQA / Immigration NZ / MBIE Occupational Regulation',
    terms: [
      { term: 'NZQA / IQA', phonetic: '/ˌen zed kjuː ˈeɪ/', zh: '新西兰学历评估局国际学历评估（把海外学位对标为 NZQF Level 7–10）' },
      { term: 'LQEA', phonetic: '/el kjuː iː eɪ/', zh: '移民局免评估学历清单（名单内大学学位通常无需再花钱做 IQA！）' },
      { term: 'Occupational Registration', phonetic: '/ˌɒkjuˈpeɪʃənl/', zh: '法定职业注册（电工 EWRB、水工 PGDB、护士 NCNZ、教师 Teaching Council 等）' },
      { term: 'Accredited Employer', phonetic: '/əˈkredɪtɪd/', zh: 'INZ 认证雇主（只有认证雇主才能合法担保 AEWV 工签！）' },
      { term: 'SME (Small & Medium Enterprise)', phonetic: '/es em iː/', zh: '中小企业（占新西兰企业 97%，偏爱能独当一面的多面手！）' },
      { term: 'Green List', phonetic: '/ɡriːn lɪst/', zh: '新西兰紧缺职业绿名单（Tier 1 直通居留 / Tier 2 工作 2 年转居留）' },
    ],
    cards: [
      {
        id: 'l18-c1',
        type: 'concept',
        title: {
          zh: '新西兰职场底层逻辑：97% 是中小企业，极度看重「务实多面手」',
          en: 'NZ’s Job Market DNA: 97% SMEs Prize Pragmatic All-Rounders',
        },
        body: {
          zh: '新西兰总人口约 530 万，不像北上广深有海量万人大厂。全国 97% 以上是员工 20 人以下的中小企业（SME），加上政府机构（集中在惠灵顿）与几家银行/电信/科技龙头（集中在奥克兰）。雇主招人最怕“只拧一颗螺丝钉、离开大厂光环就干不了活”的专才，最爱“接地气、主动沟通、能自己把事闭环”的实干派！',
          en: 'Over 97% of NZ businesses have fewer than 20 staff. Employers favour pragmatic, collaborative all-rounders over narrow big-tech specialists.',
        },
        keyPoints: [
          { zh: '行业地域分布：IT/金融/电商/总部多在奥克兰；中央政府/政策/咨询/IT 多在惠灵顿；建筑基建/制造/农业科技多在基督城与怀卡托；旅游酒店集中在皇后镇。', en: 'Auckland = corporate/tech/finance; Wellington = govt/policy/tech; Christchurch/Waikato = engineering/trades/agri; Queenstown = tourism.' },
          { zh: '招聘旺季与淡季：每年 12 月中旬至次年 1 月下旬为南半球圣诞大长假（几乎全员休假、招聘停滞）；2–4 月与 8–10 月是招聘最活跃窗口！', en: 'Hiring freezes from mid-Dec to late Jan for summer holidays; Feb–Apr and Aug–Oct are peak hiring seasons.' },
        ],
      },
      {
        id: 'l18-c2',
        type: 'warning',
        title: {
          zh: '法定持证上岗红线：这些行业无本地注册严禁独立执业！',
          en: 'Regulated Occupations: Never Practise Without NZ Registration',
        },
        body: {
          zh: '在新西兰，涉及生命安全、公共健康、建筑结构与法律责任的行业实行严格持证制度。即使你在国内有 20 年经验，没拿本地注册证也不能直接独立接活：',
          en: 'Even with decades of overseas experience, regulated NZ trades and professions legally require local registration:',
        },
        keyPoints: [
          { zh: '⚡ 电工（EWRB）与水工/燃气工/排水工（PGDB）：需经海外资质评估、补考本地法规（NZ Standards）并在持牌师傅监督下拿 Limited Certificate 过渡。', en: 'Electricians (EWRB) & Plumbers/Gasfitters (PGDB): require local regulation exams and supervised transition.' },
          { zh: '🏥 医疗健康（医生 MCNZ、护士 NCNZ、牙医 DCNZ、药剂师、理疗师）：须通过英语成绩（IELTS/OET）与专业能力评估（CAP/注册考试）。', en: 'Healthcare (doctors, nurses, dentists, physios): strict English + competency registration.' },
          { zh: '🎓 幼教与中小学教师（Teaching Council）、注册建筑师、持牌建筑从业者（LBP）、持牌移民顾问（IAA）、特许会计师（CA ANZ / CPA）与律师均须对接对应协会。', en: 'Teachers, LBPs, licensed immigration advisers, and lawyers all have mandatory statutory bodies.' },
          { zh: '✅ 无需法定牌照的常见行业：软件工程/IT、数字营销、产品设计、供应链运营、商业分析、普通行政与餐饮酒店管理——直接凭实力和作品集应聘即可！', en: 'Software/IT, marketing, design, analytics, and general operations do NOT require statutory licensing.' },
        ],
      },
      {
        id: 'l18-c3',
        type: 'checklist',
        title: {
          zh: '什么时候需要做 NZQA 学历评估（IQA）？先查免评估清单！',
          en: 'When Do You Need an NZQA IQA? Check the Exempt List First!',
        },
        body: {
          zh: '办理技术移民（SMC）、部分绿名单岗位或教师/工程师职业注册时，常需要证明海外学位相当于新西兰几级学历（本科通常对应 NZQF Level 7，硕士 Level 9，博士 Level 10）：',
          en: 'Immigration and licensing bodies often ask for an NZQF level benchmark for overseas degrees:',
        },
        keyPoints: [
          { zh: '省钱第一步：先上移民局官网查 LQEA（List of Qualifications Exempt from Assessment）！如果你的毕业院校和学位在免评估名单内，办签证可直接省下 NZ$700+ 与数周等待时间！', en: 'Check INZ’s LQEA exempt list first—if listed, you may skip paying $700+ for an IQA!' },
          { zh: '若不在免评估名单：在线向 nzqa.govt.nz 递交 IQA（International Qualification Assessment），准备好毕业证、学位证、成绩单扫描件及官方英文翻译，通常需 4–8 周出报告。', en: 'Otherwise apply online at nzqa.govt.nz with degree certificates, transcripts, and certified English translations.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l18-q1',
        prompt: {
          zh: '你在国内当了 10 年资深电工，刚拿 Open Work Visa 落地奥克兰，打算立刻自己在 Trade Me 接家庭电路改造私活。合法吗？',
          en: 'You were a senior electrician overseas for 10 years and just arrived on an Open Work Visa. Can you immediately take independent electrical jobs?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '违法！电工属于新西兰强制持牌行业（EWRB），无本地注册或持牌监督擅自从事固定强电作业不仅违法罚款，还会导致屋主房屋险拒赔', en: 'Illegal! Electrical work is strictly regulated by EWRB; working without NZ registration/supervision is unlawful and voids house insurance' },
            isCorrect: true,
            feedback: { zh: '记住先走 EWRB 海外技工注册过渡通道，拿证后新西兰持牌电工时薪非常香！', en: 'Correct—follow the EWRB overseas pathway first!' },
          },
          {
            id: 'b',
            text: { zh: '合法，Open Work Visa 可以干任何工作', en: 'Legal because an Open Work Visa allows any work' },
            isCorrect: false,
            feedback: { zh: '签证允许工作 ≠ 豁免法定职业牌照！水电、医疗、教学等必须遵守本地行业持证法。', en: 'Visa work rights never override occupational licensing laws.' },
          },
        ],
      },
      {
        id: 'l18-q2',
        prompt: {
          zh: '以下哪一段时间是新西兰全年的招聘“冰封淡季”（大多数公司放假、HR 不回复邮件）？',
          en: 'Which time of year is New Zealand’s biggest hiring freeze?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '12 月中旬至次年 1 月下旬（圣诞与南半球夏季大长假）', en: 'Mid-December to late January (Christmas & NZ summer holidays)' },
            isCorrect: true,
            feedback: { zh: '答对了！这期间别慌张自我怀疑，好好打磨简历和刷英语，2 月初招聘潮立刻重启！', en: 'Spot on—hiring rebounds strongly from early February.' },
          },
          {
            id: 'b',
            text: { zh: '每年 3 月和 4 月', en: 'March and April' },
            isCorrect: false,
            feedback: { zh: '恰恰相反，2–4 月是新西兰最活跃的黄金招聘季！', en: 'Feb–Apr is actually peak hiring season!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '去 immigration.govt.nz 查一次你的学历是否在 LQEA 免评估名单内，同时核对你的职业是否属于强制注册行业。',
      en: 'Check if your degree is on INZ’s LQEA exempt list and verify any local licensing requirements for your profession.',
    },
  },

  {
    id: 'l-19',
    number: 19,
    moduleId: 'mod-4',
    title: {
      zh: '写一份打动 Kiwi 老板的 NZ CV 与 Cover Letter（彻底避开国内雷区）',
      en: 'Crafting a Winning NZ CV & Cover Letter (Zero Red Flags)',
    },
    summary: {
      zh: '拆解新西兰标准 2–3 页 CV 结构：为什么放照片/年龄/婚育会被直接刷掉、如何写 Work Rights、量化成就公式，以及高转化率 Cover Letter 模板。',
      en: 'Build a clean 2–3 page NZ CV: eliminate Human Rights Act red flags, state Work Rights clearly, quantify impact, and write sharp tailored Cover Letters.',
    },
    targetLevel: 2,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Careers.govt.nz / Human Rights Act 1993',
    terms: [
      { term: 'Human Rights Act', phonetic: '/ˈhjuːmən raɪts ækt/', zh: '新西兰《人权法》（严禁就业年龄/性别/婚育/种族歧视，因此简历绝不放照片与生日！）' },
      { term: 'Work Rights', phonetic: '/wɜːk raɪts/', zh: '工作权利声明（须放在简历最顶部显眼处，如 Open Work Visa / NZ Resident）' },
      { term: 'Quantified Achievements', phonetic: '/ˈkwɒntɪfaɪd/', zh: '量化成果（用百分比/金额/人数替代空泛职责描述）' },
      { term: 'ATS', phonetic: '/ˌeɪ tiː ˈes/', zh: '招聘系统自动初筛（纯文本清晰排版+匹配 JD 关键词，避免花哨多栏图表！）' },
      { term: 'Cover Letter', phonetic: '/ˈkʌvə ˈletə/', zh: '求职信（在新西兰极其重要！不是敷衍附件，而是展示诚意与文化契合的核心窗口）' },
      { term: 'Referees on Request', phonetic: '/ˌrefəˈriːz/', zh: '简历末尾写 "Referees available upon request"，面试后期再给推荐人电话' },
    ],
    cards: [
      {
        id: 'l19-c1',
        type: 'warning',
        title: {
          zh: '第一刀：立刻删掉国内简历的 6 大新西兰红线雷区！',
          en: 'First Step: Delete These 6 Domestic CV Red Flags Immediately',
        },
        body: {
          zh: '很多优秀新移民海投 100 份零回复，不是能力不够，而是直接套用了国内中文简历模板，一秒踩中新西兰《人权法》隐私与反歧视大忌：',
          en: 'Under NZ’s Human Rights Act, employers must avoid unconscious bias—including personal traits makes local recruiters uncomfortable:',
        },
        keyPoints: [
          { zh: '❌ 个人照片（Photo）——立刻删！', en: 'NO headshot photo.' },
          { zh: '❌ 年龄 / 出生日期（Age / DOB）——立刻删！', en: 'NO age or date of birth.' },
          { zh: '❌ 性别 / 婚姻 / 生育状况（Gender / Married / Kids）——立刻删！', en: 'NO gender, marital, or family status.' },
          { zh: '❌ 国籍 / 民族 / 政治面貌 / 详细家庭门牌号——删！地址只写 Suburb + City（如 Mt Eden, Auckland）。', en: 'NO nationality, ethnicity, or full street address—just suburb & city.' },
          { zh: '❌ 过度花哨的进度条/双栏彩色排版——ATS 解析极易乱码，改用干净单栏无表格排版！', en: 'Avoid complex graphics/skill bars that break ATS parsers.' },
        ],
      },
      {
        id: 'l19-c2',
        type: 'checklist',
        title: {
          zh: '新西兰黄金 2–3 页 CV 标准结构（Careers.govt.nz 推荐）',
          en: 'The Gold-Standard 2–3 Page NZ CV Blueprint',
        },
        body: {
          zh: '新西兰不强制压缩成 1 页（除非应届生），有经验人士写 2–3 页清晰舒展最受青睐：',
          en: 'NZ employers prefer a readable 2–3 page CV with clear white space:',
        },
        keyPoints: [
          { zh: '① 顶部联系区：Preferred Name（常用英文名或拼音名）、NZ 02x 手机号、专业邮箱、LinkedIn 链接、所在城市，以及醒目的 **Work Rights**（例如："Eligible to work full-time in NZ — Open Work Visa valid until 2028"）！', en: 'Header: Name, NZ phone, email, LinkedIn, City, and clear Work Rights statement.' },
          { zh: '② Personal Profile（3–4 行精华总结）：你是谁 + 核心专长 + 最强可量化价值 + 你能为团队带来什么。', en: '3–4 line Profile Summary tailored to the target role.' },
          { zh: '③ Core Skills（6–10 个关键词）：直接对照职位描述（JD）里的硬技能与软技能词汇精准映射！', en: 'Core Skills aligned directly with JD keywords.' },
          { zh: '④ Work Experience（倒序排列）：每段先用 1 句话介绍公司背景（防止 Kiwi 老板不认识国内名企！如 "China’s leading fintech with 50M users"），再用 3–5 条「动词 + 动作 + 量化结果」列出成就！', en: 'Work Experience: add a 1-line context note for overseas companies, followed by quantified achievement bullets.' },
          { zh: '⑤ Education / Certifications & 结尾一句 "Referees available upon request."', en: 'Education, NZQA/registrations, and "Referees available upon request."' },
        ],
      },
      {
        id: 'l19-c3',
        type: 'dialogue',
        title: {
          zh: '高回复率 3 段式 Cover Letter 万能模板（千万别空着不写！）',
          en: 'High-Response 3-Paragraph NZ Cover Letter Formula',
        },
        body: {
          zh: '在 Seek 投简历时很多国内求职者跳过 Cover Letter，但在新西兰 **70%+ 中小企业招聘经理会先读 Cover Letter** 看你是不是群发海投：',
          en: 'In NZ, a concise, genuine half-page Cover Letter often decides who gets the phone screen:',
        },
        dialogueLines: [
          {
            speaker: 'Paragraph 1 (Why THIS role & company)',
            en: 'Kia ora [Hiring Manager Name / Team], I’m excited to apply for the [Role] at [Company]. Having followed your recent work on [specific project/product], I love your team’s pragmatic focus on [value], and I hold full NZ work rights based in [City].',
            zh: '第一段（为什么是你们公司 + 点明签证与所在地）：展现你认真研究过对方，而不是群发海投。',
          },
          {
            speaker: 'Paragraph 2 (2–3 Quantified Proof Points)',
            en: 'Over the past [X] years, I have [Achievement 1 with numbers] and [Achievement 2 solving a pain point from their JD]. Even though my recent roles were overseas, my skills in [A, B, C] transfer directly to NZ standards.',
            zh: '第二段（直接对标 JD 痛点举 2 个带数字的实战案例 + 主动化解无本地经验顾虑）。',
          },
          {
            speaker: 'Paragraph 3 (Warm Kiwi Sign-off)',
            en: 'I’d love the chance to have a quick chat about how I can contribute to your crew. Thanks heaps for your time and consideration. Ngā mihi, [Your Name]',
            zh: '第三段（自然友善的新西兰式结尾，不卑不亢）。',
            subtextZh: '整个 Cover Letter 控制在半页（200–300 英文词）以内，绝不照抄简历全文！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l19-q1',
        prompt: {
          zh: '你在新西兰写英文 CV 时，为了方便老板了解你在国内就职过的知名互联网公司（但新西兰本地 HR 没听过这家中文名企），最好的做法是？',
          en: 'Your past employer is famous in China, but NZ recruiters won’t recognise the name. How should you list it on your NZ CV?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '在公司名下方用 1 行英文简明补充公司规模与行业定位（例如 "Leading e-commerce platform serving 30M+ users, 2,000 staff"）', en: 'Add a concise 1-line description of the company’s industry, scale, and user base beneath its name' },
            isCorrect: true,
            feedback: { zh: '超级加分的专业细节！立刻帮 Kiwi 老板建立对标认知。', en: 'Brilliant detail—gives instant context to NZ hiring managers!' },
          },
          {
            id: 'b',
            text: { zh: '直接只写公司拼音缩写，让 HR 自己去 Google 查', en: 'Just put the pinyin acronym and let HR Google it' },
            isCorrect: false,
            feedback: { zh: 'HR 审一份简历平均只有 15–30 秒，看不懂就会直接跳过！', en: 'Recruiters scan CVs in 20 seconds—never make them guess!' },
          },
        ],
      },
      {
        id: 'l19-q2',
        prompt: {
          zh: '关于新西兰 CV 里的推荐人（Referees）信息，最专业标准的做法是？',
          en: 'How should you handle Referees on your NZ CV?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '简历末尾写 "Referees available upon request"，等进入面试后期、雇主要求背调时再征得推荐人同意后提供', en: 'Write "Referees available upon request" and provide contacts only when requested later in the process' },
            isCorrect: true,
            feedback: { zh: '完全正确！既保护推荐人隐私，又能提前给推荐人打预防针！', en: 'Spot on—protects your referees’ privacy!' },
          },
          {
            id: 'b',
            text: { zh: '把前老板的手机号和邮箱直接印在第一页公开发到所有网站', en: 'Print past managers’ phone numbers on page 1 everywhere' },
            isCorrect: false,
            feedback: { zh: '不专业且侵犯前老板隐私，很容易被猎头骚扰惹恼推荐人！', en: 'Never expose referees’ private contact details publicly.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '立刻切到本应用「Kiwi 直聘 → NZ 简历名片」亲手编辑你的合规新西兰简历，并一键导出打印版 PDF！',
      en: 'Build and print-export your NZ-compliant CV right now in Kiwi 直聘 → NZ 简历名片.',
    },
  },

  {
    id: 'l-20',
    number: 20,
    moduleId: 'mod-4',
    title: {
      zh: '破局“没有本地经验”：全渠道求职、约咖啡人脉与防卖工作骗局',
      en: 'Cracking “No NZ Experience”: Hidden Jobs, Coffee Catch-Ups & Anti-Scam',
    },
    summary: {
      zh: '打通 Seek / Trade Me Jobs / LinkedIn / 政府岗位全渠道，学会新西兰最有效的“隐藏招聘市场”约咖啡破冰术，并牢记防“假雇主担保/卖工作”红线。',
      en: 'Use Seek, Trade Me Jobs, jobs.govt.nz, master Kiwi coffee catch-ups for the hidden job market, and avoid illegal job-selling scams.',
    },
    targetLevel: 3,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Careers.govt.nz / Immigration NZ (Migrant Exploitation Protection)',
    terms: [
      { term: 'Hidden Job Market', phonetic: '/ˈhɪdn dʒɒb ˈmɑːkɪt/', zh: '隐藏招聘市场（新西兰约 40%–60% 职位通过熟人推荐或主动联系内部消化，未发广告！）' },
      { term: 'Coffee Catch-up', phonetic: '/ˈkɒfi ˈkætʃ ʌp/', zh: '15–20 分钟约咖啡轻交流（请教行业前辈经验，不带功利压力的 Kiwi 社交法宝）' },
      { term: 'Seek / Trade Me Jobs', phonetic: '/siːk/', zh: '新西兰两大核心招聘网站（Seek 偏白领专业岗，Trade Me Jobs 技工/中小企多）' },
      { term: 'jobs.govt.nz', phonetic: '/dʒɒbz ɡʌv/', zh: '新西兰中央与地方政府官方岗位汇总平台' },
      { term: 'Recruiter', phonetic: '/rɪˈkruːtə/', zh: '第三方猎头顾问（在新西兰 IT/财会/工程/建筑领域占极大份额，如 Robert Walters/Hays/Potentia）' },
      { term: 'Job Selling Scam', phonetic: '/skæm/', zh: '违法“卖工作/收担保费”骗局（法律严禁雇主向员工收取任何招聘或工签担保费用！）' },
    ],
    cards: [
      {
        id: 'l20-c1',
        type: 'concept',
        title: {
          zh: '为什么老板总问“有没有 NZ Local Experience”？拆穿背后的真实顾虑',
          en: 'Decoding “NZ Experience”: What Employers Are Actually Worried About',
        },
        body: {
          zh: 'Kiwi 雇主说想要本地经验，绝大多数时候不是歧视海外学历，而是在担心 3 件事：① 你能不能顺畅融入扁平英文团队、听懂职场潜台词？② 你懂不懂新西兰本地行业法规/标准（如 NZ Building Code、NZ IFRS、隐私法）？③ 你拿到签证或适应半年后会不会跳槽回国？',
          en: 'When NZ employers ask for local experience, they are really checking: communication fit, NZ standards familiarity, and long-term commitment.',
        },
        keyPoints: [
          { zh: '破局法 1（主动补本地证明）：哪怕还没全职入职，也可以先做本地社区志愿工作（Volunteering NZ）、参加行业 Meetup、考取本地认证或做本地开源/作品集，立刻把 CV 写进新西兰经历！', en: 'Add local touchpoints fast: Volunteering NZ, industry Meetups, local certifications, or NZ-focused portfolio projects.' },
          { zh: '破局法 2（先降维/Contract 切入）：第一份新西兰工作不必一步到位当总监，接受 6 个月 Fixed-term 合同或低半级核心岗位拿到第一份本地 Reference，1 年后跳槽薪资直接起飞！', en: 'A 6-month fixed-term or slightly lower stepping-stone role gives you prized NZ referees for rapid advancement.' },
        ],
      },
      {
        id: 'l20-c2',
        type: 'checklist',
        title: {
          zh: '新西兰 5 大求职主渠道 + 约咖啡（Coffee Catch-up）实战指南',
          en: '5 Main NZ Job Channels + The Kiwi Coffee Catch-Up Playbook',
        },
        body: {
          zh: '在新西兰只靠网上点“一键投递（Quick Apply）”转化率很低，必须组合出击：',
          en: 'Combine online job boards with direct human outreach:',
        },
        keyPoints: [
          { zh: '① Seek.co.nz（必备主力）& Trade Me Jobs（技工/运营/中小企业多）& jobs.govt.nz（政府铁饭碗）& LinkedIn（科技/跨国/猎头最活跃）。', en: 'Core boards: Seek, Trade Me Jobs, jobs.govt.nz, and LinkedIn.' },
          { zh: '② 核查雇主是否真有工签担保资格：上 immigration.govt.nz 的「Check if an employer is accredited」免费输入公司名一秒验真！', en: 'Always verify AEWV employer accreditation directly on immigration.govt.nz.' },
          { zh: '③ 主动约 Coffee Catch-up：在 LinkedIn 找同城同行业前辈（尤其是同样有移民背景的 Lead 或同行），礼貌发短消息约 15 分钟喝杯咖啡请教行业现状——记住：**绝不要一上来就讨工作**，真诚请教、展现专业度，对方觉得你靠谱自然会帮你内推！', en: 'Message local peers on LinkedIn for a 15-min coffee to ask for advice (never beg for a job)—genuine warmth often leads to referrals!' },
          { zh: '④ 善用本地猎头（Recruiters）：主动联系深耕你所在垂直领域的猎头约 15 分钟电话聊聊市场行情，他们手里握着大量未公开的职位！', en: 'Build relationships with 2–3 specialist NZ recruiters in your niche.' },
        ],
      },
      {
        id: 'l20-c3',
        type: 'warning',
        title: {
          zh: '致命防骗红线：严防“卖工作 / 收费担保 AEWV”黑中介骗局！',
          en: 'Zero-Tolerance Scam Alert: Paid Job Offers & Fake Sponsorship',
        },
        body: {
          zh: '近年新西兰移民局严打移民剥削与卖工作链条，凡遇到以下信号立刻转身拉黑：',
          en: 'Immigration NZ strictly prosecutes job-selling schemes. Walk away immediately if you hear any of these:',
        },
        keyPoints: [
          { zh: '❌ 任何中介或雇主要你花几万纽币“买一份认证雇主 Offer”或“自掏腰包付雇主认证费/Job Check 费”——100% 违法！法律明文规定雇主承担全部招聘与认证成本！', en: 'Paying for a job offer or reimbursing an employer’s accreditation/Job Check fees is strictly illegal.' },
          { zh: '❌ 要求你“名义上发法定中位数工资，私下每月现金退回一半给老板”——这是严重签证欺诈，一旦查实不仅丢钱，还会被驱逐出境并永久留下不良记录！', en: 'Wage-rebate ("cash-back") schemes are immigration fraud and lead to deportation.' },
          { zh: '✅ 如果不幸遭遇职场剥削，可拨打移民局/雇佣局免费保密热线 0800 200 088 举报，并有资格申请 6 个月开放工签（MEPV 移民剥削保护签）安全脱身！', en: 'Victims of exploitation can call 0800 200 088 confidentially and may qualify for a 6-month open Migrant Exploitation Protection Visa.' },
        ],
      },
      {
        id: 'l20-c4',
        type: 'dialogue',
        title: {
          zh: 'LinkedIn 约咖啡（Coffee Catch-up）高成功率短消息模板',
          en: 'High-Reply LinkedIn Coffee Catch-Up Message Script',
        },
        body: {
          zh: '控制在 4 句话以内，礼貌、零压力、说明只需 15 分钟且你请喝咖啡：',
          en: 'Keep it brief, warm, and zero-pressure:',
        },
        dialogueLines: [
          {
            speaker: 'You (LinkedIn Message)',
            en: 'Kia ora [Name], I’ve recently relocated to [City] with [X] years of experience in [Field] and really admire the work your team is doing at [Company]. I’m not asking for a job—just keen to learn how [Field] operates locally in NZ. Would you be open to a quick 15-min coffee near your office next week? My shout! Ngā mihi, [Your Name]',
            zh: '你好 [姓名]，我刚移居到 [城市]，有 [X] 年 [领域] 经验，非常欣赏贵司团队的工作。不是来讨工作的——纯粹想请教一下 [领域] 在新西兰本地的实操节奏。下周方便在您公司附近请您喝杯 15 分钟咖啡聊聊吗（My shout 我请客）？诚挚感谢，[你的名字]',
            subtextZh: '"My shout" 是超地道的新西兰口语“我请客”，Kiwi 看到会心一笑，回复率飙升！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l20-q1',
        prompt: {
          zh: '一家认证雇主告诉你：“我可以给你出 AEWV 工签 Offer，但公司认证和 Job Check 花了 $8,000，你得先把这笔钱转给我。”合法吗？',
          en: 'An accredited employer offers you an AEWV job on condition you pay them $8,000 for accreditation and Job Check fees. Is this legal?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '严重违法！新西兰法律严禁雇主向员工转嫁任何招聘、雇主认证或 Job Check 成本，属于移民剥削/卖工作红线', en: 'Strictly illegal—employers must pay all recruitment, accreditation, and Job Check costs themselves' },
            isCorrect: true,
            feedback: { zh: '坚守底线！花钱买工作不仅违背法律，更是后患无穷的无底洞。', en: 'Spot on—never pay for a job!' },
          },
          {
            id: 'b',
            text: { zh: '合理分摊成本，双方协商同意就行', en: 'Legal if both parties mutually agree' },
            isCorrect: false,
            feedback: { zh: '绝不合法！哪怕签字同意也是违法行为，且会让你的签证和未来居留面临吊销风险。', en: 'Illegal even if agreed in writing!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '本周在 LinkedIn 完善英文个人主页（标明所在 NZ 城市与 Work Rights），试着给 3 位同城同行发一封礼貌的 Coffee Catch-up 短消息！',
      en: 'Update your LinkedIn location to your NZ city and send 3 polite Coffee Catch-up notes this week.',
    },
  },

  {
    id: 'l-21',
    number: 21,
    moduleId: 'mod-4',
    title: {
      zh: '新西兰面试实战：STAR 行为题、Culture Fit 与 Reference Check 背调',
      en: 'Acing NZ Interviews: STAR Method, Culture Fit & Reference Checks',
    },
    summary: {
      zh: '彻底掌握新西兰面试最核心的两大考点——STAR 行为故事与“愿不愿意跟你一起吃午饭”的文化契合（Culture Fit），以及推荐人背调（Reference Check）通关秘籍。',
      en: 'Master NZ behavioural interviews using STAR, pass the Kiwi “beer/coffee test” for Culture Fit, and nail formal Reference Checks.',
    },
    targetLevel: 3,
    durationMin: 8,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Careers.govt.nz / NZ Recruitment Best Practice',
    terms: [
      { term: 'STAR Method', phonetic: '/stɑː/', zh: 'Situation（背景）+ Task（任务）+ Action（你的具体行动）+ Result（量化结果与反思）' },
      { term: 'Culture Fit', phonetic: '/ˈkʌltʃə fɪt/', zh: '团队文化契合度（在新西兰面试权重常高达 40%–50%！谦逊、真诚、好合作）' },
      { term: 'Small Talk Warm-up', phonetic: '/smɔːl tɔːk/', zh: '面试前 3 分钟寒暄（聊天气/通勤/咖啡，切忌板着脸像受审！）' },
      { term: 'Reference Check', phonetic: '/ˈrefrəns tʃek/', zh: '深度推荐人背调（通常是发正式 Offer 前最后一关，雇主会亲自打电话或发长问卷给前上司！）' },
      { term: 'Police Vetting / MOJ Check', phonetic: '/ˈvetɪŋ/', zh: '新西兰司法部无犯罪记录核查（入职常规流程，通常由雇主免费发起）' },
    ],
    cards: [
      {
        id: 'l21-c1',
        type: 'concept',
        title: {
          zh: '新西兰面试与国内的最大不同：更像平等聊合作，极重 Culture Fit！',
          en: 'How NZ Interviews Differ: Equal Conversation & Culture Fit',
        },
        body: {
          zh: '国内面试常偏重高强度压力拷问与背八股文；新西兰面试往往氛围轻松（甚至会先问你要不要喝杯咖啡或水），核心考察两件事：① 你过往真实做过什么（Behavioural STAR）；② 我们每天跟你并肩工作 8 小时舒不舒服（Culture Fit）！',
          en: 'NZ interviews feel conversational and warm—evaluating real past behaviour (STAR) alongside whether the team will enjoy working with you daily.',
        },
        keyPoints: [
          { zh: '平衡“自信”与“谦逊”（避开 Tall Poppy）：讲成果时要清晰说“I led / I designed”（别全说 We 让面试官分不清你干了啥），同时顺手肯定队友功劳（"working closely with our QA and product crew"），完美契合 Kiwi 审美！', en: 'Own your contribution ("I built/led") while generously crediting teammates—confident yet humble.' },
          { zh: '必答神题：“Tell me about a time you made a mistake or disagreed with a manager.” 千万别说“我从不犯错”！Kiwi 雇主最爱听你诚实承认一次可控失误、怎么迅速补救、以及建立什么机制避免再犯。', en: 'Never claim you never make mistakes—share an honest setback, how you owned and fixed it, and what you learned.' },
        ],
      },
      {
        id: 'l21-c2',
        type: 'checklist',
        title: {
          zh: '提前备好 5 个万能 STAR 故事，打遍 90% 新西兰面试题！',
          en: 'Prepare 5 Core STAR Stories to Cover 90% of NZ Behavioural Questions',
        },
        body: {
          zh: '面试前把这 5 个真实经历用英文顺着说 3 遍（每个控制在 2 分钟以内）：',
          en: 'Rehearse 5 concise 2-minute STAR stories aloud before your interview:',
        },
        keyPoints: [
          { zh: '① 一个解决复杂难题/救火的成功项目（体现专业硬实力与量化结果）', en: 'A complex technical/business problem you solved with measurable results.' },
          { zh: '② 一次团队意见分歧或应对难缠客户/利益相关方（体现高情商沟通与妥协艺术）', en: 'Navigating a disagreement with a colleague or tough stakeholder.' },
          { zh: '③ 一次犯错、延期或项目失败后的复盘与成长（体现担当与反思力）', en: 'A genuine mistake/setback, how you owned it, and what changed afterward.' },
          { zh: '④ 一次在高压多任务下排优先级按时交付（体现自我管理）', en: 'Juggling competing deadlines with calm prioritisation.' },
          { zh: '⑤ 一次跨文化适应或快速自学陌生技能并落地（直接化解“没本地经验”顾虑！）', en: 'Rapidly adapting to a new environment/toolset—proving transferability.' },
        ],
      },
      {
        id: 'l21-c3',
        type: 'warning',
        title: {
          zh: '最后临门一脚别翻车：Reference Check（推荐人背调）极其认真！',
          en: 'Do Not Drop the Ball at Reference Checks—NZ Employers Take Them Seriously',
        },
        body: {
          zh: '新西兰背调不是走过场！招聘经理或专业背调系统（如 Xref / RefNow）会直接致电或发问卷给你的 **2 位直属前上司/主管**（通常至少要 1 位近 2 年直属经理），核对你的工作表现、优缺点和是否愿意再次雇用你！',
          en: 'NZ employers routinely conduct thorough 15-minute phone or Xref reference checks with 2 recent line managers before issuing a formal Offer.',
        },
        keyPoints: [
          { zh: '✅ 提前挑好 2 位英文顺畅（或能用英文填表/接受口译）且对你评价极高的前上司/导师，务必提前打招呼！', en: 'Line up 2 supportive past managers beforehand—ideally comfortable in English.' },
          { zh: '✅ 在雇主发起背调前，把岗位 JD、你面试里讲过的重点项目发给推荐人预习一下，双方口径一致稳拿 Offer！', en: 'Brief your referees with the JD and key projects you discussed so they can reinforce your strengths.' },
          { zh: '❌ 绝对禁止找朋友假冒前上司接背调电话！一旦露馅会被列入行业猎头黑名单。', en: 'Never fake a referee—getting caught permanently damages your reputation in NZ’s small market.' },
        ],
      },
      {
        id: 'l21-c4',
        type: 'dialogue',
        title: {
          zh: '面试尾声反问面试官的 3 个高段位 Kiwi 问题',
          en: '3 Smart Questions to Ask at the End of an NZ Interview',
        },
        body: {
          zh: '面试官问 "Do you have any questions for us?" 时，千万别说 "No"！问这几个问题好感度拉满：',
          en: 'Never say "No questions"—ask thoughtful, team-focused questions:',
        },
        dialogueLines: [
          {
            speaker: 'You',
            en: '1. What would success look like in the first 90 days for the person stepping into this role?\n2. How would you describe the team’s day-to-day culture and collaboration style?\n3. What do you personally enjoy most about working here?',
            zh: '1. 如果入职这个岗位，前 90 天做到什么程度会被团队视为非常成功？\n2. 您会怎么形容团队日常的氛围和协作风格？\n3. 您个人在这里工作最享受的部分是什么？',
            subtextZh: '第 3 个问题极能拉近距离，常常把正式面试变成愉快的双向聊天！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l21-q1',
        prompt: {
          zh: '新西兰面试官问你：“Can you tell me about a time things didn’t go to plan at work?” 最加分的回答策略是？',
          en: 'An NZ interviewer asks: "Tell me about a time things didn’t go to plan at work." What is the strongest approach?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '用 STAR 结构坦诚分享一次真实且可控的挫折，重点讲你如何主动担责、快速沟通止损以及后续改进流程', en: 'Use STAR to share a real setback honestly, highlighting ownership, proactive communication, fix, and lasting improvement' },
            isCorrect: true,
            feedback: { zh: '教科书满分！新西兰职场高度欣赏坦诚担当（Ownership）和复盘成长心态。', en: 'Spot on—Kiwis deeply value honesty and ownership!' },
          },
          {
            id: 'b',
            text: { zh: '回答“我工作一向极度严谨，从未出过差错；唯一一次延期全是前同事拖后腿”', en: 'Claim you never make mistakes and blame a past coworker for any delay' },
            isCorrect: false,
            feedback: { zh: '踩爆双雷！既不诚实又甩锅同事，Culture Fit 直接不及格！', en: 'Huge red flag—denying mistakes and blaming coworkers fails Culture Fit instantly.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '立刻切换到「Kiwi 直聘」，挑 2 个与你行业相关的岗位点「立即沟通」，用全英文跑完多轮模拟直聊并看教练实时点评！',
      en: 'Open the Kiwi 直聘 tab and complete 2 full interactive Boss Direct Chat simulations to sharpen your replies.',
    },
  },

  {
    id: 'l-22',
    number: 22,
    moduleId: 'mod-4',
    title: {
      zh: '谈薪与看懂雇佣合同（2026 雇佣法大改、90天试用期与假期法）',
      en: 'Salary Negotiation & NZ Employment Agreements (2026 Law Updates)',
    },
    summary: {
      zh: '精准拆解 2026 年 2 月实施的《雇佣关系修正案》、90 天试用期入职前签署红线、Total Rem vs On Top 谈薪陷阱、欠薪入刑，以及 2026 新假期法展望。',
      en: 'Master the Feb 2026 Employment Relations Amendment Act, 90-day trial validity, KiwiSaver package math, criminalised wage theft, and leave entitlements.',
    },
    targetLevel: 3,
    durationMin: 9,
    xpReward: 85,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Employment NZ (employment.govt.nz) / Employment Relations Amendment Act 2026',
    terms: [
      { term: 'IEA (Individual Employment Agreement)', phonetic: '/ˌaɪ iː ˈeɪ/', zh: '个人书面雇佣协议（新西兰法律强制要求每位雇员必须有书面合同！）' },
      { term: '90-Day Trial Period', phonetic: '/ˈtraɪəl/', zh: '90 天试用期（全规模企业可用，但必须在正式开工第一分钟前书面签字才有效！）' },
      { term: 'Total Remuneration', phonetic: '/rɪˌmjuːnəˈreɪʃn/', zh: '总包制（雇主 3.5% KiwiSaver 从标称年薪里扣！谈薪必问是不是 On Top！）' },
      { term: 'Unjustified Dismissal ($200k cap)', phonetic: '/ˌʌnˈdʒʌstɪfaɪd/', zh: '2026.02 新规：新合同年总包 ≥$200,000 的高薪雇员限制提起无理解雇个人申诉' },
      { term: 'Annual & Sick Leave', phonetic: '/ˈænjuəl liːv/', zh: '法定至少 4 周带薪年假 + 10 天带薪病假（工作满 6 个月起享有）+ 12 天法定公共假期' },
      { term: 'Wage Theft', phonetic: '/weɪdʒ θeft/', zh: '2025.03 起新西兰将雇主故意克扣工资正式列入刑事犯罪！' },
    ],
    cards: [
      {
        id: 'l22-c1',
        type: 'warning',
        title: {
          zh: '签合同前必查 5 条保命条款（一字之差一年少拿几千刀！）',
          en: '5 Clauses to Inspect Before Signing Any NZ Employment Agreement',
        },
        body: {
          zh: '拿到 Offer 兴奋归兴奋，新西兰法律保障你有合理时间（通常 3–5 个工作日）把合同带回家仔细审阅或咨询专业人士后再签字：',
          en: 'Employers must give you reasonable time to review and seek independent advice before signing:',
        },
        keyPoints: [
          { zh: '① KiwiSaver 是 "+3.5% On Top" 还是 "Total Remuneration"？同样写着 $100,000，Total Rem 意味着雇主把 3.5% 配捐从 $100k 里扣掉，你每年税后现金实亏约 $2,300+！', en: 'Always check whether KiwiSaver (3.5% from Apr 2026) is ON TOP of base salary or absorbed inside Total Remuneration!' },
          { zh: '② 90 天试用期（90-Day Trial Period）：所有规模企业都可用，但法律红线极严——仅适用于从未为该雇主干过活的全新员工，且必须在正式开工前完成双方签字！第一天干了 1 小时才补签即无效！', en: '90-day trial clauses are valid ONLY for genuinely new employees who sign BEFORE starting any work.' },
          { zh: '③ 最低工资与中位数核对：2026 年 4 月起法定成人最低工资为 NZ$23.95/hr；若需担保配偶工签或走居留路径，核对是否满足 NZ$35.00/hr 中位数参考线。', en: 'Verify hourly rate ≥ NZ$23.95 (2026 minimum wage) and check NZ$35.00 median benchmark if visa pathways require it.' },
          { zh: '④ 竞业禁止（Restraint of Trade）与通知期（Notice Period，常见 4 周）：看清离职限制范围是否过宽。', en: 'Review Notice Period (usually 4 weeks) and any Restraint of Trade clauses.' },
          { zh: '⑤ 工时与加班（Hours of Work & Availability）：月薪制（Salaried）注意是否有合理工时界定，时薪制（Waged）确认每周保底工时。', en: 'Confirm guaranteed hours and how overtime/on-call work is compensated.' },
        ],
      },
      {
        id: 'l22-c2',
        type: 'comparison',
        title: {
          zh: '【2026.02 生效】《雇佣关系修正案》四大重磅新规',
          en: 'Employment Relations Amendment Act 2026 (In Force 21 Feb 2026)',
        },
        body: {
          zh: '2026 年 2 月 21 日生效的雇佣法改革是近十年最大调整，职场人与高薪人士务必知晓：',
          en: 'Four major changes took effect on 21 February 2026:',
        },
        keyPoints: [
          { zh: '① 高薪无理解雇限制（$200,000 门槛）：新签合同年总包达 NZ$200,000 及以上的高管/高薪员工，受限提起无理解雇个人申诉（除非合同另行约定退出）。', en: 'Employees earning NZ$200,000+ total remuneration under new contracts are restricted from unjustified dismissal personal grievances.' },
          { zh: '② 取消“前 30 天强制集体协议规则”：新员工入职第一天即可直接谈个人雇佣协议（IEA），不再强制前 30 天套用工会集体条款。', en: 'Removed the automatic 30-day collective agreement rule for new hires.' },
          { zh: '③ 明确 Contractor 五项法定判定测试（Gateway Test）：详见第 24 课自雇专题。', en: 'Introduced the 5-part Specified Contractor Gateway Test (covered in Lesson #24).' },
          { zh: '④ 故意克扣工资已入刑（2025.03 起）& 《2026 假期法》已通过（预计 2028 年 8 月生效，未来将改按小时累积年假病假及临时工 12.5% 假期补贴）。', en: 'Intentional wage theft is a crime; the Employment Leave Act 2026 (commencing Aug 2028) will transition leave to hours-based accrual.' },
        ],
      },
      {
        id: 'l22-c3',
        type: 'concept',
        title: {
          zh: '新西兰法定带薪假期权益（别不好意思休假！）',
          en: 'Statutory Paid Leave Rights in New Zealand',
        },
        body: {
          zh: '新西兰法律给予全职员工极其丰厚的休假保障，老板不仅不反感你休假，反而会催你清空积压年假：',
          en: 'Full-time NZ employees enjoy generous statutory leave—taking your annual leave is actively encouraged:',
        },
        keyPoints: [
          { zh: '🏖️ 年假（Annual Leave）：每年至少 4 周（20 个工作日）带薪年假（满 12 个月正式归属，多数公司允许提前按已累积天数请假）。', en: 'At least 4 weeks paid annual leave per year.' },
          { zh: '🤒 病假（Sick Leave）：工作满 6 个月起每年享有 10 天带薪病假（可给自己、配偶或生病的孩子/父母用！最高累积 20 天）；请 1–2 天通常无需医生病假条，连续 ≥3 天雇主才可要求提供。', en: '10 days paid sick leave/year after 6 months (usable for yourself or sick dependants; medical cert generally only after 3+ consecutive days).' },
          { zh: '🎉 公共假期（Public Holidays）：全年共 12 天（含圣诞/元旦/怀唐伊/复活节/ANZAC/毛利新年 Matariki/所在省份建省日）；若在公假上班须给 1.5 倍工资 + 补 1 天带薪调休（Day in Lieu）！', en: '12 public holidays/year; working a public holiday pays time-and-a-half plus an alternative day off.' },
        ],
      },
      {
        id: 'l22-c4',
        type: 'dialogue',
        title: {
          zh: '谈薪与确认 KiwiSaver 包法的高情商英文话术',
          en: 'Polite & Effective NZ Salary Negotiation Script',
        },
        body: {
          zh: '新西兰职场谈薪讲究有理有据（提前去 Hays Salary Guide / Seek 查市场区间）、语气平和合作：',
          en: 'Anchor your ask with NZ market data (Hays / Seek) and stay warm and collaborative:',
        },
        dialogueLines: [
          {
            speaker: 'You (Negotiating Offer)',
            en: 'Kia ora [Name], thanks so much for the offer—I’m really excited about joining the team! Before signing, could I clarify two quick details: is the $95k base salary plus 3.5% KiwiSaver on top, or Total Remuneration? Also, based on my 6 years of experience and current Auckland market benchmarks, would there be room to look at $102k + KiwiSaver?',
            zh: '你好 [姓名]，非常感谢这份 Offer，特别期待加入团队！签字前方便确认两个小细节吗：这个 $95k 是基础年薪外加 3.5% KiwiSaver，还是总包制？另外结合我 6 年经验和奥克兰市场行情，薪资是否有空间调整到 $102k + KiwiSaver？',
            subtextZh: '先表达真诚热情，再基于市场数据提问，就算对方没预算通常也不会撤 Offer，而是会诚实告诉你天花板！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l22-q1',
        prompt: {
          zh: '你周一已经按老板要求正式上班干了一整天活，周二早上老板才把写有“90 天试用期”的雇佣合同递给你签字。这条 90 天试用期条款在法律上有效吗？',
          en: 'You worked your entire first Monday shift, and on Tuesday morning your boss asks you to sign a contract with a 90-day trial clause. Is the trial clause legally valid?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '无效！新西兰法律硬性规定 90 天试用期必须在正式开工第一分钟之前书面约定并签字', en: 'Invalid—a 90-day trial must be signed in writing BEFORE the employee starts any work' },
            isCorrect: true,
            feedback: { zh: '精准避坑！这在雇佣仲裁庭（ERA）是被判无效最常见的原因之一。', en: 'Spot on!' },
          },
          {
            id: 'b',
            text: { zh: '有效，只要第一周内补签就行', en: 'Valid if signed within the first week' },
            isCorrect: false,
            feedback: { zh: '错误！只要已经开始提供劳动，事后补签的 90 天试用期条款在法律上即告失效。', en: 'Incorrect—starting even one hour before signing invalidates the 90-day trial clause.' },
          },
        ],
      },
      {
        id: 'l22-q2',
        prompt: {
          zh: '你在 2026 年 6 月收到两份表面年薪都是 NZ$100,000 的 Offer：A 公司写明 "+3.5% KiwiSaver On Top"，B 公司写明 "Total Remuneration (inclusive of KiwiSaver)"。哪份实际到手现金更高？',
          en: 'Offer A pays $100k + 3.5% KiwiSaver On Top; Offer B pays $100k Total Remuneration. Which puts more net cash in your pocket?',
        },
        options: [
          {
            id: 'a',
            text: { zh: 'A 公司（On Top）！B 公司会把雇主 3.5% 配捐从 $100k 里扣出来，每年税后实拿现金少约 $2,300+', en: 'Offer A (On Top)—Offer B deducts the employer’s 3.5% KiwiSaver from inside the $100k package' },
            isCorrect: true,
            feedback: { zh: '完全正确！可以用本应用「Kiwi 直聘 → Offer 合同体检器」一秒精确算差额！', en: 'Spot on—test exact numbers in our Offer Checker!' },
          },
          {
            id: 'b',
            text: { zh: '两份一模一样，只是英语写法不同', en: 'Identical—just different wording' },
            isCorrect: false,
            feedback: { zh: '差远了！Total Remuneration 会直接拉低你的应税底薪与到手现金。', en: 'Huge difference—Total Rem reduces your base pay and take-home cash!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '拿到任何 Offer 时，立刻打开本应用「Kiwi 直聘 → Offer 合同体检器」测算税后周薪与 Total Rem 差额！',
      en: 'Always run every job offer through Kiwi 直聘 → Offer Checker before signing.',
    },
  },

  {
    id: 'l-23',
    number: 23,
    moduleId: 'mod-4',
    title: {
      zh: '地道新西兰职场生存法则：扁平化、Tall Poppy 与委婉批评解码',
      en: 'Thriving in a Kiwi Workplace: Flat Hierarchy, Tall Poppy & Banter',
    },
    summary: {
      zh: '读懂新西兰办公室潜规则：直呼 CEO 名字、忌高调炫耀的“高罂粟花综合症”、听懂 Kiwi 老板“委婉批评”的真实含义、Morning Tea 文化与 Work-Life Balance。',
      en: 'Navigate flat NZ teams smoothly: first-name culture, Tall Poppy Syndrome, decoding polite Kiwi feedback, Morning Teas, and healthy work-life boundaries.',
    },
    targetLevel: 3,
    durationMin: 7,
    xpReward: 75,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'New Zealand Now Workplace Culture Guide',
    terms: [
      { term: 'Tall Poppy Syndrome', phonetic: '/tɔːl ˈpɒpi/', zh: '高罂粟花综合症（极反感炫富、傲慢自吹、高高在上，推崇平等谦逊）' },
      { term: 'Flat Hierarchy', phonetic: '/flæt ˈhaɪərɑːki/', zh: '极度扁平的职场层级（直呼总监/CEO 英文名，不叫“王总/Boss”，鼓励平等讨论）' },
      { term: 'Morning Tea / Shout', phonetic: '/ˈmɔːnɪŋ tiː/', zh: '办公室上午茶文化（迎新、生日、项目庆功大家轮流带点心分享，快速破冰神器！）' },
      { term: 'Banter', phonetic: '/ˈbæntə/', zh: '善意互损与自嘲式幽默（新西兰同事跟你开无伤大雅的小玩笑代表接纳你当自己人！）' },
      { term: 'Touch Base / Yarn', phonetic: '/tʌtʃ beɪs/', zh: '简单碰个头/聊两句（比正式开会轻松，日常协作极高频）' },
    ],
    cards: [
      {
        id: 'l23-c1',
        type: 'comparison',
        title: {
          zh: '核心文化解码：直呼其名、拒绝内卷加班、远离 Tall Poppy',
          en: '3 Pillars of Kiwi Workplace Culture',
        },
        body: {
          zh: '把国内“领导永远是对的 + 主动加班显忠诚”直接搬到新西兰办公室，往往会适得其反：',
          en: 'Direct translation of hierarchical workplace habits can backfire in NZ:',
        },
        keyPoints: [
          { zh: '① 称呼与平等：无论对方是 60 岁 CEO 还是部门 VP，一律直呼 First Name（如 "Kia ora David"），绝不喊 "Boss" 或 "Director Wang"；在会议里基于数据提出不同意见被视为专业与担当！', en: 'Use first names for everyone including the CEO; constructive data-backed disagreement is valued.' },
          { zh: '② Work-Life Balance 是底线：多数办公室 8:30–5:00 准点下班接娃/健身/遛狗；天天深夜发工作邮件不会换来表扬，反而会被担心你时间管理有问题或给团队制造焦虑！', en: 'Leaving on time at 5pm is normal—chronic late-night emails often raise time-management concerns.' },
          { zh: '③ 避开 Tall Poppy（高罂粟花）：新西兰社会崇尚人人平等（Egalitarianism），绝不要炫耀豪车名表、母校排名或居高临下评价服务人员——越是大佬越穿拖鞋 T 恤自嘲接地气！', en: 'Stay grounded and humble—showing off wealth, status, or arrogance triggers instant Tall Poppy pushback.' },
        ],
      },
      {
        id: 'l23-c2',
        type: 'comparison',
        title: {
          zh: '救命对照表：听懂 Kiwi 老板“超委婉英语”背后的真实意思！',
          en: 'Kiwi Workplace Subtext Decoder: What They Say vs What They Mean',
        },
        body: {
          zh: '新西兰人极少当面严厉斥责，批评全包在厚厚的糖衣里——听不懂潜台词很容易以为老板在夸你：',
          en: 'Kiwis wrap negative feedback in polite understatement—learn to read between the lines:',
        },
        keyPoints: [
          { zh: '💬 "Yeah, nah, that’s an interesting approach..." → 🎯 真实意思：这个方案不太行，赶紧换个思路！', en: '"Yeah, nah, interesting approach" = Probably not going to work; rethink it.' },
          { zh: '💬 "Just wondering if we might want to double-check the numbers?" → 🎯 真实意思：数据有错，请立刻核对修改！', en: '"Just wondering if we might double-check..." = There is likely an error—please fix it now.' },
          { zh: '💬 "Could be worth having a quick look at X when you get a chance." → 🎯 真实意思：老板交办的任务，今天/近期务必做完！', en: '"Worth a look when you get a chance" = Please prioritise this task.' },
          { zh: '💬 "Let’s take this offline / park that for now." → 🎯 真实意思：别在会上纠缠这个细节了，会后私聊！', en: '"Let’s park that / take it offline" = Move on from this topic in the meeting.' },
        ],
      },
      {
        id: 'l23-c3',
        type: 'dialogue',
        title: {
          zh: '如何优雅拒绝超负荷工作 & 正常请病假（不卑不亢！）',
          en: 'Pushing Back Gracefully & Calling In Sick the Kiwi Way',
        },
        body: {
          zh: '在新西兰，生病带病上班（尤其传染感冒）其实会被同事反感；工作排满时透明对齐优先级最受尊重：',
          en: 'Stay home when sick (spreading germs is frowned upon) and negotiate priorities transparently:',
        },
        dialogueLines: [
          {
            speaker: 'You (Calling in sick — short & zero guilt)',
            en: 'Kia ora [Manager], I’ve come down with a bad cold overnight so I’ll need to take a sick day today to rest up and not pass it around the team. I’ve flagged [Urgent Task] with Sarah. Cheers, [Name]',
            zh: '你好 [经理]，我昨晚得了重感冒，今天请一天病假休息以免传染团队，紧急任务已同步给 Sarah。谢谢！',
            subtextZh: '不需要长篇大论交代病情细节或不断道歉，简短透明+交接好紧急事项最专业！',
          },
          {
            speaker: 'You (Managing workload politely)',
            en: 'Kia ora [Manager], I’m happy to jump onto Project B! Just checking priorities—since I’m currently flat out finishing Project A for Friday, would you prefer I pause A or aim for Project B early next week?',
            zh: '你好 [经理]，我很乐意接手项目 B！确认下优先级——目前我正全力赶周五交付的项目 A，您看是先暂停 A 还是我下周初交付 B？',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l23-q1',
        prompt: {
          zh: '在奥克兰一家科技公司开会，经理看了你做的方案后微笑着说：“Yeah, nah, that’s quite an ambitious direction—just wondering if we might explore a simpler option first?” 她的真实意思是？',
          en: 'Your NZ manager smiles and says: "Yeah, nah, quite an ambitious direction—just wondering if we might explore a simpler option first?" What does she mean?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '委婉否决了当前复杂方案，希望你立刻调整为一个更务实简单的方案', en: 'She politely disagrees with the complex plan and wants you to pivot to a simpler approach' },
            isCorrect: true,
            feedback: { zh: '精准解码 Kiwi 委婉英语！记住 "Yeah, nah" 看最后一个词，通常代表礼貌否定。', en: 'Spot on—you decoded classic Kiwi understatement!' },
          },
          {
            id: 'b',
            text: { zh: '她在热烈表扬你很有野心，让你按原方案直接猛干', en: 'She is praising your ambition and approving your original plan' },
            isCorrect: false,
            feedback: { zh: '差点掉进潜台词坑里！在新西兰职场 "ambitious" + "just wondering" 几乎等于礼貌叫停。', en: 'Watch out—"Yeah, nah" + "just wondering" is a polite no!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '去「语言实验室」筛出「职场潜台词（workplace-subtext）」分类，把 10 条高频办公室暗语刷进 SM-2 记忆队列！',
      en: 'Open Language Lab and review all 10 Workplace Subtext phrases.',
    },
  },

  {
    id: 'l-24',
    number: 24,
    moduleId: 'mod-4',
    title: {
      zh: '自雇、Contractor 与小生意起步：2026 五项判定、NZBN 与 GST',
      en: 'Contracting, Sole Traders & Small Business (2026 Gateway Test & GST)',
    },
    summary: {
      zh: '彻底分清 Employee 与 Contractor（详解 2026.02 生效的五项法定判定测试）、Sole Trader vs 注册有限公司（Ltd）、NZBN、GST $60,000 门槛与预缴税防坑。',
      en: 'Master the Feb 2026 5-part Contractor Gateway Test, Sole Trader vs Company, NZBN, the $60k GST threshold, and provisional tax basics.',
    },
    targetLevel: 4,
    durationMin: 9,
    xpReward: 85,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'business.govt.nz / IRD / Employment Relations Amendment Act 2026',
    terms: [
      { term: 'Specified Contractor (Gateway Test)', phonetic: '/kənˈtræktə/', zh: '2026.02 法定五项承包商测试（全部满足即法律定性为独立承包商，不可按雇员申诉）' },
      { term: 'Sole Trader', phonetic: '/səʊl ˈtreɪdə/', zh: '个体户（零注册费、用个人 IRD 报税，但承担无限个人连带责任）' },
      { term: 'Limited Company (Ltd)', phonetic: '/ˈlɪmɪtɪd/', zh: '有限责任公司（上 Companies Office 注册，费用低廉、有限责任隔离风险）' },
      { term: 'NZBN', phonetic: '/ˌen zed biː ˈen/', zh: '新西兰商业识别码（13 位免费编号，开发票与对接政府/大企业必备）' },
      { term: 'GST (15% / $60,000)', phonetic: '/ˌdʒiː es ˈtiː/', zh: '商品服务税（连续 12 个月营业额达 NZ$60,000 必须强制注册并按期向 IRD 申报！）' },
      { term: 'Provisional Tax', phonetic: '/prəˈvɪʒənl tæks/', zh: '预缴所得税（自雇/承包商年度未扣税欠税超 $5,000 后，次年须分期预缴！）' },
    ],
    cards: [
      {
        id: 'l24-c1',
        type: 'comparison',
        title: {
          zh: '【2026.02 新法】Employee vs Contractor 五项法定判定测试（Gateway Test）',
          en: 'Feb 2026 Law: The 5-Part Specified Contractor Gateway Test',
        },
        body: {
          zh: '在新西兰 IT、建筑技工、设计咨询和外卖配送领域，Contractor（独立承包商）极其普遍（时薪通常比全职高 25%–40%，但没有带薪年假、病假、公假和雇主 KiwiSaver！）。2026 年 2 月 21 日起，《雇佣关系修正案》确立了明确红线——若合同同时满足以下 5 项，即依法定性为独立承包商：',
          en: 'Effective 21 Feb 2026, a worker is legally a "specified contractor" if ALL 5 criteria are met:',
        },
        keyPoints: [
          { zh: '① 有书面协议明确写明你是独立承包商（Independent Contractor / 非雇员）。', en: 'Written agreement explicitly stating you are an independent contractor.' },
          { zh: '② 不限制你同时为其他客户/公司工作（正常执行当前任务期间的合理保护除外）。', en: 'Not restricted from working for other businesses.' },
          { zh: '③ 不强制你必须在特定时间/天数随时待命，或者允许你合法转包（Sub-contract）工作。', en: 'Not required to be available at set times/days, OR genuinely allowed to sub-contract.' },
          { zh: '④ 不会仅仅因为你拒绝接受额外派活就终止合作。', en: 'Contract does not end solely because you decline extra work.' },
          { zh: '⑤ 签约前给了你合理机会寻求独立法律/专业意见。', en: 'Given reasonable opportunity to seek independent advice before signing.' },
        ],
      },
      {
        id: 'l24-c2',
        type: 'comparison',
        title: {
          zh: '起步形式选择：Sole Trader（个体户）vs 注册公司（Ltd）',
          en: 'Choosing Your Structure: Sole Trader vs Limited Company (Ltd)',
        },
        body: {
          zh: '在新西兰创业开公司全流程在线办理，半小时即可完成（官网 business.govt.nz 与 companiesoffice.govt.nz）：',
          en: 'Starting a business in NZ is famously fast and digital—pick the structure matching your risk:',
        },
        keyPoints: [
          { zh: '👤 Sole Trader（个体户）：适合个人自由职业、IT/设计 Contractor、兼职副业。零注册费，免费申一个 NZBN 即可开发票收款；缺点是无限责任（生意赔钱会追及个人房产存款）。', en: 'Sole Trader: $0 setup, simple IR3 tax return—best for low-risk solo freelancers, but unlimited personal liability.' },
          { zh: '🏢 Limited Company（有限公司 Ltd）：适合开实体店、雇员工、高风险工程或与人合伙。在 Companies Office 在线注册仅约 NZ$130–$150，公司与个人财产法律隔离，企业所得税固定 28%。', en: 'Limited Company (Ltd): ~$130–$150 online setup, separate legal entity (limited liability), flat 28% company tax.' },
          { zh: '⚠️ 签证红线警告！持有普通雇主绑定工签（AEWV）通常严禁兼职做自雇/开公司！只有公民、居民（RV/PRV）或允许自雇的特定开放工签才能合法创业自雇！', en: 'Visa warning: employer-specific work visas (AEWV) generally prohibit self-employment—always check your visa conditions first!' },
        ],
      },
      {
        id: 'l24-c3',
        type: 'warning',
        title: {
          zh: '自雇税务三座大山：GST $60,000 门槛、ACC 自付账单与预缴税陷阱！',
          en: '3 Self-Employment Tax Surprises: GST $60k, ACC Levies & Provisional Tax',
        },
        body: {
          zh: '新手做 Contractor 第一年最容易觉得“哇赚了好多钱全花光”，第二年收到 IRD 和 ACC 账单直接傻眼！务必从第一张发票开始单开一个「税款专户」存下收入的 30%–35%：',
          en: 'New contractors often overspend in Year 1 and get shocked in Year 2—set aside 30–35% of every invoice into a separate tax bucket:',
        },
        keyPoints: [
          { zh: '① GST（15% 商品服务税）：过去 12 个月或预计未来 12 个月营业额达到 NZ$60,000 时，依法必须注册 GST，给客户开发票加收 15% GST，并按双月/半年向 IRD 申报多退少补！', en: 'GST (15%): mandatory registration once annual turnover hits NZ$60,000.' },
          { zh: '② ACC Work + Earner Levy：自雇人士没有雇主帮你交，ACC 会在报税后单独寄给你一年几百至数千纽币的账单（按行业风险定费率）！', en: 'ACC sends self-employed people a separate annual levy invoice based on industry risk.' },
          { zh: '③ 合法抵税与记账神器：与业务直接相关的电脑、软件订阅、居家办公面积比例水电网、车辆业务里程（须记 Logbook！）均可合法抵扣；推荐用新西兰国民会计软件 Xero 或专为个体户设计的 Hnry（自动按每笔进账代扣税、GST 和 ACC！）。', en: 'Track deductible expenses carefully—use Xero or Hnry (which auto-deducts tax, GST, and ACC on every invoice!).' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l24-q1',
        prompt: {
          zh: '你以 Sole Trader 身份接 IT 独立开发项目，预计今年 12 个月内总营收将达到 NZ$85,000。关于 GST（15%），以下哪项正确？',
          en: 'Your Sole Trader IT consulting turnover is expected to hit NZ$85,000 over 12 months. What is your legal GST obligation?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '必须强制注册 GST（已超 $60,000 法定门槛），开具含 15% GST 的税务发票并按期向 IRD 申报缴纳', en: 'Mandatory GST registration (exceeds the $60,000 threshold)—charge 15% GST on NZ invoices and file GST returns with IRD' },
            isCorrect: true,
            feedback: { zh: '完全正确！同时你购买与业务相关的本地设备和软件所含的 15% GST 也可以拿回来抵扣！', en: 'Spot on—and you can claim back GST on business expenses!' },
          },
          {
            id: 'b',
            text: { zh: '个体户永远不用注册 GST，只有注册 Ltd 公司才需要', en: 'Sole Traders are exempt from GST; only Ltd companies register' },
            isCorrect: false,
            feedback: { zh: '错误！GST $60,000 门槛对个体户、合伙和公司一视同仁！', en: 'The $60,000 GST threshold applies equally to Sole Traders and companies.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '收藏新西兰政府官方免费创业导航网 business.govt.nz，如果你准备做自由职业/Contractor，可以研究一下 Hnry 或 Xero 自动算税方案。',
      en: 'Explore business.govt.nz and compare Hnry vs Xero if you plan to contract in NZ.',
    },
  },
];
