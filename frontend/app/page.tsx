'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield, ArrowRight, BarChart3, Brain, Zap, CheckCircle,
  Scale, Eye, GitCompare, FileText, Sparkles, ChevronRight,
  UploadCloud, Settings, Search, LayoutPanelLeft, ShieldAlert, ShieldCheck, Play,
  Database, Cpu, Activity, Lock, Globe, Server
} from 'lucide-react';

import { MetricsMarquee } from '@/components/landing/MetricsMarquee';

const features = [
  {
    icon: BarChart3,
    title: 'Fairness Metrics',
    description: 'Demographic parity, equalized odds, and equal opportunity computed instantly with clear severity scores.',
    color: '#58a6ff',
    stat: '12+ Core Metrics'
  },
  {
    icon: Brain,
    title: 'SHAP Explainability',
    description: "Understand why your model makes biased predictions. Peek 'under the hood' with feature attributions.",
    color: '#8b5cf6',
    stat: 'Deep Trace'
  },
  {
    icon: Zap,
    title: 'Bias Mitigation',
    description: 'Apply state-of-the-art algorithms to fix discriminatory patterns and see before/after improvements.',
    color: '#10b981',
    stat: '98% Success'
  },
  {
    icon: Scale,
    title: 'Legal Compliance',
    description: 'Automatically check against the "80% Rule" and other standard fairness thresholds.',
    color: '#f59e0b',
    stat: 'Global Standards'
  },
  {
    icon: Eye,
    title: 'Proxy Detection',
    description: 'Detect hidden features (like zip codes) that might be acting as proxies for protected classes.',
    color: '#ef4444',
    stat: 'Auto-Discovery'
  },
  {
    icon: FileText,
    title: 'Audit Reports',
    description: 'Generate comprehensive JSON or PDF reports for stakeholders and regulators with one click.',
    color: '#3b82f6',
    stat: 'PDF/JSON'
  },
];

const technicalSpecs = [
  { label: 'ML Engine', val: 'Scikit-Learn / Fairlearn' },
  { label: 'Intelligence', val: 'Gemini 2.0 Flash' },
  { label: 'Compute', val: 'Distributed FastAPI' },
  { label: 'Encryption', val: 'AES-256-GCM' },
  { label: 'Compliance', val: 'EU AI Act / NIST' },
  { label: 'Deployment', val: 'Vercel / Cloud Run' },
];

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050508] text-white overflow-x-hidden selection:bg-indigo-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/10 blur-[140px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
      </div>

      <MetricsMarquee />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 transition-all"
        style={{ background: 'rgba(5, 5, 8, 0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl shadow-indigo-500/20 group-hover:scale-110 transition-transform bg-gradient-to-br from-indigo-500 to-purple-600">
            <Shield size={20} color="white" />
          </div>
          <span className="font-black text-2xl tracking-tighter">FairnessAudit</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#features" className="hover:text-white transition-colors">Infrastructure</a>
            <a href="#compliance" className="hover:text-white transition-colors">Protocols</a>
            <a href="#docs" className="hover:text-white transition-colors">Datasets</a>
          </div>
          <Link href="/audit">
            <button className="btn-primary text-xs tracking-widest uppercase py-3 px-8 shadow-2xl shadow-indigo-500/40">
              Launch Audit Suite <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">System v2.0 Live</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                The Standard for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                  Ethical Intelligence.
                </span>
              </h1>
              
              <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-2xl font-medium">
                Advanced fairness auditing for mission-critical AI. Ingest datasets, evaluate 
                systemic bias, and mitigate discrimination with mathematical precision.
              </p>

              <div className="flex items-center gap-6 flex-wrap">
                <Link href="/audit">
                  <button className="h-16 px-10 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg shadow-[0_20px_50px_rgba(79,70,229,0.3)] transition-all flex items-center gap-3 group">
                    Initialize Audit 
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/audit?demo=true">
                  <button className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                    <Play size={20} fill="currentColor" /> Run Demo
                  </button>
                </Link>
              </div>

              <div className="mt-20 grid grid-cols-3 gap-10 border-t border-white/5 pt-12">
                 <div>
                    <div className="text-3xl font-black mb-1">100%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Transparent</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black mb-1">∞</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Scalability</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black mb-1">GDPR</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Compliant</div>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative perspective-2000">
            <motion.div
              initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 15, rotateX: 5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />
              <div className="glass-card p-2 rounded-3xl border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform-gpu hover:rotate-y-0 hover:rotate-x-0 transition-all duration-700 ease-out">
                <div className="bg-[#0a0b0f] rounded-2xl overflow-hidden aspect-[4/3] relative">
                  {/* Mock UI Elements */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                    <div className="ml-auto flex gap-4">
                      <div className="w-12 h-1 bg-white/10 rounded" />
                      <div className="w-8 h-1 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="p-8 pt-16">
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <div className="w-32 h-2 bg-indigo-500/20 rounded mb-3" />
                        <div className="w-56 h-8 bg-indigo-500/10 rounded" />
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                        <Activity size={24} className="text-indigo-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-24 bg-white/[0.02] rounded-2xl border border-white/5 p-4">
                           <div className="w-1/2 h-1.5 bg-white/10 rounded mb-2" />
                           <div className="w-3/4 h-4 bg-white/5 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="h-44 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl border border-indigo-500/10 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full px-10 flex gap-4 items-end h-20">
                          {[40, 70, 45, 90, 65, 80, 30, 55, 75, 50].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ delay: i * 0.05, duration: 1 }}
                              className="flex-1 bg-indigo-500/20 rounded-t-sm"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0b0f] to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-card px-6 py-5 rounded-2xl border-indigo-500/30 shadow-2xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em]">Status</div>
                    <div className="text-sm font-black text-white">98% FAIRNESS</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass-card px-6 py-5 rounded-2xl border-purple-500/30 shadow-2xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Brain size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em]">Logic</div>
                    <div className="text-sm font-black text-white">AI EXPLAINED</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technical Marquee 2 */}
      <div className="py-10 border-y border-white/5 bg-white/[0.01]">
         <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-between gap-10">
            {technicalSpecs.map(s => (
               <div key={s.label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{s.label}:</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{s.val}</span>
               </div>
            ))}
         </div>
      </div>

      {/* Features Grid */}
      <section id="features" className="py-40 px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-black mb-8 tracking-tighter leading-none">
              Powerful Core <br />
              Infrastructure.
            </h2>
            <p className="text-xl text-white/50">
              Our platform handles the complex mathematical heavy-lifting required 
              to ensure your machine learning models are ethical and secure.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40"><Database size={24}/></div>
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40"><Cpu size={24}/></div>
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40"><Globe size={24}/></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card p-12 hover:bg-white/[0.04] transition-all border-white/5 hover:border-white/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-1000" />
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110"
                style={{ background: `${f.color}10`, border: `1px solid ${f.color}30` }}>
                <f.icon size={30} style={{ color: f.color }} />
              </div>
              <h3 className="font-black text-2xl mb-4 leading-none">{f.title}</h3>
              <p className="text-white/50 mb-8 leading-relaxed font-medium">{f.description}</p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest" style={{ color: f.color }}>
                 <Sparkles size={12} /> {f.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dataset / Scientific Reference Section */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-5xl font-black mb-8 tracking-tighter">Scientific Accuracy & Data Integrity.</h2>
               <p className="text-xl text-white/50 mb-10 leading-relaxed font-medium">
                  FairnessAudit implements industry-standard algorithms validated by leading researchers. 
                  We support complex data ingestion pipelines and specialized fairness datasets for benchmarking.
               </p>
               
               <div className="space-y-6">
                  {[
                     { label: 'Ingest Real-world Datasets', icon: Database },
                     { label: 'Compute Parity Metrics', icon: BarChart3 },
                     { label: 'Verify Compliance Status', icon: ShieldCheck },
                  ].map(item => (
                     <div key={item.label} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                           <item.icon size={20} />
                        </div>
                        <span className="font-black text-sm uppercase tracking-widest">{item.label}</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full -z-10" />
               <div className="glass-card p-10 rounded-[40px] border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-6 mb-10">
                     <div className="w-16 h-16 rounded-3xl bg-[#0a0b0f] border border-white/10 flex items-center justify-center shadow-xl">
                        <Lock size={30} className="text-indigo-400" />
                     </div>
                     <div>
                        <h4 className="text-2xl font-black">Secure Ingestion</h4>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Vault Protocol Active</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-indigo-500" 
                        />
                     </div>
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '92%' }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="h-full bg-purple-500" 
                        />
                     </div>
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '78%' }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="h-full bg-emerald-500" 
                        />
                     </div>
                  </div>
                  <div className="mt-10 grid grid-cols-2 gap-4">
                     <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                        <div className="text-xs text-white/30 font-black uppercase mb-1">Rows Scanned</div>
                        <div className="text-xl font-black">1.4M+</div>
                     </div>
                     <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                        <div className="text-xs text-white/30 font-black uppercase mb-1">Latency</div>
                        <div className="text-xl font-black">12ms</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Final */}
      <section id="compliance" className="py-40 px-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[60px] p-20 text-center relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-900 border border-white/10 shadow-[0_50px_100px_-20px_rgba(79,70,229,0.5)]"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-30" />
           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 blur-[120px] rounded-full" />
           
           <div className="relative z-10">
              <ShieldCheck className="mx-auto mb-10 text-white/20" size={100} />
              <h2 className="text-6xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                Start Your Fair AI <br /> Journey Today.
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Link href="/audit">
                  <button className="h-20 px-16 rounded-[30px] bg-white text-indigo-900 font-black text-2xl hover:scale-105 transition-transform shadow-2xl">
                    Launch Audit Suite
                  </button>
                </Link>
                <div className="text-left">
                   <div className="text-white/60 font-black text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
                      <CheckCircle size={18} className="text-emerald-400" /> No Authentication Required
                   </div>
                   <div className="text-white/30 font-black text-[10px] uppercase tracking-[0.3em]">Open Source · GSC 2026</div>
                </div>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Technical Footer */}
      <footer className="py-32 px-10 border-t border-white/5 bg-[#030305]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
             <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center shadow-2xl shadow-indigo-500/40">
                      <Shield size={24} color="white" />
                   </div>
                   <span className="font-black text-3xl tracking-tighter">FairnessAudit</span>
                </div>
                <p className="text-xl text-white/30 max-w-md font-medium leading-relaxed">
                   The next-generation framework for algorithmic auditing and responsible AI governance.
                </p>
             </div>
             
             <div>
                <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-white/20 mb-10">Core Protocols</h4>
                <div className="space-y-6 text-sm font-black uppercase tracking-widest text-white/50">
                   <a href="#" className="block hover:text-white transition-colors">Evaluation</a>
                   <a href="#" className="block hover:text-white transition-colors">Mitigation</a>
                   <a href="#" className="block hover:text-white transition-colors">Explainability</a>
                   <a href="#" className="block hover:text-white transition-colors">Proxy Logic</a>
                </div>
             </div>
             
             <div>
                <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-white/20 mb-10">Network</h4>
                <div className="space-y-6 text-sm font-black uppercase tracking-widest text-white/50">
                   <a href="#" className="block hover:text-white transition-colors">GitHub</a>
                   <a href="#" className="block hover:text-white transition-colors">Documentation</a>
                   <a href="#" className="block hover:text-white transition-colors">API Status</a>
                   <a href="#" className="block hover:text-white transition-colors">GSC 2026</a>
                </div>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
             <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
                © 2026 FairnessAudit Engineering · Secure & Fair
             </div>
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30">
                   <Globe size={12} /> GLOBAL NODE 04
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                   <Server size={12} /> ALL SYSTEMS OPERATIONAL
                </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
