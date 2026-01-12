import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, TrendingUp, AlertTriangle, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const pricingTiers = [
  {
    period: "1月1日前",
    price: 200,
    badge: "限时抢购",
    badgeColor: "bg-green-500",
    highlight: true,
    features: [
      "单个AI工具仅需200元/年",
      "三个工具打包仅600元/年",
      "早买早进化",
    ],
  },
  {
    period: "1月10日前",
    price: 300,
    badge: "即将涨价",
    badgeColor: "bg-yellow-500",
    features: ["单个AI工具300元/年", "较首购涨价100元", "抓紧最后机会"],
  },
  {
    period: "2月15日前",
    price: 400,
    badge: "继续涨价",
    badgeColor: "bg-orange-500",
    features: ["单个AI工具400元/年", "较首购涨价200元", "把握优惠时机"],
  },
  {
    period: "3月15日前",
    price: 500,
    badge: "还会持续涨价",
    badgeColor: "bg-red-500",
    features: ["单个AI工具500元/年", "较首购涨价300元", "正式定价"],
  },
];

export function XRFPricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-01-29");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900">阶梯定价策略</h2>
          <p className="text-xl text-gray-600 mb-8">
            越早购买，价格越优惠。AI持续进化，早买早受益
          </p>
        </motion.div>

        {/* Pricing Timeline */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden ${
                  tier.highlight
                    ? "border-green-500 border-2 shadow-xl scale-105"
                    : "border-gray-200"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${tier.badgeColor} text-white`}>
                      {tier.badge}
                    </Badge>
                    {tier.highlight && (
                      <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{tier.period}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl text-gray-900">
                        ¥{tier.price}
                      </span>
                      <span className="text-gray-500">/年</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <TrendingUp
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            tier.highlight ? "text-green-600" : "text-gray-400"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl mb-2 text-gray-900">三体人持续进化中</h3>
              <p className="text-gray-700 mb-3">
                每个AI三体人都在不断学习和进化，功能持续增强。早期购买用户享受同样的升级，但价格锁定在购买时的优惠价格。
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>功能持续更新</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI能力不断增强</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>早买价格永久锁定</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
