"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var listItemInput = document.getElementById('item');
var itemsList = document.getElementById('itemsList');
var listElements = [];

function renderElements() {
  listElements = JSON.parse(localStorage.getItem('todoList')) || [];
  itemsList.innerHTML = '';

  var _iterator = _createForOfIteratorHelper(listElements),
      _step;

  try {
    var _loop = function _loop() {
      elements = _step.value;
      var liNode = document.createElement('li');
      var liNodeText = document.createTextNode(elements);
      var h3 = document.createElement('h3');
      h3.appendChild(liNodeText); //get element position

      var position = listElements.indexOf(elements); //Create a delete button

      var btnDelete = document.createElement('button');
      btnDelete.textContent = 'Apagar';
      btnDelete.addEventListener('click', function () {
        var newElements = deleteElement(listElements, position);
        saveElements(newElements);
        renderElements();
      });
      liNode.appendChild(h3);
      liNode.appendChild(btnDelete);
      itemsList.appendChild(liNode);
      console.log(elements);
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

renderElements(); // Add Elements

document.getElementById('btnAddItem').addEventListener('click', function (event) {
  event.preventDefault();
  var itemValue = listItemInput.value;
  listElements = [].concat(_toConsumableArray(listElements), [itemValue]);
  saveElements(listElements);
  renderElements();
  listItemInput.value = '';
  listItemInput.focus();
}); //Delete Elements

function deleteElement(elements, position) {
  return elements.filter(function (element, index) {
    return index !== position;
  });
} //save elements to localStorage


function saveElements(saveList) {
  localStorage.setItem('todoList', JSON.stringify(saveList));
}