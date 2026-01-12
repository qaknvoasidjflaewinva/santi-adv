import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  TrendingUp,
  AlertTriangle,
  Zap,
} from "lucide-react";
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
    features: [
      "单个AI工具300元/年",
      "较首购涨价100元",
      "抓紧最后机会",
    ],
  },
  {
    period: "2月15日前",
    price: 400,
    badge: "继续涨价",
    badgeColor: "bg-orange-500",
    features: [
      "单个AI工具400元/年",
      "较首购涨价200元",
      "把握优惠时机",
    ],
  },
  {
    period: "3月15日前",
    price: 500,
    badge: "还会持续涨价",
    badgeColor: "bg-red-500",
    features: [
      "单个AI工具500元/年",
      "较首购涨价300元",
      "正式定价",
    ],
  },
];

export function WindowPricingSection() {
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
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24,
          ),
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
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl mb-4 text-gray-900">
            门窗·三体人定价-计划表
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            首次锁定长期年费！涨价不涨老客户！
          </p>

          {/* Countdown Timer */}
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full mb-8">
            <AlertTriangle className="w-5 h-5" />
            <span>AI是时代的必然，迟早都是必需品！</span>
          </div>
        </motion.div>

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
                className={`p-6 h-full relative overflow-hidden ${
                  tier.highlight
                    ? "border-4 border-green-500 shadow-xl scale-105"
                    : "border-2 border-gray-200"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-500 text-white px-4 py-1 text-sm transform rotate-45 translate-x-8 translate-y-2">
                      推荐
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <Badge
                    className={`${tier.badgeColor} text-white mb-3`}
                  >
                    {tier.badge}
                  </Badge>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <h3 className="text-xl text-gray-900">
                      {tier.period}
                    </h3>
                  </div>
                  <div className="mt-4">
                    <span className="text-5xl text-gray-900">
                      ¥{tier.price}
                    </span>
                    <span className="text-gray-600">/个</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${tier.badgeColor}`}
                      ></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-8"
        >
          <Zap className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl mb-4">为什么要早购？</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-3xl mb-2">60%</div>
              <p className="text-blue-100">
                最高优惠幅度，首购仅需200元
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">+300元</div>
              <p className="text-blue-100">
                晚购比早购多花300元，机会成本高
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">提前赚</div>
              <p className="text-blue-100">
                早用早受益，AI工具立即开始为您赚钱
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Price Increases - Evolution Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-3">为什么会涨价？</h3>
            <p className="text-xl text-purple-200">
              三体人的价值随时间不断增长
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-xl">
                  🧠
                </div>
                <h4 className="text-xl">三体人不断进化</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                每一位用户的使用、教育和培训，都在让三体人变得更聪明。
                <span className="block mt-2 text-yellow-300">
                  您用得越多，教得越多，三体人越智能，价值越高！
                </span>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-xl">
                  ⚡
                </div>
                <h4 className="text-xl">AI自动化是必然趋势</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                用AI让工作自动化，是未来工厂的标配，不是要不要买的问题，而是早买还是晚买。
                <span className="block mt-2 text-yellow-300">
                  早晚都得买，为什么不趁优惠早点受益？
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-gray-900 text-center">
            <p className="text-lg mb-2">
              <span className="text-xl">💡 </span>
              随着三体人越来越聪明，价格也会随之上涨
            </p>
            <p className="text-2xl">
              今天的200元 = 明天的500元 + 这段时间的收益损失
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
