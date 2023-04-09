import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirts = useLoaderData();
    return (
        <div>
            <h1>this is my shirts:{shirts.length}</h1>
        </div>
    );
};

export default Home;