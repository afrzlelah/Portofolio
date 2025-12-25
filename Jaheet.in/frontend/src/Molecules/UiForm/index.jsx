import { Scissors } from "lucide-react";

const UiForm = ({ title, description, footerWordsUiForm }) => {
  return (
    <>
      <div className="hidden md:flex flex-col justify-between p-12 bg-linear-to-br from-[#818cf8] to-[#6366f1] text-white relative overflow-hidden">
        {/* Elemen Dekoratif SVG (Pola Jahitan) */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <path
              d="M10 50 L90 50 M50 10 L50 90"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
              <Scissors size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Jaheet.in</span>
          </div>
          <h2 className="text-4xl font-extrabold leading-tight mb-4">
            {title}
          </h2>
          <p className="text-indigo-100 text-lg font-light max-w-xs">
            {description}
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex -space-x-3 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-indigo-400 bg-indigo-300 flex items-center justify-center text-xs font-bold"
              >
                U{i}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-indigo-400 bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-white">
              +1k
            </div>
          </div>
          <p className="text-sm text-indigo-100">{footerWordsUiForm}</p>
        </div>
      </div>
    </>
  );
};

export default UiForm;
