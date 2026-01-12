import { motion } from 'motion/react';
import { Rocket, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Rocket className="w-16 h-16 mx-auto mb-6" />
          
          <h2 className="text-4xl md:text-5xl mb-6">
            现在购买，立即启用！
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            AI三体人已就绪，等待为您的业务赋能
          </p>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block">
            <div className="text-sm mb-2">限时优惠价</div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl">¥200</span>
              <span className="text-xl text-blue-200 line-through">¥400</span>
            </div>
            <div className="text-sm mt-2 text-yellow-300">省¥200，优惠50%</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2" />
              立即咨询购买
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Phone className="mr-2" />
              预约演示
            </Button>
          </div>

          {/* Contact Info */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-100 mb-4">联系我们了解更多</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>销售热线：400-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>邮箱：sales@santi.ren</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>微信：GuGuiAI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-sm text-blue-100 relative z-10">
        <p>© 2025 柜柜软件 AI三体研究所 · 让AI成为您的超级助手</p>
      </div>
    </section>
  );
}