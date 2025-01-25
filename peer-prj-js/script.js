const aboutButton = document.querySelector('.About-us');
const homeButton = document.querySelector('.home-button');
const contactButton = document.querySelector('.Contact-us');
const homePage= document.querySelector('.intro-content');
const contactPage= document.querySelector('.contact-us');
const aboutPage= document.querySelector('.about');
aboutButton.addEventListener('click', () => {
    homePage.innerHTML='';
    contactPage.innerHTML='';
    document.querySelector('.about').innerHTML=`<div class="title">ABOUT US</div>
            <div class="description">Welcome to out company! We are the team with passionate invidual dedicated to providing excellent service/product to our customers. Our mission is to <strong>provide the best experience</strong> for people traveling to different destinations around the world.</div>
            <div class="our-team">
                <div class="title-team">OUR TEAM</div>
                <div class="container-card">
                    <div class="card">
                        <div class="name">Doan Hoang Thien Phu</div>
                        <div class="description-team">I'm a student. Now I'm learning in Danang University of Technology, Danang</div>
                        <div class="role">CEO</div>
                    </div>
                    <div class="card">
                        <div class="name">Nguyen Thi Thuy</div>
                        <div class="description-team">I'm a student. Now I'm learning in Danang University of Technology, Danang</div>
                        <div class="role">Tech Lead</div>
                    </div>
                </div>
            </div> `;
});
contactButton.addEventListener('click', () => {
    homePage.innerHTML='';
    aboutPage.innerHTML='';
    contactPage.innerHTML=` <div class="title">CONTACT US</div>
            <div class="form">
                <form action="">
                    <div class="input-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name">
                    </div>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div class="input-group">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div> `;
});
homeButton.addEventListener('click', () => {
    aboutPage.innerHTML='';
    contactPage.innerHTML='';
    homePage.innerHTML=`<div class="title">EXPLORE</div>
            <div class="title">DREAM</div>
            <div class="title">DESTINATION</div>


            <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro quasi nam dolorem iste aut excepturi sed, exercitationem aperiam sequi labore ipsa placeat dolorum, architecto fuga maxime minus minima ut!</div>`;
});

let data=[];
async function fetchData(){
    const response = await fetch('./data.json');
    data = await response.json();
}
fetchData();
function displayData(data){
    const htmlString = data.map((item) => {
        return `
        <div class="card-des">

                <img src="${item.image}" alt="">
                
                <div class="content">
                    <div class="title">${item.name}</div>
                    <div class="description">${item.description}</div>
                </div>
            </div>
        `;
    }).join('');
    document.querySelector('.container-result').innerHTML = htmlString;
}
const searchBar = document.querySelector('#search');
searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value;
    homeButton.click();
    if(searchString === ''){
        document.querySelector('.container-result').innerHTML = '';
        return;
    }
    console.log(searchString);
    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchString.toLowerCase());
    });
    displayData(filteredData);


});