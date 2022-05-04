// Code your solutions in this file

function writeCards(namesArray ,event ){
    let newArr= [];

    for(let i=0;i<namesArray.length;i++ ){
        newArr.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`); 
    }
    return newArr
}

function countDown ( num ){
    while( num >= 0 ){
        console.log(num)
        num-=1

    }
    
}
