
 gameboard= [,,,,,,,,]

var counter = 0;
var name = "";
var player1 = "X";
var player2 = "O";
   
function turnCounter(name){
    counter++;
    console.log(counter)
    if (counter % 2 == 0)  {var name = player2}
    else
    {var name = player1};
  
    console.log(name)
    if (counter == 9)setTimeout (function(){
        alert("Gamer OVER!!")
    }, 500)
    
    return name
}


var ButtonClass = function(button, name){
    this.button = button
    
    function checkX(){
        var xresult = [];
        let a = [0,1,2]
        let b = [3,4,5]
        let c = [6,7,8]
        let d = [0,3,6]
        let e = [1,4,7]
        let f = [2,5,8]
        let g = [0,4,8]
        let h = [6,4,2]
        
        for(let i = 0; i < gameboard.length; i++) 
           if (gameboard[i] === 'X')
               xresult.push(i);
               console.log(xresult);
           if (a.every(i => xresult.includes(i) || b.every(i => xresult.includes(i))||
               c.every(i => xresult.includes(i))|| d.every(i => xresult.includes(i))||
               e.every(i => xresult.includes(i))|| f.every(i => xresult.includes(i))||
               g.every(i => xresult.includes(i))|| h.every(i => xresult.includes(i)) )){setTimeout (function(){
                alert("X WINS!!!")
            }, 500)}
            
               }
              
   

               function checkO(){
                let oresult = [];
                let a = [0,1,2]
                let b = [3,4,5]
                let c = [6,7,8]
                let d = [0,3,6]
                let e = [1,4,7]
                let f = [2,5,8]
                let g = [0,4,8]
                let h = [6,4,2]
                
                for(let i = 0; i < gameboard.length; i++) 
                if (gameboard[i] === 'O')
                oresult.push(i);
                console.log(oresult)
                if (a.every(i => oresult.includes(i) || b.every(i => oresult.includes(i))||
                    c.every(i => oresult.includes(i))|| d.every(i => oresult.includes(i))||
                    e.every(i => oresult.includes(i))|| f.every(i => oresult.includes(i))||
                    g.every(i => oresult.includes(i))|| h.every(i => oresult.includes(i)) )){setTimeout (function(){
                        alert("O WINS!!!")
                    }, 500)}
                }
    button.addEventListener("click", function(){
       
      
         button.innerHTML=turnCounter();
         if(button == document.querySelector('#button1')){gameboard.splice(0, 1, button.innerHTML)};
         if(button == document.querySelector('#button2')){gameboard.splice(1, 1, button.innerHTML)};
         if(button == document.querySelector('#button3')){gameboard.splice(2, 1, button.innerHTML)};
         if(button == document.querySelector('#button4')){gameboard.splice(3, 1, button.innerHTML)};
         if(button == document.querySelector('#button5')){gameboard.splice(4, 1, button.innerHTML)};
         if(button == document.querySelector('#button6')){gameboard.splice(5, 1, button.innerHTML)};
         if(button == document.querySelector('#button7')){gameboard.splice(6, 1, button.innerHTML)};
         if(button == document.querySelector('#button8')){gameboard.splice(7, 1, button.innerHTML)};
         if(button == document.querySelector('#button9')){gameboard.splice(8, 1, button.innerHTML)};
         button.disabled = true;

          

        
         console.log(gameboard)
         
         checkX()
         checkO()
    })}
   

button1 = new ButtonClass(document.querySelector('#button1'))
button2 = new ButtonClass(document.querySelector('#button2'))
button3 = new ButtonClass(document.querySelector('#button3'))
button4 = new ButtonClass(document.querySelector('#button4'))
button5 = new ButtonClass(document.querySelector('#button5'))
button6 = new ButtonClass(document.querySelector('#button6'))
button7 = new ButtonClass(document.querySelector('#button7'))
button8 = new ButtonClass(document.querySelector('#button8'))
button9 = new ButtonClass(document.querySelector('#button9'))