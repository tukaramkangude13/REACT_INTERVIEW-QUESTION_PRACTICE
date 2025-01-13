import React, { useState } from "react";

const JobPosting = () => {
  const [show, setshow] = useState(false);
  const [index, setindex] = useState(null);
  const data = [
    {
      jobTitle: "UI Developer",
      details: {
        experience: "2-4 years",
        location: "Bangalore, India",
        skillsRequired: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Tailwind CSS",
        ],
        jobDescription:
          "Responsible for designing and implementing user-friendly interfaces for web applications.",
      },
    },
    {
      jobTitle: ".NET Developer",
      details: {
        experience: "3-5 years",
        location: "Pune, India",
        skillsRequired: [
          ".NET Core",
          "C#",
          "ASP.NET",
          "SQL Server",
          "Entity Framework",
        ],
        jobDescription:
          "Develop and maintain scalable .NET applications for enterprise solutions.",
      },
    },
    {
      jobTitle: "Tech Lead",
      details: {
        experience: "8-10 years",
        location: "Hyderabad, India",
        skillsRequired: [
          "Project Management",
          "Team Leadership",
          "Java",
          "Spring Boot",
          "Microservices",
        ],
        jobDescription:
          "Lead a team of developers to deliver high-quality software solutions on time.",
      },
    },
    {
      jobTitle: "DevOps Engineer",
      details: {
        experience: "4-6 years",
        location: "Chennai, India",
        skillsRequired: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
        jobDescription:
          "Implement and manage CI/CD pipelines, ensuring smooth software deployments.",
      },
    },
    {
      jobTitle: "Frontend Developer",
      details: {
        experience: "1-3 years",
        location: "Mumbai, India",
        skillsRequired: ["Vue.js", "JavaScript", "SCSS", "Bootstrap"],
        jobDescription:
          "Build responsive and high-performance front-end web applications.",
      },
    },
    {
      jobTitle: "Backend Developer",
      details: {
        experience: "3-6 years",
        location: "Delhi, India",
        skillsRequired: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
        jobDescription:
          "Design and develop robust backend systems and APIs for web and mobile applications.",
      },
    },
  ];
  console.log(show);
  return (
    <div>
      <div className=" flex flex-col text-white   h-96 bg-blue-400 justify-between">
        {" "}
        {data.map((title, ind) => (
          <div
            onMouseEnter={() => {
              setshow(true);
              setindex(ind);
            }}
            onMouseLeave={() => {
              setshow(false);
              setindex(null);
            }}
            className="   bg-black "
          >
            <p className="    ">{title.jobTitle}</p>
            {show && index === ind ? (
              <div className=" text-black  z-10  absolute bg-red-600">
                <p> {title.details.experience}</p>
                <p>{title.details.location}</p>
                {title.details.skillsRequired.map((item,index)=>(
                    <div>
                        <p>{item}</p>
                    </div>
                ))}
              </div>
            ) : (
              <p> </p>
            )}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPosting;
