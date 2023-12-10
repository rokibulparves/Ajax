function loadData(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const ajx = new XMLHttpRequest();

        ajx.onload = function() {
            if(this.status >= 400){
                reject(`There was an application Error ${this.status}`);
            } else{
                resolve(JSON.parse(this.response));
            }
        }
        ajx.onerror = function() {
            reject("There is an Error!");
        }

        ajx.open(method, url);

        ajx.send(data);
    })
    return promise;
}


function getData() {
    loadData("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responseData) => {
        document.getElementById("title").innerHTML = responseData.title;
    })
    .catch((err) => console.log(err))
}

function postData() {
    loadData("POST", "https://jsonplaceholder.typicode.com/posts", 
    JSON.stringify({
        title: 'New Post',
        body: 'bar',
        userId: 1,
      }))
    .then((responseData)=> console.log(responseData))
    .catch((err) => console.log(err))
}

function updateData() {
    loadData("PUT", "https://jsonplaceholder.typicode.com/posts/1", 
    JSON.stringify({
        title: 'Updated data'
      }))
    .then((responseData)=> {
        document.getElementById("title").innerHTML = responseData.title;
    })
    .catch((err) => console.log(err))
}

function patchData() {
    loadData("PATCH", "https://jsonplaceholder.typicode.com/posts/1", 
    JSON.stringify({
        title: 'Patched Data',
        body: 'faa',
        userId: 2,
      }))
    .then((responseData)=> {
        document.getElementById("title").innerHTML = responseData.title;
    })
    .catch((err) => console.log(err))
}

function deleteData() {
    loadData("Delete", "https://jsonplaceholder.typicode.com/posts/1")
}