import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';

const ScrollBottom = () => {

    const scrollBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <span
            className={"-rotate-90 cursor-pointer text-xl flex justify-center items-center h-10 w-10 p-3 rounded-full drop-shadow-xl bg-blue-200 fixed z-10 bottom-10 right-4 border-4 border-gray-950"}
            onClick={scrollBottom}>
       <ArrowBack/>
        </span>
    );
};

export default ScrollBottom;