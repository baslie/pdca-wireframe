import MainNav from "./MainNav";
import SiteFooter from "./SiteFooter";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MainNav />
      <main className="flex-1 pt-16 lg:pt-[72px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
