let x1=1;
let y1=4;
let x2=3;
let y2=5;
console.log("The distance between point("+x1+","+y1+") and ("+x2+","+y2+") have a solution of "+distance(x1,y1,x2,y2));

function distance(xone,yone,xt,yt){
    return Math.sqrt(Math.pow(xt-xone,2)+Math.pow(yt-yone,2));
}