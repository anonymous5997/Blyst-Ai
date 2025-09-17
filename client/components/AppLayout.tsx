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
      <SidebarInset className="bg-black">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.35),rgba(0,0,0,0)_40%),radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.2),rgba(0,0,0,0)_40%),radial-gradient(circle_at_70%_30%,rgba(255,138,0,0.14),rgba(0,0,0,0)_40%)]" />
        <Particles />
        <header className="relative z-10 flex items-center justify-center py-3">
          <p className="text-[10px] tracking-widest uppercase text-white/60">
            Blyst AI — Cognitive Interfaces for Business
          </p>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <span className="hidden sm:block text-xs font-semibold tracking-wide text-white/80">MENU</span>
            <MenuOverlay />
          </div>
        </header>
        <main className="relative z-10 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
