import React from "react";
import Layout from "../../Layout/Layout/Layout";

function About() {
    return (
        <Layout>
            <div className={'text-center'}>
                <h1 className={'main-title'}>About</h1>
            </div>
            <div className={'p-4 text-text-primary m-auto sm:w-1/2'}>
               <p>This is a web-application able to predict your age, gender and nationality based on your name. It's also possible to supply your nationality to increase accuracy of the other metrics. Try it out and enjoy!</p>
                <p className={'mt-2'}>This web-application is built using the React web-framework using the <a href={'https://agify.io/'} rel={'noreferrer'} target={'_blank'}>Agify.io</a>, <a href={'https://genderize.io/'} rel={'noreferrer'} target={'_blank'}>Genderize.io</a> and <a href={'https://nationalize.io/'} rel={'noreferrer'} target={'_blank'}>Nationalize.io</a> API sets.</p>
                <p className={'mt-2'}>Author: <a href={'https://jwvbremen.nl/'} rel={'noreferrer'} target={'_blank'}>Jan-Willem van Bremen</a>, 2021</p>
            </div>
        </Layout>
    );
}

export default About;
