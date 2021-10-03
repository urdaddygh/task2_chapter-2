async function get(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json()
    console.log(content)
    let arr = content;
    let cont=document.querySelector('.container');
    console.log(cont)
    for(i=0;i<arr.length;i++){
            let div = document.createElement('div');
            let header = document.createElement('h3');
            header.innerHTML = `user id ${arr[i].userId};`;
        
            let id = document.createElement('h3');
            id.innerHTML=`№${arr[i].id}`;    
        
            let title = document.createElement('p');
            title.innerHTML=`${arr[i].title}`;
        
            let body = document.createElement('p');
            title.innerHTML=`${arr[i].body}`;

            div.appendChild(header);
            div.appendChild(id);
            div.appendChild(title);
            div.appendChild(body);
            cont.appendChild(div)
        }
    }
get()