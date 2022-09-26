var heading = document.createElement("h1");
heading.setAttribute("class","text-center text-primary");
heading.innerText="Weather API";
document.body.append(heading);

fetch("https://restcountries.com/v3.1/all").then(function(data){
    return data.json();
}).then(function(countryData){
      var div = document.createElement("div");
      div.setAttribute("class","container");
      var row = document.createElement("div");
      row.setAttribute("class","row");
    //   row.style.alignItems = "center";
      div.append(row);
    //   div.style.height ="100px";
    //   div.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";

     countryData.forEach(function(country){
        var card = document.createElement("div");
        card.setAttribute("class"," card card-design text-white col-xl-3 col-lg-4 col-md-4 col-sm-12 m-4 p-0");
        row.appendChild(card);

      var cardHeader = document.createElement("div");
      cardHeader.setAttribute("class","card-header bg-dark text-white d-flex justify-content-center");
      cardHeader.innerHTML = country.name.common;
      card.append(cardHeader);

      var cardBody = document.createElement("div");
      cardBody.setAttribute("class","card-body p-3 card-design");
      cardBody.innerHTML = `<img class="mx-auto d-block" src= ${country.flags.png} height = '90' width='200'>`

      if(country.capital){
        var capitalText = document.createElement("p");
      capitalText.setAttribute("class","text-center");
      capitalText.innerText = `Capital : ${country.capital}`;
      cardBody.append(capitalText);
      }
        var RegionText = document.createElement("p");
        RegionText.setAttribute("class","text-center");
        RegionText.innerText = `Region : ${country.region}`;
        cardBody.append(RegionText);
        card.append(cardBody);


      var button = document.createElement("button");
      button.setAttribute("type","button");
      button.setAttribute("class","btn btn-primary btn-sm text-white");
      button.addEventListener("click",function (){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=6e1752da63232595e530480afe988233`)
        .then(function(resp) { return resp.json() })
        .then(function(climate){
            alert(`The temperature of ${country.name.common} is ${climate.main.temp}`);
          
        }).catch(function (error){
          alert("weather report not found");
        })
      })
      button.innerText = "Click for weather";
      card.append(button);

     });
      
      document.body.append(div);
      
}).catch(function(error){
    console.error("error");
})


// function showWeather(){
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryData.name.common}&appid=6e1752da63232595e530480afe988233`)
//   .then(function(resp) { return resp.json() })
//   .then(function(){
//     console.log()
//   })
// }

// background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,118,9,1) 100%, rgba(0,212,255,1) 100%);














// .then(function(countryList){
//     var ul = document.createElement("ul");
//     countryList.forEach(function(country){
//         var li = document.createElement("li");
//         li.innerText = country.name.common;
//         ul.append(li);
//     })
//     document.body.append(ul);
// }).catch(function(error){
//     console.error("error");
// })