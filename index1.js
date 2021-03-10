// console.log("Module JavaScript");
import { fullName as namaLengkap, person as orang, display as tampil } from "./person.js";

import Input, { color }from "./TextInput/index.js";
console.log(namaLengkap, orang);
tampil(orang);

Input();
console.log(color);