import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout";
import NominationSideBar from "./Containers/NominationSideBar/NominationSideBar";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
    return (
      <NominationSideBar>
          <Layout>
              <SearchPage />
          </Layout>
      </NominationSideBar>
  );
}



export default App;
