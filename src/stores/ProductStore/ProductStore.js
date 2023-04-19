import { makeAutoObservable } from "mobx";

class ProductStore {
  products = [];

  constructor(rootStore) {
    // lấy các state từ rootStore
    this.rootStore = rootStore;
    // dùng để auto quan sát các thay đổi của state trong store này
    makeAutoObservable(this);
  }

  addProduct(product) {
    let add = { product };
    // ví dụ về việc dùng userStore trong product store
    add.user = this.rootStore.userStore.name;
    this.products.push(add);
  }

}

export default ProductStore;
