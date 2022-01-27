import './nav.css';
import routeConfig from '../../routeConfig';
import React from 'react';

export default class Nav extends React.Component {
    constructor (props) {
        super(props);
        console.log(props, '====props')
    }
    componentDidMount () {
        console.log(this.props, '===componentDidMount')
    }
    render () {
        const route = routeConfig;
        return (<nav className="nav">
            <div className='nav_title'>文章管理系统</div>
            <div className='nav_column'>
                {route.map((item, index) => {
                    if (item.show != false) {
                        if (item.routes) {
                            return item.routes.map((it, idx) => {
                                if (it.show != false) {
                                    return <a className='active' key={idx} href={it.path}>{it.name}</a>
                                }
                            })
                        } else {
                            return <a key={index} href={item.path}>{item.name}</a>
        
                        }
                    }
                })}
            </div>
        </nav>);
    }
}
