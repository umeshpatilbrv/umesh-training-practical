
// import { UserUtils } from "./util.ts"
///<reference path = "util.ts"/> 

namespace UsersUtils {
  export class Users extends Parent implements userinterface {
    getName() {
      return this.name;
    }
  }
}

let write = new UsersUtils.Users();

write.setName("Brainvire");
// l1.setName("infotech");
console.log(write.getName());


  