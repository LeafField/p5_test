import{p as n}from"./p5.min.js";const r=document.querySelector("#app"),o=e=>{let t=0,i=80,a=Math.PI*2/1200;e.setup=()=>{e.createCanvas(800,400)},e.draw=()=>{e.background(255),e.strokeWeight(5),e.fill("red"),e.beginShape(),Array.from({length:e.width}).forEach((d,h)=>{e.vertex(h,e.height/2+e.sin(t+a*h)*i)}),e.vertex(e.width,e.height),e.vertex(0,e.height),e.endShape(e.CLOSE),t+=a*40}};r&&new n(o,r);
