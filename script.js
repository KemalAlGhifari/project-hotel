function tom1(){
    document.getElementById('home').style.marginLeft="0%"
}
function tom2(){
    document.getElementById('home').style.marginLeft="-20%"
}
function tom3(){
    document.getElementById('home').style.marginLeft="-39.8%"
}
function tom4(){
    document.getElementById('home').style.marginLeft="-59.8%"
}

function load(){
    tom1()
    setTimeout(tom2, 5000)
    setTimeout(tom3, 10000)
    setTimeout(tom4, 15000)
}

setInterval(load,15000)



function geserkamar1(){
    document.getElementById('kasur1').style.marginLeft="0"
       document.getElementById('titlux').innerHTML='LUXURY'
}
function geserkamar2(){
    document.getElementById('kasur1').style.marginLeft="-20.8%"
    document.getElementById('titlux').innerHTML='JUNIOR'
}
function geserkamar3(){
    document.getElementById('kasur1').style.marginLeft="-59.8%"
    document.getElementById('titlux').innerHTML='ECONOMY'
}

