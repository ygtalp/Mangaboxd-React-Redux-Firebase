import React, { Component } from "react";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.login(this.state);
  };

  render() {
    const { uid } = this.props;
    if (uid) return <Redirect to="/" />;
    return (
      <>
        <form
          className="container-md align-self-center"
          autoComplete="off"
          style={{
            flexDirection: "column",
            position: "relative",
            display: "flex",
            marginTop: "30px",
            padding: "30px",
            color: "#fff",
            borderRadius: "0.7rem",
            boxShadow: "0rem 0.5rem 3.5rem rgba(0,0,0,.4)",
            maxWidth: 350,
            backgroundColor: "#404040",
          }}
          onSubmit={this.handleSubmit}
        >
          <h4
            style={{
              flexDirection: "column",
              position: "relative",
              display: "flex",
              alignSelf: "center",
              textTransform: "uppercase",
            }}
          >
            Login
          </h4>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
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
          <button
            type="submit"
            className="btn btn-success btn-lg"
            style={{ marginTop: "20px" }}
          >
            Login
          </button>
        </form>
        <div
          className="container-md align-self-center"
          autoComplete="off"
          style={{
            color: "#fff",
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
        >
          <span>
            New to Mangaboxd?<Link to="/signup"> Create an account</Link>
          </span>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
