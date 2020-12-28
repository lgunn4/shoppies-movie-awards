import React from 'react';
import Sidebar from "react-sidebar";
import NominationSideBarContent from "../../Containers/NominationSideBarContent/NominationSideBarContent";

function NominationSideBar({children, sideBarOpen, setSideBarClosed}){
    const sideBarContent = (<NominationSideBarContent />);


    return(
        <Sidebar
            sidebar={sideBarContent}
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