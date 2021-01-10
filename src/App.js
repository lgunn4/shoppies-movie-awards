import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import SearchPage from './Pages/SearchPage/SearchPage';
import ErrorPage from './Pages/NotFoundPage/ErrorPage';
import HomePage from './Containers/HomePage/HomePage';
import LoadableComponent from './Containers/SearchPageResultsLoadableComponent/SearchPageResultsLoadableComponent';
import Layout from './Components/Layout/Layout';

function App({ fetchNominations, isLoading }) {
  useEffect(() => {
    fetchNominations();
  });

  return (
    <LoadableComponent isLoading={isLoading}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={ErrorPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </LoadableComponent>

  );
}

export default App;

App.propTypes = {
  fetchNominations: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
