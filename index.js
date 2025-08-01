let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQRCode() {
if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    imgBox.classList.add('show-img');
    errorText.textContent = "";
} else {
    qrText.classList.add('error');
    setTimeout(() => {
        qrText.classList.remove('error');
    }, 2000);
    errorText.textContent = "Por favor, digite algo para gerar o QR Code.";
}}