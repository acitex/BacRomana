function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function myFunction2() {
    var x = document.getElementById("myDIVopt2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function myFunction3() {
    var x = document.getElementById("myDIVopt3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  $(".myBox").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
  

  