const listItemInput = document.getElementById('item');
const itemsList = document.getElementById('itemsList');
var dt = new Date()
var day = dt.getDate()
var month = dt.getMonth()
var year = dt.getFullYear()
var meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")


document.getElementById('btnAddItem').addEventListener('click', function(event) {
  event.preventDefault();

  const itemValue = listItemInput.value;

  const liNode = document.createElement('li');
  const liNodeText = document.createTextNode(itemValue);
  
  var h3 = document.createElement('h3')
  h3.appendChild(liNodeText)
  
  var p = document.createElement('p')
  p.textContent = "Adicionado: "+day+" de "+meses[month]+" de "+year

  liNode.appendChild(h3);
  liNode.appendChild(p)

  itemsList.appendChild(liNode);

  console.log(itemValue);

  listItemInput.value = '';
  listItemInput.focus();
});
