import Button from "../Button/Button";
const HomeContent = () => {
  return (
    <div className="home-content w-full lg:w-1/2">
      <h3 className="text-xl md:text-4xl font-medium">
        <span className="separator-one">Meet </span>Your Dream App{" "}
      </h3>
      <h1 className="text-2xl mt-2 lg:text-6xl font-bold mb-3 md:mt-8 md:mb-8">
        <span className="separator-one">Let us</span> help you achieve your
        goals. Better
      </h1>
      <Button buttonTitle="Explore More"></Button>
    </div>
  );
};

export default HomeContent;
