let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let wind = createVector(0.5, 0);
  let gravity = createVector(0, 0.3);
  ball.applyForce(gravity);
  ball.applyForce(wind);
  ball.update();
  ball.show();

}
