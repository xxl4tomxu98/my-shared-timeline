import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

/*
Export a container component for the `PostForm` that will be used to create a
new post. Map in a post object with empty values for each field as a `post` prop
along with a `formType` prop set to the string 'Create Post'. Additionally, map 
in a function that will dispatch the appropriate action to the store on form 
submission as an `action` prop.
*/

const mapStateToProps = state => ({
  post: {
    title: '',
    body: ''
  },
  formType: 'Create Post'
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);