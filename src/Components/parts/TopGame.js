import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function TopGame(props) {
  return (
    <div className="topGame">
      <div className="card">
        {/* <i class="fal fa-arrow-right"></i> */}
        <img className="game_logo" width={"100px"} height={"100px"} src={props.logo} alt={props.logoAlt} />
        <a href={props.gameLink} rel={"nofollow"}>
          <img width={"100px"} height={"100px"} className="topGameImage" src={props.imgSrc} alt={props.alt} />
        </a>
        <div className="game_info">
          <h3 className="topGameTitle">{props.game_name}</h3>
          <div className="topGameSponsor">{props.sponsor}</div>
        </div>
        <div className="jugar-div">
          <Button className="jugar-regis" size="lg" href={props.gameLink}>
            Juega Ahora
            <FontAwesomeIcon id="game-svg" icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopGame;
