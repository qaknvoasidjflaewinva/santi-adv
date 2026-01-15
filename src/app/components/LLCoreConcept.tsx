import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";

export function LLCoreConcept() {
  const coreConcepts = [
    {
      title: "开源-三体机器人的\"大脑\"",
      description: "心脑层是三体机器人的\"大脑\"，负责思考、决策、学习。通过AI智能分析，自动寻找客户、智能沟通、客户跟进、售后服务。",
      features: [
        "自动寻找客户：在抖音、快手、微信等平台自动寻找潜在客户",
        "智能沟通：根据客户需求，智能回复，引导客户下单",
        "客户跟进：自动跟进客户需求，及时回复客户消息",
        "售后服务：7x24小时自动处理售后问题，提升客户满意度"
      ],
      conclusion: "开源，扩大客户来源，增加订单量"
    },
    {
      title: "节流-三体机器人的\"手脚\"",
      description: "人类层是三体机器人的\"手脚\"，负责执行具体操作。通过自动编程和工具集成，快速出图、自动报价、智能设计、内容生成。",
      features: [
        "快速出图：自动对接设计软件，快速生成设计图",
        "自动报价：根据客户需求，自动生成报价单",
        "智能设计：根据客户需求，智能生成设计方案",
        "内容生成：自动生成产品介绍、营销文案等内容"
      ],
      conclusion: "节流，提高效率，降低成本"
    },
    {
      title: "跨行- 三体机器人的\"协作网络\"",
      description: "机器层是三体机器人的\"协作网络\"，负责跨系统、跨行业协作。通过API对接和数据互通，实现上下游切换、异业联盟、三体人雇佣服务。",
      features: [
        "上下游切换：自动对接上下游企业，实现数据互通",
        "异业联盟：自动寻找合作伙伴，建立异业联盟",
        "三体人雇佣服务：三体机器人可以在不同企业间协作，创造新价值"
      ],
      conclusion: "跨行，拓展业务边界，创造新价值"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-gray-900">
            三体不是一套软件，而是一套生产机器人的母体
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            企业可以根据岗位需求，建立很多三体机器人，数倍放大员工工作效率。最终实现企业的快速增长。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {coreConcepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">
                    {concept.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {concept.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 flex-1">
                    {concept.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.1,
                        }}
                        className="text-sm"
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                    }}
                    className="mt-6 font-medium text-gray-800"
                  >
                    {concept.conclusion}
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 三体人协同工作总结 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.45,
          }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl mb-4">
            三体机器人协同工作，让企业效率倍增
          </h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            开源、节流、跨行，三位一体，形成完整的业务闭环，让您的企业快速增长
          </p>
        </motion.div>
      </div>
    </section>
  );
}