import React from "react";
import { connect } from "react-redux";
import { ping } from "../redux/actions";

const App = ({ isPinging, onPing }) => (
  <div className="container">
    <h1>Is pinging : {JSON.stringify(isPinging)} </h1>
    <button onClick={onPing}>Start PING</button>
  </div>
);

const mapStateToProps = (state) => ({
  isPinging: state.ping.isPinging,
});

const mapDispatchToProps = (dispatch) => ({
  onPing: () => dispatch(ping()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
