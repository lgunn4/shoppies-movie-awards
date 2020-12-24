import React, {useEffect} from 'react';
import Sidebar from "react-sidebar";
import NominationSideBarContent from "../../Containers/NominationSideBarContent/NominationSideBarContent";
import LoadableNominations from "../../Containers/LoadableNominations/LoadableNominations";

function NominationSideBar({children, sideBarOpen, setSideBarClosed, fetchNominations}){
    useEffect(() => {
        fetchNominations();
    }, );

    const sideBarContent = (
        <LoadableNominations>
            <NominationSideBarContent />
        </LoadableNominations>
    );

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