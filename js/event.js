// event code

let logIn = document.getElementById('logIn');
let modal = document.getElementById('modal');
let span = document.getElementsByClassName("close")[0];

logIn.addEventListener('click', function() {
    modal.style.display = 'block';
  }
);

logIn.addEventListener('touch', function() {
    modal.style.display = 'block';
  }
);


span.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};
