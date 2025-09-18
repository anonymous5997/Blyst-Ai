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
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarInset className="bg-black">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.35),rgba(0,0,0,0)_40%),radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.2),rgba(0,0,0,0)_40%),radial-gradient(circle_at_70%_30%,rgba(255,138,0,0.14),rgba(0,0,0,0)_40%)]" />
        <Particles />
        <div className="app-content relative z-10">
          <header className="relative flex items-center justify-center py-3">
            <p className="text-[10px] tracking-widest uppercase text-white/60">
              Blyst AI — Cognitive Interfaces for Business
            </p>
          </header>
          <main className="p-4 md:p-8">{children}</main>
          <Footer />
        </div>
        <div className="fixed right-4 top-4 z-[200] flex items-center gap-2">
          <span className="text-xs font-semibold tracking-wide text-white/90">
            MENU
          </span>
          <MenuOverlay />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
