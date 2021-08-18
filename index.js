function submitData(userName, userEmail){
    
return fetch('http://localhost:3000/users',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body:JSON.stringify({ name: userName, email:userEmail})
    })
    .then(res=> res.json())
    .then(data => {
        const div = document.createElement('div')
        const ul = document.createElement('ul')
        document.body.appendChild(div)
        div.appendChild(ul)
        ul.append(data.id)
        console.log(data)
    })
    .catch(error => {

        document.body.append(error)
    } )
}
// submitData('Billy', 'www.BillBo.com')