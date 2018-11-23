import React from 'react';
import PropTypes from 'prop-types';

class Embed extends React.Component {
  componentDidMount = () => {
    const element = this.wrapper;
    const options = { ...this.props, element };

    this.embed = RunKit.createNotebook(options);
  };

  componentWillUnmount = () => {
    if (this.embed) {
      this.embed.destroy();
      this.embed = null;
    }
  };

  componentDidUpdate = prevProps => {
    if (this.embed) {
      if (prevProps.source !== this.props.source) {
        this.embed.setSource(this.props.source);
      }

      if (prevProps.preamble !== this.props.preamble) {
        this.embed.setPreamble(this.props.preamble);
      }
    }
  };

  evaluate = callback => {
    if (this.embed) {
      this.embed.evaluate(callback);
    }
  };

  getSource = callback => {
    if (this.embed) {
      this.embed.getSource(callback);
    }
  };

  getURL = () => {
    if (this.embed) {
      return this.embed.URL;
    }
  };

  render = () => {
    return <div ref={instance => (this.wrapper = instance)} />;
  };
}

Embed.propTypes = {
  source: PropTypes.string,
  readOnly: PropTypes.bool,
  mode: PropTypes.string,
  nodeVersion: PropTypes.string,
  env: PropTypes.array,
  title: PropTypes.string,
  minHeight: PropTypes.string,
  packageTimestamp: PropTypes.string,
  preamble: PropTypes.string,
  onLoad: PropTypes.func,
  onURLChanged: PropTypes.func,
  onEvaluate: PropTypes.func,
};

export default Embed;
