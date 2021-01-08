import React, {useEffect} from "react";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout";
import SearchPage from "./Pages/SearchPage/SearchPage";
import LoadableComponent from "./Components/LoadableComponent/LoadableComponent";
import ErrorPage from "./Pages/NotFoundPage/ErrorPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";


function App({fetchNominations, isLoading}) {
    useEffect(() => {
        fetchNominations();
    });

    return (
        <LoadableComponent isLoading={isLoading}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/search" component = {SearchPage} />
                        <Route exact path="/" component = {HomePage} />
                        <Route component={ErrorPage} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </LoadableComponent>
  );
}

export default App;
