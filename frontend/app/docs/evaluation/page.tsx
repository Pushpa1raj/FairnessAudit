import { Activity, CheckCircle, AlertTriangle } from 'lucide-react';

export default function EvaluationPage() {
  return (
    <div className="fade-in">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
        <Activity size={14} className="text-indigo-400" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Core Protocol</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Evaluation Metrics</h1>
      <p className="text-xl text-white/50 leading-relaxed font-medium mb-12">
        The Evaluation Protocol forms the mathematical foundation of FairnessAudit. We calculate exact disparity metrics 
        between protected and unprotected groups in your dataset.
      </p>

      <div className="space-y-12">
        <section className="glass-card p-8 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
             <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">1</span>
             Demographic Parity
          </h2>
          <p className="text-white/60 mb-6">
            Measures whether the positive prediction rate is independent of the sensitive attribute. 
            A perfectly fair model under this metric will predict the positive outcome at the exact same rate for all groups.
          </p>
          <div className="p-6 bg-[#050508] rounded-xl border border-white/5 font-mono text-sm text-indigo-300">
             P(Ŷ = 1 | A = 0) = P(Ŷ = 1 | A = 1)
          </div>
          <div className="mt-6 flex items-start gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
             <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
             <p className="text-sm text-emerald-400/80">
               <strong>When to use:</strong> Best for situations where historical bias in the training data is assumed, and you want to ensure equal representation of outcomes (e.g., hiring rates).
             </p>
          </div>
        </section>

        <section className="glass-card p-8 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
             <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">2</span>
             Equalized Odds
          </h2>
          <p className="text-white/60 mb-6">
            Requires that both the true positive rate (TPR) and false positive rate (FPR) are equal across all groups. 
            This ensures that the model is equally accurate for both the privileged and unprivileged classes.
          </p>
          <div className="p-6 bg-[#050508] rounded-xl border border-white/5 font-mono text-sm text-purple-300">
             P(Ŷ = 1 | Y = y, A = 0) = P(Ŷ = 1 | Y = y, A = 1), y ∈ {'{0, 1}'}
          </div>
          <div className="mt-6 flex items-start gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
             <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
             <p className="text-sm text-amber-500/80">
               <strong>Note:</strong> Equalized Odds is harder to satisfy than Demographic Parity but often preferred when predicting an outcome tied to a ground truth (e.g., criminal recidivism).
             </p>
          </div>
        </section>
      </div>
    </div>
  );
}
