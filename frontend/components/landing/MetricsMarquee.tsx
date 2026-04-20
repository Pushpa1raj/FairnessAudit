'use client';

import { motion } from 'framer-motion';

const ITEMS = [
  'DEMOGRAPHIC PARITY', 'EQUALIZED ODDS', 'EQUAL OPPORTUNITY', 
  'STATISTICAL PARITY', 'SHAP VALUES', 'FEATURE ATTRIBUTION',
  'BIAS MITIGATION', 'DISPARATE IMPACT', '80% RULE',
  'ADULT INCOME', 'COMPAS RECIDIVISM', 'GERMAN CREDIT',
  'PROXY DETECTION', 'COVARIATE SHIFT', 'LABEL BIAS',
  'MODEL EXPLAINABILITY', 'COMPLIANCE AUDIT', 'NIST FRAMEWORK',
  'EU AI ACT', 'ISO 27001', 'SOC2 TYPE II', 'FAIRLEARN',
  'SCIKIT-LEARN', 'GEMINI 2.0 FLASH', 'FASTAPI', 'NEXT.JS'
];

export function MetricsMarquee() {
  return (
    <div className="relative flex overflow-x-hidden py-4 border-y border-white/5 bg-white/[0.02]">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span 
            key={i} 
            className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-indigo-400 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />
    </div>
  );
}
