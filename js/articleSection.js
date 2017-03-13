const React = require('react');
const articleHref = location.href + '/html/article.html';

function formatDate(date) {
  let shortDate = date.slice(0, 10).split("-");
  return  shortDate[1] + '-' + shortDate[2]+',' + shortDate[0];
}

class ArticleHeader extends React.Component {
  render() {
    return (
      <h3 className="article-header">
        <a href={articleHref}>
          {this.props.title}
        </a>
      </h3>
    )
  }
}

class ArticleDescription extends React.Component {
  render() {
    return (
      <div className="article-description">{this.props.description}</div>
    )
  }
}

class ArticleTag extends React.Component {
  render() {
    return (
      <span>
        <i className="fa fa-tag"></i><a href="">JS</a>,
      </span>
    )
  }
}

class ArticleTime extends React.Component {
  render() {
    return (
        <span>
          <i className="fa fa-clock-o"></i>
          {formatDate(this.props.datePublished)}
        </span>
    )
  }
}

class ArticleComment extends React.Component {
  render() {
    return (
      <span><i className="fa fa-comment-o"></i>(<a href="">1</a>)</span>
    )
  }
}

class ArticleView extends React.Component {
  render() {
    return (
      <span>
        <i className="fa fa-eye"></i>
        (<a href="">{this.props.clickCount}</a>)
      </span>
    )
  }
}

class ArticleSection extends React.Component {
  render() {
    let articleList = this.props.dataArticle.map((val) => (
      <div key={val.id} className="article-list">
        <ArticleHeader title={val.title}/>
        <ArticleDescription description={val.description}/>
        <div className="article-info">
          <ArticleTag /> {'   '}
          <ArticleTime datePublished={val.date_publish}/>{'    '}
          <ArticleComment /> {'    '}
          <ArticleView clickCount={val.click_count}/>
        </div>
      </div>
    ))
    return (
      <section>
        {articleList}
      </section>
    );
  }
}

module.exports = {
  article: ArticleSection
}
