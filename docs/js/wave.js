import{p as d}from"./p5.min.js";const o=document.querySelector("#app"),g=e=>{let n=0,c=100,i=1e3,a,r;const h=()=>{n+=.01;let t=n;for(let l=0;l<a.length;l++)a[l]=e.sin(t)*c,t+=r},s=()=>{e.noFill(),e.strokeWeight(1),e.beginShape();for(let t=0;t<a.length;t++)e.vertex(t,e.height/2+a[t]);e.endShape()};e.setup=()=>{e.createCanvas(800,400),r=Math.PI*2/i,a=new Array(e.width)},e.draw=()=>{e.background(255),h(),s()}};o&&new d(g,o);