// 机器人类型配置
export const robotTypes = [
  {
    id: 'humanoid',
    name: '人形机器人',
    icon: '🤖',
    description: '具有人类外观和行为的机器人，用于交互、服务和娱乐',
    examples: ['陪伴机器人', '导览机器人', '表演机器人']
  },
  {
    id: 'service',
    name: '服务机器人',
    icon: '🦾',
    description: '为人类提供服务的机器人，如清洁、配送、导览等',
    examples: ['清洁机器人', '配送机器人', '导览机器人', '接待机器人']
  },
  {
    id: 'industrial',
    name: '工业机器人',
    icon: '🏭',
    description: '用于工业生产、装配、搬运等任务的机器人',
    examples: ['焊接机器人', '装配机器人', '搬运机器人', '喷涂机器人']
  },
  {
    id: 'medical',
    name: '医疗机器人',
    icon: '🏥',
    description: '用于医疗诊断、手术、康复等医疗用途的机器人',
    examples: ['手术机器人', '康复机器人', '诊断机器人', '护理机器人']
  },
  {
    id: 'drone',
    name: '无人机',
    icon: '🚁',
    description: '无人驾驶的航空器，用于航拍、巡检、物流等',
    examples: ['航拍无人机', '巡检无人机', '物流无人机', '农业无人机']
  },
  {
    id: 'other',
    name: '其他机器人',
    icon: '⚙️',
    description: '其他类型的机器人产品',
    examples: ['特种机器人', '教育机器人', '娱乐机器人']
  }
];

// 目标市场配置
export const markets = [
  {
    id: 'china',
    name: '中国',
    flag: '🇨🇳',
    code: 'CN',
    description: '中国大陆市场'
  },
  {
    id: 'eu',
    name: '欧盟',
    flag: '🇪🇺',
    code: 'EU',
    description: '欧洲联盟市场（含英国）'
  },
  {
    id: 'usa',
    name: '美国',
    flag: '🇺🇸',
    code: 'US',
    description: '美国市场'
  },
  {
    id: 'japan',
    name: '日本',
    flag: '🇯🇵',
    code: 'JP',
    description: '日本市场'
  },
  {
    id: 'multi',
    name: '多国市场',
    flag: '🌍',
    code: 'MULTI',
    description: '同时进入多个国际市场'
  }
];

// 机器人类型与应用场景的映射
export const applicationScenarios: Record<string, Array<{ id: string; name: string; description: string }>> = {
  humanoid: [
    { id: 'interactive', name: '人机交互', description: '与人类进行交互、对话、陪伴' },
    { id: 'service', name: '公共服务', description: '商场、酒店、博物馆等公共服务场所' },
    { id: 'entertainment', name: '娱乐表演', description: '表演、展示、娱乐活动' },
    { id: 'education', name: '教育辅助', description: '教育场景中的辅助教学' },
    { id: 'research', name: '科研研发', description: '科研机构的研究和开发' }
  ],
  service: [
    { id: 'cleaning', name: '清洁服务', description: '家庭、商业场所的清洁工作' },
    { id: 'delivery', name: '配送服务', description: '餐厅、酒店的物品配送' },
    { id: 'guide', name: '导览接待', description: '博物馆、展厅的导览和接待' },
    { id: 'security', name: '安防巡检', description: '安全巡检和监控' },
    { id: 'elderly', name: '养老陪护', description: '老年人陪伴和辅助' }
  ],
  industrial: [
    { id: 'welding', name: '焊接作业', description: '金属焊接和切割作业' },
    { id: 'assembly', name: '装配生产', description: '产品装配和生产线作业' },
    { id: 'handling', name: '搬运物流', description: '物料搬运和仓储物流' },
    { id: 'painting', name: '喷涂作业', description: '表面喷涂和涂装作业' },
    { id: 'inspection', name: '质量检测', description: '产品质量检测和测量' }
  ],
  medical: [
    { id: 'surgery', name: '手术辅助', description: '微创手术、精准手术辅助' },
    { id: 'rehabilitation', name: '康复训练', description: '康复训练和物理治疗' },
    { id: 'diagnosis', name: '诊断检测', description: '医疗诊断和检测辅助' },
    { id: 'nursing', name: '护理辅助', description: '医院护理和病房服务' },
    { id: 'pharmacy', name: '药品配送', description: '药品分发和配送' }
  ],
  drone: [
    { id: 'aerial', name: '航拍摄影', description: '航空摄影和视频拍摄' },
    { id: 'inspection', name: '巡检监测', description: '电力、桥梁、管道巡检' },
    { id: 'logistics', name: '物流配送', description: '快递和货物配送' },
    { id: 'agriculture', name: '农业应用', description: '农田喷洒、监测' },
    { id: 'emergency', name: '应急救援', description: '救援、搜索、监测' }
  ],
  other: [
    { id: 'special', name: '特种应用', description: '特殊环境和任务的机器人' },
    { id: 'education', name: '教育培训', description: '教育和培训用途' },
    { id: 'entertainment', name: '娱乐消费', description: '消费级娱乐产品' },
    { id: 'research', name: '科研实验', description: '科研机构的实验和研究' }
  ]
};

// 标准优先级配置
export const priorityLevels = [
  {
    id: 'mandatory',
    name: '强制标准',
    color: 'red',
    emoji: '🔴',
    description: '必须符合，否则无法上市或面临法律风险'
  },
  {
    id: 'recommended',
    name: '推荐标准',
    color: 'yellow',
    emoji: '🟡',
    description: '强烈建议符合，提升产品竞争力'
  },
  {
    id: 'optional',
    name: '可选标准',
    color: 'green',
    emoji: '🟢',
    description: '选择性符合，可根据市场需求决定'
  }
];

// 执行状态配置
export const executionStatuses = [
  {
    id: 'effective',
    name: '已生效',
    description: '标准已正式生效，必须立即执行'
  },
  {
    id: 'upcoming',
    name: '即将执行',
    description: '标准尚未生效，需提前准备'
  }
];