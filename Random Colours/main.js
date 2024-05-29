//introducing a variable in which it contains an array of the hexadecimals.

const hexCharacter = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

//create a function to get a character from the array.
//setting the parameter to index to generate numbers from 0-15.

function getHexCharacter(index){
    return hexCharacter(index)
}

//represent colors using the RGB (Red,Green,Blue) scheme.

function genRandomColor(getHexCharacter){

    let col = "#"

    //using a for loop to iterate through the array.
    //use of Math.random() to generate random numbers from 0-15
    //use of Math.floor to ensure that the number is aan integer

    for(let i = 0; i < 6; i++){
        Math.floor(Math.random * 16)
        col += getHexCharacter(Math.floor(Math.random()* 16))
    
    }

}

//after wandering why is nothing happening,i decided to add an event listener

let btn = document.getElementById("button")

btn.addEventListener("click",(event) =>{

    const newColor = generateNewColor()
    btn.style.backgroundColor=newColor
})

