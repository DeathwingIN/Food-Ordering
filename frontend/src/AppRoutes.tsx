import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Layout from '../src/layouts/layout.tsx';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout></Layout>}/>
            <Route path={"/user-profile"} element={<span>User Profile</span>}/>
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    )
}

export default AppRoutes;