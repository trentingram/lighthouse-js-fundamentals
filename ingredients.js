var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;
while(count<ingredients.length){
    console.log(ingredients[count])
    count++
}
// Write a for loop that prints out the contents of ingredients:
for(var x = 0;x<ingredients.length;x++){
    console.log(ingredients[x]) 
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
var len = ingredients.length;
for(var x = len;x>=0;x--){
    console.log(ingredients[x]) 
}