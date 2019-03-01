//Form
const formCharacter = document.querySelector('#selectCharacter');

//Inputs
const estado = document.getElementById('statusCharacter');
console.log(estado);
const genero = document.getElementById('genderCharacter');
console.log(genero);
let apiUrlCharacter = "https://rickandmortyapi.com/api/character/";

//Section
 const card = document.getElementById('cardCharacter');

let characterAlive = 0;
let characterDead = 0;
let characterUnknow = 0;


formCharacter.addEventListener('submit', function(event){
    event.preventDefault();

    apiIternate(apiUrlCharacter);
    card.innerHTML = '';
    function apiIternate(apiUrl){
        fetch(apiUrl)
            .then(function(response){
                console.log("response");
                console.log(response);
                return response.json();

            }).then(function(respJSON) {
                console.log("respJSON");
                console.log(respJSON.info.next);
                const personajes = respJSON.results;
                imprimirPersonajes(personajes);


                apiUrlCharacter = respJSON.info.next;
                
                if(apiUrlCharacter != ''){
                    apiIternate(apiUrlCharacter);
                } else{
                    apiUrlCharacter = "https://rickandmortyapi.com/api/character/";
                }
                
                

            }).catch(function(error){
                console.log(error);
        })
    }
    

    function imprimirPersonajes(personajes){
        

        let generoCharacter = genero.value;
        console.log(generoCharacter);
        let statusCharacter = estado.value;
        console.log(statusCharacter);
        let character;
        for(character of personajes){
            if(character.gender == generoCharacter && character.status == statusCharacter){
                console.log(generoCharacter);
                card.innerHTML += `
                    <div class="card-character">
                        <p class="name-character">Name: ${character.name}</p>
                        <p class="name-character">Ubicación: ${character.location.name}</p>
                        <p class="name-character">Especie: ${character.species}</p>
                        <p class="name-character">Lugar de Origen: ${character.origin.name}</p>
                        <img class="img-character" src="${character.image}">
                        
                    </div>
                `
            }
            switch(character.status) {
            
                case "Alive":
                    characterAlive++;
                    console.log(" Alive:",characterAlive);

                case "dead":
                    characterDead++;
                    console.log(characterDead);

                case "unknow":
                    characterUnknow++;
                    console.log(characterUnknow);
                }
            }
        console.log(character);
        if(character.length == 0){
            card.innerHTML += `No hay tipos ${generoCharacter} y ${statusCharacter} `
        }
    }

});

{/* <section style="background-image: src="${character.image}" ; background-position: center; background-size: cover;"><p>${character.name}</p></section> */}