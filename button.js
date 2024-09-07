
        document.getElementById("button").addEventListener("mouseover", mouseOver);
        document.getElementById("button").addEventListener("mouseout", mouseOut);
        
        
        function mouseOver() 
        {
          document.getElementById("button").style.backgroundColor = "yellow";
          document.getElementById("button").style.color = "white";
          document.body.style.backgroundColor="red";
        }
        
        function mouseOut() {
          document.getElementById("button").style.backgroundColor = "orange";     
          document.getElementById("button").style.color = "green";
          document.body.style.backgroundColor="black";
        }
  