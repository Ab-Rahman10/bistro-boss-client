const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="text-center md:w-4/12 mx-auto my-7">
      <p className="text-yellow-500 mb-2 italic text-sm">{subTitle}</p>
      <h2 className="text-2xl uppercase border-y-4 py-3">{title}</h2>
    </div>
  );
};

export default SectionTitle;
