import { Target, Trophy, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

const businessMetrics = [
  {
    icon: Target,
    title: '销售目标',
    value: '5客户/天',
    description: '1名销售1天5个客户成交',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: '月度业绩',
    value: '100客户/月',
    description: '1个月100个客户成交',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Trophy,
    title: '营收目标',
    value: '600万/月',
    description: '三体人销售收入目标',
    color: 'from-green-500 to-emerald-500'
  }
];

const partnershipPlan = {
  investment: '10万',
  return: '20万',
  description: '分所合作伙伴计划'
};

export function WindowBusinessPlan() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900">落地执行方案</h2>
          <p className="text-xl text-gray-600">清晰的目标，严格的执行，丰厚的回报</p>
        </motion.div>

        {/* Business Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {businessMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{metric.title}</h3>
                <div className="text-4xl mb-2 bg-gradient-to-r bg-clip-text text-transparent" 
                     style={{ 
                       backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent'
                     }}>
                  <span className={`bg-gradient-to-r ${metric.color} bg-clip-text`}>
                    {metric.value}
                  </span>
                </div>
                <p className="text-gray-600">{metric.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Execution Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <Card className="p-6 border-2 border-orange-200 bg-orange-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center">1</div>
              <h3 className="text-xl text-gray-900">销售激励机制</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">●</span>
                <span>每日目标：5个客户成交</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">●</span>
                <span>月度目标：100个客户</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">●</span>
                <span>销售PK排名，末尾淘汰</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">●</span>
                <span>激发团队竞争活力</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-purple-200 bg-purple-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center">2</div>
              <h3 className="text-xl text-gray-900">分所合作计划</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">门槛投资</div>
                <div className="text-3xl text-purple-600">{partnershipPlan.investment}</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">获得账号价值</div>
                <div className="text-3xl text-green-600">{partnershipPlan.return}</div>
              </div>
              <p className="text-gray-700">
                外部合作伙伴加入三体研究所，低门槛高回报，共创共赢
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Success Formula */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-6">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl mb-2">成功公式</h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span>销售目标明确</span>
            </div>
            <span className="text-2xl">×</span>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span>竞争激励机制</span>
            </div>
            <span className="text-2xl">×</span>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span>合作伙伴扩张</span>
            </div>
            <span className="text-2xl">=</span>
            <div className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-lg">
              <span>600万月营收</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
