import type { RoadCodeQuestion } from '../../types';

export const ROAD_CODE_QUESTIONS: RoadCodeQuestion[] = [
  {
    id: 'rc-1',
    category: '2026新规',
    isNew2026: true,
    question: {
      zh: '【2026年10月新规】超越同向骑行者、骑马者或行人时，法规要求的最小横向安全间距是多少？',
      en: '[Oct 2026 Rule] What is the minimum safe passing gap when overtaking a cyclist, horse rider, or pedestrian?',
    },
    options: [
      { id: 'a', text: { zh: '至少 1.0 米', en: 'At least 1.0 metre' } },
      { id: 'b', text: { zh: '至少 1.5 米', en: 'At least 1.5 metres' } },
      { id: 'c', text: { zh: '至少 2.5 米', en: 'At least 2.5 metres' } },
      { id: 'd', text: { zh: '无具体数值要求', en: 'No fixed minimum distance' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '2026年10月1日起，新西兰新交规规定超越同向骑行者、骑马者或行人必须留出至少 1.5 米安全间距。',
      en: 'From 1 October 2026, drivers must leave at least a 1.5-metre gap when passing cyclists, horse riders, or pedestrians.',
    },
  },
  {
    id: 'rc-2',
    category: '2026新规',
    isNew2026: true,
    question: {
      zh: '【2026年10月新规】在限速 60 km/h 或以下的道路上，前方公交车打灯准备从车站驶出，你必须怎么做？',
      en: '[Oct 2026 Rule] On a road of 60 km/h or less, a bus signals to pull out from a bus stop. What must you do?',
    },
    options: [
      { id: 'a', text: { zh: '正常直行，公交车应等待主路清空', en: 'Continue driving; the bus must wait' } },
      { id: 'b', text: { zh: '必须减速让行（Give Way），让公交车安全汇入', en: 'Slow down and give way so the bus can pull out safely' } },
      { id: 'c', text: { zh: '仅早晚高峰让行', en: 'Only give way during rush hour' } },
      { id: 'd', text: { zh: '鸣笛提示后加速超过', en: 'Honk and accelerate past' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '2026年10月新规强制要求：限速 60 km/h 及以下道路，车辆必须让行从公交站、路边或公交道驶出的公交车。',
      en: 'Drivers must give way to buses pulling out on roads with a speed limit of 60 km/h or less.',
    },
  },
  {
    id: 'rc-3',
    category: '2026新规',
    isNew2026: true,
    question: {
      zh: '【2026年10月新规】关于儿童人行道骑车与电动滑板车（E-scooter），哪项正确？',
      en: '[Oct 2026 Rule] Which statement about footpath cycling and e-scooters is correct?',
    },
    options: [
      { id: 'a', text: { zh: '12 岁及以下儿童（及陪同家长）可在人行道骑车，电动滑板车允许驶入自行车道', en: 'Children 12 and under (and accompanying parents) may cycle on footpaths; e-scooters are allowed in cycle lanes' } },
      { id: 'b', text: { zh: '任何年龄均禁止在人行道骑车', en: 'Cycling on footpaths is banned for all ages' } },
      { id: 'c', text: { zh: '电动滑板车严禁进入自行车道', en: 'E-scooters are banned from cycle lanes' } },
      { id: 'd', text: { zh: '成年人可自由在人行道高速骑行', en: 'Adults may freely cycle fast on footpaths' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: '2026年10月交规允许 12 岁及以下儿童与陪同家长在人行道骑车，并正式允许电动滑板车使用自行车道。',
      en: 'Children aged 12 and under (with caregivers) may ride on footpaths, and e-scooters are permitted in cycle lanes.',
    },
  },
  {
    id: 'rc-4',
    category: '驾照与养车',
    isNew2026: true,
    question: {
      zh: '【2026年11月新规】2026 年 11 月 1 日及之后抵达新西兰，有效海外驾照最长可使用多久？',
      en: '[Nov 2026 Rule] Arriving on or after 1 Nov 2026, how long can you drive on a valid overseas licence?',
    },
    options: [
      { id: 'a', text: { zh: '6 个月', en: '6 months' } },
      { id: 'b', text: { zh: '连续 12 个月', en: 'Up to 12 continuous months' } },
      { id: 'c', text: { zh: '18 个月', en: '18 months' } },
      { id: 'd', text: { zh: '无限期直到原驾照过期', en: 'Until the overseas licence expires' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '2026年11月1日起新入境者恢复为连续 12 个月有效期（18 个月过渡期仅适用于 2024.11–2026.10 入境者）。',
      en: 'From 1 November 2026, new arrivals return to the 12-month overseas licence limit.',
    },
  },
  {
    id: 'rc-5',
    category: '让路原则',
    question: {
      zh: '无红绿灯十字路口，你准备左转，对向来车准备右转进入同一条道路，谁必须让行？',
      en: 'At an uncontrolled intersection, you turn LEFT while an oncoming car turns RIGHT into the same road. Who gives way?',
    },
    options: [
      { id: 'a', text: { zh: '右转车辆必须让左转车辆', en: 'The right-turning vehicle gives way to the left-turning vehicle' } },
      { id: 'b', text: { zh: '左转车辆必须让右转车辆', en: 'The left-turning vehicle gives way' } },
      { id: 'c', text: { zh: '车速快的先过', en: 'Faster vehicle goes first' } },
      { id: 'd', text: { zh: '大型车辆优先', en: 'Larger vehicle goes first' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: '新西兰靠左行驶，右转是大转弯要横穿对向车流，因此“转弯让直行，右转让左转”。',
      en: 'Right-turning vehicles cross oncoming lanes, so they must give way to oncoming vehicles going straight or turning left.',
    },
  },
  {
    id: 'rc-6',
    category: '让路原则',
    question: {
      zh: '无标志 T 字路口，你在尽头断头支路准备左转，主路上有车直行。谁有优先权？',
      en: 'At an unmarked T-intersection, you are on the bottom road turning left while a car drives along the top road. Who goes first?',
    },
    options: [
      { id: 'a', text: { zh: '主路（Top of the T）车辆优先，支路必须让行', en: 'Top of the T goes first; terminating road must give way' } },
      { id: 'b', text: { zh: '左转车辆优先', en: 'Left-turning vehicle goes first' } },
      { id: 'c', text: { zh: '先到先走', en: 'First to arrive goes first' } },
      { id: 'd', text: { zh: '交替通行', en: 'Alternate one by one' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: '铁律："Top of the T goes before me." 断头支路无论左转右转，必须让主路上所有车辆。',
      en: 'Traffic on the terminating road must give way to all traffic on the continuing top road.',
    },
  },
  {
    id: 'rc-7',
    category: '环岛与标志',
    question: {
      zh: '进入新西兰环岛（Roundabout）应往哪边绕行，并让行哪侧来车？',
      en: 'Which direction do NZ roundabouts flow, and who must you give way to on entry?',
    },
    options: [
      { id: 'a', text: { zh: '逆时针绕行，让左侧来车', en: 'Anticlockwise; give way to left' } },
      { id: 'b', text: { zh: '顺时针绕行，让所有右方来车', en: 'Clockwise; give way to all traffic coming from your right' } },
      { id: 'c', text: { zh: '顺时针绕行，只需让内圈车', en: 'Clockwise; inner lane only' } },
      { id: 'd', text: { zh: '谁先按喇叭谁先进', en: 'Whoever honks first' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '新西兰环岛一律顺时针绕行，进入前看右方并让行所有右侧来车。',
      en: 'Drive clockwise and give way to all vehicles approaching from your right.',
    },
  },
  {
    id: 'rc-8',
    category: '环岛与标志',
    question: {
      zh: '在环岛准备直行（从对面出口驶出），正确的打灯方式是什么？',
      en: 'How must you signal when going STRAIGHT through a roundabout?',
    },
    options: [
      { id: 'a', text: { zh: '全程不打灯', en: 'No signal at all' } },
      { id: 'b', text: { zh: '进环岛不打灯，经过前一个出口后立刻打左灯驶出', en: 'No signal on entry, then signal LEFT as you pass the exit before yours' } },
      { id: 'c', text: { zh: '进环岛打右灯，出环岛打左灯', en: 'Signal right on entry, left on exit' } },
      { id: 'd', text: { zh: '进环岛前打左灯', en: 'Signal left before entering' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '路考高频扣分点：直行进环岛不打灯，但驶出环岛前必须打左转向灯！',
      en: 'Do not signal on entry when going straight, but you must signal LEFT before exiting.',
    },
  },
  {
    id: 'rc-9',
    category: '环岛与标志',
    question: {
      zh: '路中央白色斜线阴影带（Flush Median）的合法用途是什么？',
      en: 'What is the legal purpose of a central Flush Median?',
    },
    options: [
      { id: 'a', text: { zh: '作为临时缓冲区域等待右转，或右转并入主路时分段汇入', en: 'Wait safely to turn right, or merge in two stages onto a busy road' } },
      { id: 'b', text: { zh: '用作超车道长距离行驶', en: 'Use as an overtaking lane' } },
      { id: 'c', text: { zh: '绝对禁止车轮压入', en: 'Strictly illegal to enter' } },
      { id: 'd', text: { zh: '免费夜间停车区', en: 'Free overnight parking' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: '善用 Flush Median 可安全右转不堵后车，也能分段并入繁忙主路，但严禁当作行车道或超车道。',
      en: 'Use it as a right-turn waiting or merging refuge—never as a driving or overtaking lane.',
    },
  },
  {
    id: 'rc-10',
    category: '环岛与标志',
    question: {
      zh: '单车道桥标志上，指向你方向的是红色小箭头、指向对面的是大箭头，表示什么？',
      en: 'At a one-lane bridge, a small red arrow points in your direction. What does it mean?',
    },
    options: [
      { id: 'a', text: { zh: '你拥有优先权', en: 'You have priority' } },
      { id: 'b', text: { zh: '你必须停车让行对面来车', en: 'You must give way to oncoming vehicles' } },
      { id: 'c', text: { zh: '限速 20 km/h', en: '20 km/h speed limit' } },
      { id: 'd', text: { zh: '卡车禁行', en: 'No trucks allowed' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '口诀：红小让，大箭头先走！看到红色小箭头指向自己，务必先礼让对面车辆过桥。',
      en: 'The small red arrow means you must give way to oncoming traffic.',
    },
  },
  {
    id: 'rc-11',
    category: '超车与车速',
    question: {
      zh: '经过停靠上下学生的校车（School Bus）时，双向来车最高法定限速是多少？',
      en: 'What is the maximum legal speed when passing a stationary school bus (in either direction)?',
    },
    options: [
      { id: 'a', text: { zh: '20 km/h', en: '20 km/h' } },
      { id: 'b', text: { zh: '30 km/h', en: '30 km/h' } },
      { id: 'c', text: { zh: '40 km/h', en: '40 km/h' } },
      { id: 'd', text: { zh: '50 km/h', en: '50 km/h' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: '牢记 20 km/h！哪怕在 100 km/h 乡村公路上，只要校车停着上下孩子，双向车速必须降至 20 km/h 以下。',
      en: 'Always slow to 20 km/h or less in both directions when passing a stopped school bus.',
    },
  },
  {
    id: 'rc-12',
    category: '超车与车速',
    isNew2026: true,
    question: {
      zh: '新西兰城区学校门前上下学接送时段（Variable School Zone），标准可变限速通常是？',
      en: 'What is the standard urban variable school zone speed limit during drop-off and pick-up?',
    },
    options: [
      { id: 'a', text: { zh: '30 km/h', en: '30 km/h' } },
      { id: 'b', text: { zh: '50 km/h', en: '50 km/h' } },
      { id: 'c', text: { zh: '60 km/h', en: '60 km/h' } },
      { id: 'd', text: { zh: '15 km/h', en: '15 km/h' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: '城区学校接送时段限速降至 30 km/h（乡村学校路段 60 km/h 或以下），注意电子闪烁限速牌。',
      en: 'Urban school zones drop to 30 km/h during peak school drop-off and pick-up windows.',
    },
  },
  {
    id: 'rc-13',
    category: '驾照与养车',
    isNew2026: true,
    question: {
      zh: '在新西兰开纯电汽车（EV）或插电混动（PHEV），除了 WOF 和 Rego 外还须按里程买什么？',
      en: 'Besides WOF and Rego, what distance charge must EV and PHEV owners pay in NZ?',
    },
    options: [
      { id: 'a', text: { zh: '电车完全免费', en: 'Nothing, EVs are exempt' } },
      { id: 'b', text: { zh: 'RUC 道路使用费（纯电 $76/1,000km，插混 $38/1,000km）', en: 'RUC: $76 per 1,000 km for EVs, $38 per 1,000 km for PHEVs' } },
      { id: 'c', text: { zh: '每年 $500 电池税', en: '$500 annual battery tax' } },
      { id: 'd', text: { zh: '仅奥克兰需要交', en: 'Only in Auckland' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '柴油车、纯电 EV（$76/1000km）与插混 PHEV（$38/1000km）须提前购买 RUC 公里配额。',
      en: 'Light EVs ($76/1,000 km), PHEVs ($38/1,000 km), and diesel cars must prepay RUC.',
    },
  },
  {
    id: 'rc-14',
    category: '让路原则',
    question: {
      zh: '遇到红色八角形 STOP 标志，即使四周空无一车，你必须怎么做？',
      en: 'At a red STOP sign with no traffic anywhere, what must you do?',
    },
    options: [
      { id: 'a', text: { zh: '减速慢滑过去即可', en: 'Roll slowly through' } },
      { id: 'b', text: { zh: '车辆必须完全静止停稳，确认安全后再起步', en: 'Come to a complete stop (wheels stationary), check all ways, then go' } },
      { id: 'c', text: { zh: '右侧无车可不停', en: 'No stop needed if right is clear' } },
      { id: 'd', text: { zh: '按喇叭后直行', en: 'Honk and proceed' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '路考“一票否决”头号错误：遇到 STOP 必须彻底刹停静止，绝不可滑行！',
      en: 'A rolling stop is an immediate test fail and fine; wheels must stop completely.',
    },
  },
  {
    id: 'rc-15',
    category: '环岛与标志',
    question: {
      zh: '路边画有黄色虚线（Broken Yellow Lines），代表什么含义？',
      en: 'What do broken yellow lines along the kerb mean?',
    },
    options: [
      { id: 'a', text: { zh: '可短停 5 分钟上下客', en: '5-minute drop-off zone' } },
      { id: 'b', text: { zh: '任何时候都严禁停车或临停', en: 'No stopping or parking at any time' } },
      { id: 'c', text: { zh: '周末可免费停', en: 'Free on weekends' } },
      { id: 'd', text: { zh: '货车装卸区', en: 'Loading zone' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '黄色虚线代表全天候严禁停车（打双闪等人也不行），极易吃罚单甚至被拖车。',
      en: 'Broken yellow lines mean strictly no stopping at any time.',
    },
  },
  {
    id: 'rc-16',
    category: '驾照与养车',
    question: {
      zh: '关于新西兰汽车保险与 ACC 的关系，以下哪项正确？',
      en: 'Which statement about NZ car insurance and ACC is true?',
    },
    options: [
      { id: 'a', text: { zh: 'ACC 只赔人身伤害不赔车损；车险虽非法定强制，但至少应买第三方险（Third Party）', en: 'ACC covers injury ONLY, not cars; car insurance is not compulsory by law yet Third Party is essential' } },
      { id: 'b', text: { zh: 'ACC 同时赔付撞坏的第三方车辆', en: 'ACC pays for damaged third-party cars too' } },
      { id: 'c', text: { zh: '不买车险无法做 WOF', en: 'You cannot pass WOF without car insurance' } },
      { id: 'd', text: { zh: '只有新车需要买保险', en: 'Only new cars need insurance' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: 'ACC 只赔伤人不赔车和财产！裸奔开车万一全责撞到豪车或电线杆可能背上巨额债务。',
      en: 'ACC covers personal injury only—always hold at least Third Party car insurance.',
    },
  },
  {
    id: 'rc-17',
    category: '超车与车速',
    question: {
      zh: '晴天干燥路面 vs 雨天湿滑路面的推荐安全跟车时距分别是几秒？',
      en: 'What is the recommended minimum following distance in dry vs wet/poor weather?',
    },
    options: [
      { id: 'a', text: { zh: '干燥 2 秒，雨天/湿滑 4 秒', en: '2 seconds dry, 4 seconds wet/poor conditions' } },
      { id: 'b', text: { zh: '干燥 1 秒，雨天 2 秒', en: '1 second dry, 2 seconds wet' } },
      { id: 'c', text: { zh: '始终保持 1 个车身距离', en: 'Always 1 car length' } },
      { id: 'd', text: { zh: '干燥 5 秒，雨天 8 秒', en: '5 seconds dry, 8 seconds wet' } },
    ],
    correctOptionId: 'a',
    explanation: {
      zh: '遵循 2 秒法则（晴天干燥）与 4 秒法则（雨天、砂石路、夜间或拉拖车）。',
      en: 'Use the 2-second rule in dry conditions and double it to 4 seconds in wet or poor conditions.',
    },
  },
  {
    id: 'rc-18',
    category: '让路原则',
    question: {
      zh: '遇到没有中央安全岛的斑马线，行人正从对面踏上斑马线，你应该？',
      en: 'A pedestrian steps onto the far side of an undivided zebra crossing. What must you do?',
    },
    options: [
      { id: 'a', text: { zh: '还没走到我这半边可以直接开过', en: 'Drive past before they reach your half' } },
      { id: 'b', text: { zh: '停车并等待行人完全通过整条斑马线', en: 'Stop and wait until they have fully crossed the entire crossing' } },
      { id: 'c', text: { zh: '绕到行人身后开过', en: 'Steer behind them' } },
      { id: 'd', text: { zh: '闪灯示意快走', en: 'Flash lights to hurry them' } },
    ],
    correctOptionId: 'b',
    explanation: {
      zh: '无中央安全岛时须让行整条斑马线上的行人；有中央安全岛时只需让行你这一侧半幅路面的行人。',
      en: 'On an undivided zebra crossing, wait for pedestrians on any part of the crossing.',
    },
  },
];
