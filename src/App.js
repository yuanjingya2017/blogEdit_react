import React from 'react';
import logo from './logo.svg';
import './App.css';
import './common/style/default.css';
import Nav from './component/layout/nav';
import Head from './component/layout/head';
import Content from './component/layout/content';
class Home extends React.Component {
  render () {
    return <div>home</div>
  }
}
class Article extends React.Component {
  render () {
    return <div>Article</div>
  }
}
class NotFound extends React.Component {
  render () {
    return <div>404, Not Found</div>
  }
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    }
    console.log(this.state, '====this.state11112222')
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child
    switch (this.state.route) {
      case 'article': Child = Article; break;
      case 'list': Child = Content; break;
      case '': Child = Home; break;
      default:      Child = NotFound;
    }

    return (
      <div className="App">
        <Nav></Nav>
        <div className="container">
          <Head></Head>
          <Child></Child>
        </div>
      </div>
    )
  }
}


export default App;
