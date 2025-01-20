const app=document.querySelector(".app");
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
                    app.innerHTML=("Some thing went wrong");    
                    }            
            )

        }
    )
}
let offset=0;
const limit=5;

let data=[];

fetchPromise(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
.then(
    function (value){
        app.innerHTML=' ';
        console.log(value.results);
        
    }
)
