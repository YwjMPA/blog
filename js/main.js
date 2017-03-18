const React = require('react');
const ArticleSection = require('./articleSection').article;
const Article = require('./article').article;
const ContactCard = require('./contact').contactCard;

const tagFilter = (dataArticle, id) => {
  if(id === null) return dataArticle;
  return dataArticle.filter((val) => val.tags.indexOf(id) >= 0);
};

// Tag Component
const Tag = (props) => {
  const handleTagClick = () => {
    props.handleTagClick(props.id);
  };
  return (
    <span><a onClick={handleTagClick}>{props.name}</a></span>
  )
};

// Tags Component
const Tags = (props) => {
  let tagList = props.dataTag.map((val) =>
    <Tag key={val.id} name={val.name} id={val.id}
        handleTagClick={props.handleTagClick}/>
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
};

// HomeMain Component
const HomeMain = (props) => {
  // ArticleSection Component is from ./articleSection.js
  return (
    <div>
      <ArticleSection dataArticle={props.dataArticle}
        dataTag={props.dataTag}
        handleArticleClick={props.handleArticleClick}/>
      <hr />
      <Tags dataTag={props.dataTag}
        handleTagClick={props.handleTagClick}/>
    </div>
  );
};

// Main Component
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
    });
    mainSection = <Article onCommentChange={props.onCommentChange}
                     dataTag={props.dataTag}
                     articleData={theArticle}/>
  }else if (props.mainPage === 'contact') {
    mainSection = <ContactCard />
  }else if (props.mainPage === 'home'){
    mainSection = <HomeMain
              dataArticle={tagFilter(props.dataArticle, props.tagFilter)}
              dataTag={props.dataTag}
              handleArticleClick={props.handleArticleClick}
              handleTagClick={props.handleTagClick}/>
  }
  return (
    <main className="container" >
      {mainSection}
    </main>
  );
};



module.exports = {
  main: Main
}
