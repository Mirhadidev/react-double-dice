import DoubleDice from "./DoubleDice";
import DoubleDiceV2 from "./DoubleDiceV2";
import Heading from "./Heading";

export default function App(){
  return(
    <>
   <Heading color="blue" fontSize="50px"/>
    <DoubleDice/>
    <hr />
    <h1>Advance version of Double Dice</h1>
    <DoubleDiceV2/>
    <hr />
    </>
  )
}