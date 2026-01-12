import { Target, Trophy, Users, TrendingUp, Gift } from 'lucide-react';
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

export function XRFBusinessPlan() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900">老客户推荐福利</h2>
          <p className="text-xl text-gray-600">介绍新客户，双方均可获得超值奖励</p>
        </motion.div>

        {/* 推荐奖励卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 p-4 rounded-full">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-gray-900">元旦限时福利</h3>
                    <p className="text-gray-700 text-lg">老客户介绍新客户成交小渲风，双方均可获得：</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-6 rounded-2xl text-center shadow-xl">
                <div className="text-5xl mb-2">3年</div>
                <div className="text-xl">免费使用</div>
              </div>
            </div>
          </Card>
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
                <span>业绩达标奖励机制</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">●</span>
                <span>团队协作奖金</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-blue-200 bg-blue-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">2</div>
              <h3 className="text-xl text-gray-900">客户服务保障</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>7x24小时技术支持</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>免费培训与指导</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>定期功能升级</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>专属客户经理</span>
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center"
        >
          <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h3 className="text-3xl mb-4">推荐即赚钱，互惠双赢</h3>
          <p className="text-xl mb-6 text-purple-100">
            您的推荐不仅帮助朋友提升效率，更能为双方带来实实在在的价值
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="text-sm text-purple-200 mb-1">老客户获得</div>
              <div className="text-2xl">3年免费使用</div>
            </div>
            <div className="text-3xl">+</div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="text-sm text-purple-200 mb-1">新客户获得</div>
              <div className="text-2xl">3年免费使用</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
