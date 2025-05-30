const arrVariants = [
    "Yes",
    "No",
    "MayBE",
    "Give me 5 kb",
    "Gm Chocolate",
    "if you try hard",
    "I can not say directly",
    "Ask another one",
    "I am not realy",
    "I think Another time",
    "it's will be easy",
    "U can not say now",
]

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const randInt = Math.floor(Math.random()*arrVariants.length)
    alert(arrVariants[randInt])
})
