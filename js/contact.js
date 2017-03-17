const React = require('react');

class CardName extends React.Component {
  render() {
    return (
      <h1>Wenjia Yu</h1>
    );
  }
}

class CardAddress extends React.Component {
  render() {
    return (
      <p><i className="fa fa-map-marker"></i> Beijing, China</p>
    );
  }
}

class CardEmail extends React.Component {
  render() {
    return (
      <p><i className="fa fa-envelope-o"></i>{'ywjmpa@gmail.com'}</p>
    );
  }
}

class CardSocialContact extends React.Component {
  render() {
    return (
      <div className="social-contact">
        <a href='#'><i className="fa fa-linkedin-square"></i></a>
        <a href='mailto:somnus.yuwenjia@foxmail.com'><i className="fa fa-google"></i></a>
        <a className="github" href="https://github.com/ywjmpa"><i className="fa fa-github"></i></a>
      </div>
    );
  }
}

class ContactCard extends React.Component {
  render() {
    return (
      <section className='contact-card'>
        <img src="http://99pcwallpapers.com/wp-content/uploads/Black-Wallpaper-For-PC.jpg"
        alt="" />
        <CardName />
        <CardAddress />
        <CardEmail />
        <CardSocialContact />
        <br />
        <button type="button" name="button">Contact</button>
      </section>
    );
  }
}

module.exports = {
  contactCard: ContactCard
}
