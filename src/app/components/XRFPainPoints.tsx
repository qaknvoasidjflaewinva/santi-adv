import React from "react";
import { motion } from "motion/react";
import { Lightbulb, MessageSquare, Users } from "lucide-react";

const painPoints = [
  {
    icon: Lightbulb,
    title: "创意枯竭",
    description:
      "搭配灵感枯竭，反复尝试耗时费力，方案出图效率低，影响交付进度。",
    color: "text-[#165DFF]",
    bgColor: "bg-[#165DFF]/10",
  },
  {
    icon: MessageSquare,
    title: "沟通低效",
    description:
      "与客户沟通不直观，修改无法快速呈现，需求传递失真，导致转化周期长。",
    color: "text-[#36CBCB]",
    bgColor: "bg-[#36CBCB]/10",
  },
  {
    icon: Users,
    title: "客户获取难",
    description: "获客渠道有限，营销成本高，新客户增长缓慢，影响业务扩张。",
    color: "text-[#FF7D00]",
    bgColor: "bg-[#FF7D00]/10",
  },
];

export function XRFPainPoints() {
  return (
    <section className="py-20 bg-[#F2F3F5]" id="painpoints">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-4">
            解决痛点
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${point.bgColor} rounded-lg flex items-center justify-center mb-6`}
              >
                <point.icon className={`${point.color} text-2xl`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-600 mb-4">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
