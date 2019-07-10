let chess = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw(){
  let out = '';
  let m = 0;
  for (let i = 0; i < chess.length; i++){
    let arr = chess[i];
    for (let j = 0; j < arr.length; j++){
      if (m % 2 == 0){
        out += '<div class = "chess-block" ></div>';
      }
      else {
        out += '<div class = "chess-block grey-block"></div>';
      }
      m++;
    }
    m++;
  }
  document.querySelector('.chess-field').innerHTML = out;
}
draw();