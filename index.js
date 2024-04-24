/*
⣿⣿⣿⣿⣿⣿⠿⢋⣥⣴⣶⣶⣶⣬⣙⠻⠟⣋⣭⣭⣭⣭⡙⠻⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⡿⢋⣴⣿⣿⠿⢟⣛⣛⣛⠿⢷⡹⣿⣿⣿⣿⣿⣿⣆⠹⣿⣿⣿⣿
⣿⣿⣿⡿⢁⣾⣿⣿⣴⣿⣿⣿⣿⠿⠿⠷⠥⠱⣶⣶⣶⣶⡶⠮⠤⣌⡙⢿⣿
⣿⡿⢛⡁⣾⣿⣿⣿⡿⢟⡫⢕⣪⡭⠥⢭⣭⣉⡂⣉⡒⣤⡭⡉⠩⣥⣰⠂⠹
⡟⢠⣿⣱⣿⣿⣿⣏⣛⢲⣾⣿⠃⠄⠐⠈⣿⣿⣿⣿⣿⣿⠄⠁⠃⢸⣿⣿⡧
⢠⣿⣿⣿⣿⣿⣿⣿⣿⣇⣊⠙⠳⠤⠤⠾⣟⠛⠍⣹⣛⣛⣢⣀⣠⣛⡯⢉⣰
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡶⠶⢒⣠⣼⣿⣿⣛⠻⠛⢛⣛⠉⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢛⡛⢿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡈⢿⣿
⣿⣿⣿⣿⣿⣿⣿⠸⣿⡻⢷⣍⣛⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢇⡘⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣝⠻⠶⣬⣍⣛⣛⠓⠶⠶⠶⠤⠬⠭⠤⠶⠶⠞⠛⣡⣿
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣬⣭⣍⣙⣛⣛⣛⠛⠛⠛⠿⠿⠿⠛⣠⣿⣿
⣦⣈⠉⢛⠻⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⣁⣴⣾⣿⣿⣿⣿
⣿⣿⣿⣶⣮⣭⣁⣒⣒⣒⠂⠠⠬⠭⠭⠭⢀⣀⣠⣄⡘⠿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡈⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿Isn't that wonderful? ⣦⡈⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡈⣿⣿
*/

// general params

let container = document.querySelector(".container"),
cells = document.querySelectorAll(".cell"),
reset_btn = document.querySelector(".fa-arrows-rotate"),
add_btn = document.querySelector(".fa-plus"),
remove_btn = document.querySelector(".fa-minus"),
mode_field = document.querySelector(".mode"),
color_field = document.getElementById("color"),
chosen_mode = "", chosen_color = "", chosen_code = "",
menu = document.querySelector(".right-menu"),
menu_btn = document.querySelector(".fa-bars"),
menu_close = document.querySelector(".fa-xmark"),
colorCode = document.querySelectorAll(".colorCode"),
colorname = document.querySelectorAll(".colorname"),
colorTools = document.querySelectorAll(".colorTools"),
mode = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"],
url = "", lockedId

// Dynamic variable update function

function updateAllParams() {
    cells = document.querySelectorAll(".cell")
    colorCode = document.querySelectorAll(".colorCode")
    colorname = document.querySelectorAll(".colorname")
    colorTools = document.querySelectorAll(".colorTools")
    shades_field = document.querySelectorAll(".shadesField")
}

setInterval(()=>{
    updateAllParams()
    colorCode.forEach(element => {
        element.onclick = () => {
            copyToClipboard(element.innerHTML)
        }
    })
}, 1000)

//Randomize params function

function randomize(param) {
    switch (param) {
        case "color":
            return (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
            break;
        case "mode":
            return Math.floor(Math.random() * (8 - 1)) + 1;
            break;
        default:
            break;
    }
}

//Get colors to cells

async function getColors(){
    if (color_field.value == "#000000") {
        chosen_color = randomize("color")
    } else {
        chosen_color = color_field.value.replace("#","")
    }
    if (mode_field.value == "randomize") {
        chosen_mode = mode[randomize("mode")]
    } else {chosen_mode = mode_field.value}
    url = `https://www.thecolorapi.com/scheme?hex=${chosen_color}&mode=${chosen_mode}&count=${cells.length}`;
    fetch(url).then(res=>res.json()).then(result=>{
        for (let i = 0; i < cells.length; i++) {
            const element = cells[i];
            if (i!=lockedId) {
                switch (codeSelector.value) {
                    case "hex":
                        chosen_code = result.colors[i].hex.value
                        break;
                    case "rgb":
                        chosen_code = result.colors[i].rgb.value
                        break;
                    case "hsl":
                        chosen_code = result.colors[i].hsl.value
                        break;
                    case "cmyk":
                        chosen_code = result.colors[i].cmyk.value
                        break;
                    default:
                        break;
                }
                element.innerHTML = `<div class = "shadesField"></div><div class="colorTools"><i class="fa-solid fa-trash"></i><i class="fa-solid fa-heart"></i><i class="fa-solid fa-swatchbook"></i><i class="fa-solid fa-lock-open"></i></div><div class="colorInfo"><p class="colorCode">${chosen_code}</p><p class="colorname">${result.colors[i].name.value}</p></div>`
                element.setAttribute("style", `color: ${result.colors[i].contrast.value}; background: ${result.colors[i].hex.value};`)
            }
        }
        fetchedColor = result
    })
    updateAllParams()
}

function addCell() {
    var div = document.createElement('div')
    div.className = "cell"
    url = url.substring(0, url.length-1) + (cells.length+1)
    fetch(url).then(res=>res.json()).then(result=>{
        div.innerHTML = `<div class = "shadesField"></div><div class="colorTools"><i class="fa-solid fa-trash"></i><i class="fa-solid fa-heart"></i><i class="fa-solid fa-swatchbook"></i><i class="fa-solid fa-lock-open"></i></div><div class="colorInfo"><p class="colorCode">${result.colors[cells.length-1].hex.value}</p><p class="colorname">${result.colors[cells.length-1].name.value}</p></div>`
        div.setAttribute("style", `color: ${result.colors[cells.length-1].contrast.value};background: ${result.colors[cells.length-1].hex.value};`)
    })
    container.append(div)
    updateAllParams()
}

function removeCell() {
    container.lastChild.remove()
    updateAllParams()
}

//Event listeners

document.addEventListener("DOMContentLoaded",()=>{
    getColors()
})

menu_btn.addEventListener("click", ()=>{
    menu.classList.toggle("_active")
})

menu_close.addEventListener("click", ()=>{
    menu.classList.toggle("_active")
})

mode_field.onchange=()=>{ //color scheme
    if(mode_field.value == "triad"){
        if (cells.length>=3) {
            while (cells.length>3) {
                removeCell()
            }
        } else {
            while (cells.length<3) {
                addCell()
            }
        }
    } else if(mode_field.value == "quad"){
        if (cells.length>=4) {
            while (cells.length>4) {
                removeCell()
            }
        } else {
            while (cells.length<4) {
                addCell()
            }
        }
    }
    getColors()
}

color_field.onchange=()=>{ //color
    getColors()
}

add_btn.addEventListener("click", ()=>{ //add cell button
    if (mode_field.value!="triad" || mode_field.value!="quad") {
        addCell()
    } 
})

remove_btn.addEventListener("click", ()=>{ //remove cell button
    if (mode_field.value!="triad" || mode_field.value!="quad") {
        removeCell()
    }
})

reset_btn.addEventListener("click",()=>{ //reset all
    mode_field.value = "randomize"
    color_field.value = "#000000"
    codeSelector.value = "hex"
    if (cells.length>=5) {
        while (cells.length>5) {
            removeCell()
        }
    } else {
        while (cells.length<5) {
            addCell()
        }
    }
    getColors()
})

//Hotkeys
document.addEventListener('keypress', function(event) {
    switch (event.code) {
        case 'Space':
            getColors()
            break;
        case 'NumpadAdd':
            if (mode_field.value!="triad" || mode_field.value!="quad") {
                addCell()
            } 
            break;
        case 'NumpadSubtract':
            if (mode_field.value!="triad" || mode_field.value!="quad") {
                removeCell()
            }
            break;
        default:
            break;
    }
})