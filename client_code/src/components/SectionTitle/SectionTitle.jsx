const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center mb-6">
      <p className="text-yellow-600 py-2">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-2 py-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
