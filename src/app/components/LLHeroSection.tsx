import React from "react";
import { motion } from "motion/react";
// 导入视频
import sanTiFunctionVideo from "../../assets/videos/三体功能介绍.mp4";

export function LLHeroSection() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-cyan-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* 左侧文字内容 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6">
              老板良<span className="text-blue-600">三体人</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              让每个员工,都拥有一支AI助手团队
            </p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-600 mb-6">
                三体人不是来替代你的,而是来增强你的。从此,销售有AI帮忙拓客,设计有AI辅助绘图,生产有AI优化排程,每个人都能做更多、赚更多。
              </p>
              <p className="text-gray-600 mb-6">
                通过三体操作系统,可为每个岗位配置专属AI助手。
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>销售员+AI拓客助手:辅助客户线索管理与跟进</li>
                <li>设计师+AI绘图助手:辅助设计方案快速生成</li>
                <li>厂长+AI排程助手:辅助生产计划智能优化</li>
              </ul>
              <p className="text-gray-600">
                人类专注创造,AI处理重复。致力于让工作更高效,让员工更有价值。
              </p>
            </motion.div>
          </motion.div>

          {/* 右侧图片内容 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500">
              <video
                className="w-full h-auto object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
              >
                <source
                  src={sanTiFunctionVideo}
                  type="video/mp4"
                />
                您的浏览器不支持视频播放。
              </video>
            </div>
            {/* 装饰效果 */}
            <div className="absolute top-10 -right-5 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -bottom-5 -left-10 w-48 h-48 bg-cyan-100 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}