const toggleArrow = document.getElementById('myDropdown')
const btnTweet = document.querySelector('.bar')
const btnClose = document.getElementById('close')
const menu = document.querySelector('.nav')
const toggleTweet = document.getElementById('logToggle')

btnTweet.addEventListener('click', onTweetClick);

function onTweetClick() {
  menu.classList.remove('hidden');
}

btnClose.addEventListener('click', onCloseClick);

function onCloseClick() {
  menu.classList.add('hidden');
}

function toggleBtn() {
  toggleArrow.classList.toggle("show");
}

function toggle() {
  toggleTweet.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}