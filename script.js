//Creating A Div Using JS
let div = document.createElement("div");
//Setting ClassName
div.setAttribute("class","main_div")    
//Append In HTML Body
document.body.appendChild(div)

//Fetching URL
fetch("https://jsonplaceholder.typicode.com/photos?_limit=26")
.then((response) => response.json())
  .then((result) => {
    //Option to get the URL
    result.map((value) => {
      let key = value.url;
      let imgTag = document.createElement("img")
      imgTag.src = `https://picsum.photos/140/240?random=${key}`;
      div.appendChild(imgTag)
  // console.log(imgTag)  
    })
})