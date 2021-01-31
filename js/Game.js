class Game{

constructor(){}
//reading gameState from database 
getState(){
    database.ref("gameState").on("value",(data)=>{gameState = data.val()});
    console.log("gameState" +gameState);
}
//WRITING GAMESTATE INTO DATABASE
updateState(state){
database.ref("/").update({gameState:state})
}
//start state- waiting for all players to log in...gamestate=0
start(){
    if(gameState===0){
        player =new Player();
        player.getCount();

        form = new Form();
        form.display();
    }
}
play(){
form.hide();
text('gamestart',120,120);
Player.getPlayerInfo();
if(allPlayers!==undefined){
    var display_position = 130;
     //y position of text where u want to display all players info
      //we want to display allplayers info on the screen one below the other. thus text y position will keep changing //for loop is used to change the y position 
      for(var plr in allPlayers){ 
          //color change- active player is red, others black
           if (plr === "player" + player.index) 
           fill("red") 
           else
            fill("black");
         display_position+=20;
          // this is where the y position increases by 20 
          textSize(15);
           //size change 
           text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) 
         //displaying text, allPlayers[plr].name....allPLayers is an array so [plr]
         //refers to which player 
        }

}

if(keyIsDown(UP_ARROW) && player.index !== null){ 
    player.distance +=50
     //INCREASE DISTANCE IF UP IS PRESSED 
     player.update(); 
     //UPDATE THE DISTANCE VALUE IN PLAYER CLASS 
    }
}










}






