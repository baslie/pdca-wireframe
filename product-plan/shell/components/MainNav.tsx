import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface MainNavProps {
  navigationItems: NavItem[]
  phone?: string
  onNavigate?: (href: string) => void
  onRequestCall?: () => void
}

export default function MainNav({
  navigationItems,
  phone = '+7 (XXX) XXX-XX-XX',
  onNavigate,
  onRequestCall,
}: MainNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const handleNav = (href: string) => {
    onNavigate?.(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#003154]/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
            : 'bg-white dark:bg-[#003154]'
        }`}
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-[72px] items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNav('/')}
              className="flex items-center gap-2.5 shrink-0"
            >
              {/* PDCA Logo mark - red square with diagonal lines */}
              <div className="w-9 h-9 bg-[#e84249] rounded-sm flex items-center justify-center relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
                  <line x1="4" y1="20" x2="20" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="12" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                  <line x1="12" y1="20" x2="20" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight text-black dark:text-white">
                  PDCA
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] text-black/60 dark:text-white/60 uppercase">
                  consulting
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors ${
                    item.isActive
                      ? 'text-[#e84249]'
                      : 'text-black/80 dark:text-white/80 hover:text-[#e84249]'
                  }`}
                >
                  {item.label}
                  {item.isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#e84249] rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Contact Block */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-1.5 text-sm font-medium text-black dark:text-white hover:text-[#e84249] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                {phone}
              </a>
              <button
                onClick={onRequestCall}
                className="px-4 py-2 text-[13px] font-semibold text-[#e84249] border border-[#e84249] rounded-md hover:bg-[#e84249] hover:text-white transition-colors"
              >
                Заказать звонок
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -mr-2 text-black dark:text-white"
              aria-label="Открыть меню"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white dark:bg-[#003154] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-16">
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 bg-[#e84249] rounded-sm flex items-center justify-center overflow-hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="20" x2="20" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="12" x2="12" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                <line x1="12" y1="20" x2="20" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold tracking-tight text-black dark:text-white">PDCA</span>
              <span className="text-[10px] font-medium tracking-[0.15em] text-black/60 dark:text-white/60 uppercase">consulting</span>
            </div>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-black dark:text-white"
            aria-label="Закрыть меню"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col justify-center items-start px-8 sm:px-12 h-[calc(100vh-64px-120px)]">
          {navigationItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`text-2xl sm:text-3xl font-medium py-3 transition-colors ${
                item.isActive
                  ? 'text-[#e84249]'
                  : 'text-black dark:text-white hover:text-[#e84249]'
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-12 pb-8 space-y-4">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-lg font-medium text-black dark:text-white"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
            {phone}
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              onRequestCall?.()
            }}
            className="w-full py-3 text-base font-semibold text-white bg-[#e84249] rounded-md hover:bg-[#d63a41] transition-colors"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </>
  )
}
