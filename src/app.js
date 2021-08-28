var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,colour,count){
   if(count>0){
       for(let i=0 ; i<count;i++)
         chocolates.unshift(colour)
   }
   else{
       return `Number cannot be zero/negative`
   }
   return chocolates;
}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    remChoclates=[]
    if (number>0){
        if(chocolates.length>=number)
         {
            for(let i=0;  i<number; i++)
             remChoclates.push(chocolates.shift());
         }
        else
        {
             return `Insufficient chocolates in the dispenser`
        }
    }
    else {
        return `Number cannot be zero/negative`
    }
    
    return remChoclates;
    
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
  dispensedChoclates=[]
  if(number>0){
      if (number>chocolates.length)
        return `Insufficient chocolates in the dispenser`
       else{
           for(let i=0; i<number;i++)
            dispensedChoclates.push(chocolates.pop())
       }
    }
  else{
      return `Number cannot be zero/negative`
  }
  return dispensedChoclates;
}




//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
  dispensedChoclatesofcolor=[]
  if(number>0){
      if(number>chocolates.length)
       return `Insufficient chocolates in the dispenser`
       else{
            for(let i=0; i<number; i++)
              for (let j=0; j<chocolates.length; j++)
               if(chocolates[j]==color)
                dispensedChoclatesofcolor.push(chocolates.pop())
         }    
    }
  else {
    return `Number cannot be zero/negative`
  }
  return dispensedChoclatesofcolor;
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates,color){
    color=["green", "silver", "blue", "crimson", "purple", "red","pink"]
    noArr=[]
    for (let i=0;i<color.length;i++){
      var count=0
       for(let j=0; j<chocolates.length;j++){
           if(chocolates[j]==color[i]){
            count=count+1
           }
        noArr[i]=count
        }
    }
    return noArr.filter(Number);
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let col = chocolates.reduce(function (b,a) {
    console.log(b)
    
    if (a in b) {
    b[a]++;
    } else {
    b[a] = 1;
    }
    return b;
    }, {});
    
    let Array = chocolates.sort ((a, b) => {
    if (col[b] > col[a]) {
    return 1;
    }
    if (col[b] < col[a]) {
    return -1;
    }
    if (a > b) {
    return 1;
    }
    if (a < b) {
    return -1;
    }
    });
    console.log(Array);
    chocolates = Array;
    return chocolates;
    }


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count,Color, finalColor) {
    if (Color == finalColor) {
      return "Can't replace the same chocolates";
    } else if (count > 0) {
      for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == Color) {
          for (let j = 0; j < count; j++) {
            chocolates[i] = finalColor;
          }
        }
      }
      return chocolates;
    } else {
      return "Number cannot be zero/negative";
    }
  }

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,Color, finalColor) 
{
    var chocolates1 = [];
    let count=0

      if (Color == finalColor) 
      {
      return "Can't replace the same chocolates";
      } 
    else 
    {
      for (let i = 0; i < chocolates.length; i++) 
      {
        if(chocolates[i]==Color)
           chocolates[i] = finalColor;
           count=count+1
      }
     
    }
    
    chocolates1 = [count, chocolates];
    
    return chocolates1;
  }

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
