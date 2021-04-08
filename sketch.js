const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig;
var backgroundImg;

var chain1,chain2,chain3,chain4;

var flag = 0;
var score = 0;

function preload()
{
    bg= loadImage("images/bg.jpg");
    sound1 = loadSound("sound/train_crossing.mp3");
    sound2 = loadSound("sound/train.mp3");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(200,320,70,70);
    box2 = new Box(250,320,70,70);
    box3 = new Box(300,320,70,70);
    box4 = new Box(350,320,70,70);
    box5 = new Box(400,320,70,70);

    chain1 = new SlingShot(box1.body,box2.body);
    chain2 = new SlingShot(box2.body,box3.body);
    chain3 = new SlingShot(box3.body,box4.body);
    chain4 = new SlingShot(box4.body,box5.body);
    
    pig = new Pig(1100,340);    

}

function draw(){

    background(bg);

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig.display();


    box3.display();
    box4.display();

    box5.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
     


    var collision = Matter.SAT.collides(box5.body,pig.body);

    if(collision.collided)
    {
        
        flag = 1;


    }
    
    if(flag === 1)
    {
        textSize(30)
        fill("blue")
        strokeWeight(5)
        text("Crashed",550,150)

        sound2.play();

    }
}

function keyPressed()
{
            if(keyCode === RIGHT_ARROW)
            {
                
                sound1.play();
                Matter.Body.applyForce(box5.body,{x:box5.body.position.x,y:box5.body.position.y},{x:100 ,y:0})
            
            }


}