

let color = 'black';
let click= false;

document.addEventListener("DOMContentLoaded",function(){    //DOMContentLoaded will make our js run after the html have been -
    //execute in the browser

   // createContainer(16);
  let size = getSize();
  createContainer(size);

 document.querySelector("body").addEventListener("click",function(e){
        if (e.target.tagName != "BUTTON"){      // check to see if the element that was click is a button.-
            // if it not a button it will change the click variable value
            click = !click; //here if click is true the code will execute if click is false the code will not execute
            let draw = document.querySelector("#draw"); //grabbing p element with id draw and store it in variable draw
            if(click){
                draw.textContent =" now you can draw"; /*the code is checking to see if the value of the `click` variable is `true`.
                 If it is, the code sets the `textContent` property of the `draw` element to "now you can draw".
                 If it is not, the code sets the `textContent` property of the `draw` element to "you are not allow to draw".*/
            }else{
                draw.textContent = "you are not allow to draw";
            }
        }
 })
 

  let btn_popup = document.querySelector('#popup');
  btn_popup.addEventListener("click",function(){    //adding a click event to this button and a function is execute when the button is click
    let size = getSize();     // the value of variable size is a function call that call the function get size 
    createContainer(size);  //calling the function createContainer with parameter size.
  })

})

function createContainer(size){
    let container = document.querySelector(".container");  

    container.style.gridTemplateColumns = `repeat(${size},1fr)`;//The `gridTemplateColumns` and `gridTemplateRows` properties of an element define the grid layout of the element
    container.style.gridTemplateRows = `repeat(${size},1fr)`;//The `repeat()` function is used to repeat the grid layout across the width and height of the element.
//the `1fr` unit is used to specify that each square in the grid layout should take up 1 unit of the available space.
    let numDivs = size * size;

    for(let i = 0;i < numDivs; i++){
        let div = document.createElement("div");
       
        div.addEventListener("mouseover",colorDiv)//event mouseover is given to this element when the mouse is move  over the element the function that pass with addeventlistener is call too
        container.insertAdjacentElement("beforeend",div);//the `insertAdjacentElement()` method is used to insert the `div` element before the current element
       

    }
}

function getSize(){
    let choice = prompt("choose the size of the area to draw"); //get input from user using promp
    let messege = document.querySelector("#messege");

    if(choice == ""){  //if input is empty diplay the appropriate messege
        messege.textContent = "Please provide A Number";
    }
    else if(choice < 0 || choice > 100){ //input should be from 1 to 99
        messege.textContent = "Only number from 1 to 99 are acceptable";
    }else if(choice == String){
        messege.textContent = "Only numbers are allow to enter";
    }else{  //if input is coorect display appropriate messege
        messege.textContent = "now You can play";
    }
}


function colorDiv(){
    if(click){   

    
    if(color == "random"){    //when click on random button the random button is executed .the random button have atrribute onclick
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else{
        this.style.backgroundColor = 'black'    //other wise this is execute with the color black 
    }                                           //The `this` keyword refers to the current object. In this case, the current object is the `div` element.
}

}

function setColor(colorChoice){
     color = colorChoice;
}
     
function resetContainer(){                       
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}


const button = document.querySelector("button");
button.addEventListener("click", resetContainer);

    // trying to reset the container and give it color white but it not working try to find the solotion











    