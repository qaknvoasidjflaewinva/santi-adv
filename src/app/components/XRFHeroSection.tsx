import React from "react";
import { Rocket, Play } from "lucide-react";
import { motion } from "motion/react";

export function XRFHeroSection() {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32" id="home">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6">
              小渲风-三体人：
              <br />
              <span className="text-[#165DFF]">精准赋能设计增长</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              拓客运营官、谈单沟通员、灵感搭配师——三大智能解决方案
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform  transition-transform hover:rotate-0 duration-500">
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
                  src="https://showlifecc.oss-cn-hangzhou.aliyuncs.com/assets/video/windWeb/santiren.mp4"
                  type="video/mp4"
                />
                您的浏览器不支持视频播放。
              </video>
            </div>
            {/* AI为人民服务图标区域 */}

            <div className="absolute top-10 -right-5 w-64 h-64 bg-[#165DFF]/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -bottom-5 -left-10 w-48 h-48 bg-[#36CBCB]/10 rounded-full filter blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
