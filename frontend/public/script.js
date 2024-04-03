document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const query = document.getElementById('query').value;
    const apiKey = 'CWsuyn6BhkBRkWLjPJ1l4g==yYRMnTtJ1dclYOp0'; // Replace 'YOUR_API_KEY' with your actual API key
    const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;

    fetch(url, {
      headers: {
        'X-Api-Key': apiKey
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayResult(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  });
});

function displayResult(data) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Clear previous results
  const foodItem = data.items[0];
  const html = `
    <h2>${foodItem.name}</h2>
    <p>Calories: ${foodItem.calories}</p>
    <p>Serving Size: ${foodItem.serving_size_g}g</p>
    <p>Protein: ${foodItem.protein_g}g</p>
    <p>Sodium: ${foodItem.sodium_mg}mg</p>
    <button id="saveButton">Save as JSON</button>
  `;
  resultDiv.innerHTML = html;
}
