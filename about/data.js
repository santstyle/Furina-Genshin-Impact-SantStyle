const myName = "Furina/Focalors";
let usia = "18";

let biodata = document.getElementById(`biodata`);
console.log(`biodata`);

function generateBiodata() {
    let generasi;
    
    if (usia > 10 && usia < 18) {
    generasi = "generasi remaja";
    } 
    else if (usia >= 18 && usia < 30) {
    generasi = "generasi dewasa"
    }     
    else if(usia >= 30) {
    generasi = "tua"
    }
    else if (usia < 10 && usia > 2) {
    generasi = "bocah"
    }
    else {
    console.log(`buset ni orang`)
    }
    return biodata.innerHTML = generasi;
}

console.log(myName);
console.log(usia);

generateBiodata(); 