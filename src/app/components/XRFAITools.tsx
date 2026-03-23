import React from "react";
import { motion } from "motion/react";
import { Palette, MessageSquare, UserPlus, Check } from "lucide-react";

const aiPeople = [
  {
    id: 1,
    name: "灵感搭配师",
    priceText: null,
    description:
      "为您的产品和服务提供创新灵感，结合市场趋势和用户需求，打造独特的品牌体验和产品设计方案。",
    icon: Palette,
    color: "bg-[#165DFF]/10",
    iconColor: "text-[#165DFF]",
    buttonColor: "bg-[#165DFF] hover:bg-[#165DFF]/90",
    features: [
      "微信远程操控小渲风",
      "软硬装智能搭配",
      "灵活修改替换",
      "提供设计灵感",
    ],
    image:
      "https://design.gemcoder.com/staticResource/echoAiSystemImages/4c18cd38d977c9cd9465d476b87b224b.png",
  },
  {
    id: 2,
    name: "谈单沟通员",
    priceText: null,
    description:
      "专业的沟通策略和技巧，帮助您与客户建立信任，有效传递价值，提高转化率和客户满意度。",
    icon: MessageSquare,
    color: "bg-[#36CBCB]/10",
    iconColor: "text-[#36CBCB]",
    buttonColor: "bg-[#36CBCB] hover:bg-[#36CBCB]/90",
    features: [
      "支持多种风格案例图生成",
      "现场拍照，对话就能生成柜体效果图",
      "对话即可完成柜体颜色修改",
      "智能推荐板材价格方案",
    ],
    image:
      "https://design.gemcoder.com/staticResource/echoAiSystemImages/4208034c6ac473bf85c6318760a67339.png",
  },
  {
    id: 3,
    name: "拓客运营官",
    priceText: "暂无售价",
    description:
      "全方位的客户获取和运营策略，帮助您拓展新客户，提升客户价值，实现业务持续增长。",
    icon: UserPlus,
    color: "bg-[#FF7D00]/10",
    iconColor: "text-[#FF7D00]",
    buttonColor: "bg-[#FF7D00] hover:bg-[#FF7D00]/90",
    features: ["专属宣传与展示", "客户分层与精准营销", "数据驱动的运营优化"],
    image:
      "https://design.gemcoder.com/staticResource/echoAiSystemImages/9bee42b47e12804003bc77a75b8b32bc.png",
  },
];

export function XRFAITools() {
  return (
    <section className="py-20" id="introduction">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-4">
            小渲风-三体人
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiPeople.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="h-60 overflow-hidden">
                <img
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={person.image}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`w-12 h-12 ${person.color} rounded-full flex items-center justify-center`}
                  >
                    <person.icon className={`${person.iconColor} text-xl`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-0">{person.name}</h3>
                </div>
                {person.priceText ? (
                  <div className="text-lg text-gray-500 mb-4">
                    {person.priceText}
                  </div>
                ) : (
                  <div className="flex items-baseline mb-4">
                    <span className="text-xl text-gray-800 mr-1">¥</span>
                    <span className="text-4xl font-bold text-gray-800">
                      500
                    </span>
                    <span className="text-lg text-gray-500 ml-1">/年</span>
                  </div>
                )}
                <p className="text-gray-600 mb-6">{person.description}</p>
                <ul className="space-y-3 mb-6">
                  {person.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        className={`${person.iconColor} mt-1 mr-2 flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
