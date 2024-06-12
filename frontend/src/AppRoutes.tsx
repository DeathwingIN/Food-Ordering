import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<span>Home Page</span>}/>
            <Route path={"/user-profile"} element={<span>User Profile</span>}/>
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    )
}

export default AppRoutes;