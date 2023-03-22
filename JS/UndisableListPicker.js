const pick1 = document.getElementById("scoop1");
const pick2 = document.getElementById("scoop2");
const pick3 = document.getElementById("scoop3");

function undisableScoop2() {
    if (pick1.options[pick1.selectedIndex].text === "Vanilla" || "Chocolate" || "Strawberry"){
        document.getElementById("scoop2").disabled = false;
    }
}

function undisableScoop3() {
    if (pick2.options[pick2.selectedIndex].text === "Vanilla" || pick2.options[pick2.selectedIndex].text === "Chocolate" || pick2.options[pick2.selectedIndex].text === "Strawberry"){
        document.getElementById("scoop3").disabled = false;
    }
}

function undisableScoop4() {
    if (pick3.options[pick3.selectedIndex].text === "Vanilla" || pick3.options[pick3.selectedIndex].text === "Chocolate" || pick3.options[pick3.selectedIndex].text === "Strawberry"){
        document.getElementById("scoop4").disabled = false;
    }
}

function disable(){
    document.getElementById("scoop2").disabled = true;
    document.getElementById("scoop3").disabled = true;
    document.getElementById("scoop4").disabled = true;
}

function disableChoice(){
    const fl3 = document.getElementById("scoop3")
    const noNoOption = document.getElementById("scoop2enough")
    if(fl3.options[fl3.selectedIndex].text === "Vanilla" || fl3.options[fl3.selectedIndex].text === "Chocolate" || fl3.options[fl3.selectedIndex].text === "Strawberry"){
        noNoOption.setAttribute('disabled', '')
    }
}

function enableChoice(){
    const fl3En = document.getElementById("scoop3")
    const noNoOption = document.getElementById("scoop2enough")
    if(fl3En.options[fl3En.selectedIndex].text === "That's enough for me"){
        noNoOption.disabled = false;
    }
}

function disableChoice2(){
    const fl4 = document.getElementById("scoop4")
    const noNoOption2 = document.getElementById("scoop3enough")
    if(fl4.options[fl4.selectedIndex].text === "Vanilla" || fl4.options[fl4.selectedIndex].text === "Chocolate" || fl4.options[fl4.selectedIndex].text === "Strawberry"){
        noNoOption2.setAttribute('disabled', '')
    }
}

function enableChoice2(){
    const fl4 = document.getElementById("scoop4")
    const noNoOption2 = document.getElementById("scoop3enough")
    if(fl4.options[fl4.selectedIndex].text === "That's enough for me"){
        noNoOption2.disabled = false;
    }
}