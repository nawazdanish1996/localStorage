const user = {
    name: "Nawaz Danish",
    name: "Rana",
    name: "Raja"
}

// window.localStorage.setItem('user', user); // [object object]
window.localStorage.setItem('user', JSON.stringify(user));
// window.localStorage.getItem('user');


// window.localStorage.removeItem('user');
// window.localStorage.clear();