const CardService = ({ title, description, features, setPage }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-y-110 transition duration-300 p-6 border-t-4 border-indigo-500">
    <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 text-sm text-gray-700 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg
            className="w-4 h-4 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button
      onClick={() => setPage("/dashboard/new")}
      className="w-full px-4 py-3 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
    >
      Ajukan Pesanan
    </button>
  </div>
);
export default CardService;
