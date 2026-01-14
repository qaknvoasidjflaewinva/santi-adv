import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    period: "1月1日前",
    price: "200",
    periodUnit: "/年",
    description: "限时优惠:1月1日前购买,永久锁定此价格",
    borderColor: "border-black",
    features: ["无限次搭配方案生成", "仅需200元/年", "早买早进化"],
  },
  {
    period: "1月15日前",
    price: "300",
    periodUnit: "/年",
    description: "1月1日-1月15日期间购买,永久锁定此价格",
    borderColor: "border-[#3182ce]",
    features: ["升级智能布局推荐", "较首购涨价100元", "把握优惠时机"],
  },
  {
    period: "2月15日前",
    price: "400",
    periodUnit: "/年",
    description: "1月15日-2月15日期间购买,永久锁定此价格",
    borderColor: "border-[#805ad5]",
    badge: "即将涨价",
    features: ["持续升级功能", "较首购涨价200元", "抓紧最后机会"],
  },
];

export function XRFPricingSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleBuy() {
    setIsDialogOpen(true);
  }

  function handleConfirm() {
    //正式服
    window.open("https://showlife.cc?scrollTo=6500", "_blank");
    //测试服
    //window.open("https://test-wind.eggrj.com?scrollTo=6500", "_blank");
    setIsDialogOpen(false);
  }

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-[1580px] mx-auto px-5">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#333] mb-3 leading-tight">
            小渲风设计三体人-灵感搭配师
          </h1>
          <p className="text-base text-[#666]">
            限时优惠,早买早享受,锁定初始价格,永久不变
          </p>
        </div>

        {/* 主要内容区域 */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
          {/* 定价卡片区域 */}
          <div className="flex-1 lg:w-[1200px]">
            <div className="flex flex-wrap justify-between gap-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white border-2 ${plan.borderColor} rounded-2xl p-9 w-[260px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]`}
                >
                  {plan.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#f7f4ff] text-[#805ad5] rounded-[20px] text-xs font-semibold">
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold text-[#333] mb-5">
                    {plan.period}
                  </h3>

                  <div className="flex items-baseline mb-4">
                    <span className="text-xl text-[#333] mr-1">¥</span>
                    <span className="text-4xl font-bold text-[#333]">
                      {plan.price}
                    </span>
                    <span className="text-lg text-[#666] ml-1">
                      {plan.periodUnit}
                    </span>
                  </div>

                  <p className="text-sm text-[#666] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <ul className="list-none p-0 m-0">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-[#333] mb-3 leading-relaxed"
                      >
                        <span
                          className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold mr-3 flex-shrink-0 ${
                            index === 0
                              ? "bg-gray-400 text-white"
                              : "bg-[#48bb78] text-white"
                          }`}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 视频播放区域 */}
          <div className="flex-shrink-0 w-full lg:w-auto lg:ml-8">
            <div className="w-full lg:w-[600px] h-[360px] rounded-3xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] bg-black">
              <video
                className="w-full h-full object-contain rounded-3xl"
                controls
                loop
                muted
                playsInline
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source
                  src="https://showlifecc.oss-cn-hangzhou.aliyuncs.com/assets/video/windWeb/santiren.mp4"
                  type="video/mp4"
                />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>

        {/* 行动号召区域 */}
        <div className="w-full bg-gradient-to-r from-[#805ad5] to-[#38b2ac] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-3 text-white">
            立即行动,锁定优惠价格
          </h2>
          <p className="text-base mb-8 opacity-95 leading-relaxed">
            成为早期支持者,享受最低价格,永久锁定,不再涨价
          </p>
          <button
            onClick={handleBuy}
            className="bg-white text-[#805ad5] border-none rounded-[50px] px-12 py-4 text-lg font-semibold cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:scale-95"
          >
            立即购买
          </button>
        </div>
      </div>

      {/* 确认跳转弹窗 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>跳转提示</DialogTitle>
            <DialogDescription>
              将要跳转小渲风官网购买，确定跳转？
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              取消
            </Button>
            <Button onClick={handleConfirm}>确定跳转</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
