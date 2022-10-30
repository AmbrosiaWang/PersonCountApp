let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count= count + 1
    // 可簡寫為: count + = 1
    countEl.textContent= count
    // innerText ignores text of "hidden" element ex:空格 所以這裡用textContent
    
}

function save(){
    let countString = count + " - "
    saveEl.textContent += countString
    // innerText ignores text of "hidden" element ex:空格 所以這裡用textContent
    console.log(count)
    countEl.textContent = 0
    count = 0
}