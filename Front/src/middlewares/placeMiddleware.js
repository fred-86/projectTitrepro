// Import npm
import axios from "axios";

// Import local
import { generateLink } from 'src/Utils';
import { setMap } from 'src/store/actions';

const placeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_MAP':
      const { address, addressComplement, city } = action.place;
      const addressNumber = address.split(' ')[0];
      const formatedCity = generateLink(city);

      const addressElement = address.split(' ');
      let streetName = '';

      for (let i = 1; i < addressElement.length; i++) {
        if (i !== addressElement.length - 1) {
          streetName += `${generateLink(addressElement[i])}%20`;
        }
        else {
          streetName += `${generateLink(addressElement[i])}`;
        }
      }

      axios.get(`https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=FR&streetNumber=${addressNumber}&streetName=${streetName}&municipality=${formatedCity}&postalCode=${addressComplement}&language=fr-FR&extendedPostalCodesFor=PAD&entityTypeSet=&key=Vk9kuXhAN8yKOewmoBU0ahHhEMAe40Op`)
        .then((response) => {
          const currentPlace = response.data.results.find((result) => result.type === 'Point Address');
          console.log('currentPlace:', currentPlace);
          return currentPlace;
        })
        .catch((err) => {
          console.log(err);
        })
        .then((currentPlace) => {
          const { lon, lat } = currentPlace.position;

          axios.get(`https://api.tomtom.com/map/1/staticimage?layer=basic&style=main&format=png&zoom=15&center=${lon}%2C%20${lat}&width=512&height=512&key=Vk9kuXhAN8yKOewmoBU0ahHhEMAe40Op`)
            .then((response) => {
              store.dispatch(setMap(response.config.url));
            })
            .catch((err) => {
              console.log(err);
            });
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default placeMiddleware;