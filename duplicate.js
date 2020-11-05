var str="keerthana is a good keerthana sindhu ashok sindhu";
function removeduplicate(s){
    return new Set(str.split(' '));
}
removeduplicate(str);

// retrun 
// Set(6) {"keerthana", "is", "a", "good", "sindhu", …}
// [[Entries]]
// 0: "keerthana"
// 1: "is"
// 2: "a"
// 3: "good"
// 4: "sindhu"
// 5: "ashok"
// size 6

var str="keerthana is a good keerthana sindhu ashok sindhu";
function removeduplicate(s){
    return [...new Set(str.split(' '))].join(' ');
}
removeduplicate(str);

// op :"keerthana is a good sindhu ashok"



const items=[
    { name:'Bike',price:100},
    { name:'car',price:200},
    { name:'house',price:500},
    { name:'chair',price:5},
    { name:'box',price:10},
    { name:'softa',price:25},
    { name:'card',price:1000},
]