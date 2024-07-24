function showSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    const body = document.querySelector('body')
    const menuButton = document.querySelector('.fa-bars')
    sidebar.style.left = '0'
    menuButton.style.color = 'black'
    body.style.overflowY = 'hidden'
}
function closeSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    const closeButton = document.querySelector('.fa-bars')
    const body = document.querySelector('body')
    sidebar.style.left = '-100%'
    closeButton.style.color = 'white'
    body.style.overflowY = 'auto'
}
function discoverScroll() {
    closeSidebar()
    window.scroll({
        top: 750,
        behavior: 'smooth',
    })
  }