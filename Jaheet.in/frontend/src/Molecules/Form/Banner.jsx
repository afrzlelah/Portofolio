const Banner = ({ title, description }) => {
  return (
    <>
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{title}</h1>
        <p className="text-slate-500">{description}</p>
      </div>
    </>
  );
};

export default Banner;
