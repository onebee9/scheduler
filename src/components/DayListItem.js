import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";


export default function dayListItem(props) {

  const formatSpots = (spots) => {
    let text = `${spots} spots remaining `;

    if (spots === 0) {
      text = "no spots remaining";
    }

    if (spots === 1) {
      text = "1 spot remaining";
    }

    return text;

  }

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });


  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );

}

