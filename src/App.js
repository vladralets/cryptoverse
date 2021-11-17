import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components/index';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/cryptoverse/">
              <Homepage />
            </Route>
            <Route exact path="/cryptoverse/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptoverse/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/cryptoverse/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/cryptoverse/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/cryptoverse/">Home</Link>
          <Link to="/cryptoverse/exchanges">Exchanges</Link>
          <Link to="/cryptoverse/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;