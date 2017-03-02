console.log('hello world');

document.getElementById('changeColor').addEventListener('click', function() {
  console.log('you clicked me');
});

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

    if (!name.length || !species.length || !age.length) {
      alert('All fields required.');
      return false;
    }

    if (isNaN(parseInt(age))) {
      alert('Age must be a number');
      return false;
    }

  return true;
}
