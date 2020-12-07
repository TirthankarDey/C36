class Player{
    constructor(){

    }

    getCount(){
        var ref = database.ref('playerCount');
        ref.on("value", function(data){
            playerCount = data.val();
        })
    }

    update(name){
        database.ref('player'+playerCount).set({
            name: name
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
}

/*
getCount
update(name);
.updateCount(playerCount);*/

/*{
    player1: {name:""}
    player2: {name:""}
}*/