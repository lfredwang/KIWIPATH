import type { Lesson } from '../../types';

/**
 * Module 1: 落地 1–30 天：生存基建与官方系统 (Lessons #1 – #6)
 * Verified against NZ official .govt.nz sources as of Nov 2026.
 */
export const MOD1_LESSONS: Lesson[] = [
  {
    id: 'l-01',
    number: 1,
    moduleId: 'mod-1',
    title: {
      zh: '入境第一关：电子入境卡（NZTD）与生物安全申报红线',
      en: 'Border Arrival: NZTD Digital Declaration & Strict Biosecurity Rules',
    },
    summary: {
      zh: '起飞前 24 小时免费填报 NZTD，彻底搞懂“忘报也罚 NZ$400”的严格责任制，避开食品、药品与户外鞋靴雷区。',
      en: 'Submit your free NZTD up to 24 hours before departure and master NZ’s strict-liability biosecurity rules to avoid instant $400 fines.',
    },
    targetLevel: 1,
    durationMin: 8,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'MPI / NZ Customs / travellerdeclaration.govt.nz',
    terms: [
      { term: 'NZTD', phonetic: '/ˌen zed tiː ˈdiː/', zh: '新西兰电子旅客申报单（免费，起飞前 24 小时提交）' },
      { term: 'Biosecurity', phonetic: '/ˌbaɪəʊsɪˈkjʊərəti/', zh: '生物安全检疫（MPI 农林初产部主管）' },
      { term: 'Strict Liability', phonetic: '/strɪkt ˌlaɪəˈbɪləti/', zh: '严格责任制（不问是否故意，忘报同样当场罚 $400）' },
      { term: 'Amnesty Bin', phonetic: '/ˈæmnəsti bɪn/', zh: '入境弃置箱（过检前最后一次免费扔掉违禁品的机会）' },
      { term: 'MPI', phonetic: '/ˌem piː ˈaɪ/', zh: '新西兰初级产业部（Ministry for Primary Industries）' },
      { term: 'Infringement Fee', phonetic: '/ɪnˈfrɪndʒmənt fiː/', zh: '现场即时罚款（未申报动植物/食品为 NZ$400）' },
    ],
    cards: [
      {
        id: 'l01-c1',
        type: 'concept',
        title: {
          zh: '为什么新西兰海关查得全球最严？理解「严格责任制」',
          en: 'Why NZ Biosecurity Is So Strict: Strict Liability Explained',
        },
        body: {
          zh: '新西兰四面环海，农牧业与独特原生生态是国家命脉。因此新西兰海关与初级产业部（MPI）对生物安全采取严格责任制（Strict Liability）：无论你是不是“忘了”“飞机上发的水果随手揣兜里”“长辈帮忙塞的”，只要携带未申报的风险物品，即刻面临 NZ$400 现场罚款；若被判定为故意藏匿走私，最高可被起诉罚款 NZ$100,000 甚至 5 年监禁。',
          en: 'New Zealand’s agriculture and unique wildlife depend on keeping pests out. Biosecurity breaches are strict-liability offences: intent does not matter. Even forgetting an airline apple in your backpack triggers an instant NZ$400 infringement fee, while deliberate smuggling carries penalties up to NZ$100,000 and 5 years in prison.',
          hintZh: '黄金法则：申报完全免费！只要有一丝不确定，一律勾选「Yes / 申报」。',
        },
        keyPoints: [
          { zh: '如实申报后，若物品不允许入境，官员只会当场免费没收或帮你检疫处理，绝不会罚款！', en: 'Declaring is 100% free—if an item is banned, officers simply dispose of it with zero fine.' },
          { zh: '过检前大厅设有大量 Amnesty Bin（弃置箱），下飞机第一时间检查随身包里的水果/三明治。', en: 'Check all pockets and use terminal Amnesty Bins before reaching inspection lanes.' },
        ],
      },
      {
        id: 'l01-c2',
        type: 'checklist',
        title: {
          zh: '手把手提交 NZTD 电子入境卡（起飞前 24 小时）',
          en: 'Step-by-Step: Submitting Your Free NZTD Online',
        },
        body: {
          zh: '所有入境新西兰的旅客（包括新西兰公民和婴儿）都必须填写 NZTD。强烈建议起飞前在线填好，落地直接扫码通关，无需在机舱里翻找笔填纸质卡。',
          en: 'Every traveller—including NZ citizens—must complete an NZTD. Submit it online before flying for a faster airport arrival.',
        },
        keyPoints: [
          { zh: '官网或官方 App：访问 travellerdeclaration.govt.nz 或下载官方「NZTD」App（警惕收费山寨网站，官方完全免费！）', en: 'Use travellerdeclaration.govt.nz or the official NZTD app—never pay third-party sites.' },
          { zh: '提交时间：必须在首班飞往新西兰的航班起飞前 24 小时以内最终提交（可提前建草稿）。', en: 'You can draft early, and submit within 24 hours before your flight to NZ departs.' },
          { zh: '核对护照号、航班号、新西兰首晚住址，并逐项如实勾选食品、药品、户外装备与现金申报。', en: 'Verify passport number, flight number, first-night NZ address, and all declaration questions.' },
          { zh: '提交后会收到确认邮件，电子申报自动绑定在你的护照上，机场海关扫描护照即可调出。', en: 'Your declaration links electronically to your passport—just keep the confirmation email handy.' },
        ],
      },
      {
        id: 'l01-c3',
        type: 'warning',
        title: {
          zh: '华人最易踩雷的 5 大必申报物品清单',
          en: 'Top 5 High-Risk Items New Arrivals Forget to Declare',
        },
        body: {
          zh: '不要用国内“真空包装就行”的经验套用新西兰！以下 5 类物品哪怕密封包装或自用，也必须主动勾选申报：',
          en: 'Factory-sealed packaging does not automatically exempt food or remedies. Always declare these 5 categories:',
        },
        keyPoints: [
          { zh: '① 蜂蜜与所有蜂产品（严禁携带！含蜂蜜润喉糖、蜂胶、含蜂蜜中药丸/枇杷膏）', en: 'Honey & bee products (strictly prohibited—including propolis and herbal syrups containing honey).' },
          { zh: '② 肉蛋奶、干货与零食（牛肉干、肉松、蛋黄月饼、红枣枸杞、香菇木耳、茶叶、火锅底料/调料包）', en: 'Meat, dairy, dried herbs, red dates, mushrooms, tea, spices, and soup bases.' },
          { zh: '③ 木竹草藤与动植物制品（木雕、竹筷、草帽、贝壳、羽毛、未经处理的羊毛/皮制品、植物种子）', en: 'Wood/bamboo/cane crafts, shells, feathers, seeds, and animal hides.' },
          { zh: '④ 穿过的户外装备（徒步鞋、高尔夫球杆、帐篷、鱼竿、自行车——哪怕鞋底只有一点干泥土也须刷净并申报！）', en: 'Used hiking boots, tents, golf clubs, fishing gear, or bikes—scrub spotless and declare.' },
          { zh: '⑤ 药品与大额现金（处方药须保留原包装+英文医生处方/说明书且一般限 3 个月用量；携带等值 NZ$10,000 及以上现金必须申报）', en: 'Prescription meds (>3 months supply or unprescribed; carry English doctor letter & original boxes) and NZ$10,000+ cash.' },
        ],
      },
      {
        id: 'l01-c4',
        type: 'comparison',
        title: {
          zh: '免税额与处方药携带规范（Customs 海关线）',
          en: 'Duty-Free Allowances & Bringing Personal Medicines',
        },
        body: {
          zh: '除了生物安全，还需留意新西兰海关（NZ Customs）的免税限额和药品法规，尤其是含伪麻黄碱（康泰克/白加黑等感冒药）或中成药。',
          en: 'Alongside biosecurity, check NZ Customs allowances and Medsafe rules—especially for cold medicines containing pseudoephedrine or controlled ingredients.',
        },
        keyPoints: [
          { zh: '香烟极严：仅限 50 支香烟或 50 克烟草（超额每条补税极高，约合数百纽币！）。', en: 'Tobacco allowance is strictly 50 cigarettes or 50g of tobacco—excess duties are steep.' },
          { zh: '酒类：年满 17 岁可带 4.5 升葡萄酒/啤酒 + 3 瓶（每瓶≤1.125L）烈酒。', en: 'Alcohol (17+): up to 4.5L wine/beer plus 3 bottles (max 1.125L each) of spirits.' },
          { zh: '个人物品免税额：海外新购物品总值超过 NZ$700 须申报补交 15% GST 与关税；长居移民搬家自用旧物可走 Unaccompanied Personal Effects 豁免通道。', en: 'New overseas goods over NZ$700 attract GST/duty; permanent migrants can claim household effects concessions.' },
          { zh: '药品建议：提前整理一张英文清单（成分名 + 用途），含麻醉/精神类管制药最多带 1 个月用量且必须有英文处方。', en: 'Carry an English medicine list; controlled drugs are capped at 1 month’s supply with a doctor’s letter.' },
        ],
      },
      {
        id: 'l01-c5',
        type: 'dialogue',
        title: {
          zh: '海关检疫官高频英文对话模板（直接照着说）',
          en: 'Real Biosecurity Inspection Dialogue at Auckland Airport',
        },
        body: {
          zh: '走申报通道（Declare Lane）其实经常比无申报通道排队更短，且检疫官非常友好。主动递上准备好的英文清单最省心：',
          en: 'The Declare Lane is often fast and officers appreciate travellers who are organised and honest:',
        },
        dialogueLines: [
          {
            speaker: 'MPI Officer',
            en: 'Kia ora! I see you’ve ticked food, medicine, and outdoor equipment on your NZTD. What do you have with you today?',
            zh: '你好！我看到你在电子入境卡勾选了食品、药品和户外装备，今天具体带了哪些东西？',
          },
          {
            speaker: 'You',
            en: 'Kia ora! I’ve packed everything in this top pouch for easy checking: commercially sealed green tea, two months of prescription blood-pressure meds with my doctor’s letter in English, and a pair of hiking boots that I washed clean before flying.',
            zh: '你好！我都统一放在最上面这个袋子里方便检查：商封绿茶、带英文医生证明的两个月降压药，还有一双起飞前刷洗干净的徒步鞋。',
            subtextZh: '把所有要申报的东西集中放在行李箱最表层，打开就能一眼查完，检疫官超喜欢！',
          },
          {
            speaker: 'MPI Officer',
            en: 'Legend, thank you for packing them together and being upfront! Boots look spotless, tea and meds are all clear—welcome to New Zealand!',
            zh: '太赞了，感谢你集中打包又如实申报！鞋底非常干净，茶叶和药品都没问题——欢迎来到新西兰！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l01-q1',
        prompt: {
          zh: '长途航班上空乘发了一个新鲜苹果，你随手塞进双肩包忘了吃，落地走无申报通道被 X 光机查出。会面临什么后果？',
          en: 'You forgot an airline apple in your backpack and walked through the Nothing to Declare lane. What happens?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '解释说是飞机上发的、不是故意的，口头警告后扔掉即可', en: 'Explain it was an accident from the flight and get a warning' },
            isCorrect: false,
            feedback: { zh: '大错特错！新西兰生物安全实行严格责任制（Strict Liability），不问是否故意，未申报照样当场罚 NZ$400！', en: 'Incorrect—NZ biosecurity is strict liability. Forgetting still triggers the NZ$400 instant fine.' },
          },
          {
            id: 'b',
            text: { zh: '因违反严格责任制，当场被开具 NZ$400 罚款单', en: 'Receive an instant NZ$400 infringement fine under strict liability' },
            isCorrect: true,
            feedback: { zh: '完全正确！下飞机前务必检查外套兜和背包，看到水果立刻扔进过检前的 Amnesty Bin 或主动申报。', en: 'Correct! Always check pockets before arrival and use Amnesty Bins or declare.' },
          },
        ],
      },
      {
        id: 'l01-q2',
        prompt: {
          zh: '你带了两盒商业密封包装的中药润喉糖（配料表含蜂蜜）和一双穿过的登山鞋。最安全正确的做法是？',
          en: 'You packed factory-sealed lozenges containing honey and worn hiking boots. What is the safest move?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '因为润喉糖是密封的、鞋也擦过了，所以都不必申报', en: 'Do not declare since the lozenges are sealed and boots were wiped' },
            isCorrect: false,
            feedback: { zh: '极高风险！所有含蜂蜜产品均属严格禁品，穿过的所有户外鞋靴都必须申报接受检验。', en: 'High risk! Honey products are banned even when sealed, and used outdoor footwear must always be declared.' },
          },
          {
            id: 'b',
            text: { zh: '起飞前彻底刷净登山鞋底，在 NZTD 如实勾选食品与户外装备申报，并把物品放在行李最上层供官员免费检查', en: 'Scrub the boots clean, declare both on NZTD, and pack them on top for free inspection' },
            isCorrect: true,
            feedback: { zh: '满分操作！申报免费，即使含蜂蜜糖被当场没收也绝不会罚款，干净的登山鞋通常会直接放行。', en: 'Spot on! Declaring is free—even if honey items are disposed of, you avoid any fine.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '出发前 24 小时：下载官方 NZTD App（travellerdeclaration.govt.nz）免费填报；所有药品备英文证明，食品和户外装备集中放行李箱最上层。',
      en: '24h before flying: submit free NZTD via travellerdeclaration.govt.nz and pack all declarable items together at the top of your suitcase.',
    },
  },

  {
    id: 'l-02',
    number: 2,
    moduleId: 'mod-1',
    title: {
      zh: '数字身份基建：RealMe、IRD 税号与本地手机号全流程',
      en: 'Digital Foundations: RealMe, IRD Number & NZ Mobile Plans',
    },
    summary: {
      zh: '搞懂 RealMe 普通号 vs 认证身份的区别，免跑 AA 在线直申 IRD 税号（没银行卡也能先办！），以及三大运营商与平价虚拟运营商对比。',
      en: 'Master RealMe vs RealMe Verified, apply online for your IRD number via INZ verification (even before getting a bank account), and pick a cost-effective NZ SIM.',
    },
    targetLevel: 1,
    durationMin: 8,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Inland Revenue (ird.govt.nz) / RealMe / CAB',
    terms: [
      { term: 'IRD Number', phonetic: '/ˌaɪ ɑː ˈdiː/', zh: '税务局 8–9 位税号（工作、领薪、买房、开银行利息账户必备）' },
      { term: 'myIR', phonetic: '/maɪ ˌaɪ ˈɑː/', zh: '新西兰税务局个人在线服务后台' },
      { term: 'RealMe Login', phonetic: '/ˈrɪəl miː/', zh: '新西兰政府统一登录账号（通登移民局、税务局、Studylink 等）' },
      { term: 'RealMe Verified', phonetic: '/ˈverɪfaɪd/', zh: 'RealMe 高级实名认证身份（部分银行远程开户认可）' },
      { term: 'TIN', phonetic: '/tiː aɪ en/', zh: '原税务居住国税号（中国大陆通常填 18 位身份证号）' },
      { term: 'Prepay / Monthly', phonetic: '/ˈpriːpeɪ/', zh: '预付费卡（无合约灵活）vs 后付费月套餐（需本地信用或押金）' },
    ],
    cards: [
      {
        id: 'l02-c1',
        type: 'checklist',
        title: {
          zh: '第一步：落地当天先搞定新西兰本地手机号（含运营商省钱攻略）',
          en: 'Step 1: Get an NZ Mobile Number on Day 1 (Carrier Guide)',
        },
        body: {
          zh: '办银行、办 IRD、找房看房、求职接 HR 电话全都需要 021 / 022 / 027 开头的新西兰本地手机号。新西兰三大实体基站运营商为 Spark、One NZ（原 Vodafone）、2degrees，机场到达大厅即可买 SIM 卡或开通 eSIM。',
          en: 'Almost every NZ setup step requires a local 02x number. Three networks own physical towers: Spark, One NZ (formerly Vodafone), and 2degrees—plus cheaper MVNO brands using the same towers.',
        },
        keyPoints: [
          { zh: '省钱秘诀（MVNO 虚拟运营商）：Skinny（用 Spark 基站，信号覆盖农村最好）、Kogan Mobile（常有大促年卡，用 One NZ 基站）、Mighty Mobile / Rocket Mobile（主打不限流套餐）。', en: 'Budget MVNOs use identical towers: Skinny (Spark), Kogan Mobile (One NZ), Rocket/Mighty Mobile.' },
          { zh: '新移民建议：前 1–2 个月先办 Prepay 预付费卡（约 NZ$19–$36/28天，无限 NZ/AU 通话短信 + 流量），等稳定后再对比年卡或宽带捆绑优惠。', en: 'Start with a flexible Prepay plan (~NZ$19–$36/28 days) before locking into annual or broadband bundles.' },
          { zh: '携号转网（Number Porting）完全免费且几小时生效，不用担心先买贵的以后换不了号！', en: 'Keeping your NZ number when switching providers is free and usually takes only a few hours.' },
        ],
      },
      {
        id: 'l02-c2',
        type: 'concept',
        title: {
          zh: '第二步：分清 RealMe Login 与 RealMe Verified Identity',
          en: 'Step 2: RealMe Login vs RealMe Verified Identity',
        },
        body: {
          zh: 'RealMe 是新西兰政府的数字通行证系统，但很多新移民会混淆它的两个层级：',
          en: 'RealMe is NZ’s government login ecosystem, with two distinct tiers:',
        },
        keyPoints: [
          { zh: '① RealMe Login（基础账号，免费）：类似统一用户名密码 + 二步验证，用于登录移民局（INZ）、税务局（myIR）、选举注册、Studylink 等绝大多数政府网站。', en: 'RealMe Login (free): single sign-on for INZ, myIR, and govt portals.' },
          { zh: '② RealMe Verified Identity（实名认证身份）：需提交护照并去指定邮局（NZ Post）拍照认证（或在线核验），效力等同官方身份公证，可用于部分银行远程开户或在线办理政务。', en: 'RealMe Verified: government-backed digital ID accepted by many NZ banks for AML identity verification.' },
        ],
      },
      {
        id: 'l02-c3',
        type: 'checklist',
        title: {
          zh: '第三步：新移民在线直申 IRD 税号（免跑 AA、没银行卡也能先办！）',
          en: 'Step 3: Apply for Your IRD Number Online (New Arrival Fast-Track)',
        },
        body: {
          zh: '根据 IRD 官网最新流程，刚入境的新移民（持有有效工作/居留/学生签证）走 "New arrival to New Zealand" 在线通道，可勾选授权 IRD 直接向移民局（INZ）调取护照与签证信息，无需跑 AA 门店排队验证纸质原件！',
          en: 'Under Inland Revenue’s streamlined New Arrival pathway, you authorise IRD to verify your identity directly with Immigration NZ—skipping physical AA visits.',
        },
        keyPoints: [
          { zh: '准备 4 项材料：① 护照号；② INZ 签证批准信上的 Immigration Application Number；③ 国内税号 TIN（中国大陆填 18 位身份证号）；④ 新西兰手机号与收信地址。', en: 'Prepare: passport details, INZ Application Number, home country TIN, and NZ phone/address.' },
          { zh: '破除“银行卡与 IRD 死锁”：在线申请 IRD 时本地银行账户为可选项（Optional）！如果银行还没批下来，直接选“暂无银行账户”照常提交；通常 2–10 个工作日出号，再拿 IRD 确认信去补全银行资料。', en: 'An NZ bank account is optional for the new-arrival IRD form—apply first and use the IRD letter to help finish bank setup!' },
          { zh: '拿到 IRD 号后立刻注册 myIR 后台账号，并把 IRD 号发给银行和雇主。', en: 'Register for myIR immediately once issued and provide your IRD number to both your employer and bank.' },
        ],
      },
      {
        id: 'l02-c4',
        type: 'warning',
        title: {
          zh: '没给 IRD 税号就开工/存钱？立刻触发 45% 惩罚性高税率！',
          en: 'No IRD Number Supplied? Watch Out for the 45% Non-Notification Tax Rate!',
        },
        body: {
          zh: '新西兰税务系统对“未申报税号”的扣税毫不手软：',
          en: 'Failing to supply your IRD number triggers automatic maximum withholding rates:',
        },
        keyPoints: [
          { zh: '工作未交 IRD 号：雇主必须按 ND（Non-declaration）税码扣缴高达 45% 的 PAYE 个税（虽然后续年度退税能退回，但严重影响初期现金流）。', en: 'Employers must tax you at the 45% ND rate without an IRD number.' },
          { zh: '银行未填 IRD 号：存款利息会被自动按 45% 最高 RWT（居民预扣税）扣除！开通银行 App 后第一时间把 IRD 号和对应 RWT 税率填进去。', en: 'Banks also deduct 45% RWT on savings interest until you register your IRD number.' },
          { zh: '绝对保密：IRD 号仅提供给合法雇主、银行、KiwiSaver 提供商和会计师，绝不发给陌生租房中介或来历不明的求职广告！', en: 'Treat your IRD number like a sensitive ID—never share it with unverified landlords or sketchy job ads.' },
        ],
      },
      {
        id: 'l02-c5',
        type: 'dialogue',
        title: {
          zh: '场景实战：拿到 IRD 后给新公司 HR 发邮件模板',
          en: 'Email Template: Sending Your IRD & Tax Code (IR330) to HR',
        },
        body: {
          zh: '入职前向雇主提交 IRD 号和税码表（IR330），语气简洁专业即可：',
          en: 'Keep your onboarding email to NZ HR concise and friendly:',
        },
        dialogueLines: [
          {
            speaker: 'You (Email to HR)',
            en: 'Kia ora [Name], I’ve just received my IRD number and completed the IR330 tax code declaration (Tax Code: M) along with my NZ bank account details attached. Please let me know if you need anything else before my start date. Ngā mihi, [Your Name]',
            zh: '你好 [姓名]，我刚拿到 IRD 税号，已填好 IR330 税码声明表（主业税码 M）并附上我的新西兰银行账户信息。入职前如还需其他材料请随时告知。诚挚感谢，[你的名字]',
            subtextZh: '主业无学生贷款用税码 M，有新西兰本地学生贷款用 M SL；千万别忘了同时交 KiwiSaver 选择表（KS2）。',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l02-q1',
        prompt: {
          zh: '刚落地新西兰第 2 天，银行账户预约要等一周，但你想尽快拿到 IRD 税号。正确的做法是？',
          en: 'You just landed and your bank appointment is next week, but you want your IRD number ASAP. What should you do?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '必须等银行卡激活拿到对账单后才能申请 IRD', en: 'Wait until your NZ bank account is fully active first' },
            isCorrect: false,
            feedback: { zh: '这是老黄历啦！现在新移民在线申请 IRD 时银行账户为可选项，可以先提交申请。', en: 'Outdated! A bank account is now optional for the online new-arrival IRD application.' },
          },
          {
            id: 'b',
            text: { zh: '立刻上 ird.govt.nz 走 New Arrival 在线通道，授权 IRD 与移民局核验身份，银行项暂选暂无即可先行申号', en: 'Apply online via the New Arrival pathway on ird.govt.nz using INZ verification without waiting for a bank account' },
            isCorrect: true,
            feedback: { zh: '完全正确！这样能最快拿到税号，避免第一份工资或存款利息被扣 45% 惩罚税率。', en: 'Spot on! Fast-tracks your IRD number and helps you avoid the 45% ND tax rate.' },
          },
        ],
      },
      {
        id: 'l02-q2',
        prompt: {
          zh: '如果你入职第一周还没给雇主提供 IRD 税号，发薪时会发生什么？',
          en: 'What happens to your payslip if you start working without providing your IRD number?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '雇主会按最低 10.5% 税率暂扣', en: 'Taxed at the lowest 10.5% bracket temporarily' },
            isCorrect: false,
            feedback: { zh: '恰恰相反，会触发最高 45% 的非申报税率（ND）！', en: 'The opposite—it triggers the punitive 45% ND rate!' },
          },
          {
            id: 'b',
            text: { zh: '触发 ND 税码，工资被按 45% 高税率代扣', en: 'Triggers the ND tax code, deducting 45% PAYE' },
            isCorrect: true,
            feedback: { zh: '答对了！所以落地第一周务必优先办下 IRD 并填交 IR330 表格。', en: 'Correct! Always prioritise your IRD number and IR330 form.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '落地 48 小时内行动：办好 02x 预付费 SIM 卡 → 注册 RealMe Login → 上 ird.govt.nz 提交新移民在线 IRD 申请。',
      en: 'Within 48 hours of landing: get a local 02x Prepay SIM, create a RealMe login, and submit the online New Arrival IRD form.',
    },
  },

  {
    id: 'l-03',
    number: 3,
    moduleId: 'mod-1',
    title: {
      zh: '银行开户、EFTPOS、PayWave 附加费真相与合规换汇',
      en: 'NZ Banking, EFTPOS, PayWave Surcharges (2026 Reality) & Transfers',
    },
    summary: {
      zh: '五大主流银行开户与住址证明攻略、纠偏 2026 年 3 月 PayWave 禁令叫停后的省钱刷卡法，以及跨境换汇反洗钱（AML）红线。',
      en: 'Open an NZ bank account with valid proof of address, learn the real 2026 PayWave surcharge rules, and transfer overseas funds safely under AML laws.',
    },
    targetLevel: 1,
    durationMin: 8,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'MBIE / Commerce Commission / Consumer Protection NZ',
    terms: [
      { term: 'EFTPOS', phonetic: '/ˈeftpɒs/', zh: '新西兰本土借记卡网络（插卡/刷卡输密码，几乎永远 0 手续费！）' },
      { term: 'PayWave / Contactless', phonetic: '/peɪ weɪv/', zh: '非接触感应闪付（Visa/Mastercard 通道，很多小店加收 1.5%–2.5% 附加费）' },
      { term: 'Proof of Address', phonetic: '/pruːf əv əˈdres/', zh: '住址证明（银行开户最难卡点：租房合同、水电网账单或房东证明信）' },
      { term: 'AML / CFT', phonetic: '/ˌeɪ em ˈel/', zh: '反洗钱与反恐融资审查（大额跨境转款须证明资金合法来源）' },
      { term: 'Account Suffix', phonetic: '/ˈsʌfɪks/', zh: '新西兰银行账号格式：BB-bbbb-AAAAAAA-SSS（最后 2–3 位区分日常/储蓄子账户）' },
      { term: 'Direct Debit / AP', phonetic: '/dəˈrekt ˈdebɪt/', zh: '自动扣款（授权账单方扣费）vs Automatic Payment（自己设定期转房租）' },
    ],
    cards: [
      {
        id: 'l03-c1',
        type: 'checklist',
        title: {
          zh: '手把手开新西兰银行账户（五大银行 + 攻克住址证明）',
          en: 'Opening an NZ Bank Account & Cracking Proof of Address',
        },
        body: {
          zh: '新西兰主流零售银行是“澳资四大行” ANZ、ASB、BNZ、Westpac 以及本土国有 Kiwibank（其中 ANZ、ASB、BNZ 往往有中文服务团队，对新移民最友好）。现在大部分银行允许入境前 1–3 个月在线预开户，落地带原件去网点激活即可！',
          en: 'NZ’s main banks are ANZ, ASB, BNZ, Westpac, and NZ-owned Kiwibank. Most let migrants pre-apply online before arrival, then activate in-branch upon landing.',
        },
        keyPoints: [
          { zh: '必备材料：① 护照原件；② 电子签证打印件；③ 国内税号（身份证号）与 IRD 号（可后补）；④ 新西兰住址证明（Proof of Address）。', en: 'Bring: passport, visa letter, home TIN/IRD number, and NZ Proof of Address.' },
          { zh: '住址证明怎么破局？住酒店/Airbnb 通常不被认可！最稳方法：① 正式租房合同；② 房东/寄宿家庭签字的居住确认信 + 房东的水电/地税账单；③ IRD 寄到该地址的纸质确认信。', en: 'Hotels rarely count as Proof of Address—use a tenancy agreement, a signed host letter + utility bill, or an official IRD/govt letter.' },
          { zh: '账号结构：新西兰转账完全不需要开户行名称，只需 15–16 位纯数字账号（银行代码-分行-账号-后缀如 -00 日常 / -50 储蓄），跨行转账现在大多 1 小时内实时免费到账！', en: 'NZ domestic bank transfers only need the 16-digit account number and clear within an hour, 365 days a year, usually free.' },
        ],
      },
      {
        id: 'l03-c2',
        type: 'comparison',
        title: {
          zh: '【2026 最新纠偏】PayWave 附加费禁令已叫停！刷卡这样省钱',
          en: '2026 Update: PayWave Surcharges Are Still Legal—Save with Insert EFTPOS',
        },
        body: {
          zh: '很多旧攻略误以为新西兰在 2026 年 5 月已经全面禁止 PayWave 附加费（把澳洲 2026.10 禁令跟新西兰搞混了）。真实情况是：新西兰政府于 2026 年 3 月宣布叫停该禁令法案，因此截至 2026 年底，新西兰商家对 PayWave 闪付和信用卡加收 1.5%–2.5% 附加费（Surcharge）依然合法！',
          en: 'Despite a 2025 bill proposing a ban, the NZ Government halted the surcharge ban in March 2026. Contactless (PayWave) and credit card surcharges remain legal in NZ as of late 2026.',
        },
        keyPoints: [
          { zh: '省钱神操作：在咖啡馆、餐厅、小超市结账时，若看到 POS 机贴着 "PayWave Surcharge 2%"，把你的 NZ Debit Card 插进卡槽（Insert）或刷磁条，选择 CHQ 或 SAV 输 4 位密码——立刻免除附加费！', en: 'To skip the surcharge at cafes/shops, INSERT your NZ debit card and select CHQ/SAV with your PIN instead of tapping!' },
          { zh: '消费者红线：依据 Commerce Commission 指引，商家收附加费必须提前清晰明示、提供免费替代方式（插卡 EFTPOS），且费率不得高于商家实际支付的手续费成本。', en: 'Merchants must clearly disclose surcharges upfront, offer a free payment option, and not profit from excessive surcharges.' },
          { zh: '大型连锁超市（Woolworths / Pak’nSave / New World）通常不收 PayWave 附加费，可以直接手机 Apple Pay / Google Pay 闪付。', en: 'Major supermarkets generally absorb contactless fees, so Apple/Google Pay tapping is fee-free there.' },
        ],
      },
      {
        id: 'l03-c3',
        type: 'warning',
        title: {
          zh: '绝对红线：严禁微信群“私人换汇”！合规跨境资金与 AML',
          en: 'Hard Red Line: Never Use Informal Private FX Transfers (AML Risk)',
        },
        body: {
          zh: '新移民最惨痛的踩坑之一就是在微信群找“汇率高、免手续费”的私人对敲换汇。轻则遇到骗子卷款跑路，重则收到来路不明的涉诈/涉黑资金，导致你的新西兰银行账户被永久封户（Debanking）并列入全纽金融黑名单，甚至买房贷款被拒！',
          en: 'Informal WeChat/private currency swaps carry extreme risk: even if not an outright scam, receiving tainted funds can trigger permanent NZ bank account closure (debanking) and ruin future mortgage applications.',
        },
        keyPoints: [
          { zh: '唯一合规路径：使用国内正规商业银行购汇电汇至本人同名新西兰账户，或使用受新西兰 FMA / 央行监管的持牌合规换汇机构（如 Wise、OFX 等），并保留完整购汇与转账水单。', en: 'Only use licensed banks or regulated remittance platforms (e.g., Wise/OFX) from accounts in your own name.' },
          { zh: '提前备好 AML 资金来源证明：未来买房首付或大额转款时，银行和律师必查资金来源（工资单、税单、卖房合同、存款流水），从第一天就留存电子档案。', en: 'Keep clean paper trails (payslips, tax returns, property sale contracts) for future NZ bank AML checks.' },
        ],
      },
      {
        id: 'l03-c4',
        type: 'concept',
        title: {
          zh: '新西兰无现金日常：Automatic Payment 交房租与子账户分桶',
          en: 'Everyday Cashless Life: Automatic Payments & Sub-Account Buckets',
        },
        body: {
          zh: '新西兰高度无现金化，但和国内扫二维码不同，这里几乎全部基于银行卡 + 银行账号转账：',
          en: 'NZ is nearly cashless, built around bank cards and direct bank-to-bank transfers rather than QR wallets:',
        },
        keyPoints: [
          { zh: '交房租用 Automatic Payment (AP)：在银行 App 里设定每周/每双周固定日期自动转账给房东，记得在 Reference 栏填上你的名字或房间号方便对账！', en: 'Set up an Automatic Payment for rent and always fill in the Particulars/Reference fields.' },
          { zh: '水电网话费用 Direct Debit：授权电力或宽带公司按月自动扣款，但余额不足被退票（Dishonour）会被银行扣手续费，务必留足缓冲金。', en: 'Direct Debits automate utility bills—keep a small buffer in your account to avoid dishonour fees.' },
          { zh: '银行活期分桶：建议免费开 3 个子账户——-00 Everyday（日常刷卡）、-01 Bills（专放房租水电）、-50 Serious Saver（高息储蓄）。', en: 'Use free sub-accounts (-00 Everyday, -01 Bills, -50 Savings) to keep rent and savings cleanly separated.' },
        ],
      },
      {
        id: 'l03-c5',
        type: 'dialogue',
        title: {
          zh: '网点开户与收银台免附加费地道英文对话',
          en: 'Bank Branch & Cafe Counter Dialogues',
        },
        body: {
          zh: '记住这两句超高频实用表达，落地第一天就能自然用出来：',
          en: 'Two ultra-common everyday banking interactions in NZ:',
        },
        dialogueLines: [
          {
            speaker: 'Cafe Barista',
            en: 'That’s $6.50 for your flat white—just a heads up, there’s a 2% PayWave surcharge.',
            zh: '您的澳白咖啡 $6.50——提醒一下，闪付有 2% 附加费哦。',
          },
          {
            speaker: 'You',
            en: 'No worries, cheers for letting me know—I’ll just insert my card and use Cheque!',
            zh: '没问题，谢谢提醒——我插卡走 Cheque（免手续费）就行！',
            subtextZh: '插卡后在 POS 机按 CHQ 或 SAV 再输 4 位 PIN 码，立刻省掉 2%！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l03-q1',
        prompt: {
          zh: '2026 年底你在惠灵顿一家咖啡馆看到柜台写着“PayWave/Credit Card 2% Surcharge”。以下说法正确的是？',
          en: 'In late 2026, a Wellington cafe displays a 2% PayWave/Credit Card surcharge sign. Which is true?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '新西兰已全面禁止 PayWave 附加费，商家这是违法的', en: 'NZ banned all PayWave surcharges so this is illegal' },
            isCorrect: false,
            feedback: { zh: '注意纠偏！新西兰政府于 2026 年 3 月叫停了附加费禁令，商家提前明示且不过度收费仍属合法。', en: 'The NZ surcharge ban was halted in March 2026—disclosed cost-based surcharges remain legal.' },
          },
          {
            id: 'b',
            text: { zh: '提前明示且按成本收取仍合法；想省下 2% 只需把本地借记卡插卡选 CHQ/SAV 输密码即可', en: 'Legal if disclosed and cost-based; insert your NZ debit card and pick CHQ/SAV with PIN to pay 0% fee' },
            isCorrect: true,
            feedback: { zh: '精准掌握 2026 最新现状，每天一杯咖啡一年就能省出一顿大餐！', en: 'Spot on—inserting your card avoids the surcharge effortlessly!' },
          },
        ],
      },
      {
        id: 'l03-q2',
        prompt: {
          zh: '老乡微信群里有人说可以用低于银行汇率帮你私下“人民币换纽币直接转到你 ANZ 账户”。应该？',
          en: 'Someone in a chat group offers a cheap private RMB-to-NZD bank swap into your ANZ account. What should you do?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '果断拒绝！私人对敲极易牵涉诈骗/洗钱资金，可能导致全纽银行封户及买房贷款被拒', en: 'Refuse strictly—private swaps risk scams, AML freezes, and permanent debanking' },
            isCorrect: true,
            feedback: { zh: '非常明智！跨境资金务必走持牌正规渠道并留存完整水单，保护自己的新西兰金融信用。', en: 'Smart move! Always keep transfers regulated and documented.' },
          },
          {
            id: 'b',
            text: { zh: '先小额换 1000 纽币试试，到账了就安全', en: 'Try a small NZ$1,000 swap first; if it arrives it is safe' },
            isCorrect: false,
            feedback: { zh: '极其危险！银行反洗钱追踪往往滞后数周甚至数月，哪怕当时到账后续依然可能被冻结封户。', en: 'Dangerous! AML investigations can surface months later and still freeze/close your accounts.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '拿到住址证明后尽快完成银行激活，在手机银行录入 IRD 号避免 45% 利息税，并养成小店插卡选 CHQ/SAV 的习惯。',
      en: 'Add your IRD number in your banking app immediately to avoid 45% RWT, and insert your debit card at shops with PayWave signs.',
    },
  },

  {
    id: 'l-04',
    number: 4,
    moduleId: 'mod-1',
    title: {
      zh: '政务与免费求助网：CAB、JP 太平绅士与 111/105/1737 热线',
      en: 'Free Civic Support: CAB, Justice of the Peace (JP) & Helplines',
    },
    summary: {
      zh: '别一遇事就花大钱找中介！掌握新西兰极其完善的免费公共求助系统：免费公证签字找 JP、生活维权找 CAB、免费法律援助找 Community Law，以及 4 条救命热线精准分工。',
      en: 'Stop overpaying agents—learn how to use NZ’s free civic network: Justices of the Peace (JP), Citizens Advice Bureau (CAB), Community Law, and exact emergency numbers.',
    },
    targetLevel: 1,
    durationMin: 7,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Citizens Advice Bureau / Royal Federation of NZ JPs / NZ Police',
    terms: [
      { term: 'JP (Justice of the Peace)', phonetic: '/ˌdʒeɪ ˈpiː/', zh: '太平绅士（政府任命的公益志愿者，免费公证复印件与见证法定声明）' },
      { term: 'Certified Copy', phonetic: '/ˈsɜːtɪfaɪd ˈkɒpi/', zh: '核证副本（JP 核对原件后在复印件上盖章签字，完全免费！）' },
      { term: 'Statutory Declaration', phonetic: '/ˈstætʃətri/', zh: '法定声明（须在 JP 面前当场签字，绝不能提前签好！）' },
      { term: 'CAB', phonetic: '/ˌsiː eɪ ˈbiː/', zh: '公民咨询局（Citizens Advice Bureau，免费多语种生活/租房/职场咨询）' },
      { term: 'Community Law', phonetic: '/kəˈmjuːnəti lɔː/', zh: '社区法律中心（为符合条件人群提供免费律师面谈咨询）' },
      { term: '105 Police', phonetic: '/wʌn əʊ faɪv/', zh: '新西兰警方非紧急报案专线与官网 105.police.govt.nz' },
    ],
    cards: [
      {
        id: 'l04-c1',
        type: 'concept',
        title: {
          zh: '宝藏公益神器 1：JP（太平绅士）— 100% 免费公证签字！',
          en: 'Justice of the Peace (JP): Free Document Certification & Witnessing',
        },
        body: {
          zh: '在新西兰，全境有数千名社区公益 JP（太平绅士）免费为你服务！无论是移民局、银行、大学还是职业注册要求的 Certified Copy（核证副本），找 JP 全部 NZ$0！',
          en: 'Across NZ, thousands of trained volunteer Justices of the Peace certify document copies and witness statutory declarations completely free of charge.',
        },
        keyPoints: [
          { zh: '去哪找 JP？① 各地公共图书馆（Public Library）和商场常设免预约 JP Service Desk；② 上官网 justiceofthepeace.org.nz 按邮编搜附近 JP 预约。', en: 'Find walk-in JP desks at local public libraries/malls or search by postcode at justiceofthepeace.org.nz.' },
          { zh: '铁律提醒：① 必须同时带原件和复印件（JP 不负责帮你复印）；② 法定声明（Statutory Declaration）绝不要提前签字，必须当着 JP 的面签字才有效！', en: 'Always bring BOTH originals and photocopies, and NEVER pre-sign a statutory declaration—sign in front of the JP.' },
          { zh: '注意边界：JP 不能翻译文件，也不能签跨国海牙认证（Apostille 需走 DIA 内政部认证通道）。', en: 'JPs do not translate documents or issue international Apostilles (handled via DIA).' },
        ],
      },
      {
        id: 'l04-c2',
        type: 'concept',
        title: {
          zh: '宝藏公益神器 2：CAB（公民咨询局）与 Community Law',
          en: 'CAB & Community Law: Free Advice on Renting, Work & Consumer Rights',
        },
        body: {
          zh: '刚来新西兰遇到房东扣押金、老板拖欠工资、买车被坑、邻里纠纷，第一时间找 CAB（Citizens Advice Bureau，官网 cab.org.nz，免费热线 0800 367 222）！',
          en: 'When facing landlord, employer, consumer, or neighbour disputes, Citizens Advice Bureau (cab.org.nz / 0800 367 222) provides free, confidential, independent guidance.',
        },
        keyPoints: [
          { zh: '多语种友好：大城市的 CAB 分支经常配有普通话/粤语志愿者，也可免费连线翻译。', en: 'Many city CAB branches have Mandarin/Cantonese volunteers or free telephone interpreters.' },
          { zh: '免费法律援助：Community Law（communitylaw.org.nz）在全纽有 24 家中心，提供免费的《Community Law Manual》法律白话手册及免费律师门诊。', en: 'Community Law offers free legal drop-in clinics (subject to eligibility) and an extraordinary free plain-English law manual online.' },
          { zh: '公共图书馆福利：凭住址证明办免费图书馆卡，可免费用电脑、平价打印扫描、借 Libby 电子书、参加免费英语角（ESOL Group）！', en: 'Your local public library card is free—unlocking printing, Wi-Fi, free ESOL conversation groups, and Libby eBooks.' },
        ],
      },
      {
        id: 'l04-c3',
        type: 'comparison',
        title: {
          zh: '一张表背熟新西兰 4 大核心热线（绝不打错电话！）',
          en: '4 Essential NZ Helplines: Exact Division of Responsibility',
        },
        body: {
          zh: '新西兰把紧急与非紧急求助划分得非常清晰，打对号码能最快得到专业响应：',
          en: 'Knowing which number to call saves critical time and keeps emergency lines clear:',
        },
        keyPoints: [
          { zh: '🚨 111（紧急救命）：正在发生的犯罪、火灾、重伤、胸痛呼吸困难。接通先说 Police / Fire / Ambulance；英文卡壳立刻说 "Mandarin interpreter please"！', en: '111 (Emergency): life-threatening danger or crime in progress. Ask for "Mandarin interpreter please" if needed.' },
          { zh: '👮 105（非紧急报警）：车窗昨晚被砸、失窃、诈骗、轻微财损。致电 105 或上 105.police.govt.nz 在线报案拿案件号。', en: '105 (Non-emergency Police): historic theft, broken car window, scams—also online at 105.police.govt.nz.' },
          { zh: '🩺 0800 611 116（Healthline 免费护士）：24/7 注册护士免费接听（可要中文口译），半夜发烧或拿不准去不去急诊时先打它。', en: '0800 611 116 (Healthline): free 24/7 registered nurses with interpreter access.' },
          { zh: '💛 1737（免费心理支持）：24/7 免费电话或直接发短信到 1737，受训咨询师保密陪聊。', en: '1737 (Need to Talk?): free 24/7 call or text to a trained mental health counsellor.' },
        ],
      },
      {
        id: 'l04-c4',
        type: 'warning',
        title: {
          zh: '防踩坑：这些“收费代办”其实政府与公益 100% 免费！',
          en: 'Avoid Overpaying: Services That Are Actually 100% Free in NZ',
        },
        body: {
          zh: '刚落地最容易因为信息差花冤枉钱，以下常见事项在新西兰全都是免费公共服务：',
          en: 'Watch out for third-party sites charging fees for free public services:',
        },
        keyPoints: [
          { zh: '❌ 网上付费填 NZTD → ✅ travellerdeclaration.govt.nz 100% 免费', en: 'NZTD is 100% free on travellerdeclaration.govt.nz.' },
          { zh: '❌ 花钱找人代办 IRD 税号 → ✅ ird.govt.nz 自己 10 分钟免费搞定', en: 'Applying for an IRD number on ird.govt.nz is 100% free.' },
          { zh: '❌ 花钱公证证件复印件 → ✅ 图书馆 JP 太平绅士 100% 免费盖章', en: 'Document certification at a JP desk is 100% free.' },
          { zh: '❌ 租房/消费纠纷先花大钱请律师 → ✅ 先免费问 CAB / Tenancy Services（0800 836 262）', en: 'Renting and consumer guidance from CAB and Tenancy Services is 100% free.' },
        ],
      },
      {
        id: 'l04-c5',
        type: 'dialogue',
        title: {
          zh: '真实场景：去图书馆 JP 柜台免费公证 + 拨打 111 话术',
          en: 'Practical Scripts: Visiting a JP Desk & Calling 111',
        },
        body: {
          zh: '提前演练这两段英文，关键时刻从容不慌：',
          en: 'Keep these two concise scripts ready:',
        },
        dialogueLines: [
          {
            speaker: 'You (At Library JP Desk)',
            en: 'Kia ora! Could I please get two copies of my passport certified as true copies, and have my signature witnessed on this statutory declaration? I’ve brought the originals and left the signature blank.',
            zh: '你好！请问可以帮我把这两份护照复印件公证为真实副本，并见证我在这份法定声明上签字吗？我带了原件，签名栏也空着没提前签。',
            subtextZh: '把签名栏留空当面签字，JP 一听就知道你超级懂规矩！',
          },
          {
            speaker: 'You (Emergency 111)',
            en: 'Ambulance please. Mandarin interpreter please. My address is 24 Queen Street, Auckland. Someone has collapsed and is not breathing.',
            zh: '请接救护车，需要普通话翻译。我的地址是奥克兰皇后街 24 号，有人昏倒没有呼吸了。',
            subtextZh: '打 111 永远先报【要哪项服务 + 精确地址】，就算信号中断救援也能直接派车！',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l04-q1',
        prompt: {
          zh: '你需要把一份 Statutory Declaration（法定声明）拿去图书馆找 JP 太平绅士见证签字。正确做法是？',
          en: 'You need a JP to witness your Statutory Declaration at the local library. What must you do?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '在家提前签好名省时间，带去让 JP 盖章即可', en: 'Sign it at home beforehand to save time' },
            isCorrect: false,
            feedback: { zh: '错啦！提前签好名的法定声明 JP 无法见证，你只能重打一份当面签！', en: 'A JP cannot witness a pre-signed declaration—you must sign in front of them!' },
          },
          {
            id: 'b',
            text: { zh: '签名栏留空，带齐身份原件，当着 JP 的面宣读并签字（全程免费）', en: 'Leave the signature blank, bring photo ID, and sign in front of the JP for free' },
            isCorrect: true,
            feedback: { zh: '完全正确！这是找 JP 最重要的实操铁律。', en: 'Exactly right!' },
          },
        ],
      },
      {
        id: 'l04-q2',
        prompt: {
          zh: '早上出门发现停在路边的车窗昨晚被砸、包被偷，小偷早已不在现场。应该拨打哪个号码报案拿保险理赔编号？',
          en: 'You discover your car window was smashed overnight and the thief is long gone. Which police channel should you use?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '拨打 105 或登录 105.police.govt.nz 在线非紧急报案', en: 'Call 105 or report online at 105.police.govt.nz' },
            isCorrect: true,
            feedback: { zh: '满分！111 留给正在发生的危险，事后失窃走 105 在线提交最方便还能立刻拿案件号给保险公司。', en: 'Spot on! Online 105 gives you a police reference number smoothly for insurance.' },
          },
          {
            id: 'b',
            text: { zh: '立刻拨打 111 要求警车鸣笛到场', en: 'Call 111 emergency immediately' },
            isCorrect: false,
            feedback: { zh: '不要占用 111 生命通道！非进行中的事后财产损失统一走 105。', en: 'Keep 111 for active emergencies; use 105 for historic property crimes.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '立刻在手机通讯录存好这 4 个号码：111（急救/警/火）、105（非紧急警务）、0800 611 116（Healthline 免费护士）、1737（免费心理支持）。',
      en: 'Save 111, 105, Healthline (0800 611 116), and 1737 into your phone contacts right now.',
    },
  },

  {
    id: 'l-05',
    number: 5,
    moduleId: 'mod-1',
    title: {
      zh: '医疗体系全景：GP 注册、2026 12个月处方与 ACC 意外赔付',
      en: 'NZ Healthcare Decoded: GP Enrolment, 2026 12-Month Rx & ACC Cover',
    },
    summary: {
      zh: '彻底搞懂新西兰分级诊疗：如何挑诊所免费注册 GP、2026 年 2 月新实施的 12 个月长期处方规则、什么时候去 After-hours/ED，以及绝不错过 ACC 无过错意外赔付！',
      en: 'Master NZ’s tiered healthcare: enrolling with a GP via Healthpoint, the Feb 2026 12-month prescription rule, Urgent Care vs ED, and claiming ACC no-fault cover.',
    },
    targetLevel: 1,
    durationMin: 9,
    xpReward: 70,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'Health New Zealand (Te Whatu Ora) / health.govt.nz / ACC',
    terms: [
      { term: 'GP (General Practitioner)', phonetic: '/ˌdʒiː ˈpiː/', zh: '家庭医生（全科医生，非危及生命看病与转专科的必经第一站）' },
      { term: 'Enrolled Patient', phonetic: '/ɪnˈrəʊld/', zh: '已注册病人（享政府诊费补贴，通常比未注册 Casual 便宜一半以上）' },
      { term: 'Healthpoint', phonetic: '/ˈhelθ pɔɪnt/', zh: '新西兰官方医疗查询网 healthpoint.co.nz（查哪家 GP 还收新病人及价格）' },
      { term: 'ACC', phonetic: '/ˌeɪ siː ˈsiː/', zh: '意外赔偿局（无论谁的错，境内意外受伤均可获医疗补贴甚至 80% 误工费）' },
      { term: 'After-hours / Urgent Care', phonetic: '/ˈɑːftər aʊəz/', zh: '夜间/周末急诊诊所（轻中度外伤/缝针/发烧，比医院 ED 快得多）' },
      { term: 'ManageMyHealth', phonetic: '/ˈmænɪdʒ/', zh: '新西兰高频医疗 App（在线约 GP、看化验报告、续开处方）' },
    ],
    cards: [
      {
        id: 'l05-c1',
        type: 'concept',
        title: {
          zh: '看病第一铁律：分级诊疗，落地就先 Enrol（注册）GP！',
          en: 'Golden Rule: Enrol with a GP Before You Ever Get Sick',
        },
        body: {
          zh: '新西兰实行严格的三级分诊制（家庭医生 GP → 非工作时间急诊诊所 After-hours → 公立医院急诊部 ED）。日常感冒、开处方、化验血、打疫苗、转诊公立/私立专科（Specialist）全部必须先找 GP。如果你持有 2 年及以上工作签证或居民身份（符合公立医疗资格），注册 GP 本身完全免费，每次看诊诊费大幅降低（通常 NZ$20–$75，14 岁以下注册儿童绝大多数诊所免费！），而未注册临时看病（Casual）可能要收 NZ$100+ 甚至直接拒收！',
          en: 'NZ healthcare flows from GP → Urgent Care (After-hours) → Hospital ED. Eligible migrants (e.g., 2-year+ work visa or residents) enrol free of charge for subsidised GP fees (most clinics offer free visits for enrolled under-14s). Casual unenrolled visits cost much more.',
          hintZh: '上 healthpoint.co.nz 输入邮编，勾选 "Accepting new patients" 即可比较附近诊所收费和中文医生！',
        },
        keyPoints: [
          { zh: '公立医院急诊（ED）严格按病情危急程度分诊：非危及生命（如普通发烧、轻度扭伤）可能苦等 6–10 小时！', en: 'Hospital EDs triage strictly by severity—non-urgent cases often wait 6–10 hours.' },
          { zh: '拿不准去哪？先打 24 小时免费 Healthline（0800 611 116），可要求免费中文口译！', en: 'Unsure where to go? Call free 24/7 Healthline (0800 611 116) with free interpreter support.' },
        ],
      },
      {
        id: 'l05-c2',
        type: 'checklist',
        title: {
          zh: '【2026.02 重大便民新政】12 个月长期处方 & 药房取药指南',
          en: 'Feb 2026 Policy Update: 12-Month Prescriptions & Pharmacy Rules',
        },
        body: {
          zh: '自 2026 年 2 月 1 日起，新西兰正式实施最长 12 个月处方新政！对于病情稳定、长期服药的慢性病患者（如高血压、哮喘、糖尿病），GP、执业护士或处方药剂师可直接开具最长 12 个月有效的处方，省去过去每 3 个月就要花钱找 GP 续方的麻烦。',
          en: 'From 1 February 2026, authorised prescribers can issue prescriptions valid for up to 12 months for stable long-term conditions—cutting out quarterly GP repeat fees.',
        },
        keyPoints: [
          { zh: '⚠️ 领药节奏不变：即使开了 12 个月处方，药房依然按每 3 个月一次分批配药（无需再找 GP，直接去药房领续方即可）。', en: 'Pharmacies still dispense in 3-month intervals—you simply collect repeats from the pharmacy without re-visiting your GP.' },
          { zh: '❌ 排除范围：病情不稳定、近 6 个月内调整过剂量/药名、按需服用（PRN）药物，以及管制类药物（强效止痛药、部分 ADHD 药物）不适用 12 个月处方。', en: 'Excluded: unstable conditions, meds changed within 6 months, as-needed (PRN) meds, and controlled drugs.' },
          { zh: '处方费省钱技巧：常规政府资助处方每项收费 NZ$5（同一家庭一年满 20 项封顶免费）；大型连锁平价药房 Chemist Warehouse / Bargain Chemist 经常长期补贴免收这 $5 处方费！', en: 'Standard funded prescriptions cost $5/item (capped at 20 items/yr per family), and chains like Chemist Warehouse often waive the $5 fee.' },
        ],
      },
      {
        id: 'l05-c3',
        type: 'comparison',
        title: {
          zh: '新西兰独有神级保障：ACC（全民无过错意外险）全解析',
          en: 'ACC: New Zealand’s World-Unique No-Fault Injury Cover',
        },
        body: {
          zh: '无论你是公民、工签还是短期游客，只要在新西兰境内发生意外身体受伤（做饭切到手、打球崴脚、滑雪骨折、浴室滑倒、车祸、被狗咬甚至意外撞断牙），哪怕完全是你自己不小心，ACC 都提供全面无过错赔付！',
          en: 'Whether you are a citizen, migrant, or tourist, ACC covers accidental injuries occurring in NZ regardless of fault—including home accidents, sports injuries, and road crashes.',
        },
        keyPoints: [
          { zh: '报销范围：大幅补贴 GP/急诊诊费、X 光/超声/MRI 检查、理疗（Physio）/针灸/正骨、必要手术；若因伤无法工作满 1 周以上，受雇人员可获高达平时税前收入 80% 的每周误工补贴！', en: 'Covers subsidised treatment, imaging, physio/acupuncture, surgery, and up to 80% of lost weekly wages if unable to work.' },
          { zh: '怎么报 ACC？不用自己提前填复杂表格！去看 GP、After-hours 或 Physio 时直接告诉前台/医生“我是意外受伤的”，由诊所当场在线提交 ACC45 申报表即可！', en: 'Your GP, urgent care clinic, or physio lodges the ACC45 claim directly on your behalf during your appointment.' },
          { zh: '区分边界：普通生病（发烧、慢性病、自然蛀牙）不归 ACC 管；意外受伤（含意外撞断牙齿）归 ACC 管！', en: 'Illness & natural decay = standard health system; accidental injury (including broken teeth from a fall) = ACC!' },
        ],
      },
      {
        id: 'l05-c4',
        type: 'warning',
        title: {
          zh: '新移民最易踩的 3 个医疗大坑（资格、看牙、等专科）',
          en: '3 Healthcare Traps That Catch New Migrants Off Guard',
        },
        body: {
          zh: '提前知道这 3 个现实局限，避免生病时手忙脚乱或花掉几千纽币：',
          en: 'Know these 3 realities of the NZ health system before you need care:',
        },
        keyPoints: [
          { zh: '① 工签有效期必须 ≥ 2 年才享有新西兰公立免费医疗资格！如果只拿了 1 年期短工签或旅游签，除 ACC 意外险外，生病住院费用极其昂贵，必须自购商业医疗险！', en: 'Work visa holders generally need a visa valid for 2+ years for publicly funded healthcare—otherwise buy comprehensive medical insurance!' },
          { zh: '② 成人看牙公立全自费！18 岁以下青少年免费看牙，但年满 18 岁后补牙/拔智齿/根管治疗全自费（根管+牙冠常达 NZ$1,500–$3,000），强烈建议登陆前治好蛀牙！', en: 'Routine dental care is free under 18, but adults pay out-of-pocket (root canals can exceed NZ$2,000).' },
          { zh: '③ 非危及生命的公立专科排队久：公立医院保命一流且免费，但非紧急择期手术常需排数月，有条件可在健康时尽早配置商业医疗险（锁定无既往症）。', en: 'Public hospital care is free and excellent for emergencies, but non-urgent specialist waitlists can be long—consider private health insurance while healthy.' },
        ],
      },
      {
        id: 'l05-c5',
        type: 'dialogue',
        title: {
          zh: '真实场景：致电 GP 诊所预约 ACC 就诊 & 询问 12 个月处方',
          en: 'Real Clinic Call: Booking an ACC Visit & Requesting a 12-Month Script',
        },
        body: {
          zh: '在新西兰看病基本都靠提前电话或 ManageMyHealth App 预约，直接说出关键词前台秒懂：',
          en: 'Use these clear terms when calling your local clinic:',
        },
        dialogueLines: [
          {
            speaker: 'Receptionist',
            en: 'Kia ora, Harbour Medical. How can I help you today?',
            zh: '你好，这里是港湾诊所，今天有什么可以帮您？',
          },
          {
            speaker: 'You',
            en: 'Kia ora! I’m an enrolled patient. I twisted my ankle hiking yesterday—could I book an ACC appointment, please? Also, for my stable blood pressure meds, can I ask the doctor about a 12-month prescription?',
            zh: '你好！我是诊所注册病人。我昨天徒步扭伤脚踝了——请问能预约一个 ACC 意外就诊吗？另外我长期稳定的降压药，这次能顺便问医生开 12 个月处方吗？',
            subtextZh: '一次普通 GP 预约通常只有 15 分钟！如果要聊两个独立问题，礼貌询问是否需要订 double appointment 最专业。',
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'l05-q1',
        prompt: {
          zh: '周末你在家切菜不小心割伤手指流血不止（需缝几针），无生命危险。最合理且省钱的就医流程是？',
          en: 'On a Sunday you cut your finger cooking and need stitches (not life-threatening). What is the best move?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '去附近 After-hours（急诊诊所）并告知是做饭意外割伤，让医生填写 ACC 申报单', en: 'Visit a local After-hours urgent care clinic and lodge an ACC claim' },
            isCorrect: true,
            feedback: { zh: '完全正确！After-hours 处理外伤缝针比医院急诊快得多，报 ACC 后诊费大幅补贴！', en: 'Spot on! Urgent care handles stitches rapidly and ACC subsidises the cost.' },
          },
          {
            id: 'b',
            text: { zh: '因为是自己不小心切伤的，不能报 ACC，只能去医院急诊硬等', en: 'Self-inflicted cooking cuts are excluded from ACC' },
            isCorrect: false,
            feedback: { zh: '错啦！ACC 是“无过错（No-fault）”制度，自己切到手一样受保护！', en: 'ACC is strictly no-fault—household accidents are fully covered.' },
          },
        ],
      },
      {
        id: 'l05-q2',
        prompt: {
          zh: '关于 2026 年 2 月实施的 12 个月长期处方，以下哪项说法正确？',
          en: 'Which statement about NZ’s Feb 2026 12-month prescription rule is accurate?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '只要开了 12 个月处方，药房会一次性把整整一年的药全装袋给你', en: 'The pharmacy hands you a full 12-month supply all at once' },
            isCorrect: false,
            feedback: { zh: '注意细节！药房依然按每 3 个月分批配药，只是你中间不用再花钱找 GP 续开处方单。', en: 'Pharmacies still dispense in 3-month intervals—you simply skip quarterly GP script renewals.' },
          },
          {
            id: 'b',
            text: { zh: '适用于病情稳定的长期慢病（不含管制药与刚调药），且药房仍按每 3 个月分批取药', en: 'Applies to stable chronic conditions (excluding controlled/recently changed meds), still dispensed every 3 months' },
            isCorrect: true,
            feedback: { zh: '完全掌握 2026 医疗新政细节！', en: 'Exactly right!' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '本周行动：上 healthpoint.co.nz 找离家近且接收新病人的诊所注册 GP，并下载 ManageMyHealth App 绑定账号。',
      en: 'Search healthpoint.co.nz for a nearby GP accepting new patients, enrol now, and activate ManageMyHealth.',
    },
  },

  {
    id: 'l-06',
    number: 6,
    moduleId: 'mod-1',
    title: {
      zh: '落地 30 天通关总路线图：把零散手续串成零死锁闭环',
      en: 'First 30 Days Master Playbook: Zero-Deadlock Setup Sequence',
    },
    summary: {
      zh: '把前 5 节串成按天执行的标准顺序：破解“没住址不能开银行、没银行不敢租房”的鸡生蛋死锁，附第 1 天到第 30 天完整节奏表。',
      en: 'Connect every survival task into a logical Day-1 to Day-30 sequence, breaking the classic “address vs bank vs rental” deadlock cleanly.',
    },
    targetLevel: 1,
    durationMin: 7,
    xpReward: 80,
    isFlagship: true,
    verifiedDate: '2026-11',
    officialSource: 'New Zealand Now (live-work.immigration.govt.nz)',
    terms: [
      { term: 'Deadlock', phonetic: '/ˈdedlɒk/', zh: '手续死锁（如住址证明、银行、租房互相依赖，需按对顺序破局）' },
      { term: 'New Zealand Now', phonetic: '/njuː ˈziːlənd naʊ/', zh: '移民局官方安家指导网站 live-work.immigration.govt.nz' },
      { term: 'AT HOP / Snapper / Metrocard', phonetic: '/ˈtrænspɔːt/', zh: '奥克兰 / 惠灵顿 / 基督城三大城市公交卡（落地第一周即买）' },
      { term: 'Electoral Roll', phonetic: '/ɪˈlektərəl rəʊl/', zh: '选民名册（拿居民签住满 1 年须依法登记投票）' },
      { term: 'KiwiSaver Opt-in', phonetic: '/ˈkiːwiˌseɪvə/', zh: '退休金自愿/自动加入机制（居民身份入职默认自动加入 3.5%）' },
    ],
    cards: [
      {
        id: 'l06-c1',
        type: 'checklist',
        title: {
          zh: '落地前 72 小时（Day 0 – Day 3）：抢占最关键的 4 个节点',
          en: 'First 72 Hours: Lock Down the 4 Foundation Milestones',
        },
        body: {
          zh: '按这个黄金顺序操作，可以彻底避免跑冤枉路或卡在“互相要证明”的怪圈里：',
          en: 'Follow this exact sequence to prevent circular paperwork traps:',
        },
        keyPoints: [
          { zh: '① 机场到达厅：买一张本地 02x 预付费 SIM 卡（Spark / One NZ / 2degrees 或 Skinny），立刻有网有电话。', en: 'Airport arrival: activate a local 02x Prepay SIM immediately.' },
          { zh: '② 第 1 天晚上：注册 RealMe Login，并直接上 ird.govt.nz 提交 New Arrival 在线 IRD 申请（选暂无银行卡先排队出号！）。', en: 'Day 1 night: create RealMe Login and lodge your online New Arrival IRD form without waiting for a bank.' },
          { zh: '③ 第 2 天：购买所在城市公交卡，熟悉周边超市（Pak’nSave 最省钱 / Woolworths / New World / 亚超）。', en: 'Day 2: pick up your city’s transit card and scout nearby supermarkets.' },
          { zh: '④ 第 2–3 天：去线下看房或向长期寄宿房东拿到合规住址证明，预约银行网点激活账户。', en: 'Days 2–3: secure Proof of Address and attend your bank activation appointment.' },
        ],
      },
      {
        id: 'l06-c2',
        type: 'checklist',
        title: {
          zh: '第 2 周（Day 4 – Day 14）：医疗、驾照与安家防线全部到位',
          en: 'Week 2: Healthcare, Driver Licence & Stable Housing',
        },
        body: {
          zh: '银行卡和税号就位后，第 2 周重点把日常安全网搭牢：',
          en: 'Once your bank and IRD are moving, lock in health, driving, and housing:',
        },
        keyPoints: [
          { zh: '① 注册 GP 家庭医生：用 healthpoint.co.nz 选离家近的诊所 Enrol，同时注册 ManageMyHealth。', en: 'Enrol with a local GP via healthpoint.co.nz and activate ManageMyHealth.' },
          { zh: '② 检查驾照翻译件：海外驾照必须配 NZTA 认可的翻译件（约 NZ$40–$60），牢记 2026.11 起 12 个月转换期。', en: 'Get an NZTA-approved driver licence translation and plan your conversion within 12 months.' },
          { zh: '③ 开通水电网与检查 Healthy Homes：整租签约前核对押金（最多 4 周）是否存入政府 Tenancy Services Bond Centre。', en: 'Verify your rental bond (max 4 weeks) is lodged with Tenancy Services and check Healthy Homes compliance.' },
          { zh: '④ 去社区图书馆办卡：免费借书、认识附近 JP 太平绅士值班时间、查看社区免费英语角。', en: 'Join your local public library and note its free JP desk schedule.' },
        ],
      },
      {
        id: 'l06-c3',
        type: 'checklist',
        title: {
          zh: '第 3–4 周（Day 15 – Day 30）：开启求职、税务与本地生活节奏',
          en: 'Weeks 3–4: Career Launch, Tax Hygiene & Community',
        },
        body: {
          zh: '进入第 3 周后，重心从“办手续”转向“工作与融入”：',
          en: 'Shift focus from admin to career momentum and settling in:',
        },
        keyPoints: [
          { zh: '① 登录 myIR 与手机银行：把 IRD 号绑定银行（告别 45% 利息税）、确认 KiwiSaver 基金风险等级。', en: 'Link IRD to your bank (fix RWT rate) and review your KiwiSaver fund type.' },
          { zh: '② 打磨 NZ 标准 CV & 求职：用本应用「Kiwi 直聘」去掉照片/年龄雷区，注册 Seek、Trade Me Jobs、LinkedIn。', en: 'Finalise an NZ-compliant CV (no photo/age) and launch your Seek/LinkedIn search.' },
          { zh: '③ 下载本地必备 App：Gaspy（油价）、Grocer（超市比价）、MetService（天气）、GeoNet（地震监测）、Trade Me。', en: 'Install local essentials: Gaspy, Grocer, MetService, GeoNet, and Trade Me.' },
          { zh: '④ 准备家庭地震应急包：按 Get Ready 清单备好每人 3 天饮用水（每人每天 3L）、手电筒、备用现金和常备药。', en: 'Assemble a basic 3-day emergency grab bag (3L water/person/day, torch, meds).' },
        ],
      },
      {
        id: 'l06-c4',
        type: 'comparison',
        title: {
          zh: '落地首月预算参考（防现金流断档）',
          en: 'First-Month Cashflow Reality Check (Avoid Upfront Surprises)',
        },
        body: {
          zh: '新西兰几乎所有大额开支都是按周结算（Weekly）且初期押金集中，务必提前预留缓冲现金：',
          en: 'New Zealand bills rent weekly and upfront moving costs cluster in Weeks 1–3:',
        },
        keyPoints: [
          { zh: '租房首笔支出：最多 4 周押金（Bond）+ 1–2 周预付房租（周租 $600 的房子签约当天可能一次拿出 $3,000–$3,600）！', en: 'Upfront tenancy cost = up to 4 weeks bond + 1–2 weeks rent in advance.' },
          { zh: '二手代步车预算：靠谱日系省油二手车约 NZ$7,000–$14,000 + 全险（约 $800–$1,600/年）+ 验车费（约 $220）。', en: 'Reliable used Japanese commuter car ~NZ$7k–$14k plus insurance and pre-purchase inspection.' },
          { zh: '建议落地前至少备足 3–6 个月生活应急备用金，避免被迫接受低薪或违法现金工。', en: 'Keep 3–6 months of living buffer so you never feel pressured into unlawful cash jobs.' },
        ],
      },
      {
        id: 'l06-c5',
        type: 'warning',
        title: {
          zh: '落地首月 4 大心态与防骗底线',
          en: '4 Golden Guardrails for Your First 30 Days',
        },
        body: {
          zh: '第一个月事情繁杂，守住这 4 条底线能帮你避开 90% 的新移民惨案：',
          en: 'Hold these four guardrails tightly during your first month:',
        },
        keyPoints: [
          { zh: '绝不轻信“先交定金才能看房”的租房帖——不见真房不打钱！', en: 'Never pay a deposit or bond before physically viewing a property and verifying the landlord.' },
          { zh: '绝不接受“无薪试工”或“低于 NZ$23.95 最低工资的现金工”！', en: 'Never accept unpaid work trials or sub-minimum-wage cash jobs (2026 adult minimum wage is NZ$23.95/hr).' },
          { zh: '所有重要沟通（租房、合同、买车）一律留书面邮件或短信记录。', en: 'Keep all important housing, car, and job agreements in writing (email/SMS).' },
          { zh: '善用本应用「工具与新政 → 全周期生活清单」，每搞定一项就打勾！', en: 'Tick off items in the Tools → Checklists tab to turn arrival chaos into calm progress.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'l06-q1',
        prompt: {
          zh: '你在奥克兰租下一套周租 NZ$650 的两房整租（不养宠物），签约当天房东最多可以合法向你收取多少 Bond（押金）+ 预付租金？',
          en: 'You sign a NZ$650/week tenancy (no pets). What is the legal maximum bond plus rent in advance?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '最多 4 周押金（$2,600）+ 最多 2 周预付房租（$1,300），合计最多 $3,900', en: 'Max 4 weeks bond ($2,600) + max 2 weeks rent in advance ($1,300) = $3,900' },
            isCorrect: true,
            feedback: { zh: '完全正确！记住 Bond 必须由房东在 23 个工作日内上交政府 Tenancy Services 监管。', en: 'Spot on! Bond must be lodged with Tenancy Services within 23 working days.' },
          },
          {
            id: 'b',
            text: { zh: '押三付三，房东爱收几个月都可以', en: '3 months bond + 3 months upfront at landlord discretion' },
            isCorrect: false,
            feedback: { zh: '违法！新西兰《住宅租赁法》硬性封顶：常规押金最多 4 周、预付租金最多 2 周，且严禁向租客收中介费！', en: 'Illegal! NZ law caps general bond at 4 weeks, rent in advance at 2 weeks, and bans tenant letting fees.' },
          },
        ],
      },
      {
        id: 'l06-q2',
        prompt: {
          zh: '一家餐馆老板说“你先来免费试工 3 天，表现好我再按每小时 $20 现金结算”。你的正确判断是？',
          en: 'A cafe owner asks for a 3-day unpaid trial followed by $20/hr cash. How do you evaluate this?',
        },
        options: [
          {
            id: 'a',
            text: { zh: '双重违法！新西兰严禁无薪试工，且 2026 年法定最低工资为 NZ$23.95/hr，果断拒绝并远离', en: 'Doubly illegal—unpaid work trials are unlawful and 2026 minimum wage is NZ$23.95/hr. Walk away!' },
            isCorrect: true,
            feedback: { zh: '保护自己太重要了！新西兰已将故意克扣工资正式入刑（Wage Theft）。', en: 'Exactly right! Intentional wage theft is a criminal offence in NZ.' },
          },
          {
            id: 'b',
            text: { zh: '刚来没有本地经验，先免费干 3 天积累经验很划算', en: 'Worth doing unpaid for 3 days to gain local experience' },
            isCorrect: false,
            feedback: { zh: '千万别踩坑！不仅损失报酬，没有正规打税记录和合同，后续办签证、报 ACC 或维权全部吃大亏。', en: 'Never! Unpaid work is illegal and cash jobs leave you unprotected for tax, visas, and ACC.' },
          },
        ],
      },
    ],
    actionTip: {
      zh: '立刻切到「工具与新政 → 全周期生活清单」，把「行前」「第 1 周」「第 1 月」三张清单对照你当前进度逐项打勾！',
      en: 'Open Tools → Checklists and tick off your Pre-Arrival, Week 1, and Month 1 milestones.',
    },
  },
];
