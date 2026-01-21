const hardSkills = [
  "Python",
  "TensorFlow / Keras",
  "Computer Vision (OpenCV)",
  "CNN & Transfer Learning",
  "Data Preprocessing",
  "Git & GitHub",
];

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Willingness to Learn",
  "Team Collaboration",
  "Time Management",
];

const Skills = () => {
  return (
    <div className="content py-15" id="skills">
      <p className="section-title text-center">Skills</p>

      {/* Hard Skills */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Technical Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {hardSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white shadow rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;