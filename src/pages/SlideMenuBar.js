import React from 'react';


function SlideMenu() {
    var element = document.getElementById("sidebar");
    element.classList.toggle("active");
 }

function SlideMenuBar() {
    return <div className="navbar">
    <button id="sidebarCollapse"onClick={SlideMenu} className="btn btn-info">Menu</button>
    <div className="nav ml-auto">
        Logout
</div>
</div>

}

export default SlideMenuBar;