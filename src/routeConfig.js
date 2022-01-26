import React from 'react';
import { matchRoutes, renderRoutes } from "react-router-config";
import App from './App';
import Content from './component/content';
import Edit from './component/edit';
class Home extends React.Component {
    render () {
      console.log(this.props.route.routes, '====this.props.route.routes')
      return <div>home</div>
    }
}
class Detail extends React.Component {
    render () {
        return <div>Detail</div>
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
      { path: '/home', component: Home, name: '首页' },
      { path: '/article/list',
        component: Content,
        name: '文章列表'
      },
      { path: '/article/detail/:id',
        component: Detail,
        name: '文章详情',
        show: false
      },
      { path: '/article/edit/:id',
        component: Edit,
        name: '文章编辑',
        show: false
      },
      { path: '/*', component: NotFound, show: false },
    ],
  }
]
export default routeConfig;
