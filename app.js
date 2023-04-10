//Question #01
function col(abc){
    
    return function(ret){
        console.log(ret+abc);
    };
};

let innerFunc = col(5);
innerFunc(10);

//Question #02
const searchArray = () => {
    let seaArr = [9,8,6,5];
    let arrValue = 6;
    if(seaArr.length === 0){
        return false;
    }else if(seaArr[0] === arrValue){
        return true;
    }
    else{
        return seaArr.slice(1),arrValue;
    }
}
console.log(searchArray());

//Question #03
const newPara = (text) =>{
    let para = document.createElement("p");
    para.textContent = text;
    document.body.appendChild(para);

};
newPara("JavaScript is a best Programming Language");

//Question #04
const newList = (list) => {
    let unOrder = document.getElementById("list")
    let myList = document.createElement("li");
    myList.textContent = list;
    unOrder.appendChild(myList);

}
newList("My List is Here");

//Question #05
function myColor(para,color) {
     para = document.getElementById("para");
    para.style.backgroundColor = color;
}
myColor(para,"crimson");

//Question #06
let myObj = {
    name: "Abdul Moiz",
    course:"JavaScript"
};

const myLocal = (key,val) =>{
    localStorage.setItem(key,JSON.stringify(val))
};
myLocal("Student",myObj);

//Question #07
const myGet = (key) => {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value): null;
}
let newObj = myGet("Student");
console.log(newObj);

//Question #08
function saveObjectToLocalStorage(obj) {
    // Save each property to localStorage
    for (const prop in obj) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
    
    // Retrieve the object from localStorage and return it as a new object
    const newObj = {};
    for (const prop in obj) {
      newObj[prop] = JSON.parse(localStorage.getItem(prop));
    }
    return newObj;
  }
  const Obj = { name: 'Luke Wright', age: 10 };
  const retrievedObj = saveObjectToLocalStorage(Obj);
  console.log(retrievedObj);
    