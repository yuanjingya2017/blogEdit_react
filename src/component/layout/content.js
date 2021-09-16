import React from 'react';
import './content.css';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataArr: [
      {
        title: '标题',
        articleId: '文章编码',
        date: '更新日期',
        content: '内容',
        publishStatus: '发布状态'
      }, {
        title: '文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码',
        articleId: 2,
        date: '2020-01-02',
        content: '文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码文章编码',
        publishStatus: false
      }, {
        title: 'hhh',
        articleId: 3,
        date: '2020-01-02',
        content: 'abababababab',
        publishStatus: false
    }, {
        title: 'hhh',
        articleId: 4,
        date: '2020-01-02',
        content: 'abababababab',
        publishStatus: false
    }]};
  }
  render() {
    console.log(this.state.dataArr, '====this.state.data')
    return (
        <div className="content">
          <ul className="list">
          {
            this.state.dataArr.map(function (item) {
              return (              
                <li className="list-item" key={item.articleId}>
                  <div className="liit-id">{item.articleId}</div>
                  <a href={'/#article/' + item.articleId} className="liit-title" title={item.title}>{item.title}</a>
                  <div className="liit-content">{item.content}</div>
                  <div className="liit-publish-status">{item.publishStatus ? '已发布':'未发布'}</div>
                  <div className="liit-date">{item.date}</div>
                </li>
              )
            })
          }
          </ul>
        </div>
    )
  }
}