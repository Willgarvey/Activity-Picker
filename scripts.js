let sunny = ["Splash Pad", "Plamman Park", "Other Parks"];
let rainy = ["Art time", "Trains", "Golf"]
let windy = ["Facetime Piha", "Watch Toy Story"]

document.addEventListener("DOMContentLoaded", function () {
    let weatherButton = document.getElementById("weatherButton");
    let selectElement = document.getElementById("condition");
    let textArea = document.getElementById("result");


        weatherButton.addEventListener("click", function () {   
            let selectedValue = selectElement.value;
            let randomElement;    
            switch (selectedValue){
                case "sunny":
                    randomElement = sunny[Math.floor(Math.random() * sunny.length)];
                    textArea.textContent = randomElement;
                    break;
                case "rainy":
                    randomElement = rainy[Math.floor(Math.random() * rainy.length)];
                    textArea.textContent = randomElement;
                    break;
                case "windy":
                    randomElement = windy[Math.floor(Math.random() * windy.length)];
                    textArea.textContent = randomElement;
                    break;
                }

        });
});