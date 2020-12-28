import React, {useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout";
import NominationSideBar from "./Containers/NominationSideBar/NominationSideBar";
import SearchPage from "./Components/SearchPage/SearchPage";
import LoadableComponent from "./Components/LoadableComponent/LoadableComponent";

function App({fetchNominations, isLoading}) {
    useEffect(() => {
        fetchNominations();
    });

    return (
        <LoadableComponent isLoading={isLoading}>
            <NominationSideBar>
                <Layout>
                    <SearchPage />
                </Layout>
            </NominationSideBar>
        </LoadableComponent>
  );
}



export default App;
