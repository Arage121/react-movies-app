import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  }
  tabChangeHandler = (event,value) =>{
    this.setState({value});
  }

  render() {
    return (
      <div>
        <header className="header">
          <img src={logo} className="app-logo" alt="logo"></img>
          <Button id="btn" variant="contained" onClick={this.openModalHandler}>
            Login
          </Button>
        </header>
        <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} >
          <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="LogIn"></Tab>
            <Tab label="Register"></Tab>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default Header;
