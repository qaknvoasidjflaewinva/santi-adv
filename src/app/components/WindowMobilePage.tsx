import { motion } from 'motion/react';
import { Smartphone, Clock, Palette, BarChart3, Sparkles, Gift, Calendar, Zap } from 'lucide-react';

export function WindowMobilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 标题区 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl mb-3">AI三体人</h1>
        <p className="text-lg opacity-90">您的智能工作伙伴</p>
      </div>

      {/* 三个AI三体人 */}
      <div className="px-4 py-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">劳模客服</h3>
              <p className="text-sm text-gray-500">24小时不间断服务</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ 全天候在线响应</li>
            <li>✓ 智能问题解答</li>
            <li>✓ 客户满意度提升</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Palette className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">远程设计师</h3>
              <p className="text-sm text-gray-500">移动端设计专家</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ 手机随时设计</li>
            <li>✓ AI辅助创作</li>
            <li>✓ 效率大幅提升</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900">超级统计员</h3>
              <p className="text-sm text-gray-500">智能数据分析</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ 自动数据统计</li>
            <li>✓ 智能报表生成</li>
            <li>✓ 决策更精准</li>
          </ul>
        </motion.div>
      </div>

      {/* CAD-三体人新品推荐 */}
      <div className="px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-yellow-400 text-orange-900 px-4 py-1 rounded-bl-2xl text-sm">
            🔥 新品
          </div>
          <div className="flex items-center gap-3 mb-4 mt-4">
            <Smartphone className="w-10 h-10" />
            <div>
              <h3 className="text-2xl">CAD-三体人</h3>
              <p className="text-sm opacity-90">手机画CAD，随时随地</p>
            </div>
          </div>
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>语音告诉他，自动画CAD</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>自动挡+手动挡双模式</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>导入门窗、小渲风、柜柜</span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="text-2xl mb-1">¥500/年</div>
            <div className="text-sm opacity-90 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              仅限元旦活动期间
            </div>
          </div>
        </motion.div>
      </div>

      {/* 价格方案 */}
      <div className="px-4 pb-8">
        <h2 className="text-2xl text-center mb-6 text-gray-900">套餐价格</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg text-gray-900">单个AI三体人</span>
              <span className="text-2xl text-blue-600">¥500</span>
            </div>
            <p className="text-sm text-gray-500">选择任意一位助手</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-500">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg text-gray-900">两个AI三体人</span>
              <span className="text-2xl text-purple-600">¥800</span>
            </div>
            <p className="text-sm text-gray-500">任选两位，更优惠</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md p-5 border-2 border-orange-400 relative">
            <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              推荐
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg text-gray-900">三个全部</span>
              <span className="text-3xl text-orange-600">¥1000</span>
            </div>
            <p className="text-sm text-gray-600">全能助手团队，最划算</p>
          </div>
        </div>
      </div>

      {/* 限时福利 */}
      <div className="px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white"
        >
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-8 h-8" />
            <h3 className="text-2xl">老客户推荐福利</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 space-y-2 text-sm">
            <p>✓ 推荐新客户购买门窗/柜柜主产品</p>
            <p>✓ 成交后双方各得CAD-三体人</p>
            <p>✓ 免费使用3年</p>
          </div>
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full">
              <Calendar className="w-5 h-5" />
              <span>仅限元旦期间</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 底部提示 */}
      <div className="text-center pb-12 px-6">
        <p className="text-gray-500 text-sm mb-2">长按截图分享到朋友圈</p>
        <p className="text-xs text-gray-400">了解更多请访问 www.santi.ren</p>
      </div>
    </div>
  );
}
