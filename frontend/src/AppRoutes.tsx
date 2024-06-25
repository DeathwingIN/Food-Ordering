import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Layout from '../src/layouts/layout.tsx';
import HomePage from '../src/pages/HomePage.tsx';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout>
                <HomePage/>
            </Layout>}/>
            <Route path={"/user-profile"} element={<span>User Profile</span>}/>
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    )
}

export default AppRoutes;