import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { UserPlus, DollarSign, Clock, UserMinus } from "lucide-react";
// 图片网络地址
const painPointImage = "https://sanjz-cdn.santi.ren/santi/images/02.jpeg";

export function LLPainPoints() {
  const painPoints = [
    {
      title: "招不到人，客户从哪里来？",
      description: "传统销售团队疲于奔命，获客成本高，效果差。每天打100个电话，只有2-3个有意向，转化率低得可怜。",
      icon: UserPlus
    },
    {
      title: "一个销售月薪8000，能带来多少订单？",
      description: "人工成本高，效率低，ROI不理想。一个销售月薪8000，加上社保、提成、管理成本，实际成本超过1.2万，但能带来的订单却有限。",
      icon: DollarSign
    },
    {
      title: "销售团队难管理，客户跟进不及时？",
      description: "销售团队难管理，行为不透明，客户跟进不及时。你无法知道销售是否真的在跟进客户，是否及时回复了客户消息，是否按照标准流程操作。",
      icon: Clock
    },
    {
      title: "优秀销售难留，客户资源流失？",
      description: "优秀销售难留，客户资源流失，经验无法传承。一个优秀销售离职，带走了所有客户资源，你花了3年培养的人才，说走就走。",
      icon: UserMinus
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900">
            你的工厂，还在为这些问题发愁吗？
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
            {/* 左右布局：左侧图片，右侧文本 */}
            <div className="flex flex-col md:flex-row">
              {/* 左侧图片 */}
              <div className="md:w-1/3">
                <img
                  src={painPointImage}
                  alt="工厂管理问题"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* 右侧问题列表 */}
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  {painPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                      }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <point.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 ml-13 text-sm">
                        {point.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}