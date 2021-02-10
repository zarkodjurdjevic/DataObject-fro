const uitvoer = document.getElementById('uitvoer');
let dataObject; 



const uitvoeren = () => {
    //deze functie voert de data uit in de div met de id uitvoer
    uitvoer.innerHTML = `<div>${dataObject[0].tijd} </div`;
    uitvoer.innerHTML += `<div>${dataObject[1].tempBuiten} </div`;
}

const starten = () => {
    //de data Array in onze dataObject
    dataObject = energieData;
    //data uitvoeren
    uitvoeren();

}

document.addEventListener('DOMContentLoaded', starten)