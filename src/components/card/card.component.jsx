import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    console.log(this.props.monster, "78739587");
    const { id, email, name } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
