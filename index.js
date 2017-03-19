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

const fakecommentData = [
  {
    "articleId":1,
    "user": "Joker Yu",
    "time": "3/18/2017, 9:39:42 AM",
    "content": "interesting!"
  },
  {
    "articleId":2,
    "user": "Joker Yu",
    "time": "23/18/2017, 9:39:21 AM",
    "content": "interesting!!"
  },
  {
    "articleId":3,
    "user": "Joker Yu",
    "time": "3/18/2017, 9:39:40 AM",
    "content": "interesting!!!"
  },
  {
    "articleId":4,
    "user": "Joker Yu",
    "time": "3/18/2017, 9:39:39 AM",
    "content": "interesting!!!!"
  },
  {
    "articleId":1,
    "user": "Joker Yu",
    "time": "3/18/2017, 9:39:41 AM",
    "content": "interesting!!!!!"
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
      <span>&copy; 2016 Wenjia Yu
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
        currentUser: null
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
          this.handleLogInModal();
        } else {
          // password wrong
        }
      } else {
        // no such an user
      }
    });
    console.log(this.state.ifLogged);
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
    console.log(user);
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
        'email': val
      }
    }));
  }
  handleSignUpSubmit() {
    if (valid) {
      this.setState((preState) => ({
        commentData: preState.commentData.concat([{
          "id": preState.commentData.length,
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
        }
      }));
    }
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
