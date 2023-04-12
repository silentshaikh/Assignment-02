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
function str(obj) {
    
    for (let app in obj) {
      localStorage.setItem(prop, JSON.stringify(obj[app]));
    }
    
    
    let myobj = {};
    for (let app in obj) {
      myobj[app] = JSON.parse(localStorage.getItem(app));
    }
    return myobj;
  }
  let objec = { name: 'Luke Wright', course: "Angular" };
  let retObj = str(objec);
  console.log(retObj);
    