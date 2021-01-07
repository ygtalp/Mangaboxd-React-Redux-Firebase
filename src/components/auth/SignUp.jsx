import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from '../../actions/authActions'

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    const { uid } = this.props;
    if (uid) return <Redirect to="/" />;
    return (
      <>
        <form
          className="container align-self-center"
          autoComplete="off"
          style={{
            flexDirection: "column",
            position: "relative",
            display: "flex",
            marginTop: "30px",
            padding: "30px",
            borderRadius: "0.7rem",
            boxShadow: "0rem 0.5rem 3.5rem rgba(0,0,0,.4)",
            maxWidth: 350,
            backgroundColor: "#404040",
          }}
          onSubmit={this.handleSubmit}
        >
          <h4
            style={{
              color: "#fff",
              flexDirection: "column",
              position: "relative",
              display: "flex",
              alignSelf: "center",
              textTransform: "uppercase",
            }}
          >
            Sign Up
          </h4>

          <div className="form-group" style={{ color: "#fff" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group" style={{ color: "#fff" }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              required
              minLength="6"
            />
          </div>
          <div className="form-group" style={{ color: "#fff" }}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={this.handleChange}
              required
              minLength="3"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDispatchToProps = 
 {
    signUp: actions.signUp,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
