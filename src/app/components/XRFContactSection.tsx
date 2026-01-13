import React from "react";
import { motion } from "motion/react";
import { Calendar, Gift, Clock, Rocket, ShoppingCart } from "lucide-react";
import xxfHxgImage from "@/assets/images/xxf_hxg.png";

export function XRFContactSection() {
  function handleBuy() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const benefits = [
    {
      icon: Gift,
      title: "超值赠品",
      description: "灵感搭配师一年使用权,现在免费赠送",
    },
    {
      icon: Clock,
      title: "限时优惠",
      description: "活动仅持续一个月,2026年1月16日至2月15日",
    },
    {
      icon: Rocket,
      title: "专业功能",
      description: "小渲风工厂版提供全套专业设计功能,满足各类设计需求",
    },
  ];

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* 顶部标题 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-3">
            换新购
          </h1>
          <p className="text-lg text-gray-600">福利加码不手软</p>
        </div>

        {/* 主购买卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-3xl p-8 md:p-12 mb-12 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* 左侧内容 */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                现在购买小渲风工厂版
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                赠小渲风设计三体人-灵感搭配师{" "}
                <span className="text-red-600 font-semibold">一年使用权</span>
              </p>

              {/* 活动时间 */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">活动时间</span>
                </div>
                <div className="text-gray-800 font-medium">
                  2026年1月16日-2月15日
                </div>
              </div>

              {/* 购买按钮 */}
              <button
                onClick={handleBuy}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="w-5 h-5" />
                立即购买
              </button>
            </div>

            {/* 右侧图片 */}
            <div className="flex-shrink-0 w-full lg:w-[500px]">
              <div className="relative transform rotate-2 transition-transform hover:rotate-0 duration-500">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                  <img
                    src={xxfHxgImage}
                    alt="小渲风工厂版"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 底部三个优势卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
