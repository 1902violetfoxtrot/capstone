import React, { Component } from 'react';
import { connect } from 'react-redux';
import { awsMapThunk } from '../store/awsFile';
import { instagramLocsThunk } from '../store/instagram';
import { geoAzimuthalEquidistant } from 'd3-geo';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Lines,
  Line,
  Marker,
  Markers
} from 'react-simple-maps';

class ResultsMap extends Component {
  constructor(props) {
    super(props);
    this.projection = this.projection.bind(this);
    this.buildCurves = this.buildCurves.bind(this);
    this.getYourLocation = this.getYourLocation.bind(this);
    //Default to NYC long and lat, to ensure rendering without errors
    this.state = {
      yourLocation: [-74.0059, 40.7128]
    };
  }
  projection() {
    return geoAzimuthalEquidistant()
      .scale(100)
      .translate([700 / 2, 450 / 2]);
  }
  buildCurves(start, end) {
    const x0 = start[0];
    const x1 = end[0];
    const y0 = start[1];
    const y1 = end[1];
    const mpx = (x1 + x0) * 0.5;
    const mpy = (y1 + y0) * 0.5;

    // angle of perpendicular to line:
    const theta = Math.atan2(y1 - y0, x1 - x0) - Math.PI / 2;

    // distance of control point from mid-point of line:
    const offset = 30;

    // location of control point:
    const c1x = mpx + offset * Math.cos(theta);
    const c1y = mpy + offset * Math.sin(theta);

    // construct the command to draw a quadratic curve
    const curve =
      'M' + x0 + ' ' + y0 + ' Q ' + c1x + ' ' + c1y + ' ' + x1 + ' ' + y1;
    return curve;
  }
  getYourLocation() {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        position => {
          this.setState({
            yourLocation: [position.coords.longitude, position.coords.latitude]
          });
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  async componentDidMount() {
    await this.props.getMap();
    this.getYourLocation();
    if (this.props.isInstagram) {
      this.props.getInstagram();
    }
  }
  render() {
    const { mapData } = this.props;
    const { yourLocation } = this.state;
    const { coords } = this.props;

    if (!mapData.objects || !coords) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div className="map">
          <ComposableMap projection={this.projection}>
            <ZoomableGroup>
              <Geographies geography={mapData}>
                {(geographies, projection) =>
                  geographies.map((geography, i) => (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: `#7FC6A4`,
                          stroke: '#7FC6A4',
                          strokeWidth: 0.75,
                          outline: 'none'
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
              <Lines>
                {coords.map((coord, i) => (
                  <Line
                    key={i}
                    line={{
                      coordinates: {
                        start: coord,
                        end: yourLocation
                      }
                    }}
                    style={{
                      default: {
                        stroke: 'yellow',
                        fill: 'transparent'
                      }
                    }}
                    buildPath={this.buildCurves}
                  />
                ))}
              </Lines>
              <Markers>
                <Marker
                  marker={{ coordinates: yourLocation }}
                  style={{
                    default: { fill: 'yellow' }
                  }}
                >
                  <circle cx={0} cy={0} r={2} />
                </Marker>
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      );
    }
  }
}

const mapState = state => ({
  mapData: state.awsFile,
  coords: !!state.user.instagramId
    ? Object.keys(state.instagram.locations).map(location => {
        const { longitude, latitude } = state.instagram.locations[location];
        return [longitude, latitude];
      })
    : Object.keys(state.destinations.destinationInfo).map(destination => {
        const { longitude, latitude } = state.destinations.destinationInfo[
          destination
        ];
        return [longitude, latitude];
      }),
  isInstagram: !!state.user.instagramId
});

const mapDispatch = dispatch => ({
  getMap: () => {
    dispatch(awsMapThunk());
  },
  getInstagram: () => {
    dispatch(instagramLocsThunk());
  }
});

export default connect(mapState, mapDispatch)(ResultsMap);
