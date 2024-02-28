var overlay=document.querySelector(".overlay")
 var popupbox=document.querySelector(".popup")

        function show()
        {   overlay.style.display="block"                   // " to show the back-ground color of popup  ""       
            popupbox.style.display="block"                  //  to show the popup area
        }

        function closepopup()
        {
            overlay.style.display="none"
            popupbox.style.display="none"
        }