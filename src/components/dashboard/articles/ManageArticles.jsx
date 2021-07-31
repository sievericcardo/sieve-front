import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AddArticle from '../articles/AddArticle';
import ListArticles from '../articles/ListArticles';

const ManageArticles = () => {
    const auth = useSelector(state => state.auth);

    const [ article, setArticle ] = useState({
        name: "",
        body: "",
    });

    if(!auth._id) {
        return <Redirect to="/signin" />
    }

    return (
        <>
            <AddArticle article={article} setArticle={setArticle} />
            <ListArticles article={article} setArticle={setArticle} />
        </>
    );
};

export default ManageArticles;
