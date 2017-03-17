// event code
(function(){
  const logBtn = document.querySelector('#logIn');
  const logModal = document.querySelector('#modal');
  const modalClose = document.getElementsByClassName('close')[0];
  const navToggle = document.querySelector('.navbar-toggle');
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
  let state = false;

  navToggle.addEventListener('click', () => {
    if (!state) {
      navToggle.className += ' open';
      nav.style.display = 'flex';
      header.className='';
      state = true;
    }else {
      navToggle.className = 'navbar-toggle';
      header.className += 'navbar-close';
      setTimeout(() => { nav.style.display = 'none'; }, 1000);
      state = false;
    }
  });

  logBtn.addEventListener('click', () => {
      logModal.style.display = 'block';
    }
  );

  modalClose.onclick = () => {
    logModal.style.display = 'none';
  };

  window.onclick = (e) => {
    if (e.target == logModal) {
      logModal.style.display = 'none';
    }
  };
})();
