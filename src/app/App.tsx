import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { PainPoints } from "./components/PainPoints";
import { AITools } from "./components/AITools";
import { PricingSection } from "./components/PricingSection";
import { BusinessPlan } from "./components/BusinessPlan";
import { CTASection } from "./components/CTASection";
import { CADPage } from "./components/CADPage";
import { MobilePage } from "./components/MobilePage";
import { CADMobilePage } from "./components/CADMobilePage";
import { WindowHeroSection } from "./components/WindowHeroSection";
import { WindowPainPoints } from "./components/WindowPainPoints";
import { WindowAITools } from "./components/WindowAITools";
import { WindowPricingSection } from "./components/WindowPricingSection";
import { WindowBusinessPlan } from "./components/WindowBusinessPlan";
import { WindowCTASection } from "./components/WindowCTASection";
import { WindowMobilePage } from "./components/WindowMobilePage";
import { XRFHeroSection } from "./components/XRFHeroSection";
import { XRFPainPoints } from "./components/XRFPainPoints";
import { XRFAITools } from "./components/XRFAITools";
import { XRFPricingSection } from "./components/XRFPricingSection";
import { XRFContactSection } from "./components/XRFContactSection";
import { XRFMobilePage } from "./components/XRFMobilePage";
import { LLHeroSection } from "./components/LLHeroSection";
import { LLPainPoints } from "./components/LLPainPoints";
import { LLAITools } from "./components/LLAITools";
import { LLApplications } from "./components/LLApplications";
import { LLCoreConcept } from "./components/LLCoreConcept";
import { LLFeatures } from "./components/LLFeatures";
import { SFEHeroSection } from "./components/SFEHeroSection";
import { SFEPainPoints } from "./components/SFEPainPoints";
import { SFEAITools } from "./components/SFEAITools";
import { SFEPricingSection } from "./components/SFEPricingSection";
import { Smartphone } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "cad"
    | "home-mobile"
    | "cad-mobile"
    | "cad-simulator"
    | "window"
    | "window-mobile"
    | "xrf"
    | "xrf-mobile"
    | "ll"
    | "ll-mobile"
    | "sfe"
    | "sfe-mobile"
  >("home");

  // 更新页面标题
  useEffect(() => {
    document.title = "三体人 行业应用-限时活动";
  }, []);

  // 判断是否是手机页面
  const isMobilePage =
    currentPage === "home-mobile" ||
    currentPage === "cad-mobile" ||
    currentPage === "cad-simulator" ||
    currentPage === "window-mobile" ||
    currentPage === "xrf-mobile" ||
    currentPage === "ll-mobile" ||
    currentPage === "sfe-mobile";

  return (
    <div
      className={`min-h-screen ${
        isMobilePage ? "bg-gray-900" : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === "home" ? (
        <>
          {/* 手机图标按钮 - 固定在右上角 */}
          <button
            onClick={() => setCurrentPage("home-mobile")}
            className="fixed top-20 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            title="手机展示页"
          >
            <Smartphone className="w-6 h-6" />
          </button>

          <HeroSection />
          <PainPoints />
          <AITools />
          <PricingSection />
          <BusinessPlan />
          <CTASection />
        </>
      ) : currentPage === "cad" ? (
        <CADPage onShowMobile={() => setCurrentPage("cad-mobile")} />
      ) : currentPage === "window" ? (
        <>
          {/* 手机图标按钮 - 固定在右上角 */}
          <button
            onClick={() => setCurrentPage("window-mobile")}
            className="fixed top-20 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            title="手机展示页"
          >
            <Smartphone className="w-6 h-6" />
          </button>

          <WindowHeroSection />
          <WindowPainPoints />
          <WindowAITools />
          <WindowPricingSection />
          <WindowBusinessPlan />
          <WindowCTASection />
        </>
      ) : currentPage === "xrf" ? (
        <>
          {/* 手机图标按钮 - 固定在右上角 */}
          <button
            onClick={() => setCurrentPage("xrf-mobile")}
            className="fixed top-20 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            title="手机展示页"
          >
            <Smartphone className="w-6 h-6" />
          </button>

          <XRFHeroSection />
          <XRFPainPoints />
          <XRFAITools />
          <XRFPricingSection />
          <XRFContactSection />
        </>
      ) : currentPage === "ll" ? (
        <>
          {/* 手机图标按钮 - 固定在右上角 */}
          <button
            onClick={() => setCurrentPage("ll-mobile")}
            className="fixed top-20 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            title="手机展示页"
          >
            <Smartphone className="w-6 h-6" />
          </button>

          <LLHeroSection />
          <LLPainPoints />
          <LLAITools />
          <LLFeatures />
          <LLApplications />
          <LLCoreConcept />
        </>
      ) : currentPage === "sfe" ? (
        <>
          {/* 手机图标按钮 - 固定在右上角 */}
          <button
            onClick={() => setCurrentPage("sfe-mobile")}
            className="fixed top-20 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            title="手机展示页"
          >
            <Smartphone className="w-6 h-6" />
          </button>

          <SFEHeroSection />
          <SFEPainPoints />
          <SFEAITools />
          <SFEPricingSection />
          <BusinessPlan />
          <CTASection />
        </>
      ) : isMobilePage ? (
        /* 手机模拟器容器 */
        <div className="py-8 px-4 flex justify-center items-start min-h-screen">
          <div className="relative">
            {/* 手机外壳 */}
            <div className="relative bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
              {/* 手机屏幕边框 */}
              <div className="bg-black rounded-[2.5rem] p-2">
                {/* 刘海 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-10"></div>

                {/* 屏幕内容 */}
                <div className="relative bg-white rounded-[2rem] w-[375px] h-[812px] overflow-y-auto overflow-x-hidden">
                  {currentPage === "home-mobile" ? (
                    <MobilePage />
                  ) : currentPage === "cad-mobile" ? (
                    <CADMobilePage />
                  ) : currentPage === "window-mobile" ? (
                    <WindowMobilePage />
                  ) : currentPage === "xrf-mobile" ? (
                    <XRFMobilePage />
                  ) : currentPage === "ll-mobile" ? (
                    <div className="p-4 bg-white min-h-screen">
                      <h1 className="text-2xl font-bold mb-4 text-gray-800">
                        老板良三体人
                      </h1>
                      <p className="text-gray-600 mb-6">移动端页面开发中...</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-600">
                          请使用桌面端访问完整功能
                        </p>
                      </div>
                    </div>
                  ) : currentPage === "sfe-mobile" ? (
                    <div className="p-4 bg-white min-h-screen">
                      <h1 className="text-2xl font-bold mb-4 text-gray-800">
                        营销获客三体人
                      </h1>
                      <p className="text-gray-600 mb-6">移动端页面开发中...</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-600">
                          请使用桌面端访问完整功能
                        </p>
                      </div>
                    </div>
                  ) : (
                    <CADPage />
                  )}
                </div>
              </div>

              {/* 电源键 */}
              <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-700 rounded-l"></div>
              {/* 音量键 */}
              <div className="absolute -left-1 top-28 w-1 h-12 bg-gray-700 rounded-r"></div>
              <div className="absolute -left-1 top-44 w-1 h-12 bg-gray-700 rounded-r"></div>
            </div>

            {/* 提示文字 */}
            <div className="text-center mt-6 text-gray-400 text-sm">
              <p>截图后可分享到朋友圈</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
