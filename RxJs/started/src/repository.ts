import { Observable } from "rxjs";

interface IRepository<T> {
  FindById(id: string): Observable<T>;
}

type User = {
  id: string;
  name: string;
};

class UserRepository implements IRepository<User> {
  FindById(id: string): Observable<User> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next({ id: "ee", name: "beyondnet" });
        subscriber.complete();
      }, 2000);
    });
  }
}

export default new UserRepository();
