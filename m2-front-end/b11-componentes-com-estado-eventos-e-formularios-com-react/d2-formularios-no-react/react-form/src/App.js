import React from 'react';
import TextField from './components/TextField';
import CheckboxField from './components/CheckboxField';

class App extends React.Component {
  constructor() {
    super();
    this.photo = React.createRef();

    this.state = {
      firstName: '',
      email: '',
      favoriteTechs: [],
      about: '',
      hasError: true,
    };
  }

  handleCheckbox = (target) => {
    const { name, checked, id } = target;

    this.setState((prevState) => ({
      [name]: checked
        ? [...prevState.favoriteTechs, id]
        : [...prevState.favoriteTechs.filter((tech) => tech !== id)],
    }));
  };

  handleError = () => {
    const { firstName, email, favoriteTechs, about } = this.state;
    const error = !firstName || !email || favoriteTechs.length === 0 || !about;
    this.setState({ hasError: error });
  };

  handleChange = ({ target }) => {
    const { name, type, value } = target;

    if (type === 'checkbox') this.handleCheckbox(target);
    else if (type === 'file') alert(this.photo.current.files[0].name);
    else this.setState({ [name]: value }, () => this.handleError());
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { hasError } = this.state;

    if (hasError) {
      alert('Fill every field correctly.');
    } else {
      alert('Form sent.');
      this.setState({
        firstName: '',
        email: '',
        favoriteTechs: [],
        about: '',
      });
    }
  };

  render() {
    const { firstName, email, favoriteTechs, about, hasError } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            title="Name"
            handleChange={handleChange}
            value={firstName}
            hasError={hasError}
          />

          <TextField
            name="email"
            title="Email"
            handleChange={handleChange}
            value={email}
          />

          <div>
            <p>Favorite Techs:</p>
            <CheckboxField
              label="HTML"
              name="favoriteTechs"
              handleChange={handleChange}
              id="html"
            />
            <CheckboxField
              label="CSS"
              name="favoriteTechs"
              handleChange={handleChange}
              id="css"
            />
            <CheckboxField
              label="JavaScript"
              name="favoriteTechs"
              handleChange={handleChange}
              id="javascript"
            />
          </div>

          <fieldset>
            <label htmlFor="about">About you</label>
            <textarea
              onChange={handleChange}
              name="about"
              id="about"
              cols="30"
              rows="10"
              value={about}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="photo">Upload file:</label>
            <input
              onChange={handleChange}
              type="file"
              name="photo"
              id="photo"
              ref={this.photo}
            />
          </fieldset>

          <button>Submit</button>
        </form>

        <div>
          {firstName && <p>My name is {firstName}.</p>}
          {email && <p>My email is {email}.</p>}
          {favoriteTechs.length > 0 && (
            <p>My favorite techs are {favoriteTechs.join(', ')}.</p>
          )}
          {about && <p>{about}</p>}
        </div>
      </div>
    );
  }
}

export default App;
