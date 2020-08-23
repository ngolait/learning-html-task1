const listItemInput = document.getElementById('item');
const itemsList = document.getElementById('itemsList');

const months = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

let listElements = JSON.parse(localStorage.getItem('todoList')) || [];


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
    //let position = listElements.indexOf(elements);

    //Create a delete button
    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'Apagar';
    btnDelete.setAttribute('onclick', 'deleteElements('+elements+')');

    liNode.appendChild(h3);
    liNode.appendChild(p);
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
function deleteElements (elements) {
  //listElements.splice(position, 1);

  let newListElements = listElements.filter( a => {
    return a !== elements;         
  });
  
  saveElements(newListElements);
  renderElements();
}

//save elements to localStorage
function saveElements(saveList) {
  localStorage.setItem('todoList', JSON.stringify(saveList));
}
