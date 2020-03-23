
let clickCount = 0
let moonRockElem = document.getElementById("moonRockElem")
let addRocks = 2
let pickAxe = 0
let pickAxeElem = document.getElementById("axe")
let cost = 5
let roverCost = 20
let roverCostElem = document.getElementById("roverCost")
let roverElem = document.getElementById("roverElem")
let rover = 0
let hammerCost = 10
let JackHammer = 0
let hammerElem = document.getElementById("hammerElem")
let ExcavatorCost = 15
let Excavator = 0
let excavatorElem = document.getElementById("excavatorElem")


let choices = [
  {
    name: "click",
    points: 1,
  },
  {
    name: "PickAxe",
    points: 2,
    cost: 5
  },
  {
    name: "JackHammer",
    points: 5,
    cost: 10
  },
  {
    name: "Excavator",
    points: 10,
    cost: 15
  },
  {
    name: "MoonRover",
    points: 5,
    cost: 20
  }
]


function play2(choices){
  clickCount++
  moonRockElem.innerText = clickCount.toString()
}













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


function addJackhammer(){
  if(clickCount >= hammerCost){
    clickCount-= hammerCost
    moonRockElem.innerText = clickCount.toString()
    JackHammer++
    hammerElem.innerText = JackHammer.toString()
    hammerCost++
    document.getElementById("hammerCostElem").innerText = hammerCost.toString()
    clickCount*= 3
    // addRocks+= clickCount
    // clickCount = addRocks
  }
}


function addExcavator(){
  if(clickCount >= ExcavatorCost){
    clickCount-= ExcavatorCost
    moonRockElem.innerText = clickCount.toString()
    Excavator++
    excavatorElem.innerText = Excavator.toString()
    ExcavatorCost++
    document.getElementById("excavatorCostElem").innerText = ExcavatorCost.toString()
    clickCount*= 4
    // addRocks+= clickCount
    // clickCount = addRocks
  }
}




function addRover(){
  if(clickCount >= roverCost){
    clickCount-= roverCost
    moonRockElem.innerText = clickCount.toString()
    roverCost++
    roverCostElem.innerText = roverCost.toString()
    rover++
    roverElem.innerText = rover.toString()
    roverClicked()
  }
}

function roverClicked(){
  setInterval(function (){
    clickCount+= 5
    moonRockElem.innerText = clickCount.toString()
  }, 1000)
}


