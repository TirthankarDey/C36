class Form{
    constructor(){
        
    }

    //Called from game.js - start() function
    display(){
        var title = createElement('h2');
        title.html ("Car Racing Game");
        title.position(130,0);

        var input = createInput("Name");
        input.position (130,100);

        var button = createButton ("Play");
        button.position(250,150);

        var greeting = createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(130,100);
            

        })

    }

}

/*Input box for the name
button*/