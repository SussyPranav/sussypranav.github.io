const qrText = document.getElementById('qr-text');
const sizes =  document.getElementById('sizes');
const generatebtn = document.getElementById('Generatebtn');
const downloadbtn = document.getElementById('Downloadbtn');


const qrContainer = document.querySelector('.qr-body');

let size = sizes.value

generatebtn.addEventListener('click', (ps)=>{
    ps.preventDefault(); 
    if(qrText.value.length > 0){
    generateQRCode();
    }
    else{
        alert("Please enter your Text or link before generating :)")
    }
}
);

sizes.addEventListener('change', (ps)=>{
    size = ps.target.value;

});

downloadbtn.addEventListener('click', (d)=>{
    let img = document.querySelector('.qr-body img');

    if(img !==null){
        let imgAtrr = img.getAttribute('src')
        downloadbtn.setAttribute("href", img.getAttribute('src'))
    }else{
        downloadbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)
    }
})

function generateQRCode(){
    qrContainer.innerHTML ="";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,


    });
}
