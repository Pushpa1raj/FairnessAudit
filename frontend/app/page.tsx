'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Shield, ArrowRight, BarChart3, Brain, Zap,
  Scale, Eye, FileText, ChevronRight,
  UploadCloud, GitCompare, ShieldCheck,
  Activity, Globe, Server
} from 'lucide-react';

import { MetricsMarquee } from '@/components/landing/MetricsMarquee';

/* ─── animation presets ─── */
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.08 },
});

/* ─── data ─── */
const capabilities = [
  {
    icon: BarChart3,
    title: 'Demographic Parity Analysis',
    description: 'Measures outcome distribution across protected groups to quantify selection rate disparities.',
  },
  {
    icon: Scale,
    title: 'Equalized Odds Evaluation',
    description: 'Compares true positive and false positive rates across demographic groups.',
  },
  {
    icon: Brain,
    title: 'SHAP Feature Attribution',
    description: 'Identifies which input features drive model predictions using Shapley values.',
  },
  {
    icon: Eye,
    title: 'Proxy Variable Detection',
    description: 'Detects features acting as proxies for protected attributes through correlation analysis.',
  },
  {
    icon: Zap,
    title: 'Bias Mitigation',
    description: 'Applies pre-processing and in-processing techniques from Fairlearn to reduce disparities.',
  },
  {
    icon: FileText,
    title: 'Compliance Reporting',
    description: 'Generates structured audit reports mapped to the EU AI Act and NIST AI RMF.',
  },
];

const workflowSteps = [
  { num: '01', label: 'Dataset', desc: 'Upload CSV or select a benchmark dataset' },
  { num: '02', label: 'Mapping', desc: 'Assign target, features, and sensitive attributes' },
  { num: '03', label: 'Evaluation', desc: 'Compute fairness metrics across groups' },
  { num: '04', label: 'Explainability', desc: 'SHAP analysis of feature contributions' },
  { num: '05', label: 'Mitigation', desc: 'Apply fairness-aware correction algorithms' },
  { num: '06', label: 'Report', desc: 'Export findings as PDF or JSON' },
];

const productScreenshots = [
  {
    src: '/3.1.jpg',
    title: 'Fairness Analysis',
    desc: 'Overall bias score with per-attribute breakdown and impact estimation.',
  },
  {
    src: '/4.jpg',
    title: 'SHAP Explainability',
    desc: 'Feature importance and detailed attribution values for model transparency.',
  },
  {
    src: '/5.jpg',
    title: 'Bias Mitigation',
    desc: 'Side-by-side comparison of pre-processing and in-processing techniques.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] overflow-x-hidden selection:bg-indigo-500/30">

      {/* ── Subtle background ── */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-indigo-900/[0.07] blur-[120px]" />
      </div>

      <MetricsMarquee />

      {/* ══════════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 h-16"
        style={{ background: 'rgba(13,17,23,0.85)', borderBottom: '1px solid rgba(48,54,61,0.6)', backdropFilter: 'blur(12px)' }}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1f6feb] group-hover:scale-105 transition-transform">
            <Shield size={16} color="white" />
          </div>
          <span className="font-semibold text-[15px] text-white tracking-tight">FairnessAudit</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-[13px] text-[#8b949e]">
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#methodology" className="hover:text-white transition-colors">Methodology</a>
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <a href="https://github.com/OneDev-Harsh/FairnessAudit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <Link href="/audit">
            <button className="btn-primary text-[13px] py-2 px-5">
              Run Audit <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* ── Text ── */}
          <motion.div {...fadeUp} className="max-w-3xl mb-16">
            <p className="text-[13px] font-medium text-[#58a6ff] mb-5 tracking-wide">
              Google Solution Challenge 2026
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-tight mb-6">
              Auditing Machine Learning<br />
              Systems for Fairness
            </h1>
            <p className="text-lg text-[#8b949e] leading-relaxed max-w-2xl mb-10">
              Quantify bias across sensitive attributes, trace predictions through SHAP explainability, 
              and apply fairness-aware mitigation — with structured compliance reporting.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/audit">
                <button className="h-11 px-6 rounded-lg bg-[#1f6feb] hover:bg-[#388bfd] text-white font-medium text-[14px] transition-colors flex items-center gap-2">
                  Run Audit <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/audit?demo=true">
                <button className="h-11 px-6 rounded-lg bg-transparent border border-[#30363d] hover:border-[#8b949e] text-[#c9d1d9] font-medium text-[14px] transition-colors flex items-center gap-2">
                  Try Demo
                </button>
              </Link>
            </div>
          </motion.div>

          {/* ── Hero Screenshot ── */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="relative rounded-xl overflow-hidden border border-[#30363d] shadow-2xl shadow-black/40"
          >
            <Image
              src="/1.jpg"
              alt="FairnessAudit — Dataset selection interface showing CSV upload and benchmark datasets"
              width={1400}
              height={800}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ── Tech strip ── */}
      <div className="border-y border-[#21262d] bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap justify-between gap-x-10 gap-y-3">
          {[
            { k: 'Framework', v: 'Fairlearn + Scikit-Learn' },
            { k: 'Explainability', v: 'SHAP' },
            { k: 'Backend', v: 'FastAPI' },
            { k: 'Intelligence', v: 'Gemini 2.0 Flash' },
            { k: 'Compliance', v: 'EU AI Act · NIST' },
          ].map(s => (
            <div key={s.k} className="flex items-center gap-2 text-[11px]">
              <span className="text-[#484f58] font-medium uppercase tracking-wider">{s.k}</span>
              <span className="text-[#8b949e] font-medium">{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SYSTEM WORKFLOW
      ══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
              How It Works
            </h2>
            <p className="text-[#8b949e] max-w-xl">
              A six-stage pipeline from raw data to a compliance-ready fairness report.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.num}
                {...stagger(i)}
                className="p-5 rounded-lg border border-[#21262d] bg-[#0d1117] hover:border-[#30363d] transition-colors"
              >
                <div className="text-[11px] font-mono text-[#58a6ff] mb-3">{step.num}</div>
                <div className="text-[14px] font-semibold text-white mb-1.5">{step.label}</div>
                <div className="text-[12px] text-[#8b949e] leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SYSTEM CAPABILITIES
      ══════════════════════════════════════════════ */}
      <section id="capabilities" className="py-24 lg:py-32 border-t border-[#21262d]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
              System Capabilities
            </h2>
            <p className="text-[#8b949e] max-w-xl">
              Core analysis modules for evaluating and improving model fairness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                {...stagger(i)}
                className="p-6 rounded-lg border border-[#21262d] bg-[#0d1117] hover:border-[#30363d] transition-colors group"
              >
                <c.icon size={20} className="text-[#58a6ff] mb-4 group-hover:text-[#388bfd] transition-colors" />
                <h3 className="text-[15px] font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-[13px] text-[#8b949e] leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRODUCT SCREENSHOTS
      ══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t border-[#21262d]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
              Inside the Platform
            </h2>
            <p className="text-[#8b949e] max-w-xl">
              Real interface output from a fairness audit on the UCI Adult Income dataset.
            </p>
          </motion.div>

          <div className="space-y-16">
            {productScreenshots.map((shot, i) => (
              <motion.div key={shot.src} {...stagger(i)} className="group">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-[11px] font-mono text-[#484f58]">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-white">{shot.title}</h3>
                    <p className="text-[13px] text-[#8b949e]">{shot.desc}</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-[#21262d] group-hover:border-[#30363d] transition-colors shadow-lg shadow-black/20">
                  <Image
                    src={shot.src}
                    alt={`${shot.title} — ${shot.desc}`}
                    width={1400}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          METHODOLOGY & TRUST
      ══════════════════════════════════════════════ */}
      <section id="methodology" className="py-24 lg:py-32 border-t border-[#21262d]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
              Methodology
            </h2>
            <p className="text-[#8b949e] max-w-xl">
              Built on established research in algorithmic fairness and model interpretability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Fairlearn',
                role: 'Bias Detection & Mitigation',
                desc: 'Open-source toolkit from Microsoft Research for assessing and improving fairness of AI systems. Provides metrics (Demographic Parity, Equalized Odds) and mitigation algorithms (ExponentiatedGradient, ThresholdOptimizer).',
                link: 'https://fairlearn.org',
              },
              {
                title: 'SHAP',
                role: 'Model Explainability',
                desc: 'Computes Shapley values to explain individual predictions. Attributes each feature\'s contribution to the model output, enabling auditors to identify which variables drive biased outcomes.',
                link: 'https://shap.readthedocs.io',
              },
              {
                title: 'Statistical Fairness',
                role: 'Evaluation Framework',
                desc: 'Implements group fairness metrics grounded in the "80% Rule" (disparate impact ratio), equal opportunity difference, and equalized odds difference — mapped to EU AI Act and NIST AI Risk Management Framework.',
                link: null,
              },
            ].map((m, i) => (
              <motion.div
                key={m.title}
                {...stagger(i)}
                className="p-6 rounded-lg border border-[#21262d] bg-[#0d1117] hover:border-[#30363d] transition-colors"
              >
                <div className="text-[11px] font-medium text-[#58a6ff] uppercase tracking-wider mb-1">{m.role}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{m.title}</h3>
                <p className="text-[13px] text-[#8b949e] leading-relaxed mb-4">{m.desc}</p>
                {m.link && (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-[#58a6ff] hover:underline inline-flex items-center gap-1"
                  >
                    Documentation <ChevronRight size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ADDITIONAL SCREENSHOTS
      ══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t border-[#21262d]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
              More from the Audit Pipeline
            </h2>
            <p className="text-[#8b949e] max-w-xl">
              Column mapping, scenario simulation, and reporting interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/2.jpg', title: 'Column Mapping', desc: 'Assign target columns, features, and sensitive attributes for analysis.' },
              { src: '/3.3.jpg', title: 'Scenario Simulator', desc: 'Explore fairness-accuracy tradeoffs by adjusting the decision threshold.' },
              { src: '/0.1.jpg', title: 'AI Consultant', desc: 'Context-aware assistant that explains audit findings and mitigation strategies.' },
              { src: '/6.1.jpg', title: 'Audit Report', desc: 'Executive summary with recommendations, exportable as PDF.' },
            ].map((shot, i) => (
              <motion.div key={shot.src} {...stagger(i)} className="group">
                <div className="rounded-lg overflow-hidden border border-[#21262d] group-hover:border-[#30363d] transition-colors shadow-lg shadow-black/20 mb-3">
                  <Image
                    src={shot.src}
                    alt={`${shot.title} — ${shot.desc}`}
                    width={1400}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[14px] font-semibold text-white">{shot.title}</h3>
                <p className="text-[12px] text-[#8b949e]">{shot.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t border-[#21262d]">
        <motion.div {...fadeUp} className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
            Evaluate your model
          </h2>
          <p className="text-[#8b949e] max-w-lg mx-auto mb-8">
            Upload a dataset or run the built-in demo to see a full fairness audit in action. 
            No account required.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/audit">
              <button className="h-11 px-6 rounded-lg bg-[#1f6feb] hover:bg-[#388bfd] text-white font-medium text-[14px] transition-colors flex items-center gap-2">
                Run an Audit <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/docs">
              <button className="h-11 px-6 rounded-lg bg-transparent border border-[#30363d] hover:border-[#8b949e] text-[#c9d1d9] font-medium text-[14px] transition-colors">
                Explore Documentation
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="border-t border-[#21262d] bg-[#010409]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#1f6feb] flex items-center justify-center">
                  <Shield size={16} color="white" />
                </div>
                <span className="font-semibold text-white text-[15px] tracking-tight">FairnessAudit</span>
              </div>
              <p className="text-[13px] text-[#484f58] max-w-sm leading-relaxed">
                An open-source platform for auditing machine learning models against fairness criteria. 
                Built for the Google Solution Challenge 2026.
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#484f58] mb-4">Platform</h4>
              <div className="space-y-2.5 text-[13px] text-[#8b949e]">
                <Link href="/audit" className="block hover:text-white transition-colors">Run Audit</Link>
                <Link href="/docs" className="block hover:text-white transition-colors">Documentation</Link>
                <Link href="/status" className="block hover:text-white transition-colors">System Status</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#484f58] mb-4">Links</h4>
              <div className="space-y-2.5 text-[13px] text-[#8b949e]">
                <a href="https://github.com/OneDev-Harsh/FairnessAudit" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">GitHub</a>
                <a href="https://fairlearn.org" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Fairlearn</a>
                <a href="https://shap.readthedocs.io" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">SHAP</a>
                <a href="https://developers.google.com/community/gdsc-solution-challenge" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">GSC 2026</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#21262d] gap-4">
            <div className="text-[11px] text-[#484f58]">
              © 2026 FairnessAudit · Open Source
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5 text-[11px] text-[#484f58]">
                <Globe size={11} /> v2.0
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#3fb950]">
                <Server size={11} /> All systems operational
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
