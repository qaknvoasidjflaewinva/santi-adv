import { motion } from 'motion/react';
import { Smartphone, Zap, Sparkles, Gift, Calendar, CheckCircle2, Star } from 'lucide-react';

export function CADMobilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* 标题区 */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 px-6 text-center">
        <div className="inline-block bg-yellow-400 text-orange-900 px-4 py-1 rounded-full text-sm mb-3">
          🔥 元旦限时新品
        </div>
        <h1 className="text-4xl mb-3">CAD-三体人</h1>
        <p className="text-lg opacity-90">手机上的画图机器人</p>
      </div>

      {/* 核心功能 */}
      <div className="px-4 py-8">
        <h2 className="text-2xl text-center mb-6 text-gray-900">随时随地画CAD</h2>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-5 border-2 border-orange-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">自动挡模式</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✓</span>
                <span>语音说出需求，AI自动生成图纸</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✓</span>
                <span>智能修改："抽屉改成4个"</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✓</span>
                <span>快速报价：计算门窗、阳光房总价</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✓</span>
                <span>5分钟完成1小时工作量</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-5 border-2 border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">手动挡模式</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>点击任意部分进入精细编辑</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>拖动、缩放、旋转自如操作</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>AI起稿+手动精修完美结合</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-5 border-2 border-green-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">一键导出对接</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>手机画完直接导出CAD文件</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>一键导入柜柜、门窗软件</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>支持小渲风等渲染软件</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 适用场景 */}
      <div className="px-4 pb-8">
        <h2 className="text-2xl text-center mb-6 text-gray-900">适用场景</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900">现场量尺寸时快速出图</p>
                <p className="text-xs text-gray-500 mt-1">客户面前即时设计，提升专业形</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900">出差路上修改图纸</p>
                <p className="text-xs text-gray-500 mt-1">随时随地处理客户需求</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900">快速响应客户调整</p>
                <p className="text-xs text-gray-500 mt-1">不用等回办公室，即刻交付</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900">碎片时间高效利用</p>
                <p className="text-xs text-gray-500 mt-1">通勤、等待时也能完成设计</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 价格 */}
      <div className="px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <div className="mb-4">
            <div className="text-5xl mb-2">¥500</div>
            <div className="text-lg opacity-90">/ 年</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center gap-2 text-yellow-300">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm">元旦活动专享价</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
          <p className="text-sm opacity-90">涨价不涨老客户</p>
        </motion.div>
      </div>

      {/* 限时福利 */}
      <div className="px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-8 h-8" />
            <h3 className="text-2xl">老客户推荐福利</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 text-green-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">1</div>
              <p className="text-sm">推荐新客户购买柜柜/门窗主产品</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 text-green-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">2</div>
              <p className="text-sm">成交后新老客户各得CAD-三体人</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 text-green-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">3</div>
              <p className="text-sm">免费使用3年（价值1500元）</p>
            </div>
          </div>
          <div className="mt-5 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg">
              <Calendar className="w-5 h-5" />
              <span>仅限元旦期间</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 为什么选择CAD-三体人 */}
      <div className="px-4 pb-8">
        <h2 className="text-2xl text-center mb-6 text-gray-900">为什么选择</h2>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border border-blue-100">
          <div className="space-y-4 text-sm text-gray-700">
            <p>✓ <span className="text-gray-900">AI驱动</span> - 不只是工具，是会思考的设计助手</p>
            <p>✓ <span className="text-gray-900">移动优先</span> - 专为手机优化，操作流畅</p>
            <p>✓ <span className="text-gray-900">效率翻倍</span> - 原本1小时的图纸，10分钟完成</p>
            <p>✓ <span className="text-gray-900">完美对接</span> - 与现有工作流无缝衔接</p>
            <p>✓ <span className="text-gray-900">持续进化</span> - AI不断学习，越用越智能</p>
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="text-center pb-12 px-6">
        <p className="text-gray-500 text-sm mb-2">长按截图分享到朋友圈</p>
        <p className="text-xs text-gray-400">了解更多请访问 www.santi.ren</p>
      </div>
    </div>
  );
}