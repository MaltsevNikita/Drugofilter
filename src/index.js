import './style/index.css';
import render from './templates/friends-content.hbs';
import {dnd} from './js/dnd';


const container = document.querySelector('.container');

VK.init({
    apiId: 6769892
});

// const list = [
//     {name: 'Иван', last_name: 'Иванов'},
//     {name: 'Пётр', last_name: 'Петров'},
//     {name: 'Максим', last_name: 'Максимов'},
//     {name: 'Василий', last_name: 'Васильев'}
//
// ];
//
// // container.innerHTML = render( {items: list} );
//
// dnd();

