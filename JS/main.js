async function IncludeJavascript(filename){
    var script = await document.createElement('script');
    // <script src=""
    script.src = await filename;
    return new Promise((resolve,reject)=>{
        script.onload = ()=>{
            resolve()
        }
        document.body.appendChild(script);
    })
}


IncludeJavascript('JS/PageSlide.js');
IncludeJavascript('JS/ShowHideFlavorPickerCup.js');
IncludeJavascript('JS/GetTextDropdown.js');
//IncludeJavascript('JS/ShowCupScone.js');
IncludeJavascript('JS/ShowCone.js');




window.onload = ()=>{ // html event
    
  




    
    //console.log(message)
    //console.log(GetName('John Doe'))
    //console.log(colors)






    // 
}