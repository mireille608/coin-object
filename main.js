let coin = {
    state: 0,
   
    flip: function() {
        let maths = Math.random();
      
      if(maths< 0.5){
          console.log(0)
         this.state=0

      }else{
          this.state=1
      }
        
    
          
    
    },
     
     //console.log(coin.flip)

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
     
     
    toString: function() {
        if(this.state === 0){
            return 'head'
        }else {
            return ('Tails')

        }
        
        
    
     /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },

    
       
    toHTML: function() {
        let image = document.createElement('img');
        image.src = 'https://jamesdolata.wordpress.com/files/2009/11/quarter.jpg'
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
    

};

document.body.append(coin.toHTML());

//console.log(Math.floor(Math.random()*2))
//console.log(coin.toString())

function display20flips(){
     
    for( i =0; i<=20; i ++){
        console.log("hi")

     coin.flip()
     document.body.append(coin.toString())
    }
    
               
}  
//  uses a loop to flip the coin 20 times.Each time the
// coin flips, display the result of each flip as a string
// on the page (make use of your toString() method)
 

function display20images(){
    for(i=0; i<=20;i ++){
        console.log("my IMG")
        coin.flip()
        document.body.append(coin.toHTML());
    }
// again using a loop to flip the coin 20 times…but this
// time instead of displaying the result as a string,
//display the result of each flip as an HTML IMG element 
//on the page (make use of your toHTML() method).
}
    
    
    


coin.flip()
document.body.append(coin.toString())
display20flips()
display20images()

