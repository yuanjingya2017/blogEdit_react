import React from 'react';
import { matchRoutes, renderRoutes } from "react-router-config";
import App from './App';
import Content from './component/layout/content';
class Home extends React.Component {
    render () {
      console.log(this.props.route.routes, '====this.props.route.routes')
      return <div>home{renderRoutes(this.props.route.routes)}</div>
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
const routeConfig = [
  {
    component: App,
    routes: [
      { path: '/home', component: Home },
      { path: '/articlelist',
        component: Content,
        routes: [
          { path: '/articlelist/:id', component: Article },
          { path: 'articlelist/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/articlelist/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]
export default routeConfig;
