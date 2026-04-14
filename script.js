let div = document.createElement("div");
div.classList.add ("background");
div.style.backgroundImage = "url('images.jpg')";
div.style.backgroundSize = "cover";
div.style.height = "100vh";
document.body.appendChild(div);

let h1 = document.createElement("h1");
h1.classList.add("heading");
h1.innerText = "Chat";
h1.style.color = "#ffffff";
h1.style.backgroundColor = "#323f4b";
h1.style.fontSize= "20px";
h1.style.textAlign = "center";
h1.style.fontFamily = "Roboto";
h1.style.fontWeight = "bold";
h1.style.padding = "14px";
div.appendChild(h1);

let div1 = document.createElement("div");
div1.classList.add("whole");
div1.style.padding = "14px";
div1.style.color = "#ffffff";
div1.style.fontFamily = "Roboto";
div1.style.fontSize = "12px";
div.appendChild(div1);

let store = [
    {text: "Hello, how are you?", className: "text-sent"},
    {text: "Hi Varakumar, I am good. How are you?", className: "text-rec"},
    {text: "I'm fine. I a learning HTML and CSS", className: "text-sent"},
    {text: "HTML and CSS?", className: "text-rec"},
    {text: "Yes, by doing projects parallelly, i am learning HTML and CSS" , className: "text-sent"},
    {text: "Awesome, can you tell how you are learning it", className: "text-rec"},
    {text: "call i call you", className: "text-sent"}
];

store.forEach(function(item) {
    let p = document.createElement("p");
    p.innerText = item.text;
    p.classList.add(item.className);
    
    div1.appendChild(p);
});

let para = document.querySelectorAll(".text-sent");

para.forEach(el => {
    el.style.backgroundColor = "#52606d";
    el.style.padding = "12px";
    el.style.borderTopLeftRadius = "12px";
    el.style.borderTopRightRadius = "12px";
    el.style.borderBottomRightRadius = "12px";
    el.style.textAlign = "left";
});

let para2 = document.querySelectorAll(".text-rec");

para2.forEach(Element => {
    Element.style.backgroundColor = "#52606d";
    Element.style.padding = "12px";
    Element.style.borderTopLeftRadius = "12px";
    Element.style.borderTopRightRadius = "12px";
    Element.style.borderBottomRightRadius = "12px";
    Element.style.textAlign = "left";
    Element.style.margin = "10px";
});
