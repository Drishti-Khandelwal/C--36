class Form {

//html form
//create element/input/button
constructor(){
this.title = createElement('h2');
this.greeting=createElement('h2');
this.button =createButton("click here");
this.input= createInput("Name")
}

display(){
    this.title.html("CAR RACING GAME");
    this.title.position(400,100);
    this.button.position(200,300);
    this.input.position(500,200);

    this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide();
        player.name = this.input.value();
        playerCount = playerCount+1;
        player.index = playerCount;
        player.updateCount(playerCount);
        player.update();
        this.greeting.html("hello"+player.name);
        this.greeting.position(500,300);
    })
}


}