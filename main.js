const listItemInput = document.getElementById('item');
const itemsList = document.getElementById('itemsList');

document.getElementById('btnAddItem').addEventListener('click', function(event) {
  event.preventDefault();

  const itemValue = listItemInput.value;

  const liNode = document.createElement('li');
  const liNodeText = document.createTextNode(itemValue);
  liNode.appendChild(liNodeText);

  itemsList.appendChild(liNode);

  console.log(itemValue);

  listItemInput.value = '';
  listItemInput.focus();
});
