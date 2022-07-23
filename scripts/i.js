//
fetch('https://6175c7dd03178d00173da9e3.mockapi.io/api/v1/product')           //api for the get request
    .then(response => response.json())
    .then(data => console.log(data));


    fetch(`https://6175c7dd03178d00173da9e3.mockapi.io/api/v1/product/`,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inStock: delete
        })
    }).catch(err => console.log(err))








