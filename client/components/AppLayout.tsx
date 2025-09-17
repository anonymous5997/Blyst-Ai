import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, RefreshCw, Bot, Info, Mail, Menu } from "lucide-react";
import Particles from "@/components/Particles";
import MenuOverlay from "@/components/MenuOverlay";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar side="right" variant="floating" collapsible="icon" className="backdrop-blur bg-[#0a0a0a]/80 border-white/10">
        <SidebarHeader className="pt-2" />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to="/">
                    <SidebarMenuButton tooltip="Home" isActive={isActive("/")} className="hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]">
                      <Home />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/services">
                    <SidebarMenuButton tooltip="Services" isActive={isActive("/services")} className="hover:shadow-[0_0_18px_rgba(0,212,255,0.35)]">
                      <Bot />
                      <span>Services</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/about">
                    <SidebarMenuButton tooltip="About" isActive={isActive("/about")} className="hover:shadow-[0_0_18px_rgba(255,138,0,0.35)]">
                      <Info />
                      <span>About</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/contact">
                    <SidebarMenuButton tooltip="Contact" isActive={isActive("/contact")}>
                      <Mail />
                      <span>Contact</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <div className="px-2">
            <button
              className="flex h-8 w-full items-center justify-center rounded-md bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
              onClick={() => window.location.reload()}
              aria-label="Refresh"
            >
              <RefreshCw className="size-4" />
            </button>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-black">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.35),rgba(0,0,0,0)_40%),radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.2),rgba(0,0,0,0)_40%),radial-gradient(circle_at_70%_30%,rgba(255,138,0,0.14),rgba(0,0,0,0)_40%)]" />
        <Particles />
        <header className="relative z-10 flex items-center justify-center py-3">
          <p className="text-[10px] tracking-widest uppercase text-white/60">
            Blyst AI — Cognitive Interfaces for Business
          </p>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <MenuOverlay />
          </div>
        </header>
        <main className="relative z-10 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
