import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AddProject from '../projects/AddProject';
import ListProjects from '../projects/ListProjects';

const ManageProjects = () => {
    const auth = useSelector(state => state.auth);

    const [ project, setProject ] = useState({
        name: "",
        body: "",
    });

    if(!auth._id) {
        return <Redirect to="/signin" />
    }

    return (
        <>
            <AddProject project={project} setProject={setProject} />
            <ListProjects project={project} setProject={setProject} />
        </>
    );
};

export default ManageProjects;
