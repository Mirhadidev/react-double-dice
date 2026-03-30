export default function DoubleDice(){
const num1= Math.floor(Math.random()*3)+1;
const num2= Math.floor(Math.random()*3)+1;
const result = num1 === num2 ? "You Win!!!":"You Lose!!!";
const styles={color: num1 === num2 ? "green" : "red", backgroundColor: num1 === num2 ? "yellow" : "skyblue"};


return <div style={styles}>
 <h2>{result}</h2>
 <h4>{num1}</h4>
 <h4>{num2}</h4>
</div>








// here this if else method is not recommended bcz it breaches dry rule so we use other method such as terray condition
 //  if(num1  === num2){
//  return <div>
// <h2>You Win!!</h2>
// <h4>{num1}</h4>
// <h4>{num2}</h4>
//     </div>
//      }
//      else{
//          return <div>
// <h2>You lose!!</h2>
// <h4>{num1}</h4>
// <h4>{num2}</h4>
//     </div>
//      }
   
}