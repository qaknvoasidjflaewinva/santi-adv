import { Sparkles, MessageSquare, Pencil, BarChart3, Gift } from "lucide-react";
import { motion } from "motion/react";

export function XRFMobilePage() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-pink-600 min-h-full">
      {/* Hero Section */}
      <div className="text-white px-6 pt-16 pb-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm">AI 赋能渲染设计</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl mb-3"
        >
          小渲风 AI 三体人
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-purple-100 mb-6"
        >
          劳模客服 + 远程设计师 + 超级统计员
        </motion.p>
      </div>

      {/* AI People Cards */}
      <div className="px-6 pb-8">
        {[
          {
            name: "劳模客服",
            subtitle: "24小时不打烊",
            avatar: "👨‍💼",
            color: "from-blue-500 to-cyan-500",
            icon: MessageSquare,
            features: [
              "微信端秒级响应",
              "杜绝客户流失",
              "自动调取资料",
              "提升品牌形象",
            ],
          },
          {
            name: "远程设计师",
            subtitle: "移动设计部",
            avatar: "👨‍🎨",
            color: "from-purple-500 to-pink-500",
            icon: Pencil,
            features: [
              "现场远程画图",
              "不用回公司",
              "指令式操作",
              "效率提升50%",
            ],
          },
          {
            name: "超级统计员",
            subtitle: "智能数据管家",
            avatar: "👨‍💻",
            color: "from-green-500 to-emerald-500",
            icon: BarChart3,
            features: [
              "自动生成报表",
              "订单/业绩分析",
              "精准识别机会",
              "告别手动统计",
            ],
          },
        ].map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="bg-white rounded-2xl p-4 mb-4 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${person.color} flex items-center justify-center text-3xl shadow-lg`}
              >
                {person.avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.subtitle}</p>
              </div>
              <person.icon className="w-6 h-6 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {person.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="text-xs bg-gray-50 rounded-lg px-3 py-2 text-gray-700"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 推荐福利 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mx-6 mb-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-5 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white rounded-full p-2">
            <Gift className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl text-white">元旦限时福利</h3>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-3">
          <p className="text-gray-800 text-sm mb-2">
            老客户介绍新客户成交小渲风
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg text-center">
              <div className="text-xs">双方均获得</div>
              <div className="text-2xl">3年</div>
              <div className="text-xs">免费使用</div>
            </div>
          </div>
        </div>
        <p className="text-white/90 text-xs text-center">
          推荐即赚钱 · 互惠双赢
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="px-6 pb-12"
      >
        <button className="w-full bg-white text-purple-700 py-4 rounded-full text-lg shadow-xl flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          立即体验 AI 三体人
        </button>
        <p className="text-center text-white/80 text-xs mt-4">
          低门槛 · 高效率 · 轻量化
        </p>
      </motion.div>
    </div>
  );
}
