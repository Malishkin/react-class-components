import { Component } from "react";
import styles from "./Customer.module.css";

class Customer extends Component {
  componentWillUnmount() {
    console.log("Customer will be removed!");
  }
  render() {
    return <li className={styles.customer}>{this.props.name}</li>;
  }
}

// const Customer = (props) => {
//   return <li className={styles.customer}>{props.name}</li>;
// };

export default Customer;
