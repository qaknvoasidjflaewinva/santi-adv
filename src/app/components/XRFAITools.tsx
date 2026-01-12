import { MessageSquare, Pencil, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

const aiPeople = [
  {
    id: 1,
    name: '劳模客服',
    subtitle: '24小时不打烊的金牌接待员',
    icon: MessageSquare,
    avatar: '👨‍💼',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjU3Mjg2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '微信端秒级响应客户询价、产品资料索取、报价咨询',
      '杜绝漏回复、慢回复导致的客户流失',
      '无需人工值守，自动调取产品手册、报价体系',
      '客户随时问、随时答，提升品牌专业度'
    ]
  },
  {
    id: 2,
    name: '远程设计师',
    subtitle: '随身携带的移动设计部',
    icon: Pencil,
    avatar: '👨‍🎨',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1581548133861-ad7a282a1d62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtpbmclMjB0YWJsZXR8ZW58MXx8fHwxNzY2NTcyODY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '设计师现场量尺，微信发指令就能远程驱动小渲风',
      '画图、改图、生成报表，不用回公司加班',
      '指令式操作零门槛，尺寸、材质、样式随时调整',
      '出图效率提升50%以上，接单能力翻倍'
    ]
  },
  {
    id: 3,
    name: '超级统计员',
    subtitle: '生意的智能数据管家',
    icon: BarChart3,
    avatar: '👨‍💻',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjU1OTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '自动抓取小渲风数据，一键生成核心报表',
      '订单量、渲染消耗、地区业绩、业务员跟进、客户复购等',
      '精准识别"3个月未下单老客户""高消耗材质型号"',
      '用数据指导备货、客户维护，告别Excel手动统计'
    ]
  }
];

export function XRFAITools() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900">小渲风 - 搭配三体人</h2>
          <p className="text-xl text-gray-600">三位智能助手，全方位提升业务效率</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {aiPeople.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                {/* Avatar Section - Cartoon Character */}
                <div className="relative overflow-hidden h-56">
                  <div className={`absolute inset-0 bg-gradient-to-br ${person.color}`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Cartoon Avatar Circle */}
                    <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-2xl mb-4">
                      <span className="text-7xl">{person.avatar}</span>
                    </div>
                    <div className={`text-sm px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg`}>
                      三体人 {person.id}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl mb-2 text-gray-900">{person.name}</h3>
                    <p className="text-gray-600">{person.subtitle}</p>
                  </div>
                  
                  <ul className="space-y-3 flex-1">
                    {person.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
