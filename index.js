
 var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
 
 function dwarfRollCall(dwarves){
   var array =[]
   for (var i = dwarves.length/2 ;i<dwarves.length;i*= 2){
     array.push(`${i+1}. ${dwarves[i]} `)
   }
   return array.join("")
 }




function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(a=>a.toUpperCase()+"!")
 
}
function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true
    }
  }
  return false
}
 
var words = ["wind", "fire"]
longPlaneteerCalls(words)

function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]=="cheddar"
  ||foods[i]=="gouda"
  ||foods[i]=="camembert"
  ||food[i] == "pepperjack"
  ){
    return foods[i]
  }
}
return "no cheese!"
}

function wordsWithB (words) {
  var array = []
  for(var i=0; i<words.length;i++){
    if(words[i].includes("b")){
     array.push(word[i])
    }
  } return array 
     
     
    
    
  }
}
}
 