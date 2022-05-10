import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        // <h1 key={monster.id}>{monster.name}</h1>
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
