const app=document.querySelector(".app");
const typeColors = { normal: '#A8A77A', fire: '#EE8130', water: '#6390F0', electric: '#F7D02C', grass: '#7AC74C', ice: '#96D9D6', fighting: '#C22E28', poison: '#A33EA1', ground: '#E2BF65', flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A', rock: '#B6A136', ghost: '#735797', dragon: '#6F35FC', dark: '#705746', steel: '#B7B7CE', fairy: '#D685AD' };
function fetchPromise(URL){
    return new Promise(
        function (resolve){
            fetch(URL)
            .then(
                function(response){
                    const promise=response.json();
                    resolve(promise);
                }
            )
            .catch(
                function (error){
                    console.log(error);
                    }            
            )

        }
    )
}
let offset=0;
const limit=10;

let data=[];
// let pokemonType=[];
fetchPromise(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
.then(
    function (value){
        app.innerHTML=' ';
        // console.log(value.results);
        data=value.results;
        displayPokemon(data,false);
        // render(data);
        
        
    }
)
async function displayPokemon(data, isAll) {
    const renderLimit = offset + limit;
    for (; offset < renderLimit; offset++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const idPokemon = offset + 1;
        card.innerHTML = `
            <p class="id-pokemon">#${idPokemon}</p>
            <img class="img-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png">
            <h2 class="name-pokemon">${data[offset].name}</h2>
        `;
        let typeOfPokemon = [];
        try {
            const value = await fetchPromise(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            value.types.forEach(t => typeOfPokemon.push(t.type.name));
            const typeContainer = document.createElement('div');
            typeContainer.classList.add('type-container');
            typeOfPokemon.forEach(type => {
                const typeCard = document.createElement('div');
                typeCard.classList.add('type-pokemon');
                typeCard.style.backgroundColor = typeColors[type];
                typeCard.innerText = type;
                typeContainer.appendChild(typeCard);
            });
            card.appendChild(typeContainer);
        } catch (err) {
            console.log(err);
        }
        document.querySelector('.container-pokemon').appendChild(card);
    }
    offset += limit;
}

const loadMoreButton=document.querySelector('#load-more');
loadMoreButton.addEventListener(
    'click',
    () => displayPokemon(data)
);
function render(data){
    document.querySelector('.container-pokemon').innerHTML=' ';
    data.forEach((pokemon, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        let idPokemon= pokemon.url.slice(34,-1);
        console.log(idPokemon);
        card.innerHTML = `
            <p class="id-pokemon">#${idPokemon }</p>
            <img class="img-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon }.png">
            <h2 class="name-pokemon">${pokemon.name}</h2>
        `;
        
        let typeOfPokemon=[];
        fetchPromise(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(
            function (value){
                value.types.forEach(
                    function (type){
                        typeOfPokemon.push(type.type.name);
                    }
                )
                const typeContainer=document.createElement('div');
                typeContainer.classList.add('type-container');
                typeOfPokemon.forEach(
                    function (type){
                        const typeCard=document.createElement('div');
                        typeCard.classList.add('type-pokemon');
                        typeCard.style.backgroundColor=typeColors[type];
                        typeCard.innerText=type;
                        typeContainer.appendChild(typeCard);
                    }
                )
                card.appendChild(typeContainer);
            }
        )
        document.querySelector('.container-pokemon').appendChild(card);
    });
}

// console.log(document.querySelector('#load-more'));
// console.log('hi')

//function search

const searchInput=document.querySelector('#search-input');
searchInput.addEventListener('input',function(){
    // displayPokemon(data,true);
    console.log(searchInput.value);
    loadMoreButton.style.display='none';
    const value=searchInput.value;
    let dataTemp=data
    const filteredData=dataTemp.filter(
        function (pokemon){
            return pokemon.name.includes(value);
        }
    )
    document.querySelector('.container-pokemon').innerHTML=' ';
    render(filteredData);
    if(searchInput.value===''){
        document.querySelector('.container-pokemon').innerHTML=' ';
        offset=0;
        displayPokemon(data,false);
        
        loadMoreButton.style.display='block';
    }
})




