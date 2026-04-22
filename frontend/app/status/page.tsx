'use client';

import { CheckCircle, Server, Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-indigo-500/30 flex flex-col">
      <header className="px-10 py-6 border-b border-white/5 flex items-center justify-between backdrop-blur-2xl bg-[#050508]/80 sticky top-0 z-50">
         <div className="flex items-center gap-4">
            <Link href="/" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
               <ArrowLeft size={18} />
            </Link>
            <div>
               <h1 className="font-black text-xl tracking-tight">System Status</h1>
               <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">All Systems Operational</p>
            </div>
         </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
         
         <div className="glass-card p-12 rounded-[40px] border border-emerald-500/20 bg-emerald-500/5 mb-16 flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 rounded-full bg-emerald-500/10 flex items-center justify-center relative">
               <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 border-dashed animate-[spin_10s_linear_infinite]" />
               <CheckCircle size={48} className="text-emerald-400" />
            </div>
            <div>
               <h2 className="text-4xl font-black mb-4">API Network Status</h2>
               <p className="text-xl text-white/50">All services are currently online and functioning perfectly.</p>
            </div>
         </div>

         <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-6">Service Health</h3>
         
         <div className="space-y-4">
            {[
               { name: 'Core API Gateway', latency: '12ms', uptime: '99.99%' },
               { name: 'Fairness Computation Engine', latency: '45ms', uptime: '99.99%' },
               { name: 'SHAP Explainer Service', latency: '120ms', uptime: '99.98%' },
               { name: 'Mitigation Pipeline', latency: '60ms', uptime: '99.99%' },
               { name: 'Report Generator', latency: '85ms', uptime: '100%' },
            ].map((service, i) => (
               <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={service.name} 
                  className="glass-card p-6 rounded-2xl border border-white/5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
               >
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                     <span className="font-bold">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-8">
                     <div className="text-right">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Latency</div>
                        <div className="font-mono text-sm text-indigo-300">{service.latency}</div>
                     </div>
                     <div className="text-right">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Uptime (30d)</div>
                        <div className="font-mono text-sm text-white">{service.uptime}</div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </main>
    </div>
  );
}
