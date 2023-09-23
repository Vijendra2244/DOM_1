let rootElement = document.getElementById("root");

let omdbi_Api_key = "8fbe97ea";
fetch("http://www.omdbapi.com/?s=matrix&apikey=8fbe97ea")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("error", err);
  });
  
  function movieData(movieDetail){
    movieDetail.forEach(element => {
    let cardDiv = document.createElement("div");
    let movieImage = document.createElement("img");
    let movieTitle  =document
    });
  }