




// function printToLogNamE() {
//     console.log(forName.value);
// }
function refreshPage() {
    location.reload()
}

function printToLogAge() {
    // var yearInputUser=
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
        <h1  onmouseover="changeToGreen()" >wellcome</h1>`
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
    myDiv.style=`color:green`
}



