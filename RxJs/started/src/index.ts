import { name$, storeDataOnServer, storeDataOnServerError } from "./external";
import UserRepository from "./repository";

name$.subscribe(console.log);

// storeDataOnServer("mydata").subscribe((value) => console.log(value));

// storeDataOnServerError("mydata").subscribe({
//   next: (value) => console.log(value),
//   error: (err) => console.log(`Error message: ${err.message}`),
// });

UserRepository.FindById("ee").subscribe(console.log);
