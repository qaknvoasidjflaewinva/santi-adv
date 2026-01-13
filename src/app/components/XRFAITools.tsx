import { motion } from "motion/react";
import { Palette, MessageSquare, UserPlus, Check } from "lucide-react";

const aiPeople = [
  {
    id: 1,
    name: "灵感搭配师",
    description:
      "为您的产品和服务提供创新灵感，结合市场趋势和用户需求，打造独特的品牌体验和产品设计方案。",
    icon: Palette,
    color: "bg-[#165DFF]/10",
    iconColor: "text-[#165DFF]",
    buttonColor: "bg-[#165DFF] hover:bg-[#165DFF]/90",
    features: ["产品创新与设计灵感", "软装模型智能搭配", "灵活修改替换"],
    image:
      "https://design.gemcoder.com/staticResource/echoAiSystemImages/cd92fd26ec6892e6123e48f0d878e992.png",
  },
  {
    id: 2,
    name: "谈单沟通员",
    description:
      "专业的沟通策略和技巧，帮助您与客户建立信任，有效传递价值，提高转化率和客户满意度。",
    icon: MessageSquare,
    color: "bg-[#36CBCB]/10",
    iconColor: "text-[#36CBCB]",
    buttonColor: "bg-[#36CBCB] hover:bg-[#36CBCB]/90",
    features: [
      "客户需求分析与挖掘",
      "材质、软装库快速调用搭配",
      "无需调整灯光，快速渲染出图",
    ],
    image:
      "https://design.gemcoder.com/staticResource/echoAiSystemImages/e8a572820e9ed0001026c87d5b41e542.png",
  },
  {
    id: 3,
    name: "拓客运营官",
    description:
      "全方位的客户获取和运营策略，帮助您拓展新客户，提升客户价值，实现业务持续增长。",
    icon: UserPlus,
    color: "bg-[#FF7D00]/10",
    iconColor: "text-[#FF7D00]",
    buttonColor: "bg-[#FF7D00] hover:bg-[#FF7D00]/90",
    features: ["专属宣传与展示", "客户分层与精准营销", "数据驱动的运营优化"],
    image:
      "https://design.gemcoder.com/staticResource/echoAiSystemImages/57de6398d0f7b0d2a888fd645b24673a.png",
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
                <div
                  className={`w-12 h-12 ${person.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <person.icon className={`${person.iconColor} text-xl`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{person.name}</h3>
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
