import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Machine Learning & Deep Learning",
    description:
      "Building and training models such as CNNs, LSTMs, and transfer learning architectures for classification and prediction tasks.",
  },
  {
    id: 2,
    title: "Computer Vision",
    description:
      "Developing image-based systems including object classification, image preprocessing, augmentation, and feature extraction using OpenCV and deep learning.",
  },
  {
    id: 3,
    title: "Data Processing & Experimentation",
    description:
      "Handling datasets through cleaning, normalization, augmentation, model evaluation, and performance analysis to improve model reliability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">AI & Computer Vision Skills</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I focus on building machine learning and computer vision solutions,
            from data preparation and model training to evaluation and deployment.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My interests include deep learning, image classification, and applied AI
            systems for real-world problems.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;

