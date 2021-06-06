import { initGA, logPageView } from "@utils/log";
import React from "react";

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

export default class Analytics extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
