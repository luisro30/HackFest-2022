import React from "react";
const StaffImages = [
  {
    src: "https://avatars.githubusercontent.com/u/42653934?v=4",
    githubUsername: "elmergustavo",
    discordUsername: "Gustavo",
  },
  {
    src: "https://avatars.githubusercontent.com/u/42653664?v=4",
    githubUsername: "danieltistoj",
    discordUsername: "Jose Daniel",
  },
  {
    src: "https://avatars.githubusercontent.com/u/38712078?v=4",
    githubUsername: "luisro30",
    discordUsername: "Luis",
  },
  {
    src: "https://avatars.githubusercontent.com/u/43415220?v=4",
    githubUsername: "Daniel-Abac",
    discordUsername: "Donald Abac",
  },
  {
    src: "https://avatars.githubusercontent.com/u/48220959?v=4",
    githubUsername: "ErickLima98",
    discordUsername: "Erick Lima",
  },
];

const About = () => {
  return (
    <div>
      <div className="justify-between">
        <h2 className="font-bold text-5xl mb-8 mx-10 my-10">Sobre nosotros </h2>
        <div className="mb-4 font-normal mx-10">
          <p>
            Somos estudiantes de ingeniería en informática y sistemas de la
            Universidad Rafael Landívar Campus San Alberto Hurtado, S. J. de
            Quetzaltenango.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap gap-8">
        {StaffImages &&
          StaffImages.map((image, index) => {
            return (
              <a
                href={`https://github.com/${image.githubUsername}`}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="rounded-full w-40	transform transition duration-500 hover:scale-110 cursor-pointer"
                  src={`${image.src}`}
                  alt={image.githubUsername}
                />
                <p className="text-center mt-4 font-bold">
                  {image.discordUsername}
                </p>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default About;
