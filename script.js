
           // add dog image
            dogApiImg = fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data =>  { document.querySelector("#imgWrap").innerHTML = `<img src="${data.message}" alt="doggo">`});
