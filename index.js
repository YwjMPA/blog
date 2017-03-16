const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./js/main').main;
const Modal = require('./js/modal').modal;

// fake data
let dataTag = [
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

let dataArticle = [
  {
    "id": 1,
    "title": "HTML",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2014-01-28 06:19:59.613412",
    "description": "HTML is a markup language for describing web documents (web pages)."
  },
  {
    "id": 2,
    "title": "CSS",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2015-02-17 06:19:59.613412",
    "description": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language."
  },
  {
    "id": 3,
    "title": "JavaScript",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 201,
    "date_publish": "2016-12-02 06:19:59.613412",
    "description": "JavaScript is a high-level, dynamic, untyped, and interpreted programming language."
  },
]

// header
function Header() {
  return (
    <header>
      <div className="nav-brand">Ywj</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://ywjmpa.github.io/blog">Home</a>
          </li>
          <li className="nav-item">
            <a href="https://ywjmpa.github.io/protfolio">Protfolio</a>
          </li>
          <li className="nav-item">
            <a href="https://ywjmpa.github.io/blog/html/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="nav-user" id='logIn'>
        <i className="fa fa-user-circle-o"></i> Log in
      </div>
      <Modal />
    </header>
  )
}

// footer
function Footer() {
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
  }
  // Main Component come from ./js/main.js
  render() {
    return (
      <div>
        <Header />
        <Main dataArticle={this.props.dataArticle}
              dataTag={this.props.dataTag}/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Homepage dataArticle={dataArticle} dataTag={dataTag} />,
	document.getElementById('root')
);
