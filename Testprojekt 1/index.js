

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if(rawFile.readyState === 4)  {
        if(rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          console.log(allText);
         }
      }
    }
    rawFile.send(null);
  }

window.alert("hi");

const checkbox = document.getElementById("checky");

window.alert(readTextFile("file://C:/Code/Git hub/fake werwolf/w/Testprojekt 1/checkbox.log"));