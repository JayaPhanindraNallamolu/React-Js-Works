import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    // console.log(this.props.monsters);
    const { monsters } = this.props;
    // console.log(monsters, "RAVi");
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // <h1 key={monster.id}>{monster.name}</h1>
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
