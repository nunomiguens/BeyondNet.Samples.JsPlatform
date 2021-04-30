import {} from 'googlemaps';
import IMarker from './IMarker';

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(tag: string) {
    this.googleMap = new google.maps.Map(document.getElementById(tag), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(marker: IMarker): void {
    const internalMarker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
    });

    internalMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent(),
      });

      infoWindow.open(this.googleMap, internalMarker);
    });
  }
}
export default CustomMap;
