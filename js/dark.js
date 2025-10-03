const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {

    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode()
    }  else {
        disableDarkMode()

    }

    }

    darkmodeSwitch.addEventListener('change', () => {
        if(darkmodeSwitch.checked) {
        enableDarkMode()
    } else{
        disableDarkMode()
    }
})

    function enableDarkMode () {
    darkmodeSwitch.checked = true 
    document.documentElement.classList.add('dark')

    }
    function disableDarkMode () {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')

    }




/*Hamburger-menu*/
    function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



