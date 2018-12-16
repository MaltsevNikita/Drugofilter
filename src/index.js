import './style/index.css';
import render from './templates/friends-content.hbs';
import {dnd} from './js/dnd';

VK.init({
    apiId: 6769892
});

function auth() {
    return new Promise((resolve, reject) => {
        VK.Auth.login(data => {
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Не удалось авторизироваться'));
            }
        }, 2);
    })

}

function callAPI(method , params){
    params.v = '5.76';

    return new Promise(( resolve,reject ) => {
        VK.api(method, params, (data) => {
            if (data.Error){
                reject(data.error);
            } else{
                resolve(data.response);
            }
        })
    })
}

auth()
    .then(() => {
        return callAPI('users.get', { name_case: 'gen'})
    })
    .then(([me]) => {
        const  headerInfo = document.querySelector('.header');
        headerInfo.textContent = 'Друзья на странице $(me.first_name) $(me.last_name)';

        return callAPI('friends.get', {friends: 'city, country,photo_100' });
    })
    .then(friends => { 
    console.log(friends)
});



// auth().then(() => console.log('ok'));
