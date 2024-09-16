const postId = document.querySelector('input[name="post-id"]').value;

const updateFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
  await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#update-post-form')
  .addEventListener('submit', updateFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
