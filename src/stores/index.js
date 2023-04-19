import UserStore from "./UserStore/UserStore";
import ProductStore from "./ProductStore/ProductStore";
import React from "react";

// dùng để link các store lại làm 1 và nơi giao tiếp các store
class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.productStore = new ProductStore(this);
  }
}

// thêm dòng này để React có thể dùng các stores trong root này
// ***note: react context dùng để ứng dụng react có thể dùng các state mà ko cần truyền trung gian qua các component
const StoresContext = React.createContext(new RootStore());

// đây là function có sẵn để app kết nối tới các stores
export const useStores = () => React.useContext(StoresContext);
