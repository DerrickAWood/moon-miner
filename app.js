
let clickCount = 0
let moonRockElem = document.getElementById("moonRockElem")
let addRocks = 2
let pickAxe = 0
let pickAxeElem = document.getElementById("axe")
let cost = 5
let roverCost = 20
let roverElem = document.getElementById("buy-axe")
let rover = 0

let choices = [
  {
    name: "click",
    points: 1,
    num: 1
  },
  {
    name: "PickAxe",
    points: 2,
    num: 1
  },
  {
    name: "JackHammer",
    points: 5,
    num: 1
  },
  {
    name: "MoonRover",
    points: 10,
    num: 1
  }
]


function play(){
  clickCount++
  moonRockElem.innerText = clickCount.toLocaleString()
}



function addTool(){
  if(clickCount >= cost){
    clickCount-= cost
    moonRockElem.innerText = clickCount.toString()
    pickAxe++
    pickAxeElem.innerText = pickAxe.toString()
    cost++
    document.getElementById("cost").innerText = cost.toString()
    addRocks+= clickCount
    clickCount = addRocks
  }
}

function addRover(){
  if(clickCount >= roverCost){
    clickCount-= roverCost
    moonRockElem.innerText = clickCount.toString()
    roverCost++
    roverElem.innerText = rover.toString()
    // not working //
  }
}



