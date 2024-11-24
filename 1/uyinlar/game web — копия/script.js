/* rejalar:
    1) o'q otadiganni taxlash
    2) o'q dushman positioniga to'g'ri kelsa uni yuq qil va enemy natijalrini oshirib borish
    3) o'ngga chapga harakatlanib turadigan dushman
    4) har round dan keyin dushman sonini oshirib borish
    5) jon beradigan qilish
    6) joni qolmasa uyin tugaydigan qilish
    7) restart tugmasini yartish
    8) history tugmasi yaratish va har bitta uyin natijalarini usha yerga yigib borish
    9) har bitta dushman o'lganda enemy ruyxatni oshirib borish
    10) roundlar sonini cheklash 
    11) local store ga odamni natijalarini saqlab borish
    12) vaqt bulsa bosh saxifa yaratish 
    13) bosh saxifada registratsiyadan har bitta odamga alohida akautn ochib berish
    14) har bir akauntda local storega natijasini saqlab borish 
    15) va bu akauntga u odam kirganida esiki natijalarini ko'rsatadigan qilish 
    16) iloji bulsa level ham yaratish shunga qarab dushman harakatini tezlashtirib borish
    17) tinimsiz 5ta o'q otadigan qilish 
    18) qayta o'qlash uchun 3 sekuund ketsin
*/


document.addEventListener('keydown', e => {
    if (e.key == "ArrowRight") {
        sur(1);
    } else if (e.key == "ArrowLeft") {
        sur(2);
    } else if (e.keyCode == "32") {
        fire();
    } else if(e.keyCode == "65") {restart()}
    console.log(e);
});

// Rest of your JavaScript code...

let xato = document.querySelector(".ogoh")
let a  = 0

function sur(as){
    if (as == 1){
        if(a == 90){xato.innerHTML = "bundan <br> tashqariga <br> chiqolmaysiz !!!"}
        else{
            a = a + 5
            let yur = document.querySelector(".harakatchi")
            yur = yur.setAttribute(`style`, `left: ${a + "%"} `)
            xato.innerHTML = ""
            fireMove()
        }
    }
    else if(as == 2){
        if(a == 0){xato.innerHTML = "bundan <br> tashqariga <br> chiqolmaysiz !!!"}
        else{
            a = a - 5
            let yur = document.querySelector(".harakatchi")
            yur = yur.setAttribute(`style`, `left: ${a + "%"} `)
            xato.innerHTML = ""
            fireMove()
        }
    }
}

let u = a + 4.25

function fireMove(){
    u = a + 4.25
}

function instration(){
    alert(`
    Press Restart button on display or A button on your keyboard for restarting.
    Press Fire button on display or Space Button on your keyboard for shooting fire.
    Press indicator buttons on display or on your keyboard for moving.
    `)
}

function restart(){
    window.location.reload()
}

let tek = 0
function fire(){
    if(tek==0){
        const maydon = document.querySelector(".ulibket");
        maydon.setAttribute("class", "bang")
        maydon.style.left = u + "%"
        tek = 1
        setTimeout(()=>{
            document.querySelector(".bang").setAttribute("class", "ulibket")
            tek = 0
            tekshir()
        }, 200)
    }
} 

let a1 = 50
let a2 = 40
let a3 = 45
let qayt1 = "ung"
let qayt2 = "chap"
let qayt3 = "chap"

const vaqt = setInterval(() => {
    a1p()
    a2p()
    a3p()
    nish()
    console.log(a2, a2 + 10, u);
}, 25)

function a1p(){
    if(qayt1 == "chap"){
        a1 = a1 - 0.5
        if(a1 == 50){qayt1='ung'}
    }
    else if (qayt1 == 'ung'){
        a1 = a1 + 0.5
        if(a1 == 90){qayt1='chap'}
    }
}
function a2p(){
    if(qayt2 == "chap"){
        a2 = a2 - 0.5
        if(a2 == 0){qayt2='ung'}
    }
    else if (qayt2 == 'ung'){
        a2 = a2 + 0.5
        if(a2 == 40){qayt2='chap'}
    }
}
function a3p(){
    if(qayt3 == "chap"){
        a3 = a3 - 1.125
        if(a3 == 0){qayt3='ung'}
    }
    else if (qayt3 == 'ung'){
        a3 = a3 + 1.125
        if(a3 == 90){qayt3='chap'}
    }
}

function nish(){
    let xa1 = document.querySelector(".b1")
    let xa2 = document.querySelector(".b2")
    let xa3 = document.querySelector(".b3")
    xa1.style.left = (a1 + "%")
    xa2.style.left = (a2 + "%")
    xa3.style.left = (a3 + "%")
}

function tekshir(){
    if((a3+10)>=u && a3<=u){boom(3)}
    else if((a2+10)>=u && a2<=u){boom(2)}
    else if((a1+10)>=u && a1<=u){boom(1)}
} 

let tux = 0

function boom(da){
    let uyinchi = document.querySelector(`.a${da}`)
    uyinchi.remove()
    if(da == 1){tux=tux+1}
    else if(da==2){tux=tux+2}
    else if(da==3){tux=tux+3}

    if(tux==6){clearInterval(vaqt)}
}



