'use strict'

import { add, remove, reset} from './modules/vars.js'
import {addNumber} from '/modules/plus.js'
import {removeNumber} from '/modules/minus.js'
import {resetNumber} from '/modules/reset.js'



add.addEventListener('click', addNumber);

remove.addEventListener('click', removeNumber)

reset.addEventListener('click', resetNumber)

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// }

// const floki = new User('Dima', 23)
// const floki1 = new User('Dimas', 27)
// console.log(floki);
// console.log(floki1);