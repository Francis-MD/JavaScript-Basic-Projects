import get from "./utils/getElement.js";
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';


const btn = get('.btn');

const showUser = async () => {
    //get user from API
    const person = await getUser();
    displayUser(person);
    // getUser().then(data => console.log(data));
    //display user

};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);

