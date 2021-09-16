const port = 3001

export const getdiamonddata = async () =>
    await fetch(`http://localhost:${port}/image/allproduct`)
        .then(response => response.json())
        .then(data => data)

export const getsingleuserdata = async (body) =>
    await fetch(`http://localhost:${port}/image/getsingleuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => data)

export const addproduct = async (body) =>/*  console.log(body); */

    await fetch(`http://localhost:${port}/image/upload`, {
        method: 'POST',
        body: body,
    }).then(response => response.json())
        .then(data => console.log(body))


export const Editproduct = async (body) =>/* console.log("bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", Object.fromEntries(body));*/


    await fetch(`http://localhost:${port}/image/update`, {
        method: 'PUT',
        body: body,
    }).then(response => response.json())
        .then(data => data)


export const Deleteproduct = async (body) =>/*  console.log(body); */

    await fetch(`http://localhost:${port}/image/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }).then(response => response)
        .then(data => data)