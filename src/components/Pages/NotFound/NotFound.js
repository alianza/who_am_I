import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
    <div id={'notFound'} className={'absolute w-screen top-16 p-4'}>
        <div className={'text-center'}>
            <h1 className={'text-8xl text-accent-1 text-shadow-main mb-4'}>Not Found...</h1>
            <h1>404 Oops...</h1>
            <h2>Page not found!</h2>
            <span>Go back <b><Link to={'/'}>Home</Link></b>.</span>
        </div>
    </div>
    );
}

export default NotFound;
