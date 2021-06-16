import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlane,
  faHome,
  faCalendar,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const tabText = {
    flights: "flights",
    motels: "motels",
    reservations: "reservations",
    offers: "offers"
  };

  const [tab, setTab] = useState(tabText.flights);
  const changeTab = (tab) => setTab(tab);

  return (
    <div className="app">
      <div className="tab-container">
        <div
          onClick={() => changeTab(tabText.flights)}
          className={`tab tab-flights ${
            tab === tabText.flights && "open-flights"
          }`}
        >
          <FontAwesomeIcon icon={faPlane} />
          <h1 className={`tab-text ${tab === tabText.flights && "open-text"}`}>
            Flights
          </h1>
        </div>
        <div
          onClick={() => changeTab(tabText.motels)}
          className={`tab tab-motels ${
            tab === tabText.motels && "open-motels"
          }`}
        >
          <FontAwesomeIcon icon={faHome} />
          <h1 className={`tab-text ${tab === tabText.motels && "open-text"}`}>
            Motels
          </h1>
        </div>
        <div
          onClick={() => changeTab(tabText.reservations)}
          className={`tab tab-reservations ${
            tab === tabText.reservations && "open-reservations"
          }`}
        >
          <FontAwesomeIcon icon={faCalendar} />
          <h1
            className={`tab-text ${
              tab === tabText.reservations && "open-text"
            }`}
          >
            Reservations
          </h1>
        </div>
        <div
          onClick={() => changeTab(tabText.offers)}
          className={`tab tab-offers ${
            tab === tabText.offers && "open-offers"
          }`}
        >
          <FontAwesomeIcon icon={faShoppingBag} />
          <h1 className={`tab-text ${tab === tabText.offers && "open-text"}`}>
            Offers
          </h1>
        </div>
      </div>

      <div className="content">
        <h1>{tab}</h1>
      </div>
    </div>
  );
}
