import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function CC(props) {
  return(
    <>
    <img src = {props.item.image}></img>
    <br></br>
    <button onClick={() => {props.upC(props.index); props.pushP(props.price + props.item.price)}}>Lemme add one</button>
    <h4>{props.item.name}</h4>
    <p>{props.item.price}</p>
    <p>{props.item.description}</p>
    </>
  )
}

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [p, pushP] = useState(0); // set price
  const [c, pushC] = useState({});
  const upC = (i) => {
    let mario = c;
    {mario[i] ? (
      mario[i] += 1
    ) : (
      mario[i] = 1
    )}
  pushC({...mario});
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <CC upC = {upC} item = {item} index = {index} price = {p} pushP = {pushP}></CC>
      ))}

      <div>
      <br></br>
        <h2>Cart</h2>
        {Object.keys(c).map((key) => (
          <>
          {bakeryData[key].name + " " + c[key]}
          </>
        ))}
        <h4>Total</h4>
        <>{p}</>
      </div>
    </div>
  );
}

export default App;
