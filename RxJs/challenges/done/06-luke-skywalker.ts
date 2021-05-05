import { ajax } from "rxjs/ajax";
import { switchMap, map, pluck, zipAll } from "rxjs/operators";

(() => {
  // No tocar ========================================================
  const SW_API = "https://swapi.dev/api";
  const getRequest = (url: string) => ajax.getJSON<any>(url);
  // ==================================================================

  getRequest(`${SW_API}/people/2`)
    .pipe(switchMap((resp) => getRequest(resp.species[0])))
    .subscribe(console.log);
})();
