function showSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    const menuButton = document.querySelector('.fa-bars')
    sidebar.style.left = '0'
    menuButton.style.color = 'black'
}
function closeSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    const closeButton = document.querySelector('.fa-bars')
    sidebar.style.left = '-100%'
    closeButton.style.color = 'white'
}