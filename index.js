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
shades_field = document.querySelectorAll(".shadesField"),
colorCode = document.querySelectorAll(".colorCode"),
colorname = document.querySelectorAll(".colorname"),
colorTools = document.querySelectorAll(".colorTools"),
rm_cont_head = document.querySelectorAll(".rm-content-header p"),
rm_cont_cont = document.querySelectorAll(".rm-content-container div"),
favorite_colors = document.querySelector(".rm-library"),
favorite_color = document.querySelectorAll(".favorite-color"),
favorite_color_name = document.querySelectorAll(".fav-name"),
mode = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"],
url = "", lockedId

// Dynamic variable update function

function updateAllParams() {
    cells = document.querySelectorAll(".cell")
    shades_field = document.querySelectorAll(".shadesField")
    colorCode = document.querySelectorAll(".colorCode")
    colorname = document.querySelectorAll(".colorname")
    colorTools = document.querySelectorAll(".colorTools")
    shades_field = document.querySelectorAll(".shadesField")
    favorite_colors = document.querySelector(".rm-library")
    favorite_color = document.querySelectorAll(".favorite-color")
    favorite_color_name = document.querySelectorAll(".fav-name")
}

setInterval(()=>{
    updateAllParams()
    colorCode.forEach(element => {
        element.onclick = () => {
            copyToClipboard(element.innerHTML)
        }
    })
    for (let i = 0; i < cells.length; i++) { //color tools buttons
        const element0 = colorTools[i].childNodes[0];
        element0.onclick = () => { //delete cell
            cells[i].remove()
        }
        const element1 = colorTools[i].childNodes[1];
        element1.onclick = () => {
            localStorage.setItem(`${fetchedColor.colors[i].name.value}`, JSON.stringify(fetchedColor.colors[i]))
            fetchFavoriteColor()
        }
        const element2 = colorTools[i].childNodes[2];
        element2.onclick = () => {
            getShades(fetchedColor.colors[i].hsl,i)
            console.log(i)
        }
        const element3 = colorTools[i].childNodes[3];
        element3.onclick = () => { //lock and unlock color generate
            if (element3.classList.contains("fa-lock-open")) {
                lockColor(element3,i)
            } else {
                unlockColor(element3,i)
            }
        }
    }
    for (let i = 0; i < favorite_color.length; i++) {
        favorite_color[i].querySelector(".fa-trash").addEventListener("click",()=>{
            localStorage.removeItem(`${favorite_color_name[i].innerHTML}`)
            fetchFavoriteColor()
        })
        favorite_color[i].querySelector(".fav-name").addEventListener("click",()=>{
            color_field.value = favorite_color[i].querySelector(".fav-color").innerHTML;
            getColors()
        })
        favorite_color[i].querySelector(".fav-color").addEventListener("click",()=>{
            const element4 = favorite_color[i].querySelector(".fav-color")
            copyToClipboard(element4.innerHTML)
        })
    }
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

function fetchFavoriteColor() {
    favorite_colors.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const element = JSON.parse(localStorage.getItem(localStorage.key(i)));
        switch (codeSelector.value) {
            case "hex":
                chosen_code = element.hex.value
                break;
            case "rgb":
                chosen_code = element.rgb.value
                break;
            case "hsl":
                chosen_code = element.hsl.value
                break;
            case "cmyk":
                chosen_code = element.cmyk.value
                break;
            default:
                break;
        }
        var div = document.createElement('div')
        div.className = "favorite-color"
        div.setAttribute("style", `background: ${element.hex.value};color:${element.contrast.value}`)
        div.innerHTML = `<div class="fav-info""><p class="fav-name">${element.name.value}</p><p class="fav-color">${element.hex.value}</p></div><i class="fa-solid fa-trash"></i>`
        favorite_colors.append(div)
    }
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

function removeFavorite(i) {
    favorite_colors[i].remove
}

//Event listeners

document.addEventListener("DOMContentLoaded",()=>{
    getColors()
})

menu_btn.addEventListener("click", ()=>{
    menu.classList.toggle("_active")
    fetchFavoriteColor()
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

// +html2pdf

document.querySelector(".fa-print").addEventListener("click", (generatePDF))

function generatePDF() {
    html2pdf().from(container).save();
}

// -html2pdf

// +copy2buffer

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log(`Color ${text} copied to clipboard`);
    })
    .catch((error) => {
      console.error('Error copying to clipboard:', error);
    });
}

// -copy2buffer

// +lockColor

function lockColor(element,i) {
    element.classList.replace("fa-lock-open","fa-lock")
    colorTools[i].classList.add("_locked")
    color_field.value = colorCode[i].innerHTML
    lockedId = i
    getColors()
}

function unlockColor(element,i) {
    colorTools[i].classList.remove("_locked")
    element.classList.replace("fa-lock","fa-lock-open")
    color_field.value = "#000000"
    lockedId = undefined
}

// -lockColor

for (let i = 0; i < rm_cont_head.length; i++) {
    const element = rm_cont_head[i];
    element.addEventListener("click",()=>{
        switch (i) {
            case 0:
                rm_cont_head[i].classList.add("_active_btn")
                rm_cont_head[i+1].classList.remove("_active_btn")
                rm_cont_cont[i].setAttribute("style","display:flex;")
                rm_cont_cont[i+1].setAttribute("style","display:none;")
                break;
            case 1:
                rm_cont_head[i].classList.add("_active_btn")
                rm_cont_head[i-1].classList.remove("_active_btn")
                rm_cont_cont[i].setAttribute("style","display:flex;")
                rm_cont_cont[i-1].setAttribute("style","display:none;")
                break;
            default:
                break;
        }
    })
}

// +color shades generation

async function getShades(color,i) {
    colorTools[i].childNodes[2].classList.toggle("_active_btn")
    shades_field[i].classList.toggle("_active_shades")
    shades_field[i].innerHTML = ""
    let shades = [], convertable = []
    if (shades_field[i].classList.contains("_active_shades")) {
        for (let i = 1; i < 20; i++) {
            shades.push([color.h,`${color.s}%`,`${i*5}%`])
            convertable.push([color.h,color.s,i*5])
        }
        for (let j = 0; j < shades.length; j++) {
            var div = document.createElement('div')
            div.className = "shade"
            switch (codeSelector.value) {
                case "hex":
                    div.innerHTML = `<p>${hslToHex(convertable[j])}</p>`
                    break;
                case "rgb":
                    div.innerHTML = `<p>rgb(${hslToRgb(convertable[j])})</p>`
                    break;
                case "hsl":
                    div.innerHTML = `<p>hsl(${shades[j]})</p>`
                    break;
                case "cmyk":
                    div.innerHTML = `<p>cmyk(${hslToCmyk(convertable[j])})</p>`
                    break;
                default:
                    break;
            }
            if (j<10) {
                div.setAttribute("style", `background-color: hsl(${shades[j]}); color: #fff`)
                div.setAttribute("value", `${convertable[j]}`)
            } else {
                div.setAttribute("style", `background-color: hsl(${shades[j]}); color: #000`)
                div.setAttribute("value", `${convertable[j]}`)
            }
            shades_field[i].prepend(div)
        }
    }
}

function hslToHex([h, s, l]) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  
  function hslToRgb([h, s, l]) {
      s /= 100;
      l /= 100;
      const k = n => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))]; 
  }
  
  // hsl to cmyk
  
  function hslToCmyk([h, s, l]) {
    // Convert HSL to RGB
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r, g, b;
    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }
    r = (r + m) * 255;
    g = (g + m) * 255;
    b = (b + m) * 255;
  
    // Convert RGB to CMYK
    let k = 1 - Math.max(r, g, b) / 255;
    let cmyk = {
      c: (1 - r / 255 - k) / (1 - k),
      m: (1 - g / 255 - k) / (1 - k),
      y: (1 - b / 255 - k) / (1 - k),
      k: k
    };
    cmyk.c *= 100;
    cmyk.m *= 100;
    cmyk.y *= 100;
    cmyk.k *= 100;
  
    return cmyk;
  }
  
  // -colorShades

// -color shades generation

// +color models switch

function toHEX() {
    for (let i = 0; i < colorCode.length; i++) {
        const element = colorCode[i];
        element.innerHTML = fetchedColor.colors[i].hex.value
    }
    for (let i = 0; i < shades_field_active.length; i++) {
        const element = shades_field_active[i];
        for (let i = 0; i < element.childNodes.length; i++) {
            const element2 = element.childNodes[i];
            element2.innerHTML = `<p>${hslToHex(element2.getAttribute("value").split(","))}</p>`
        }
    }
}

function toRGB() {
    for (let i = 0; i < colorCode.length; i++) {
        const element = colorCode[i];
        element.innerHTML = fetchedColor.colors[i].rgb.value
    }
    for (let i = 0; i < shades_field_active.length; i++) {
        const element = shades_field_active[i];
        for (let i = 0; i < element.childNodes.length; i++) {
            const element2 = element.childNodes[i];
            element2.innerHTML = `<p>rgb(${hslToRgb(element2.getAttribute("value").split(","))})</p>`
        }
    }
}

function toCMYK() {
    for (let i = 0; i < colorCode.length; i++) {
        const element = colorCode[i];
        element.innerHTML = fetchedColor.colors[i].cmyk.value
    }
    for (let i = 0; i < shades_field_active.length; i++) {
        const element = shades_field_active[i];
        for (let i = 0; i < element.childNodes.length; i++) {
            const element2 = element.childNodes[i];
            element2.innerHTML = `<p>cmyk(${hslToCmyk(element2.getAttribute("value").split(","))})</p>`
        }
    }
}

function toHSL() {
    for (let i = 0; i < colorCode.length; i++) {
        const element = colorCode[i];
        element.innerHTML = fetchedColor.colors[i].hsl.value
        element.setAttribute("style","font-size: 2rem;")
    }
    for (let i = 0; i < shades_field_active.length; i++) {
        const element = shades_field_active[i];
        for (let i = 0; i < element.childNodes.length; i++) {
            const element2 = element.childNodes[i];
            element2.innerHTML = `<p>hsl(${hslToHsl(element2.getAttribute("value").split(","))})</p>`
        }
    }
}

function switchColorCode() {
    switch (codeSelector.value) {
        case "hex":
            toHEX();
            break;
        case "rgb":
            toRGB();
            break;
        case "hsl":
            toHSL();
            break;
        case "cmyk":
            toCMYK();
            break;
        default:
            break;
    }
}

// -color models switch

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