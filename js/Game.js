class Game {
    constructor(){

    }

    //Function to get the gameState from the db
    getState(){
        var ref = database.ref('gameState');
        ref.on("value", function(data){
            gameState = data.val();
        })

    }

    //Function to update the gameState into the db
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    start(){
        if (gameState === 0){
            player = new Player ();
            player.getCount();

            form = new Form();
            form.display();

        }
    }
    
}
