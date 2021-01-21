function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for(let i = 0; i < people.length; i++) {
    let h1 = document.createElement('h1'); // creates a h1 element 
    let h2 = document.createElement('h2'); // creates a h2 element

    h1.innerHTML = people[i].name;
    h2.innerHTML = people[i].job;
    
    content.appendChild(h1);// This appends the h1 to the #content section
    content.appendChild(h2);// This appends the h2 to the #content section
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);





 


