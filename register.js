//object literal 
let petSalon = {
    name:"The Fashion Pet",
    adress:{
        street:"Av. Universidad",
        number:"7250",
        zip:"22900"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm",
    },
    pets:[           
    ] 
}
function Pet(name,age,gender,service,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
}
function register(){
    console.log("Registering");
    //get the vaules from the inputs
    let inputName = document.
    getElementById("txtName").value;
    let inputAge = document.
    getElementById('txtAge').value;
    let inputGender = document.
    getElementById("txtGender").value;
    let inputBreed = document.
    getElementById("txtBreed").value;
    let inputService = document.
    getElementById("txtService").value;
    //cretaing the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    console.log(petSalon.pets)
    //push the objects
    petSalon.pets.push(newPet);
    //display the pets array on the console
}
//pushing pets into the pets array
//creating pets using contructor
function init(){
let p1 = new Pet("Tupac",60,"Male","Dane","Bath");
let p2 = new Pet("Biggie",50,"Male","Pit","Trim");
let p3 = new Pet("Nipsey",70,"Male","Mixed","Nail Clipping");
let p4 = new Pet("Simba",80,"Male","duck","Trim");
let p5 = new Pet("Snoop",90,"Male","duck","Bath");
petSalon.pets.push(p1,p2,p3,p4,p5);
console.log(petSalon.pets);
displayPetCards()
}




window.onload=init; //waits for render th HTML





//document.getElementById("title").innerHTML=petsalon.name;//