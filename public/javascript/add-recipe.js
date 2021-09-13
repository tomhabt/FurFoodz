async function newRecipeHandler() {

  const recipeName = $('#titleInput').val();
  const recipeDesc = $('#descriptionInput').val();

  const response = await fetch(`/api//recipe`, {
    method: 'POST',
    body: JSON.stringify({
      "recipe_name": recipeName,
      "description": recipeDesc
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

$('#instructionsText').hide();
$('#instructionsInput').hide();
let createBtn = $('#createBtn');
if (createBtn) {
  createBtn.click(() => {
    newRecipeHandler();
  });
}