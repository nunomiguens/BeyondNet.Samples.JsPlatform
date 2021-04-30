interface IMarker {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export default IMarker;
