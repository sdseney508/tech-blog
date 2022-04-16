const newCommentHandler = async (event) => {
  event.preventDefault();

  const blog_comment = document.querySelector('#comment-description').value.trim();
  const blog_id = parseInt(document.querySelector('#b_id').innerHTML);

  if (blog_id && blog_comment) {
    const response = await fetch(`/api/blogcomments/`, {
      method: 'POST',
      body: JSON.stringify({ blog_comment, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.replace(`/blog/${blog_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('#comment-btn')
  .addEventListener('click', newCommentHandler);
