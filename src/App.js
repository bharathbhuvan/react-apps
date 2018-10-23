import React, { Component } from "react";
import FetchRecords from "./components/FetchRecords";
import fetchDetails from "./Api";
let oldec;
class App extends Component {
  state = {
    Records: [],
    inputval: ""
  };
  // componentWillMount() {
  //   console.log("willmount");
  //   fetchDetails().then(data => {
  //     this.setState({
  //       Records: data
  //     });
  //   });
  // }
  componentDidMount() {
    fetchDetails().then(data => {
      this.setState({
        Records: data
      });
      oldec = [...this.state.Records];
    });
  }

  onHandleChange = inptvalue => {
    const finaloutpt = oldec.filter(data => {
      const { title } = data;
      return title.toString().includes(inptvalue);
    });

    this.setState({
      inputval: inptvalue,
      Records: finaloutpt
    });
  };
  render() {
    console.log("render");
    return (
      <FetchRecords {...this.state} onHandleChange={this.onHandleChange} />
    );
  }
}

export default App;
