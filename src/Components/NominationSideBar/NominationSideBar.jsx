import React from 'react';
import Sidebar from "react-sidebar";
import NominationSideBarContent from "./NominationSideBarContent";

function NominationSideBar({children, sideBarOpen, setSideBarOpen}){
    return(
        <Sidebar
            sidebar={NominationSideBarContent()}
            open={sideBarOpen}
            onSetOpen={() => setSideBarOpen(false)}
            styles={{ sidebar: { background: "white", width: "50vh"} }}
            pullRight
        >
            {children}
        </Sidebar>
    );
};

export default NominationSideBar;