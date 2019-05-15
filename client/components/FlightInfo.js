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
          );
        if (flightsReturning)
          flightsReturning = flightsReturning.filter(
            ({ price }) => Number(price) <= budget
          );

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
                <label className="ui header">{element.city}</label>
              </div>
              <div role="list" className="ui list">
                Departing
                <i aria-hidden="true" className="fas fa-plane-departure" />
                {element.departing.map((departure, i) => {
                  return (
                    <div key={i} role="listitem" className="item">
                      <div className="content">
                        Airline: {departure.carrier} Class: {departure.class}{' '}
                        Price: ${departure.price}
                      </div>
                    </div>
                  );
                })}
                Returning
                <i aria-hidden="true" className="fas fa-plane-arrival" />
                {element.returning.map((returns, i) => {
                  return (
                    <div key={i} role="listitem" className="item">
                      <div className="content">
                        Airline: {returns.carrier} Class: {returns.class} Price:
                        ${returns.price}
                      </div>
                    </div>
                  );
                })}
              </div>
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
