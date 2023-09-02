var numUserArray=[]
var c=1;
function enterNum() {
    if(numUserArray.length<5 && userInput.value<56){
        numUserArray.push(userInput.value)
        myDiv.innerHTML+=`
        <p>num${c}:${userInput.value}</p>`
        c++
    }
    else{
        alert('cant insert more then five or number bigger then 56 or smaller then 0')
    }
}
var randomNumber=Math.floor(Math.random() * 56)
console.log(randomNumber);
function showIfUserSiccess() {
    for (let i = 0; i < numUserArray.length; i++) {
        if(randomNumber==numUserArray[i]){
            myDiv.innerHTML+=`
            <p>good!</p>`
            return
        }  
    }
    myDiv.innerHTML+=`
    <p>bad!</p>`
}