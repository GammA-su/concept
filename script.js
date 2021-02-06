/* VERY NOT OPTIMIZED AND ALPHA CODE */
/* ONLY CONCEPT, ORIENTED OBJECT MISSING + ARRAY NOT USED + NUMBER OF VARIABLE DECENT */
var playbtn;  // Button Play
var backplay; // Background of the Game
var player; // Player
var play = false; // If Play then True 
var xplayer = 20; // X position of player
var yplayer = 20; // y position
var xs = 5; // Primary Speed of X
var ys = 5; // Primary Speed of Y
var looses = false; // if loose then True
var lvl = 0; // All level
var acl = 0; // Acceleration based on lvl 
var aclgoalS; // Silver Goal
var aclgoalB; // Bronze Goal
var aclgoalG; // Gold Goal
var winstate; // If Silver or Bronze or Gold or More or Less than Bronze show a different message 
var score; // Score 
var allscore= []; // All Score push here in a session
var best = 0; // Best Score
var sngplay = false; // Song Play
var help = 0; // Popup Help
var menuLayout = true; // If in Menu true
var scoreLayout = false; // same with Score
var levelLayout = false; // ""
var gameLayout = false; // ""
var aboutLayout = false; // ""
var animLayout;




class Level  {
    constructor(a,b,c,d) {
      this.acl = a;
      this.goalB = b;
      this.goalS = c;
      this.goalG = d;
    }

    init() {
        acl = this.acl;
        aclgoalB = this.goalB;
        aclgoalS = this.goalS;
        aclgoalG = this.goalG; 
    }

    status(){
        if (winstate > 0){
            return true
        }
        else {
            return false
        }
    }

  }
  var level1 = new Level(0.025,10,12,15);
  var level2 = new Level(0.05,12,15,17);
  var level3 = new Level(0.075,14,17,20);
  var level4 = new Level(0.099,15,25,30);
  var level5 = new Level(0.15,20,30,40);
  var level6 = new Level(0.3,30,40,50);
  var level7 = new Level(0.5,35,50,75);
  var alllvl = [level1,level2,level3,level4,level5,level5,level6,level7];
  var allwinstate = [1,1,1,1,1,1,1];


function preload() {
  playbtn = loadImage("assets/playbtn.png");
  backplay = loadImage("assets/backga.png");
  player = loadImage("assets/playerimg.png");
  restartbtn = loadImage("assets/restartbtn.png");
  



}


function setup() {
      createCanvas(800, 420);
      frameRate(30);
      textFont("Roboto");
      let btn = createDiv()
      btn.id('btn-hover')
      menu();
    }


function draw() {

    function test(){
        if (menuLayout){
            if (mouseX > 363 && mouseX < 404 && mouseIsPressed && mouseY > 203 && mouseY < 244) {  // Level Button
                menuLayout = false;
                clear();
                levelpg();
                }
            if (mouseX > 579 && mouseX < 620 && mouseIsPressed && mouseY > 203 && mouseY < 244) { // About Button
                menuLayout = false;
                clear();
                aboutpg();
                }
            if (mouseX > 147 && mouseX < 188 && mouseIsPressed && mouseY > 203 && mouseY < 244) { // Score Button
                menuLayout = false;
                clear();
                scorepg();
                }
            }
        if (levelLayout){
            if (mouseX > 697 && mouseX < 738 && mouseIsPressed && mouseY > 342 && mouseY < 383 ){ // Return
                levelLayout = false;
                menu();
                }
            if (mouseX > 64 && mouseX < 105 && mouseIsPressed && mouseY > 181 && mouseY < 222 ){ // Level 1
                levelLayout = false;
                lvl = 1;
                play = true;
                }   
            if (allwinstate[1] > 0){
                if (mouseX > 169 && mouseX < 210 && mouseIsPressed && mouseY > 181 && mouseY < 222 ){ // Level 2
                    levelLayout = false;
                    lvl = 2;
                    play = true;            
                    
                    }
                }   
            if (allwinstate[2] > 0){
                if (mouseX > 274 && mouseX < 315 && mouseIsPressed && mouseY > 181 && mouseY < 222 ){ // Level 3
                    levelLayout = false;
                    lvl = 3;
                    play = true;
                    }   
                }
            if (allwinstate[3] > 0){
                if (mouseX > 379 && mouseX < 420 && mouseIsPressed && mouseY > 181 && mouseY < 222 ){ // Level 4
                    levelLayout = false;
                    lvl = 4;
                    play = true
                    }
                }
            if (allwinstate[4] > 0){
                if (mouseX > 484 && mouseX < 525 && mouseIsPressed && mouseY > 181 && mouseY < 222 ){ // Level 5
                    levelLayout = false;
                    lvl = 5;
                    play = true;
                    }
                }
            if (allwinstate[5] > 0){
                if (mouseX > 589 && mouseX < 630 && mouseIsPressed && mouseY > 181 && mouseY < 222 ){ // Level 6
                    levelLayout = false;
                    lvl = 6;
                    play = true;
                    }
                }
            if (allwinstate[6] > 0){
                if (mouseX > 694 && mouseX < 735 && mouseIsPressed && mouseY > 181 && mouseY < 222 ){ // Level 7
                    levelLayout = false;
                    lvl = 7;
                    play = true;
                    }
                }
            }
        if (looses){
            if (mouseX > 325 && mouseX < 366 && mouseIsPressed && mouseY > 261 && mouseY < 302) { 
                    looses = false; 
                    xplayer = 100;
                    yplayer = 100;
                    acl = 0;
                    for (let a = 0; a<10; a++){
                        if (a === lvl){
                            if (allwinstate[a] === 0 ){
                                allwinstate[a] = winstate;
                                }
                            }
                        }   
                    lvl = 0;
                    key = 0;
                    aclgoalB = 0;
                    aclgoalG = 0;
                    aclgoalS = 0;
                    xs = 5;
                    ys = 5;
                    setup();
                }
            if (mouseX > 435 && mouseX < 476 &&  mouseIsPressed && mouseY > 261 && mouseY < 302){
                looses = false; 
                    xplayer = 400;
                    yplayer = 210;
                    for (let a = 0; a<10; a++){
                        if (a === lvl){
                            if (allwinstate[a] === 0 ){
                                allwinstate[a] = winstate;
                                }
                            }
                        }   
                    key = 0;
                    xs = 5;
                    ys = 5;
                    play = true;

                }   
            } 
        if (scoreLayout || aboutLayout){
            if (mouseX > 700 && mouseX < 741 &&  mouseIsPressed && mouseY > 340 && mouseY < 381){
                scoreLayout = false;
                aboutLayout = false;
                menu();
                }
            }
        }
   
    
     

    function game(){
            background("#355C7D");
            fill("#F8B195")
            textSize(15);
            text('Speed : ' + floor(xs) ,650 , 350);
            if (xs < aclgoalB){
                text('Bronze Goal : ' + floor(aclgoalB) ,650 , 370);
                winstate = 0;
            }
            if (xs > aclgoalB && xs < aclgoalS) {
                text('Silver Goal : ' + floor(aclgoalS) ,650 , 370);
                winstate = 1;
            }
            if (xs > aclgoalS && xs < aclgoalG) {
                text('Gold Goal : ' + floor(aclgoalG) ,650 , 370);
                winstate = 2;
            }
            if (xs > aclgoalG) {
                text('Amazing ! ' ,650 , 370);
                winstate = 3;
            }


            
            if (key === "ArrowUp" || key === "Z" ||  key === "ArrowDown" || key === "S" || key === "ArrowRight" || key === "D" ||  key === "ArrowLeft" || key === "Q"){
                ys += acl;
                xs += acl;
            }
            if (key === "ArrowUp" || key === "Z"){
                yplayer-=ys;
            }
            else if (key === "ArrowDown" || key === "S"){
                yplayer+=ys;
            }
            else if (key === "ArrowRight" || key === "D"){
                xplayer+=xs;
            }
            else if (key === "ArrowLeft" || key === "Q"){
                xplayer-=xs;
            }
            if (looses === false) {
                if (xplayer > 700 || xplayer < 0){  
                        score = floor(xs);
                        allscore.push(score);
                        if (best < xs){
                            best = floor(xs);
                        }
                        xs = 0;
                        ys = 0;          
                        loose();
                
                }
                if (yplayer > 329 || yplayer < 0){ 
                        score = floor(xs);
                        allscore.push(score);
                        if (best < xs){
                            best = floor(xs);
                        }
                        ys = 0;
                        xs = 0;
                        loose();
                
                }
                if (winstate === 3){
                    score = floor(xs);
                        allscore.push(score);
                        if (best < xs){
                            best = floor(xs);
                        }
                        ys = 0;
                        xs = 0;
                        loose();

                }
            }
            image(player,xplayer,yplayer);
            
        
            function loose() {
                        sngplay = false;
                        textFont("Roboto");
                        textSize(40);
                        fill("#355C7D")
                        stroke("#F8B195")
                        strokeWeight(10);
                        rect(106,27,588,360,5)
                        noStroke();
                        fill("#F8B195");
                        textAlign(CENTER);
                        textSize(17);
                        text("Speed : " + score, 235, 235);
                        text(winstate + " of 3", 400, 235);
                        text("Goal : " + aclgoalB ,565, 235);
                        fill("#F8B195")
                        rect(325,261,41,41,5)
                        text("Menu", 345, 320);
                        text("Restart", 455, 320);
                        fill("#F67280")
                        rect(435,261,41,41,5)
                        fill("#F8B195");
                        textSize(40);
                        if (winstate === 0 ){
                            text("Bad, not Cool !", 400, 100);
                            fill(255)
                            circle(345,185,44)
                            circle(400,185,44)
                            circle(455,185,44)
                        }
                        if (winstate === 1){
                            text("Kind of GG !", 400, 100);
                            fill("#6C5B7B")
                            circle(345,185,44)
                            fill(255)
                            circle(400,185,44)
                            circle(455,185,44)
                            
                        }
                        
                        if (winstate === 2){
                            text("Great ... Maybe", 400, 100);
                            fill("#C06C84")
                            circle(345,185,44)
                            circle(400,185,44)
                            fill(255)
                            circle(455,185,44)
                        }
                        
                        if (winstate === 3){
                            text("PentaKill !", 400, 100);
                            fill("#F8B195")
                            circle(345,185,44)
                            circle(400,185,44)
                            circle(455,185,44)
                        }

                        
                        fill("#F8B195")
                        textSize(15);
                        fill(255);
                        textAlign(LEFT);
                        play = false;
                        looses = true;
                                       
                   
            }
         
        }   


            function level(){
             if (acl === 0){
                switch (lvl){
                    case 1 :
                        level1.init();
                        break;
                    case 2 :
                        level2.init();
                        break;
                    case 3 :
                        level3.init();
                        break;
                    case 4 :
                        level4.init();
                        break;
                    case 5 :
                        level5.init();
                        break;
                    case 6 :
                        level6.init();
                        break;
                    case 7 :
                        level7.init();
                        break;
                    default :
                        setup();
                        break;
             
                }
            }
        }
    

            
    function testhelp(){
        if (mouseX > 689-15 && mouseX < 689+15 && mouseIsPressed && mouseY > 44-15 && mouseY < 44+15) { // Bug here in mouseIsPressed cause of the temporary Prompt() and Alert(), Edit : fixed
            help = 2;
            menu()
        }

    }

    



        if (play === true){
            level();
            game();
        }
        else {
            if (help === 1 ){
                testhelp();
            }
            if (animLayout){
                if (aboutLayout){
                    aboutpg();
                }
                if (scoreLayout){
                    scorepg();
                }
                if (levelLayout){
                    levelpg();
                }
            }
            else {
                test();
            }
        }


    
}

function menu()  {
    menuLayout = true;
    fill("#F8B195")
    textFont("Roboto");
    background("#355C7D");
    textSize(50);  
    text("Welcome to Concept", 148, 80);
    noStroke();
    textSize(15);
    rect(147,203,41,41,5)
    text("Score",147.5,260);
    fill("#F67280")
    rect(363,203,41,41,5)
    text("Play",368.5,260);
    fill("#C06C84")
    rect(579,203,41,41,5)
    text("About",579,260);
    textSize(15);
    textAlign(CENTER);
    fill("#F8B195")
    text("By DeltA",383,373)
    textAlign(LEFT);
    
    
    // help
    if (help === 0){
        fill('#6C5B7B')
        strokeWeight(4)
        stroke('#C06C84')
        rect(94,43,597,347)
        strokeWeight(2)
        fill("white")
        circle(689,44,30)
        strokeWeight(1.5)
        stroke("#707070")
        line(681,36,697,52)
        line(681,52,697,36)
        textSize(15)
        fill("#F8B195")
        text("Do you know how to play the game ? ",264,75)
        text("The rule is simple do not touch the sides or you'll lose.",202,144)
        text("You have to achieve the goal, each goal got a reward (bronze, silver, gold)",145,212)
        textAlign(CENTER);
        text("The more you last, the better your score will be so even if you're in level 1 or 7 \n the speed value will be the same (not the acceleration)",389,288)
        stroke("#F8B195")
        strokeWeight(1.2)
        line(99,95,685,95)
        textAlign(LEFT)
        help = 1;
        draw()
    }
    
}

function levelpg(){
    levelLayout = true;
    print("Level Page")
    fill("#F8B195")
    textFont("Roboto");
    background("#355C7D");
    textSize(50)
    text("Level",37,77)
    fill('#F8B195')
    rect(64.65,181.65,41,41,5)
    textSize(15)
    text("1",81.5,240) 
    if (allwinstate[1] > 0 ){
        fill("#F8B195")
    }
    else {
        fill("#707070")
    }
    rect(169.65,181.65,41,41,5)
    text("2",185.5,240) 
    if (allwinstate[2] > 0){
        fill("#F67280")
    }
    else {
        fill("#707070")
    }
    rect(274.65,181.65,41,41,5)
    text("3",290.5,240) 
    if (allwinstate[3] > 0 ){
        fill("#F67280")
    }
    else {
        fill("#707070")
    }
    rect(379.65,181.65,41,41,5)
    text("4",396.5,240) 
    if (allwinstate[4] > 0 ){
        fill("#C06C84")
    }
    else {
        fill("#707070")
    }
    rect(484.65,181.65,41,41,5)
    text("5",501.5,240) 
    if (allwinstate[5] > 0 ){
        fill("#C06C84")
    }
    else {
        fill("#707070")
    }
    rect(589.65,181.65,41,41,5)
    text("6",606.5,240) 
    if (allwinstate[6] > 0 ){
        fill("#C06C84")
    }
    else {
        fill("#707070")
    }
    rect(694.65,181.65,41,41,5)
    text("7",708.5,240)
    fill("#C06C84")      
    rect(697.65,342.65,41,41,5)
    text("Return",696,400)
    

}

function scorepg(){
    scoreLayout = true;
    clear();
    textFont("Roboto");
    background("#355C7D");
    textSize(50);
    fill('#F8B195')
    text("Score",37,77)
    textSize(30);
    if (isNaN(score)){
        text("Last Score : 0" ,105,148)
        text("Average Score : 0",105,208)
        text("Best Score : "+ best,105,268)
    }
    else {
        var average = 0;
        for (let a = 0; a < allscore.length; a++){
            average = allscore[a] + average;
        }
        print(average)
        average = average / allscore.length;
        print(average)
        text("Last Score : " + score,105,148)
        text("Average Score : "+ floor(average),105,208)
        text("Best Score : "+ best,105,268)
    }
    fill("#C06C84")
    rect(700,340,41,41,5)
    textSize(15);
    text("Return",698,397)
    print("Score Page")

}

function aboutpg(){
    aboutLayout = true;
    clear();
    textFont("Roboto");
    background("#355C7D");
    textSize(50);
    fill('#F8B195')
    text("About Us",37,77)
    textSize(20);
    textAlign(CENTER);
    text("This game has been made to test my capacities of inventing a new game",395,184)
    text("with no inspiration, just with imagination and p5.js",395,212)
    text("Design made by XD",395,240)
    fill("#C06C84")
    textAlign(LEFT)
    textSize(15);
    text("Return",698,397)
    rect(700,340,41,41,5)
    textSize(15);
    textAlign(CENTER);
    fill("#F8B195")
    text("By DeltA",383,373)
    textAlign(LEFT);

}

function song(){
    if (sngplay === false) {
        epicsong = createAudio('assets/epicsongs9.mp3');
        epicsong.autoplay(true);
        epicsong.volume(0.25);
        sngplay = true;
    }
}


/* TO DO : ANIMATING BUTTON + HIDE PLAYER WHEN END + TRANSITION MENU + CHANGE AND ADAPT DIFFICULTY BY INCREASING ACL OR SPEED + MAKE SCORE BEGIN ON 0 + ANIMATION EVERYWHERE + ADD OBSTACLES FOR HARD LEVEL*/  