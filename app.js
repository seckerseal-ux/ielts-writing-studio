const phraseBank = [
  {
    id: "p1",
    task: "task1",
    category: "开头改写",
    title: "客观改写题目",
    structure: "The chart illustrates how ... over the period from ... to ... .",
    example: "The line graph illustrates how household recycling rates changed in three cities between 2000 and 2020.",
    tips: ["开头只做题目改写，不评论。", "优先替换 shows 为 illustrates, compares, presents。"],
  },
  {
    id: "p2",
    task: "task1",
    category: "总览",
    title: "先给整体趋势",
    structure: "Overall, it is clear that ... while ... .",
    example: "Overall, it is clear that all four categories rose, while online sales grew the fastest.",
    tips: ["overview 先写总趋势。", "再点最显眼的对比或极值。"],
  },
  {
    id: "p3",
    task: "task1",
    category: "总览",
    title: "先抓最高和最低",
    structure: "Overall, ... remained the highest, whereas ... was consistently the lowest.",
    example: "Overall, car use remained the highest, whereas bicycle commuting was consistently the lowest in the first year.",
    tips: ["适合柱图、饼图、表格题。", "帮助你快速完成 overview。"],
  },
  {
    id: "p4",
    task: "task1",
    category: "比较",
    title: "横向比较",
    structure: "By contrast, A stood at ... , whereas B was only ... .",
    example: "By contrast, car use stood at 48%, whereas bicycle commuting was only 12%.",
    tips: ["比较句比流水账更容易得分。", "多用 whereas, by contrast, compared with。"],
  },
  {
    id: "p5",
    task: "task1",
    category: "比较",
    title: "分组推进细节段",
    structure: "Turning to ... , the figure for A was slightly higher than that for B.",
    example: "Turning to bus travel, the figure for City B was slightly higher than that for City A in 2000.",
    tips: ["Task 1 主体段很适合分组写。", "Turning to... 能自然切段。"],
  },
  {
    id: "p6",
    task: "task1",
    category: "趋势",
    title: "描述稳步变化",
    structure: "The figure rose steadily from ... to ... before leveling off at ... .",
    example: "The figure rose steadily from 12% to 38% before leveling off at around 40%.",
    tips: ["适合 line graph。", "注意 from...to...before... 链条。"],
  },
  {
    id: "p7",
    task: "task1",
    category: "趋势",
    title: "描述波动后回升",
    structure: "After fluctuating for several years, the number recovered to ... by the end of the period.",
    example: "After fluctuating for several years, the number recovered to 72,000 by the end of the period.",
    tips: ["fluctuate 是高频趋势词。", "适合先降后升或上下波动的题。"],
  },
  {
    id: "p8",
    task: "task1",
    category: "趋势",
    title: "描述基本稳定",
    structure: "By comparison, the figure for ... remained relatively stable throughout the period.",
    example: "By comparison, the figure for rail travel remained relatively stable throughout the period.",
    tips: ["稳定类表达常被忽略。", "stable / unchanged / constant 可轮换。"],
  },
  {
    id: "p9",
    task: "task1",
    category: "过程图",
    title: "过程起点",
    structure: "At the initial stage, ... is/are first ... .",
    example: "At the initial stage, used bottles are first collected and sorted by type.",
    tips: ["过程图优先用被动语态。", "first 能帮你起步很稳。"],
  },
  {
    id: "p10",
    task: "task1",
    category: "过程图",
    title: "过程衔接",
    structure: "This is followed by ... , after which ... .",
    example: "This is followed by crushing, after which the material is heated to form pellets.",
    tips: ["避免每句都只用 then。", "after which 很像高分连接器。"],
  },
  {
    id: "p11",
    task: "task1",
    category: "过程图",
    title: "过程收尾",
    structure: "In the final stage, ... is used to produce ... .",
    example: "In the final stage, the recycled material is used to produce a range of new items.",
    tips: ["结尾常对应最终用途。", "process 图很适合 final stage 收束。"],
  },
  {
    id: "p12",
    task: "task1",
    category: "地图题",
    title: "空间替换描述",
    structure: "In the second map, the ... has been replaced by ... .",
    example: "In the second map, the farmland has been replaced by a residential area.",
    tips: ["地图题高频句。", "has been replaced by 很稳。"],
  },
  {
    id: "p13",
    task: "task1",
    category: "地图题",
    title: "新增设施描述",
    structure: "A new ... was added to the ... side of the area.",
    example: "A new car park was added to the western side of the area.",
    tips: ["加方位词会更像 Task 1 正式写法。", "north-western / southern 也很好用。"],
  },
  {
    id: "p14",
    task: "task2",
    category: "观点表达",
    title: "开头亮明立场",
    structure: "From my perspective, ... because ... .",
    example: "From my perspective, public transport should receive more investment because it benefits the wider community.",
    tips: ["Task 2 立场最好尽早可见。", "立场句后带一个简短理由更稳。"],
  },
  {
    id: "p15",
    task: "task2",
    category: "观点表达",
    title: "讨论双方后给态度",
    structure: "Although both views have merit, I would argue that ... .",
    example: "Although both views have merit, I would argue that children benefit more from guided free play than formal lessons.",
    tips: ["很适合 discuss both views。", "让步后立场会更自然。"],
  },
  {
    id: "p16",
    task: "task2",
    category: "主体展开",
    title: "主体段主题句",
    structure: "One compelling reason is that ... .",
    example: "One compelling reason is that reliable public transport reduces pressure on both roads and household budgets.",
    tips: ["主体段第一句要先立主论点。", "不要一上来就举例。"],
  },
  {
    id: "p17",
    task: "task2",
    category: "主体展开",
    title: "继续往下展开",
    structure: "This is particularly important because ... , which means that ... .",
    example: "This is particularly important because commuting costs can consume a large share of income, which means that affordable buses directly improve living standards.",
    tips: ["because + which means 很适合拉开层次。", "让论证从原因走向结果。"],
  },
  {
    id: "p18",
    task: "task2",
    category: "因果分析",
    title: "原因结果链",
    structure: "A key reason for this is that ... . As a result, ... .",
    example: "A key reason for this is that remote work saves travel time. As a result, employees can devote more energy to both work and family life.",
    tips: ["原因句后最好马上补 consequence。", "避免只说 because 却不展开。"],
  },
  {
    id: "p19",
    task: "task2",
    category: "举例论证",
    title: "给具体例子",
    structure: "A clear example of this can be seen in ... .",
    example: "A clear example of this can be seen in cities that introduced dedicated bus lanes and then recorded shorter commuting times.",
    tips: ["例子不必真实，但要具体。", "最好带结果而不只是场景。"],
  },
  {
    id: "p20",
    task: "task2",
    category: "让步转折",
    title: "先承认再转回主线",
    structure: "Admittedly, ... ; however, ... .",
    example: "Admittedly, online courses are flexible; however, they cannot fully replace face-to-face interaction.",
    tips: ["适合平衡型文章。", "让步后别忘了把立场拉回来。"],
  },
  {
    id: "p21",
    task: "task2",
    category: "反驳补强",
    title: "回应反方担忧",
    structure: "While this concern is understandable, it is less convincing when we consider ... .",
    example: "While this concern is understandable, it is less convincing when we consider the long-term benefits of preventive healthcare.",
    tips: ["很好用的 rebuttal 句。", "适合先让步再反驳。"],
  },
  {
    id: "p22",
    task: "task2",
    category: "问题解决",
    title: "提出解决方案",
    structure: "One practical solution would be to ... , so that ... .",
    example: "One practical solution would be to expand affordable housing schemes, so that young workers can live closer to city centres.",
    tips: ["solution 要可执行。", "so that 能自然写出目标。"],
  },
  {
    id: "p23",
    task: "task2",
    category: "结尾收束",
    title: "标准结尾句",
    structure: "In conclusion, ... , and therefore ... .",
    example: "In conclusion, governments should prioritise public transport, and therefore direct more funding towards efficient urban networks.",
    tips: ["结尾重申，不开新论点。", "用 therefore 做最后收束。"],
  },
  {
    id: "p24",
    task: "task2",
    category: "结尾收束",
    title: "更自然的总结段",
    structure: "Taking everything into account, I remain convinced that ... .",
    example: "Taking everything into account, I remain convinced that stricter regulation of advertising to children is justified.",
    tips: ["比 in conclusion 略自然一些。", "特别适合 agree/disagree。"],
  },
  {
    id: "p25",
    task: "task2",
    category: "金句表达",
    title: "拉长远视角",
    structure: "In the long run, ... is far more beneficial than ... .",
    example: "In the long run, investing in public health is far more beneficial than simply dealing with the consequences of preventable illness.",
    tips: ["很适合 policy 类题。", "能让论证看起来更成熟。"],
  },
  {
    id: "p26",
    task: "task2",
    category: "金句表达",
    title: "强调根本问题",
    structure: "... does not merely address the symptoms; it tackles the root cause of the issue.",
    example: "Affordable housing policy does not merely address the symptoms; it tackles the root cause of the issue.",
    tips: ["问题解决类很加分。", "比 solve the problem 更高级。"],
  },
  {
    id: "p27",
    task: "task2",
    category: "教育话题",
    title: "教育类常用句",
    structure: "Early schooling can help children build basic discipline and learning routines.",
    example: "Early schooling can help children build basic discipline and learning routines, especially when lessons remain age-appropriate.",
    tips: ["教育题高频角度。", "discipline 和 routine 很常用。"],
  },
  {
    id: "p28",
    task: "task2",
    category: "环境话题",
    title: "环境类常用句",
    structure: "Individual action matters, but large-scale environmental change usually depends on policy intervention.",
    example: "Individual action matters, but large-scale environmental change usually depends on policy intervention from governments and industries.",
    tips: ["环境题常见双边责任结构。", "policy intervention 很实用。"],
  },
  {
    id: "p29",
    task: "task2",
    category: "科技话题",
    title: "科技类常用句",
    structure: "Technology should be seen as a tool that enhances learning rather than a complete substitute for teachers.",
    example: "Technology should be seen as a tool that enhances learning rather than a complete substitute for teachers.",
    tips: ["教育 + 科技题都常见。", "enhance 比 improve 更书面。"],
  },
  {
    id: "p30",
    task: "task2",
    category: "政府社会",
    title: "政府责任表达",
    structure: "From a policy perspective, public money should be directed towards measures that benefit the widest group of people.",
    example: "From a policy perspective, public money should be directed towards measures that benefit the widest group of people.",
    tips: ["政府投资类题很好用。", "benefit the widest group 很稳。"],
  },
  {
    id: "p31",
    task: "task2",
    category: "健康与生活",
    title: "健康类常用句",
    structure: "Preventive measures are often more effective and less costly than dealing with the consequences later.",
    example: "Preventive measures are often more effective and less costly than dealing with the consequences of obesity later.",
    tips: ["健康政策题通用句。", "prevention over cure 很高频。"],
  },
  {
    id: "p32",
    task: "task2",
    category: "城市与工作",
    title: "城市与工作类常用句",
    structure: "Well-designed urban infrastructure can improve both productivity and quality of life.",
    example: "Well-designed urban infrastructure can improve both productivity and quality of life by reducing commuting stress.",
    tips: ["交通、城市、工作题都能用。", "quality of life 是高频词组。"],
  },
  {
    id: "p33",
    task: "task2",
    category: "媒体与文化",
    title: "媒体文化类常用句",
    structure: "Cultural traditions should be protected, but they also need to adapt to modern social realities.",
    example: "Cultural traditions should be protected, but they also need to adapt to modern social realities if they are to remain relevant.",
    tips: ["旅游、文化、全球化题适用。", "protect + adapt 形成平衡观点。"],
  },
  {
    id: "p34",
    exam: "kaoyan",
    task: "small",
    category: "应用文开头",
    title: "开门见山交代来意",
    structure: "I am writing this email/letter to invite you to ... / to express ... / to apply for ... .",
    example: "I am writing this email to invite you to deliver a short speech at our graduation forum next Friday.",
    tips: ["考研小作文开头别绕远路，先把来意亮出来。", "invite / express / apply / recommend 这些动词很常用。"],
  },
  {
    id: "p35",
    exam: "kaoyan",
    task: "small",
    category: "应用文请求",
    title: "礼貌提出请求",
    structure: "I would appreciate it if you could ... , as this would ... .",
    example: "I would appreciate it if you could confirm your availability, as this would help us finalize the schedule.",
    tips: ["小作文的礼貌感很重要，但别礼貌到把重点埋了。", "as this would... 可以顺手补一句理由。"],
  },
  {
    id: "p36",
    exam: "kaoyan",
    task: "small",
    category: "应用文结尾",
    title: "礼貌收束和等回复",
    structure: "Thank you for your time, and I look forward to hearing from you soon.",
    example: "Thank you for your time, and I look forward to hearing from you soon.",
    tips: ["小作文结尾不要突然失踪。", "look forward to hearing from you 是安全牌，但很好用。"],
  },
  {
    id: "p37",
    exam: "kaoyan",
    task: "large",
    category: "图画评论",
    title: "先点画面，再点寓意",
    structure: "The picture is both striking and thought-provoking, revealing that ... .",
    example: "The picture is both striking and thought-provoking, revealing that some people are more eager to record a problem than to solve it.",
    tips: ["考研大作文不是现场解说比赛。", "描述画面后要立刻拐去寓意和观点。"],
  },
  {
    id: "p38",
    exam: "kaoyan",
    task: "large",
    category: "图表评论",
    title: "把数据拉向观点",
    structure: "The chart reflects a noticeable trend: ... , which deserves serious attention.",
    example: "The chart reflects a noticeable trend: students are spending more time on short videos than on reading, which deserves serious attention.",
    tips: ["大作文里的图表别只报数，要点出现象。", "which deserves serious attention 很适合往评论走。"],
  },
  {
    id: "p39",
    exam: "kaoyan",
    task: "large",
    category: "结尾收束",
    title: "收回现实层面",
    structure: "What matters is not merely ... , but whether we can ... in real life.",
    example: "What matters is not merely recognizing the problem, but whether we can turn awareness into real action in daily life.",
    tips: ["考研大作文结尾很适合从抽象回到现实。", "not merely... but whether... 这类句子很有收束感。"],
  },
];

const blankExercises = [
  {
    id: "b1",
    task: "task1",
    title: "Task 1 开头改写",
    focus: "开头改写",
    prompt: "原题改写：The chart below shows the number of visitors to four museums between 2005 and 2015.",
    segments: ["The chart ", " the number of visitors to four museums between 2005 and 2015."],
    blanks: [{ answers: ["illustrates", "shows", "compares", "presents"], answerDisplay: "illustrates", hint: "图表动词" }],
    tip: "先练会改写题目，再去写数据细节。",
  },
  {
    id: "b2",
    task: "task1",
    title: "Task 1 总览句",
    focus: "总览",
    prompt: "概括最大变化：所有类别都上升，但线上销售增幅最大。",
    segments: ["Overall, it is clear that all categories ", ", while online sales ", " the fastest growth."],
    blanks: [
      { answers: ["rose", "increased", "grew"], answerDisplay: "rose", hint: "过去式增长动词" },
      { answers: ["experienced", "saw"], answerDisplay: "experienced", hint: "搭配 growth 的动词" },
    ],
    tip: "overview 先写全局，再点最显眼趋势。",
  },
  {
    id: "b3",
    task: "task1",
    title: "Task 1 比较句",
    focus: "比较",
    prompt: "对比 A 和 B 的数值差距。",
    segments: ["By contrast, car use stood at 48%, ", " bicycle commuting accounted for only 12%."],
    blanks: [{ answers: ["whereas", "while"], answerDisplay: "whereas", hint: "对照连接词" }],
    tip: "比较句能明显提升信息组织感。",
  },
  {
    id: "b4",
    task: "task1",
    title: "Task 1 趋势句",
    focus: "趋势",
    prompt: "描述数据先稳定上升，后趋于平稳。",
    segments: ["The figure rose ", " from 12% to 38% before ", " off at around 40%."],
    blanks: [
      { answers: ["steadily", "gradually"], answerDisplay: "steadily", hint: "副词" },
      { answers: ["leveling", "levelling"], answerDisplay: "leveling", hint: "动名词" },
    ],
    tip: "趋势题尽量把变化过程写完整。",
  },
  {
    id: "b5",
    task: "task1",
    title: "Task 1 过程图衔接",
    focus: "过程图",
    prompt: "用 after which 衔接两个步骤。",
    segments: ["This is followed by crushing, ", " the material is heated to form pellets."],
    blanks: [{ answers: ["after which"], answerDisplay: "after which", hint: "步骤连接" }],
    tip: "过程图别只用 then，可以多用 after which。",
  },
  {
    id: "b6",
    task: "task1",
    title: "Task 1 地图变化",
    focus: "地图题",
    prompt: "描述农田被住宅区取代。",
    segments: ["In the second map, the farmland has been ", " by a residential area."],
    blanks: [{ answers: ["replaced"], answerDisplay: "replaced", hint: "变化动词" }],
    tip: "地图题常用 replaced by / converted into。",
  },
  {
    id: "b7",
    task: "task2",
    title: "Task 2 立场句",
    focus: "观点表达",
    prompt: "表达你支持公共交通投资的立场。",
    segments: ["From my perspective, public transport should receive more investment ", " it benefits the wider community."],
    blanks: [{ answers: ["because", "as"], answerDisplay: "because", hint: "原因连接词" }],
    tip: "立场句最好带一个简单理由。",
  },
  {
    id: "b8",
    task: "task2",
    title: "Task 2 主体段主题句",
    focus: "主体展开",
    prompt: "用更正式的方式写主体段第一句。",
    segments: ["One ", " reason is that reliable public transport reduces pressure on both roads and household budgets."],
    blanks: [{ answers: ["compelling", "important", "key"], answerDisplay: "compelling", hint: "形容词" }],
    tip: "主体段先立主论点，再展开。",
  },
  {
    id: "b9",
    task: "task2",
    title: "Task 2 因果链",
    focus: "因果分析",
    prompt: "把原因推进到结果。",
    segments: ["This is particularly important because commuting costs can consume a large share of income, ", " means that affordable buses directly improve living standards."],
    blanks: [{ answers: ["which"], answerDisplay: "which", hint: "关系代词" }],
    tip: "because 后再补结果，段落会更扎实。",
  },
  {
    id: "b10",
    task: "task2",
    title: "Task 2 举例句",
    focus: "举例论证",
    prompt: "引出一个更书面的例子。",
    segments: ["A clear example of this can be ", " in cities that introduced dedicated bus lanes."],
    blanks: [{ answers: ["seen", "found"], answerDisplay: "seen", hint: "过去分词" }],
    tip: "be seen in 是很稳的书面表达。",
  },
  {
    id: "b11",
    task: "task2",
    title: "Task 2 让步反驳",
    focus: "让步转折",
    prompt: "先承认担忧合理，再回到主线。",
    segments: ["While this concern is understandable, it is less convincing ", " we consider the long-term benefits of preventive healthcare."],
    blanks: [{ answers: ["when"], answerDisplay: "when", hint: "从句连接词" }],
    tip: "让步后一定要有反驳，不要只停在承认。",
  },
  {
    id: "b12",
    task: "task2",
    title: "Task 2 解决方案",
    focus: "问题解决",
    prompt: "提出可执行的解决方案。",
    segments: ["One practical solution would be to expand affordable housing schemes, ", " that young workers can live closer to city centres."],
    blanks: [{ answers: ["so"], answerDisplay: "so", hint: "目的连接" }],
    tip: "solution 句最好带出预期结果。",
  },
  {
    id: "b13",
    task: "task2",
    title: "Task 2 金句",
    focus: "金句表达",
    prompt: "强调处理的是根本问题而不是表面现象。",
    segments: ["This policy does not merely address the symptoms; it tackles the ", " cause of the issue."],
    blanks: [{ answers: ["root"], answerDisplay: "root", hint: "搭配词" }],
    tip: "root cause 是问题解决类高频表达。",
  },
  {
    id: "b14",
    task: "task2",
    title: "Task 2 结尾收束",
    focus: "结尾收束",
    prompt: "用更自然的方式写结尾。",
    segments: ["Taking everything into account, I remain ", " that stricter regulation of advertising to children is justified."],
    blanks: [{ answers: ["convinced"], answerDisplay: "convinced", hint: "过去分词" }],
    tip: "结尾句重点是稳定态度，不再加新内容。",
  },
  {
    id: "bk1",
    exam: "kaoyan",
    task: "small",
    title: "考研小作文：开头交代来意",
    focus: "应用文开头",
    prompt: "用最稳的方式写邀请邮件开头。",
    segments: ["I am writing this email to ", " you to attend our campus culture festival next Friday."],
    blanks: [{ answers: ["invite"], answerDisplay: "invite", hint: "核心动词" }],
    tip: "开头先说人话：我写这封信就是为了什么。",
  },
  {
    id: "bk2",
    exam: "kaoyan",
    task: "small",
    title: "考研小作文：礼貌请求",
    focus: "应用文请求",
    prompt: "礼貌地请对方确认时间。",
    segments: ["I would appreciate it if you could ", " your availability at your earliest convenience."],
    blanks: [{ answers: ["confirm"], answerDisplay: "confirm", hint: "确认动词" }],
    tip: "小作文的礼貌像盐，得有，但别一把倒进锅里。",
  },
  {
    id: "bk3",
    exam: "kaoyan",
    task: "small",
    title: "考研小作文：结尾收束",
    focus: "应用文结尾",
    prompt: "用礼貌但不拖沓的方式等回复。",
    segments: ["Thank you for your time, and I look forward to ", " from you soon."],
    blanks: [{ answers: ["hearing"], answerDisplay: "hearing", hint: "动名词" }],
    tip: "结尾别突然消失，给对方一个体面的下车点。",
  },
  {
    id: "bk4",
    exam: "kaoyan",
    task: "large",
    title: "考研大作文：图画评论",
    focus: "图画评论",
    prompt: "把画面描述拉向寓意。",
    segments: ["The picture is both striking and thought-provoking, ", " that some people prefer recording a problem to solving it."],
    blanks: [{ answers: ["revealing", "showing"], answerDisplay: "revealing", hint: "现在分词" }],
    tip: "考研大作文不是 CCTV 直播，请尽快进入评论模式。",
  },
  {
    id: "bk5",
    exam: "kaoyan",
    task: "large",
    title: "考研大作文：图表评论",
    focus: "图表评论",
    prompt: "把数据趋势写成一句评论。",
    segments: ["The chart reflects a noticeable trend, ", " deserves serious attention."],
    blanks: [{ answers: ["which"], answerDisplay: "which", hint: "关系代词" }],
    tip: "数据写完不点评，就像饭做好不端上桌。",
  },
];

const paragraphPrompts = [
  {
    id: "para1",
    task: "task1",
    type: "overview",
    title: "Task 1 Overview：新能源占比",
    prompt: "The line graph compares the share of electricity generated from wind and solar energy in France and Germany from 2000 to 2020.",
    source: "Cambridge-style 改写题",
    notes: ["France wind: 5% -> 28%", "France solar: 1% -> 18%", "Germany wind: 8% -> 24%", "Germany solar: 0% -> 21%"],
    targetWords: [50, 90],
    checklist: ["先概括总趋势", "至少提一个最高或变化最快项", "不要出现个人观点"],
    keywords: ["wind", "solar", "france", "germany", "increase", "overall"],
    categories: ["总览", "比较", "趋势"],
  },
  {
    id: "para2",
    task: "task1",
    type: "detail",
    title: "Task 1 细节段：通勤方式",
    prompt: "The bar chart compares how commuters in two cities travelled by car, bus and bicycle in 2000 and 2020.",
    source: "Cambridge-style 改写题",
    notes: ["City A: car 52% -> 40%, bus 28% -> 25%, bicycle 20% -> 35%", "City B: car 46% -> 50%, bus 34% -> 24%, bicycle 20% -> 26%"],
    targetWords: [60, 100],
    checklist: ["分组写两座城市", "用至少一个 whereas / by contrast", "指出最明显变化"],
    keywords: ["car", "bus", "bicycle", "city", "2020", "2000"],
    categories: ["比较", "趋势"],
  },
  {
    id: "para3",
    task: "task1",
    type: "detail",
    title: "Task 1 细节段：家庭支出表格",
    prompt: "The table compares the proportion of household spending devoted to food, housing, transport and leisure in three countries in 2022.",
    source: "Cambridge-style 改写题",
    notes: ["Country A: housing highest at 34%", "Country B: food highest at 29%", "Country C: transport and leisure both relatively high"],
    targetWords: [60, 100],
    checklist: ["不要每一项都单独写一句", "尽量按相近项目分组", "至少点一个最高值"],
    keywords: ["household", "spending", "food", "housing", "transport", "leisure"],
    categories: ["比较", "总览"],
  },
  {
    id: "para4",
    task: "task1",
    type: "detail",
    title: "Task 1 过程段：塑料回收",
    prompt: "The diagram shows how used plastic bottles are recycled.",
    source: "Cambridge-style 改写题",
    notes: ["collection", "sorting by type", "crushing", "heating into pellets", "manufacturing new products"],
    targetWords: [70, 110],
    checklist: ["按顺序推进", "多用被动语态", "至少使用一个 after which / in the final stage"],
    keywords: ["plastic", "recycled", "sorting", "heated", "products", "stage"],
    categories: ["过程图"],
  },
  {
    id: "para5",
    task: "task1",
    type: "detail",
    title: "Task 1 地图段：海边小镇改造",
    prompt: "The maps show how a seaside town changed after the construction of a tourist centre.",
    source: "Cambridge-style 改写题",
    notes: ["farmland removed", "car park added", "main road extended", "hotel built near the coast"],
    targetWords: [70, 110],
    checklist: ["突出变化最大的两三处", "用 has been replaced by / was added", "带方位词更好"],
    keywords: ["maps", "town", "tourist centre", "replaced", "added", "road"],
    categories: ["地图题", "比较"],
  },
  {
    id: "para6",
    task: "task2",
    type: "body",
    title: "Task 2 主体段：教育",
    prompt: "Some people think children should begin formal education at a very early age, while others believe they should start school later. Discuss both views and give your own opinion.",
    source: "Cambridge-style 改写题",
    notes: ["早学角度：纪律、基础技能、规律作息", "晚学角度：情绪成熟、自由探索、压力更小", "建议写出自己的倾向"],
    targetWords: [90, 140],
    checklist: ["开头先写主论点", "至少展开一层原因", "最好给一个简短例子"],
    keywords: ["children", "formal education", "early age", "school", "later"],
    categories: ["观点表达", "主体展开", "教育话题"],
  },
  {
    id: "para7",
    task: "task2",
    type: "body",
    title: "Task 2 主体段：交通",
    prompt: "Some people think governments should spend more money on public transport, while others believe building more roads is a better solution to traffic congestion. Discuss both views and give your opinion.",
    source: "Cambridge-style 改写题",
    notes: ["公共交通角度：覆盖面、环保、长期成本更低", "修路角度：短期缓解、货运效率", "可重点比较长期效果"],
    targetWords: [90, 140],
    checklist: ["观点明确", "比较两种方案", "至少写一个 because / which means 结构"],
    keywords: ["governments", "public transport", "roads", "traffic congestion"],
    categories: ["观点表达", "因果分析", "城市与工作"],
  },
  {
    id: "para8",
    task: "task2",
    type: "body",
    title: "Task 2 主体段：科技与教育",
    prompt: "Many people believe that online learning can replace classroom teaching in the future. To what extent do you agree or disagree?",
    source: "Cambridge-style 改写题",
    notes: ["支持角度：灵活、覆盖更广、成本更低", "反对角度：互动、监督、社交功能难替代"],
    targetWords: [90, 140],
    checklist: ["开头先表明你同意到什么程度", "主体段不要只列优点", "最好写出限制条件"],
    keywords: ["online learning", "replace", "classroom", "future", "agree"],
    categories: ["观点表达", "科技话题", "反驳补强"],
  },
  {
    id: "para9",
    task: "task2",
    type: "body",
    title: "Task 2 主体段：环境责任",
    prompt: "Some people believe that protecting the environment is mainly the responsibility of governments rather than individuals. To what extent do you agree or disagree?",
    source: "Cambridge-style 改写题",
    notes: ["政府角度：法规、基础设施、产业转型", "个人角度：消费选择、日常习惯、社会压力"],
    targetWords: [90, 140],
    checklist: ["写清主线态度", "用 policy vs behaviour 做对比", "可以部分同意但不要摇摆"],
    keywords: ["environment", "governments", "individuals", "responsibility", "agree"],
    categories: ["观点表达", "环境话题", "反驳补强"],
  },
  {
    id: "para10",
    task: "task2",
    type: "body",
    title: "Task 2 主体段：住房问题解决",
    prompt: "In many cities, young people are finding it difficult to afford housing. What problems does this cause, and what solutions can be suggested?",
    source: "Cambridge-style 改写题",
    notes: ["问题：通勤更长、延迟成家、压力上升", "解决：补贴、保障房、增加供给、公共交通改善"],
    targetWords: [95, 145],
    checklist: ["先写一个核心问题或一个核心解决方案", "方案要具体可执行", "尽量写出结果"],
    keywords: ["cities", "young people", "housing", "problems", "solutions"],
    categories: ["问题解决", "城市与工作", "因果分析"],
  },
  {
    id: "para11",
    task: "task2",
    type: "conclusion",
    title: "Task 2 结尾段：公共健康",
    prompt: "Some people think that governments should tax sugary drinks to improve public health. To what extent do you agree or disagree?",
    source: "Cambridge-style 改写题",
    notes: ["可重申：税收有助于减少消费并为健康项目筹资", "也可承认：单靠税收不够，还要教育和监管"],
    targetWords: [45, 80],
    checklist: ["只重申，不开新论点", "尽量把态度写稳", "保持 concise"],
    keywords: ["governments", "tax", "sugary drinks", "public health", "agree"],
    categories: ["结尾收束", "健康与生活", "观点表达"],
  },
  {
    id: "paraK1",
    exam: "kaoyan",
    task: "small",
    type: "opening",
    title: "考研小作文开头：邀请校友分享经验",
    prompt: "Write an email to an alumnus, Mr. Zhang, inviting him to give a career-sharing talk to students in your department next Friday evening.",
    source: "考研英语应用文风格题",
    notes: ["交代写信目的", "说明活动时间", "语气要礼貌但别拖泥带水"],
    targetWords: [60, 100],
    checklist: ["开头要有称呼", "第一段先说 why you are writing", "尽量把邀请说得具体一点"],
    keywords: ["email", "invite", "career-sharing talk", "department", "next Friday"],
    categories: ["应用文", "邀请", "开头"],
    ideaHints: ["第一句先把写信目的亮出来，别先寒暄三圈。", "可以顺手补一句 why he is a good fit，比如 his experience would be inspiring to students."],
    exampleIdeas: ["例如，你可以说明这场分享会能帮助学生更早理解行业要求和职业选择。"],
  },
  {
    id: "paraK2",
    exam: "kaoyan",
    task: "small",
    type: "closing",
    title: "考研小作文结尾：通知与联系方式",
    prompt: "Write a notice to recruit volunteers for an international book fair on campus.",
    source: "考研英语应用文风格题",
    notes: ["说明 volunteers will do what", "写清报名方式", "结尾要利落"],
    targetWords: [60, 100],
    checklist: ["别漏了活动信息", "结尾最好给 contact method", "notice 的句子要短一点更稳"],
    keywords: ["notice", "recruit volunteers", "international book fair", "campus", "contact"],
    categories: ["应用文", "通知", "结尾"],
    ideaHints: ["正文最好直接列任务、时间和报名方式，不要写成长篇散文。", "结尾可以用 Please contact... / Sign up before... 这类很直给的句子。"],
    exampleIdeas: ["比如补一句 volunteers will help with registration, guidance and venue support，会显得信息更完整。"],
  },
  {
    id: "paraK3",
    exam: "kaoyan",
    task: "large",
    type: "analysis",
    title: "考研大作文主体段：图表分析",
    prompt: "The chart shows the daily time college students spend on smartphone entertainment and physical exercise from 2019 to 2025.",
    source: "考研英语大作文风格题",
    notes: ["smartphone entertainment time rose steadily", "exercise time dropped first and then recovered slightly", "main contrast is increasingly obvious"],
    targetWords: [90, 140],
    checklist: ["先抓最醒目的趋势", "不要只报数字", "最好写一句你对现象的理解"],
    keywords: ["chart", "college students", "smartphone", "exercise", "trend"],
    categories: ["图表作文", "趋势分析", "主体展开"],
    ideaHints: ["大作文别只当图表说明文写，后面最好接一句 what this trend says about student life。", "可以用 the widening gap / a worrying tendency 这类概括把数据拉向观点。"],
    exampleIdeas: ["例如，你可以指出 convenience and digital dependence may partly explain why leisure screen time keeps climbing."],
  },
  {
    id: "paraK4",
    exam: "kaoyan",
    task: "large",
    type: "comment",
    title: "考研大作文收束段：图画寓意",
    prompt: "The picture shows several people holding up their phones to record a fallen cyclist, while almost no one is trying to help.",
    source: "考研英语大作文风格题",
    notes: ["可以写 indifference, online performance, real responsibility", "最后要落回自己的判断"],
    targetWords: [80, 130],
    checklist: ["不要只描述画面", "至少点出寓意", "结尾尽量收回现实层面"],
    keywords: ["picture", "phones", "record", "fallen cyclist", "help", "responsibility"],
    categories: ["图画作文", "寓意评论", "结尾收束"],
    ideaHints: ["图画作文最怕只做现场播报，最好用一句话点出它在讽刺什么。", "可以写 technology is convenient, but it should not weaken basic human responsibility."],
    exampleIdeas: ["例如，你可以把 recording for attention 和 offering real help 直接对照起来，主线会更稳。"],
  },
];

const essayPrompts = [
  {
    id: "essay1",
    task: "task1",
    title: "线图：回收率变化",
    genre: "line graph",
    source: "Cambridge-style 改写题",
    prompt: "The line graph compares household recycling rates in three cities between 2000 and 2020.",
    details: ["City A: 18% -> 62%, increase was steady throughout", "City B: 35% -> 55%, rose slowly then plateaued after 2015", "City C: 12% -> 48%, sharp growth after 2010"],
    requirements: ["至少 150 词", "写 overview", "突出 major trends and comparisons"],
    keywords: ["recycling", "cities", "rates", "2000", "2020", "increase"],
    categories: ["总览", "比较", "趋势"],
    minimumWords: 150,
  },
  {
    id: "essay2",
    task: "task1",
    title: "柱图：通勤方式",
    genre: "bar chart",
    source: "Cambridge-style 改写题",
    prompt: "The bar chart compares the proportion of commuters using car, bus and bicycle in two cities in 2000 and 2020.",
    details: ["City A: car 52% -> 40%, bus 28% -> 25%, bicycle 20% -> 35%", "City B: car 46% -> 50%, bus 34% -> 24%, bicycle 20% -> 26%"],
    requirements: ["至少 150 词", "overview 必须出现", "适合分城市或分交通方式写"],
    keywords: ["commuters", "car", "bus", "bicycle", "cities", "2000", "2020"],
    categories: ["比较", "趋势"],
    minimumWords: 150,
  },
  {
    id: "essay3",
    task: "task1",
    title: "流程图：塑料回收",
    genre: "process diagram",
    source: "Cambridge-style 改写题",
    prompt: "The diagram shows how used plastic bottles are recycled.",
    details: ["collection", "sorting by type", "crushing", "heating and pellet production", "manufacturing new products"],
    requirements: ["至少 150 词", "按顺序写", "使用被动语态和顺序连接"],
    keywords: ["plastic bottles", "recycled", "sorting", "heating", "products", "process"],
    categories: ["过程图"],
    minimumWords: 150,
  },
  {
    id: "essay4",
    task: "task1",
    title: "地图：海边小镇改造",
    genre: "maps",
    source: "Cambridge-style 改写题",
    prompt: "The maps show how a seaside town changed after the construction of a tourist centre.",
    details: ["farmland removed", "car park added", "main road extended", "hotel built near the coast", "shops moved closer to the centre"],
    requirements: ["至少 150 词", "突出前后变化", "可以按区域分组写"],
    keywords: ["maps", "town", "tourist centre", "replaced", "added", "changed"],
    categories: ["地图题", "比较"],
    minimumWords: 150,
  },
  {
    id: "essay5",
    task: "task1",
    title: "表格：家庭支出结构",
    genre: "table",
    source: "Cambridge-style 改写题",
    prompt: "The table compares the proportion of household spending devoted to food, housing, transport and leisure in three countries in 2022.",
    details: ["Country A: housing highest at 34%", "Country B: food highest at 29%", "Country C: transport and leisure both comparatively high"],
    requirements: ["至少 150 词", "先概括 highest / lowest", "别把每个数字平铺直叙"],
    keywords: ["household", "spending", "food", "housing", "transport", "leisure"],
    categories: ["总览", "比较"],
    minimumWords: 150,
  },
  {
    id: "essay6",
    task: "task1",
    title: "饼图：能源来源变化",
    genre: "pie charts",
    source: "Cambridge-style 改写题",
    prompt: "The pie charts compare the main sources of energy in a country in 2000 and 2020.",
    details: ["Coal: 38% -> 20%", "Gas: 24% -> 28%", "Renewables: 12% -> 30%", "Nuclear: little change"],
    requirements: ["至少 150 词", "overview 要写出结构变化", "注意 biggest shift"],
    keywords: ["energy", "country", "2000", "2020", "renewables", "coal"],
    categories: ["总览", "比较", "趋势"],
    minimumWords: 150,
  },
  {
    id: "essay7",
    task: "task1",
    title: "线图：地铁客流一天内变化",
    genre: "line graph",
    source: "Cambridge-style 改写题",
    prompt: "The line graph shows the number of passengers using an underground station at different times of the day.",
    details: ["Morning peak at 8:00", "sharp drop after 9:00", "another rise in the evening", "lowest level in the late evening"],
    requirements: ["至少 150 词", "适合按时间段分组", "要点出 peak 和 lowest"],
    keywords: ["passengers", "underground station", "times", "day", "peak", "lowest"],
    categories: ["趋势", "比较"],
    minimumWords: 150,
  },
  {
    id: "essay8",
    task: "task1",
    title: "混合图：网购年龄差异",
    genre: "mixed charts",
    source: "Cambridge-style 改写题",
    prompt: "The charts compare online shopping frequency among different age groups and the most common payment methods used.",
    details: ["18-29 highest shopping frequency", "60+ lowest", "digital wallets rose strongly", "cash became rare"],
    requirements: ["至少 150 词", "先写总体特征", "按年龄和支付方式分两段较稳"],
    keywords: ["online shopping", "age groups", "payment methods", "frequency", "digital wallets"],
    categories: ["总览", "比较", "趋势"],
    minimumWords: 150,
  },
  {
    id: "essay9",
    task: "task2",
    title: "教育：是否应尽早入学",
    genre: "discuss both views",
    source: "Cambridge-style 改写题",
    prompt: "Some people think children should begin formal education at a very early age, while others believe they should start school later. Discuss both views and give your own opinion.",
    details: ["可比较 discipline vs emotional maturity", "要写自己的态度"],
    requirements: ["至少 250 词", "立场清晰", "每段展开一个主论点"],
    keywords: ["children", "formal education", "early age", "school", "later"],
    categories: ["观点表达", "主体展开", "教育话题"],
    minimumWords: 250,
  },
  {
    id: "essay10",
    task: "task2",
    title: "交通：公共交通还是修路",
    genre: "discuss both views",
    source: "Cambridge-style 改写题",
    prompt: "Some people think governments should spend more money on public transport, while others believe building more roads is a better solution to traffic congestion. Discuss both views and give your opinion.",
    details: ["比较 long-term efficiency, environmental impact, implementation speed"],
    requirements: ["至少 250 词", "最好有清晰比较标准", "结尾重申观点"],
    keywords: ["governments", "public transport", "roads", "traffic congestion"],
    categories: ["观点表达", "因果分析", "城市与工作"],
    minimumWords: 250,
  },
  {
    id: "essay11",
    task: "task2",
    title: "工作：远程办公是否更好",
    genre: "advantages disadvantages",
    source: "Cambridge-style 改写题",
    prompt: "Remote working is becoming increasingly common. Do the advantages of this trend outweigh the disadvantages?",
    details: ["可写 flexibility, lower commuting costs", "也可写 isolation, weaker team communication", "需要明确哪一边更强"],
    requirements: ["至少 250 词", "判断必须清楚", "每段围绕一个优势或劣势展开"],
    keywords: ["remote working", "advantages", "disadvantages", "common"],
    categories: ["观点表达", "城市与工作", "举例论证"],
    minimumWords: 250,
  },
  {
    id: "essay12",
    task: "task2",
    title: "环境：个人还是政府责任",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "Some people believe that protecting the environment is mainly the responsibility of governments rather than individuals. To what extent do you agree or disagree?",
    details: ["可写 policy power vs individual daily habits", "extent 题型可部分同意，但态度必须稳定清楚"],
    requirements: ["至少 250 词", "态度不要摇摆", "用例子说明责任边界"],
    keywords: ["environment", "governments", "individuals", "agree", "responsibility"],
    categories: ["观点表达", "环境话题", "反驳补强"],
    minimumWords: 250,
  },
  {
    id: "essay13",
    task: "task2",
    title: "住房：年轻人买不起房",
    genre: "problem and solution",
    source: "Cambridge-style 改写题",
    prompt: "In many cities, young people are finding it difficult to afford housing. What problems does this cause, and what solutions can be suggested?",
    details: ["问题：晚婚晚育、长距离通勤、心理压力", "解决：补贴、保障房、增加供给"],
    requirements: ["至少 250 词", "问题和解决都要覆盖", "solution 要具体"],
    keywords: ["cities", "young people", "afford housing", "problems", "solutions"],
    categories: ["问题解决", "因果分析", "城市与工作"],
    minimumWords: 250,
  },
  {
    id: "essay14",
    task: "task2",
    title: "科技：线上教学能否替代课堂",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "Many people believe that online learning can replace classroom teaching in the future. To what extent do you agree or disagree?",
    details: ["支持：灵活、覆盖面广、成本低", "反对：互动监督和社交训练难替代"],
    requirements: ["至少 250 词", "同意程度要明确", "不要只列优缺点而不判断"],
    keywords: ["online learning", "replace", "classroom teaching", "future", "agree"],
    categories: ["观点表达", "科技话题", "反驳补强"],
    minimumWords: 250,
  },
  {
    id: "essay15",
    task: "task2",
    title: "健康：含糖饮料是否应征税",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "Some people think that governments should tax sugary drinks to improve public health. To what extent do you agree or disagree?",
    details: ["支持：减少消费、筹集健康资金", "反对：对低收入群体压力更大、单一措施不够"],
    requirements: ["至少 250 词", "要评估政策效果", "最好承认局限但保持主线"],
    keywords: ["governments", "tax", "sugary drinks", "public health", "agree"],
    categories: ["观点表达", "健康与生活", "政府社会"],
    minimumWords: 250,
  },
  {
    id: "essay16",
    task: "task2",
    title: "广告：是否应限制面向儿童的广告",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "Advertising aimed at children should be strictly controlled. To what extent do you agree or disagree?",
    details: ["支持：儿童辨别力有限、影响消费习惯", "反对：家长责任和媒体素养也重要"],
    requirements: ["至少 250 词", "态度稳定", "可以写监管 + 家庭教育双轨"],
    keywords: ["advertising", "children", "strictly controlled", "agree", "consumer"],
    categories: ["观点表达", "媒体与文化", "政府社会"],
    minimumWords: 250,
  },
  {
    id: "essay17",
    task: "task2",
    title: "犯罪：更长刑期还是教育改造",
    genre: "discuss both views",
    source: "Cambridge-style 改写题",
    prompt: "Some people believe that longer prison sentences are the best way to reduce crime, while others think education and rehabilitation are more effective. Discuss both views and give your opinion.",
    details: ["刑期角度：威慑、保护社会", "改造角度：减少再犯、解决根源问题"],
    requirements: ["至少 250 词", "比较两种方式的长期效果", "最后必须给自己立场"],
    keywords: ["prison sentences", "reduce crime", "education", "rehabilitation", "effective"],
    categories: ["观点表达", "反驳补强", "政府社会"],
    minimumWords: 250,
  },
  {
    id: "essay18",
    task: "task2",
    title: "文化：旅游是否会破坏本地文化",
    genre: "advantages disadvantages",
    source: "Cambridge-style 改写题",
    prompt: "International tourism can bring economic benefits, but it may also damage local culture. Do the advantages outweigh the disadvantages?",
    details: ["优势：就业、收入、基础设施", "劣势：商业化、文化表演化、生活成本上升"],
    requirements: ["至少 250 词", "判断哪边更强", "不要只写经济而忽略文化"],
    keywords: ["international tourism", "economic benefits", "damage", "local culture", "advantages"],
    categories: ["观点表达", "媒体与文化", "举例论证"],
    minimumWords: 250,
  },
  {
    id: "essay19",
    task: "task2",
    title: "公共投入：艺术还是体育",
    genre: "discuss both views",
    source: "Cambridge-style 改写题",
    prompt: "Some people think public money should be spent on the arts, while others believe it should be used for sports facilities. Discuss both views and give your opinion.",
    details: ["艺术角度：文化认同、长期教育价值", "体育角度：健康、社区参与、可达性"],
    requirements: ["至少 250 词", "用 benefit the widest group 这类标准比较会更稳", "要写个人判断"],
    keywords: ["public money", "arts", "sports facilities", "opinion", "community"],
    categories: ["观点表达", "政府社会", "媒体与文化"],
    minimumWords: 250,
  },
  {
    id: "essay20",
    task: "task2",
    title: "城市：公园和公共空间是否值得投入",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "City governments should invest more in parks and public spaces than in large shopping and entertainment centres. To what extent do you agree or disagree?",
    details: ["支持：健康、社区连接、生活质量", "反对：商业中心也创造就业和税收"],
    requirements: ["至少 250 词", "城市生活质量是很好用的主线", "最好比较长期公共价值"],
    keywords: ["city governments", "parks", "public spaces", "shopping", "entertainment centres"],
    categories: ["观点表达", "城市与工作", "政府社会"],
    minimumWords: 250,
  },
  {
    id: "essay21",
    task: "task2",
    title: "大学：所有学生都应学同一核心课程吗",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "All university students should study the same core subjects, regardless of their main field. To what extent do you agree or disagree?",
    details: ["支持：培养通识能力、跨学科理解", "反对：时间有限、专业深度更重要"],
    requirements: ["至少 250 词", "先明确你同意到什么程度", "可以比较 breadth 和 specialization"],
    keywords: ["university students", "same core subjects", "field", "agree", "study"],
    categories: ["观点表达", "教育话题"],
    minimumWords: 250,
    topics: ["教育"],
  },
  {
    id: "essay22",
    task: "task2",
    title: "工作生活：是否应实行四天工作制",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "Many companies should move to a four-day working week for most employees. To what extent do you agree or disagree?",
    details: ["支持：休息更充分、效率可能更高", "反对：某些行业协调难、服务连续性受影响"],
    requirements: ["至少 250 词", "不要只写员工感受，也要考虑企业运行", "态度要稳定"],
    keywords: ["companies", "four-day working week", "employees", "agree", "efficiency"],
    categories: ["观点表达", "城市与工作"],
    minimumWords: 250,
    topics: ["工作", "城市"],
  },
  {
    id: "essay23",
    task: "task2",
    title: "动物：动物实验是否应被禁止",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "The use of animals in scientific experiments should be banned. To what extent do you agree or disagree?",
    details: ["支持：伦理问题、替代技术发展", "反对：医学研究和安全测试仍有现实需求"],
    requirements: ["至少 250 词", "平衡伦理与实际效果", "尽量避免空泛 moral judgement"],
    keywords: ["animals", "scientific experiments", "banned", "agree", "research"],
    categories: ["观点表达", "健康与生活", "反驳补强"],
    minimumWords: 250,
    topics: ["健康", "科技"],
  },
  {
    id: "essay24",
    task: "task2",
    title: "消费：修理旧物还是购买新物",
    genre: "discuss both views",
    source: "Cambridge-style 改写题",
    prompt: "Some people prefer repairing old items, while others think it is better to buy new ones. Discuss both views and give your opinion.",
    details: ["修理角度：节省资源、减少浪费", "购买角度：更高效率、更新技术"],
    requirements: ["至少 250 词", "比较 cost, convenience 和 sustainability", "最后写自己的选择"],
    keywords: ["repairing old items", "buy new ones", "views", "opinion", "waste"],
    categories: ["观点表达", "环境话题", "举例论证"],
    minimumWords: 250,
    topics: ["环境", "消费"],
  },
  {
    id: "essay25",
    task: "task2",
    title: "媒体：新闻媒体是否应更重视好消息",
    genre: "agree or disagree",
    source: "Cambridge-style 改写题",
    prompt: "News media should focus more on positive developments rather than negative events. To what extent do you agree or disagree?",
    details: ["支持：减少焦虑、提供建设性信息", "反对：新闻职责是反映重要现实，不只是鼓舞人心"],
    requirements: ["至少 250 词", "讨论 media responsibility 会更稳", "注意 distinguish important from entertaining"],
    keywords: ["news media", "positive developments", "negative events", "agree", "focus"],
    categories: ["观点表达", "媒体与文化", "反驳补强"],
    minimumWords: 250,
    topics: ["媒体", "文化"],
  },
  {
    id: "essay26",
    task: "task2",
    title: "科技与儿童：是否应限制儿童屏幕时间",
    genre: "problem and solution",
    source: "Cambridge-style 改写题",
    prompt: "In many families, children spend a large amount of time using screens. What problems can this cause, and what solutions can be suggested?",
    details: ["问题：注意力下降、运动变少、面对面交流减少", "解决：家庭规则、学校教育、平台设计"],
    requirements: ["至少 250 词", "问题和解决都要具体", "可以写父母和学校的分工"],
    keywords: ["children", "screens", "problems", "solutions", "families"],
    categories: ["问题解决", "科技话题", "教育话题"],
    minimumWords: 250,
    topics: ["科技", "教育", "儿童"],
  },
  {
    id: "essayK1",
    exam: "kaoyan",
    task: "small",
    title: "邀请邮件：请外教参加毕业论坛",
    genre: "email invitation",
    source: "考研英语小作文风格题",
    prompt: "Write an email to invite Professor Smith, a visiting teacher, to give a short speech at your university graduation forum.",
    details: ["说明活动时间和主题", "表达邀请原因", "希望对方回复是否方便参加"],
    requirements: ["至少 100 词", "格式完整", "语气礼貌但不要过分铺垫"],
    keywords: ["invite", "professor", "graduation forum", "speech", "reply"],
    categories: ["应用文", "邀请", "邮件"],
    minimumWords: 100,
    topics: ["校园", "活动", "邀请"],
    ideaHints: ["第一段先亮来意，第二段补活动信息和邀请理由，结尾再礼貌等回复。", "别把邀请函写成抒情散文，信息完整比句子飘逸更重要。"],
    exampleIdeas: ["例如可以补一句 students would benefit greatly from your views on academic growth and career planning。"],
  },
  {
    id: "essayK2",
    exam: "kaoyan",
    task: "small",
    title: "通知：招募校园活动志愿者",
    genre: "notice",
    source: "考研英语小作文风格题",
    prompt: "Write a notice to recruit student volunteers for an international culture festival on campus.",
    details: ["说明活动时间地点", "列出主要工作", "写清报名方式和截止时间"],
    requirements: ["至少 100 词", "notice 语气直接清楚", "信息尽量分组写"],
    keywords: ["notice", "recruit", "student volunteers", "international culture festival", "contact"],
    categories: ["应用文", "通知", "校园"],
    minimumWords: 100,
    topics: ["校园", "通知", "活动"],
    ideaHints: ["通知最稳的结构是：活动简介 -> 志愿者职责 -> 报名方式。", "句子可以短一点，别把 notice 写成文学评论。"],
    exampleIdeas: ["例如可以写 volunteers will guide visitors, help with registration and maintain order at the venue。"],
  },
  {
    id: "essayK3",
    exam: "kaoyan",
    task: "small",
    title: "致歉邮件：改约学术讨论时间",
    genre: "email apology",
    source: "考研英语小作文风格题",
    prompt: "Write an email to apologize for missing a scheduled academic discussion and ask to rearrange the meeting.",
    details: ["先道歉", "简要解释原因", "提出新的时间建议"],
    requirements: ["至少 100 词", "态度真诚", "解释原因但不要过度展开"],
    keywords: ["apologize", "miss", "academic discussion", "rearrange", "meeting"],
    categories: ["应用文", "致歉", "邮件"],
    minimumWords: 100,
    topics: ["校园", "沟通", "致歉"],
    ideaHints: ["开头先认错，中间说明情况，最后给出新的时间选择。", "致歉信的重点是补救动作，不是把苦衷写成连续剧。"],
    exampleIdeas: ["比如可以写 a temporary network failure / an urgent class matter caused the delay，并马上提出 another suitable time。"],
  },
  {
    id: "essayK4",
    exam: "kaoyan",
    task: "small",
    title: "建议信：推荐宿舍节能做法",
    genre: "letter of suggestion",
    source: "考研英语小作文风格题",
    prompt: "Write a letter to your dormitory manager, suggesting practical ways to save electricity in student residences.",
    details: ["点出问题", "提出两到三条建议", "写清这些建议的好处"],
    requirements: ["至少 100 词", "建议要具体", "语气礼貌且有条理"],
    keywords: ["suggest", "save electricity", "student residences", "practical ways", "manager"],
    categories: ["应用文", "建议信", "校园"],
    minimumWords: 100,
    topics: ["校园", "环保", "建议"],
    ideaHints: ["主体段可以按措施分条写，比如 lights, air-conditioners, and awareness campaigns。", "建议句最好带结果，不要只写 should do this。"],
    exampleIdeas: ["例如可以写 installing reminder stickers and setting common-room energy rules may reduce unnecessary power use。"],
  },
  {
    id: "essayK5",
    exam: "kaoyan",
    task: "large",
    title: "图表作文：阅读时间和短视频时长",
    genre: "chart commentary",
    source: "考研英语大作文风格题",
    prompt: "The chart shows the average daily time university students spent on reading and watching short videos from 2018 to 2025. Write an essay to describe the chart and comment on the trend.",
    details: ["reading time fell from 82 to 46 minutes", "short-video time rose from 28 to 94 minutes", "the gap reversed after 2021"],
    requirements: ["至少 160 词", "先描述主要趋势", "后面要评论其现实含义"],
    keywords: ["chart", "reading", "short videos", "university students", "trend", "comment"],
    categories: ["图表作文", "趋势分析", "评论"],
    minimumWords: 160,
    topics: ["校园", "科技", "阅读"],
    ideaHints: ["先抓最明显的反向变化，再点出这种变化 why it matters。", "后半段可以写 fragmented attention, habit change 或 knowledge quality。"],
    exampleIdeas: ["例如，你可以指出 convenient entertainment is replacing deep reading, which may weaken students' ability to concentrate for long periods。"],
  },
  {
    id: "essayK6",
    exam: "kaoyan",
    task: "large",
    title: "图表作文：毕业生就业选择变化",
    genre: "chart commentary",
    source: "考研英语大作文风格题",
    prompt: "The chart compares the percentage of graduates choosing public service, large companies and entrepreneurship between 2016 and 2025. Write an essay based on the chart and give your comments.",
    details: ["public service rose steadily", "large companies remained high but declined slightly", "entrepreneurship fluctuated at a lower level"],
    requirements: ["至少 160 词", "描述 + 评论都要有", "不要只平铺数字"],
    keywords: ["graduates", "public service", "large companies", "entrepreneurship", "chart"],
    categories: ["图表作文", "就业", "评论"],
    minimumWords: 160,
    topics: ["工作", "校园", "社会"],
    ideaHints: ["评论部分可以写 stability, risk preference 和 social expectations 这些角度。", "别把每条曲线都念一遍，抓最有故事的那条。"],
    exampleIdeas: ["例如，你可以说 the growing preference for public service may reflect a stronger desire for stability in an uncertain job market。"],
  },
  {
    id: "essayK7",
    exam: "kaoyan",
    task: "large",
    title: "图画作文：围观者只录像不帮忙",
    genre: "picture commentary",
    source: "考研英语大作文风格题",
    prompt: "The picture shows a fallen cyclist surrounded by people holding up phones, while almost no one offers help. Write an essay to describe the picture and comment on what it suggests.",
    details: ["describe what people are doing", "point out indifference and performance mentality", "return to social responsibility"],
    requirements: ["至少 160 词", "先简洁描述画面", "再写寓意和判断"],
    keywords: ["picture", "fallen cyclist", "phones", "help", "responsibility", "comment"],
    categories: ["图画作文", "社会评论", "责任"],
    minimumWords: 160,
    topics: ["社会", "科技", "责任"],
    ideaHints: ["开头别写太长，画面描述 1 到 2 句足够，后面马上转寓意。", "主线可以写 digital spectatorship 和 real-world responsibility 的反差。"],
    exampleIdeas: ["例如，你可以指出 some people care more about catching attention online than offering timely help offline。"],
  },
  {
    id: "essayK8",
    exam: "kaoyan",
    task: "large",
    title: "图画作文：书本与手机的对照",
    genre: "picture commentary",
    source: "考研英语大作文风格题",
    prompt: "The picture shows an elderly man reading with a child, while several young adults nearby are absorbed in their phones. Write an essay describing the picture and commenting on the message behind it.",
    details: ["compare the calm reading scene with the phone users", "comment on deep learning vs distraction", "end with a practical call for balance"],
    requirements: ["至少 160 词", "描述和评论要平衡", "最好落回现实建议"],
    keywords: ["picture", "reading", "phones", "child", "distraction", "balance"],
    categories: ["图画作文", "教育", "评论"],
    minimumWords: 160,
    topics: ["教育", "科技", "阅读"],
    ideaHints: ["可以把图画写成两组人的对照，这样结构会很稳。", "结尾别只喊口号，落到 balanced use of technology 会更实在。"],
    exampleIdeas: ["例如，你可以写 technology is useful, but without self-discipline it can quietly erode time for reading and reflection。"],
  },
];

const TASK2_GUIDANCE_BANK = {
  earlySchooling: {
    topics: ["教育", "儿童"],
    ideaHints: [
      "可以先写 early schooling 的优势，再写 later schooling 的优势，最后用一两句明确自己的倾向。",
      "如果你支持较晚入学，可以把重点放在 emotional maturity、reduced pressure 和 exploratory learning 上。",
    ],
    exampleIdeas: [
      "例如，年龄稍大的孩子通常更能适应课堂规则，因此老师可以把更多时间放在真正的学习任务上。",
      "也可以举 preschool activities 的例子，说明非正式学习同样能帮助孩子培养语言和社交能力。",
    ],
  },
  publicTransport: {
    topics: ["交通", "政府"],
    ideaHints: [
      "比较时不要只写哪种办法更快，而要看 long-term effect、coverage 和 cost efficiency。",
      "如果你支持公共交通，可以把论证链写成：less car dependence -> less congestion -> better urban life。",
    ],
    exampleIdeas: [
      "比如，一条高频公交或地铁线往往能同时服务上千名通勤者，而扩建道路常常很快又被新增车辆填满。",
      "也可以举 bus lanes 的例子，说明公共投入不仅减少堵车，还能帮助低收入群体降低通勤成本。",
    ],
  },
  onlineLearning: {
    topics: ["科技", "教育"],
    ideaHints: [
      "这题的关键不是写 online learning 有多少好处，而是判断它能否 fully replace classroom teaching。",
      "比较稳的写法是承认 technology can enhance learning，但强调 face-to-face interaction 和 supervision 仍然重要。",
    ],
    exampleIdeas: [
      "例如，录播课程非常适合知识输入，但很难完全取代课堂上的即时提问和教师反馈。",
      "也可以写 younger learners 往往需要外部监督，否则他们更容易分心或拖延。",
    ],
  },
  environmentDuty: {
    topics: ["环境", "政府"],
    ideaHints: [
      "可以把政府责任写成 large-scale change，把个人责任写成 daily behaviour change，这样结构很清楚。",
      "如果想写部分同意，记得最后要落在哪一方更 decisive，而不是各打一半分。",
    ],
    exampleIdeas: [
      "例如，个人可以减少一次性塑料使用，但如果没有回收系统和企业监管，整体效果仍然有限。",
      "也可以写排放标准的例子，说明只有政府才能推动行业层面的转型。",
    ],
  },
  housingPressure: {
    topics: ["住房", "城市"],
    ideaHints: [
      "问题题不要写太散，选两条最直接的后果，比如 longer commutes 和 delayed family formation。",
      "solution 段尽量写具体措施，例如 affordable housing schemes、rental support 或 transport links。",
    ],
    exampleIdeas: [
      "例如，年轻人如果被迫住到更远的郊区，通勤时间会显著增加，生活压力也会更大。",
      "解决时可以写政府和开发商合作增加中低价住房供应，而不是只说 build more houses。",
    ],
  },
  sugaryDrinksTax: {
    topics: ["健康", "政府"],
    ideaHints: [
      "这题适合写 tax as a useful tool but not a complete solution，这样立场会更成熟。",
      "如果你支持征税，可以把重点放在 behaviour change 和 public health funding 上。",
    ],
    exampleIdeas: [
      "例如，价格上升后，一些消费者会减少高糖饮料购买，尤其是日常高频消费人群。",
      "也可以补一句税收收入可以被用于 school nutrition programmes 或 health campaigns。",
    ],
  },
  childrenAdvertising: {
    topics: ["广告", "儿童"],
    ideaHints: [
      "主线可以写 children are less able to evaluate commercial intent，因此 stricter regulation is justified。",
      "如果想让文章更平衡，可以承认 parents also matter，但不要因此削弱你的总立场。",
    ],
    exampleIdeas: [
      "例如，卡通人物和短视频广告很容易让儿童把高糖零食与快乐体验绑定在一起。",
      "也可以写电视和社交媒体平台的 targeted advertising，说明监管为什么比过去更重要。",
    ],
  },
  crimePolicy: {
    topics: ["犯罪", "政府"],
    ideaHints: [
      "比较 longer sentences 和 rehabilitation 时，最好用 short-term protection vs long-term crime reduction 这组标准。",
      "如果你支持教育改造，要明确写出它为什么能 reduce reoffending，而不是只说更 humane。",
    ],
    exampleIdeas: [
      "例如，职业培训和心理辅导可能帮助前罪犯回到稳定工作，从而降低再次犯罪的可能性。",
      "也可以承认严重犯罪仍然需要足够刑期，以保护社会并维持威慑力。",
    ],
  },
  tourismCulture: {
    topics: ["旅游", "文化"],
    ideaHints: [
      "这题容易只写经济好处，记得同时写 cultural commercialization 或 rising living costs。",
      "如果你认为 advantages 更大，要说明 damage can be reduced through good regulation。",
    ],
    exampleIdeas: [
      "例如，旅游收入可以支持 local transport, museums and small businesses, especially in less industrial regions.",
      "反面也可以写传统节庆被改成 purely commercial performances，从而失去原本的社区意义。",
    ],
  },
  artsVsSports: {
    topics: ["文化", "政府"],
    ideaHints: [
      "比较 arts 和 sports facilities 时，可以用 cultural value vs public accessibility 作为对比标准。",
      "如果你想让论证更稳，可以写 public money should benefit the widest group, then判断哪边更符合这个标准。",
    ],
    exampleIdeas: [
      "例如，社区体育设施通常能被儿童、老人和普通家庭频繁使用，因此覆盖面很广。",
      "但你也可以写艺术项目在长期上有助于 cultural identity 和 creative education。",
    ],
  },
  publicSpaces: {
    topics: ["城市", "政府"],
    ideaHints: [
      "这题适合把 parks and public spaces 写成 public value，把 shopping centres 写成 commercial value。",
      "如果你支持公园，可以从 health, community interaction 和 quality of life 三个角度展开。",
    ],
    exampleIdeas: [
      "例如，免费的公共空间能让不同收入水平的人都获得休闲和社交机会，而大型商业中心并不总是如此。",
      "也可以写城市高密度生活下，绿地对缓解 stress 和 improving air quality 的作用。",
    ],
  },
  remoteWork: {
    topics: ["工作", "科技"],
    ideaHints: [
      "如果你写 advantages outweigh disadvantages，主体段最好先写 employee flexibility，再写 how firms can manage communication problems。",
      "不要把 remote work 写得过于理想化，适当承认 isolation 或 weaker collaboration 会让文章更可信。",
    ],
    exampleIdeas: [
      "例如，员工省下通勤时间后，往往能把更多精力投入工作或家庭生活。",
      "反面可写新员工在完全远程环境下更难获得即时指导和团队归属感。",
    ],
  },
};

const ESSAY_PROMPT_ENHANCEMENTS = {
  essay1: { topics: ["环境", "城市"] },
  essay2: { topics: ["交通", "城市"] },
  essay3: { topics: ["环境", "流程"] },
  essay4: { topics: ["城市", "地图"] },
  essay5: { topics: ["消费", "生活"] },
  essay6: { topics: ["能源", "环境"] },
  essay7: { topics: ["交通", "城市"] },
  essay8: { topics: ["科技", "消费"] },
  essay9: TASK2_GUIDANCE_BANK.earlySchooling,
  essay10: TASK2_GUIDANCE_BANK.publicTransport,
  essay11: TASK2_GUIDANCE_BANK.remoteWork,
  essay12: TASK2_GUIDANCE_BANK.environmentDuty,
  essay13: TASK2_GUIDANCE_BANK.housingPressure,
  essay14: TASK2_GUIDANCE_BANK.onlineLearning,
  essay15: TASK2_GUIDANCE_BANK.sugaryDrinksTax,
  essay16: TASK2_GUIDANCE_BANK.childrenAdvertising,
  essay17: TASK2_GUIDANCE_BANK.crimePolicy,
  essay18: TASK2_GUIDANCE_BANK.tourismCulture,
  essay19: TASK2_GUIDANCE_BANK.artsVsSports,
  essay20: TASK2_GUIDANCE_BANK.publicSpaces,
};

const PARAGRAPH_PROMPT_ENHANCEMENTS = {
  para6: TASK2_GUIDANCE_BANK.earlySchooling,
  para7: TASK2_GUIDANCE_BANK.publicTransport,
  para8: TASK2_GUIDANCE_BANK.onlineLearning,
  para9: TASK2_GUIDANCE_BANK.environmentDuty,
  para10: TASK2_GUIDANCE_BANK.housingPressure,
  para11: TASK2_GUIDANCE_BANK.sugaryDrinksTax,
};

applyPromptEnhancements(essayPrompts, ESSAY_PROMPT_ENHANCEMENTS);
applyPromptEnhancements(paragraphPrompts, PARAGRAPH_PROMPT_ENHANCEMENTS);

function applyPromptEnhancements(collection, enhancementMap) {
  collection.forEach((prompt) => {
    const enhancement = enhancementMap[prompt.id];
    if (!enhancement) {
      return;
    }
    Object.assign(prompt, enhancement);
  });
}

function buildGenericTask2Guidance(prompt) {
  const topicHints = {
    教育: "教育题通常很稳的写法是：先写 learning outcome，再写 long-term personal development。",
    科技: "科技题别只写方便，最好比较 efficiency 和 what technology still cannot replace。",
    环境: "环境题很适合用 individual action vs policy intervention 做结构。",
    政府: "涉及公共投入时，可以用 who benefits most 和 long-term effect 作为判断标准。",
    城市: "城市题常见主线是 commuting, quality of life, public value。",
    文化: "文化题不要只写保护传统，也可以写如何适应现代社会。",
    健康: "健康题通常要比较 prevention 和 dealing with consequences later。",
    工作: "工作题不要只写效率，也别忽视 collaboration 和 work-life balance。",
    广告: "广告题常用角度是受众脆弱性、监管责任和长期消费习惯。",
    犯罪: "犯罪题建议比较 short-term punishment 和 long-term prevention。",
    旅游: "旅游题最好同时覆盖 economic gains 和 cultural or social costs。",
    住房: "住房题尽量把问题写具体，比如通勤、压力或家庭规划延迟。",
    媒体: "媒体题通常要先想清楚 media responsibility，再去判断社会影响。",
    消费: "消费题很适合比较 convenience, cost and sustainability。",
    儿童: "涉及儿童时，可以多写 judgement ability、habit formation 和 guidance。",
  };

  const matchedHints = (prompt.topics || []).map((topic) => topicHints[topic]).filter(Boolean);
  const genericIdeas = [
    "主体段尽量遵循：主论点 -> 原因 -> 结果 -> 例子，这样会更像完整论证。",
    "如果是 discuss both views 或 advantages/disadvantages，最后一定要用一两句把你的判断写清楚。",
  ];
  const genericExamples = [
    "举例时不用追求真实数据，但最好写出具体场景、受影响的人群和结果。",
    "如果想让例子更自然，可以写城市、学校、公司或家庭这些读者容易想象的场景。",
  ];

  return {
    ideaHints: [...matchedHints, ...genericIdeas].slice(0, 2),
    exampleIdeas: genericExamples.slice(0, 2),
  };
}

const WRITING_CONNECTORS = [
  "however",
  "therefore",
  "moreover",
  "furthermore",
  "in addition",
  "for example",
  "for instance",
  "as a result",
  "on the other hand",
  "by contrast",
  "overall",
  "whereas",
  "while",
  "consequently",
  "similarly",
  "in conclusion",
  "nevertheless",
  "admittedly",
  "for this reason",
  "to begin with",
  "in the long run",
  "as a consequence",
  "for that reason",
  "by comparison",
];

const WRITING_ACADEMIC_PHRASES = [
  "overall",
  "it is clear that",
  "by contrast",
  "for example",
  "as a result",
  "compared with",
  "a key reason",
  "from my perspective",
  "i would argue",
  "the primary advantage",
  "in conclusion",
  "accounted for",
  "stood at",
  "significant",
  "considerable",
  "substantial",
  "trend",
  "one compelling reason",
  "a clear example of this",
  "taking everything into account",
  "from a policy perspective",
  "play a crucial role in",
  "root cause",
  "quality of life",
  "preventive measures",
  "long-term benefits",
];

const WRITING_SUBORDINATORS = ["because", "although", "while", "whereas", "which", "that", "when", "if", "since", "unless", "even though", "provided that"];

const WRITING_STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "to", "of", "in", "on", "for", "is", "are", "was", "were", "be", "this", "that", "it",
  "as", "with", "by", "at", "from", "their", "they", "them", "people", "more", "can", "should", "would", "there", "these",
  "those", "have", "has", "had", "about",
]);

const GRAMMAR_RULES = [
  { label: "主谓一致", pattern: /\bpeople is\b/gi, suggestion: "people are", reason: "`people` 通常作复数。" },
  { label: "主谓一致", pattern: /\bpeople was\b/gi, suggestion: "people were", reason: "`people` 通常作复数。" },
  { label: "主谓一致", pattern: /\bchildren is\b/gi, suggestion: "children are", reason: "`children` 是复数。" },
  { label: "主谓一致", pattern: /\badvantages is\b/gi, suggestion: "advantages are", reason: "复数主语要配复数动词。" },
  { label: "主谓一致", pattern: /\bdisadvantages is\b/gi, suggestion: "disadvantages are", reason: "复数主语要配复数动词。" },
  { label: "固定结构", pattern: /\bthere (?:have|has) many people\b/gi, suggestion: "many people", reason: "这里不需要 `there have/has` 结构。" },
  { label: "表达缺词", pattern: /\bmany people think\b/gi, suggestion: "many people believe", reason: "如果前面误写成 `there are many people think`，可以直接改成更自然的主语结构。" },
];

const LEXICAL_RULES = [
  { label: "书面度", pattern: /\ba lot of\b/gi, suggestion: "many", reason: "`a lot of` 偏口语，写作里可更正式。" },
  { label: "书面度", pattern: /\blots of\b/gi, suggestion: "many", reason: "`lots of` 偏口语。" },
  { label: "书面度", pattern: /\bkids\b/gi, suggestion: "children", reason: "`kids` 更像口语。" },
  { label: "书面度", pattern: /\bgot\b/gi, suggestion: "became / obtained", reason: "`got` 太泛，尽量换成更精确的动词。" },
  { label: "词汇泛化", pattern: /\bthings\b/gi, suggestion: "issues / factors / measures", reason: "`things` 太泛，最好换成具体名词。" },
  { label: "词汇泛化", pattern: /\bgood\b/gi, suggestion: "beneficial / effective", reason: "`good` 太宽泛，最好更具体。" },
  { label: "词汇泛化", pattern: /\bbad\b/gi, suggestion: "harmful / ineffective", reason: "`bad` 太宽泛，最好更具体。" },
  { label: "学术表达", pattern: /\bmore and more\b/gi, suggestion: "increasingly", reason: "`increasingly` 更像雅思写作表达。" },
];

const IDIOM_RULES = [
  { label: "中式套话", pattern: /\bas we all know\b/gi, suggestion: "It is widely accepted that", reason: "`as we all know` 太像口号式表达。" },
  { label: "中式套话", pattern: /\bthe reasons are as follows\b/gi, suggestion: "There are several reasons for this", reason: "原表达偏直译感。" },
  { label: "中式套话", pattern: /\bwith the development of society\b/gi, suggestion: "As society develops", reason: "后者更自然简洁。" },
  { label: "口语化", pattern: /\bfirst of all\b/gi, suggestion: "To begin with", reason: "`first of all` 更像口语开场。" },
  { label: "口语化", pattern: /\blast but not least\b/gi, suggestion: "Finally", reason: "`last but not least` 偏演讲式。" },
  { label: "冗余立场", pattern: /\bfrom my perspective[,]?\s+i think\b/gi, suggestion: "From my perspective", reason: "同一句里重复表达立场，会显得拖沓。" },
  { label: "俗套表达", pattern: /\bevery coin has two sides\b/gi, suggestion: "Both benefits and drawbacks should be considered", reason: "原句太像套话，不够学术。" },
];

const POLISHING_REPLACEMENTS = [
  [/\bdon't\b/gi, "do not"],
  [/\bdoesn't\b/gi, "does not"],
  [/\bcan't\b/gi, "cannot"],
  [/\bwon't\b/gi, "will not"],
  [/\bit's\b/gi, "it is"],
  [/\bthere's\b/gi, "there is"],
  [/\ba lot of\b/gi, "many"],
  [/\blots of\b/gi, "many"],
  [/\bkids\b/gi, "children"],
  [/\bmore and more\b/gi, "increasingly"],
  [/\bwith the development of society\b/gi, "as society develops"],
  [/\bfirst of all\b/gi, "to begin with"],
  [/\blast but not least\b/gi, "finally"],
  [/\bas we all know\b/gi, "it is widely accepted that"],
  [/\bthe reasons are as follows\b/gi, "there are several reasons for this"],
  [/\bfrom my perspective[,]?\s+i think\b/gi, "from my perspective"],
  [/\bpeople is\b/gi, "people are"],
  [/\bpeople was\b/gi, "people were"],
  [/\bchildren is\b/gi, "children are"],
  [/\badvantages is\b/gi, "advantages are"],
  [/\bdisadvantages is\b/gi, "disadvantages are"],
];

const storageKey = "ielts-writing-studio-v2";
const cloudDeviceKey = "ielts-writing-studio-cloud-device-id";
const cloudSyncSessionKey = "ielts-writing-studio-cloud-sync-v1";
const cloudExportVersion = 1;
const LOCAL_PROXY_ORIGIN = "http://127.0.0.1:8000";
const CLOUD_SYNC_DELAY = 1400;
const DEFAULT_CLOUD_SYNC_SESSION = {
  accountId: "",
  token: "",
  lastSyncedAt: 0,
};
const AI_BACKEND_OPTIONS = {
  openrouter: { label: "OpenRouter（免费）", keyName: "OPENROUTER_API_KEY" },
  openai: { label: "OpenAI 兼容（GemAI / AIHubMix）", keyName: "OPENAI_API_KEY" },
};
const RUNTIME_CONFIG = normalizeRuntimeConfig(window.__IELTS_WRITING_STUDIO_CONFIG__ || {});
const WRITING_EXAMS = {
  ielts: {
    label: "雅思写作",
    preferredTasks: [
      { value: "all", label: "大小作文一起练" },
      { value: "task1", label: "先攻 Task 1" },
      { value: "task2", label: "先攻 Task 2" },
    ],
    essayTasks: [
      { value: "task1", label: "Task 1" },
      { value: "task2", label: "Task 2" },
    ],
    timerSeconds: {
      task1: 20 * 60,
      task2: 40 * 60,
    },
  },
  kaoyan: {
    label: "考研英语写作",
    preferredTasks: [
      { value: "all", label: "大小作文一起练" },
      { value: "small", label: "先攻小作文" },
      { value: "large", label: "先攻大作文" },
    ],
    essayTasks: [
      { value: "small", label: "小作文" },
      { value: "large", label: "大作文" },
    ],
    timerSeconds: {
      small: 15 * 60,
      large: 25 * 60,
    },
  },
};

const defaultState = {
  exam: "ielts",
  updatedAt: 0,
  profile: {
    preferredExam: "ielts",
    currentBand: "6.0",
    targetBand: "7.0",
    preferredTask: "all",
  },
  history: [],
  drafts: {
    paragraphText: "",
    essayText: "",
    customPrompt: "",
  },
  selections: {
    patternTask: "all",
    patternCategory: "all",
    blankId: blankExercises[0].id,
    paragraphExam: "ielts",
    paragraphId: paragraphPrompts[0].id,
    essayExam: "ielts",
    essayTask: "task2",
    essayTopic: "all",
    essayId: essayPrompts.find((item) => item.task === "task2").id,
    aiBackend: "openai",
  },
  timer: {
    remaining: 40 * 60,
    running: false,
  },
  aiArchive: [],
  corpus: {
    usefulPatterns: [],
    lexicalUpgrades: [],
    grammarWatchlist: [],
    idiomWatchlist: [],
    polishedSnippets: [],
  },
};

let state = loadState();
let timerInterval = null;
let cloudSyncTimer = null;
let accountCloudSyncTimer = null;
let cloudAccountSyncInFlight = false;
const AI_REVIEW_POLL_INTERVAL_MS = 3000;
const AI_REVIEW_POLL_TIMEOUT_MS = 4 * 60 * 1000;
const aiState = {
  checked: false,
  available: false,
  reviewModel: "",
  backends: createDefaultBackendStatus(),
};
const cloudSyncState = {
  deviceId: "",
  available: false,
  bootstrapped: false,
  syncing: false,
  lastSyncedAt: "",
  notice: "",
  error: "",
};
const accountSyncState = {
  ...loadCloudSyncSession(),
  syncing: false,
  statusTone: "info",
  statusMessage: "未登录",
  statusDetail: "登录和阅读复盘同一个同步账号后，这里的写作记录、草稿和语料库也会自动备份到云端。",
};

const els = {
  statTotal: document.querySelector("#stat-total"),
  statAverage: document.querySelector("#stat-average"),
  statBest: document.querySelector("#stat-best"),
  aiHeroStatus: document.querySelector("#ai-hero-status"),
  aiSideMeta: document.querySelector("#ai-side-meta"),
  patternTaskFilter: document.querySelector("#pattern-task-filter"),
  patternCategoryFilter: document.querySelector("#pattern-category-filter"),
  patternGrid: document.querySelector("#pattern-grid"),
  preferredExam: document.querySelector("#preferred-exam"),
  currentBand: document.querySelector("#current-band"),
  targetBand: document.querySelector("#target-band"),
  preferredTask: document.querySelector("#preferred-task"),
  blankSelect: document.querySelector("#blank-select"),
  blankCard: document.querySelector("#blank-card"),
  blankResult: document.querySelector("#blank-result"),
  blankRandom: document.querySelector("#blank-random"),
  paragraphExamFilter: document.querySelector("#paragraph-exam-filter"),
  paragraphSelect: document.querySelector("#paragraph-select"),
  paragraphPrompt: document.querySelector("#paragraph-prompt"),
  paragraphText: document.querySelector("#paragraph-text"),
  paragraphWordCount: document.querySelector("#paragraph-word-count"),
  paragraphEvaluate: document.querySelector("#paragraph-evaluate"),
  paragraphRandom: document.querySelector("#paragraph-random"),
  paragraphResult: document.querySelector("#paragraph-result"),
  essayExamFilter: document.querySelector("#essay-exam-filter"),
  essayTaskFilter: document.querySelector("#essay-task-filter"),
  essayTopicFilter: document.querySelector("#essay-topic-filter"),
  essaySelect: document.querySelector("#essay-select"),
  essayPrompt: document.querySelector("#essay-prompt"),
  customPrompt: document.querySelector("#custom-prompt"),
  essayText: document.querySelector("#essay-text"),
  essayWordCount: document.querySelector("#essay-word-count"),
  essayEvaluate: document.querySelector("#essay-evaluate"),
  essayAiEvaluate: document.querySelector("#essay-ai-evaluate"),
  essayAiBackend: document.querySelector("#essay-ai-backend"),
  essayRandom: document.querySelector("#essay-random"),
  essayResult: document.querySelector("#essay-result"),
  aiStatusChip: document.querySelector("#ai-status-chip"),
  aiModelMeta: document.querySelector("#ai-model-meta"),
  cloudAuthForm: document.querySelector("#cloud-auth-form"),
  cloudSyncStatus: document.querySelector("#cloud-sync-status"),
  cloudSyncMeta: document.querySelector("#cloud-sync-meta"),
  cloudAccount: document.querySelector("#cloud-account"),
  cloudPassword: document.querySelector("#cloud-password"),
  cloudAccountChip: document.querySelector("#cloud-account-chip"),
  cloudLastSyncChip: document.querySelector("#cloud-last-sync-chip"),
  cloudRegister: document.querySelector("#cloud-register"),
  cloudLogin: document.querySelector("#cloud-login"),
  cloudSyncNow: document.querySelector("#cloud-sync-now"),
  cloudLogout: document.querySelector("#cloud-logout"),
  dataExport: document.querySelector("#data-export"),
  dataImportInput: document.querySelector("#data-import-input"),
  timerDisplay: document.querySelector("#timer-display"),
  timerStart: document.querySelector("#timer-start"),
  timerPause: document.querySelector("#timer-pause"),
  timerReset: document.querySelector("#timer-reset"),
  historyList: document.querySelector("#history-list"),
  historyClear: document.querySelector("#history-clear"),
  corpusGrid: document.querySelector("#corpus-grid"),
};

init();

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function normalizeCorpusState(payload) {
  const source = payload && typeof payload === "object" ? payload : {};
  return {
    usefulPatterns: Array.isArray(source.usefulPatterns) ? source.usefulPatterns.slice(0, 12) : [],
    lexicalUpgrades: Array.isArray(source.lexicalUpgrades) ? source.lexicalUpgrades.slice(0, 12) : [],
    grammarWatchlist: Array.isArray(source.grammarWatchlist) ? source.grammarWatchlist.slice(0, 12) : [],
    idiomWatchlist: Array.isArray(source.idiomWatchlist) ? source.idiomWatchlist.slice(0, 12) : [],
    polishedSnippets: Array.isArray(source.polishedSnippets) ? source.polishedSnippets.slice(0, 12) : [],
  };
}

function normalizePersistedState(payload) {
  const parsed = payload && typeof payload === "object" ? payload : {};
  return {
    updatedAt: Math.max(0, Number(parsed.updatedAt || 0) || 0),
    profile: { ...defaultState.profile, ...(parsed.profile || {}) },
    history: Array.isArray(parsed.history) ? parsed.history.slice(0, 12) : [],
    drafts: { ...defaultState.drafts, ...(parsed.drafts || {}) },
    selections: { ...defaultState.selections, ...(parsed.selections || {}) },
    timer: { ...defaultState.timer, ...(parsed.timer || {}), running: false },
    aiArchive: Array.isArray(parsed.aiArchive) ? parsed.aiArchive.slice(0, 12) : [],
    corpus: normalizeCorpusState(parsed.corpus),
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return cloneDefaultState();
    }
    return normalizePersistedState(JSON.parse(raw));
  } catch (error) {
    return cloneDefaultState();
  }
}

function saveState(options = {}) {
  if (options.touch !== false) {
    state.updatedAt = Date.now();
  } else {
    state.updatedAt = Math.max(0, Number(state.updatedAt || 0) || 0);
  }
  localStorage.setItem(storageKey, JSON.stringify(state));
  if (options.sync !== false) {
    scheduleCloudSync();
  }
  if (options.accountSync !== false) {
    scheduleAccountCloudSync();
  }
}

function normalizeExam(value) {
  return value === "kaoyan" ? "kaoyan" : "ielts";
}

function getExamConfig(exam) {
  return WRITING_EXAMS[normalizeExam(exam)];
}

function getPromptExam(prompt) {
  return normalizeExam(prompt?.exam || "ielts");
}

function getScopedExam(item) {
  return normalizeExam(item?.exam || "ielts");
}

function labelForExam(exam) {
  return getExamConfig(exam).label;
}

function labelForTask(task) {
  if (task === "small") {
    return "小作文";
  }
  if (task === "large") {
    return "大作文";
  }
  return task === "task1" ? "Task 1" : "Task 2";
}

function getDefaultEssayTaskForExam(exam) {
  return normalizeExam(exam) === "kaoyan" ? "large" : "task2";
}

function getFirstPromptId(collection, exam, task = "") {
  const normalizedExam = normalizeExam(exam);
  const candidates = collection.filter((item) => getPromptExam(item) === normalizedExam);
  const narrowed = task ? candidates.filter((item) => item.task === task) : candidates;
  return (narrowed[0] || candidates[0] || collection[0])?.id || "";
}

function getEssayTaskOptions(exam) {
  return getExamConfig(exam).essayTasks;
}

function getPreferredTaskOptions(exam) {
  return getExamConfig(exam).preferredTasks;
}

function getPatternTaskOptions(exam) {
  return getExamConfig(exam).preferredTasks;
}

function getTimerSecondsForCurrentEssayTask() {
  const config = getExamConfig(state.selections.essayExam);
  return config.timerSeconds[state.selections.essayTask] || 25 * 60;
}

function normalizePromptDefinition(prompt) {
  return {
    exam: getPromptExam(prompt),
    ...(prompt || {}),
  };
}

function getParagraphPromptPool() {
  const selectedExam = normalizeExam(state.selections.paragraphExam);
  let pool = paragraphPrompts.filter((item) => getPromptExam(item) === selectedExam);
  const preferredTask = selectedExam === normalizeExam(state.profile.preferredExam) ? state.profile.preferredTask : "all";
  if (preferredTask !== "all") {
    pool = pool.filter((item) => item.task === preferredTask);
  }
  return pool;
}

function getPatternPool() {
  const selectedExam = normalizeExam(state.profile.preferredExam);
  return phraseBank.filter((item) => {
    const examMatch = getScopedExam(item) === selectedExam;
    const taskMatch = state.selections.patternTask === "all" || item.task === state.selections.patternTask;
    const categoryMatch = state.selections.patternCategory === "all" || item.category === state.selections.patternCategory;
    return examMatch && taskMatch && categoryMatch;
  });
}

function getBlankPool() {
  const selectedExam = normalizeExam(state.profile.preferredExam);
  const preferredTask = state.profile.preferredTask;
  let pool = blankExercises.filter((item) => {
    const examMatch = getScopedExam(item) === selectedExam;
    const taskMatch = preferredTask === "all" || item.task === preferredTask;
    return examMatch && taskMatch;
  });
  if (!pool.length) {
    pool = blankExercises.filter((item) => getScopedExam(item) === selectedExam);
  }
  return pool.length ? pool : blankExercises;
}

function init() {
  bindScrollButtons();
  hydrateControls();
  renderAll();
  bindEvents();
  checkAiStatus();
  bootstrapCloudState()
    .catch(() => {})
    .finally(() => {
      syncCloudProgressOnStartup();
    });
}

function bindScrollButtons() {
  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function hydrateControls() {
  state.profile.preferredExam = normalizeExam(state.profile.preferredExam);
  state.selections.paragraphExam = normalizeExam(state.selections.paragraphExam || state.profile.preferredExam);
  state.selections.essayExam = normalizeExam(state.selections.essayExam || state.profile.preferredExam);
  if (els.preferredExam) {
    els.preferredExam.value = state.profile.preferredExam;
  }
  populatePreferredTaskOptions();
  els.currentBand.value = state.profile.currentBand;
  els.targetBand.value = state.profile.targetBand;
  els.preferredTask.value = state.profile.preferredTask;
  populatePatternTaskOptions();
  els.patternTaskFilter.value = state.selections.patternTask;
  populatePatternCategories();
  els.patternCategoryFilter.value = state.selections.patternCategory;
  populateBlankSelect();
  els.blankSelect.value = state.selections.blankId;
  if (els.paragraphExamFilter) {
    els.paragraphExamFilter.value = state.selections.paragraphExam;
  }
  populateParagraphSelect();
  els.paragraphSelect.value = state.selections.paragraphId;
  if (els.essayExamFilter) {
    els.essayExamFilter.value = state.selections.essayExam;
  }
  populateEssayTaskOptions();
  els.essayTaskFilter.value = state.selections.essayTask;
  populateEssayTopics();
  els.essayTopicFilter.value = state.selections.essayTopic;
  populateEssaySelect();
  els.essaySelect.value = state.selections.essayId;
  els.paragraphText.value = state.drafts.paragraphText;
  els.essayText.value = state.drafts.essayText;
  els.customPrompt.value = state.drafts.customPrompt;
  if (els.essayAiBackend) {
    els.essayAiBackend.value = normalizeAiBackend(state.selections.aiBackend);
  }
}

function bindEvents() {
  els.patternTaskFilter.addEventListener("change", () => {
    state.selections.patternTask = els.patternTaskFilter.value;
    state.selections.patternCategory = "all";
    populatePatternCategories();
    renderPhraseBank();
    saveState();
  });

  els.patternCategoryFilter.addEventListener("change", () => {
    state.selections.patternCategory = els.patternCategoryFilter.value;
    renderPhraseBank();
    saveState();
  });

  els.preferredExam?.addEventListener("change", handlePreferredExamUpdate);

  [els.currentBand, els.targetBand, els.preferredTask].forEach((element) => {
    element.addEventListener("change", handleProfileUpdate);
  });

  els.blankSelect.addEventListener("change", () => {
    state.selections.blankId = els.blankSelect.value;
    renderBlankExercise();
    saveState();
  });

  els.blankRandom.addEventListener("click", () => {
    state.selections.blankId = randomFrom(getBlankPool()).id;
    els.blankSelect.value = state.selections.blankId;
    renderBlankExercise();
    saveState();
  });

  els.paragraphExamFilter?.addEventListener("change", () => {
    state.selections.paragraphExam = normalizeExam(els.paragraphExamFilter.value);
    populateParagraphSelect();
    els.paragraphSelect.value = state.selections.paragraphId;
    renderParagraphPrompt();
    saveState();
  });

  els.paragraphSelect.addEventListener("change", () => {
    state.selections.paragraphId = els.paragraphSelect.value;
    renderParagraphPrompt();
    saveState();
  });

  els.paragraphRandom.addEventListener("click", () => {
    const pool = getParagraphPromptPool();
    state.selections.paragraphId = randomFrom(pool).id;
    els.paragraphSelect.value = state.selections.paragraphId;
    renderParagraphPrompt();
    saveState();
  });

  els.paragraphText.addEventListener("input", () => {
    state.drafts.paragraphText = els.paragraphText.value;
    updateWordCount(els.paragraphText, els.paragraphWordCount);
    saveState();
  });

  els.paragraphEvaluate.addEventListener("click", evaluateParagraph);

  els.essayExamFilter?.addEventListener("change", () => {
    state.selections.essayExam = normalizeExam(els.essayExamFilter.value);
    state.selections.essayTask = getDefaultEssayTaskForExam(state.selections.essayExam);
    state.selections.essayTopic = "all";
    populateEssayTaskOptions();
    resetTimerForTask();
    populateEssayTopics();
    populateEssaySelect();
    els.essayTopicFilter.value = state.selections.essayTopic;
    els.essaySelect.value = state.selections.essayId;
    renderEssayPrompt();
    renderTimer();
    saveState();
  });

  els.essayTaskFilter.addEventListener("change", () => {
    state.selections.essayTask = els.essayTaskFilter.value;
    state.selections.essayTopic = "all";
    resetTimerForTask();
    populateEssayTopics();
    populateEssaySelect();
    els.essayTopicFilter.value = state.selections.essayTopic;
    els.essaySelect.value = state.selections.essayId;
    renderEssayPrompt();
    renderTimer();
    saveState();
  });

  els.essayTopicFilter.addEventListener("change", () => {
    state.selections.essayTopic = els.essayTopicFilter.value;
    populateEssaySelect();
    els.essaySelect.value = state.selections.essayId;
    renderEssayPrompt();
    saveState();
  });

  els.essaySelect.addEventListener("change", () => {
    state.selections.essayId = els.essaySelect.value;
    renderEssayPrompt();
    saveState();
  });

  els.essayRandom.addEventListener("click", () => {
    const pool = getEssayPromptPool();
    state.selections.essayId = randomFrom(pool).id;
    els.essaySelect.value = state.selections.essayId;
    renderEssayPrompt();
    saveState();
  });

  els.customPrompt.addEventListener("input", () => {
    state.drafts.customPrompt = els.customPrompt.value;
    saveState();
  });

  els.essayText.addEventListener("input", () => {
    state.drafts.essayText = els.essayText.value;
    updateWordCount(els.essayText, els.essayWordCount);
    saveState();
  });

  els.essayEvaluate.addEventListener("click", evaluateEssayLocal);
  els.essayAiEvaluate.addEventListener("click", evaluateEssayAi);
  els.essayAiBackend?.addEventListener("change", () => {
    state.selections.aiBackend = normalizeAiBackend(els.essayAiBackend.value);
    syncSelectedAiBackend(false);
    saveState();
    updateAiStatusUI();
  });

  els.cloudAuthForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    handleCloudAuth("login");
  });
  els.cloudRegister?.addEventListener("click", () => {
    handleCloudAuth("register");
  });
  els.cloudLogin?.addEventListener("click", () => {
    handleCloudAuth("login");
  });
  els.cloudSyncNow?.addEventListener("click", () => {
    pushCloudProgressSnapshot(buildStateSnapshot());
  });
  els.cloudLogout?.addEventListener("click", () => {
    handleCloudLogout();
  });
  els.dataExport?.addEventListener("click", exportStateBackup);
  els.dataImportInput?.addEventListener("change", handleImportFile);
  window.addEventListener("message", handleMigrationMessage);

  els.timerStart.addEventListener("click", startTimer);
  els.timerPause.addEventListener("click", () => stopTimer(true));
  els.timerReset.addEventListener("click", resetTimerForTask);

  els.historyClear.addEventListener("click", () => {
    state.history = [];
    state.aiArchive = [];
    state.corpus = cloneDefaultState().corpus;
    renderStats();
    renderHistory();
    renderCorpus();
    saveState();
  });
}

function handleProfileUpdate() {
  state.profile.currentBand = els.currentBand.value;
  state.profile.targetBand = els.targetBand.value;
  state.profile.preferredTask = els.preferredTask.value;
  populatePatternTaskOptions();
  populatePatternCategories();
  populateBlankSelect();
  els.blankSelect.value = state.selections.blankId;
  populateParagraphSelect();
  populateEssaySelect();
  renderAll();
  saveState();
}

function handlePreferredExamUpdate() {
  state.profile.preferredExam = normalizeExam(els.preferredExam.value);
  state.profile.preferredTask = "all";
  state.selections.patternTask = "all";
  state.selections.patternCategory = "all";
  state.selections.paragraphExam = state.profile.preferredExam;
  state.selections.essayExam = state.profile.preferredExam;
  state.selections.essayTask = getDefaultEssayTaskForExam(state.profile.preferredExam);
  state.selections.essayTopic = "all";
  populatePreferredTaskOptions();
  els.preferredTask.value = state.profile.preferredTask;
  populatePatternTaskOptions();
  els.patternTaskFilter.value = state.selections.patternTask;
  populatePatternCategories();
  els.patternCategoryFilter.value = state.selections.patternCategory;
  populateBlankSelect();
  els.blankSelect.value = state.selections.blankId;
  if (els.paragraphExamFilter) {
    els.paragraphExamFilter.value = state.selections.paragraphExam;
  }
  populateParagraphSelect();
  els.paragraphSelect.value = state.selections.paragraphId;
  if (els.essayExamFilter) {
    els.essayExamFilter.value = state.selections.essayExam;
  }
  populateEssayTaskOptions();
  els.essayTaskFilter.value = state.selections.essayTask;
  populateEssayTopics();
  els.essayTopicFilter.value = state.selections.essayTopic;
  populateEssaySelect();
  els.essaySelect.value = state.selections.essayId;
  resetTimerForTask();
  renderAll();
  saveState();
}

function renderAll() {
  renderStats();
  renderPhraseBank();
  renderBlankExercise();
  renderParagraphPrompt();
  renderEssayPrompt();
  renderHistory();
  renderCorpus();
  updateWordCount(els.paragraphText, els.paragraphWordCount);
  updateWordCount(els.essayText, els.essayWordCount);
  renderTimer();
  updateAiStatusUI();
  updateCloudSyncUI();
}

function populatePreferredTaskOptions() {
  const options = getPreferredTaskOptions(state.profile.preferredExam);
  if (!options.some((item) => item.value === state.profile.preferredTask)) {
    state.profile.preferredTask = "all";
  }
  els.preferredTask.innerHTML = options
    .map((item) => `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`)
    .join("");
}

function populatePatternTaskOptions() {
  const options = getPatternTaskOptions(state.profile.preferredExam);
  if (!options.some((item) => item.value === state.selections.patternTask)) {
    state.selections.patternTask = "all";
  }
  els.patternTaskFilter.innerHTML = options
    .map((item) => `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`)
    .join("");
}

function populatePatternCategories() {
  const categories = [
    "all",
    ...new Set(
      phraseBank
        .filter((item) => {
          const examMatch = getScopedExam(item) === normalizeExam(state.profile.preferredExam);
          const taskMatch = state.selections.patternTask === "all" || item.task === state.selections.patternTask;
          return examMatch && taskMatch;
        })
        .map((item) => item.category),
    ),
  ];
  els.patternCategoryFilter.innerHTML = categories
    .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category === "all" ? "全部功能" : category)}</option>`)
    .join("");
}

function populateBlankSelect() {
  const pool = getBlankPool();
  if (!pool.some((item) => item.id === state.selections.blankId)) {
    state.selections.blankId = pool[0].id;
  }
  els.blankSelect.innerHTML = pool
    .map((item) => `<option value="${item.id}">${labelForTask(item.task)} · ${escapeHtml(item.title)}</option>`)
    .join("");
}

function populateParagraphSelect() {
  const pool = getParagraphPromptPool();
  if (!pool.some((item) => item.id === state.selections.paragraphId)) {
    state.selections.paragraphId = pool[0].id;
  }
  els.paragraphSelect.innerHTML = pool
    .map((item) => `<option value="${item.id}">${escapeHtml(labelForExam(getPromptExam(item)))} · ${labelForTask(item.task)} · ${escapeHtml(item.title)}</option>`)
    .join("");
}

function populateEssayTaskOptions() {
  const options = getEssayTaskOptions(state.selections.essayExam);
  if (!options.some((item) => item.value === state.selections.essayTask)) {
    state.selections.essayTask = getDefaultEssayTaskForExam(state.selections.essayExam);
  }
  els.essayTaskFilter.innerHTML = options
    .map((item) => `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`)
    .join("");
}

function populateEssaySelect() {
  const pool = getEssayPromptPool();
  if (!pool.some((item) => item.id === state.selections.essayId)) {
    state.selections.essayId = pool[0].id;
  }
  els.essaySelect.innerHTML = pool
    .map((item) => `<option value="${item.id}">${escapeHtml(item.title)} · ${escapeHtml(item.genre)}</option>`)
    .join("");
}

function populateEssayTopics() {
  const pool = essayPrompts.filter((item) => getPromptExam(item) === normalizeExam(state.selections.essayExam) && item.task === state.selections.essayTask);
  const topics = ["all", ...new Set(pool.flatMap((item) => item.topics || []))];
  if (!topics.includes(state.selections.essayTopic)) {
    state.selections.essayTopic = "all";
  }
  els.essayTopicFilter.innerHTML = topics
    .map((topic) => `<option value="${escapeHtml(topic)}">${escapeHtml(topic === "all" ? "全部话题" : topic)}</option>`)
    .join("");
}

function renderStats() {
  const entries = state.history;
  const average = entries.length ? entries.reduce((sum, item) => sum + item.band, 0) / entries.length : Number(state.profile.currentBand);
  const best = entries.length ? Math.max(...entries.map((item) => item.band)) : Number(state.profile.currentBand);
  els.statTotal.textContent = String(entries.length);
  els.statAverage.textContent = average.toFixed(1);
  els.statBest.textContent = best.toFixed(1);
}

function renderPhraseBank() {
  const filtered = getPatternPool();

  if (!filtered.length) {
    els.patternGrid.innerHTML = `
      <div class="empty-state">
        <strong>这组条件下还没有现成句式</strong>
        <p>别慌，这不是页面在摆烂。把任务或功能切回“全部”，先把能直接上手的句子捞出来。</p>
      </div>
    `;
    return;
  }

  els.patternGrid.innerHTML = filtered
    .map((item) => `
      <details class="pattern-card pattern-card--collapsible">
        <summary class="pattern-card__summary">
          <div class="pattern-card__header">
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <div class="tag-row">
                <span class="tag">${escapeHtml(labelForExam(getScopedExam(item)))}</span>
                <span class="tag">${labelForTask(item.task)}</span>
                <span class="tag">${escapeHtml(item.category)}</span>
              </div>
            </div>
            <span class="pattern-card__toggle" aria-hidden="true"></span>
          </div>
          <div class="pattern-card__preview">${escapeHtml(compactText(item.structure, 80))}</div>
        </summary>
        <div class="pattern-card__body">
          <div class="pattern-card__structure">${escapeHtml(item.structure)}</div>
          <div class="pattern-card__example">
            <strong>例句</strong>
            <p>${escapeHtml(item.example)}</p>
          </div>
          <ul>${item.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>
        </div>
      </details>
    `)
    .join("");
}

function renderBlankExercise() {
  const exercise = currentBlankExercise();
  const sentenceMarkup = exercise.segments.map((segment, index) => {
    const blank = exercise.blanks[index];
    if (!blank) {
      return escapeHtml(segment);
    }
    return `${escapeHtml(segment)}<input class="blank-input" data-blank-index="${index}" placeholder="${escapeHtml(blank.hint)}" />`;
  }).join("");

  els.blankCard.innerHTML = `
    <div class="exercise-title">
      <h3>${escapeHtml(exercise.title)}</h3>
      <span class="chip">${escapeHtml(labelForExam(getScopedExam(exercise)))}</span>
      <span class="chip">${labelForTask(exercise.task)}</span>
      <span class="chip">${escapeHtml(exercise.focus)}</span>
    </div>
    <p>${escapeHtml(exercise.prompt)}</p>
    <div class="exercise-sentence">${sentenceMarkup}</div>
    <p><strong>练习提示：</strong>${escapeHtml(exercise.tip)}</p>
    <div class="inline-controls">
      <button class="button button--primary" id="blank-check" type="button">检查答案</button>
      <button class="button button--ghost" id="blank-reveal" type="button">显示参考答案</button>
    </div>
  `;

  els.blankResult.innerHTML = "";
  els.blankCard.querySelector("#blank-check").addEventListener("click", gradeBlankExercise);
  els.blankCard.querySelector("#blank-reveal").addEventListener("click", revealBlankExercise);
}

function gradeBlankExercise() {
  const exercise = currentBlankExercise();
  const inputs = [...els.blankCard.querySelectorAll(".blank-input")];
  let correct = 0;

  const items = inputs.map((input, index) => {
    const blank = exercise.blanks[index];
    const normalized = normalizeSimple(input.value);
    const ok = blank.answers.some((answer) => normalizeSimple(answer) === normalized);
    if (ok) {
      correct += 1;
    }
    input.style.borderColor = ok ? "rgba(84,130,95,0.6)" : "rgba(176,78,58,0.5)";
    input.style.background = ok ? "rgba(204,228,205,0.7)" : "rgba(255,227,217,0.85)";
    return `<li>第 ${index + 1} 空：${ok ? "正确" : "可再修正"}。参考写法：<strong>${escapeHtml(blank.answerDisplay)}</strong>。</li>`;
  }).join("");

  els.blankResult.innerHTML = `
    <h3>填空结果：${correct}/${exercise.blanks.length}</h3>
    <p>${correct === exercise.blanks.length ? "这一句已经比较稳了，可以继续挑战段落训练。" : "先把错误位置修正，再读一遍整句，训练调用速度。"}</p>
    <ul>${items}</ul>
  `;
}

function revealBlankExercise() {
  const exercise = currentBlankExercise();
  [...els.blankCard.querySelectorAll(".blank-input")].forEach((input, index) => {
    input.value = exercise.blanks[index].answerDisplay;
  });
  els.blankResult.innerHTML = "<p>参考答案已显示。把整句再读一遍，下一轮尽量自己复写。</p>";
}

function renderParagraphPrompt() {
  const prompt = currentParagraphPrompt();
  els.paragraphPrompt.innerHTML = renderPromptPanel(prompt, "paragraph");
  if (els.paragraphText) {
    els.paragraphText.placeholder = getParagraphPlaceholder(prompt);
  }
  els.paragraphResult.innerHTML = "";
}

function renderEssayPrompt() {
  const prompt = currentEssayPrompt();
  els.essayPrompt.innerHTML = renderPromptPanel(prompt, "essay");
  if (els.customPrompt) {
    els.customPrompt.placeholder = getCustomPromptPlaceholder();
  }
  if (els.essayText) {
    els.essayText.placeholder = getEssayPlaceholder(prompt);
  }
  els.essayResult.innerHTML = "";
}

function getMinimumWordsForPrompt(prompt, mode) {
  const exam = getPromptExam(prompt);
  const task = prompt.task;
  if (mode === "paragraph") {
    if (exam === "kaoyan") {
      return task === "small" ? 60 : 90;
    }
    return task === "task1" ? 50 : 90;
  }
  if (typeof prompt.minimumWords === "number") {
    return prompt.minimumWords;
  }
  if (exam === "kaoyan") {
    return task === "small" ? 100 : 160;
  }
  return task === "task1" ? 150 : 250;
}

function getTargetWordsForPrompt(prompt, mode) {
  const exam = getPromptExam(prompt);
  const task = prompt.task;
  if (mode === "paragraph") {
    if (exam === "kaoyan") {
      return task === "small" ? 90 : 120;
    }
    return task === "task1" ? 70 : 120;
  }
  if (exam === "kaoyan") {
    return task === "small" ? 120 : 190;
  }
  return task === "task1" ? 180 : 280;
}

function getPromptWordTargetLabel(prompt, mode) {
  if (prompt.targetWords) {
    return `${prompt.targetWords[0]}-${prompt.targetWords[1]} 词`;
  }
  if (mode !== "essay") {
    return "";
  }
  const exam = getPromptExam(prompt);
  if (exam === "kaoyan") {
    return prompt.task === "small" ? "建议 100-140 词" : "建议 170-220 词";
  }
  return prompt.task === "task1" ? "建议 170-220 词" : "建议 270-330 词";
}

function getCriterionLabel(prompt) {
  const exam = getPromptExam(prompt);
  if (exam === "kaoyan") {
    return prompt.task === "small" ? "Task Fulfilment" : "Content & Logic";
  }
  return prompt.task === "task1" ? "Task Achievement" : "Task Response";
}

function getParagraphPlaceholder(prompt) {
  const exam = getPromptExam(prompt);
  if (exam === "kaoyan") {
    return prompt.task === "small"
      ? "考研小作文先把对象、来意和结尾写稳，别开局就进入抒情宇宙。"
      : "考研大作文先点出现象，再补评论，不要只做图画或图表播报员。";
  }
  return prompt.task === "task1"
    ? "雅思 Task 1 建议 50-90 词，先总览后细节，别在图表前突然发表人生感悟。"
    : "雅思 Task 2 建议 90-140 词，先立主论点，再给原因和例子。";
}

function getEssayPlaceholder(prompt) {
  const exam = getPromptExam(prompt);
  if (exam === "kaoyan") {
    return prompt.task === "small"
      ? "考研小作文建议至少 100 词。格式先别散架，信息写全，礼貌在线。"
      : "考研大作文建议至少 160 词。先描述核心现象，再评论它，最后把判断落回现实。";
  }
  return prompt.task === "task1"
    ? "雅思 Task 1 建议至少 150 词。先写 overview，再分组写细节，别把自己写成热评区。"
    : "雅思 Task 2 建议至少 250 词。写完先看立场有没有站稳，再决定是否请 AI 下场补刀。";
}

function getCustomPromptPlaceholder() {
  return state.selections.essayExam === "kaoyan"
    ? "想练自己的考研真题，就把题目丢进来。系统会自动按小作文 / 大作文的逻辑来批。"
    : "如果你想练自己手头的剑桥原题，可以把题目粘贴在这里。留空则使用上方内置题库。";
}

function renderPromptPanel(prompt, mode) {
  const details = prompt.notes || prompt.details || [];
  const requirements = prompt.checklist || prompt.requirements || [];
  const categories = (prompt.categories || []).map((category) => `<span class="tag">${escapeHtml(category)}</span>`).join("");
  const wordTarget = getPromptWordTargetLabel(prompt, mode);

  let related = phraseBank
    .filter((item) => getScopedExam(item) === getPromptExam(prompt) && item.task === prompt.task && (prompt.categories || []).includes(item.category))
    .slice(0, 3);
  if (!related.length) {
    related = phraseBank
      .filter((item) => getScopedExam(item) === getPromptExam(prompt) && item.task === prompt.task)
      .slice(0, 3);
  }
  const baseGuidance = prompt.task === "task2" ? buildGenericTask2Guidance(prompt) : { ideaHints: [], exampleIdeas: [] };
  const guidance = {
    ideaHints: prompt.ideaHints || baseGuidance.ideaHints || [],
    exampleIdeas: prompt.exampleIdeas || baseGuidance.exampleIdeas || [],
  };
  const ideaHints = guidance.ideaHints;
  const exampleIdeas = guidance.exampleIdeas;
  const guidanceMarkup = (ideaHints.length || exampleIdeas.length)
    ? `
      <details class="idea-toggle">
        <summary>思路提示 / 可用例子</summary>
        <div class="idea-toggle__body">
          ${ideaHints.length ? `<div><strong>可怎么展开</strong><ul>${ideaHints.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>` : ""}
          ${exampleIdeas.length ? `<div><strong>可以怎么举例</strong><ul>${exampleIdeas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>` : ""}
        </div>
      </details>
    `
    : "";

  return `
    <div class="tag-row">
      <span class="tag">${escapeHtml(labelForExam(getPromptExam(prompt)))}</span>
      <span class="tag">${labelForTask(prompt.task)}</span>
      <span class="tag">${escapeHtml(prompt.source)}</span>
      ${prompt.genre ? `<span class="tag">${escapeHtml(prompt.genre)}</span>` : ""}
      ${wordTarget ? `<span class="tag">${escapeHtml(wordTarget)}</span>` : ""}
      ${categories}
    </div>
    <div>
      <h3>${escapeHtml(prompt.title)}</h3>
      <p>${escapeHtml(prompt.prompt)}</p>
    </div>
    ${details.length ? `<div><strong>题目信息</strong><ul>${details.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>` : ""}
    ${requirements.length ? `<div><strong>写作清单</strong><ul>${requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>` : ""}
    ${guidanceMarkup}
    ${related.length ? `<div><strong>可先调用这些句式</strong><ul>${related.map((item) => `<li>${escapeHtml(item.structure)}</li>`).join("")}</ul></div>` : ""}
  `;
}

function evaluateParagraph() {
  const text = els.paragraphText.value.trim();
  if (!text) {
    els.paragraphResult.innerHTML = "<p>先写一个段落，再来评分。</p>";
    return;
  }
  const prompt = currentParagraphPrompt();
  const result = evaluateWriting(text, prompt, "paragraph");
  updateCorpusFromReview(prompt, result);
  renderLocalEvaluation(els.paragraphResult, result, { title: prompt.title, modeLabel: "段落练习" });
  renderCorpus();
  saveState();
  pushHistory({ kind: "paragraph", exam: getPromptExam(prompt), task: prompt.task, title: prompt.title, band: result.overallBand, words: result.words, date: nowLabel(), summary: result.summary, source: "local" });
}

function evaluateEssayLocal() {
  const text = els.essayText.value.trim();
  if (!text) {
    els.essayResult.innerHTML = "<p>先完成整篇写作，再生成反馈。</p>";
    return;
  }
  const prompt = activeEssayPrompt();
  const result = evaluateWriting(text, prompt, "essay");
  updateCorpusFromReview(prompt, result);
  renderLocalEvaluation(els.essayResult, result, { title: prompt.title, modeLabel: "本地快评" });
  renderCorpus();
  saveState();
  pushHistory({ kind: "essay", exam: getPromptExam(prompt), task: prompt.task, title: prompt.title, band: result.overallBand, words: result.words, date: nowLabel(), summary: result.summary, source: "local" });
}

function setEssayAiBusy(isBusy, label = "AI 精批") {
  if (!els.essayAiEvaluate) {
    return;
  }
  if (!els.essayAiEvaluate.dataset.defaultLabel) {
    els.essayAiEvaluate.dataset.defaultLabel = els.essayAiEvaluate.textContent.trim() || "AI 精批";
  }
  els.essayAiEvaluate.disabled = isBusy;
  els.essayAiEvaluate.textContent = isBusy
    ? label
    : els.essayAiEvaluate.dataset.defaultLabel;
}

function renderAiPendingEvaluation(backendLabel, payload = {}) {
  const shortJobId = String(payload.job_id || "").trim().slice(0, 8);
  return `
    <div class="analysis-shell">
      <div class="tag-row">
        <span class="tag">AI 精批后台处理中</span>
        <span class="tag">${escapeHtml(backendLabel)}</span>
        ${payload.review_model ? `<span class="tag">模型 ${escapeHtml(payload.review_model)}</span>` : ""}
        ${shortJobId ? `<span class="tag">任务 ${escapeHtml(shortJobId)}</span>` : ""}
      </div>
      <p>这次精批已经转到后台继续处理。你可以先看上面的本地快评，页面会自动轮询结果并补上完整 AI 批改。</p>
    </div>
  `;
}

function applyAiEvaluationResult(prompt, localReview, payload) {
  els.essayResult.innerHTML = "";
  renderLocalEvaluation(els.essayResult, localReview, { title: prompt.title, modeLabel: "本地快评" });
  els.essayResult.insertAdjacentHTML("beforeend", renderAiEvaluation(prompt, payload));
  updateCorpusFromReview(prompt, localReview, payload.review || null);
  pushHistory({
    kind: "essay",
    exam: getPromptExam(prompt),
    task: prompt.task,
    title: `${prompt.title} · AI`,
    band: Number(payload.review?.overall_band || localReview.overallBand),
    words: localReview.words,
    date: nowLabel(),
    summary: payload.review?.summary || localReview.summary,
    source: "ai",
  });
  state.aiArchive.unshift({
    timestamp: Date.now(),
    title: prompt.title,
    exam: getPromptExam(prompt),
    task: prompt.task,
    band: Number(payload.review?.overall_band || 0),
    keyIssue: payload.review?.key_issues?.[0] || payload.review?.summary || "",
  });
  state.aiArchive = state.aiArchive.slice(0, 12);
  saveState();
  renderStats();
  renderHistory();
  renderCorpus();
}

function waitFor(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

async function pollAiReviewJob(jobId) {
  const deadline = Date.now() + AI_REVIEW_POLL_TIMEOUT_MS;

  while (Date.now() < deadline) {
    await waitFor(AI_REVIEW_POLL_INTERVAL_MS);
    const response = await fetch(`/api/ai/writing-review-status?id=${encodeURIComponent(jobId)}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 404) {
        continue;
      }
      throw new Error(payload.error || "无法读取后台精批进度。");
    }

    if (payload.status === "completed") {
      return payload;
    }

    if (payload.status === "failed") {
      throw new Error(payload.error || "后台精批失败。");
    }
  }

  throw new Error("AI 精批仍在后台处理中，请稍后保持页面开启再等一会，或稍后重新点击 AI 精批。");
}

async function evaluateEssayAi() {
  const text = els.essayText.value.trim();
  if (!text) {
    els.essayResult.innerHTML = "<p>先完成整篇写作，再生成 AI 精批。</p>";
    return;
  }

  const selectedBackend = getSelectedAiBackend();
  const backendStatus = getSelectedAiBackendStatus();
  const fallbackBackend = getAvailableAiBackendIds().find((id) => id !== selectedBackend);

  if (!backendStatus.available) {
    const fallbackText = fallbackBackend
      ? `当前可用的是 ${AI_BACKEND_OPTIONS[fallbackBackend].label}，你也可以先切过去再批改。`
      : "你也可以先点击“本地快评”，先看结构问题。";
    els.essayResult.innerHTML = `
      <div class="feedback feedback--warning">
        <strong>当前选择的 AI 后端还没有连接上</strong>
        <p>如果你在本地使用，请先启动根目录的 server.py；如果你在在线版使用，请检查当前项目的 AI 环境变量是否已经配好。${fallbackText}</p>
      </div>
    `;
    return;
  }

  const prompt = activeEssayPrompt();
  const localReview = evaluateWriting(text, prompt, "essay");
  renderLocalEvaluation(els.essayResult, localReview, { title: prompt.title, modeLabel: "本地快评" });
  els.essayResult.insertAdjacentHTML("beforeend", `
    <div class="analysis-shell">
      <h3>AI 精批进行中</h3>
      <p>我会把题目、作文和本地结构信号一起发给 ${escapeHtml(backendStatus.label)}，返回四项分解、句子升级和重写提纲。</p>
    </div>
  `);

  try {
    setEssayAiBusy(true, "AI 精批提交中…");
    const response = await fetch("/api/ai/writing-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        backend: selectedBackend,
        device_id: getCloudDeviceId(),
        prompt_payload: prompt,
        essay_text: text,
        target_band: state.profile.targetBand,
        local_metrics: {
          words: localReview.words,
          sentences: localReview.sentences,
          paragraphs: localReview.paragraphs,
          keywordCoverage: localReview.keywordCoverage,
          connectorCount: localReview.connectorCount,
          overallBand: localReview.overallBand,
          breakdown: localReview.breakdown,
          signals: localReview.signals,
          grammarIssues: localReview.languageReview?.grammarIssues || [],
          lexicalIssues: localReview.languageReview?.lexicalIssues || [],
          idiomIssues: localReview.languageReview?.idiomIssues || [],
          polishedVersion: localReview.polishedVersion,
        },
      }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.error || "AI 写作精批服务暂时不可用。");
    }

    if (payload.async && payload.job_id) {
      els.essayResult.innerHTML = "";
      renderLocalEvaluation(els.essayResult, localReview, { title: prompt.title, modeLabel: "本地快评" });
      els.essayResult.insertAdjacentHTML("beforeend", renderAiPendingEvaluation(payload.provider_label || backendStatus.label, payload));
      setEssayAiBusy(true, "AI 精批后台处理中…");
      const finalPayload = await pollAiReviewJob(payload.job_id);
      applyAiEvaluationResult(prompt, localReview, finalPayload);
    } else {
      applyAiEvaluationResult(prompt, localReview, payload);
    }
  } catch (error) {
    const message = String(error.message || "AI 服务暂时无法处理这篇作文。当前已保留本地快评结果。");
    const friendlyMessage = /free-models-per-day|今日请求额度已经用完|解锁更多免费请求/i.test(message)
      ? "OpenRouter 免费模型今天的额度已经用完了，所以在线 AI 精批暂时不能继续使用。你可以先用本地快评，等额度重置后再试，或者给 OpenRouter 账户充值。"
      : message;
    els.essayResult.insertAdjacentHTML("beforeend", `
      <div class="feedback feedback--danger">
        <strong>AI 精批失败</strong>
        <p>${escapeHtml(friendlyMessage)}</p>
      </div>
    `);
  } finally {
    setEssayAiBusy(false);
  }
}

function renderLocalEvaluation(container, result, meta) {
  const targetGap = Math.max(0, Number(state.profile.targetBand) - result.overallBand);
  const criterionLabel = getCriterionLabel(result.promptMeta || { exam: result.exam, task: result.task });
  const metricCards = [
    { key: "taskResponse", label: criterionLabel, value: result.breakdown.taskResponse },
    { key: "coherence", label: "Coherence & Cohesion", value: result.breakdown.coherence },
    { key: "lexical", label: "Lexical Resource", value: result.breakdown.lexical },
    { key: "grammar", label: "Grammar Range & Accuracy", value: result.breakdown.grammar },
  ];

  const cards = metricCards.map((card) => {
    const percentage = Math.min(100, (card.value / 9) * 100);
    return `
      <article class="result-card">
        <span class="result-card__score">${card.value.toFixed(1)}</span>
        <h3>${escapeHtml(card.label)}</h3>
        <p>${escapeHtml(describeMetric(card.key, card.value))}</p>
        <div class="score-strip"><span style="width:${percentage}%"></span></div>
      </article>
    `;
  }).join("");

  const studyPackMarkup = [
    ...(result.studyPack?.recommendedPatterns || []),
    ...(result.studyPack?.lexicalUpgrades || []),
  ].slice(0, 6).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");

  container.innerHTML = `
    <h3>${escapeHtml(meta.modeLabel)}</h3>
    <p><strong>${escapeHtml(meta.title)}</strong> 的估算总分为 <strong>${result.overallBand.toFixed(1)}</strong>。${escapeHtml(result.summary)}</p>
    <div class="result-stats">
      <span class="chip">${escapeHtml(labelForExam(result.exam))}</span>
      <span class="chip">${labelForTask(result.task)}</span>
      <span class="chip">${result.words} 词</span>
      <span class="chip">${result.sentences} 句</span>
      <span class="chip">${result.paragraphs} 段</span>
      <span class="chip">关键词覆盖 ${result.keywordCoverage}%</span>
      <span class="chip">连接词 ${result.connectorCount} 个</span>
      <span class="chip">距离目标分 ${targetGap.toFixed(1)}</span>
    </div>
    <div class="result-grid">${cards}</div>
    <div class="feedback-grid">
      <article class="feedback-card">
        <h3>这次写得比较好的地方</h3>
        <p>${result.strengths.map((item) => escapeHtml(item)).join(" ")}</p>
      </article>
      <article class="feedback-card">
        <h3>最主要的问题</h3>
        <p>${result.keyIssues.map((item) => escapeHtml(item)).join(" ")}</p>
      </article>
      <article class="feedback-card">
        <h3>下一轮先改什么</h3>
        <p>${result.improvementActions.map((item) => escapeHtml(item)).join(" ")}</p>
      </article>
    </div>
    <div class="language-grid">
      <article class="language-card">
        <h3>语法检查</h3>
        <ul>${renderIssueItems(result.languageReview?.grammarIssues || [])}</ul>
      </article>
      <article class="language-card">
        <h3>词汇表达检查</h3>
        <ul>${renderIssueItems(result.languageReview?.lexicalIssues || [])}</ul>
      </article>
      <article class="language-card">
        <h3>英文习惯表达</h3>
        <ul>${renderIssueItems(result.languageReview?.idiomIssues || [])}</ul>
      </article>
    </div>
    <div class="compare-grid">
      <article class="compare-card">
        <h3>你的原版</h3>
        <div class="compare-card__text">${result.comparison?.originalHtml || escapeHtml(result.originalText || "")}</div>
      </article>
      <article class="compare-card">
        <h3>润色版（改动标红）</h3>
        <div class="compare-card__text">${result.comparison?.revisedHtml || escapeHtml(result.polishedVersion || "")}</div>
      </article>
    </div>
    <div class="material-card">
      <h3>本次建议加入你的语料库</h3>
      ${studyPackMarkup ? `<div class="tag-row">${studyPackMarkup}</div>` : "<p>这次先以结构和表达修正为主，下一轮会逐步累积更适合你的句型。</p>"}
    </div>
  `;
}

function renderAiEvaluation(prompt, payload) {
  const review = payload.review || {};
  const criterionLabel = getCriterionLabel(prompt);
  const backendLabel = payload.provider_label || getSelectedAiBackendStatus().label;
  return `
    <div class="analysis-shell">
      <div class="tag-row">
        <span class="tag">AI 精批</span>
        <span class="tag">${escapeHtml(labelForExam(getPromptExam(prompt)))}</span>
        <span class="tag">${labelForTask(prompt.task)}</span>
        <span class="tag">${escapeHtml(backendLabel)}</span>
        <span class="tag">模型 ${escapeHtml(payload.review_model || aiState.reviewModel || "")}</span>
        <span class="tag">预估 ${Number(review.overall_band || 0).toFixed(1)}</span>
      </div>
      <div class="analysis-grid">
        <article class="analysis-card">
          <span>总分预估</span>
          <strong>${Number(review.overall_band || 0).toFixed(1)}</strong>
        </article>
        <article class="analysis-card">
          <span>${criterionLabel}</span>
          <strong>${Number(review.band_breakdown?.task_response || 0).toFixed(1)}</strong>
        </article>
        <article class="analysis-card">
          <span>Coherence</span>
          <strong>${Number(review.band_breakdown?.coherence_cohesion || 0).toFixed(1)}</strong>
        </article>
        <article class="analysis-card">
          <span>Lexical</span>
          <strong>${Number(review.band_breakdown?.lexical_resource || 0).toFixed(1)}</strong>
        </article>
        <article class="analysis-card">
          <span>Grammar</span>
          <strong>${Number(review.band_breakdown?.grammatical_range_accuracy || 0).toFixed(1)}</strong>
        </article>
      </div>
      <div class="feedback-grid">
        <article class="feedback-card">
          <h3>AI 总评</h3>
          <p>${escapeHtml(review.summary || "")}</p>
        </article>
        <article class="feedback-card">
          <h3>关键问题</h3>
          <p>${(review.key_issues || []).map((item) => escapeHtml(item)).join(" ")}</p>
        </article>
        <article class="feedback-card">
          <h3>下一轮重点</h3>
          <p>${(review.improvement_actions || []).map((item) => escapeHtml(item)).join(" ")}</p>
        </article>
      </div>
      ${(review.sentence_upgrades || []).length ? `
        <div class="correction-list">
          ${review.sentence_upgrades.map((item) => `
            <article class="correction-item">
              <strong>原句</strong>
              <p>${escapeHtml(item.source)}</p>
              <strong>更优写法</strong>
              <p>${escapeHtml(item.better_version)}</p>
              <p>${escapeHtml(item.why)}</p>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${(review.vocabulary_upgrades || []).length ? `
        <div class="correction-list">
          ${review.vocabulary_upgrades.map((item) => `
            <article class="correction-item">
              <strong>词汇升级</strong>
              <p>${escapeHtml(item.original)} -> ${escapeHtml(item.improved)}</p>
              <p>${escapeHtml(item.reason)}</p>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${(review.paragraph_plan || []).length ? `
        <div class="material-card">
          <h3>下一轮重写提纲</h3>
          <div class="prompt-list">
            ${review.paragraph_plan.map((item) => `<div class="correction-item">${escapeHtml(item)}</div>`).join("")}
          </div>
        </div>
      ` : ""}
      ${(review.useful_phrases || []).length ? `
        <div class="material-card">
          <h3>建议反复调用的表达</h3>
          <div class="tag-row">${review.useful_phrases.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>
        </div>
      ` : ""}
    </div>
  `;
}

function collectRuleIssues(text, rules, limit = 4) {
  const issues = [];
  rules.forEach((rule) => {
    if (issues.length >= limit) {
      return;
    }
    const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
    let match = regex.exec(text);
    while (match && issues.length < limit) {
      issues.push({
        label: rule.label,
        evidence: match[0],
        suggestion: rule.suggestion,
        reason: rule.reason,
      });
      if (!regex.global) {
        break;
      }
      match = regex.exec(text);
    }
  });
  return dedupeIssues(issues);
}

function dedupeIssues(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.label}::${normalizeSimple(item.evidence)}::${normalizeSimple(item.suggestion)}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function buildLanguageReview(text, prompt, mode, sentences, fragmentCount) {
  const promptMeta = normalizePromptDefinition(prompt);
  const grammarIssues = collectRuleIssues(text, GRAMMAR_RULES, 4);
  const lexicalIssues = collectRuleIssues(text, LEXICAL_RULES, 4);
  const idiomIssues = collectRuleIssues(text, IDIOM_RULES, 4);

  if (fragmentCount) {
    grammarIssues.push({
      label: "句子不完整",
      evidence: `${fragmentCount} 个短句可能像 fragment`,
      suggestion: "检查主语、谓语和完整谓语结构",
      reason: "过短句子容易看起来像不完整句或草稿式表达。",
    });
  }

  if (sentences.some((sentence) => /^[a-z]/.test(sentence.trim()))) {
    grammarIssues.push({
      label: "大小写",
      evidence: "至少有一个句子开头没有大写",
      suggestion: "句首字母统一大写",
      reason: "正式写作里句首小写会显得不够认真。",
    });
  }

  const contractions = text.match(/\b(?:don't|doesn't|can't|won't|it's|there's|isn't|aren't|didn't|shouldn't|I'm|they're|we're)\b/gi) || [];
  if (contractions.length) {
    lexicalIssues.push({
      label: "正式度",
      evidence: contractions.slice(0, 2).join(", "),
      suggestion: "改成完整拼写，例如 do not / cannot / it is",
      reason: "正式写作里通常更适合避免缩写。",
    });
  }

  const hasOneHand = /\bon the one hand\b/i.test(text);
  const hasOtherHand = /\bon the other hand\b/i.test(text);
  if (hasOneHand && !hasOtherHand) {
    idiomIssues.push({
      label: "搭配不完整",
      evidence: "on the one hand",
      suggestion: "补出 on the other hand，或改成 however / by contrast",
      reason: "这个结构通常成对出现。",
    });
  }

  if (getPromptExam(promptMeta) === "ielts" && promptMeta.task === "task1" && /\bi think\b/i.test(text)) {
    idiomIssues.push({
      label: "Task 1 客观性",
      evidence: "I think",
      suggestion: "改成更客观的描述句，不写个人观点",
      reason: "Task 1 不适合加入个人态度。",
    });
  }

  if (mode === "essay" && getPromptExam(promptMeta) === "ielts" && promptMeta.task === "task2" && !/\b(?:for example|for instance|a clear example of this)\b/i.test(text)) {
    idiomIssues.push({
      label: "论证习惯",
      evidence: "例子支撑偏少",
      suggestion: "至少加入一个更具体的 example 或 scenario",
      reason: "Task 2 只有抽象观点时，论证会显得偏空。",
    });
  }

  if (mode === "essay" && getPromptExam(promptMeta) === "kaoyan" && promptMeta.task === "small" && !/^[ \t]*(dear|to whom it may concern|hello)\b/im.test(text)) {
    idiomIssues.push({
      label: "格式感",
      evidence: "缺少明显称呼",
      suggestion: "开头补一个合适的称呼，如 Dear Professor Smith / Dear Sir or Madam",
      reason: "考研小作文首先得像一封真的邮件或书信。",
    });
  }

  if (mode === "essay" && getPromptExam(promptMeta) === "kaoyan" && promptMeta.task === "small" && !/(?:best regards|yours sincerely|sincerely yours|yours truly|sincerely|best wishes|yours faithfully)\s*,?(?:\s*\n|\s*$)/i.test(text)) {
    idiomIssues.push({
      label: "收尾格式",
      evidence: "结尾没有礼貌收束",
      suggestion: "结尾补一个 sign-off，如 Best regards / Yours sincerely",
      reason: "应用文如果没收尾，会像消息发到一半突然断网。",
    });
  }

  return {
    grammarIssues: dedupeIssues(grammarIssues).slice(0, 4),
    lexicalIssues: dedupeIssues(lexicalIssues).slice(0, 4),
    idiomIssues: dedupeIssues(idiomIssues).slice(0, 4),
  };
}

function buildPolishedVersion(text, prompt) {
  const promptMeta = normalizePromptDefinition(prompt);
  let polished = text.trim();
  POLISHING_REPLACEMENTS.forEach(([pattern, replacement]) => {
    polished = polished.replace(pattern, replacement);
  });

  if ((getPromptExam(promptMeta) === "ielts" && promptMeta.task === "task2")
    || (getPromptExam(promptMeta) === "kaoyan" && promptMeta.task === "large")) {
    polished = polished.replace(/\bi think\b/gi, "I believe");
  }

  polished = polished
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/([,.;!?])([A-Za-z])/g, "$1 $2");

  polished = capitalizeSentenceStarts(polished);
  polished = ensureSentenceEndings(polished);
  return polished;
}

function capitalizeSentenceStarts(text) {
  return text
    .split("\n")
    .map((line) => line.replace(/(^|[.!?]\s+)([a-z])/g, (match, prefix, letter) => `${prefix}${letter.toUpperCase()}`))
    .join("\n");
}

function ensureSentenceEndings(text) {
  return text
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return line;
      }
      return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
    })
    .join("\n\n");
}

function diffTokenize(text) {
  return text.match(/\s+|[^\s]+/g) || [];
}

function buildDiffOperations(originalTokens, revisedTokens) {
  const rows = originalTokens.length + 1;
  const cols = revisedTokens.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = originalTokens.length - 1; i >= 0; i -= 1) {
    for (let j = revisedTokens.length - 1; j >= 0; j -= 1) {
      dp[i][j] = originalTokens[i] === revisedTokens[j]
        ? dp[i + 1][j + 1] + 1
        : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const ops = [];
  let i = 0;
  let j = 0;
  while (i < originalTokens.length && j < revisedTokens.length) {
    if (originalTokens[i] === revisedTokens[j]) {
      ops.push({ type: "equal", value: originalTokens[i] });
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      ops.push({ type: "delete", value: originalTokens[i] });
      i += 1;
    } else {
      ops.push({ type: "insert", value: revisedTokens[j] });
      j += 1;
    }
  }
  while (i < originalTokens.length) {
    ops.push({ type: "delete", value: originalTokens[i] });
    i += 1;
  }
  while (j < revisedTokens.length) {
    ops.push({ type: "insert", value: revisedTokens[j] });
    j += 1;
  }
  return ops;
}

function buildDiffComparison(originalText, revisedText) {
  const originalTokens = diffTokenize(originalText);
  const revisedTokens = diffTokenize(revisedText);
  const operations = buildDiffOperations(originalTokens, revisedTokens);

  const originalHtml = operations
    .filter((item) => item.type !== "insert")
    .map((item) => item.type === "delete"
      ? `<span class="diff-token--removed">${escapeHtml(item.value)}</span>`
      : escapeHtml(item.value))
    .join("");

  const revisedHtml = operations
    .filter((item) => item.type !== "delete")
    .map((item) => item.type === "insert"
      ? `<span class="diff-token--added">${escapeHtml(item.value)}</span>`
      : escapeHtml(item.value))
    .join("");

  return { originalHtml, revisedHtml };
}

function extractChangedSentences(originalText, revisedText) {
  const originalSentences = splitEssaySentences(originalText);
  const revisedSentences = splitEssaySentences(revisedText);
  const changed = [];
  const maxLength = Math.max(originalSentences.length, revisedSentences.length);
  for (let index = 0; index < maxLength; index += 1) {
    const originalSentence = (originalSentences[index] || "").trim();
    const revisedSentence = (revisedSentences[index] || "").trim();
    if (revisedSentence && originalSentence !== revisedSentence) {
      changed.push(revisedSentence);
    }
    if (changed.length >= 3) {
      break;
    }
  }
  return changed;
}

function buildStudyPack(prompt, languageReview, polishedVersion, originalText) {
  let recommendedPatterns = phraseBank
    .filter((item) => getScopedExam(item) === getPromptExam(prompt) && item.task === prompt.task && (prompt.categories || []).includes(item.category))
    .slice(0, 4)
    .map((item) => item.structure);
  if (!recommendedPatterns.length) {
    recommendedPatterns = phraseBank
      .filter((item) => getScopedExam(item) === getPromptExam(prompt) && item.task === prompt.task)
      .slice(0, 4)
      .map((item) => item.structure);
  }

  const lexicalUpgrades = [...languageReview.lexicalIssues, ...languageReview.idiomIssues]
    .slice(0, 4)
    .map((item) => `${item.evidence} -> ${String(item.suggestion).split(" / ")[0]}`);

  const grammarWatch = languageReview.grammarIssues.slice(0, 4).map((item) => `${item.label}：${item.reason}`);
  const changedSentences = extractChangedSentences(originalText, polishedVersion);

  return {
    recommendedPatterns,
    lexicalUpgrades,
    grammarWatch,
    polishedSnippets: changedSentences,
  };
}

function mergeCorpusEntries(existingEntries, incomingTexts) {
  const map = new Map((existingEntries || []).map((item) => [normalizeSimple(item.text), { ...item }]));
  incomingTexts.filter(Boolean).forEach((text) => {
    const label = String(text).trim();
    if (!label) {
      return;
    }
    const key = normalizeSimple(label);
    const current = map.get(key);
    if (current) {
      current.count += 1;
      current.lastUpdated = Date.now();
      map.set(key, current);
    } else {
      map.set(key, { text: label, count: 1, lastUpdated: Date.now() });
    }
  });

  return [...map.values()]
    .sort((a, b) => b.count - a.count || b.lastUpdated - a.lastUpdated)
    .slice(0, 12);
}

function updateCorpusFromReview(prompt, result, aiReview = null) {
  state.corpus.usefulPatterns = mergeCorpusEntries(
    state.corpus.usefulPatterns,
    [
      ...(result.studyPack?.recommendedPatterns || []),
      ...(aiReview?.useful_phrases || []),
    ],
  );

  state.corpus.lexicalUpgrades = mergeCorpusEntries(
    state.corpus.lexicalUpgrades,
    [
      ...(result.studyPack?.lexicalUpgrades || []),
      ...((aiReview?.vocabulary_upgrades || []).map((item) => `${item.original} -> ${item.improved}`)),
    ],
  );

  state.corpus.grammarWatchlist = mergeCorpusEntries(
    state.corpus.grammarWatchlist,
    [
      ...(result.studyPack?.grammarWatch || []),
      ...((aiReview?.grammar_patterns || []).map((item) => `${item.label}：${item.advice}`)),
    ],
  );

  state.corpus.idiomWatchlist = mergeCorpusEntries(
    state.corpus.idiomWatchlist,
    result.languageReview.idiomIssues.map((item) => `${item.evidence} -> ${String(item.suggestion).split(" / ")[0]}`),
  );

  state.corpus.polishedSnippets = mergeCorpusEntries(
    state.corpus.polishedSnippets,
    [
      ...(result.studyPack?.polishedSnippets || []),
      ...((aiReview?.sentence_upgrades || []).map((item) => item.better_version)),
    ],
  );
}

function renderCorpus() {
  const corpus = normalizeCorpusState(state.corpus);
  const sections = [
    { title: "最适合你反复调用的句型", items: corpus.usefulPatterns, empty: "做完几次练习后，这里会留下更适合你当前题型的句型。" },
    { title: "高频词汇升级", items: corpus.lexicalUpgrades, empty: "每次练习里被替换得最多的词和短语会累积在这里。" },
    { title: "当前要盯住的语法问题", items: corpus.grammarWatchlist, empty: "这里会积累你最常重复出现的语法风险点。" },
    { title: "更像英文习惯的表达", items: corpus.idiomWatchlist, empty: "不太自然的表达和更顺的替换说法会慢慢沉淀在这里。" },
    { title: "值得背下来的润色句", items: corpus.polishedSnippets, empty: "每次改写里更成熟的句子会保留在这里，方便你回看。" },
  ];

  els.corpusGrid.innerHTML = sections.map((section) => `
    <article class="corpus-card">
      <div>
        <h3>${escapeHtml(section.title)}</h3>
      </div>
      ${section.items.length ? `
        <ul>
          ${section.items.slice(0, 5).map((item) => `<li>${escapeHtml(item.text)} <span class="corpus-card__count">x${item.count}</span></li>`).join("")}
        </ul>
      ` : `<p>${escapeHtml(section.empty)}</p>`}
    </article>
  `).join("");
}

function renderIssueItems(items) {
  if (!items.length) {
    return "<li>这一项暂时没有特别突出的硬伤，可以继续保持。</li>";
  }
  return items.map((item) => `
    <li>
      <strong>${escapeHtml(item.label)}</strong>
      ：${escapeHtml(item.evidence)} -> ${escapeHtml(item.suggestion)}。${escapeHtml(item.reason)}
    </li>
  `).join("");
}

function evaluateWriting(text, prompt, mode) {
  const promptMeta = normalizePromptDefinition(prompt);
  const normalized = normalizeEssayText(text);
  const words = countEssayWords(text);
  const sentences = splitEssaySentences(text);
  const paragraphs = splitEssayParagraphs(text);
  const connectorHits = matchEssayPhrases(normalized, WRITING_CONNECTORS);
  const academicHits = matchEssayPhrases(normalized, WRITING_ACADEMIC_PHRASES);
  const subordinateHits = matchEssayPhrases(normalized, WRITING_SUBORDINATORS);
  const keywordHits = matchEssayPhrases(normalized, prompt.keywords || []);
  const keywordCoverage = prompt.keywords?.length ? Math.round((keywordHits.length / prompt.keywords.length) * 100) : 0;
  const lexicalDiversity = words ? countUniqueMeaningfulWords(text) / words : 0;
  const averageSentenceLength = sentences.length ? words / sentences.length : 0;
  const topRepeatRatio = getTopRepeatRatio(text);
  const hasOverview = includesEssayPhrase(normalized, ["overall", "it is clear that", "in general"]);
  const hasOpinion = includesEssayPhrase(normalized, ["i believe", "i think", "in my view", "from my perspective", "i would argue"]);
  const hasCommentary = includesEssayPhrase(normalized, [
    "this phenomenon",
    "this trend",
    "the chart suggests",
    "the chart reflects",
    "the picture reveals",
    "this picture is",
    "in my view",
    "i believe",
  ]);
  const hasConclusion = includesEssayPhrase(normalized, ["in conclusion", "to conclude", "to sum up"]);
  const hasGreeting = /^[ \t]*(dear|to whom it may concern|hello)\b/im.test(text);
  const hasSignoff = /(?:best regards|yours sincerely|sincerely yours|yours truly|sincerely|best wishes|yours faithfully)\s*,?(?:\s*\n|\s*$)/i.test(text);
  const punctuationVariety = [",", ";", ":"].reduce((count, mark) => count + (text.includes(mark) ? 1 : 0), 0);
  const fragmentCount = sentences.filter((sentence) => countEssayWords(sentence) < 4).length;
  const task = promptMeta.task;
  const exam = getPromptExam(promptMeta);
  const minimumWords = getMinimumWordsForPrompt(promptMeta, mode);
  const targetWords = getTargetWordsForPrompt(promptMeta, mode);
  const isIeltsTask1 = exam === "ielts" && task === "task1";
  const isIeltsTask2 = exam === "ielts" && task === "task2";
  const isKaoyanSmall = exam === "kaoyan" && task === "small";
  const isKaoyanLarge = exam === "kaoyan" && task === "large";

  let taskResponse = 5;
  if (words >= targetWords) {
    taskResponse += 1.2;
  } else if (words >= minimumWords) {
    taskResponse += 0.5;
  } else if (words >= minimumWords * 0.85) {
    taskResponse -= 0.2;
  } else {
    taskResponse -= 1.4;
  }

  if (keywordCoverage >= 60) {
    taskResponse += 0.8;
  } else if (keywordCoverage >= 35) {
    taskResponse += 0.3;
  } else {
    taskResponse -= 0.6;
  }

  if (isIeltsTask1) {
    if (hasOverview) {
      taskResponse += 0.6;
    } else if (mode === "essay") {
      taskResponse -= 0.8;
    }
    if (hasOpinion) {
      taskResponse -= 0.8;
    }
  } else if (isIeltsTask2) {
    if (hasOpinion) {
      taskResponse += 0.5;
    } else {
      taskResponse -= 0.4;
    }
    if (mode === "essay" && hasConclusion) {
      taskResponse += 0.4;
    } else if (mode === "essay") {
      taskResponse -= 0.3;
    }
  } else if (isKaoyanSmall) {
    if (hasGreeting) {
      taskResponse += 0.4;
    } else if (mode === "essay") {
      taskResponse -= 0.5;
    }
    if (hasSignoff) {
      taskResponse += 0.4;
    } else if (mode === "essay") {
      taskResponse -= 0.5;
    }
  } else if (isKaoyanLarge) {
    if (hasCommentary) {
      taskResponse += 0.5;
    } else {
      taskResponse -= 0.4;
    }
    if (mode === "essay" && hasConclusion) {
      taskResponse += 0.3;
    }
  }
  if (sentences.length < (mode === "essay" ? 8 : 4)) {
    taskResponse -= 0.4;
  }
  taskResponse = clampBand(taskResponse);

  let coherence = 5;
  if (mode === "essay") {
    const ideal = isIeltsTask1 ? [3, 4] : isIeltsTask2 ? [4, 5] : isKaoyanSmall ? [3, 4] : [3, 4];
    if (paragraphs.length >= ideal[0] && paragraphs.length <= ideal[1]) {
      coherence += 1;
    } else if (paragraphs.length === ideal[0] - 1) {
      coherence += 0.3;
    } else {
      coherence -= 0.9;
    }
  } else if (paragraphs.length <= 2) {
    coherence += 0.8;
  } else {
    coherence -= 0.3;
  }

  if (connectorHits.length >= (mode === "essay" ? 4 : 2)) {
    coherence += 0.8;
  } else if (connectorHits.length >= 1) {
    coherence += 0.3;
  } else {
    coherence -= 0.6;
  }

  if (averageSentenceLength >= 12 && averageSentenceLength <= 24) {
    coherence += 0.3;
  }
  coherence = clampBand(coherence);

  let lexical = 5;
  if (lexicalDiversity >= 0.48) {
    lexical += 0.9;
  } else if (lexicalDiversity >= 0.4) {
    lexical += 0.4;
  } else {
    lexical -= 0.5;
  }
  if (academicHits.length >= (mode === "essay" ? 4 : 2)) {
    lexical += 0.8;
  } else if (academicHits.length >= 1) {
    lexical += 0.3;
  }
  if (topRepeatRatio > 0.1) {
    lexical -= 0.7;
  } else if (topRepeatRatio > 0.075) {
    lexical -= 0.3;
  }
  lexical = clampBand(lexical);

  let grammar = 5;
  if (averageSentenceLength >= 10 && averageSentenceLength <= 28) {
    grammar += 0.8;
  } else if (averageSentenceLength >= 8 && averageSentenceLength <= 32) {
    grammar += 0.3;
  } else {
    grammar -= 0.5;
  }
  if (subordinateHits.length >= (mode === "essay" ? 3 : 1)) {
    grammar += 0.7;
  } else {
    grammar -= 0.3;
  }
  if (punctuationVariety >= 2) {
    grammar += 0.3;
  }
  if (fragmentCount >= 2) {
    grammar -= 0.6;
  }
  grammar = clampBand(grammar);

  const overallBand = roundToHalf((taskResponse + coherence + lexical + grammar) / 4);
  const strengths = [];
  const keyIssues = [];
  const improvementActions = [];

  if (taskResponse >= 6.5) {
    if (isIeltsTask1) {
      strengths.push("题目回应比较到位，已经开始抓总趋势和重点信息。");
    } else if (isKaoyanSmall) {
      strengths.push("写作目的比较清楚，应用文的语气和任务意识已经出来了。");
    } else if (isKaoyanLarge) {
      strengths.push("大作文主线比较清楚，已经开始把图表/图画和观点拉到一起。");
    } else {
      strengths.push("题目回应较完整，立场和主线基本清楚。");
    }
  }
  if (coherence >= 6.5) strengths.push("结构比较清楚，段落推进和连接词使用已经有训练痕迹。");
  if (lexical >= 6.5) strengths.push("词汇不只停留在基础表达，已经有一定学术写作感。");
  if (grammar >= 6.5) strengths.push("句型有变化，复杂句和从句使用已经开始稳定。");

  if (words < minimumWords) {
    keyIssues.push(`当前只有 ${words} 词，字数还没达标。`);
    improvementActions.push(`先把字数补到至少 ${minimumWords} 词以上，再评分会更接近真实水平。`);
  }
  if (isIeltsTask1 && !hasOverview) {
    keyIssues.push("Task 1 缺少清晰的 overview。");
    improvementActions.push("用 Overall / It is clear that 先概括最大趋势，再去分组写细节。");
  }
  if (isIeltsTask2 && !hasOpinion) {
    keyIssues.push("Task 2 立场还不够显眼。");
    improvementActions.push("把 In my view / I would argue that 放进引言或第一主体段。");
  }
  if (mode === "essay" && isIeltsTask2 && !hasConclusion) {
    keyIssues.push("整篇作文还缺一个真正收束的结尾。");
    improvementActions.push("用 In conclusion 重申观点，不要在结尾开新论点。");
  }
  if (mode === "essay" && isKaoyanSmall && !hasGreeting) {
    keyIssues.push("小作文开头还缺明显的称呼，格式感不够。");
    improvementActions.push("应用文开头先把对象叫出来，比如 Dear Sir or Madam / Dear Professor Li。");
  }
  if (mode === "essay" && isKaoyanSmall && !hasSignoff) {
    keyIssues.push("小作文结尾还没收住，落款和结束语比较松。");
    improvementActions.push("结尾补一个礼貌收束，比如 Best regards / Yours sincerely。");
  }
  if (isKaoyanLarge && !hasCommentary) {
    keyIssues.push("大作文还没把图表或图画往一个明确观点上拽。");
    improvementActions.push("先用一句话点出你看到的核心现象，再写 why it matters。");
  }
  if (connectorHits.length < (mode === "essay" ? 4 : 2)) {
    keyIssues.push("连接词偏少，句子之间的推进感还不够明显。");
    improvementActions.push("下一轮主动加入 however, therefore, by contrast, as a result。");
  }
  if (topRepeatRatio > 0.09) {
    keyIssues.push("有些核心词重复偏多。");
    improvementActions.push("给高频词准备 2 到 3 个替换表达，减少整段重复。");
  }
  if (subordinateHits.length < (mode === "essay" ? 3 : 1)) {
    improvementActions.push("试着增加 because, while, which means, although 这类从句结构。");
  }

  const summary = overallBand >= Number(state.profile.targetBand)
    ? "这次已经达到你的目标带。下一步可以把重点放在稳定输出和减少失误。"
    : overallBand >= Number(state.profile.currentBand)
      ? "这次表现已经高于或接近你当前设定水平，继续压实结构和词汇就有机会往上走。"
      : "这次更像是在暴露短板，很适合用来做下一轮针对性练习。";

  const languageReview = buildLanguageReview(text, prompt, mode, sentences, fragmentCount);
  const polishedVersion = buildPolishedVersion(text, prompt);
  const comparison = buildDiffComparison(text, polishedVersion);
  const studyPack = buildStudyPack(prompt, languageReview, polishedVersion, text);

  return {
    exam,
    task,
    promptMeta,
    originalText: text,
    words,
    sentences: sentences.length,
    paragraphs: paragraphs.length || 1,
    connectorCount: connectorHits.length,
    keywordCoverage,
    overallBand,
    summary,
    strengths: strengths.length ? strengths : ["已经完成了一篇可评价的文本，这本身就是有效训练。"],
    keyIssues: keyIssues.length ? keyIssues : ["当前没有特别突出的结构性问题，可以开始追求更高阶的词汇和句法变化。"],
    improvementActions: improvementActions.length ? improvementActions : ["下一轮把结构、词汇和例子继续压实。"],
    breakdown: { taskResponse, coherence, lexical, grammar },
    signals: { hasOverview, hasOpinion, hasConclusion },
    languageReview,
    polishedVersion,
    comparison,
    studyPack,
  };
}

function describeMetric(metric, score) {
  const index = score >= 7 ? 3 : score >= 6 ? 2 : score >= 5 ? 1 : 0;
  return {
    taskResponse: [
      "回应题目比较有限，常见问题是字数不足或重点不够集中。",
      "基本能回应题目，但关键点展开还不够充分。",
      "回应较完整，已经能抓住重点并组织主要信息。",
      "回应成熟，重点清楚，展开有效且取舍合理。",
    ],
    coherence: [
      "结构略松散，段落和连接词还需要更稳定。",
      "整体顺序基本清楚，但衔接还可以更自然。",
      "结构清晰，段落功能明确，信息推进顺畅。",
      "衔接自然，段落之间的逻辑关系很成熟。",
    ],
    lexical: [
      "词汇较基础，重复略多，学术表达还不够稳定。",
      "词汇能满足表达，但可以进一步提升多样性和准确性。",
      "词汇选择比较合适，已有一定变化和搭配意识。",
      "词汇灵活，搭配自然，能稳定使用更高阶表达。",
    ],
    grammar: [
      "句式变化还比较少，复杂句稳定性需要提升。",
      "基础句型可用，但复杂句和标点控制仍有上升空间。",
      "句型已有层次，长短句搭配和复杂结构较自然。",
      "句法控制成熟，复杂句使用较稳，表达流畅。",
    ],
  }[metric][index];
}

function renderHistory() {
  const history = [...state.history];
  if (state.aiArchive.length) {
    state.aiArchive.slice(0, 3).forEach((item) => {
      history.unshift({ kind: "essay", exam: item.exam || "ielts", task: item.task, title: `${item.title} · AI 档案`, band: item.band, words: "-", date: formatDate(item.timestamp), summary: item.keyIssue, source: "ai" });
    });
  }

  if (!history.length) {
    els.historyList.innerHTML = `<div class="empty-state">还没有练习记录。先做一个段落或整篇，系统会把最近结果保存在本地。</div>`;
    return;
  }

  els.historyList.innerHTML = history.slice(0, 12).map((item) => `
    <article class="history-item">
      <div>
        <span class="history-item__band">${Number(item.band).toFixed(1)}</span>
        <h3>${escapeHtml(item.title)}</h3>
      </div>
      <div class="history-tags">
        <span class="tag">${item.kind === "essay" ? "整篇" : "段落"}</span>
        <span class="tag">${escapeHtml(labelForExam(item.exam || "ielts"))}</span>
        <span class="tag">${labelForTask(item.task)}</span>
        <span class="tag">${item.source === "ai" ? "AI" : "本地"}</span>
      </div>
      <p>${escapeHtml(item.summary)}</p>
      <p>${escapeHtml(item.date)}</p>
    </article>
  `).join("");
}

function pushHistory(entry) {
  state.history.unshift(entry);
  state.history = state.history.slice(0, 12);
  saveState();
  renderStats();
  renderHistory();
}

function currentBlankExercise() {
  const pool = getBlankPool();
  return pool.find((item) => item.id === state.selections.blankId) || pool[0] || blankExercises[0];
}

function currentParagraphPrompt() {
  return normalizePromptDefinition(
    getParagraphPromptPool().find((item) => item.id === state.selections.paragraphId)
      || getParagraphPromptPool()[0]
      || paragraphPrompts[0],
  );
}

function currentEssayPrompt() {
  return normalizePromptDefinition(
    getEssayPromptPool().find((item) => item.id === state.selections.essayId)
      || getEssayPromptPool()[0]
      || essayPrompts[0],
  );
}

function activeEssayPrompt() {
  const basePrompt = currentEssayPrompt();
  const customPrompt = els.customPrompt.value.trim();
  if (!customPrompt) {
    return basePrompt;
  }
  const normalizedExam = normalizeExam(state.selections.essayExam);
  const minimumWords = getMinimumWordsForPrompt({ exam: normalizedExam, task: state.selections.essayTask }, "essay");
  const requirements = normalizedExam === "kaoyan"
    ? state.selections.essayTask === "small"
      ? ["至少 100 词", "格式别散架", "把写作目的和语气交代清楚"]
      : ["至少 160 词", "先点题再展开", "别让观点在半路散掉"]
    : state.selections.essayTask === "task1"
      ? ["至少 150 词", "写出 overview", "优先概括主趋势和关键对比"]
      : ["至少 250 词", "立场要稳定清楚", "每段围绕一个主论点展开"];
  return {
    title: "自定义题目",
    source: "用户粘贴题目",
    exam: normalizedExam,
    task: state.selections.essayTask,
    genre: "custom prompt",
    prompt: customPrompt,
    details: ["当前使用你粘贴的题目，下面的结构建议已切到通用模式。"],
    requirements,
    categories: [],
    topics: [],
    minimumWords,
    keywords: extractPromptKeywords(customPrompt).length ? extractPromptKeywords(customPrompt) : basePrompt.keywords,
  };
}

function filterByPreferredTask(collection) {
  const preferredExam = normalizeExam(state.profile.preferredExam);
  return collection.filter((item) => {
    if (getPromptExam(item) !== preferredExam) {
      return false;
    }
    return state.profile.preferredTask === "all" ? true : item.task === state.profile.preferredTask;
  });
}

function getEssayPromptPool() {
  return essayPrompts.filter((item) => {
    const examMatch = getPromptExam(item) === normalizeExam(state.selections.essayExam);
    const taskMatch = item.task === state.selections.essayTask;
    const topicMatch = state.selections.essayTopic === "all" || (item.topics || []).includes(state.selections.essayTopic);
    return examMatch && taskMatch && topicMatch;
  });
}

function createDefaultBackendStatus() {
  return Object.fromEntries(
    Object.entries(AI_BACKEND_OPTIONS).map(([id, meta]) => [
      id,
      {
        id,
        label: meta.label,
        available: false,
        provider: id,
        providerLabel: meta.label,
        reviewModel: "",
        writingReviewModel: "",
      },
    ]),
  );
}

function normalizeAiBackend(value) {
  return Object.prototype.hasOwnProperty.call(AI_BACKEND_OPTIONS, value) ? value : "openai";
}

function normalizeBackendPayload(id, payload = {}) {
  const fallback = AI_BACKEND_OPTIONS[id];
  return {
    id,
    label: payload.provider_label || fallback.label,
    available: Boolean(payload.available),
    provider: payload.provider || id,
    providerLabel: payload.provider_label || fallback.label,
    reviewModel: payload.review_model || "",
    writingReviewModel: payload.writing_review_model || payload.review_model || "",
  };
}

function getSelectedAiBackend() {
  return normalizeAiBackend(state.selections.aiBackend);
}

function getSelectedAiBackendStatus() {
  return aiState.backends[getSelectedAiBackend()] || createDefaultBackendStatus()[getSelectedAiBackend()];
}

function getAvailableAiBackendIds() {
  return Object.values(aiState.backends)
    .filter((backend) => backend.available)
    .map((backend) => backend.id);
}

function syncSelectedAiBackend(allowAutoSwitch = true) {
  const previous = state.selections.aiBackend;
  const selected = getSelectedAiBackend();
  const availableBackends = getAvailableAiBackendIds();

  if (allowAutoSwitch && availableBackends.length && !aiState.backends[selected]?.available) {
    state.selections.aiBackend = availableBackends.includes("openai") ? "openai" : availableBackends[0];
  } else {
    state.selections.aiBackend = selected;
  }

  aiState.reviewModel = getSelectedAiBackendStatus().writingReviewModel || getSelectedAiBackendStatus().reviewModel || "";
  if (els.essayAiBackend) {
    els.essayAiBackend.value = state.selections.aiBackend;
  }
  if (previous !== state.selections.aiBackend) {
    saveState();
  }
}

function countEssayWords(text) {
  const matches = text.trim().match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g);
  return matches ? matches.length : 0;
}

function splitEssayParagraphs(text) {
  return text.split(/\n\s*\n|\n+/).map((segment) => segment.trim()).filter(Boolean);
}

function splitEssaySentences(text) {
  const matches = text.match(/[^.!?]+[.!?]?/g);
  return (matches || []).map((segment) => segment.trim()).filter(Boolean);
}

function normalizeEssayText(text) {
  return ` ${text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim()} `;
}

function normalizeSimple(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function matchEssayPhrases(normalizedText, phrases) {
  return phrases.filter((phrase) => normalizedText.includes(` ${phrase.toLowerCase()} `));
}

function includesEssayPhrase(normalizedText, phrases) {
  return phrases.some((phrase) => normalizedText.includes(` ${phrase.toLowerCase()} `));
}

function countUniqueMeaningfulWords(text) {
  const words = (text.toLowerCase().match(/[a-z]+(?:['-][a-z]+)*/g) || []).filter((word) => !WRITING_STOP_WORDS.has(word));
  return new Set(words).size;
}

function getTopRepeatRatio(text) {
  const words = (text.toLowerCase().match(/[a-z]+(?:['-][a-z]+)*/g) || []).filter((word) => !WRITING_STOP_WORDS.has(word));
  if (!words.length) {
    return 0;
  }
  const counts = {};
  words.forEach((word) => {
    counts[word] = (counts[word] || 0) + 1;
  });
  return Math.max(...Object.values(counts)) / words.length;
}

function clampBand(value) {
  return Math.min(8.5, Math.max(4, roundToHalf(value)));
}

function roundToHalf(value) {
  return Math.round(value * 2) / 2;
}

function updateWordCount(textarea, target) {
  target.textContent = `${countEssayWords(textarea.value)} 词`;
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function resetTimerForTask() {
  stopTimer(false);
  state.timer.remaining = getTimerSecondsForCurrentEssayTask();
  renderTimer();
  saveState();
}

function startTimer() {
  if (state.timer.running) {
    return;
  }
  state.timer.running = true;
  timerInterval = window.setInterval(() => {
    state.timer.remaining -= 1;
    if (state.timer.remaining <= 0) {
      state.timer.remaining = 0;
      stopTimer(true);
    }
    renderTimer();
    saveState();
  }, 1000);
}

function stopTimer(keepRemaining) {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  state.timer.running = false;
  if (!keepRemaining) {
    state.timer.remaining = getTimerSecondsForCurrentEssayTask();
  }
  renderTimer();
}

function renderTimer() {
  els.timerDisplay.textContent = formatTime(state.timer.remaining);
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remain = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remain}`;
}

function extractPromptKeywords(text) {
  const words = text.toLowerCase().match(/[a-z]+(?:['-][a-z]+)*/g);
  if (!words) {
    return [];
  }
  return [...new Set(words.filter((word) => word.length > 4 && !WRITING_STOP_WORDS.has(word)))].slice(0, 8);
}

async function checkAiStatus() {
  try {
    const response = await fetch("/api/ai/status", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("status failed");
    }
    const payload = await response.json();
    const backendPayload = payload.backends && typeof payload.backends === "object"
      ? payload.backends
      : {
          [normalizeAiBackend(payload.provider || "openai")]: {
            available: payload.available,
            provider: payload.provider,
            provider_label: payload.provider_label,
            review_model: payload.review_model,
            writing_review_model: payload.writing_review_model || payload.review_model,
          },
        };
    aiState.checked = true;
    aiState.backends = createDefaultBackendStatus();
    Object.keys(aiState.backends).forEach((id) => {
      aiState.backends[id] = normalizeBackendPayload(id, backendPayload[id] || {});
    });
    aiState.available = getAvailableAiBackendIds().length > 0;
    syncSelectedAiBackend(true);
  } catch (error) {
    aiState.checked = true;
    aiState.available = false;
    aiState.backends = createDefaultBackendStatus();
    syncSelectedAiBackend(false);
    aiState.reviewModel = "";
  }
  updateAiStatusUI();
}

function updateAiStatusUI() {
  if (!aiState.checked) {
    els.aiStatusChip.textContent = "AI 状态检测中";
    els.aiModelMeta.textContent = "AI 老师正在找工位，请稍等几秒";
    els.aiHeroStatus.textContent = "检测中";
    els.aiSideMeta.textContent = "一旦连上，它就会开始挑语法、抓词汇、顺手把不太像英语的表达拎出来公开处刑。";
    return;
  }

  const selectedBackend = getSelectedAiBackendStatus();
  const availableLabels = getAvailableAiBackendIds().map((id) => AI_BACKEND_OPTIONS[id].label);

  if (selectedBackend.available) {
    els.aiStatusChip.textContent = `${selectedBackend.label} 已连接`;
    els.aiModelMeta.textContent = `当前精批模型：${selectedBackend.writingReviewModel || selectedBackend.reviewModel || "未返回模型名"}`;
    els.aiHeroStatus.textContent = selectedBackend.label;
    els.aiSideMeta.textContent = `电子阅卷老师已上线，当前走 ${selectedBackend.label}。它会继续负责句子升级、词汇替换和结构复盘这些脏活累活。`;
    return;
  }

  if (availableLabels.length) {
    els.aiStatusChip.textContent = `${selectedBackend.label} 未连接`;
    els.aiModelMeta.textContent = `当前请选择已连接后端，或补上 ${AI_BACKEND_OPTIONS[getSelectedAiBackend()].keyName}`;
    els.aiHeroStatus.textContent = "部分可用";
    els.aiSideMeta.textContent = `目前能用的是 ${availableLabels.join(" / ")}。现在不是完全失联，只是这位老师今天没来上班。`;
    return;
  }

  els.aiStatusChip.textContent = "AI 未连接";
  els.aiModelMeta.textContent = "请用根目录 server.py 启动本地代理，并设置 OPENAI_API_KEY（也可填 AIHubMix Key）或 OPENROUTER_API_KEY";
  els.aiHeroStatus.textContent = "未连接";
  els.aiSideMeta.textContent = "当前只能先靠本地快评撑场面；想让 AI 下场挑刺，就把后端接起来。";
}

function nowLabel() {
  return new Date().toLocaleString("zh-CN");
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString("zh-CN");
}

function compactText(value, length = 72) {
  const text = String(value || "").trim().replace(/\s+/g, " ");
  if (text.length <= length) {
    return text;
  }
  return `${text.slice(0, Math.max(0, length - 1))}…`;
}

function normalizeBaseUrl(value) {
  const normalized = String(value || "").trim().replace(/\/+$/, "");
  return /^https?:\/\//i.test(normalized) ? normalized : "";
}

function normalizeRuntimeConfig(source = {}) {
  const backendBaseUrl = normalizeBaseUrl(source.backendBaseUrl);
  return {
    backendBaseUrl,
    cloudSyncBaseUrl: normalizeBaseUrl(source.cloudSyncBaseUrl) || backendBaseUrl,
  };
}

function isFileContext() {
  return window.location.protocol === "file:";
}

function isLoopbackHost() {
  return window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
}

function hasConfiguredCloudSync() {
  return Boolean(RUNTIME_CONFIG.cloudSyncBaseUrl);
}

function supportsSameOriginHostedApis() {
  return ["http:", "https:"].includes(window.location.protocol);
}

function hasCloudSyncSupport() {
  return isFileContext() || isLoopbackHost() || hasConfiguredCloudSync() || supportsSameOriginHostedApis();
}

function getCloudApiUrl(path) {
  if (isFileContext()) {
    return `${LOCAL_PROXY_ORIGIN}${path}`;
  }
  if (hasConfiguredCloudSync()) {
    return `${RUNTIME_CONFIG.cloudSyncBaseUrl}${path}`;
  }
  return path;
}

function normalizeCloudSyncSession(payload = {}) {
  const input = payload && typeof payload === "object" ? payload : {};
  return {
    accountId: String(input.accountId || "").trim().toLowerCase(),
    token: String(input.token || "").trim(),
    lastSyncedAt: Number(input.lastSyncedAt || 0) || 0,
  };
}

function loadCloudSyncSession() {
  try {
    const raw = localStorage.getItem(cloudSyncSessionKey);
    if (!raw) {
      return { ...DEFAULT_CLOUD_SYNC_SESSION };
    }
    return normalizeCloudSyncSession(JSON.parse(raw));
  } catch (error) {
    return { ...DEFAULT_CLOUD_SYNC_SESSION };
  }
}

function persistCloudSyncSession() {
  localStorage.setItem(
    cloudSyncSessionKey,
    JSON.stringify({
      accountId: accountSyncState.accountId,
      token: accountSyncState.token,
      lastSyncedAt: accountSyncState.lastSyncedAt,
    }),
  );
}

function getDefaultCloudSyncDetail() {
  if (!hasCloudSyncSupport()) {
    return "当前入口会先保存在浏览器本地；如果你想和阅读复盘共用同一个同步账号，请在 site-config.js 里配置 cloudSyncBaseUrl，或给当前站点绑定同一份 REVIEW_ATLAS_SYNC。";
  }

  if (cloudSyncState.available) {
    return cloudSyncState.lastSyncedAt
      ? `当前浏览器已经接上站点备份，最近一次站点备份：${formatDate(cloudSyncState.lastSyncedAt)}。登录共享账号后，还能和阅读复盘共用同一套云端档案。`
      : "当前浏览器已经接上站点备份。登录共享账号后，还能和阅读复盘共用同一套云端档案。";
  }

  return "登录和阅读复盘同一个同步账号后，这里的写作记录、草稿和语料库会自动备份到云端。";
}

function setCloudSyncStatus(message, tone = "info", detail = "") {
  accountSyncState.statusMessage = message;
  accountSyncState.statusTone = tone;
  accountSyncState.statusDetail = detail || getDefaultCloudSyncDetail();
  updateCloudSyncUI();
}

function resetCloudSyncSession(options = {}) {
  const {
    message = "未登录",
    tone = "info",
    detail = getDefaultCloudSyncDetail(),
    clearAccountInput = false,
  } = options;

  if (accountCloudSyncTimer) {
    window.clearTimeout(accountCloudSyncTimer);
    accountCloudSyncTimer = null;
  }

  accountSyncState.accountId = "";
  accountSyncState.token = "";
  accountSyncState.lastSyncedAt = 0;
  accountSyncState.syncing = false;
  persistCloudSyncSession();

  if (els.cloudPassword) {
    els.cloudPassword.value = "";
  }
  if (clearAccountInput && els.cloudAccount) {
    els.cloudAccount.value = "";
  }

  setCloudSyncStatus(message, tone, detail);
}

function createCloudRequestError(message, status = 500, code = "cloud_sync_error") {
  const error = new Error(message);
  error.status = status;
  error.code = code;
  return error;
}

function isCloudSessionError(error) {
  return Number(error?.status || 0) === 401;
}

async function requestCloudJson(path, options = {}) {
  if (!hasCloudSyncSupport()) {
    throw createCloudRequestError(getDefaultCloudSyncDetail(), 400, "cloud_sync_unconfigured");
  }

  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");
  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (accountSyncState.token && !headers.has("X-Cloud-Session")) {
    headers.set("X-Cloud-Session", accountSyncState.token);
  }

  const response = await fetch(getCloudApiUrl(path), {
    ...options,
    headers,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw createCloudRequestError(payload.error || "共享同步服务暂时不可用。", response.status, payload.code);
  }
  return payload;
}

function buildStateSnapshot() {
  return normalizePersistedState({
    ...state,
    timer: {
      ...state.timer,
      running: false,
    },
    updatedAt: Number(state.updatedAt || 0) || Date.now(),
  });
}

function countCorpusEntries(corpus) {
  const normalized = normalizeCorpusState(corpus);
  return Object.values(normalized).reduce((sum, items) => sum + items.length, 0);
}

function isMeaningfullyEmptyState(candidate = buildStateSnapshot()) {
  const snapshot = normalizePersistedState(candidate);
  return !snapshot.history.length
    && !snapshot.aiArchive.length
    && !countCorpusEntries(snapshot.corpus)
    && !snapshot.drafts.paragraphText.trim()
    && !snapshot.drafts.essayText.trim()
    && !snapshot.drafts.customPrompt.trim();
}

function hasMeaningfulState(snapshot = buildStateSnapshot()) {
  return !isMeaningfullyEmptyState(snapshot);
}

function getSnapshotUpdatedAt(snapshot = buildStateSnapshot()) {
  return Number(snapshot?.updatedAt || 0) || 0;
}

function getCloudDeviceId() {
  if (cloudSyncState.deviceId) {
    return cloudSyncState.deviceId;
  }

  let deviceId = "";
  try {
    deviceId = String(localStorage.getItem(cloudDeviceKey) || "").trim();
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem(cloudDeviceKey, deviceId);
    }
  } catch (error) {
    deviceId = crypto.randomUUID();
  }

  cloudSyncState.deviceId = deviceId;
  return deviceId;
}

function updateCloudSyncUI() {
  if (!els.cloudSyncMeta) {
    return;
  }

  const backendAvailable = hasCloudSyncSupport();
  const loggedIn = backendAvailable && Boolean(accountSyncState.token);
  const statusMessage = accountSyncState.statusMessage || (loggedIn ? "已同步" : "未登录");
  const statusTone = accountSyncState.statusTone || "info";
  const lastSyncLabel = accountSyncState.lastSyncedAt
    ? formatDate(accountSyncState.lastSyncedAt)
    : cloudSyncState.lastSyncedAt
      ? `${formatDate(cloudSyncState.lastSyncedAt)}（站点备份）`
      : "尚未同步";

  let detail = accountSyncState.statusDetail || getDefaultCloudSyncDetail();
  if (!loggedIn) {
    if (cloudSyncState.syncing) {
      detail = "站点云端备份中，当前浏览器的练习记录和语料库会继续自动保存。";
    } else if (cloudSyncState.notice) {
      detail = cloudSyncState.notice;
    } else if (cloudSyncState.available || cloudSyncState.bootstrapped) {
      detail = getDefaultCloudSyncDetail();
    }
  }

  if (els.cloudSyncStatus) {
    els.cloudSyncStatus.textContent = `云端同步：${statusMessage}`;
    els.cloudSyncStatus.className = `chip chip--cloud chip--${statusTone}`;
  }
  els.cloudSyncMeta.textContent = detail;

  if (els.cloudAccountChip) {
    els.cloudAccountChip.textContent = loggedIn
      ? `当前账号：${accountSyncState.accountId}`
      : (cloudSyncState.available ? "当前：站点备份已开" : "当前：本地模式");
  }
  if (els.cloudLastSyncChip) {
    els.cloudLastSyncChip.textContent = `最近同步：${lastSyncLabel}`;
  }

  if (els.cloudAccount) {
    if (loggedIn) {
      els.cloudAccount.value = accountSyncState.accountId;
    }
    els.cloudAccount.disabled = accountSyncState.syncing || !backendAvailable;
  }
  if (els.cloudPassword) {
    els.cloudPassword.disabled = accountSyncState.syncing || !backendAvailable;
  }
  if (els.cloudRegister) {
    els.cloudRegister.disabled = accountSyncState.syncing || !backendAvailable;
  }
  if (els.cloudLogin) {
    els.cloudLogin.disabled = accountSyncState.syncing || !backendAvailable;
  }
  if (els.cloudSyncNow) {
    els.cloudSyncNow.disabled = accountSyncState.syncing || !loggedIn || !backendAvailable;
  }
  if (els.cloudLogout) {
    els.cloudLogout.disabled = accountSyncState.syncing || !loggedIn || !backendAvailable;
  }
}

async function bootstrapCloudState() {
  getCloudDeviceId();

  try {
    const response = await fetch(`/api/state/bootstrap?device_id=${encodeURIComponent(cloudSyncState.deviceId)}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || "当前站点还没有启用云端同步。");
    }

    cloudSyncState.available = true;
    cloudSyncState.error = "";
    cloudSyncState.bootstrapped = true;

    if (payload.snapshot?.updated_at) {
      cloudSyncState.lastSyncedAt = payload.snapshot.updated_at;
    }

    if (payload.snapshot?.state) {
      const remoteState = normalizePersistedState(payload.snapshot.state);
      if (isMeaningfullyEmptyState(state) && !isMeaningfullyEmptyState(remoteState)) {
        state = remoteState;
        saveState({ sync: false, accountSync: false, touch: false });
        hydrateControls();
        renderAll();
        cloudSyncState.notice = "已从云端恢复你之前的写作记录。";
        return;
      }
    }

    if (!isMeaningfullyEmptyState(state)) {
      scheduleCloudSync();
    }
  } catch (error) {
    cloudSyncState.available = false;
    cloudSyncState.error = String(error.message || error || "").trim();
    cloudSyncState.bootstrapped = true;
  } finally {
    updateCloudSyncUI();
  }
}

async function applyCloudRemoteSnapshot(remoteSnapshot, updatedAt, options = {}) {
  state = normalizePersistedState({
    ...(remoteSnapshot || {}),
    updatedAt: updatedAt || getSnapshotUpdatedAt(remoteSnapshot),
  });
  saveState({ sync: false, accountSync: false, touch: false });
  hydrateControls();
  renderAll();
  accountSyncState.lastSyncedAt = Math.max(Number(updatedAt || 0) || 0, getSnapshotUpdatedAt(state));
  persistCloudSyncSession();
  if (options.announceMessage) {
    setCloudSyncStatus("已同步", "success", options.announceMessage);
  }
}

function handleCloudSessionExpired(error) {
  resetCloudSyncSession({
    message: "登录已失效",
    tone: "warning",
    detail: error?.message || "共享同步账号已经失效，请重新登录。",
  });
}

async function fetchCloudProgressSnapshot() {
  if (!accountSyncState.token) {
    return null;
  }
  return requestCloudJson("/api/cloud-sync/state", {
    method: "GET",
  });
}

async function pushCloudProgressSnapshot(snapshot = buildStateSnapshot(), options = {}) {
  if (!hasCloudSyncSupport() || !accountSyncState.token || cloudAccountSyncInFlight) {
    return false;
  }

  cloudAccountSyncInFlight = true;
  accountSyncState.syncing = true;
  setCloudSyncStatus("同步中", "info", `正在把这份写作记录存到账号“${accountSyncState.accountId}”里。`);

  try {
    const payload = await requestCloudJson("/api/cloud-sync/state", {
      method: "POST",
      body: JSON.stringify({
        state: snapshot,
        updatedAt: getSnapshotUpdatedAt(snapshot) || Date.now(),
      }),
    });

    if (payload?.state && payload.conflict) {
      await applyCloudRemoteSnapshot(payload.state, payload.updatedAt, {
        announceMessage: "云端那边有更新一些的版本，已经替你切过去了。",
      });
      return true;
    }

    if (payload?.state) {
      state = normalizePersistedState(payload.state);
      saveState({ sync: false, accountSync: false, touch: false });
      hydrateControls();
      renderAll();
    }

    accountSyncState.lastSyncedAt = Number(payload?.updatedAt || getSnapshotUpdatedAt(snapshot) || Date.now()) || Date.now();
    persistCloudSyncSession();
    setCloudSyncStatus(
      "已同步",
      "success",
      options.announceMessage || `这台设备和账号“${accountSyncState.accountId}”里的写作记录已经对上了。`,
    );
    return true;
  } catch (error) {
    if (isCloudSessionError(error)) {
      handleCloudSessionExpired(error);
    } else {
      setCloudSyncStatus("同步失败", "danger", error?.message || "共享同步暂时不可用，请稍后再试。");
    }
    return false;
  } finally {
    accountSyncState.syncing = false;
    cloudAccountSyncInFlight = false;
    updateCloudSyncUI();
  }
}

function scheduleAccountCloudSync() {
  if (!accountSyncState.token || !hasCloudSyncSupport()) {
    return;
  }

  if (accountCloudSyncTimer) {
    window.clearTimeout(accountCloudSyncTimer);
  }

  setCloudSyncStatus("待同步", "warning", `你刚更新了内容，系统会稍后自动同步到账号“${accountSyncState.accountId}”。`);
  accountCloudSyncTimer = window.setTimeout(() => {
    accountCloudSyncTimer = null;
    pushCloudProgressSnapshot(buildStateSnapshot());
  }, CLOUD_SYNC_DELAY);
}

async function syncCloudProgressOnStartup(options = {}) {
  if (!hasCloudSyncSupport()) {
    setCloudSyncStatus("本地模式", "info", getDefaultCloudSyncDetail());
    return;
  }

  if (!accountSyncState.token) {
    setCloudSyncStatus("未登录", "info", getDefaultCloudSyncDetail());
    updateCloudSyncUI();
    return;
  }

  accountSyncState.syncing = true;
  setCloudSyncStatus("连接中", "info", `正在看看账号“${accountSyncState.accountId}”里有没有更新一些的写作记录。`);

  try {
    const remotePayload = await fetchCloudProgressSnapshot();
    if (remotePayload?.accountId) {
      accountSyncState.accountId = String(remotePayload.accountId || accountSyncState.accountId).trim().toLowerCase();
      persistCloudSyncSession();
    }

    const remoteSnapshot = remotePayload?.state && typeof remotePayload.state === "object" ? remotePayload.state : null;
    const remoteUpdatedAt = Math.max(Number(remotePayload?.updatedAt || 0) || 0, getSnapshotUpdatedAt(remoteSnapshot));
    const localSnapshot = buildStateSnapshot();
    const localUpdatedAt = getSnapshotUpdatedAt(localSnapshot);

    if (remoteSnapshot && remoteUpdatedAt > localUpdatedAt) {
      await applyCloudRemoteSnapshot(remoteSnapshot, remoteUpdatedAt, {
        announceMessage: options.announceMessage || "已经从共享账号拉回更新一些的写作记录。",
      });
      return;
    }

    if (localUpdatedAt > remoteUpdatedAt || (hasMeaningfulState(localSnapshot) && !remoteUpdatedAt)) {
      await pushCloudProgressSnapshot(localSnapshot, {
        announceMessage: options.announceMessage || "这份写作记录已经同步到共享账号。",
      });
      return;
    }

    accountSyncState.lastSyncedAt = remoteUpdatedAt || accountSyncState.lastSyncedAt || Date.now();
    persistCloudSyncSession();
    setCloudSyncStatus("已同步", "success", `这台设备和账号“${accountSyncState.accountId}”里的写作记录已经对上了。`);
  } catch (error) {
    if (isCloudSessionError(error)) {
      handleCloudSessionExpired(error);
    } else {
      setCloudSyncStatus("连接失败", "danger", error?.message || "暂时连不上共享同步服务，请稍后再试。");
    }
  } finally {
    accountSyncState.syncing = false;
    updateCloudSyncUI();
  }
}

async function handleCloudAuth(action) {
  if (!hasCloudSyncSupport()) {
    setCloudSyncStatus("本地模式", "info", getDefaultCloudSyncDetail());
    return;
  }

  const accountId = els.cloudAccount?.value?.trim() || "";
  const password = els.cloudPassword?.value || "";
  if (!accountId) {
    setCloudSyncStatus("等待输入", "warning", "先填一个同步账号，再去注册或登录。");
    return;
  }
  if (!password) {
    setCloudSyncStatus("等待输入", "warning", "还差同步口令。注册和登录都需要同一套口令。");
    return;
  }

  accountSyncState.syncing = true;
  setCloudSyncStatus(
    action === "register" ? "注册中" : "登录中",
    "info",
    action === "register"
      ? "正在创建你的共享同步账号，并准备把当前写作记录推上去。"
      : "正在登录共享同步账号，并准备对比本地和云端哪一份更新。",
  );

  try {
    const payload = await requestCloudJson("/api/cloud-sync/auth", {
      method: "POST",
      body: JSON.stringify({
        action,
        accountId,
        password,
      }),
    });

    accountSyncState.accountId = String(payload.accountId || accountId).trim().toLowerCase();
    accountSyncState.token = String(payload.token || "").trim();
    accountSyncState.lastSyncedAt = 0;
    persistCloudSyncSession();
    if (els.cloudPassword) {
      els.cloudPassword.value = "";
    }
    updateCloudSyncUI();

    await syncCloudProgressOnStartup({
      announceMessage:
        action === "register"
          ? "账号已经建好，现在开始同步这边的写作记录。"
          : "已经登录，正在对一下本地和云端哪份更新一些。",
    });
  } catch (error) {
    accountSyncState.syncing = false;
    setCloudSyncStatus(
      action === "register" ? "注册失败" : "登录失败",
      "danger",
      error?.message || "共享同步账号暂时不可用，请稍后再试。",
    );
    updateCloudSyncUI();
  }
}

async function handleCloudLogout() {
  if (!hasCloudSyncSupport()) {
    setCloudSyncStatus("本地模式", "info", getDefaultCloudSyncDetail());
    return;
  }

  if (!accountSyncState.token) {
    setCloudSyncStatus("未登录", "info", getDefaultCloudSyncDetail());
    return;
  }

  const currentAccount = accountSyncState.accountId;
  accountSyncState.syncing = true;
  updateCloudSyncUI();

  try {
    await requestCloudJson("/api/cloud-sync/auth", {
      method: "POST",
      body: JSON.stringify({
        action: "logout",
        token: accountSyncState.token,
      }),
    });
  } catch {
    // Remote logout failure should not block local logout.
  } finally {
    resetCloudSyncSession({
      message: "已退出",
      tone: "info",
      detail: currentAccount
        ? `已退出共享账号“${currentAccount}”。本地数据和站点备份都还在，你之后重新登录就能继续同步。`
        : getDefaultCloudSyncDetail(),
    });
  }
}

function scheduleCloudSync() {
  if (!cloudSyncState.available) {
    return;
  }

  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(() => {
    syncStateToCloud("autosave");
  }, 900);
}

async function syncStateToCloud(source = "app") {
  if (!cloudSyncState.available) {
    return;
  }

  cloudSyncState.syncing = true;
  cloudSyncState.notice = "";
  updateCloudSyncUI();

  try {
    const response = await fetch("/api/state/sync", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        device_id: getCloudDeviceId(),
        state,
        source,
      }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.error || "云端同步失败。");
    }

    cloudSyncState.lastSyncedAt = payload.snapshot?.updated_at || new Date().toISOString();
    cloudSyncState.error = "";
  } catch (error) {
    cloudSyncState.error = String(error.message || error).trim();
    if (/404|not found|没有启用云端同步/i.test(cloudSyncState.error)) {
      cloudSyncState.available = false;
    }
  } finally {
    cloudSyncState.syncing = false;
    updateCloudSyncUI();
  }
}

function exportStateBackup() {
  const payload = {
    version: cloudExportVersion,
    exported_at: new Date().toISOString(),
    device_id: getCloudDeviceId(),
    state,
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `ielts-writing-studio-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);

  cloudSyncState.notice = "已导出当前数据备份。你可以在新站点导入这个 JSON 继续训练。";
  updateCloudSyncUI();
}

async function importStatePayload(payload, source = "import-file") {
  const rawState = payload?.state && typeof payload.state === "object" ? payload.state : payload;
  const importedState = normalizePersistedState(rawState);

  if (isMeaningfullyEmptyState(importedState)) {
    throw new Error("导入文件里没有可恢复的练习数据。");
  }

  const importedDeviceId = String(payload?.device_id || "").trim();
  if (importedDeviceId) {
    cloudSyncState.deviceId = importedDeviceId;
    localStorage.setItem(cloudDeviceKey, importedDeviceId);
  } else {
    getCloudDeviceId();
  }

  state = importedState;
  saveState({ sync: false, accountSync: false });
  hydrateControls();
  renderAll();

  if (cloudSyncState.available) {
    const endpoint = source === "migration-import" ? "/api/state/import" : "/api/state/sync";
    cloudSyncState.syncing = true;
    updateCloudSyncUI();
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          device_id: getCloudDeviceId(),
          state,
          source,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || "导入后的云端同步失败。");
      }
      cloudSyncState.lastSyncedAt = result.snapshot?.updated_at || new Date().toISOString();
    } finally {
      cloudSyncState.syncing = false;
    }
  }

  if (accountSyncState.token) {
    await pushCloudProgressSnapshot(buildStateSnapshot(), {
      announceMessage: "导入的数据已经同步到你的共享账号。",
    });
  }

  cloudSyncState.notice = accountSyncState.token
    ? "旧站数据已经导入成功，也已经接到共享同步账号里。"
    : "旧站数据已经导入成功，历史记录、语料库和草稿都已接上。";
  updateCloudSyncUI();
}

async function handleImportFile(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const payload = JSON.parse(await file.text());
    await importStatePayload(payload, "import-file");
  } catch (error) {
    cloudSyncState.notice = `导入失败：${String(error.message || error)}`;
    updateCloudSyncUI();
  } finally {
    event.target.value = "";
  }
}

function handleMigrationMessage(event) {
  const data = event.data;
  if (!data || data.type !== "ielts-writing-studio-import" || !data.payload) {
    return;
  }

  importStatePayload(data.payload, "migration-import").catch((error) => {
    cloudSyncState.notice = `迁移失败：${String(error.message || error)}`;
    updateCloudSyncUI();
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
