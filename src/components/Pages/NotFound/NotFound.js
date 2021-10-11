import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1 className={'mb-4'}>404 Oops...</h1>
            <h2 className={'mb-2'}>Page not found!</h2>
            <span>Go back <b><Link to={'/'}>Home</Link></b>.</span>
        </div>
    );
}

export default NotFound;
