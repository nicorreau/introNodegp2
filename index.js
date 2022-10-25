//console.log("Hello world!");
const axios = require("axios");

let urlCompleted =
    "https://api.openweathermap.org/data/2.5/weather?q=Bogota, col&appid=a928f62e35665327a1a19dfb07fe6f78";

let requestConfig = {
    url: urlCompleted,
};

let objPromesa = axios(requestConfig);

objPromesa
    .then((result) => {
        console.log(
            "La temperatura en Bogota es: " +
                (result.data.main.temp - 273.15) +
                " Grados celcius"
        );
    })
    .catch((err) => {
        console.log(err);
    });



//console.log("Hello world!");
/* const axios = require("axios");

let urlCompleted =
    "https://api.openweathermap.org/data/2.5/weather?q=Bogota, col&appid=a928f62e35665327a1a19dfb07fe6f78";

let requestConfig = {
    url: urlCompleted,
};

let objPromesa = axios(requestConfig);

objPromesa
    .then((result) => {
        console.log(
            "La temperatura en Bogota es: " +
                (result.data.main.temp - 273.15) +
                " Grados celcius"
        );
    })
    .catch((err) => {
        console.log(err);
    }); */

/* const axios = require("axios");

//console.log("Hello World");

let requestConfig1 = {
    url: "https://catfact.ninja/fact",
};

let q = "Bogota,col";
let apiKey = "a928f62e35665327a1a19dfb07fe6f78";
let completeUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    q +
    "&appid=" +
    apiKey;
//console.log(completeUrl);
let requestConfig2 = {
    url: completeUrl,
    method: "get",
};

let reqPromise1 = axios(requestConfig1);

reqPromise1
    .then(function (response) {
        console.log(response.data);
        if (response.data.length % 2 == 0) {
            let reqPromise2 = axios(requestConfig2);
            reqPromise2
                .then(function (response) {
                    console.log(response.data);
                    console.log("Datos de la respuesta");
                    console.log(
                        "La temperatura en Bogota es: " +
                            (response.data.main.temp - 273.15) +
                            " grados centigrados"
                    );
                })
                .catch(function (err) {
                    console.log(err);
                })
                .finally(function () {
                    console.log("Finally finished");
                });
        } else {
            console.log("Numero impar");
        }
    })
    .catch(function (err) {
        console.log("Error: " + err);
    });

console.log("Finalizando programa"); */
