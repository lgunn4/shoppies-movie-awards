import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './Pages/SearchPage/SearchPage';
import ErrorPage from './Pages/NotFoundPage/ErrorPage';
import HomePage from './Containers/HomePage/HomePage';
import Layout from './Containers/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/" component={HomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
