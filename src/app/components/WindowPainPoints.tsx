import { AlertCircle, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

const painPoints = [
  {
    icon: Clock,
    title: '设计师外出效率低',
    description: '现场量尺后需回公司画图，来回奔波浪费时间，客户等待周期长',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: AlertCircle,
    title: '客户响应不及时',
    description: '下班后、节假日客户咨询无人回复，错失商机导致客户流失',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: TrendingDown,
    title: '数据统计繁琐',
    description: '订单量、板材消耗、业绩分析需手动整理，耗时费力且易出错',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  }
];

export function WindowPainPoints() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900">行业三大痛点</h2>
          <p className="text-xl text-gray-600">门窗定制行业的效率瓶颈</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${point.bgColor} rounded-xl p-6 hover:shadow-lg transition-shadow`}
            >
              <div className={`${point.color} mb-4`}>
                <point.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
