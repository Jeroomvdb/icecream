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
IncludeJavascript('JS/UndisableListPicker.js');
IncludeJavascript('JS/GetTextDropdown.js');
IncludeJavascript('JS/ShowCone.js');
IncludeJavascript('JS/reload.js');




window.onload = ()=>{ // html event
    
  




    
    //console.log(message)
    //console.log(GetName('John Doe'))
    //console.log(colors)






    // 
}