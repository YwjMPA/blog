const React = require('react');

const formatDate = (date) => {
  let shortDate = date.slice(0, 10).split("-");
  return  shortDate[1] + '-' + shortDate[2]+',' + shortDate[0];
}

const ArticleHeader = (props) => {
  const handleClick = () => {
    props.handleArticleClick(props.id);
  }
  return (
    <h3 className="article-header">
      <a onClick={handleClick}>
        {props.title}
      </a>
    </h3>
  )
}

const ArticleDescription = (props) => {
  return (
    <div className="article-description">{props.description}</div>
  )
}

const ArticleTag = (props) => {
  const tags = props.dataTag;
  const tagList = props.tagList.map((val) => {
    const idVal = val;
    let tagName;
    tags.forEach((val) => {
      if (val.id === idVal) {
        tagName = val.name;
      }
    });
    return tagName;
  });
  return (
    <span>
      <i className="fa fa-tag"></i><a href="">{tagList.join()}</a>,
    </span>
  )
}

const ArticleTime = (props) => {
  return (
      <span>
        <i className="fa fa-clock-o"></i>
        {formatDate(props.datePublished)}
      </span>
  )
}

const ArticleComment = (props) => {
  return (
    <span><i className="fa fa-comment-o"></i>(<a href="">1</a>)</span>
  )
}

const ArticleView = (props) => {
  return (
    <span>
      <i className="fa fa-eye"></i>
      (<a href="">{props.clickCount}</a>)
    </span>
  )
}

const ArticleSection = (props) => {
  let articleList = props.dataArticle.map((val) => (
    <div key={val.id} className="article-list">
      <ArticleHeader handleArticleClick={props.handleArticleClick}
          title={val.title} id={val.id}/>
      <ArticleDescription description={val.description}/>
      <div className="article-info">
        <ArticleTag tagList={val.tags} dataTag={props.dataTag}/> {' '}
        <ArticleTime datePublished={val.date_publish}/>{' '}
        <ArticleComment /> {' '}
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

module.exports = {
  article: ArticleSection,
  formatDate: formatDate
}
