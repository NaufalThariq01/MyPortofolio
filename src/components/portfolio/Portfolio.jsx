import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.jpeg";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Hand Reognition",
    title: "Pengenalan Bahasa Isyarat Menggunakan Model LSTM",
    description:
      "Developed a sign language recognition system for three alphabet letters (A, Q, and V) using Long Short-Term Memory (LSTM). The dataset was self-collected using a smartphone camera, consisting of 60 videos per class (30 videos from each of two participants).",
    link: "https://github.com/NaufalThariq01/Pengenalan-Bahasa-Isyarat-Menggunakan-Model-LSTM.git",
  },
  {
    id: 2,
    image: card2,
    category: "Image classification",
    title: "Klasifikasi 12 ras kucing menggunakan model CNN custom,MobileNetV2 dan EfficientNetB0",
    description:
      "Developed a 12-class cat breed classification system using three model architectures: a custom CNN, MobileNetV2, and EfficientNetB0. The dataset was sourced from Kaggle and underwent preprocessing steps including image resizing, normalization, and data augmentation to improve model generalization.",
    link: "https://github.com/NaufalThariq01/Klasifikasi-12-ras-kucing-menggunakan-model-CNN-custom-MobileNetV2-dan-EfficientNetB0.git",
  },
  {
    id: 3,
    image: card3,
    category: "Audio identification",
    title: "Identifikasi Suara & Pengenalan Kata “Buka” / “Tutup”",
    description:
      "Built an audio-based keyword recognition system to classify the commands “buka” and “tutup”. The dataset consists of 200 WAV audio recordings collected from two speakers, with 50 recordings per class per speaker.",
    link: "https://github.com/NaufalThariq01/Identifikasi-Suara-Pengenalan-Kata-Buka-Tutup-.git",
    website: "https://mxpmqdp9jb6ym6hg8c8syx.streamlit.app/",
  },  
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
