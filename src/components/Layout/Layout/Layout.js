import React from "react";

function Layout(props) {
    return (
        <div id={'content'} className={'absolute w-full p-4 flex flex-col gap-8 mt-16'}>
            {props.children}
        </div>
    );
}

export default Layout;
