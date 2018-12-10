import './style/index.css';
import render from './templates/friends-content.hbs';
import {dnd} from './js/dnd';

VK.init({
    apiId: 6769892
});

function auth() {
    return new Promise((resolve, reject) => {
        VK.auth.login(data => {
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Не удалось авторизироваться'));
            }
        }, 2);
    })
}
auth().then(() => console.log('ok'));

