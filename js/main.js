const React = require('react');
const ArticleSection = require('./articleSection').article;
const Article = require('./article').article;
const ContactCard = require('./contact').contactCard;

const Tag = (props) => {
  return (
    <span><a href="">{props.name}</a></span>
  )
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let tagList = this.props.dataTag.map((val) =>
      <Tag key={val.id} name={val.name}/>
    );
    return (
      <section className="tag-section">
        <i className="fa fa-tags"></i>Tags
        <br />
        <div className="tags">
          {tagList}
        </div>
      </section>
    );
  }
}

class HomeMain extends React.Component {
  render() {
    return (
      <div>
        <ArticleSection dataArticle={this.props.dataArticle}/>
        <hr />
        <Tags dataTag={this.props.dataTag}/>
      </div>
    );
  }
}

// main body
class Main extends React.Component {
  render() {
    let mainSection = null;
    // router logic code
    if (location.href.indexOf('article.html') > 0) {
      mainSection = <Article />
    }else if (location.href.indexOf('contact.html') > 0) {
      mainSection = <ContactCard />
    }else {
      mainSection = <HomeMain dataArticle={this.props.dataArticle}
      dataTag= {this.props.dataTag}/>
    }
    // ArticleSection Component is from ./articleSection.js
    return (
      <main className="container" >
        {mainSection}
      </main>
    );
  }
}



module.exports = {
  main: Main
}
