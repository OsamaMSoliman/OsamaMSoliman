import type { Route } from './+types/home';

import PersonalInfo from '~/components/PersonalInfo';
import Experience from '~/components/Experience';
import Project from '~/components/Project';
import Section from '~/components/Section';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

import { Experiences, Education } from '~/data/cv.json';

const generateRandomArray = (maxLength: number = 10) =>
  Array.from({ length: Math.floor(Math.random() * maxLength) }, (_, i) => i);

const EducationSection = () => (
  <Section header="Education">
    {Object.entries(Education).map(([school, education]) => (
      <Experience
        key={school}
        tl={school}
        tr={education.location}
        bl={education.degree}
        br={education.duration}
      >
        <p>{education.project}</p>
      </Experience>
    ))}
  </Section>
);

const WorkExperienceSection = () => (
  <Section header="Work Experience">
    {Object.entries(Experiences).map(([company, experience]) => (
      <Experience
        key={company}
        tl={company}
        tr={experience.location}
        bl={experience.position}
        br={experience.duration}
      >
        {experience.projects.map((project) => (
          <Project
            key={project.title}
            // title={project.title}
            descriptions={project.descriptions}
            tags={project.tags}
          />
        ))}
      </Experience>
    ))}
  </Section>
);

const ProjectsSection = () => (
  <Section header="Projects">
    <Project
      title="Title"
      descriptions={generateRandomArray().map((i) => `Description ${i}`)}
      tags={generateRandomArray().map((i) => `Tag ${i}`)}
    />
    <Project
      title="Title"
      descriptions={generateRandomArray().map((i) => `Description ${i}`)}
      tags={generateRandomArray().map((i) => `Tag ${i}`)}
    />
  </Section>
);

export default function CV() {
  return (
    <>
      <PersonalInfo />
      <EducationSection />
      <WorkExperienceSection />
      <ProjectsSection />
    </>
  );
}
