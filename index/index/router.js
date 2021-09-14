// 路由实现
class Router {
  constructor() {
    this.routers = {};
  }

  setPage = (hashPath, callback) => {
    this.routers[hashPath] = callback;
  }
  getPage = (hashPath) => {
    this.routers[hashPath]();
  }
}
