import { makeAutoObservable } from "mobx";

class UserStore {
  name = "Le Duong";

  // dùng để auto quan sát các thay đổi của state trong store này
  constructor() {
    makeAutoObservable(this);
  }

  setUserName = (name) => {
    this.name = name;
  };
}

export default UserStore;
