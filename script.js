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
function showSidebarContact(){
    const sidebar = document.querySelector('.mobileSidebarContact');
    const body = document.querySelector('body')
    const menuButton = document.querySelector('.fa-message')
    sidebar.style.right = '0'
    menuButton.style.color = 'black'
    body.style.overflowY = 'hidden'
}
function closeSidebarContact(){
    const sidebar = document.querySelector('.mobileSidebarContact');
    const closeButton = document.querySelector('.fa-message')
    const body = document.querySelector('body')
    sidebar.style.right = '-100%'
    closeButton.style.color = 'white'
    body.style.overflowY = 'auto'
}
function stopWhitespace(){
    const menu = document.querySelector('.menu')
    if (window.scrollY > 5){
        menu.style.position = 'fixed'
    }
    else{
        menu.style.position = 'relative'
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

// set up text to print, each item in array is new line
var aText = new Array(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minus eveniet, fuga dignissimos nisi qui perferendis, ullam eaque aperiam incidunt tenetur asperiores non repellat."
    );
    var iSpeed = 500; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
        if (window.scrollY > 460){
            sContents =  ' ';
            iRow = Math.max(0, iIndex-iScrollAt);
            var destination = document.getElementById("typedtext");
            
            while ( iRow < iIndex ) {
            sContents += aText[iRow++] + '<br />';
            }
            destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
            if ( iTextPos++ == iArrLength ) {
            iTextPos = 0;
            iIndex++;
            if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
            }
            } else {
            setTimeout("typewriter()", iSpeed);
            }
        }
    }
    
    window.addEventListener('scroll', typewriter);

