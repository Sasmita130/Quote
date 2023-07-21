const quoteE1 = document.getElementById("quote");
const authorE1 = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quoteE1.innerHTML = data.content;
    authorE1.innerHTML = data.author;
}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteE1.innerHTML + "----by" + author.innerHTML, "Tweet Window", "width=600, height=300")
}