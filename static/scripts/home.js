console.log('hello world');

function validateForm() {
  console.log('validating form')
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name.length && !species.length && !age.length) {
    console.log('successfully added');
    return true;
  }
  else {
    console.log('all fields required.');
    return false;
  }
}
