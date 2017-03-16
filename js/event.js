// event code
(function(){
  let logBtn = document.querySelector('#logIn');
  let logModal = document.querySelector('#modal');
  let span = document.getElementsByClassName("close")[0];

  logBtn.addEventListener('click', function() {
      logModal.style.display = 'block';
    }
  );

  logBtn.addEventListener('touch', function() {
      logModal.style.display = 'block';
    }
  );


  span.onclick = function() {
    logModal.style.display = 'none';
  };

  window.onclick = function(e) {
    if (e.target == logModal) {
      logModal.style.display = 'none';
    }
  };
})();
