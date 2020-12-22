import React from 'react';
import Sidebar from "react-sidebar";
import NominationSideBarContent from "./NominationSideBarContent";

function NominationSideBar({children, sideBarOpen, setSideBarClosed}){
    return(
        <Sidebar
            sidebar={(<NominationSideBarContent setSideBarClosed={setSideBarClosed}/>)}
            open={sideBarOpen}
            onSetOpen={() => setSideBarClosed()}
            styles={{ sidebar: { background: "white", width: "50vh"} }}
            pullRight
        >
            {children}
        </Sidebar>
    );
};

export default NominationSideBar;