document.addEventListener("keyup", e =>{
    if(e.keyCode == "38"){yur(1)}
    else if(e.keyCode == "37"){yur(2)}
    else if(e.keyCode == "39"){yur(3)}
    else if(e.keyCode == "40"){yur(4)}
    else if(e.keyCode == "32"){window.location.reload()}
    console.log(e);
})

let start = ""

let mushukX = 45;
let mushukY = 45;

function yur(as){
    if(as == 1){
        if(mushukY>0){
            mushukY=mushukY-5
            let a = document.querySelector(".mushuk")
            a.style.top = mushukY + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    else if(as == 2){
        if(mushukX>0){
            mushukX = mushukX - 5
            let a = document.querySelector(".mushuk")
            a.style.left = mushukX + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    else if(as == 3){
        if(mushukX<90){
            mushukX = mushukX + 5
            let a = document.querySelector(".mushuk")
            a.style.left = mushukX + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    else if(as == 4){
        if(mushukY<90){
            mushukY = mushukY+5
            let a = document.querySelector(".mushuk")
            a.style.top = mushukY + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    dafa()
}

let sek = 0
let min = 0
const va = document.querySelector(".timer")

const as = setInterval(()=>{
    sek++;
    let se = "00"
    let mi = "00"
    if(sek%60==0){
        min++
        sek=0
    }

    if(sek<10){se="0"+sek}
    else if(sek>9)(se=sek)

    if(min<10)(mi="0"+min)
    else if(min>10)(mi=min)

    va.textContent = `${mi}:${se}`;
}, 1000)

function dafa(){
    if(mushukX == sichqonX && mushukY == sichqonY){clearInterval(as); clearInterval(vaqt)}
}

/* let ba = "x"
const vaqt = setInterval(()=>{
    if(ba=="x"){
        let a = Math.round(Math.random()*10)
        console.log(a);
        if (a>5){yur(3)}
        else if(a<=5){yur(2)}
        ba="y"
    }
    else if(ba=="y"){
        let a = Math.round(Math.random()*10)
        console.log(a);
        if (a>5){yur(1)}
        else if(a<=5){yur(4)}
        ba="x"
    }
}, 1000)  */

let sichqonX = 0
let sichqonY = 0

function yur2(as){
    if(as == 1){
        if(sichqonY>0){
            sichqonY=sichqonY-5
            let a = document.querySelector(".sichqon")
            a.style.top = sichqonY + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    else if(as == 2){
        if(sichqonX>0){
            sichqonX = sichqonX - 5
            let a = document.querySelector(".sichqon")
            a.style.left = sichqonX + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    else if(as == 3){
        if(sichqonX<90){
            sichqonX = sichqonX + 5
            let a = document.querySelector(".sichqon")
            a.style.left = sichqonX + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    else if(as == 4){
        if(sichqonY<90){
            sichqonY = sichqonY+5
            let a = document.querySelector(".sichqon")
            a.style.top = sichqonY + "%"
            document.querySelector(".ogoh").textContent = ""
        }
        else{
            let v = document.querySelector(".ogoh")
            v.textContent = " bundan tashqariga chiqolmaydi"
        }
    }
    dafa()
}
/*
const vaqt = setInterval(()=>{ 
    let a = Math.round(Math.random()*10)
    console.log(a);
    if(a>=0 && a<=2){yur2(1)}
    else if(a>=3 && a<=5)(yur2(2))
    else if(a>=6 && a<=7)(yur2(3))
    else if(a>=8 && a<=10)(yur2(4)) 
}, 100)*/

const vaqt = setInterval(()=>{
    // 1 - chorak
    if(mushukY<=45 && mushukX<=45){
        if(mushukX>mushukY){
            if(mushukX == sichqonX || mushukX == (sichqonX+5) || mushukX == (sichqonX-5)){yur2(3)}
            else{yur2(4)}
        }
        else{
            if(mushukY == sichqonY || mushukY == (sichqonY+5) || mushukY == (sichqonY-5)){yur2(4)}
            else{yur2(3)}
        }
    }
    // 2 - chorak
    else if(mushukY<=45 && mushukX>45){
        if((mushukX-45)<(45-mushukY)){
            if(mushukY == sichqonY || mushukY == (sichqonY+5) || mushukY == (sichqonY-5)){yur2(2)}
            else{yur2(4)}
        }
        else{
            if(mushukX == sichqonX || mushukX == (sichqonX+5) || mushukX == (sichqonX-5)){yur2(4)}
            else(yur2(2))
        }
    }
    // 3 - chorak
    else if(mushukX<=45 && mushukY>45){
        if((45-mushukX)<(mushukY-45)){
            if(mushukX == sichqonX || mushukX == (sichqonX+5) || mushukX == (sichqonX-5)){yur2(3)}
            else{yur2(1)}
        }
        else{
            if(mushukY == sichqonY || mushukY == (sichqonY+5) || mushukY == (sichqonY-5)){yur2(3)}
            else(yur2(1))
        }
    }
    // 4 - chorak
    else if(mushukX>45 && mushukY>45){
        if((mushukX-45)<(mushukY-45)){
            if(mushukX == sichqonX || mushukX == (sichqonX+5) || mushukX == (sichqonX-5)){yur2(2)}
            else{yur2(1)}
        }
        else{
            if(mushukY == sichqonY || mushukY == (sichqonY+5) || mushukY == (sichqonY-5)){yur2(1)}
            else{yur2(2)}
        }
    }
    
}, 50)
