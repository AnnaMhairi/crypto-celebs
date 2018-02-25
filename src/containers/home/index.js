import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Card from "../../components/Card/index";
import cards from "../../data/cards";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Crypto Celebrities</h1>
        {cards.map((card, i) => (
          <div key={i}>
            {
              <Card
                id={card.id}
                tx_count={card.tx_count}
                price={card.price}
                cover_image={card.cover_image}
                profile_image={card.profile_image}
                name={card.name}
                handle={card.handle}
                description={card.description}
                owner={card.owner}
              />
            }
          </div>
        ))}
      </div>
    );
  }
}
