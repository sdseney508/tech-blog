const newFormHandler = async (event) => {
  event.preventDefault();

  const blog_title = document.querySelector('#blog-name').value.trim();
  const blog_description = document.querySelector('#blog-desc').value.trim();

  if (blog_title && blog_description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ blog_title, blog_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
