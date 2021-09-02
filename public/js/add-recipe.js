async function newFormHandler(event) {
    event.preventDefault();
  
    const recipe_name = document.querySelector('input[name="recipe-name"]').value;
    const recipe_source_url = document.querySelector('input[name="recipe-url"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        recipe_name,
        recipe_source_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
  