import React, { Component } from 'react';

class About extends Component {
  render() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Jest'];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);

    return (
      <>
        <h1>About</h1>
        <p>This is a test</p>
        <h2>My Skills</h2>
        <ul>{jsxSkills}</ul>
      </>
    );
  }
}

export default About;
