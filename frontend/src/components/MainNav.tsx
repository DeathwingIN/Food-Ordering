import React from 'react';
import {Button} from './ui/button.tsx';

export const MainNav = () => {
    return (
        <>
            <Button varient = "ghost"  className={"font-bold bg-orange-500 hover:text-orange-500 hover:bg-white"}>
                Log In
            </Button>
        </>
    );
};
