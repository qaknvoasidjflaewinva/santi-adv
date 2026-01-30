import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { CheckCircle2 } from "lucide-react";
// 视频或图片网络地址 - 可以根据实际情况替换
const featureVideo =
  "https://sanjz-cdn.santi.ren/santi/videos/营销获客三体人.mp4";

export function SFEPainPoints() {
  const features = [
    "自动匹配热门话题",
    "智能生成吸引人的文案",
    "智能生成精美图片",
    "定时发布功能",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-4xl mb-4 text-gray-900">
            营销获客三体人能做什么?
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            从自动生成精美图文内容到模拟真人发布，实现真正的全流程营销自动化。
          </p>
        </motion.div>

        {/* 功能模块 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
            {/* 左右布局：左侧文字，右侧视频/图片 */}
            <div className="flex flex-col md:flex-row gap-8 p-8">
              {/* 左侧文字内容 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                {/* 编号标记 */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl text-gray-900 mb-4">
                      全自动模拟真人操作
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      你只需要把想要发布的主题告诉"三体人"，它就会自动生成完整的作品内容并打开抖音。就像一个真实的员工一样，一步步点击上传、填写标题、添加话题标签。
                    </p>

                    {/* 特点列表 */}
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                          }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 右侧视频/图片内容 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-1/2 relative"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <video
                    className="w-full h-auto object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                  >
                    <source src={featureVideo} type="video/mp4" />
                    您的浏览器不支持视频播放。
                  </video>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
