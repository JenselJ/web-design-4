window.addEventListener("load", function () {
  const textInput = document.getElementById("textInput");
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {}
    draw() {}
    update() {}
  }

  class Effect {
    constructor(context, canvasWidth, canvasHeight) {
      this.context = context;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.textX = this.canvasWidth / 2;
      this.textY = this.canvasHeight / 2;
    }
    wrapText(text) {
      this.context.fillText(text, this.textX, this.textY);
    }
    convertToParticles() {}
    render() {}
  }

  const effect = new Effect(ctx, canvas.width, canvas.height);
  console.log(effect);

  function animate() {}

  // ctx.lineWidth = 3;
  // ctx.strokeStyle = "red";
  // ctx.beginPath();
  // ctx.moveTo(canvas.width / 2, 0);
  // ctx.lineTo(canvas.width / 2, canvas.height);
  // ctx.stroke();

  // ctx.lineWidth = 3;
  // ctx.strokeStyle = "green";
  // ctx.beginPath();
  // ctx.moveTo(0, canvas.height / 2);
  // ctx.lineTo(canvas.width, canvas.height / 2);
  // ctx.stroke();

  // const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  // gradient.addColorStop(0.3, "red");
  // gradient.addColorStop(0.5, "fuchsia");
  // gradient.addColorStop(0.7, "purple");

  // ctx.fillStyle = gradient;
  // ctx.strokeStyle = "white";

  // ctx.font = "80px Helvetica";
  // ctx.textAlign = "center";
  // ctx.textBaseline = "middle";

  // const maxTextWidth = canvas.width * 0.8;
  // const lineHeight = 80;

  // function wrapText(text) {
  //   let linesArray = [];
  //   let lineCounter = 0;
  //   let line = "";
  //   let words = text.split(" ");
  //   for (let i = 0; i < words.length; i++) {
  //     let testLine = line + words[i] + " ";
  //     if (ctx.measureText(testLine).width > maxTextWidth) {
  //       line = words[i] + " ";
  //       lineCounter++;
  //     } else {
  //       line = testLine;
  //     }
  //     linesArray[lineCounter] = line;
  //   }
  //   let textHeight = lineHeight * lineCounter;
  //   let textY = canvas.height / 2 - textHeight / 2;
  //   linesArray.forEach((el, index) => {
  //     ctx.fillText(el, canvas.width / 2, textY + index * lineHeight);
  //   });
  //   console.log(linesArray);
  // }

  // textInput.addEventListener("keyup", function (e) {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   wrapText(e.target.value);
  // });
});
