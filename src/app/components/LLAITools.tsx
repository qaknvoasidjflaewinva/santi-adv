import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
// 图片网络地址
const robotPowerImage = "https://sanjz-cdn.santi.ren/santi/images/03.png";

export function LLAITools() {
  const aiFeatures = [
    {
      title: "三体机器人7x24小时全网自动获客",
      description: "三体机器人可以模拟人类操作电脑，同时操作多个平台（抖音、快手、微信），自动寻找客户、主动沟通、筛选意向客户。无论是微信、抖音，还是你们内部的老系统，它都能操作。",
      features: [
        "模拟人类操作电脑，完成自动化工作",
        "模拟人类声音、长相，生成视频、发送语音",
        "可以同时操作多个平台，效率远超人类"
      ]
    },
    {
      title: "三体机器人绝对忠诚，所有行为100%透明可控",
      description: "三体机器人通过访问软件API，根据工作流程，无缝对接各种软件，打破数据孤岛。无论是微信、抖音、快手，还是你们内部的ERP、CRM系统，它都能无缝对接。所有操作都有完整记录，可以实时查看、随时调整。",
      features: [
        "通过访问软件API，根据工作流程，无缝对接各种软件",
        "打破数据孤岛，实现数据互通",
        "所有行为100%透明可控，可以实时查看、随时调整"
      ]
    },
    {
      title: "三体机器人永不离职，客户和经验100%沉淀为公司资产",
      description: "三体机器人永不离职，所有客户信息和沟通记录永久保存，经验可以复制给新的三体机器人。三体量子推理模拟，可以帮助人类超预期做好生活、工作安排。三体机器人不再是被动接收指令，而是主动帮助人类用户更好生活和工作。",
      features: [
        "三体量子推理模拟，可以帮助人类超预期做好生活、工作安排",
        "三体机器人不再是被动接收指令，而是主动帮助人类用户更好生活和工作",
        "永不离职，客户和经验100%沉淀为公司资产"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl mb-4 text-gray-900">
            三体机器人的强大能力
          </h2>
        </motion.div>

        {/* 左右布局：左侧所有文本，右侧单张图片 */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* 左侧所有文本内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-10"
          >
            {aiFeatures.map((feature, index) => (
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
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl mb-4 text-gray-800 font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {feature.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.features.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.1,
                        }}
                        className="flex items-start gap-2"
                      >
                        <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">{item}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* 右侧单张图片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 h-auto overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={robotPowerImage}
              alt="三体机器人的强大能力"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}