function showSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    sidebar.style.display = 'flex'
    const menuButton = document.querySelector('.toggle')
    ToggleEvent.style.display = 'none'
}
function closeSidebar(){
    const sidebar = document.querySelector('.mobileSidebar');
    sidebar.style.display = 'none'
    const closeButton = document.querySelector('.closeIcon')
    ToggleEvent.style.display = 'none'
}