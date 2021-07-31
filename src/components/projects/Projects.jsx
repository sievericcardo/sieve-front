import React, { useState } from 'react';

import ListProjects from './ListProjects';

const Projects = () => {
  const [project, setProject] = useState({
    name: "",
    body: "",
  });

  return (
    <div>
      <ListProjects
        project={project} setProject={setProject} 
      />
    </div>
  );
};

export default Projects;
