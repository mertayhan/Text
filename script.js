document.getElementById("getUsersAll").addEventListener("click", getUsersAll);
document.getElementById("getFirstName").addEventListener("click", getFirstName);
document.getElementById("getLastName").addEventListener("click", getLastName);
document.getElementById("getUserName").addEventListener("click", getUserName);
document.getElementById("getAddress").addEventListener("click", getAddress);
document.getElementById("getPhoneNumber").addEventListener("click", getPhoneNumber);
document.getElementById("getWebSite").addEventListener("click", getWebSite);
document.getElementById("getCompanyName").addEventListener("click", getCompanyName);
document.getElementById("getAlbumList").addEventListener("click", getAlbumList);




var request = function () {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.onerror = function () {
            reject(xhr.statusText);
        }
        xhr.send();

    })
}

function requestAlbums() {

     
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jsonplaceholder.typicode.com/albums", true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            }
            xhr.onerror = function () {
                reject(xhr.statusText);
            }
            xhr.send();
        })
    
    
}




function getUsersAll() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            var firstNamee = user.name.split(" ");
            i = user.id;
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td>${firstNamee[0]}</td>
                <td>${firstNamee[1]}</td>
                <td>${user.email}</td>
                <td>${user.address.street}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.company.name}</td>
                <td><button type="button" onclick="myFunction(${user.id})">Get AlbumList</button></td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })
}

function getFirstName() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            var firstNamee = user.name.split(" ");
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td>${firstNamee[0]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })

}
function getLastName() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            var lastNamee = user.name.split(" ");
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td></td>
                <td>${lastNamee[1]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })
}

function getUserName() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td></td>
                <td></td>
                <td>${user.username}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })
}

function getAddress() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>${user.address.street}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })
}

function getPhoneNumber() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>${user.phone}</td>
                <td></td>
                <td></td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })
}

function getWebSite() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>${user.website}</td>
                <td></td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })
}

function getCompanyName() {
    request().then(function (data) {
        let users = JSON.parse(data);
        let html = "";
        users.forEach(user => {
            html +=
                `
                <tr>
                <td>${user.id}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>${user.company.name}</td>
            </tr>
                `
            document.querySelector("#showUsers").innerHTML = html;
        });
    }).catch(function (error) {
        console.log(error);
    })
}

async function getAlbumList() {


    let albums = await requestAlbums();


    albums = JSON.parse(albums);

    let html = "";


    albums.forEach(album => {
        html +=
            `
            <tr>
            <td>${album.userId}</td>
            <td>${album.title}</td>
            </tr>  
            `
        document.querySelector("#showAlbumList").innerHTML = html;

    });

}

function myFunction(i) {
   
     setTimeout(() => {
         requestAlbums()
        .then(function (data) {
            let albums = JSON.parse(data);
           
            function isEven(item){
                return (item.userId==i)
            }
           let newAlbums= albums.filter(isEven);
            

            let html = "";

            newAlbums.forEach(album => {
                html +=
             `
                <tr>
                <td>${album.userId}</td>
                <td>${album.title}</td>
                </tr>  
                `

                document.querySelector("#showAlbumList").innerHTML = html;
            });


            

        }).catch(function (error) {
            console.log(error);
        })

    }, 2000);

    
}