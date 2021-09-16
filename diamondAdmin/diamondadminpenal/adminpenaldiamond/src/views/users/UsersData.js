// // const fields = ['orderid', 'name', 'size', 'shape', 'img', 'modify', 'status',]
// const usersData = [
//   { orderid: 0, name: 'John Doe', size: '2018/01/01', shape: 'Guest', img: "url", status: 'Pending' },
//   { orderid: 1, name: 'Samppa Nori', size: '2018/01/01', shape: 'Member', img: "url", status: 'Active' },
//   { orderid: 2, name: 'Estavan Lykos', size: '2018/02/01', shape: 'Staff', img: "url", status: 'Banned' },
//   { orderid: 3, name: 'Chetan Mohamed', size: '2018/02/01', shape: 'Admin', img: "url", status: 'Sold' },
//   { orderid: 4, name: 'Derick Maximinus', size: '2018/03/01', shape: 'Member', img: "url", status: 'Pending' },
//   { orderid: 5, name: 'Frorderiderik Dávorderid', size: '2018/01/21', shape: 'Staff', img: "url", status: 'Active' },
//   { orderid: 6, name: 'Yiorgos Avraamu', size: '2018/01/01', shape: 'Member', img: "url", status: 'Active' },
//   { orderid: 7, name: 'Avram Tarasios', size: '2018/02/01', shape: 'Staff', img: "url", status: 'Banned' },
//   { orderid: 8, name: 'Quintin Ed', size: '2018/02/01', shape: 'Admin', img: "url", status: 'Sold' },
//   { orderid: 9, name: 'Enéas Kwadwo', size: '2018/03/01', shape: 'Member', img: "url", status: 'Pending' },
//   { orderid: 10, name: 'Agapetus Tadeáš', size: '2018/01/21', shape: 'Staff', img: "url", status: 'Active' },
//   { orderid: 11, name: 'Carwyn Fachtna', size: '2018/01/01', shape: 'Member', img: "url", status: 'Active' },
//   { orderid: 12, name: 'Nehemiah Tatius', size: '2018/02/01', shape: 'Staff', img: "url", status: 'Banned' },
//   { orderid: 13, name: 'Ebbe Gemariah', size: '2018/02/01', shape: 'Admin', img: "url", status: 'Sold' },
//   { orderid: 14, name: 'Eustorgios Amulius', size: '2018/03/01', shape: 'Member', img: "url", status: 'Pending' },
//   { orderid: 15, name: 'Leopold Gáspár', size: '2018/01/21', shape: 'Staff', img: "url", status: 'Active' },
//   { orderid: 16, name: 'Pompeius René', size: '2018/01/01', shape: 'Member', img: "url", status: 'Active' },
//   { orderid: 17, name: 'Paĉjo Jadon', size: '2018/02/01', shape: 'Staff', img: "url", status: 'Banned' },
//   { orderid: 18, name: 'Micheal Mercurius', size: '2018/02/01', shape: 'Admin', img: "url", status: 'Sold' },
//   { orderid: 19, name: 'Ganesha Dubhghall', size: '2018/03/01', shape: 'Member', img: "url", status: 'Pending' },
//   { orderid: 20, name: 'Hiroto Šimun', size: '2018/01/21', shape: 'Staff', img: "url", status: 'Active' },
//   { orderid: 21, name: 'Vishnu Serghei', size: '2018/01/01', shape: 'Member', img: "url", status: 'Active' },
//   { orderid: 22, name: 'Zbyněk Phoibos', size: '2018/02/01', shape: 'Staff', img: "url", status: 'Banned' },
//   { orderid: 23, name: 'Aulus Agmundr', size: '2018/01/01', shape: 'Member', img: "url", status: 'Pending' },
//   { orderid: 42, name: 'Ford Prefect', size: '2001/05/25', shape: 'Alien', img: "url", status: 'Don\'t panic!' }
// ]
const port = 3001;
// export default usersData
export const userlogin = async (body) =>
  await fetch(`http://localhost:${port}/image/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(data => data)

export const usersignup = async (body) =>
  await fetch(`http://localhost:${port}/image/signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(data => data)
