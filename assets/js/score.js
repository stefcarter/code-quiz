function addItem(list, inputField) { 
    var list = document.getElementById(list);
    var listItem = document.createElement("ul");
    listItem.innerText = inputField.value; 
    list.appendChild(listItem);
    return false;
  }