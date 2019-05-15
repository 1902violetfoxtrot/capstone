import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.makeFlightsArr = this.makeFlightsArr.bind(this);
  }
  makeFlightsArr() {
    const {
      returning,
      departing,
      destinations,
      instagramLocs,
      instagramUser,
      budget
    } = this.props;

    let destinationChoices = {};
    if (instagramUser) {
      destinationChoices = instagramLocs;
    } else {
      destinationChoices = destinations;
    }
    let totalFlightsArr = [];

    for (let airportCode in destinationChoices) {
      if (destinationChoices.hasOwnProperty(airportCode)) {
        let locationName = destinationChoices[airportCode].name;
        locationName = locationName[0].toUpperCase() + locationName.slice(1);
        let flightsDeparting = departing[airportCode] || [];
        let flightsReturning = returning[airportCode] || [];
        if (flightsDeparting)
          flightsDeparting = flightsDeparting.filter(
            ({ price }) => Number(price) <= budget
          )
          .sort( (a, b) => Number(b.price) - Number(a.price) )
          .slice(0, 5);
        if (flightsReturning)
          flightsReturning = flightsReturning.filter(
            ({ price }) => Number(price) <= budget
          )
          .sort( (a, b) => Number(b.price) - Number(a.price) )
          .slice(0, 5);

        if (flightsDeparting.length && flightsReturning.length) {
          // const totalPrices = flightsDeparting.map((departure, idx) => {
          //   if (departure) {
          //     let sum =
          //       parseFloat(departure.price, 10) +
          //       parseFloat(flightsReturning[idx].price, 10);
          //     return sum.toFixed(2);
          //   }
          // });
          let flightsObj = {
            city: locationName,
            departing: flightsDeparting,
            returning: flightsReturning
            // totals: totalPrices
          };
          totalFlightsArr.push(flightsObj);
        }
      }
    }
    return totalFlightsArr;
  }

  render() {
    const flightsInfoArr = this.makeFlightsArr();
    return (
      <div className="flights">
        {flightsInfoArr.map(element => {
          return (
            <div key={element.city}>
              <div>
                <label className="ui large blue header">{element.city}</label>
              </div>
              <label role="list" className="ui header list container">
                <div className="ui small header icon">
                  Departing
                  <i aria-hidden="true" className="fas fa-plane-departure" />
                </div>

                {element.departing.map((departure, i) => {
                  return (
                    <div
                      key={i}
                      role="listitem"
                      className="ui container segment"
                    >
                      <div className="content">
                        <div>Airline: {departure.carrier}</div>
                        <div>Class: {departure.class}</div>
                        <div>${departure.price}</div>
                      </div>
                    </div>
                  );
                })}
                <div className="ui medium header icon">
                  Returning
                  <i aria-hidden="true" className="fas fa-plane-departure" />
                </div>
                {element.returning.map((returns, i) => {
                  return (
                    <div
                      key={i}
                      role="listitem"
                      className="ui container segment"
                    >
                      <div className="content">
                        <div>Airline: {returns.carrier}</div>
                        <div>Class: {returns.class}</div>
                        <div>${returns.price}</div>
                      </div>
                    </div>
                  );
                })}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapState = state => ({
  returning: state.location.returning,
  departing: state.location.departing,
  destinations: state.destinations.destinationInfo,
  instagramLocs: state.instagram.locations,
  instagramUser: state.user.instagramId
});
export default connect(mapState)(FlightInfo);
