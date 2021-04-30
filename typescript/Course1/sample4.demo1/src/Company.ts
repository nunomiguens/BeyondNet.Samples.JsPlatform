import faker from 'faker';
import IMarker from './IMarker';

class Company implements IMarker {
  name: string;
  cathPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  markerContent() {
    return 'I am a Company!!';
  }

  constructor() {
    this.name = faker.company.companyName();
    this.cathPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

export default Company;
