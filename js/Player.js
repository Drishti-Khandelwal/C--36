class Player{
constructor(){
this.name = null;
this.distance = null;
this.index = null;

}
//reading playercount from database 
getCount(){
database.ref("playerCount").on("value",(data)=>{playerCount = data.val()});
console.log("PlayerCount" +playerCount);
}
//writing a playercount in the database 
updateCount(count){
    database.ref("/").update({playerCount : count})
}
//writing name and distance into the database
update(){
    //playerindex is path to add new players into the database.
    var playerIndex = "players/player" +this.index;//players/player3
    database.ref(playerIndex).update({
        name : this.name,
    distance: this.distance})   
}
//this function will fill up the variable allplayers with the players information 
static getPlayerInfo(){ 
 database.ref('players').on("value",(data)=>{ allPlayers = data.val(); }) }
}