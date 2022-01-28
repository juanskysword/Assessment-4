// const cookie = document.getElementById('fortuneButton')


// const f1 = 'A beautiful, smart, and loving person will be coming into your life' 
// const f2 = 'A faithful friend is a strong defense.'
// const f3 = 'A lifetime friend shall soon be made.'
// const f4 = 'A lifetime of happiness lies ahead of you.'
// const f5 = 'A truly rich life contains love and art in abundance.'

// fortune = { f1, f2, f3, f4, f5}

// function tell () {
//     for (let i = 0; i < fortune.length; i++){
//         let fortune[i] = randomfortune
//         console.log(randomfortune)
//     }
// }




// cookie.addEventListener('click', tell );


document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("dog").onclick = function () {
    axios.get("http://localhost:4000/api/dogs/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        document.getElementById('loadingDogImage').style.visibility="visible";
        document.getElementById('loadingDogImage').style.width = "255px";
        document.getElementById('loadingDogImage').style.height = "125px";
    });
    };

    document.getElementById("cat").onclick = function () {
        axios.get("http://localhost:4000/api/Cats/")
            .then(function (response) {
              const data = response.data;
              alert(data);
            document.getElementById('loadingCatImage').style.visibility="visible";
            document.getElementById('loadingCatImage').style.width = "150px";
            document.getElementById('loadingCatImage').style.height = "150px";
        });
        };
    
        document.getElementById("pikaEntry").onclick = function () {
            axios.get("http://localhost:4000/api/25/")
                .then(function (response) {
                  const data = response.data;
                  alert(data);
            });
            };



    function profile () {

    let pet = document.getElementById('pet')
    let breed = document.getElementById ('breed')
    let petImg = document.getElementById('petImg')

    let bodyObj = {
        pet: pet.value,
        breed: breed.value, 
        petImg: petImg.value
    }

    createPetProfile(bodyObj)
        pet.value = ''
        breed.value = ''
        petImg.value = ''
}