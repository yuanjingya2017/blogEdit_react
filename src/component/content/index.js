import React from 'react';
import './index.css';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, '====props content')
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
    }, {
      title: 'hhh',
      articleId: 4,
      date: '2020-01-02',
      content: 'abababababab',
      publishStatus: false
  }, {
    title: 'hhh',
    articleId: 4,
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
    return (
        <div className="content">
          <div className="content_add">新增文章</div>
          <ul className="list">
          {
            this.state.dataArr.map(function (item,index) {
              return (              
                <li className="list-item" key={`${item.articleId}_${index}`}>
                  <div className="liit-id">{item.articleId}</div>
                  <a href={'/article/detail/' + item.articleId} className="liit-title" title={item.title}>{item.title}</a>
                  <div className="liit-content">{item.content}</div>
                  <div className="liit-publish-status">{item.publishStatus ? '已发布':'未发布'}</div>
                  <div className="liit-date">{item.date}</div>
                  <div className="liit-opreate">
                    <div className="liit-opreate-edit" onClick={(e) => {
                        window.location.href = `/article/edit/${item.articleId}`;
                    }}>编辑</div>
                    <div className="liit-opreate-del">删除</div>
                    <div className="liit-opreate-up">上线</div>
                    <div className="liit-opreate-down">下线</div>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
    )
  }
}