

  
 //<!--  sidenav   off-convas  left side view--//>\

function openNav() {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("myTopnav").style.marginLeft = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myTopnav").style.marginLeft= "0";
}

///---------------------------------------------------------------------
//// <!--  sidenav   off-convas  right side view-->

function openprofile() {
    document.getElementById("profile-nav").style.width = "350px";
}

function closeprofile() {
    document.getElementById("profile-nav").style.width = "0";
}


////--------------------------------end-------------------------------------
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }