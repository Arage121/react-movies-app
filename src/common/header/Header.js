import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TabContainer = function (props) {
  return <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
    {props.children}
  </Typography>
};

TabContainer.propTypes = {
  children:PropTypes.node.isRequired
}

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
      username:"",
      password:"",
      email:"",
      firstname:"",
      lastname:"",
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      firstnameRequired: "dispNone",
      lastnameRequired: "dispNone",
      emailRequired: "dispNone",
      contactnoRequired: "dispNone"
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
    this.setState({
      modalIsOpen: true,
      value: 0,
      usernameRequired: "dispNone",
      username: "",
      passwordRequired:"dispNone",
      password: "",
      firstnameRequired: "dispNone",
      firstname: "",
      lastnameRequired: "dispNone",
      lastname: "",
      emailRequired:"dispNone",
      email:"",
      contactnoRequired:"dispNone",
      contactno:""
  });
  }

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  }
  tabChangeHandler = (event, value) => {
    this.setState({ value });
  }
  loginClickHandler = () =>{
   this.state.username === "" ? this.setState({usernameRequired:"dispBlock"}) : this.setState({usernameRequired:"dispNone"});
   this.state.password === "" ? this.setState({passwordRequired:"dispBlock"}) : this.setState({passwordRequired:"dispNone"});
  }
  registerClickHandler = () =>{
    this.state.firstname === "" ? this.setState({firstnameRequired:"dispBlock"}) : this.setState({firstnameRequired:"dispNone"});
    this.state.lastname === "" ? this.setState({lastnameRequired:"dispBlock"}) : this.setState({lastnameRequired:"dispNone"});
    this.state.email === "" ? this.setState({emailRequired:"dispBlock"}) : this.setState({emailRequired:"dispNone"});
    this.state.password === "" ? this.setState({passwordRequired:"dispBlock"}) : this.setState({passwordRequired:"dispNone"});
    this.state.contactno === "" ? this.setState({contactnoRequired:"dispBlock"}) : this.setState({contactnoRequired:"dispNone"});
  }
  inputUsernameChangeHandler = (e) => {
  this.setState({username: e.target.value})
  }
  inputPasswordChangeHandler = (e) => {
    this.setState({password: e.target.value})
    }
    inputFirstnameChangeHandler = (e) => {
      this.setState({firstname: e.target.value})
      }
      inputLastnameChangeHandler = (e) => {
        this.setState({lastname: e.target.value})
        }
        inputEmailChangeHandler = (e) => {
          this.setState({email: e.target.value})
        }
        inputcontactnoChangeHandler= (e) => {
          this.setState({contactno: e.target.value})
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
        <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
          onRequestClose={this.closeModalHandler} style={customStyles} >
          <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="LogIn"></Tab>
            <Tab label="Register"></Tab>
          </Tabs>
          {this.state.value === 0 &&
          <TabContainer>
            <FormControl required>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
              <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br/><br/>
            <FormControl required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
              <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br/><br/>
            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
            LOGIN
          </Button>
          </TabContainer>}

          {this.state.value === 1 &&
          <TabContainer>
            <FormControl required>
              <InputLabel htmlFor="firstname">First Name</InputLabel>
              <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}/>
              <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br/><br/>
            <FormControl required>
              <InputLabel htmlFor="username">Last Name</InputLabel>
              <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}/>
              <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br/><br/>
            <FormControl required>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="username" type="email" email={this.state.email} onChange={this.inputEmailChangeHandler}/>
              <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br/><br/>
            <FormControl required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
              <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br/><br/>
            <FormControl required>
              <InputLabel htmlFor="contactno">Contact No.</InputLabel>
              <Input id="contactno" type="tel" contactno={this.state.contactno} onChange={this.inputcontactnoChangeHandler}/>
              <FormHelperText className={this.state.contactnoRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br/><br/>
            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>
            REGISTER
          </Button>
          </TabContainer>}
          
        </Modal>
      </div>
    );
  }
}

export default Header;

