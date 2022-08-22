import React from 'react';

export default class CheckboxField extends React.Component {
  render() {
    const { label, name, handleChange, id } = this.props;

    return (
      <fieldset>
        <input onChange={handleChange} type="checkbox" name={name} id={id} />
        <label htmlFor={id}>{label}</label>
      </fieldset>
    );
  }
}
