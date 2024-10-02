
const username = document.getElementById("t1");
const label=document.getElementById("lab");
const  plus = document.getElementById("t2");
const sub = document.getElementById("t3");
const add = document.getElementById("t5");
const subt = document.getElementById("t6");
const mul = document.getElementById("t7");
const div = document.getElementById("t8");
const reset = document.getElementById("t10");

let count=0;
  username.onclick=function(){
  count=0;
  label.textContent=count;
}
plus.onclick=function(){
  count++;
  label.textContent=count;
}
sub.onclick=function(){
  count--;
  label.textContent=count;
}
add.onclick=function(){
  count++;
  label.textContent=count;
}
subt.onclick=function(){
  count--;
  label.textContent=count;
}
mul.onclick=function(){
  count *=2;

  label.textContent=count;
}
div.onclick=function(){
  count %=2;
  label.textContent=count;
}
reset.onclick=function(){
  count=0;
  label.textContent=count;
}


