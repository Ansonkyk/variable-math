let a=3;
let b=16;
let c=4;
console.log("Result of the quadratic equation is "+quad(a,b,c)[0]+" And "+quad(a,b,c)[1])

function quad(alpha,beta,ce){
if (alpha==0) {
    return "undefine due to a=0";
  } else if (Math.pow(beta,2)<4*alpha*ce) {
    return "undefine due to b^2<4ac";
  } else {
      
    return [(0-beta+Math.sqrt(beta*beta-4*alpha*ce))/(2*alpha), (0-beta-Math.sqrt(beta*beta-4*alpha*ce))/(2*alpha)];
  }
}