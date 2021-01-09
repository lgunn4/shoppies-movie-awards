import React from 'react';
import Sidebar from "react-sidebar";
import NominationSideBarContent from "../../Containers/NominationSideBarContent/NominationSideBarContent";
import {PropTypes} from "prop-types";

function NominationSideBar({children, sideBarOpen, setSideBarClosed}){
    return(
        <Sidebar
            sidebar={(<NominationSideBarContent />)}
            open={sideBarOpen}
            onSetOpen={() => setSideBarClosed()}
            styles={{ sidebar: { background: "var(--white)", width: "50vh", zIndex: "3"} }}
            pullRight
        >
            {children}
        </Sidebar>
    );
}

export default NominationSideBar;

NominationSideBar.propTypes = {
    children: PropTypes.element.isRequired,
    sideBarOpen: PropTypes.bool.isRequired,
    setSideBarClosed: PropTypes.func.isRequired,
};