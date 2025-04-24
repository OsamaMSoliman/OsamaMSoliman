import type { Route } from './+types/home';

import Experience from '~/components/Experience';
import PersonalInfo from '~/components/PersonalInfo';
import Project from '~/components/Project';
import Section from '~/components/Section';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resume' },
    { name: 'description', content: 'My Protfolio' },
  ];
}

import { Education, Experiences, Projects } from '~/data/cv.json';

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
        {/* <Project key={school} descriptions={[education.project]} tags={[]} /> */}
        <p className="ps-4">{education.project}</p>
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
  <Section header="Selected Projects">
    {Projects.map((project) => (
      <Project
        key={project.title}
        title={project.title}
        descriptions={project.descriptions}
        tags={project.tags}
      />
    ))}
  </Section>
);

export default function CV() {
  return (
    <>
      <PersonalInfo
        title="Software Engineer"
        name="Osama Soliman"
        address="Altena, Germany"
        email="soliman21de@gmail.com"
        phone="+49 157 50625615"
        github="OsamaMSoliman"
        linkedin="osama-nsr"
      />
      <WorkExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </>
  );
}
