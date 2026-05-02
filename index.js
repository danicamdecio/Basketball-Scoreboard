let homeScore = 6
let guestScore = 7

let homeEl = document.getElementById("home-score")

function addHome1(){
    homeScore += 1
    homeEl.textContent = homeScore    
}

function addHome2(){
    homeScore += 2
    homeEl.textContent = homeScore    
}

function addHome3(){
    homeScore += 3
    homeEl.textContent = homeScore    
}

let guestEl= document.getElementById("guest-score") 

function addGuest1(){
    guestScore += 1
    guestEl.textContent = guestScore    
}

function addGuest2(){
    guestScore += 2
    guestEl.textContent = guestScore    
}

function addGuest3(){
    guestScore += 3
    guestEl.textContent = guestScore    
}