/*const c1=+readline()
const c2=+readline()
const c3=+readline()
const c4=+readline()
const c5=+readline()
let R = 0
let Y = 0
let G = 0
if(c1=='G'){
    G=G+1
}
else if(c1=='Y'){
    Y=Y+1
}
else{
    R=R+1
}
if(c2=='G'){
    G=G+1
}
else if(c2=='Y'){
    Y=Y+1
}
else{
    R=R+1
}
if(c3=='G'){
    G=G+1
}
else if(c3=='Y'){
    Y=Y+1
}
else{
    R=R+1
}
if(c4=='G'){
    G=G+1
}
else if(c4=='Y'){
    Y=Y+1
}
else{
    R=R+1
}
if(c5=='G'){
    G=G+1
}
else if(c5=='Y'){
    Y=Y+1
}
else{
    R=R+1
}
if (R>=3 || (Y>=2 && R>=2) || G==0)
{ console.log("nakhor lite"); }
else{ console.log("rahat baash"); }*/
const label = readline();
let R = 0, Y = 0, G = 0;
for (let i = 0; i < 5; i++) {
    const l = label[i];
    if (l === "R") R++;
    if (l === "Y") Y++;
    if (l === "G") G++;
}
const danger = (R >= 3) || (R >= 2 && Y >= 2) || (G === 0);
console.log(danger ? "nakhor lite" : "rahat baash");