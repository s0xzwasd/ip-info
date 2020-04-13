import React from "react";
import { connect } from "react-redux";

const Mainpage = ({ loading }) => {
  return <div>Hello, Main Page! {loading}</div>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.app.loading,
  };
};

export default connect(mapStateToProps)(Mainpage);
