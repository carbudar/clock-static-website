let capture;


function setup() {
  createCanvas(600, 600);

}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width)
}
