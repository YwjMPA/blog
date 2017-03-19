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
  },
  {
    "id": 8,
    "name": "npm"
  }
]

const dataArticle = [
  {
    "id": 1,
    "title": "HTML",
    "content": "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    "click_count": 123,
    "date_publish": "2017-01-28 06:19:59.123412",
    "description": "HTML is a markup language for describing web documents (web pages).",
    "tags":[1]
  },
  {
    "id": 2,
    "title": "CSS",
    "content": `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
CSS is designed primarily to enable the separation of document content from document presentation, including aspects such as the layout, colors, and fonts.This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.
Separation of formatting and content makes it possible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. It can also display the web page differently depending on the screen size or viewing device. Readers can also specify a different style sheet, such as a CSS file stored on their own computer, to override the one the author specified.`,
    "click_count": 201,
    "date_publish": "2017-02-17 08:29:33.433422",
    "description": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.",
    "tags":[2]
  },
  {
    "id": 3,
    "title": "JavaScript",
    "content": `JavaScript (/ˈdʒɑːvəˌskrɪpt/) is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.
Although there are strong outward similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two are distinct languages and differ greatly in their design. JavaScript was influenced by programming languages such as Self and Scheme.
JavaScript is also used in environments that are not Web-based, such as PDF documents, site-specific browsers, and desktop widgets. Newer and faster JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side Web applications. On the client side, JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation. It is also used in game development, the creation of desktop and mobile applications, and server-side network programming with run-time environments such as Node.js.`,
    "click_count": 101,
    "date_publish": "2016-03-02 16:39:19.987321",
    "description": "JavaScript is a high-level, dynamic, untyped, and interpreted programming language.",
    "tags":[3]
  },
  {
    "id": 4,
    "title": "React",
    "content": `React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for building user interfaces.
    It is maintained by Facebook, Instagram and a community of individual developers and corporations. According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, Paviljons Concept Store and others.`,
    "click_count": 345,
    "date_publish": "2016-03-15 19:39:19.987321",
    "description": "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. React has a few different kinds of components, but we'll start with React.Component subclasses:",
    "tags":[1,3,4]
  },
  {
    "id": 5,
    "title": "Nodejs",
    "content": `Node.js is not a JavaScript framework, many of its basic modules are written in JavaScript, and developers can write new modules in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine.
    Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).
    The Node.js distributed development project, governed by the Node.js Foundation, is facilitated by the Linux Foundation's Collaborative Projects program.`,
    "click_count": 333,
    "date_publish": "2016-03-18 05:39:19.987321",
    "description": "Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of server tools and applications.",
    "tags":[3,6,8]
  },
  {
    "id": 6,
    "title": "Webpack",
    "content": 'Webpack takes modules with dependencies and generates static assets representing those modules. It takes the dependencies and generates a dependency graph allowing you to use a modular approach for your web application development purposes. The bundler can be used from the command line, or can be configured using a config file which is named webpack.config.js.You will need node.js for installing webpack. Another important aspect about webpack is that it is highly extensible by the use of loaders. Loaders allow you to write custom tasks that you want to perform when bundling files together.',
    "click_count": 229,
    "date_publish": "2016-03-11 09:39:19.987321",
    "description": "Webpack is an open-source JavaScript module bundler. ",
    "tags":[3,6,7,8]
  }
]

const fakecommentData = [
  {
    "articleId":1,
    "user": "Joker Yu",
    "time": "3/18/2017, 9:39:42 AM",
    "content": "interesting!"
  },
  {
    "articleId":2,
    "user": "Legacy Yu",
    "time": "23/18/2017, 8:39:21 AM",
    "content": "Awesome!!"
  },
  {
    "articleId":3,
    "user": "Selena Gomez",
    "time": "3/18/2017, 19:32:40 AM",
    "content": "fascinating!!!"
  },
  {
    "articleId":4,
    "user": "Joker Yu",
    "time": "3/18/2017, 11:29:39 AM",
    "content": "interesting!!!!"
  },
  {
    "articleId":1,
    "user": "Ariana Grande",
    "time": "3/19/2017, 18:11:31 AM",
    "content": `This article is soooooooooooooooo

⊂_ヽ
　 ＼＼ ＿
　　 ＼(　•_•) F
　　　 <　⌒ヽ A
　　　/ 　 へ＼ B
　　 /　　/　＼＼ U
　　 ﾚ　ノ　　 ヽ_つ L
　　/　/ O
　 /　/ U
　(　(ヽ S
　|　|、＼.
　| 丿 ＼ ⌒)
　| |　　) /
ノ )　　Lﾉ__
(／___﻿`
  }
];

const fakeuserData = [
  {
    'id':1,
    'firstname':'Wenjia',
    'lastname':'Yu',
    'username':'ywj',
    'password':'yuwenjia',
    'email':'somnus.yuwenjia@foxmail.com'
  },
  {
    'id':2,
    'firstname':'Joker',
    'lastname':'Yu',
    'username':'joker',
    'password':'joker',
    'email':'joker@yu.cn'
  }
];

// header
const Nav = (props) => {
  const handleHomeClick = () => {
    props.handleHomeClick();
    props.handleNavToggle();
  }
  const handleContactClick = () => {
    props.handleContactClick();
    props.handleNavToggle();
  }
  const handleLogInModal = () => {
    props.handleLogInModal();
    props.handleNavToggle();
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
      <div className="nav-user" id='logIn' onClick={handleLogInModal}>
        <i className="fa fa-user-circle-o"></i> {props.ifLogged? 'Log out':'Log in'}
      </div>
    </nav>
  );
};

const Header = (props) => {
  const toggle = null;
  const handleBrandClick = () => {
    props.handleBrandClick();
  }
  const handleNavToggle = (e) => {
    props.handleNavToggle();
  }
  return (
    <header className={!props.navToggle? 'navbar-close':'navbar-open'}>
      <div className="row">
        <div className="nav-brand">
          <span  onClick={handleBrandClick}>Ywj{'\''}s Blog</span>
          <span className="welcome">
            {props.ifLogged? 'welcome,' + props.currentUser.firstname:''}
          </span>
        </div>
        <div className={!props.navToggle? 'navbar-toggle':'navbar-toggle open'}
              onClick={handleNavToggle} >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
      </div>
      <Nav handleHomeClick={props.handleHomeClick}
          handleContactClick={props.handleContactClick}
          handleLogInModal={props.handleLogInModal}
          handleNavToggle={props.handleNavToggle}
          ifLogged={props.ifLogged}/>
      <Modal handleSignUp={props.handleSignUp} modalToggle={props.modalToggle}
          handleModalCloseClick={props.handleModalCloseClick}
          handleLogUsernameChange={props.handleLogUsernameChange}
          handleLogPasswordChange={props.handleLogPasswordChange}
          logInData={props.logInData}
          handleLogInSubmit={props.handleLogInSubmit}/>
    </header>
  )
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <span>&copy; 2017 Wenjia Yu
        <a className="github" href="https://github.com/ywjmpa">{' '}
          <i className="fa fa-github"></i>
        </a>
      </span>
    </footer>
  )
};

// Homepage component
class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mainPage:'home',
      articleId: null,
      tagFilter: null,
      commentText: '',
      navToggle: false,
      modalToggle: false,
      ifLogged:false,
      // fake comment data
      commentData: fakecommentData,
      // fake user data
      userData: fakeuserData,
      signUpData: {
        'firstname': '',
        'lastname': '',
        'username': '',
        'password': '',
        'passwordTwo': '',
        'email': ''
      },
      logInData: {
        'username': '',
        'password': ''
      },
      currentUser: {
        'id': null,
        'firstname': '',
        'lastname': '',
        'username': '',
        'password': '',
        'email': ''
      }
    };
    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.handleBrandClick = this.handleBrandClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleNavToggle = this.handleNavToggle.bind(this);
    this.handleLogInModal = this.handleLogInModal.bind(this);
    this.handleSignUpUsernameChange = this.handleSignUpUsernameChange.bind(this);
    this.handleSignUpPasswordChange = this.handleSignUpPasswordChange.bind(this);
    this.handleSignUpPasswordTwoChange = this.handleSignUpPasswordTwoChange.bind(this);
    this.handleSignUpFNameChange = this.handleSignUpFNameChange.bind(this);
    this.handleSignUpLNameChange = this.handleSignUpLNameChange.bind(this);
    this.handleSignUpEmailChange = this.handleSignUpEmailChange.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleLogUsernameChange = this.handleLogUsernameChange.bind(this);
    this.handleLogPasswordChange = this.handleLogPasswordChange.bind(this);
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
  }
  // all the event handler
  // navbar event
  handleLogInModal() {
    if (this.state.ifLogged) {
      this.setState({
        ifLogged:false,
        currentUser: {
          'id': null,
          'firstname': '',
          'lastname': '',
          'username': '',
          'password': '',
          'email': ''
        }
      });
    }else{
      this.setState((preState) => ({
        modalToggle:!preState.modalToggle
      }));
    }
  }
  handleLogInSubmit() {
    // for loop is better, find match and break
    this.state.userData.forEach((val) => {
      if (val.username === this.state.logInData.username) {
        if (val.password === this.state.logInData.password) {
          this.setState({
            ifLogged:true,
            currentUser: {
              'id':val.id,
              'firstname': val.firstname,
              'lastname': val.lastname,
              'username': val.username,
              'password': val.password,
              'email': val.email
            },
            logInData: {
              'username': '',
              'password': ''
            }
          });
          if (this.state.mainPage === 'signUp') {
            this.setState({
              mainPage:'home'
            })
          }
          this.handleLogInModal();
        } else {
          // password wrong
        }
      } else {
        // no such an user
      }
    });
  }
  handleLogUsernameChange(val) {
    this.setState((preState) => ({
      logInData: {
        'username': val,
        'password': preState.logInData.password
      }
    }));
  }
  handleLogPasswordChange(val) {
    this.setState((preState) => ({
      logInData: {
        'username': preState.logInData.username,
        'password': val
      }
    }));
  }
  handleNavToggle() {
    this.setState((preState) => ({
      navToggle:!preState.navToggle
    }));
  }
  handleSignUp() {
    this.handleLogInModal();
    this.setState({
      mainPage:'signUp'
    });
  }
  handleBrandClick() {
    this.setState({
      mainPage:'home',
      tagFilter: null
    });
  }
  handleContactClick() {
    this.setState({
      mainPage:'contact'
    });
  }
  // article page
  handleArticleClick(id) {
    this.setState({
      mainPage:'article',
      articleId: id
    });
  }
  handleCommentChange(value) {
    this.setState({
      commentText: value
    });
  }
  handleCommentClick(articleId, content) {
    if (content === '') {
      return ;
    }
    const timeNow = new Date().toLocaleString() + new Date().getMilliseconds();
    const user = this.state.currentUser;
    const name = user.id? user.firstname+' '+user.lastname:'Anonymous';
    this.setState((preState) => ({
      commentText: '',
      commentData: preState.commentData.concat([{
        "articleId":articleId,
        "user": name || 'Anonymous' ,
        "time": timeNow,
        "content": content
      }])
    }));
  }
  // main page
  handleTagClick(id) {
    this.setState({
      mainPage:'home',
      tagFilter:id
    });
  }
  // signup page
  handleSignUpUsernameChange(val) {
    this.setState((preState) => ({
      signUpData:{
        'firstname': preState.signUpData.firstname,
        'lastname': preState.signUpData.lastname,
        'username':val,
        'password': preState.signUpData.password,
        'passwordTwo': preState.signUpData.passwordTwo,
        'email':preState.signUpData.email
      }
    }));
  }
  handleSignUpPasswordChange(val) {
    this.setState((preState) => ({
      signUpData:{
        'firstname': preState.signUpData.firstname,
        'lastname': preState.signUpData.lastname,
        'username': preState.signUpData.username,
        'password': val,
        'passwordTwo': preState.signUpData.passwordTwo,
        'email':preState.signUpData.email
      }
    }));
  }
  handleSignUpPasswordTwoChange(val) {
    this.setState((preState) => ({
      signUpData:{
        'firstname': preState.signUpData.firstname,
        'lastname': preState.signUpData.lastname,
        'username': preState.signUpData.username,
        'password': preState.signUpData.password,
        'passwordTwo': val,
        'email':preState.signUpData.email
      }
    }));
  }
  handleSignUpFNameChange(val) {
    this.setState((preState) => ({
      signUpData:{
        'firstname': val,
        'lastname': preState.signUpData.lastname,
        'username': preState.signUpData.username,
        'password': preState.signUpData.password,
        'passwordTwo': preState.signUpData.passwordTwo,
        'email':preState.signUpData.email
      }
    }));
  }
  handleSignUpLNameChange(val) {
    this.setState((preState) => ({
      signUpData:{
        'firstname': preState.signUpData.firstname,
        'lastname': val,
        'username': preState.signUpData.username,
        'password': preState.signUpData.password,
        'passwordTwo': preState.signUpData.passwordTwo,
        'email':preState.signUpData.email
      }
    }));
  }
  handleSignUpEmailChange(val) {
    this.setState((preState) => ({
      signUpData:{
        'firstname': preState.signUpData.firstname,
        'lastname': preState.signUpData.lastname,
        'username': preState.signUpData.username,
        'password': preState.signUpData.password,
        'passwordTwo': preState.signUpData.passwordTwo,
        'email': val
      }
    }));
  }
  handleSignUpSubmit() {
    // if (valid) {
      this.setState((preState) => ({
        userData: preState.userData.concat([{
          "id": preState.userData.length,
          'firstname': preState.signUpData.firstname,
          'lastname': preState.signUpData.lastname,
          'username': preState.signUpData.username,
          'password': preState.signUpData.password,
          'email': preState.signUpData.email
        }]),
        signUpData: {
          'firstname': '',
          'lastname': '',
          'username': '',
          'password': '',
          'email': ''
        },
        ifLogged:true,
        currentUser: {
          'id': preState.userData.length,
          'firstname': preState.signUpData.firstname,
          'lastname': preState.signUpData.lastname,
          'username': preState.signUpData.username,
          'password': preState.signUpData.password,
          'email': preState.signUpData.email
        },
        mainPage: 'home'
      }));

    // }
  }
  // Main Component come from ./js/main.js
  render() {
    return (
      <div>
        <Header handleBrandClick={this.handleBrandClick}
                handleHomeClick={this.handleBrandClick}
                handleContactClick={this.handleContactClick}
                handleSignUp={this.handleSignUp}
                handleNavToggle={this.handleNavToggle}
                handleLogInModal={this.handleLogInModal}
                navToggle={this.state.navToggle}
                modalToggle={this.state.modalToggle}
                handleModalCloseClick={this.handleLogInModal}
                handleLogUsernameChange={this.handleLogUsernameChange}
                handleLogPasswordChange={this.handleLogPasswordChange}
                logInData={this.state.logInData}
                handleLogInSubmit={this.handleLogInSubmit}
                ifLogged={this.state.ifLogged}
                currentUser={this.state.currentUser}/>
        <Main dataArticle={this.props.dataArticle}
              dataTag={this.props.dataTag}
              commentData={this.state.commentData}
              onCommentChange={this.handleCommentChange}
              commentText={this.state.commentText}
              handleCommentClick={this.handleCommentClick}
              mainPage={this.state.mainPage}
              handleArticleClick={this.handleArticleClick}
              articleId={this.state.articleId}
              tagFilter={this.state.tagFilter}
              handleTagClick={this.handleTagClick}
              handleSignUpUsernameChange={this.handleSignUpUsernameChange}
              handleSignUpPasswordChange={this.handleSignUpPasswordChange}
              handleSignUpPasswordTwoChange={this.handleSignUpPasswordTwoChange}
              handleSignUpFNameChange={this.handleSignUpFNameChange}
              handleSignUpLNameChange={this.handleSignUpLNameChange}
              handleSignUpEmailChange={this.handleSignUpEmailChange}
              signUpData={this.state.signUpData}
              handleSignUpSubmit={this.handleSignUpSubmit}/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Homepage dataArticle={dataArticle} dataTag={dataTag} />,
	document.getElementById('root')
);
