//Form
const formCharacter = document.querySelector('#selectCharacter');

//Inputs
const estado = document.getElementById('statusCharacter');
console.log(estado);
const genero = document.getElementById('genderCharacter');
console.log(genero);
const apiUrlCharacter = "https://rickandmortyapi.com/api/character/";

//Section
 const card = document.getElementById('cardCharacter');


formCharacter.addEventListener('submit', function(event){
    event.preventDefault();
    fetch(apiUrlCharacter)
        .then(function(response){
            // console.log(response);
            return response.json();

        }).then(function(respJSON) {
            console.log(respJSON);
            const personajes = respJSON.results;
            imprimirPersonajes(personajes);

        }).catch(function(error){
            console.log(error);
    })

    function imprimirPersonajes(personajes){
        card.innerHTML = '';
        let generoCharacter = genero.value;
        console.log(generoCharacter);
        let statusCharacter = estado.value;
        console.log(statusCharacter);
        let character;
        for(character of personajes){
            if(character.gender == generoCharacter && character.status == statusCharacter){
                console.log(generoCharacter);
                card.innerHTML += `
                    <p>${character.name}</p>
                    <img src="${character.image}">
                    
                `
            }
        }
        console.log(character);
        if(character.length == 0){
            card.innerHTML += `No hay tipos ${generoCharacter} y ${statusCharacter} `
        }
    }

});

{/* <section style="background-image: src="${character.image}" ; background-position: center; background-size: cover;"><p>${character.name}</p></section> */}