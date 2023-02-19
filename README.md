How to use localStorage in Javascript and React

### LocalStorage has four methods:

- localStorage.setItem("data",data)
- localStorage.getItem("data")
- localStorage.removeItem("data")
- localStorage.remove()

### localStorage.setItem("data",data)

- setItem(), we can set an item to localStorage that will persist even after we reload the page.

- const click = () =>{localStorage.setItem('data','data')}
return(<button onClick = {click}>Click</button>)

### localStorage.getItem("data")
- After setting data, we can access the data with localStorage.getItem(“data”).

Here, we can get the element as a string with JSON.stringify() or as an object with JSON.parse() from a string.

- const data = JSON.stringify(localStorage.getItem('data'))

### localStorage.removeItem("data")
- localStorage.removeItem('data') we can remove the localStorage item.

Its use case is similar to setItem() – when we want to remove an item, we click a button to complete that functionality.

- const remove = () =>{localStorage.removeItem('data')}
return(<button onClick = {remove}>Click</button>)

### localStorage.remove()
- With this function, we can remove all the items in one go
- const removeall = () =>{localStorage.remove}
return(<button onClick = {removeall}>Click</button>)


- Doc source: https://www.educative.io/answers/how-to-use-localstorage-in-javascript-and-react