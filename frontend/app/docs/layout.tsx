'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, FileText, Settings, Database, Activity, GitBranch, ArrowLeft, Shield } from 'lucide-react';

const sidebarLinks = [
  { href: '/docs', label: 'Overview', icon: BookOpen },
  { href: '/docs/evaluation', label: 'Evaluation Metrics', icon: Activity },
  { href: '/docs/mitigation', label: 'Bias Mitigation', icon: Settings },
  { href: '/docs/explainability', label: 'Explainability', icon: FileText },
  { href: '/docs/proxy-logic', label: 'Proxy Logic', icon: GitBranch },
  { href: '/audit', label: 'Run Audit', icon: Database },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col md:flex-row selection:bg-indigo-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[140px] animate-pulse" />
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-72 border-r border-white/5 bg-[#0a0b0f]/80 backdrop-blur-2xl md:min-h-screen flex flex-col">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/20 group hover:scale-105 transition-transform">
             <Shield size={20} color="white" />
          </Link>
          <div>
            <h2 className="font-black text-lg tracking-tight">FairnessAudit</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Documentation</p>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <link.icon size={18} className={isActive ? 'text-indigo-400' : 'opacity-60'} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
           <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">
             <ArrowLeft size={14} /> Back to Home
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden relative">
         <div className="max-w-4xl mx-auto px-8 py-16 md:py-24">
            {children}
         </div>
      </main>
    </div>
  );
}
