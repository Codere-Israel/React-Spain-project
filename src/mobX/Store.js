import { observable, action, makeObservable } from "mobx";
import { configure } from "mobx";

class MyData {
  dataObj = {};
  country = "Panama-pa";
  constructor() {
    makeObservable(this, {
      dataObj: observable,
      updateData: action,
      country: observable,
      updateCountry: action,
    });
  }

  updateData(newVal) {
    // console.log(newVal);
    console.log("data changed");
    this.dataObj = { ...newVal };
  }
  updateCountry(newCountry) {
    this.country = newCountry;
  }
}

const myData = new MyData();
export default myData;
