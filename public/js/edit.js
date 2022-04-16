const updatePostHandler = async (event) => {
  event.preventDefault();
  debugger;
  console.log(event);

  const blog_id = $(event.target).data('id');
  const blog_description =
    document.getElementById('blog-description').value;

  if (blog_id && blog_description) {
    const response = await fetch(`/api/blogs/${blog_id}`, {
      method: 'PUT',
      body: JSON.stringify({ blog_description, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.replace(`/edit_blog/${blog_id}`);
    } else {
      alert('Failed to update blog post');
    }
  }
};

const deletePostHandler = async (event) => {
  event.preventDefault();
  console.log(event);
  const blog_id = $(event.target).data('id');

  if (blog_id) {
    const response = await fetch(`/api/blogs/${blog_id}`, {
      method: 'DELETE',
      body: JSON.stringify({ blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      window.location.replace(`/dashboard`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('#comment-btn')
  .addEventListener('click', updatePostHandler);

document
  .querySelector('#delete-btn')
  .addEventListener('click', deletePostHandler);
