import React, { Component } from "react";
import Axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modifiedData: [],
    };
  }

  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        console.log("response.data.results", response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log("err", error.message);
      });
  }

  handleChange = (val, type, index) => {
    let arr = this.state.modifiedData;

    if (arr.length === 0) {
      arr.push({ [`modified${type}${index}`]: val });
      this.setState({ modifiedData: arr });
    } else {
      let CheckIfValExists = arr.filter((item, i) =>
        item.hasOwnProperty(`modified${type}${index}`)
      );

      if (CheckIfValExists.length) {
        console.log("exists");
        let updatedArr = arr.map((item) => {
          if (item.hasOwnProperty(`modified${type}${index}`)) {
            item[`modified${type}${index}`] = val;
          }
          return item;
        });
        console.log("updatedArr", updatedArr);
        this.setState({ modifiedData: updatedArr });
      } else {
        arr.push({ [`modified${type}${index}`]: val });
        this.setState({ modifiedData: arr });
      }
    }

    console.log("val", arr);
  };

  getCurrentVal = (val, type, index) => {
    let arr = this.state.modifiedData;
    if (arr.length) {
      //   return arr[0][`modified${type}${index}`];
      let CheckIfValExists = arr.filter((item, i) =>
        item.hasOwnProperty(`modified${type}${index}`)
      );
      if (CheckIfValExists.length) {
        console.log("CheckIfValExists 2", CheckIfValExists);
        console.log("arr2", arr);
        return CheckIfValExists[0][`modified${type}${index}`];
      }
    } else {
      return val;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.data.length &&
            this.state.data.map((item, index) => {
              return (
                <div className="col-md-12" key={index}>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        id={`textInput${index}`}
                        value={this.getCurrentVal(item.name, "inputBox", index)}
                        onChange={(event) =>
                          this.handleChange(
                            event.target.value,
                            "inputBox",
                            index
                          )
                        }
                      />
                    </div>
                    <div className="col-md-4 form-group">
                      <select
                        className="form-control"
                        id={`selectBox${index}`}
                        value={this.getCurrentVal("1", "selectBox", index)}
                        onChange={(event) =>
                          this.handleChange(
                            event.target.value,
                            "selectBox",
                            index
                          )
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Form;
