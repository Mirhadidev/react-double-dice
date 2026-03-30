export default function DoubleDiceV2(){
    const num1=Math.floor(Math.random()*6)+1;
    const num2=Math.floor(Math.random()*6)+1;
    const result=num1 === num2 ? "You Win!!Are Lucky!!":"Better Luck Nxt Time! You Lose!!!";
    const styles={backgroundColor:"lightgreen",fontSize:"25px", color: num1===num2 ? "darkgreen":"orange" };
    return <div style={styles}>
        <h2>{result}</h2>
        <h4>{num1}</h4>
        <h4>{num2}</h4>
    </div>
}