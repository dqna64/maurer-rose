
let n = 1;
let d = 10;
let update = true;

function setup() {
    createCanvas(720, 720);
    angleMode(DEGREES);
    nSlider = createSlider(0, 100, 6);
    dSlider = createSlider(0, 500, 71);
}

function draw() {
    background(20);

    // n = nSlider.value();
    // d = dSlider.value();

    translate(width/2, height/2);
    noFill();
    stroke(255, 158);
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < 361; i++) {
        let k = i * d;
        let r = width*0.9/2 * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x, y);
    }
    endShape();

    if (update) {
        d += 0.01;
        n += 0.001;
    }

}