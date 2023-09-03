




// function printToLogNamE() {
//     console.log(forName.value);
// }
function refreshPage() {
    location.reload()
}

function printToLogAge() {
    var yearToday = new Date().getFullYear()
    console.log(yearToday);
    var dateInput = forAge.value
    console.log(dateInput);
    var makeItDate = new Date(dateInput);
    var year = makeItDate.getFullYear();
    console.log(year);
    console.log(yearToday - year);
    if (yearToday - year >= 18) {
        myDiv.innerHTML = `
        <h1  onmouseover="changeToGreen()" >wellcome</h1>
        <input  onchange="printLog() " class="firstname" type="text" placeholder="enter first name"><br>
        <input class="firstname" type="text" placeholder="enter first name"><br>
        <input class="firstname" type="text" placeholder="enter first name"><br>
        <input class="firstname" type="text" placeholder="enter first name"><br>
        <input id="lastname" type="text" placeholder="enter last name">
        <button onclick='printAllNames()'>print name with thier family</button>`
        myDiv.style = `color:blue;`
    }
    else {
        myDiv.innerHTML = `
        <p>no entry</p>
        <img src='https://phabcart.imgix.net/cdn/scdn/images/uploads/636844577374966611_7a003bk_web_600.jpg'>`
        myDiv.style = `color:red`
        setTimeout(refreshPage, 3000);
    }
}
function changeToGreen() {
    myDiv.style = `color:green`
}
function printAllNames() {
    var namesCollectionInput = myDiv.getElementsByClassName('firstname')
    var lastNameLowerCase = lastname.value.toLowerCase()
    for (let i = 0; i < namesCollectionInput.length; i++) {
        myUl.innerHTML += `
        <li class='namesList'>first name:${namesCollectionInput[i].value} lastname: ${lastname.value}</li>`
    }
    var namesCollectionList = myUl.getElementsByTagName('li')
    console.log(namesCollectionList);
    for (let j = 0; j < namesCollectionInput.length; j++) {
        var firstNameLowerCase = namesCollectionInput[j].value.toLowerCase()
        if (firstNameLowerCase[0] == lastNameLowerCase[0]) {
            namesCollectionList[j].style = `color:pink;`
        }
    }
    console.log(namesCollectionList);
}





