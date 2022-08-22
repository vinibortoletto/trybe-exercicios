import React from 'react';

export default class TextField extends React.Component {
  render() {
    const { name, title, handleChange, value } = this.props;

    return (
      <fieldset>
        <label htmlFor={name}>{title}:</label>
        <input
          onChange={handleChange}
          type="text"
          name={name}
          id={name}
          value={value}
        />
      </fieldset>
    );
  }
}
