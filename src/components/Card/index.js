import React from "react";

export default class Card extends React.Component {
  render() {
    const {
      id,
      tx_count,
      price,
      cover_image,
      profile_image,
      name,
      handle,
      description,
      owner
    } = this.props;
    return (
      <div>
        <div>
          <div>Tx count: {tx_count}</div>
          <div>Price: {price}</div>
        </div>
        <div className="coverImg" />
        <div>
          <img src="" />
          <p>{name}</p>
          <p>{handle}</p>
          <p>{description}</p>
          <button>Buy for {price}</button>
        </div>
        <div>Owned by: {owner}</div>
      </div>
    );
  }
}
