function listOfColours(colours) {
  // Write your code here...
  let content = document.getElementById('content');
  let dropMenu = document.createElement('select');

  dropMenu.addEventListener('change', e =>{
    let pGraph = document.querySelector('p');
    pGraph.innerHTML = `You have selected the color ${e.target.value}`;
    pGraph.style.color = e.target.value;
  })
  let pGraph1 = document.createElement('p');
  colours.forEach( el => {
	  let option = document.createElement('option');
	  option.value = el;
	  option.innerHTML = el;
	  dropMenu.append(option);
  });
  content.append(dropMenu);
  content.append(pGraph1);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
