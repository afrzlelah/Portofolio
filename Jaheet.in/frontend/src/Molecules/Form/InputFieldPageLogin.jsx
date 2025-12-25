import { useState } from "react";
import { Eye, EyeOff, Scissors, ArrowRight, Github, Mail } from "lucide-react";

const InputFieldPageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulasi loading
    setTimeout(() => setIsLoading(false), 1500);
  };

  const InputField = ({
    label,
    type,
    placeholder,
    value,
    onChange,
    icon: Icon,
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700 ml-1">{label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
          {Icon && <Icon size={18} />}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 placeholder:text-slate-400"
        />
      </div>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Email"
          type="email"
          placeholder="nama@email.com"
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-medium text-slate-700">
              Kata Sandi
            </label>
            <button
              type="button"
              className="text-xs text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              Lupa Sandi?
            </button>
          </div>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
              <Scissors size={18} className="rotate-90" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          disabled={isLoading}
          className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
            isLoading
              ? "bg-secondary cursor-not-allowed"
              : "bg-primary hover:bg-indigo-600 cursor-pointer"
          }`}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin cursor-pointer" />
          ) : (
            <>
              Masuk Sekarang
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
    </>
  );
};

export default InputFieldPageLogin;
