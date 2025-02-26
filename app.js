

// var number = 1.642424278148
// var roundNumber = Math.round(number)
// console.log(roundNumber,"roundNumber")
// var cellNumber = Math.ceil(number)
// console.log(cellNumber,"cellNumber")
// var randomNumber = Math.random()
// console.log(randomNumber,"randomNumber")
// var number = "5.5430812"
// var parsInit = parseInt(number)
// console.log(parsInit)
// var parsfloat = parseFloat(number)
// console.log(parsfloat)
// console.log(Number(number))
// var number = 54.242387
// console.log(number.toFixed(2))

// var firstName = "essa"
// var forSlice = firstName.slice(0, 4);
// console.log(forSlice)
// var forChar = firstName.charAt(0)
// console.log(forChar)
// var forReplace = firstName.replace("essa","khatri")
// console.log(forReplace)
// var number = +prompt("suggest a number")
// var forRoundNumber = Math.round(number)
// // console.log(forRoundNumber)
// var forCellNumber = Math.ceil(number)
// console.log(forCellNumber)
// var forRandomNumber = Math.random()
// console.log(forRandomNumber)

// var currentdate = new Date()
// var Miliseconds = currentdate.getTime()
// console.log(Miliseconds,"Miliseconds")
// var Seconds = Miliseconds/1000
// console.log(Seconds,"Seconds")
// var Minutes = Seconds/60
// console.log(Minutes,"Minutes")
// var hour = Minutes/60
// console.log(hour,"hour")
// var day = hour/24
// console.log(day,"day")
// var roundingDays = day.toFixed(2)
// console.log(roundingDays,"roundingDays")

// var days = ["sunday","manday","tuesday","wednesday","thursday","friday","saturday"]
// var currentDay = currentdate.getDay()
// console.log(days[currentDay])

// var months = ["january","febrary","march","april","may","june","july","augest","september","octuber","november","december"]
// var currentMonth = currentdate.getMonth()
// console.log(months[currentMonth])

// console.log("today is",currentdate.getDate(),months[currentMonth],currentdate.getFullYear(),days[currentDay])

// for(var i = 0;i<days.length;i++){
//     if(i===currentDay){
//         console.log(days[i])
//     }
// }

// for(var i=0;i<months.length;i++){
//     if(i===currentMonth){
//         console.log(months[i])
//     }
// }

// var d
// function day() {
//     console.log("duagwgeu")
// }
// day()
// day()

// function pak(asdfjio, asfgasdiu) {
//     console.log(asdfjio, asfgasdiu)
// }

// pak("figseiag", "fgas")
// pak( d = new Date(),d.getHours())

// function retre(){
//     var f = "dagwg"
//     return f
// }

// console.log(retre()


// function functionName() {
//     console.log("pakistan")
// }

// functionName()

// function mane() {
//     var pak = "pakistan"
//     return pak
// }
// console.log(mane())

// var promptData = prompt("")
// switch (promptData) {
//     case "man":
//         alert("manday")
//         break
//     case "tue":
//         alert("tuesday")
//         break
//     case "wed":
//         alert("wednesday")
//         break
//     case "thu":
//         alert("thursday")
//         break
//     case "fri":
//         alert("friday")
//         break
//     default:
//         alert("default")
// }

// function Button(er){
//     alert("pak")
// }

// function OnSubmitButton(){
//     var inputData = document.getElementById("myinput")
//     console.log(inputData.value)
// }

// var paragraph = document.getElementById("lorem")
// function SeeMore(){
//     paragraph.innerHTML=paragraph.innerHTML+"essa "
//     paragraph.style.color="blue",paragraph.style.backgroundColor="black"
//     paragraph.className=""
// }
// function EmailPassword(){
//     var email = document.getElementById("enter_email")
//     var password = document.getElementById("enter_password")
//     var error1 = document.getElementById("error1")
//     var error2 = document.getElementById("error2")
//     if(email==""){
//         ("please enter your email and password")
//     }
// }

// var mainChild = document.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML
// var mainChild2 = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerHTML
// console.log(mainChild,"\n")
// console.log(mainChild2,"\n")
// console.log(document.getElementsByTagName("div"))

// var mainchild = document.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1]
// console.log(mainchild)

// var paragraph = document.getElementById("paragraph").childNodes
// console.log(paragraph)

// var parantDiv = document.getElementById("paragraph").childNodes
// console.log(parantDiv,"childNodes")
// var parantDiv1 = document.getElementById("paragraph").children
// console.log(parantDiv1,"children")
// var parantDiv2 = document.getElementById("paragraph").lastChild
// console.log(parantDiv2, "last child")
// var parantDiv3 = document.getElementById("paragraph").firstChild
// console.log(parantDiv3, "first child")
// var parantDiv4 = document.getElementById("paragraph").firstElementChild
// console.log(parantDiv4, "first elment")
// var parantDiv5 = document.getElementById("paragraph").lastElementChild
// console.log(parantDiv5, "last element")

// var d = document.getElementById("humpty");
// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//     if (d.childNodes[i].nodeType === 1) {
//         pCounter++;
//     }
//     if (pCounter === 2) {
//         d.childNodes[i].innerHTML = "All his men.";
//     }
// }

// var data = document.getElementById("humpti")
// var dcount = 0
// for(var i = 0;i<data.childNodes.length;i++){
//     if(data.childNodes[i].nodeType===1){
//         dcount++
//     }
//     if(dcount===2){
//         data.childNodes[i].innerHTML="All his men."
//     }
// }

var kidNode = document.getElementById("humpty")
var pNode = kidNode.parentNode
console.log(pNode, "parent")
var nSib = kidNode.nextSibling
console.log(nSib, "next sibling")
var pSib = kidNode.previousSibling
console.log(pSib, "previous sibling")
var nodeName = kidNode.nodeName
console.log(nodeName, "node name")
