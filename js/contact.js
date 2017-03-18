const React = require('react');

const CardName = (props) => {
  return (
    <h1>Wenjia Yu</h1>
  );
};

const CardAddress = (props) => {
  return (
    <p><i className="fa fa-map-marker"></i> Beijing, China</p>
  );
};

const CardEmail = (props) => {
  return (
    <p><i className="fa fa-envelope-o"></i>{'ywjmpa@gmail.com'}</p>
  );
};

const CardSocialContact = (props) => {
  return (
    <div className="social-contact">
      <a href='#'><i className="fa fa-linkedin-square"></i></a>
      <a href='mailto:somnus.yuwenjia@foxmail.com'><i className="fa fa-google"></i></a>
      <a className="github" href="https://github.com/ywjmpa"><i className="fa fa-github"></i></a>
    </div>
  );
};

const ContactCard = (props) => {
  return (
    <section className='contact-card'>
      <img src="./image/suit.jpg"
      alt="" />
      <CardName />
      <CardAddress />
      <CardEmail />
      <CardSocialContact />
      <br />
      <button type="button" name="button">Contact</button>
    </section>
  );
};

module.exports = {
  contactCard: ContactCard
}
