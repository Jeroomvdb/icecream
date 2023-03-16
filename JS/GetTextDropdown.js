const e = document.getElementById("scoop1");
const f = document.getElementById("scoop2");
const g = document.getElementById("scoop3")
const h = document.getElementById("scoop4")

const w = document.getElementById("order");

function onChange() {
    const text1 = e.options[e.selectedIndex].text;
    const text2 = f.options[f.selectedIndex].text;
    const text3 = g.options[g.selectedIndex].text;
    const text4 = h.options[h.selectedIndex].text;
    document.getElementById("order").innerHTML = (`${text1} ${text2} ${text3} ${text4}`).replace(/Pick your flavor/g, "").replace(/That's enough for me/g, "");


    const price1 = e.options[e.selectedIndex].value;
    const price2 = f.options[f.selectedIndex].value;
    const price3 = g.options[g.selectedIndex].value;
    const price4 = h.options[h.selectedIndex].value;
    document.getElementById("price").innerHTML = "€" + (Number(price1) + Number(price2) + Number(price3) + Number(price4));
}

e.onchange = onChange;
onChange();

f.onchange = onChange;
onChange();

g.onchange = onChange;
onChange();

h.onchange = onChange;
onChange();
