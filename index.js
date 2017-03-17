const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./js/main').main;
const Modal = require('./js/modal').modal;

// fake data
const dataTag = [
  {
    "id": 1,
    "name": "HTML"
  },
  {
    "id": 2,
    "name": "CSS"
  },
  {
    "id": 3,
    "name": "JavaScript"
  },
  {
    "id": 4,
    "name": "React"
  },
  {
    "id": 5,
    "name": "Vue"
  },
  {
    "id": 6,
    "name": "Nodejs"
  },
  {
    "id": 7,
    "name": "webpack"
  }
]

const dataArticle = [
  {
    "id": 1,
    "title": "HTML",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2016-09-28 06:19:59.123412",
    "description": "HTML is a markup language for describing web documents (web pages).",
    "tags":[1]
  },
  {
    "id": 2,
    "title": "CSS",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2016-10-17 08:29:33.433422",
    "description": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.",
    "tags":[2]
  },
  {
    "id": 3,
    "title": "JavaScript",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2016-11-02 16:39:19.987321",
    "description": "JavaScript is a high-level, dynamic, untyped, and interpreted programming language.",
    "tags":[3]
  },
  {
    "id": 4,
    "title": "React",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2016-12-15 19:39:19.987321",
    "description": "JavaScript is a high-level, dynamic, untyped, and interpreted programming language.",
    "tags":[1,3,4]
  },
  {
    "id": 5,
    "title": "Nodejs",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2016-12-31 05:39:19.987321",
    "description": "JavaScript is a high-level, dynamic, untyped, and interpreted programming language.",
    "tags":[3,6]
  }
]

// header
const Nav = (props) => {
  const handleHomeClick = () => {
    props.handleHomeClick();
  }
  const handleContactClick = () => {
    props.handleContactClick();
  }
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a onClick={handleHomeClick}>Home</a>
        </li>
        <li className="nav-item">
          <a href="https://ywjmpa.github.io/protfolio">Protfolio</a>
        </li>
        <li className="nav-item">
          <a onClick={handleContactClick}>Contact</a>
        </li>
      </ul>
      <div className="nav-user" id='logIn'>
        <i className="fa fa-user-circle-o"></i> Log in
      </div>
    </nav>
  );
}
const Header = (props) => {
  const handleBrandClick = () => {
    props.handleBrandClick();
  }
  return (
    <header>
      <div className="row">
        <div className="nav-brand" onClick={handleBrandClick}>
          Ywj{'\''}s Blog
        </div>
        <div className="navbar-toggle">
          <div>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
        </div>
      </div>
      <Nav handleHomeClick={props.handleHomeClick}
          handleContactClick={props.handleContactClick}/>
      <Modal />
    </header>
  )
}

// footer
const Footer = () => {
  return (
    <footer>
      <span>&copy; 2016 Wenjia Yu
        <a className="github" href="https://github.com/ywjmpa">{' '}
          <i className="fa fa-github"></i>
        </a>
      </span>
    </footer>
  )
}

// homepage
class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mainPage:'home',
      articleId: null,
      tagfilter: null,
      username: null,
      password: null,
      commentText: null
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.handleBrandClick = this.handleBrandClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleCommentChange(value) {
    this.setState({
      commentText: value
    });
  }
  handleBrandClick() {
    this.setState({
      mainPage:'home'
    })
  }
  handleContactClick() {
    this.setState({
      mainPage:'contact'
    })
  }
  handleArticleClick(id) {
    this.setState({
      mainPage:'article',
      articleId: id
    })
  }
  // Main Component come from ./js/main.js
  render() {
    return (
      <div>
        <Header handleBrandClick={this.handleBrandClick}
                handleHomeClick={this.handleBrandClick}
                handleContactClick={this.handleContactClick}/>
        <Main dataArticle={this.props.dataArticle}
              dataTag={this.props.dataTag}
              onCommentChange={this.handleCommentChange}
              mainPage={this.state.mainPage}
              handleArticleClick={this.handleArticleClick}
              articleId={this.state.articleId}/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Homepage dataArticle={dataArticle} dataTag={dataTag} />,
	document.getElementById('root')
);
