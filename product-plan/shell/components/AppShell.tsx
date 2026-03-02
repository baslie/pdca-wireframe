import MainNav from './MainNav'
import SiteFooter from './SiteFooter'

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface FooterLink {
  label: string
  href: string
}

interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavItem[]
  phone?: string
  email?: string
  address?: string
  footerDirections?: FooterLink[]
  footerCompanyLinks?: FooterLink[]
  onNavigate?: (href: string) => void
  onRequestCall?: () => void
}

export default function AppShell({
  children,
  navigationItems,
  phone,
  email,
  address,
  footerDirections,
  footerCompanyLinks,
  onNavigate,
  onRequestCall,
}: AppShellProps) {
  return (
    <div
      className="min-h-screen flex flex-col bg-white dark:bg-[#003154]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <MainNav
        navigationItems={navigationItems}
        phone={phone}
        onNavigate={onNavigate}
        onRequestCall={onRequestCall}
      />

      {/* Content area with top padding for sticky header */}
      <main className="flex-1 pt-16 lg:pt-[72px]">
        {children}
      </main>

      <SiteFooter
        phone={phone}
        email={email}
        address={address}
        directions={footerDirections}
        companyLinks={footerCompanyLinks}
        onNavigate={onNavigate}
      />
    </div>
  )
}
