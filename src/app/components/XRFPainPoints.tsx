import { AlertCircle, Clock, TrendingDown } from "lucide-react";
import { motion } from "motion/react";

const painPoints = [
  {
    icon: Clock,
    title: "灵感搭配师",
    description:
      "为您的产品和服务提供创新灵感，结合市场趋势和用户需求，打造独特的品牌体验和产品设计方案。",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: AlertCircle,
    title: "谈单沟通员",
    description:
      "专业的沟通策略和技巧，帮助您与客户建立信任，有效传递价值，提高转化率和客户满意座。",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: TrendingDown,
    title: "拓客运营官",
    description:
      " 全方位的客户获取和运营策略，帮助您拓展新客户，提升客户价值，实现业务持续增长。",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
];

export function XRFPainPoints() {
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
          <p className="text-xl text-gray-600">渲染设计行业的效率瓶颈</p>
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
