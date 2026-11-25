export interface DirectoryItem {
  id: string;
  name: string;
  category: '紧急与免费援助' | '政务与医疗' | '省钱与生活' | '出行与户外' | '求职与社交';
  taglineZh: string;
  detailZh: string;
  contactOrUrl: string;
  isEmergency?: boolean;
}

export const NZ_DIRECTORY: DirectoryItem[] = [
  {
    id: 'dir-111',
    name: '111 紧急求助（警/火/救护车）',
    category: '紧急与免费援助',
    taglineZh: '生命危险、正在发生的犯罪、火灾或重伤立刻拨打',
    detailZh: '接通后说出 Police / Fire / Ambulance；若英文紧张可说 "Mandarin interpreter please" 申请免费中文口译！',
    contactOrUrl: '111',
    isEmergency: true,
  },
  {
    id: 'dir-105',
    name: '105 非紧急报警热线',
    category: '紧急与免费援助',
    taglineZh: '事后报案（车被砸、失窃、诈骗、轻微财损）',
    detailZh: '不要占线 111；也可以直接在 105.police.govt.nz 在线提交报案拿到案件编号用于保险理赔。',
    contactOrUrl: '105 / 105.police.govt.nz',
  },
  {
    id: 'dir-healthline',
    name: 'Healthline 24 小时免费注册护士咨询',
    category: '紧急与免费援助',
    taglineZh: '半夜发烧、拿不准该去急诊还是明天看 GP 时先打它',
    detailZh: '全天候免费，可要求中文翻译服务，专业注册护士会帮你判断紧急程度与居家护理。',
    contactOrUrl: '0800 611 116',
  },
  {
    id: 'dir-1737',
    name: '1737 免费心理支持热线',
    category: '紧急与免费援助',
    taglineZh: '压力大、孤独焦虑或情绪低谷时，随时发短信或致电',
    detailZh: '24/7 免费且严格保密，由受训心理咨询师接听。移民初期遇到文化休克别硬扛！',
    contactOrUrl: 'Call or Text 1737',
  },
  {
    id: 'dir-cab',
    name: 'Citizens Advice Bureau (CAB 公民咨询局)',
    category: '紧急与免费援助',
    taglineZh: '新西兰宝藏级免费公益咨询机构',
    detailZh: '租房纠纷、消费维权、职场欠薪、邻里问题、社区资源，几乎任何生活难题都能免费咨询（含多语种志愿者）。',
    contactOrUrl: '0800 367 222 / cab.org.nz',
  },
  {
    id: 'dir-jp',
    name: 'Justice of the Peace (JP 太平绅士)',
    category: '紧急与免费援助',
    taglineZh: '完全免费的文件公证、核验复印件（Certified Copy）与宣誓见证',
    detailZh: '千万别花冤枉钱找律师盖章！各大图书馆、商场每周都有 JP 免费坐班，可按邮编查询附近 JP。',
    contactOrUrl: 'justiceofthepeace.org.nz',
  },
  {
    id: 'dir-realme',
    name: 'RealMe & MyIRD',
    category: '政务与医疗',
    taglineZh: '新西兰政务实名通行证与个人税务中心',
    detailZh: '用于办签证、查税号、报退税、管理 KiwiSaver 与 Working for Families 家庭补贴。',
    contactOrUrl: 'realme.govt.nz / ird.govt.nz',
  },
  {
    id: 'dir-managemyhealth',
    name: 'ManageMyHealth / MyIndici',
    category: '政务与医疗',
    taglineZh: '本地 GP 诊所预约、查化验报告与续开处方 App',
    detailZh: '注册好 GP 后记得开通诊所对应的线上系统，续开常规处方不用次次跑诊所。',
    contactOrUrl: 'managemyhealth.co.nz',
  },
  {
    id: 'dir-gaspy',
    name: 'Gaspy（加油比价神器）',
    category: '省钱与生活',
    taglineZh: '实时查周边最便宜油站，每次加油立省 NZ$10–$20',
    detailZh: '新西兰同一条街不同油站每升差价可达 20–40 分，车主手机必装第一省钱 App！',
    contactOrUrl: 'Gaspy App (iOS / Android)',
  },
  {
    id: 'dir-grocer',
    name: 'Grocer（超市实时比价）',
    category: '省钱与生活',
    taglineZh: '对比 PAK’nSAVE / Woolworths / New World 同款商品实时价格',
    detailZh: '新西兰食品通胀高，买菜前扫一眼 Grocer，轻松找出特价超市。',
    contactOrUrl: 'grocer.nz',
  },
  {
    id: 'dir-trademe',
    name: 'Trade Me（新西兰万能交易平台）',
    category: '省钱与生活',
    taglineZh: '二手家具、买车、租房、买房、找工作全覆盖',
    detailZh: '相当于新西兰版“闲鱼+贝壳+瓜子+智联”，学会看卖家评分与 Ping 担保支付可大幅避坑。',
    contactOrUrl: 'trademe.co.nz',
  },
  {
    id: 'dir-powerswitch',
    name: 'Powerswitch（官方公益水电网比价）',
    category: '省钱与生活',
    taglineZh: '由 Consumer NZ 运营的独立电力、燃气与宽带比价工具',
    detailZh: '每年冬前比一次电价方案（如免费夜电/周末免费时段），一年能省数百纽币。',
    contactOrUrl: 'powerswitch.org.nz',
  },
  {
    id: 'dir-metservice',
    name: 'MetService & GeoNet',
    category: '出行与户外',
    taglineZh: '权威天气/紫外线 UV 预警 + 实时地震火山监测',
    detailZh: '出门先看 MetService 的紫外线涂防晒时段；震感发生后打开 GeoNet 看震级与海啸提醒。',
    contactOrUrl: 'metservice.com / geonet.org.nz',
  },
  {
    id: 'dir-planmywalk',
    name: 'Plan My Walk（山野安全官方 App）',
    category: '出行与户外',
    taglineZh: '新西兰山地安全委员会出品，徒步必备保命工具',
    detailZh: '查询 DOC 步道天气、塌方封路警报、装备清单，并自动把行程分享给紧急联系人。',
    contactOrUrl: 'planmywalk.nz',
  },
  {
    id: 'dir-seek',
    name: 'SEEK / Trade Me Jobs / LinkedIn / jobs.govt.nz',
    category: '求职与社交',
    taglineZh: '新西兰四大核心真实求职渠道',
    detailZh: '白领与科技首选 SEEK 与 LinkedIn，技工与中小企多看 Trade Me Jobs，公务员与公立机构直投 jobs.govt.nz。',
    contactOrUrl: 'seek.co.nz / jobs.govt.nz',
  },
  {
    id: 'dir-neighbourly',
    name: 'Neighbourly / Meetup / Eventfinda',
    category: '求职与社交',
    taglineZh: '融入本地社区、结识邻居与同好俱乐部的三大入口',
    detailZh: '实名制邻里社区 Neighbourly 适合打听治安与推荐靠谱水电工；Meetup 则是徒步/球类/科技沙龙交友利器。',
    contactOrUrl: 'neighbourly.co.nz / meetup.com',
  },
];
