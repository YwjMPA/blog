const React = require('react');
const ArticleSection = require('./articleSection').article;
const Article = require('./article').article;

// class Archives extends React.Component {
//   render() {
//     return (
//       <section>
//         <i className="fa fa-calendar"></i>Archives
//       </section>
//     );
//   }
// }

function Tag(props) {
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
    if (location.href.indexOf('article.html') < 0) {
      mainSection = <HomeMain dataArticle={this.props.dataArticle}
      dataTag= {this.props.dataTag}/>

    }else {
      mainSection = <Article />
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
