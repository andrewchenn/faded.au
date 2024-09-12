function loadScreen(){
    const loadingScreen = document.getElementById("loading")
    loadingScreen.style.display = 'none'
}

function showSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    const body = document.querySelector('body')
    const menuButton = document.querySelector('.fa-bars')
    sidebar.style.left = '0'
    body.style.overflowY = 'hidden'
}
function closeSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    const closeButton = document.querySelector('.fa-bars')
    const body = document.querySelector('body')
    sidebar.style.left = '-100%'
    body.style.overflowY = 'auto'
}
function animateText2(){
    const rightToLeft = document.querySelector('.discoverText');
    const body = document.querySelector('body')
    if (window.scrollY > 100){
    rightToLeft.style.transform = 'translate(-50px)'
    rightToLeft.style.transition = 'transform 2s'
    }
}
window.addEventListener('scroll', animateText2);
function animateText1(){
    const leftToRight = document.querySelector('.discoverImage');
    const body = document.querySelector('body')
    if (window.scrollY > 100){
    leftToRight.style.transform = 'translate(50px)'
    leftToRight.style.transition = 'transform 2s'
    }
}
window.addEventListener('scroll', animateText1  );
function showSidebarContact(){
    const sidebar = document.querySelector('.mobileSidebarContact');
    const body = document.querySelector('body')
    const menuButton = document.querySelector('.fa-message')
    sidebar.style.right = '0'
    body.style.overflowY = 'hidden'
}
function closeSidebarContact(){
    const sidebar = document.querySelector('.mobileSidebarContact');
    const closeButton = document.querySelector('.fa-message')
    const body = document.querySelector('body')
    sidebar.style.right = '-100%'
    body.style.overflowY = 'auto'
}
function stopWhitespace(){
    const menu = document.querySelector('.menu')
    const logo = document.querySelector(".logo")
    if (window.scrollY > 650){
        menu.style.position = 'fixed'
        menu.style.background = 'black'
        logo.style.display = "block"
    }
    else{
        menu.style.position = 'absolute'
        menu.style.background = 'rgba(0,0,0,0.0)'
        logo.style.display = "none"
    }
};
window.addEventListener('scroll', stopWhitespace);

function menuScroll(scroll) {
    closeSidebar()
    window.scroll({
        top: scroll,
        behavior: 'smooth',
    })
  }


