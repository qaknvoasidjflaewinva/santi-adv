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
    period: "3月15日前",
    price: "500",
    periodUnit: "/个",
    description: "",
    borderColor: "border-[#36CBCB]",
    badge: "还会继续涨价",
    features: ["单个AI工具500元/年", "早买早进化", "把握优惠时机"],
  },
];

const negotiatorVideoSrc =
  "https://showlifecc.oss-cn-hangzhou.aliyuncs.com/assets/video/windWeb/1.27tandansanti.mp4";

export function XRFNegotiatorSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleBuy() {
    setIsDialogOpen(true);
  }

  function handleConfirm() {
    window.open("https://showlife.cc?scrollTo=6500", "_blank");
    setIsDialogOpen(false);
  }

  return (
    <section className="py-20 bg-white" id="negotiator">
      <div className="max-w-[1580px] mx-auto px-5">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <h1 className="text-3xl font-bold text-[#333] leading-tight">
              小渲风设计三体人-谈单沟通员
            </h1>
          </div>
          <p className="text-base text-[#666] max-w-2xl mx-auto">
            专业的沟通策略与现场演示能力，帮您在谈单中建立信任、传递价值，提高转化与客户满意度。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 w-full lg:w-auto order-2 lg:order-1"
          >
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
                <source src={negotiatorVideoSrc} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </motion.div>

          <div className="w-full lg:w-auto order-1 lg:order-2">
            <div className="flex flex-wrap justify-center gap-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white border-2 ${plan.borderColor} rounded-2xl p-9 w-[260px] h-[360px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]`}
                >
                  {plan.badge ? (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#e8fffb] text-[#0d9488] rounded-[20px] text-xs font-semibold text-center">
                      {plan.badge}
                    </div>
                  ) : null}

                  <h3 className="text-2xl font-semibold text-[#333] mb-5 text-center mt-4">
                    {plan.period}
                  </h3>

                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-xl text-[#333] mr-1">¥</span>
                    <span className="text-4xl font-bold text-[#333]">
                      {plan.price}
                    </span>
                    <span className="text-lg text-[#666] ml-1">
                      {plan.periodUnit}
                    </span>
                  </div>

                  {plan.description ? (
                    <p className="text-sm text-[#666] leading-relaxed mb-6">
                      {plan.description}
                    </p>
                  ) : null}

                  <ul className="list-none p-0 m-0">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-[#333] mb-3 leading-relaxed"
                      >
                        <span
                          className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold mr-3 flex-shrink-0 bg-[#36CBCB] text-white`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Button className="w-full" onClick={handleBuy}>
                      立即购买
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
