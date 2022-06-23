import React from "react";
import styled from "@emotion/styled";
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
      <StaffImageContainer>
        {StaffImages &&
          StaffImages.map((image, index) => {
            return (
              <a
                href={`https://github.com/${image.githubUsername}`}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <StaffImg
                  src={`${image.src}`}
                  alt={image.githubUsername}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    marginTop: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {image.discordUsername}
                </p>
              </a>
            );
          })}
      </StaffImageContainer>
    </div>
  );
};

const StaffImg = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  /* @media all and (max-width: 900px) {
    height: 8.6rem;
  } */
`;

const StaffImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media all and (max-width: 350px) {
    gap: 1rem;
  }
`;

export default About;