import React, { Component } from 'react';
import { render } from 'react-dom';
import titlegen from 'titlegen';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  state = {
    samples: [
      'Taking chances with dances',
      'Yeet me up inside',
      'Tails of the night risker',
      'Risking it all for ice cream',
      'Truthfully I mapled myself',
      'No spoons for my customers',
      'When you yeet up a mountain',
      'All the yeets in the world',
      'Taking chances with the chancellor',
    ],
    generatedTitles: [],
  };

  componentDidMount() {
    this.regenerate();
  }

  onUpdate = (e) => {
    const samples = e.target.value.split('\r\n');
    this.setState({ samples }, () => {
      this.regenerate();
    });
  };

  regenerate = () => {
    const g = titlegen.create();
    g.feed(this.state.samples);

    const generatedTitles = [];

    for (let i = 0; i < 10; i++) {
      generatedTitles.push(g.next());
    }

    this.setState({
      generatedTitles,
    });
  };

  render() {
    return (
      <div>
        <p>
        Title generator with markov chains
        </p>
        <textarea
          value={this.state.samples.join('\r\n')}
          onChange={this.onUpdate}
        >
        </textarea>
        <button onClick={this.regenerate}>Regen</button>
        {this.state.generatedTitles.map((title, i) => (
          <p key={i}>{title}</p>
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
