/*
Export the following API Util functions with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`
*/

export const fetchPosts = () => (
  $.ajax({
    url: `api/posts/`
  })
);

export const fetchPost = postId => (
  $.ajax({
    url: `/api/posts/${postId}/`
  })
);

export const createPost = post => (
  $.ajax({
    url: `api/posts/`,
    method: 'POST',
    data: { post }
  })
);

export const updatePost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'patch',
    data: { post }
  })
);

export const deletePost = postId => (
  $.ajax({
    url: `/api/posts/${postId}/`,
    method: 'DELETE'
  })
)