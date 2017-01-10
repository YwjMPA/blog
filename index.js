const React = require('react');
const ReactDOM = require('react-dom');

// header
function Header() {
  return (
    <header>
      <div className="nav-brand">Ywj</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Protfolio</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <div className="nav-user">Log in</div>
    </header>
  )
}
// body
class Article extends React.Component {
  render() {
    return (
      <section>Article</section>
    );
  }
}
class Archives extends React.Component {
  render() {
    return (
      <section>Archives</section>
    );
  }
}
class Tags extends React.Component {
  render() {
    return (
      <section>Tags</section>
    );
  }
}
class Main extends React.Component {
  render() {
    return (
      <main>
          <Article />
          <Archives />
          <Tags />
          <hr />
      </main>
    );
  }
}
// footer
function Footer() {
  return (
    <footer>
      <span>&copy; 2016 Wenjia Yu
        <a className="github" href="https://github.com/ywjmpa">
          <i className="fa fa-github"></i>
        </a>
      </span>
    </footer>
  )
}
// home
class Homepage extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Homepage />,
	document.getElementById('root')
);
