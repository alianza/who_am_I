import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout/Layout";

function NotFound() {
    return (
    <Layout>
        <div className={'text-center'}>
            <h1 className={'main-title'}>Not Found...</h1>
            <h1>404 Oops...</h1>
            <h2>Page not found!</h2>
            <span>Go back <b><Link to={'/'}>Home</Link></b>.</span>
        </div>
    </Layout>
    );
}

export default NotFound;
