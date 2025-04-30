const api_body = document.querySelector('.api_body');

const qoutes_api = "https://dummyjson.com/quotes";


 
// const Quotes = ()=>{
//      const fetchqu = fetch(qoutes_api , {
//         headers:{
//             Accept:"application/json"
//         }
//      })
//      .then((res)=>{

//          return res.json()

//      })
//      .then ((data)=>{
//     const result =Math.floor( Math.random() * data.quotes.length);
//     const randomquote = data.quotes[result];

//     api_body.innerHTML = `${randomquote.quote} " <br><br> - <strong>${randomquote.author}</strong>`;
//      })
//    .catch((err)=>{

//     console.log("error", err);

//     api_body.innerHTML = `😕 Oops! Failed to fetch. Please try again.`;
    

//    })
// }   

 


// using async func


async function Quotes() {
 try
    {const  res = await fetch(qoutes_api);

    const data = await res.json();


     const randomindex = Math.floor(Math.random() * data.quotes.length);
      const  result  = data.quotes[randomindex];

      api_body.innerHTML = `${result.quote}" <br><br> — <strong>${result.author}</strong>`;
}
catch(error){
     
  api_body.innerHTML=`😕 Oops! Failed to fetch. Please try again. ERROR: ${error}`;

}
}
  
 
 

Quotes();
document.getElementById('fetchquote').addEventListener("click", Quotes);