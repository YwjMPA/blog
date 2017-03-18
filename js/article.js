const React = require('react');
const formatDate = require('./articleSection').formatDate;

const ArticleHeader = (props) => {
  return (
    <h1 id='article-header'>{props.title}</h1>
  );
};

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
      <a><i className="fa fa-tag"></i>{tagList.join()}</a>.{' '}
    </span>
  );
};

const ArticleView = (props) => {
  return (
    <span>
      <i className="fa fa-eye"></i>
      {' '}({props.clickCount})
    </span>
  );
};

const ArticleTime = (props) => {
  return (
    <span id='article-time'>
      <i className="fa fa-clock-o"></i>{' '}{formatDate(props.datePublish)}
    </span>
  );
};

const ArticleDescription = (props) => {
  return (
    <div id='article-description'>
      {props.description}
    </div>
  );
};

const ArticleContent = (props) => {
  return (
    <div id='article-content'>
      {props.content}
    </div>
  );
};

const CommentSection = (props) => {
  const onCommentChange = (e) => {
    props.onCommentChange(e.target.value);
  }
  const handleClick = () => {
    props.handleCommentClick(props.articleId, 'Anonymous', props.commentText);
  }
  return (
    <div className='comment-section'>
      <h5>Comments:</h5>
      <CommentList articleId={props.articleId}
        commentData={props.commentData}/>
      <textarea name="commentText" onChange={onCommentChange}
        placeholder='Write your comment here.' rows="5"  value={props.commentText}></textarea>
      <button id='commentBtn' onClick={handleClick}>comment</button>
    </div>
  );
};

const CommentList = (props) => {
  const commentData = [];
  // console.log(props.commentData);
  props.commentData.forEach((val) => {
    if (val.articleId == props.articleId) {
      commentData.push(val);
    }
  });
  let commentList;
  if (commentData.length === 0) {
    commentList = <div className='nocomment'>No comment yet! {'\n'} Do you want to say something?</div>;
  }else{
    commentList = commentData.map((val) => {
      return (
        <div key={val.time}>
          <div className='article-comment-info'>
            <span> {val.user}:</span>
            <span>
              <i className="fa fa-clock-o"></i>{' '}
              {val.time.slice(0, val.time.indexOf('M')+1)}
            </span>
          </div>
          <pre>
            {val.content}
          </pre>
          <hr />
        </div>
      );
    });
  }
  return (
    <div className='article-comment'>
      {commentList}
    </div>
  );
};

const Article = (props) => {
  const articleData = props.articleData;
  return (
    <section className='article'>
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
      <CommentSection articleId={articleData.id}
        commentText={props.commentText}
        commentData={props.commentData}
        onCommentChange={props.onCommentChange}
        handleCommentClick={props.handleCommentClick}/>
    </section>
  );
};

module.exports = {
  article:Article
}
