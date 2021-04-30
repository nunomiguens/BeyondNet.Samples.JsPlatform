import faker from 'faker';
import IMarker from './IMarker';

class User implements IMarker {
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }
  name: string;

  location: {
    lat: number;
    lng: number;
  };

  markerContent() {
    return 'I am a User!!';
  }
}

export default User;
