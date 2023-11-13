'use strict';

const lista = document.querySelector('.list');
const prodotti = ['pasta', 'olio', 'carne', 'pane', 'sale', 'zucchero'];
console.log(prodotti);


let i = 0;

while (i < prodotti.length) {
    
    console.log(prodotti[i]);
    const li = document.createElement('li');
    lista.append(li);
    li.append(prodotti[i]);
    
    i++;
}







