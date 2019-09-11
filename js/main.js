var btn = document.getElementById("siguientes").addEventListener("click",function(){getNext(5);});
var btn = document.getElementById("anteriores").addEventListener("click",function(){getNext(-5);});
var cont=0;
var div = document.getElementById("div_table");

function getNext(vr){    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        return res.json();        
    })
    .then((post)=>{
        console.log("vr="+vr);
        console.log("cont="+cont);
        var aux = cont + vr;
        console.log("aux="+aux);
        div.innerHTML="";
        if (cont<=0 || aux<=0) {
            cont=0;
            aux=5;
        }
        if (cont>aux) {
            cont=cont-10;
            aux=cont+5;            
        }
        
        for (let i = cont; i < aux; i++) {
            console.log(i);
            div.innerHTML+=`
            <tr>
                <td>${post[i].userId}</td>
                <td>${post[i].id}</td>
                <td>${post[i].title}</td>
                <td>${post[i].body}</td>
            </tr>
            `            
        }
        cont = cont +vr;
        aux=0;
    })
    .catch((error)=>{
        console.error();
    }
    )
}