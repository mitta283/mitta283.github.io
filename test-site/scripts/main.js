let myVariable = 'Bob';
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/spider-im.png'){
        myImage.setAttribute('src','images/spider-im2.png');
    }else{
        myImage.setAttribute('src','images/spider-im.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('名前を聞かせておくれ');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'また来てくれたんだね、'+myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'また来てくれたんだね'+storedName;
}
myButton.onclick = function(){
    setUserName();
}
function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'やぁいらっしゃい,'+myName;
    }
}