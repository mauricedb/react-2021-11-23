import React, { Component, useState } from 'react';

interface Props {
  voteAverage: number;
  voteCount: number;
}

interface State {
  count: number;
  msg: string;
}

export class Votes extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      msg: 'Hello',
    };
  }

  render() {
    console.log(this.state);

    return (
      <p>
        Votes:&nbsp;
        {'★'.repeat(this.props.voteAverage / 2).padEnd(5, '☆')}
        &nbsp;({this.props.voteCount.toLocaleString()})
        <button
          onClick={(e) => {
            e.bubbles = false;
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click count {this.state.count}
        </button>
      </p>
    );
  }
}
