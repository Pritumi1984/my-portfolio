import ProjectCard from "./ProjectCard";

const Projects=()=>{
    return(
      <div className="px-16 mx-20 my-5 font-mono">
        <h1 className="text-4xl mb-5 font-bold text-white"><span className="text-primaryColor">02.&nbsp;</span>Projects</h1>
        <div className="flex justify-between gap-4">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </div>
    );
}

export default Projects;