import React, {useEffect} from "react";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout";
import NominationSideBar from "./Containers/NominationSideBar/NominationSideBar";
import SearchPage from "./Pages/SearchPage/SearchPage";
import LoadableComponent from "./Components/LoadableComponent/LoadableComponent";
import ErrorPage from "./Pages/NotFoundPage/ErrorPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App({fetchNominations, isLoading}) {
    useEffect(() => {
        fetchNominations();
    });

    return (
        <LoadableComponent isLoading={isLoading}>
            <BrowserRouter>
                <NominationSideBar>
                    <Layout>
                            <Switch>
                                <Route exact path="/" component = {SearchPage} />
                                <Route component={ErrorPage} />
                            </Switch>
                    </Layout>
                </NominationSideBar>
            </BrowserRouter>
        </LoadableComponent>
  );
}

export default App;
