import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Clock, TrendingUp, Zap, BarChart3, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

// 视频网络地址
const sanTiDifferenceVideo = "https://sanjz-cdn.santi.ren/santi/videos/三体机器人区别(1).mp4";
const autoWechatVideo = "https://sanjz-cdn.santi.ren/santi/videos/自动发微信消息.mp4";

const coreAdvantages = [
  "工厂效率提高",
  "下单效率提升90%",
  "跨部门沟通成本降低 80%",
  "错单率降低至0.1%",
  "操作上手难度极低",
  "沉浸式交互，界面就像微信一样简单",
  "自动生成图表和分析报告，数据一目了然"
];

const tools = [
  {
    id: 1,
    name: "超级跟单员",
    description: "智能接单，自动分析表格、图片下单、客户管理，说一句话，订单进度自动出来",
    icon: MessageSquare
  },
  {
    id: 2,
    name: "超级智能数据管家",
    description: "随时随地收款、成本分析，手机端可查可微信推送、经营状况分析，给到降本增效专业建议",
    icon: BarChart3
  }
];

const pricingInfo = {
  tiers: [
    { price: "300元/年/个", highlight: false },
    { price: "500元/年/2个", highlight: true }
  ],
  highlightText: "2026年2月15日前购买享",
  period: "活动时间：2025年12月25日-2026年3月25日"
};

export function LLFeatures() {
  return (
    <>
      {/* 核心优势 */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              老板良三体人的核心优势
            </h2>
            <p className="text-xl text-gray-600">
              懂业务、懂管理、懂数据的AI员工即买即用
            </p>
          </motion.div>

          {/* 左右布局：左侧视频，右侧核心优势列表 */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            {/* 右侧核心优势列表 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="space-y-5">
                {coreAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* 左侧自动发微信消息视频 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <Card className="p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="relative rounded-xl overflow-hidden">
                  <video
                    className="w-full h-auto object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                  >
                    <source
                      src={autoWechatVideo}
                      type="video/mp4"
                    />
                    您的浏览器不支持视频播放。
                  </video>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 工具定位 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              工具定位
            </h2>
          </motion.div>

          {/* 左右布局：左侧工具定位卡片，右侧视频 */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* 左侧工具定位卡片 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 space-y-8"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: tool.id * 0.2 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <tool.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <Badge className="bg-blue-100 text-blue-800 mb-2">{String(tool.id).padStart(2, '0')}</Badge>
                        <h3 className="text-2xl font-bold text-gray-900">{tool.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg">{tool.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* 右侧三体机器人区别视频 - 调整视频高度与左侧文本对齐 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-1/2 flex items-start"
            >
              <Card className="p-4 hover:shadow-xl transition-shadow duration-300 w-full">
                <div className="relative rounded-xl overflow-hidden">
                  <video
                    className="w-full h-80 object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                  >
                    <source
                      src={sanTiDifferenceVideo}
                      type="video/mp4"
                    />
                    您的浏览器不支持视频播放。
                  </video>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 价格信息 */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              限时福利
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              把握机会，立即拥有老板良三体人
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingInfo.tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2
                }}
              >
                <Card className={`p-8 text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden ${tier.highlight ? 'border-2 border-green-500 shadow-lg' : ''}`}>
                  <div className="mb-6 relative">
                    {/* 为了保持高度一致，添加占位元素 */}
                    {!tier.highlight && (
                      <div className="h-10 mb-4"></div>
                    )}
                    {/* 仅为500元方案显示优惠标识 - 非旋转样式 */}
                    {tier.highlight && (
                      <div className="inline-block bg-green-500 text-white px-6 py-2 text-sm font-bold rounded-full mb-4">
                        {pricingInfo.highlightText}
                      </div>
                    )}
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Clock className="w-6 h-6" />
              <span className="text-xl font-bold">{pricingInfo.period}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}