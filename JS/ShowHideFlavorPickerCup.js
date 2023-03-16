function displayflavorcup()
{
    const flavorcup = document.querySelector(".flavorfour");
    flavorcup.style.display = "block";
}


function nodisplayflavorcup(){
    setTimeout(
        function nodisplayf(){
            const flavorcup = document.querySelector(".flavorfour");
            flavorcup.style.display = "none";
            },
        1000)
}