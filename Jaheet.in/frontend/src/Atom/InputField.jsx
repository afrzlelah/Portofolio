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
export default InputField;
