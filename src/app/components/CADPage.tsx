import { motion } from 'motion/react';
import { Smartphone, Zap, Wand2, FileDown, Gift, Users, TrendingUp, Star, Calendar, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface CADPageProps {
  onShowMobile?: () => void;
}

export function CADPage({ onShowMobile }: CADPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 手机图标按钮 - 固定在右上角 */}
      {onShowMobile && (
        <button
          onClick={onShowMobile}
          className="fixed top-20 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          title="手机展示页"
        >
          <Smartphone className="w-6 h-6" />
        </button>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 text-white py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-yellow-300" />
              <span className="text-sm">🎉 元旦限时活动 · 仅此一天！</span>
            </div>

            <h1 className="text-5xl md:text-6xl mb-6">
              CAD-三体人
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-orange-100">
              手机说话就能画CAD，支持自动挡+手动挡
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
              语音描述 → AI自动画图 → 手动精修 → 一键导入柜柜/小渲风/门窗软件
            </p>

            <div className="bg-yellow-400 text-gray-900 inline-block px-8 py-4 rounded-2xl mb-8">
              <div className="text-sm mb-1">元旦特惠价</div>
              <div className="text-5xl">¥500<span className="text-2xl">/年</span></div>
              <div className="text-xl mt-2 text-red-700 font-semibold">涨价不涨老客户</div>
            </div>

            {/* 核心卖点 */}
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Smartphone className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg">手机上随时画</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Wand2 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg">AI+手动双模式</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <FileDown className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg">直接导入软件</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 功能展示 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900">CAD三体人能做什么？</h2>
            <p className="text-xl text-gray-600">从此告别电脑画图，手机就是制图工具</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900">自动挡模式</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>语音描述：</strong>"画一个2米宽1.5米高的衣柜，左边三个抽屉"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>AI自动画图：</strong>三体人立即生成CAD图纸</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>智能修改：</strong>"把抽屉改成4个""高度改成1.8米"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>省时省力：</strong>5分钟画完原本需要1小时的图</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Wand2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900">手动挡模式</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span><strong>点击编辑：</strong>AI画完后，点击任意部分进入编辑</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span><strong>精细调整：</strong>拖动、缩放、旋转，像修图一样简单</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span><strong>专业控制：</strong>尺寸、角度、位置完全由你掌控</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span><strong>完美结合：</strong>AI快速起稿，手动精雕细琢</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* 导入功能 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FileDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">无缝对接现有软件</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-2">📱→💻</div>
                  <div className="text-gray-900 mb-1">一键导出</div>
                  <div className="text-sm text-gray-600">CAD图纸直接导出</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-2">🔗</div>
                  <div className="text-gray-900 mb-1">柜柜软件</div>
                  <div className="text-sm text-gray-600">导入后直接下单生产</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-2">🪟</div>
                  <div className="text-gray-900 mb-1">门窗软件</div>
                  <div className="text-sm text-gray-600">门窗设计无缝衔接</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-gray-900 mb-1">小渲风等</div>
                  <div className="text-sm text-gray-600">渲染效果图无缝衔接</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 🔥🔥 拉新奖励核心区域 🔥🔥 */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-600 via-pink-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-600 px-6 py-3 rounded-full mb-6 text-xl animate-pulse">
              <Gift className="w-6 h-6" />
              <span>🔥 介绍一个客户，送3年免费使用！</span>
            </div>
            <h2 className="text-5xl mb-4 text-white">老客户推荐购买主产品</h2>
            <p className="text-2xl text-pink-100">成交即送，新老客户都免费3年！</p>
          </motion.div>

          {/* 拉新流程 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 text-center bg-white h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  1
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">介绍客户</h3>
                <p className="text-gray-700 leading-relaxed">
                  将CAD-AI三体人或柜柜软件、门窗软件介绍给您的朋友、同行
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-blue-600">
                  <Users className="w-5 h-5" />
                  <span>客户群遍地都是</span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 text-center bg-white h-full border-4 border-yellow-400">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  2
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">客户成交</h3>
                <p className="text-gray-700 leading-relaxed">
                  新客户购买柜柜软件或门窗软件（任一产品即可）
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-orange-600">
                  <TrendingUp className="w-5 h-5" />
                  <span>成交门槛低</span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 text-center bg-gradient-to-br from-green-500 to-emerald-600 text-white h-full">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl">
                  3
                </div>
                <h3 className="text-2xl mb-3">双方都免费</h3>
                <p className="leading-relaxed">
                  新客户和您都<strong className="text-yellow-300 text-xl">免费获得CAD-AI三体人3年使用权</strong>
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Gift className="w-5 h-5" />
                  <span className="text-yellow-300">价值1500元</span>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* 收益计算器 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 mb-8"
          >
            <h3 className="text-3xl text-center mb-6 text-gray-900">💰 拉新收益一目了然</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <div className="text-5xl mb-2">1人</div>
                <div className="text-gray-600 mb-3">介绍1个客户</div>
                <div className="text-3xl text-blue-600">省¥1500</div>
                <div className="text-sm text-gray-500 mt-2">3年免费使用</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-300">
                <div className="text-5xl mb-2">3人</div>
                <div className="text-gray-600 mb-3">介绍3个客户</div>
                <div className="text-3xl text-purple-600">省¥4500</div>
                <div className="text-sm text-gray-500 mt-2">3个账号各3年</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-4 border-orange-400">
                <div className="text-5xl mb-2">5人</div>
                <div className="text-gray-600 mb-3">介绍5个客户</div>
                <div className="text-3xl text-red-600">省¥7500</div>
                <div className="text-sm text-gray-500 mt-2">团队全配齐</div>
              </div>
            </div>
          </motion.div>

          {/* 行动号召 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-center"
          >
            <h3 className="text-3xl mb-4 text-gray-900">👥 您的同行朋友都需要这个工具！</h3>
            <p className="text-xl text-gray-800 mb-6">
              介绍给他们，他们省钱省时间，您还能免费用3年！
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white px-6 py-3 rounded-lg text-gray-900">
                <div className="text-sm text-gray-600">介绍对象</div>
                <div className="text-lg">柜体厂、门窗厂、设计师</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg text-gray-900">
                <div className="text-sm text-gray-600">推荐方式</div>
                <div className="text-lg">转发页面、微信分享</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg text-gray-900">
                <div className="text-sm text-gray-600">奖励发放</div>
                <div className="text-lg">成交后立即激活</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 定价与活动时间 */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Calendar className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl mb-6">元旦限时活动</h2>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-yellow-400 p-8 mb-8">
              <div className="text-center mb-6">
                <Badge className="bg-yellow-400 text-gray-900 text-lg px-4 py-2 mb-4">
                  限时特惠
                </Badge>
                <div className="text-6xl mb-2">¥500<span className="text-3xl">/年</span></div>
                <div className="text-xl text-blue-200">元旦活动期间专享价</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎁 单独购买</div>
                  <div className="text-lg text-blue-200">500元/年，立即使用</div>
                </div>
                <div className="bg-yellow-400/20 rounded-lg p-4 border-2 border-yellow-400">
                  <div className="text-2xl mb-2">🔥 介绍客户</div>
                  <div className="text-lg text-yellow-300">免费送3年（价值1500元）</div>
                </div>
              </div>
            </Card>

            <div className="bg-red-500 rounded-xl p-6 mb-8">
              <div className="text-2xl mb-2">⏰ 活动截止时间</div>
              <div className="text-4xl">元旦活动期间</div>
              <div className="text-lg text-red-100 mt-2">错过再等一年，名额有限</div>
            </div>

            <div className="text-center">
              <div className="text-xl mb-4">💡 聪明的选择</div>
              <div className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                不用花钱，只需转发给3个同行朋友。他们需要这个工具，您也免费用上了！
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 使用场景 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900">什么场景最适合用？</h2>
            <p className="text-xl text-gray-600">随时随地，想画就画</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🏠',
                title: '客户现场量房',
                desc: '边量边画，当场出图给客户看',
                benefit: '提升专业形象，签单率更高'
              },
              {
                icon: '🚗',
                title: '外出办事途中',
                desc: '车上、路上，利用碎片时间画图',
                benefit: '时间利用率提升200%'
              },
              {
                icon: '💼',
                title: '临时修改方案',
                desc: '客户临时要改图，手机立即搞定',
                benefit: '响应速度快，客户满意度高'
              },
              {
                icon: '🌙',
                title: '晚上在家加班',
                desc: '不用开电脑，躺着都能画CAD',
                benefit: '工作活两不误'
              }
            ].map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{scenario.icon}</div>
                  <h3 className="text-2xl mb-2 text-gray-900">{scenario.title}</h3>
                  <p className="text-gray-700 mb-3">{scenario.desc}</p>
                  <div className="flex items-center gap-2 text-green-600">
                    <Star className="w-5 h-5" />
                    <span>{scenario.benefit}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最终CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">立即开始使用CAD-AI三体人</h2>
            <p className="text-xl mb-8 text-blue-100">
              元旦活动限时优惠 | 介绍客户即送3年免费使用
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:sales@santi.ren"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl text-xl hover:bg-yellow-300 transition-colors inline-flex items-center gap-2"
              >
                <span>立即购买 ¥500/年</span>
                <Rocket className="w-6 h-6" />
              </a>
              <a
                href="mailto:sales@santi.ren?subject=我要推荐客户获取免费使用"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl text-xl hover:bg-white/30 transition-colors inline-flex items-center gap-2"
              >
                <span>我要推荐客户</span>
                <Gift className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8 text-blue-100">
              <p>联系邮箱: sales@santi.ren</p>
              <p className="mt-2 text-sm">客服会在24小时内回复您</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}