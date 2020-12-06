const listElements = require('./database/fakedatas');

const listItemInput = document.getElementById('item');
const itemsList = document.getElementById('itemsList');

//let listElements = [];

function renderElements() {
//  listElements = JSON.parse(localStorage.getItem('todoList')) || [];
  itemsList.innerHTML = '';

  for (elements of listElements) {
  
    const liNode = document.createElement('li');
    const liNodeText = document.createTextNode(elements.name);
  
    let h3 = document.createElement('h3');
    h3.appendChild(liNodeText);
    
    //get element position
    let position = listElements.indexOf(elements);

    //Create a delete button
    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'Apagar';
    btnDelete.addEventListener('click', () => {
      const newElements = deleteElement(listElements, position);
      saveElements(newElements);
      renderElements();
    });

    liNode.appendChild(h3);
    liNode.appendChild(btnDelete);

    itemsList.appendChild(liNode);

    console.log(elements);
    
  }
  
}

renderElements();

// Add Elements
document.getElementById('btnAddItem').addEventListener('click', function(event) {
  event.preventDefault();

  const itemValue = listItemInput.value;
  
  listElements = [...listElements, itemValue];
  saveElements(listElements);
  renderElements();
  
  
  listItemInput.value = '';
  listItemInput.focus();
});

//Delete Elements
function deleteElement(elements, position) {
  return elements.filter((element, index) => index !== position);
}

//save elements to localStorage
function saveElements(saveList) {
  localStorage.setItem('todoList', JSON.stringify(saveList));
}
