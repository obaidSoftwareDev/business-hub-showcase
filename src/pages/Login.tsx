import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen bg-background text-foreground grid lg:grid-cols-2">
      <div className="relative bg-surface-ink text-background hidden lg:flex flex-col p-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.07]" aria-hidden />
        <Link to="/" className="relative inline-flex items-center gap-2 text-sm">
          <span className="relative flex items-center justify-center w-7 h-7 border border-background/80">
            <span className="absolute inset-[3px] bg-background" />
          </span>
          <span className="font-display font-semibold tracking-tight">BusniessHub</span>
        </Link>
        <div className="relative mt-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-background/60">Operator workspace</p>
          <h1 className="h-display mt-4 max-w-xl">One workspace. The whole operating loop.</h1>
          <p className="mt-6 text-sm text-background/70 max-w-md leading-relaxed">Sign in to your workspace to run inventory, sales, purchases, payments and reporting — all from one place.</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="w-full max-w-md">
          <Link to="/" className="text-xs text-muted-foreground inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Back to BusniessHub</Link>
          <div className="num-tag mt-8">Sign in</div>
          <h2 className="h-section mt-2">Open your workspace.</h2>
          <p className="text-sm text-muted-foreground mt-3">Enter your credentials to continue.</p>
          <form className="mt-8 grid gap-5" onSubmit={(e) => e.preventDefault()}>
            <label className="grid gap-2">
              <span className="num-tag">Email</span>
              <input type="email" placeholder="you@business.com" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm" />
            </label>
            <label className="grid gap-2">
              <span className="num-tag">Password</span>
              <input type="password" placeholder="••••••••" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm" />
            </label>
            <Link to="/app" className="btn-sheen mt-4 inline-flex items-center justify-center gap-1.5 bg-foreground text-background text-sm py-3 rounded-sm">
              Sign in <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="text-xs text-muted-foreground text-center hover:text-foreground transition-colors">Need a workspace? Talk to us →</Link>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
