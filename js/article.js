const React = require('react');

class ArticleHeader extends React.Component {
  render(){
    return (
      <h1 id='article-header'>Title</h1>
    );
  }
}

class ArticleTag extends React.Component {
  render(){
    return (
      <span>
        <a href=""><i className="fa fa-tag"></i> JS</a>.{' '}
      </span>
    );
  }
}

class ArticleView extends React.Component {
  render(){
    return (
      <span>
        <i className="fa fa-eye"></i>
        {' '}({123})
      </span>
    );
  }
}

class ArticleTime extends React.Component {
  render(){
    return (
      <span id='article-time'>
        <i className="fa fa-clock-o"></i>{' '}01-28,2014
      </span>
    );
  }
}

class ArticleDescription extends React.Component {
  render(){
    return (
      <div id='article-description'>
        There are numerous frameworks for making websites in Python.
      </div>
    );
  }
}

class ArticleContent extends React.Component {
  render(){
    return (
      <div id='article-content'>
        Content
      </div>
    );
  }
}

class CommentSection extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  }
  render(){
    return (
      <div className='comment-section'>
        <h4>Comment</h4>
        <CommentList />
        <textarea name="commentText" rows="5"></textarea>
        <button id='commentBtn' onClick={this.handleClick}>comment</button>
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
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
}

class Article extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className='article-list'>
        <ArticleHeader />
        <div id='article-info'>
          <ArticleTag />
          <ArticleView />
          <ArticleTime />
        </div>
        <ArticleDescription />
        <hr />
        <ArticleContent />
        <hr />
        <CommentSection />
      </section>
    );
  }
}

module.exports = {
  article:Article
}
