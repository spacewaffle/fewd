var lights = 'on';

function switchLights() {
  console.log("switching lights");
  if(lights == 'on') {
    document.getElementById('container').className = "dark";
    lights = 'off';
  } else {
    document.getElementById('container').className = '';
    lights = 'on';
  }
}

document.getElementById('light_switch').onclick = switchLights;