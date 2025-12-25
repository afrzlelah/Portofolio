import { Eye, EyeOff, Scissors, ArrowRight, Github, Mail } from "lucide-react";

const SocialLogin = () => {
  return (
    <>
      <div className="my-8 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-slate-100"></div>
        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
          Atau masuk dengan
        </span>
        <div className="h-[1px] flex-1 bg-slate-100"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors text-slate-600 font-medium text-sm">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Google
        </button>
        <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors text-slate-600 font-medium text-sm">
          <Github size={18} />
          GitHub
        </button>
      </div>
    </>
  );
};
export default SocialLogin;
