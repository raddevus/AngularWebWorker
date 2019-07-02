/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  console.log(data);
  let outX : number = 0;
  for (let x : number = 0; x< 500000000;x++){
    if (outX > 10){
      outX =  outX / 6.2;
      
    }
    if (x % 1000000 == 0){
      postMessage(outX);
    }
    outX++;
  }
  //data.outX = outX;
  console.log("done");
  //postMessage(outX );
  //postMessage();
});
