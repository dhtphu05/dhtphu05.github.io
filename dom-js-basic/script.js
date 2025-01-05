const getColorCode=document.querySelector('#input-color-code');
const getWidth=document.querySelector('#input-width');
const getHeight=document.querySelector('#input-height');
const submitButton=document.querySelector('#submit-button');
const result=document.querySelector('#result');
const colorCodeResult=document.querySelector('.color-code');
const heightOfResult=document.querySelector('.height-of');
const widthOfResult=document.querySelector('.width-of');
console.log(getColorCode);
console.log("hehehe")
console.log(result);
submitButton.addEventListener(
    'click',
    ()=>{
        console.log(result);
        const colorCode=getColorCode.value;
        const width=getWidth.value;
        const height=getHeight.value;
        if(colorCode.length===0 || width.length===0 || height.length===0){
            alert('Hay nhap day du thong tin');
            return;
        }
        console.log(colorCode);
        result.style.backgroundColor=colorCode;
        result.style.width=width+'px';
        result.style.height=height+'px';
        colorCodeResult.innerHTML='Ma mau: '+colorCode;
        widthOfResult.innerHTML=width+'px';
        heightOfResult.innerHTML=height+'px';
    }
)
result.addEventListener(
    'click',
    ()=>{
        result.style.backgroundColor='white';
        getColorCode.value='';
        getWidth.value='';
        getHeight.value='';
        colorCodeResult.innerHTML='';
        widthOfResult.innerHTML='';
        heightOfResult.innerHTML='';
    }
)