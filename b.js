// === GLOBAL VARIABLES ===
let isLoggedIn = false;
const loginBox = document.querySelector('.login-box');
const menuSection = document.querySelector('.menu-section');
const videosSection = document.querySelectorAll('.video-section');
const reelsSection = document.querySelector('.reels-section');
const logoutBtn = document.querySelector('.logout');
const darkToggle = document.querySelector('#darkToggle');

// === LOGIN SYSTEM ===
function login(username,password){
  if(username === "user" && password === "1234"){
    isLoggedIn = true;
    loginBox.style.display = 'none';
    menuSection.style.display = 'block';
    videosSection.forEach(v => v.style.display = 'block');
    reelsSection.style.display = 'block';
    localStorage.setItem('loggedIn',true);
  } else {
    document.querySelector('#error').innerText = "Invalid username or password!";
  }
}

document.querySelector('#loginBtn').addEventListener('click',()=>{
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  login(username,password);
});

// === LOGOUT SYSTEM ===
logoutBtn.addEventListener('click',()=>{
  isLoggedIn = false;
  loginBox.style.display = 'block';
  menuSection.style.display = 'none';
  videosSection.forEach(v => v.style.display = 'none');
  reelsSection.style.display = 'none';
  localStorage.removeItem('loggedIn');
});

// === DARK/LIGHT MODE ===
darkToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});

// === VIDEO CONTROLS ===
document.querySelectorAll('video').forEach(video=>{
  const playBtn = video.parentElement.querySelector('.play');
  const pauseBtn = video.parentElement.querySelector('.pause');
  const replayBtn = video.parentElement.querySelector('.replay');
  const speedSelect = video.parentElement.querySelector('.speed');

  playBtn.addEventListener('click',()=>video.play());
  pauseBtn.addEventListener('click',()=>video.pause());
  replayBtn.addEventListener('click',()=>{
    video.currentTime=0;
    video.play();
  });
  speedSelect.addEventListener('change',(e)=>{
    video.playbackRate = parseFloat(e.target.value);
  });
});

// === REELS SCROLLING ===
const reels = document.querySelector('.reels-carousel');
document.querySelector('#nextReel').addEventListener('click',()=>{
  reels.scrollBy({left:320,behavior:'smooth'});
});
document.querySelector('#prevReel').addEventListener('click',()=>{
  reels.scrollBy({left:-320,behavior:'smooth'});
});

// === BADGES ANIMATION ===
const badges = document.querySelectorAll('.badge');
badges.forEach(badge=>{
  badge.addEventListener('mouseenter',()=>{
    badge.style.transform = 'scale(1.2)';
    badge.style.transition='0.3s all';
  });
  badge.addEventListener('mouseleave',()=>{
    badge.style.transform = 'scale(1)';
  });
});

// === LOCAL STORAGE LOGIN CHECK ===
window.addEventListener('load',()=>{
  if(localStorage.getItem('loggedIn')){
    isLoggedIn = true;
    loginBox.style.display = 'none';
    menuSection.style.display = 'block';
    videosSection.forEach(v => v.style.display = 'block');
    reelsSection.style.display = 'block';
  } else {
    loginBox.style.display = 'block';
    menuSection.style.display = 'none';
    videosSection.forEach(v => v.style.display = 'none');
    reelsSection.style.display = 'none';
  }
});

// === ADDITIONAL EFFECTS ===
function glowEffect(el){
  el.style.boxShadow='0 0 50px #00ffea,0 0 100px #00ffea inset';
}

document.querySelectorAll('.menu-link,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>glowEffect(el));
  el.addEventListener('mouseleave',()=>el.style.boxShadow='none');
});