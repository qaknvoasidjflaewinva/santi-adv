import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
// 图片网络地址 - 可以根据实际情况替换
const pegboardImage1 = "https://sanjz-cdn.santi.ren/santi/images/pic1.png";
const pegboardImage2 = "https://sanjz-cdn.santi.ren/santi/images/抖音发布.png";

export function SFEAITools() {
  const examples = [
    {
      title: "洞洞板置物架推广",
      description: "自动生成的种草文案与标签,精准触达家居收纳人群。",
      image: pegboardImage1,
      type: "image",
    },
    {
      title: "实木洞洞板作品展示",
      description: "高清大图自动排版,配合吸引眼球的标题,提升点击率。",
      image: pegboardImage2,
      type: "video",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl mb-4 text-gray-900">发布作品示例</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            三体人为您自动生成的精美图文作品
          </p>
        </motion.div>

        {/* 作品示例卡片 */}
        <div className="grid md:grid-cols-2 gap-20">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                {/* 图片/视频区域 */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  {example.type === "video" ? (
                    <div className="relative w-full h-full">
                      <img
                        src={example.image}
                        alt={example.title}
                        className="w-full h-full object-cover"
                      />
                      {/* 视频播放器覆盖层效果 */}
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-gray-700 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* 导航按钮模拟 */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/60"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white/60"></div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>

                {/* 文字内容区域 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
