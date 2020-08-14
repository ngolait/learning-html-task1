const listItemInput = document.getElementById('item');
const itemsList = document.getElementById('itemsList');

const months = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro",    "Novembro","Dezembro")

document.getElementById('btnAddItem').addEventListener('click', function(event) {
  event.preventDefault();

  const dt = new Date()
  const day = dt.getDate()
  const month = dt.getMonth()
  const year = dt.getFullYear()

  const itemValue = listItemInput.value;

  const liNode = document.createElement('li');
  const liNodeText = document.createTextNode(itemValue);
  
  let h3 = document.createElement('h3')
  h3.appendChild(liNodeText)
  
  let p = document.createElement('p')
  p.textContent = `Adicionado: ${day} de ${months[month]} de ${year}`

  let btnDelete = document.createElement('button')
  btnDelete.textContent = 'Apagar'

  liNode.appendChild(h3);
  liNode.appendChild(p)
  liNode.appendChild(btnDelete)

  itemsList.appendChild(liNode);

  console.log(itemValue);

  listItemInput.value = '';
  listItemInput.focus();
});
