import React from 'react';

/*
Export a `PostForm` presentational component that creates a form to either
create or edit a post (it will be used by two separate containers). The form
should indicate whether it is a create or edit form based on the `formType`
prop. The form should initialize state to the `post` passed in from props. Use
controlled inputs and trigger the `action` passed in from the container upon
submission. Use a text input for the title and a textarea for the body.
*/

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type='text'
              value={this.state.title}
              onChange={this.update('title')}
            />
          </label>
          <label>
            Body
            <textarea
              value={this.state.body}
              onChange={this.update('body')}
            />
          </label>
          <button type='submit' value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default PostForm;
