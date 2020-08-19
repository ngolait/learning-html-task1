const listItemInput = document.getElementById('item');
const itemsList = document.getElementById('itemsList');

const months = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

let listElements = JSON.parse(localStorage.getItem('todo_list')) || [];

function renderElements() {

  itemsList.innerHTML = '';

  for (elements of listElements) {
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
  
    const liNode = document.createElement('li');
    const liNodeText = document.createTextNode(elements);
  
    let h3 = document.createElement('h3');
    h3.appendChild(liNodeText);
    
    let p = document.createElement('p');
    p.textContent = `Adicionado: ${day} de ${months[month]} de ${year}`;

    //get element position
    let position = listElements.indexOf(elements);

    //Create a delete button
    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'Apagar';
    btnDelete.setAttribute('onclick', 'deleteElements('+position+')');

    liNode.appendChild(h3);
    liNode.appendChild(p);
    liNode.appendChild(btnDelete);

    itemsList.appendChild(liNode);

    console.log(elements);
    
  }
  
}

// Add Elements
document.getElementById('btnAddItem').addEventListener('click', function(event) {
  event.preventDefault();

  const itemValue = listItemInput.value;
  listElements.push(itemValue);

  renderElements();
  saveElements();

  listItemInput.value = '';
  listItemInput.focus();
});

//Delete Elements
function deleteElements (position) {
  listElements.splice(position, 1);
  renderElements();
  saveElements();
}

//save elements to localStorage
function saveElements() {
  localStorage.setItem('todo_list', JSON.stringify(listElements));
}