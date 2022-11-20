import React from "react";

import "./Stats.css";

const ButtonRows = (props) => {


  return (
    <div className = "row">
      <div>
        <button className = "btn" style={{border:"none", color: "white", fontWeight: 600, fontSize: "20px", height: "8vh", marginTop: "2px", cursor:"default"}}>
          <img src={props.image} alt="White"/> {props.buttonLabel}
        </button>
        <br/>
        <button className = {props.btnClass} style={{border:"none", color: "white", height: "6vh", width: "fit-content", marginLeft: "5px", marginTop: "2px", cursor:"default", borderColor:"black"}}>
          <span>{props.pool}<img id="eth-logo" src="./ethereum.svg" alt="ether" /></span>
        </button>
        <button className = {props.btnClass} style={{border:"none", color: "white", height: "6vh", width: "fit-content", marginLeft: "5px", marginTop: "2px", cursor:"default", borderColor:"black"}}>
          <span>{props.coin}<img id="ubi-logo" src="./logo.svg" alt="ether" /></span>
        </button>
      </div>
    </div>
  )
}


const Stats = (props) => {

  let playerSideImage = null;
  if(props.playerSide==="0"){
    playerSideImage = props.turn==="1"? "wk.svg" : "bk.svg";
  } else {
    playerSideImage = props.playerSide==="1"? "wk.svg" : "bk.svg";
  }

  return (
    <div className = "stats-box">
      <h3>Game Stats</h3>
      <hr />
      <ButtonRows image="wk.svg" buttonLabel = "Bid" pool={props.whitePool} coin={props.whiteCoins} btnClass="btn btn-dark"/>
      <hr/>
      <ButtonRows image="bk.svg" buttonLabel = "Bid" pool={props.blackPool} coin={props.blackCoins} btnClass="btn btn-dark"/>
      <hr/>
      <ButtonRows image={playerSideImage} buttonLabel = "Your contribution" pool={props.bid} coin={props.cbid} btnClass="btn btn-dark"/>
      <hr />
      <button className = "btn" style={{backgroundColor: "#2a2a2a", color: "white", width: "100%", marginTop: "4px", cursor: "default"}}>
        {(props.turn===props.playerSide || props.playerSide==="0")  && 
          <h4>Your Turn</h4>
        }
        {props.turn!==props.playerSide && props.playerSide!=="0" &&
          <h4>Wait for your turn</h4>
        }
  </button>
    </div>
  );
}

export default Stats;