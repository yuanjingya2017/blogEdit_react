import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import './App.css';
import './common/style/custome.css';
import Nav from './component/layout/nav';
import Header from './component/layout/header';
import Content from './component/content';
import routeConfig from './routeConfig';

class App extends React.Component {
  constructor (props) {
    super(props);
    console.log(props.route.routes, props, '=====props')
  }

  componentDidMount() {
  }

  render() {
    console.log(this.props.route.routes, '====this.props.route.routes')
    return (
      <div className='app_common'>
        <Nav></Nav>
        <div className="container">
          <Header />
          <div className="match_component">
            {renderRoutes(this.props.route.routes)}
          </div>
        </div>
      </div>
    )
  }
}




export default App;
