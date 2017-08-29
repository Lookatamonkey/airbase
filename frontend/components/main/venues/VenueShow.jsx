import React from 'react';
import { propContains } from '../../../helpers/helpers';
import VenueShowSecNav from './VenueShowSecNav';
import VenueDescription from './VenueDescription';

class VenueShow extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }
  
  componentDidMount() {
    if (!this.props.venue) {
      this.props.fetchVenue(this.id);
    }
  }
  
  render() {
    if (this.props.venue) {
      return (
        <div id='venue-show'>
          <VenueShowSecNav />
          <VenueDescription venue={ this.props.venue } />
          {/* Bookings */}
        </div>
      );
    } else {
      return (
        <div id='venue-show'></div>
      );
    }
  }
  
}

export default VenueShow;