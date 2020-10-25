
           // adds dog image to img element 
         let nextDog = function() {
            dogApiImg = fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data =>  { document.querySelector("#targetImg").src = data.message});
           }
      window.onload = function() {
         document.getElementById("dogButton").addEventListener("click", nextDog);
         nextDog();
      }
