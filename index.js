let key = "cee6a8e965f548b2b524d3ae9b0d816f";
let cardData = document.querySelector(".cardData");
let searchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("searchType");


const getData = async (input) => {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await response.json();

    searchType.innerText = "Search Results : " + input ;
    inputData.value = "";
    cardData.innerHTML = "";

    jsonData.articles.forEach(function (article) {

        let divs = document.createElement("div");
    divs.classList.add("card");

    cardData.appendChild(divs);
    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            `
            divs.addEventListener("click", function () {
                window.open(article.url);
            })
    })

    
}

window.addEventListener("load", function () {
    getData("india");
})

searchBtn.addEventListener("click", function () {
    let inputText = inputData.value;
    getData(inputText);
})

function navClick(nav) {
    if(nav == "politics"){
        document.getElementById("politics").style.color = "#6495ED";
        document.getElementById("sports").style.color = "#000";
        document.getElementById("technology").style.color = "#000";
        document.getElementById("movies").style.color = "#000";
        document.getElementById("health").style.color = "#000";
        document.getElementById("lifestyle").style.color = "#000";
    }
    if(nav == "sports"){
        document.getElementById("politics").style.color = "#000";
        document.getElementById("sports").style.color = "#6495ED";
        document.getElementById("technology").style.color = "#000";
        document.getElementById("movies").style.color = "#000";
        document.getElementById("health").style.color = "#000";
        document.getElementById("lifestyle").style.color = "#000";
    }
    if(nav == "technology"){
        document.getElementById("politics").style.color = "#000";
        document.getElementById("sports").style.color = "#000";
        document.getElementById("technology").style.color = "#6495ED";
        document.getElementById("movies").style.color = "#000";
        document.getElementById("health").style.color = "#000";
        document.getElementById("lifestyle").style.color = "#000";
    }
    if(nav == "movies"){
        document.getElementById("politics").style.color = "#000";
        document.getElementById("sports").style.color = "#000";
        document.getElementById("technology").style.color = "#000";
        document.getElementById("movies").style.color = "#6495ED";
        document.getElementById("health").style.color = "#000";
        document.getElementById("lifestyle").style.color = "#000";
    }
    if(nav == "health"){
        document.getElementById("politics").style.color = "#000";
        document.getElementById("sports").style.color = "#000";
        document.getElementById("technology").style.color = "#000";
        document.getElementById("movies").style.color = "#000";
        document.getElementById("health").style.color = "#6495ED";
        document.getElementById("lifestyle").style.color = "#000";
    }
    if(nav == "lifestyle"){
        document.getElementById("politics").style.color = "#000";
        document.getElementById("sports").style.color = "#000";
        document.getElementById("technology").style.color = "#000";
        document.getElementById("movies").style.color = "#000";
        document.getElementById("health").style.color = "#000";
        document.getElementById("lifestyle").style.color = "#6495ED";
    }
    getData(nav);
}
