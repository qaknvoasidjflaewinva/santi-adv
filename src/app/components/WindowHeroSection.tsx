import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function WindowHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm">AI 赋能门窗定制行业</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 max-w-4xl mx-auto">
            AI 三体人
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            劳模客服 + 远程设计师 + 超级统计员
          </p>

          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            低门槛 · 高效率 · 轻量化
            <br />
            助力用户降本增效，实现"移动办公 + 智能服务"双升级
          </p>
        </motion.div>
      </div>
    </section>
  );
}
