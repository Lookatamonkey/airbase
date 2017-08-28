export const selectVenues = state => {
  return state.entities.venues;
};

export const selectVenuesAsArray = state => {
  const venues = selectVenues(state);
  if (venues) {
    const venueIds = Object.keys(venues);
    return venueIds.map( id => { 
      return venues[id];
    } );
  }
};

export const selectVenueCoordinates = state => {
  const venues = selectVenuesAsArray(state);
  if (venues) {
    return venues.map( v => [v.lat, v.lng] );
  }
};