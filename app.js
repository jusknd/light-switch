 // Get the elements
const light = document.getElementById('light');
const onSwitchButton = document.getElementById('on-Switch');

// Add event listener to the button
onSwitchButton.addEventListener('click', function() {
  // Change light from on to off 
  if (light.classList.contains('on')) {
    light.classList.remove('on');
    light.classList.add('off');
    onSwitchButton.textContent = 'Turn On';
  } else {
    light.classList.remove('off');
    light.classList.add('on');
    onSwitchButton.textContent = 'Turn Off';
  }
});

