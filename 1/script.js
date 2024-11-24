document.addEventListener("click", (e)=>{

    let men = e.target

    if(men.getAttribute("class") == "send"){send()}
    
})
document.addEventListener("keydown", (e)=>{
    if(e.key=="Enter"){send()}
    console.log(e);
})

let keyin = [
    [1]
]
let goes = document.querySelector(".chat")

function send(){
    let sa = document.querySelector(".wow").value
    let savol1 = sa.trim()
    let savol = savol1.toLowerCase()
    let javob = ""
    if(savol==""){
        alert("bunday qilmang")
        return document.querySelector(".wow").value = ""
    }
    else if(savol=="salom"){
        javob = "Salom"
        qaytar(savol1, javob)
    }
    else if(savol=="assalom" || savol=="assalomu alaykum" || savol=="assalom-u alaykum"  || savol=="asalomu alaykum" || savol=="asalom alaykum"){
        javob = "Valeykum assalom"
        qaytar(savol1, javob)
    }
    else if(savol=="nima gap" || savol =="nima gaplar" || savol=="nima gap?" || savol =="nima gaplar?"){
        javob = "Tinchlik. <br> Uzingdachi?"
        qaytar(savol1, javob)
        keyin[0][0]=2
    }
    else if(keyin[0][0]==2 && (savol=="menda ham" || savol=="menda ham shu" || savol=="menda ham shunday" || savol=="menda ham tinch" || savol=="menda ham tinchlik")){
        javob = "Xa"
        qaytar(savol1, javob)
        keyin[0][0]=1
    }
    else if(savol=="kimsan" || savol=="isming nima" || savol=="kimsiz" || savol=="ismiz nima" || savol=="oting nima" || savol=="sening isming nima" || savol=="seni isming nima" || savol=="sizni ismiz nima" || savol=="sizni otiz nima" || savol== "sen kimsan"|| savol== "sen kimsan?" || savol=="kimsan?" || savol=="isming nima?" || savol=="kimsiz?" || savol=="ismiz nima?" || savol=="oting nima?" || savol=="sening isming nima?" || savol=="seni isming nima?" || savol=="sizni ismiz nima?" || savol=="sizni otiz nima?"){
        javob = "Men Gamingman"
        qaytar(savol1, javob)
    }
    else if(savol=="seni yaratuvching kim" || savol=="seni kim yasagan" || savol=="sizni yaratuvchinggiz kim" || savol=="sizni yaratuvchiz kim" || savol=="seni kim yaratgan"){
        javob = "Men ALLOHning izni bilan Raimkulov Lazizbek tomonidan tuzilganman"
        qaytar(savol1, javob)
    }
    else if(savol=="men zerikdim" || savol=="zerikdim" || savol=="uyin" || savol=="charchadim" || savol=="seni uyinlaring bormi"){
        javob = "<a href='./uyinlar/uyinHome.html'>O'yinlarga link</a>"
        qaytar(savol1, javob)
    }
    else{
        javob = "Menimcha men sizni tushunmadim yoki siz gramatik xato qildinggiz"
        qaytar(savol1, javob)
    }
}

function qaytar(sav, jav){
    let ans = document.createElement("div")
    ans.setAttribute("class", "QA-con")
    ans.innerHTML = `<div class="question">${sav}</div>`
    goes.appendChild(ans)
    let que = document.createElement("div")
    que.setAttribute("class", "QA-con")
    que.innerHTML = `<div class="answer">${jav}</div>`
    goes.appendChild(que)
    document.querySelector(".wow").value = ""
}





















