class Person{

     constructor(fname, lName, age)
  {
       this._firstName= fname; 
        this._lastName = lName;
        this._ages = age;
    }
    
  get firstName(){
    return this._firstName;
}
get lastName(){
    return this._lastName
}
 get age(){
   return this._ages;
 }
}

  

// const creatPerson = (fname, lname, age)=>{
// const obj1 = new Person(fname, lname, age);
//  let sim =document.getElementById('demo')
//   return sim.innerHTML= `Hello, ${obj1.firstName}  ${obj1.lastName}! You are ${obj1.age} old`;


 // element.addEventListener("click", 
 // creatPerson('sim','word', 45)
// console.log(element)
 // element.onclick = creatPerson(firstName, lastName, age);
const element = document.getElementById("myBtn")
// console.log(firstName);
const creatobj = function(){
  
let firstn=document.querySelector('#fname');
let first = firstn.value;
let lastn =document.querySelector('#lname');
let last = lastn.value;
let agew =document.querySelector('#age');
let age = agew.value;
  let obj2 = new Person(first, last, age);
  
    document.getElementById('demo').innerHTML ="Hello" + " " + obj2.firstName + " " + obj2.lastName+ "!" + "You are"+ " "+ obj2.age + " "+ "years old"   ;
  
 
}
element.onclick = creatobj;
