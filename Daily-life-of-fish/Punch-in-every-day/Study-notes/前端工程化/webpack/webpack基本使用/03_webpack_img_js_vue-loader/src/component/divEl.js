import "../css/divEl.css"

const divEl = document.createElement("div")

divEl.textContent = "我是创建出来的div元素"
divEl.classList.add("content")
document.body.append(divEl)