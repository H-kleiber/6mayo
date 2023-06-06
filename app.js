const datos = async () => {
    try {
        const request=await fetch("http://localhost:3000/users");
        const res=await request.json();
        console.log(res)
        renderData(res);  
    } catch (error) {
        console.log(error)
        
    }
     };
     datos()
    
     function renderData(res) {
        const fragmento=document.createDocumentFragment();
        const main=document.querySelector('.container')
        res.forEach(element => {
        const div=document.createElement('div');
        const id=document.createElement('li');
        const title=document.createElement('h1');
        div.appendChild(id)
        div.appendChild(title)
        id.textContent=element.id
        title.textContent=element.name
        
        fragmento.appendChild(div)   
        });
        main.appendChild(fragmento);
     }


     



const createUser = async () => {
         const data = {
           name: 'Pedro',
         };
         const request = await fetch('http://localhost:3000/users', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
         });
         // return request.json()
         const info = await request.json();
         console.log(info);
       
       };

const enn=document.querySelector(".enn")
enn.addEventListener('click',function(){
        createUser()
});