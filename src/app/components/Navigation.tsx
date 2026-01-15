import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: 'home' | 'cad' | 'home-mobile' | 'cad-mobile' | 'cad-simulator' | 'window' | 'window-mobile' | 'xrf' | 'xrf-mobile' | 'll' | 'll-mobile';
  onNavigate: (page: 'home' | 'cad' | 'home-mobile' | 'cad-mobile' | 'cad-simulator' | 'window' | 'window-mobile' | 'xrf' | 'xrf-mobile' | 'll' | 'll-mobile') => void;
}

// 离卦符号 SVG 组件
function LiGuaIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 上横线 - 完整 */}
      <rect x="8" y="10" width="24" height="4" rx="2" fill="#DC2626" />
      
      {/* 中横线 - 断开（离卦特征） */}
      <rect x="8" y="18" width="10" height="4" rx="2" fill="#DC2626" />
      <rect x="22" y="18" width="10" height="4" rx="2" fill="#DC2626" />
      
      {/* 下横线 - 完整 */}
      <rect x="8" y="26" width="24" height="4" rx="2" fill="#DC2626" />
    </svg>
  );
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'window' as const, label: '门窗行业 三体人' },
    { id: 'home' as const, label: '家具行业 三体人' },
    { id: 'cad' as const, label: '装修行业 三体人', badge: '新品' },
    { id: 'xrf' as const, label: '小渲风 三体人' },
    { id: 'll' as const, label: '老板良 三体人' }
  ];

  // 判断当前是否在home或cad页面（非mobile版本）
  const isHomePage = currentPage === 'home' || currentPage === 'home-mobile';
  const isCadPage = currentPage === 'cad' || currentPage === 'cad-mobile' || currentPage === 'cad-simulator';
  const isWindowPage = currentPage === 'window' || currentPage === 'window-mobile';
  const isXRFPage = currentPage === 'xrf' || currentPage === 'xrf-mobile';
  const isLLPage = currentPage === 'll' || currentPage === 'll-mobile';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="https://www.santi.ren" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span>三体人Santi.Ren</span>
            <LiGuaIcon />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all ${
                  (item.id === 'home' && isHomePage) || (item.id === 'cad' && isCadPage) || (item.id === 'window' && isWindowPage) || (item.id === 'xrf' && isXRFPage) || (item.id === 'll' && isLLPage)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                {((item.id === 'home' && isHomePage) || (item.id === 'cad' && isCadPage) || (item.id === 'window' && isWindowPage) || (item.id === 'xrf' && isXRFPage) || (item.id === 'll' && isLLPage)) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between ${
                  (item.id === 'home' && isHomePage) || (item.id === 'cad' && isCadPage) || (item.id === 'window' && isWindowPage) || (item.id === 'xrf' && isXRFPage) || (item.id === 'll' && isLLPage)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}