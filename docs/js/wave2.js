import{p as n}from"./p5.min.js";const a=document.querySelector("#app"),o=e=>{let t=0,h=80,i=Math.PI*2/1200;e.setup=()=>{e.createCanvas(800,400)},e.draw=()=>{e.background(255),t+=.01,e.strokeWeight(5),e.fill("red"),e.beginShape(),Array.from({length:e.width}).forEach((g,r)=>{e.vertex(r,e.height/2+e.sin(t+i*r)*h)}),e.vertex(e.width,e.height),e.vertex(0,e.height),e.vertex(0,e.height/2+e.sin(t)*h),e.endShape()}};a&&new n(o,a);