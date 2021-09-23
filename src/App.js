import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import './App.css';
import './common/style/default.css';
import Nav from './component/layout/nav';
import Head from './component/layout/head';
import Content from './component/layout/content';
import routeConfig from './routeConfig';

class App extends React.Component {
  constructor (props) {
    super(props);
    console.log(props.route.routes, '=====props')
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <Head></Head>
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}




export default App;
