import React from "react";

export function LLApplications() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            三体机器人在不同行业的应用场景
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">门窗厂李总：用了三体机器人，我们3个月的线上询盘量超过了过去一年</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-4">
                <li>获客：三体机器人在抖音、快手、微信等平台自动寻找潜在客户，主动沟通，筛选意向客户</li>
                <li>客服：7x24小时自动回复客户咨询，解答常见问题，引导客户下单</li>
                <li>售后：自动跟进订单进度，及时通知客户，处理售后问题</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">全屋定制厂王总：三体机器人帮我们管理了所有客户，客户跟进及时率从60%提升到100%</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-4">
                <li>客户管理：三体机器人自动管理所有客户信息，实时跟进客户需求</li>
                <li>设计对接：自动对接设计软件，快速出图，自动报价</li>
                <li>订单管理：自动跟进订单进度，及时通知客户，处理异常情况</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">装修公司张总：三体机器人永不离职，客户流失率从30%降到0%</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-4">
                <li>客户沉淀：三体机器人永不离职，所有客户信息和沟通记录永久保存</li>
                <li>经验传承：经验可以复制给新的三体机器人，无需重新培养</li>
                <li>主动服务：三体机器人主动预测客户需求，提前准备方案</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">木门厂赵总：三体机器人帮我们打通了上下游，实现了异业联盟</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-4">
                <li>上下游对接：自动对接上下游企业，实现数据互通</li>
                <li>异业联盟：自动寻找合作伙伴，建立异业联盟</li>
                <li>跨行业协作：三体机器人可以在不同行业间协作，创造新价值</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}