import type { ChatStage, JobPosting } from '../../types';

export const JOB_CHAT_SCRIPTS: Record<string, ChatStage[]> = {
  'script-tech': [
    {
      stageIndex: 0,
      stageLabel: '破冰开场 · Opening',
      bossPromptEn:
        'Kia ora! Thanks for reaching out about the role. Quick yarn first—what caught your eye about our team, and what is your current NZ work rights situation?',
      bossPromptZh:
        '你好！感谢主动联系这个岗位。先简单聊聊——是什么吸引了你，以及你目前在新西兰的工作签证/工作权利情况如何？',
      options: [
        {
          id: 't0-great',
          text: {
            zh: '“Kia ora Sarah！贵司聚焦 NZ 中小企业 SaaS 且扁平务实的工程文化很吸引我。我目前持有 Open Work Visa（或可走 AEWV），具备 5 年 React/Node 全栈实战经验，已附简历名片供您参考！”',
            en: 'Kia ora Sarah! I love your team’s focus on pragmatic NZ SME software and flat engineering culture. I have 5 years of React/Node experience and hold full NZ work rights (valid Open Work Visa). Happy to flick my CV card across!',
          },
          quality: 'great',
          scoreDelta: { professional: 25, kiwiNatural: 25, cultureSafe: 25 },
          coachFeedbackZh:
            '满分开场！自然用了 Kia ora 和 flick across，先呼应公司特点，再大方透明地交代签证状态与核心匹配度，极度符合 Kiwi 老板偏好。',
          bossReplyEn:
            'Awesome, thanks for being super clear on work rights—that saves heaps of back-and-forth! Next question: we sometimes see great overseas devs who haven’t worked in an NZ squad yet. How would you handle differing opinions in a flat team without a strict hierarchy?',
          bossReplyZh:
            '太棒了，签证说得非常清楚，省了不少来回确认！下一个问题：很多海外工程师刚来时不太习惯新西兰极度扁平的团队。如果技术方案和同事有分歧，你会怎么处理？',
        },
        {
          id: 't0-ok',
          text: {
            zh: '“你好，我有 5 年开发经验，技术很好，请问你们这个岗位能保底开到 12 万 8 并担保工签吗？”',
            en: 'Hello, I have 5 years coding experience. Can you guarantee $128k and sponsor my visa?',
          },
          quality: 'ok',
          scoreDelta: { professional: 12, kiwiNatural: 8, cultureSafe: 10 },
          coachFeedbackZh:
            '直奔主题没错，但第一句话就要求“保底最高薪+担保”略显生硬。Kiwi 雇主更喜欢先看到你对业务和团队的兴趣，再自然沟通薪资区间与签证。',
          betterPhraseEn:
            'Kia ora! I have 5 years in React/Node and I’m really keen on your product. Could I check if this role is open to AEWV sponsorship, and what range you’ve budgeted?',
          bossReplyEn:
            'Fair question—we are AEWV accredited and salary depends on impact across the squad. Before we get into package details, how do you normally handle technical disagreements in a flat team?',
          bossReplyZh:
            '很实在的问题——我们是 AEWV 认证雇主，薪资看综合贡献。在聊具体薪酬前，先问一下你在扁平团队里怎么处理技术分歧？',
        },
        {
          id: 't0-pitfall',
          text: {
            zh: '“您好，我今年 32 岁已婚有娃非常稳定，我是全公司代码写得最快的明星程序员，每天可以加班到晚上 10 点！”',
            en: 'Hi, I am 32, married with kids so I am very stable. I am the #1 fastest coder at my company and can work overtime until 10pm every night!',
          },
          quality: 'pitfall',
          scoreDelta: { professional: 4, kiwiNatural: 2, cultureSafe: -10 },
          coachFeedbackZh:
            '连续踩中三大新西兰职场雷区！(1) 切勿主动提年龄、婚育（受《人权法》隐私保护）；(2) 夸耀“全公司第一”易触碰 Tall Poppy Syndrome；(3) 主动吹嘘加班会被质疑效率低或不尊重团队 Work-Life Balance！',
          betterPhraseEn:
            'Kia ora! I’m passionate about shipping clean, maintainable code collaboratively and value a sustainable engineering pace.',
          bossReplyEn:
            'Haha appreciate the energy! Just a friendly heads-up—in NZ we don’t need age or family details, and we actually discourage late-night crunch in favour of smart teamwork. Speaking of teamwork, how do you navigate technical disagreements?',
          bossReplyZh:
            '哈哈感谢你的干劲！友情提醒一下——在新西兰不需要提年龄婚育，我们也不鼓励熬夜加班，更看重高效协作。说到协作，你平时怎么处理技术方案分歧？',
        },
      ],
    },
    {
      stageIndex: 1,
      stageLabel: '职场文化与 STAR 行为题 · Teamwork & STAR',
      bossPromptEn:
        'Can you share a quick example of collaborating through a tough technical trade-off?',
      bossPromptZh: '能否简短分享一个你在团队中通过协作解决技术权衡难题的例子？',
      options: [
        {
          id: 't1-great',
          text: {
            zh: '用 STAR 结构回答：“上个项目结账页加载慢（S/T），我先拉数据和产品、后端开短会对齐权衡点，提出渐进式方案而非推翻重写（A），最终提速 38% 且如期上线（R）。”',
            en: 'Sure—on a checkout revamp, latency spiked (S/T). Instead of pushing my own rewrite, I ran a quick data-backed whiteboard session with backend & product to weigh trade-offs (A). We shipped an incremental fix on time and cut load time by 38% (R).',
          },
          quality: 'great',
          scoreDelta: { professional: 30, kiwiNatural: 25, cultureSafe: 25 },
          coachFeedbackZh:
            '教科书级 STAR 回答！有背景、有倾听协作（不独断）、有量化结果（38%），完美展现谦逊且高效的 Kiwi 工程师气质。',
          bossReplyEn:
            'Love that pragmatic mindset and clear outcome! Last two quick checks: what are your salary expectations (remembering our KiwiSaver is +3.5% on top), and what is your notice period?',
          bossReplyZh:
            '特别欣赏这种务实协作又有清晰数据的思路！最后确认两件事：你的薪资预期（我们是基础年薪额外加 3.5% KiwiSaver），以及最早入职周期？',
        },
        {
          id: 't1-ok',
          text: {
            zh: '“我一般会先听大家意见，然后少数服从多数或者听技术总监拍板，保证不跟同事吵架。”',
            en: 'I usually listen to everyone and follow whatever the manager decides so there is no conflict.',
          },
          quality: 'ok',
          scoreDelta: { professional: 12, kiwiNatural: 12, cultureSafe: 14 },
          coachFeedbackZh:
            '态度友善，但略显被动。新西兰扁平团队期望工程师能建设性地提出观点并用数据支撑，而不是只等老板拍板。',
          betterPhraseEn:
            'I like to bring objective data to the table, listen to others’ perspectives, and align on the best trade-off for users.',
          bossReplyEn:
            'Fair enough—we definitely value engineers who speak up constructively with data too! Before we wrap up, what are your salary expectations and notice period?',
          bossReplyZh:
            '理解——不过我们也很鼓励工程师带着数据主动发声！收尾前确认一下，你的薪资预期和离职周期是？',
        },
        {
          id: 't1-pitfall',
          text: {
            zh: '“之前同事写的代码太烂了，我直接周末自己全重写了，周一让他们直接用我的就行。”',
            en: 'A teammate’s code was terrible, so I rewrote all of it myself over the weekend and told them to use mine on Monday.',
          },
          quality: 'pitfall',
          scoreDelta: { professional: 5, kiwiNatural: 4, cultureSafe: -15 },
          coachFeedbackZh:
            '高危“独狼英雄”雷区！在新西兰职场，背后吐槽同事且不沟通就单干重写真的会直接导致 Culture Fit 淘汰！',
          betterPhraseEn:
            'When I spotted tech debt, I paired with my teammate to walk through the bottlenecks and refactor it together.',
          bossReplyEn:
            'Ooh, solo weekend rewrites without bringing teammates along can really hurt trust in a Kiwi squad. Still, let’s check your salary expectation and notice period for completeness.',
          bossReplyZh:
            '呃，不跟队友商量就周末自己全盘重写，在新西兰团队里会很伤信任。不过我们还是确认一下你的薪资预期和可入职时间吧。',
        },
      ],
    },
    {
      stageIndex: 2,
      stageLabel: '谈薪、KiwiSaver 与入职周期 · Offer & Logistics',
      bossPromptEn: 'What salary range are you targeting, and when could you start?',
      bossPromptZh: '你的目标薪资区间与入职时间？',
      options: [
        {
          id: 't2-great',
          text: {
            zh: '“参考新西兰本地市场和岗位职责，我期望在 NZ$115k–$125k + 3.5% KiwiSaver 区间，同时很看重团队成长空间。目前有 4 周通知期，2 位推荐人随时可配合背调。很期待进一步面试！”',
            en: 'Based on the NZ market and this scope, I’m targeting around $115k–$125k plus 3.5% KiwiSaver, though total fit matters most. I have a 4-week notice period and two referees ready when needed. Keen as to chat further!',
          },
          quality: 'great',
          scoreDelta: { professional: 25, kiwiNatural: 30, cultureSafe: 25 },
          coachFeedbackZh:
            '完美收官！给出合理区间、主动确认 +3.5% KiwiSaver 结构、提前准备好 Reference Check，还自然用了 "Keen as"，直接拿下好感！',
          bossReplyEn:
            'Sweet as! That sits comfortably in our band, and great to hear your referees are lined up. Let’s book a 45-min technical & team kōrero this Thursday—I’ve sent a formal Interview Invite & Provisional Offer Benchmark card below!',
          bossReplyZh:
            '太稳了！完全在我们的预算范围内，推荐人也准备妥当。我们约本周四来场 45 分钟技术+团队交流——已为你发出「面试邀请 & 模拟 Offer 体检卡」！',
        },
        {
          id: 't2-ok',
          text: {
            zh: '“薪资你们看着给就行，我随时可以明天来上班。”',
            en: 'Any salary is fine, and I can start tomorrow.',
          },
          quality: 'ok',
          scoreDelta: { professional: 10, kiwiNatural: 10, cultureSafe: 15 },
          coachFeedbackZh:
            '太低姿态反而会让雇主怀疑你对市场行情不了解或底气不足。提前调研 SEEK / Hays 薪资指南并自信给出区间更专业！',
          betterPhraseEn:
            'I’m aiming for the $110k–$120k + KiwiSaver mark based on market rates, and I’m available to start within two weeks.',
          bossReplyEn:
            'Good to know you’re available quickly! Always feel free to share your true market range too. Let’s set up a first-round chat next week.',
          bossReplyZh:
            '很高兴你能很快到岗！以后谈薪也完全可以自信报出你的市场区间。那我们先约下周一轮沟通吧。',
        },
      ],
    },
  ],

  'script-trades': [
    {
      stageIndex: 0,
      stageLabel: '工地经理破冰 · Trades Intro',
      bossPromptEn:
        'G’day mate! Seen your message on the sparky/carpenter role. Straight up—do you hold NZ rego/quals or overseas experience, and have you got a clean driver licence & Site Safe?',
      bossPromptZh:
        '你好兄弟！看到你联系这个技工岗。咱直奔主题——你有新西兰本地注册证书还是海外经验？有驾照和工地安全证（Site Safe）吗？',
      options: [
        {
          id: 'tr0-great',
          text: {
            zh: '“Kia ora Dave！我有 6 年住宅与商业实操经验，已完成 NZQA 评估并持有 Site Safe 及全驾照（备好基础手工具）。对 2026 新西兰工地安全规范非常重视，简历名片已发！”',
            en: 'Kia ora Dave! I’ve got 6 years hands-on residential & commercial experience, NZQA Level 4 assessed, current Site Safe, clean full licence, and my own hand tools. Big believer in doing things safely and tidy. Sending my CV card through now!',
          },
          quality: 'great',
          scoreDelta: { professional: 25, kiwiNatural: 30, cultureSafe: 25 },
          coachFeedbackZh:
            '太地道了！技工老板最看重 4 样东西：实操经验、资质/持证路径、驾照+工具、工地安全意识（H&S），一句全中靶心！',
          bossReplyEn:
            'Choice! Sounds like you know your way around a site. Quick one on Health & Safety—if a subbie skips harness checks to finish early on Friday, what do you do?',
          bossReplyZh:
            '赞！听起来你是懂工地的行家。考你个安全问题——如果周五下午有分包商为了早下班不系安全带，你会怎么做？',
        },
        {
          id: 'tr0-pitfall',
          text: {
            zh: '“放心老板，我在国内盖过十几年楼，不用看图纸闭眼干，安全检查走个过场就行！”',
            en: 'Don’t worry boss, I built towers for 10 years overseas—no need to check plans, and safety paperwork is just a formality!',
          },
          quality: 'pitfall',
          scoreDelta: { professional: 4, kiwiNatural: 2, cultureSafe: -15 },
          coachFeedbackZh:
            '致命红线！新西兰 WorkSafe 执法极严，工地 Health & Safety 是绝对高压线，说“安全走过场”会瞬间被拉黑！',
          betterPhraseEn:
            'I have 10 years on-site experience overseas and I’m committed to following NZ Building Code and WorkSafe procedures to the letter.',
          bossReplyEn:
            'Whoa, hold up mate—WorkSafe NZ doesn’t mess around. Health & Safety is non-negotiable on our sites. Still, let’s see how you’d handle a subbie cutting safety corners on a Friday.',
          bossReplyZh:
            '停停停兄弟——新西兰 WorkSafe 可不是开玩笑的，工地安全绝对零容忍。说说看，如果有人周五为了早下班省略安全步骤，你怎么处理？',
        },
      ],
    },
    {
      stageIndex: 1,
      stageLabel: '安全红线与团队靠谱度 · Health & Safety',
      bossPromptEn: 'How do you handle a safety shortcut on site, and are you good with 90-day trial terms?',
      bossPromptZh: '遇到工地安全违规怎么处理？另外我们合同里有 90 天试用期条款，你了解吗？',
      options: [
        {
          id: 'tr1-great',
          text: {
            zh: '“绝不妥协！我会友善但坚定地叫停并按 H&S 流程纠正，确保大家平平安安回家。90 天试用期没问题——只要正式开工前双方书面签好 IEA 合同即可！”',
            en: 'Safety first, no shortcuts—I’d politely stop work and get the harness sorted so everyone gets home safe. Happy with a 90-day trial too, as long as we review and sign the IEA before my first day on site!',
          },
          quality: 'great',
          scoreDelta: { professional: 30, kiwiNatural: 25, cultureSafe: 25 },
          coachFeedbackZh:
            '高情商又懂法！既守住了工地安全底线，又顺带专业提醒“90 天试用期须开工前书面签署”，让老板对你刮目相看。',
          bossReplyEn:
            'Spot on mate—knowing your stuff on both H&S and NZ employment agreements is a huge green flag. Come by the yard Monday morning for a site walk and coffee, I’ll flick through our interview & offer benchmark!',
          bossReplyZh:
            '说得太到位了！既懂安全又懂新西兰雇佣法，大写的靠谱！周一早上来工地转转顺便喝杯咖啡，已发你面试邀约与模拟 Offer 体检卡！',
        },
        {
          id: 'tr1-ok',
          text: {
            zh: '“我会提醒他注意安全，试用期我都可以接受，可以先来试干两天不给钱看看手艺。”',
            en: 'I’ll remind him to be safe. I can also come work two unpaid trial days to prove my skills.',
          },
          quality: 'ok',
          scoreDelta: { professional: 10, kiwiNatural: 10, cultureSafe: 5 },
          coachFeedbackZh:
            '注意维权红线！在新西兰“无薪试工两天”大概率违法（合法工作必须按不低于 NZ$23.95/hr 付薪，且 90 天试用期必须带薪+事前签约）！',
          betterPhraseEn:
            'I’m happy to do a short supervised practical skills check or start on a properly signed paid 90-day trial.',
          bossReplyEn:
            'Appreciate the keenness, though we always pay legally from hour one—no unpaid work days here! Let’s line up a proper chat next week.',
          bossReplyZh:
            '感谢你的积极，但咱们正规雇主从第一小时起都依法发薪，不搞无薪试工！咱们约下周正规聊聊吧。',
        },
      ],
    },
  ],

  'script-healthcare': [
    {
      stageIndex: 0,
      stageLabel: '注册资质与人文沟通 · Registration & Care',
      bossPromptEn:
        'Kia ora! Lovely to hear from you. Could you confirm your NZ registration status (NZNC / Teaching Council) and share what draws you to working with Aotearoa communities?',
      bossPromptZh:
        '你好！很高兴收到你的联系。能先确认下你的新西兰职业注册状态（护士局/教师局），以及是什么吸引你加入新西兰社区照护/教育工作吗？',
      options: [
        {
          id: 'hc0-great',
          text: {
            zh: '“Kia ora！我已取得（或即将完成）新西兰执业注册证与急救证书。我特别认同以 whānau（家庭）为核心的双文化照护理念，也擅长跨文化沟通与耐心倾听。”',
            en: 'Kia ora! I hold my current NZ practising certificate and First Aid, with full work rights / AEWV eligibility. I’m deeply drawn to whānau-centred, culturally safe practice under Te Tiriti principles and bring calm cross-cultural communication.',
          },
          quality: 'great',
          scoreDelta: { professional: 28, kiwiNatural: 26, cultureSafe: 28 },
          coachFeedbackZh:
            '极高水准！医疗与教育行业非常看重对 Te Tiriti o Waitangi（怀唐伊条约）和 whānau（家庭整体）理念的尊重，表达温暖专业。',
          bossReplyEn:
            'Tino pai—that aligns so closely with our values! Can you give a brief example of supporting a patient/family from a different cultural background?',
          bossReplyZh:
            '太棒了——这和我们的核心价值观高度契合！能简短举一个你支持不同文化背景患者/家庭的例子吗？',
        },
        {
          id: 'hc0-ok',
          text: {
            zh: '“我还在国内准备材料，听说这个职业在绿名单能直接拿绿卡，所以想赶紧找个工作。”',
            en: 'I’m still preparing papers overseas. I heard this job is on the Green List for quick PR, so I want to get hired fast.',
          },
          quality: 'ok',
          scoreDelta: { professional: 8, kiwiNatural: 10, cultureSafe: 8 },
          coachFeedbackZh:
            '诚实是好事，但把“为了拿绿卡”放在第一位会让医疗/幼教主管担心你的职业热情与稳定性。建议把对工作的热爱与长期扎根意愿放在前面！',
          betterPhraseEn:
            'I’m progressing my NZ registration now and hoping to build a long-term career supporting families in Aotearoa.',
          bossReplyEn:
            'We totally understand residency is part of relocating! Just make sure registration steps are underway, and we always look for genuine passion for the people we serve.',
          bossReplyZh:
            '我们完全理解身份规划是搬家的一部分！记得把注册流程推进好，同时我们最看重对服务对象的真心热爱。',
        },
      ],
    },
    {
      stageIndex: 1,
      stageLabel: '双文化照护与入职对接 · Cultural Safety',
      bossPromptEn: 'How do you build trust across cultural & language barriers, and are your referees ready?',
      bossPromptZh: '你如何跨越文化与语言障碍建立信任？推荐人是否已准备好？',
      options: [
        {
          id: 'hc1-great',
          text: {
            zh: '“我习惯先放慢语速、确认对方舒适的沟通方式（必要时借助专业翻译而非仅靠家属），并尊重不同家庭的饮食与习俗。两位前临床/园区主管已同意担任推荐人。”',
            en: 'I take time to check how each whānau prefers to communicate, use qualified interpreters when needed, and respect cultural customs around care and kai. Two previous clinical/centre managers are happy to act as referees.',
          },
          quality: 'great',
          scoreDelta: { professional: 30, kiwiNatural: 24, cultureSafe: 28 },
          coachFeedbackZh:
            '满分！提到使用专业口译员（Qualified interpreter）与尊重习俗，这是新西兰医疗/教育面试的高分金句！',
          bossReplyEn:
            'Ka pai! You’d be a wonderful addition to our team. I’d love to book a panel kōrero next week—sending your Interview Invite & Offer Benchmark card now!',
          bossReplyZh:
            '干得太棒了！你一定会成为团队极佳的一员。我们约下周正式面试，已发你「面试邀请 & 模拟 Offer 体检卡」！',
        },
        {
          id: 'hc1-ok',
          text: {
            zh: '“我会用翻译软件沟通，态度好就行。”',
            en: 'I’ll just use a translation app and be polite.',
          },
          quality: 'ok',
          scoreDelta: { professional: 12, kiwiNatural: 12, cultureSafe: 12 },
          coachFeedbackZh:
            '在医疗/教育敏感场景中，不能仅靠机器翻译，提及医院/机构专业口译资源会更专业安全。',
          bossReplyEn:
            'Good warmth—and once onboard we’ll train you on our official interpreter services too. Let’s arrange an initial call!',
          bossReplyZh:
            '态度很温暖——入职后我们也会培训官方口译资源的使用。我们先约个初步电话聊吧！',
        },
      ],
    },
  ],

  'script-corporate': [
    {
      stageIndex: 0,
      stageLabel: '猎头/合伙人初筛 · Corporate Screening',
      bossPromptEn:
        'Kia ora! Thanks for connecting. This role sits closely with NZ stakeholders—how do your past projects translate into our local market, and note our salary is Total Rem or +KiwiSaver?',
      bossPromptZh:
        '你好！感谢联系。这个岗位需要高频对接本地业务方——你过往项目经验如何迁移到新西兰市场？另顺便确认你关注总包结构吗？',
      options: [
        {
          id: 'cp0-great',
          text: {
            zh: '“Kia ora！虽然我刚来新西兰不久，但过去 4 年用 SQL/Xero/数据看板跨部门推进项目并降本增效 20% 的可迁移能力完全通用；另外我已注意到薪资结构（Total Rem vs +3.5% KiwiSaver），简历名片已发！”',
            en: 'Kia ora! While I’m newer to the NZ market, my 4 years running stakeholder discovery, analytics/Xero workflows, and delivering 20% efficiency gains are directly transferable. Also noted the KiwiSaver package structure—sending my CV card across now!',
          },
          quality: 'great',
          scoreDelta: { professional: 28, kiwiNatural: 26, cultureSafe: 26 },
          coachFeedbackZh:
            '破局“无本地经验”的标准模板！不回避新移民身份，直接把海外成就翻译成新西兰雇主听得懂的可迁移技能（Transferable skills）与量化产出。',
          bossReplyEn:
            'Super sharp answer—love how clearly you framed your transferable skills! Quick check: what’s a complex stakeholder disagreement you helped resolve?',
          bossReplyZh:
            '非常敏锐的回答——把可迁移技能讲得很透彻！再问一题：你曾如何化解一次棘手的跨部门利益分歧？',
        },
        {
          id: 'cp0-pitfall',
          text: {
            zh: '“抱歉我没在新西兰干过活，但你先招我进来我可以降薪一半打杂学习。”',
            en: 'Sorry I have no NZ experience, I can take half the salary just to do admin and learn.',
          },
          quality: 'pitfall',
          scoreDelta: { professional: 5, kiwiNatural: 5, cultureSafe: 4 },
          coachFeedbackZh:
            '千万别过度自我贬低！主动要求“降薪一半打杂”反而会让专业雇主质疑你的真实胜任力，且企业也绝不会合法低于市场与岗位层级压薪。',
          betterPhraseEn:
            'Although this would be my first NZ role, my overseas analytical & stakeholder skills map closely to your team’s priorities.',
          bossReplyEn:
            'Never sell yourself short! We pay fairly for the role’s value—focus on the real strengths you bring. Tell me about a tricky stakeholder challenge you solved.',
          bossReplyZh:
            '千万别看轻自己！我们按岗位价值公平定薪——自信讲你的优势。分享一个你解决跨部门分歧的案例吧。',
        },
      ],
    },
    {
      stageIndex: 1,
      stageLabel: '跨部门沟通与薪资谈判 · Stakeholder & Offer',
      bossPromptEn: 'Share your stakeholder win and your ideal salary band.',
      bossPromptZh: '请分享你的跨部门协作案例及目标薪资区间。',
      options: [
        {
          id: 'cp1-great',
          text: {
            zh: '“当财务和运营对指标口径不一致时，我先分别一对一倾听双方痛点，再共创统一 KPI 看板，两周内达成共识。薪资期望参考岗位中位数，并确认是否含 3.5% KiwiSaver。”',
            en: 'When Finance and Ops clashed over KPI definitions, I held brief 1-on-1 listening sessions first, then co-designed one shared dashboard—reaching sign-off in two weeks. On salary, I’m aiming around the mid-to-upper band, clarifying whether 3.5% KiwiSaver sits on top.',
          },
          quality: 'great',
          scoreDelta: { professional: 28, kiwiNatural: 26, cultureSafe: 26 },
          coachFeedbackZh:
            '极度成熟专业！在新西兰企业里，“先倾听共创（Co-design）”比强推方案更受青睐，谈薪时主动核清 Total Rem vs On Top 更是内行表现。',
          bossReplyEn:
            'Brilliant—that collaborative approach will fit right in! I’d love to put you forward to the hiring panel next week. Interview Invite & Offer Benchmark card sent!',
          bossReplyZh:
            '太赞了——这种共创协作方式极契合我们团队！我这就安排下周复试，已发你「面试邀请 & 模拟 Offer 体检卡」！',
        },
        {
          id: 'cp1-ok',
          text: {
            zh: '“我直接把报告发给最高领导，让领导命令两个部门统一标准。薪资按你们最高的给就行。”',
            en: 'I escalated straight to the CEO to force both departments to agree. I want the top of your salary band.',
          },
          quality: 'ok',
          scoreDelta: { professional: 10, kiwiNatural: 8, cultureSafe: 6 },
          coachFeedbackZh:
            '新西兰组织扁平且重信任，动不动越级向 CEO 告状会破坏跨部门关系，通常建议先平级沟通化解再适当升级。',
          bossReplyEn:
            'In NZ we usually try horizontal alignment before escalating to executives, though good to see you are decisive. Let’s have a quick screening call next week.',
          bossReplyZh:
            '在新西兰我们通常先平级协商再考虑升级汇报，不过看得出你很果断。我们下周先约个初筛电话。',
        },
      ],
    },
  ],

  'script-hospitality': [
    {
      stageIndex: 0,
      stageLabel: '热情破冰与服务意识 · Warmth & First NZ Role',
      bossPromptEn:
        'Kia ora! Awesome to hear from you. We care way more about attitude and genuine warmth than fancy titles—tell me about your work rights and a time you turned an unhappy customer around!',
      bossPromptZh:
        '你好！超开心收到你的消息。相比头衔，我们更看重靠谱的态度和真诚的笑容——说说你的工作签证情况，以及一次把不满客户哄开心的经历吧！',
      options: [
        {
          id: 'hp0-great',
          text: {
            zh: '“Kia ora！我持有合法全职工作签证，周末节假日也能灵活排班。上次高峰期客人等餐超时不满，我第一时间真诚致歉并主动送上小点心和精准预计时间，最后客人还留下五星好评！简历名片已发！”',
            en: 'Kia ora! I hold full NZ work rights and I’m flexible across weekends and rosters. Once during a peak rush when an order was delayed, I listened calmly, apologised genuinely, offered a complimentary coffee with an honest ETA, and they left a 5-star review! Flicking my CV card over now.',
          },
          quality: 'great',
          scoreDelta: { professional: 28, kiwiNatural: 28, cultureSafe: 28 },
          coachFeedbackZh:
            '满分破冰！新西兰服务/运营类岗位最爱“冷静倾听 + 真诚致歉 + 主动补救 + 稳定排班”，而且毫无生硬腔！',
          bossReplyEn:
            'Love that energy! One quick thing—are you comfortable picking up Kiwi slang on the phone/floor (like flat white, trim milk, sweet as), and when could you pop in for a quick coffee chat?',
          bossReplyZh:
            '太喜欢这种正向能量了！再问一句——现场或电话里听到 Kiwi 口音和咖啡点单俚语（如 trim milk, sweet as）适应吗？什么时候方便来喝杯咖啡聊聊？',
        },
        {
          id: 'hp0-ok',
          text: {
            zh: '“我以前在国内做过经理，现在刚来先找个过渡工作，等找到更好的再跳槽。”',
            en: 'I was a manager back home and just need a temporary survival job until I find something better.',
          },
          quality: 'ok',
          scoreDelta: { professional: 8, kiwiNatural: 10, cultureSafe: 6 },
          coachFeedbackZh:
            '大忌！哪怕心里把它当第一份跳板，也千万别直白说“我干两天就跳槽”——雇主花成本培训你，最怕招来不稳定的人。强调“我会全力投入并做好当下这份工作”更明智！',
          betterPhraseEn:
            'I’m excited to bring my organisational skills to your team, learn NZ operations thoroughly, and contribute reliably.',
          bossReplyEn:
            'Totally fair to have big career goals, though we do invest heaps in training so we look for folks committed for at least 6–12 months. Still keen for a quick chat?',
          bossReplyZh:
            '有长远职业目标很正常，但我们培训投入很大，还是希望至少能稳定共事 6–12 个月。还有兴趣聊聊吗？',
        },
      ],
    },
    {
      stageIndex: 1,
      stageLabel: '排班、试聊与拿到邀请 · Catch-up Invite',
      bossPromptEn: 'When works for a casual 20-minute coffee catch-up with the team?',
      bossPromptZh: '什么时候方便来和团队喝杯 20 分钟咖啡聊聊？',
      options: [
        {
          id: 'hp1-great',
          text: {
            zh: '“超期待！我平时已经在练 Kiwi 口音和毛利语问候了。这周三或周四上午 10 点都可以，我会提前 5 分钟到，到时见！Ngā mihi!”',
            en: 'Keen as! I’ve been practising Kiwi slang and everyday Te Reo already. Wednesday or Thursday at 10am both work great—I’ll be there 5 minutes early. Ngā mihi!',
          },
          quality: 'great',
          scoreDelta: { professional: 28, kiwiNatural: 30, cultureSafe: 26 },
          coachFeedbackZh:
            '无懈可击！守时（提早 5 分钟）、积极学习本地文化、结尾用 Ngā mihi，直接拿到面试邀请！',
          bossReplyEn:
            'Sweet as, locked in for Wednesday 10am—coffee’s on us! Sent your Interview Invite & Offer Benchmark card below. See you then!',
          bossReplyZh:
            '搞定，周三上午 10 点见——咖啡我请！已发送「面试邀请 & 模拟 Offer 体检卡」，到时候见！',
        },
        {
          id: 'hp1-ok',
          text: {
            zh: '“都可以，你发我地址吧。”',
            en: 'Anytime is fine, send the address.',
          },
          quality: 'ok',
          scoreDelta: { professional: 12, kiwiNatural: 10, cultureSafe: 14 },
          coachFeedbackZh:
            '可以多一点主动和温度！给出 2 个具体时段 + 简短感谢，在注重人情味的新西兰会加分很多。',
          bossReplyEn:
            'No worries—let’s aim for Thursday 10am at our front desk. Sent your invite card!',
          bossReplyZh:
            '没问题——那咱们定周四上午 10 点前台见，邀请卡已发你！',
        },
      ],
    },
  ],
};

/**
 * Offline Kiwi Job Coach analyzer for free-text custom replies in Boss Chat
 */
export function evaluateCustomReply(
  text: string,
  job: JobPosting
): {
  quality: 'great' | 'ok' | 'pitfall';
  scoreDelta: { professional: number; kiwiNatural: number; cultureSafe: number };
  coachFeedbackZh: string;
  betterPhraseEn?: string;
  bossReplyEn: string;
  bossReplyZh: string;
} {
  const lower = text.toLowerCase();

  // Check NZ cultural/legal red flags
  const hasPrivacyRedFlag =
    /(married|kids|children|years old|age |single|pregnant|已婚|未婚|年龄|岁|有娃|照片|photo)/.test(
      lower
    );
  const hasOverworkRedFlag =
    /(996|overtime|work until midnight|unpaid trial|加班|无薪|不要钱)/.test(lower);
  const hasBoastRedFlag = /(best in the world|number one|smarter than|最强|第一|别人太差)/.test(
    lower
  );

  const hasKiwiGreeting = /(kia ora|g'day|sweet as|chur|keen as|ngā mihi|nga mihi|cheers|no worries|kōrero|whānau)/.test(
    lower
  );
  const hasProfessionalSignal =
    /(visa|work rights|aewv|pr|resident|experience|transferable|star|result|team|kiwisaver|referee|notice|safety|注册|签证|经验|团队|安全|推荐人)/.test(
      lower
    );

  if (hasPrivacyRedFlag || hasOverworkRedFlag || hasBoastRedFlag) {
    const reasons: string[] = [];
    if (hasPrivacyRedFlag) reasons.push('提到了年龄/婚育/照片等新西兰受隐私法保护的敏感信息');
    if (hasOverworkRedFlag) reasons.push('提到无薪试工或疯狂加班（与新西兰合法付薪及 Work-Life Balance 文化冲突）');
    if (hasBoastRedFlag) reasons.push('措辞略显过度自吹，容易触碰 Tall Poppy Syndrome');

    return {
      quality: 'pitfall',
      scoreDelta: { professional: 5, kiwiNatural: 4, cultureSafe: -10 },
      coachFeedbackZh: `⚠️ 教练提醒：你的自由输入触发了新西兰职场避坑点——${reasons.join('；')}。建议聚焦可迁移能力、团队协作与合法工作权利！`,
      betterPhraseEn: `Kia ora ${job.hiringManager.name.split(' ')[0]}! I’m really keen on the ${job.title} role—I hold valid NZ work rights and bring strong collaborative experience. Happy to share concrete examples!`,
      bossReplyEn:
        'Appreciate your enthusiasm! Just a friendly local tip—in NZ we focus strictly on skills, teamwork, and work rights (no need for age/family details or unpaid overtime). Let’s keep chatting about your fit!',
      bossReplyZh:
        '感谢你的热情！顺便分享个本地小贴士——新西兰招聘严格聚焦技能、团队契合与签证权利（不需要提年龄婚育，也不鼓励无薪加班）。咱们继续聊聊岗位匹配吧！',
    };
  }

  if ((hasKiwiGreeting && hasProfessionalSignal) || text.trim().length >= 35) {
    return {
      quality: 'great',
      scoreDelta: {
        professional: 24,
        kiwiNatural: hasKiwiGreeting ? 28 : 18,
        cultureSafe: 24,
      },
      coachFeedbackZh: hasKiwiGreeting
        ? '👏 自由发挥太赞了！自然融入了 Kiwi 地道用语，同时信息清晰专业，老板好感度直线上升！'
        : '👍 表达清晰专业、礼貌得体！小建议：下次可以自然加上一句 "Kia ora" 或结尾 "Ngā mihi / Cheers"，Kiwi 地道度直接拉满！',
      betterPhraseEn: hasKiwiGreeting
        ? undefined
        : `Kia ora ${job.hiringManager.name.split(' ')[0]}, thanks for the chat—keen as to discuss how my skills can support the team!`,
      bossReplyEn:
        'Sweet as, thanks for the thoughtful response! Sounds like you’d blend in really well with the crew—let’s move to the next step.',
      bossReplyZh:
        '太稳了，回复得非常清晰周到！感觉你会很契合我们团队的氛围——我们推进到下一步吧！',
    };
  }

  return {
    quality: 'ok',
    scoreDelta: { professional: 14, kiwiNatural: 12, cultureSafe: 15 },
    coachFeedbackZh:
      '💬 回复简洁友好，但信息量偏短。建议在新西兰直聊中多补充 1–2 句具体背景（如签证状态、核心技能或具体数据成果），更容易拿到面试邀约！',
    betterPhraseEn: `Kia ora! Thanks for reaching out—I have relevant experience in ${job.industry}, valid NZ work rights, and I’d love to share my CV card.`,
    bossReplyEn:
      'Cheers for getting back to me! Could you share a bit more detail on your relevant experience and how you’d approach this role?',
    bossReplyZh: '谢谢回复！方便再多展开一点你的相关经验和工作方式吗？',
  };
}
