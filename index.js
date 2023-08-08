function renameH1(idEl, textContent){
  if(document.getElementById(idEl).classList.contains('active')){
    document.getElementById('nameOfBlock').textContent = textContent;
  }
}

function menu(evt, idBlock) {

  const mainContent = document.getElementsByClassName("main-content");
  for (let i = 0; i < mainContent.length; i++) {
    mainContent[i].style.display = "none";
  }

 const menuLink = document.getElementsByClassName("menu-link");
  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].className = menuLink[i].className.replace(" active", "");
  }

  document.getElementById(idBlock).style.display = "block";
  evt.currentTarget.className += " active";

  renameH1('butt-about','About me');
  renameH1('butt-skills','Skills');
  renameH1('butt-project','Project');
  renameH1('butt-contact','Contact me');
  renameH1('butt-resume','resume');
  
}
document.getElementById("butt-about").click();