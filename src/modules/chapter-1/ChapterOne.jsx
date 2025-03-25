import React, { Component } from "react";
import MessegersUI from "./widgets/messegers/MessegersUI";

export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Chapter One: The Beginning</h1>
        <MessegersUI />
      </div>
    );
  }
}
