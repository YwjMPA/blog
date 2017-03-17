const React = require('react');
const formatDate = require('./articleSection').formatDate;

const ArticleHeader = (props) => {
  return (
    <h1 id='article-header'>{props.title}</h1>
  );
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
      <a ><i className="fa fa-tag"></i>{tagList.join()}</a>.{' '}
    </span>
  );
}

const ArticleView = (props) => {
  return (
    <span>
      <i className="fa fa-eye"></i>
      {' '}({props.clickCount})
    </span>
  );
}

const ArticleTime = (props) => {
  return (
    <span id='article-time'>
      <i className="fa fa-clock-o"></i>{' '}{formatDate(props.datePublish)}
    </span>
  );
}

const ArticleDescription = (props) => {
  return (
    <div id='article-description'>
      {props.description}
    </div>
  );
}

const ArticleContent = (props) => {
  return (
    <div id='article-content'>
      {props.content}
    </div>
  );
}

const CommentSection = (props) => {
  const handleClick = (e) => {
    props.onCommentChange(e.target.value);
  }
  return (
    <div className='comment-section'>
      <h4>Comment</h4>
      <CommentList />
      <textarea name="commentText" rows="5"></textarea>
      <button id='commentBtn' onClick={handleClick}>comment</button>
    </div>
  );
}

const CommentList = (props) => {
  return (
    <div className='article-comment'>
      <div className='article-comment-info'>
        <span> Joker Yu :</span>
        <span>
          <i className="fa fa-clock-o"></i>{' '}01-28,2014
        </span>
      </div>
      <pre>
        interesting!
      </pre>
      <hr />
    </div>
  );
}

const Article = (props) => {
  const articleData = props.articleData;
  return (
    <section className='article-list'>
      <ArticleHeader title={articleData.title}/>
      <div id='article-info'>
        <ArticleTag dataTag={props.dataTag}
            tagList={articleData.tags}/>
        <ArticleView clickCount={articleData.click_count}/>
        <ArticleTime datePublish={articleData.date_publish}/>
      </div>
      <ArticleDescription description={articleData.description} />
      <hr />
      <ArticleContent content={articleData.content}/>
      <hr />
      <CommentSection onCommentChange={props.onCommentChange}/>
    </section>
  );
}

module.exports = {
  article:Article
}
