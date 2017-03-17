const React = require('react');
const ArticleSection = require('./articleSection').article;
const Article = require('./article').article;
const ContactCard = require('./contact').contactCard;

const Tag = (props) => {
  return (
    <span><a >{props.name}</a></span>
  )
}

const Tags = (props) => {
  let tagList = props.dataTag.map((val) =>
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

const HomeMain = (props) => {
  // ArticleSection Component is from ./articleSection.js
  return (
    <div>
      <ArticleSection dataArticle={props.dataArticle}
        dataTag={props.dataTag}
        handleArticleClick={props.handleArticleClick}/>
      <hr />
      <Tags dataTag={props.dataTag}/>
    </div>
  );
}

// main body
const Main = (props) => {
  let mainSection = null;
  // router logic code
  if (props.mainPage === 'article') {
    // find the articleId's
    let theArticle;
    props.dataArticle.forEach((val) => {
      if (val.id === props.articleId) {
        theArticle = val;
      }
    })
    mainSection = <Article onCommentChange={props.onCommentChange}
                     dataTag={props.dataTag}
                     articleData={theArticle}/>
  }else if (props.mainPage === 'contact') {
    mainSection = <ContactCard />
  }else if (props.mainPage === 'home'){
    mainSection = <HomeMain dataArticle={props.dataArticle}
    dataTag={props.dataTag}
    handleArticleClick={props.handleArticleClick}/>
  }
  return (
    <main className="container" >
      {mainSection}
    </main>
  );
}



module.exports = {
  main: Main
}
