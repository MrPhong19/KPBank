function captcha-icon() {
    var captcha = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById('captchaDisplay').innerText = " " + captcha; 
    document.getElementById('captchaInput').value = ''; 
}
document.getElementById('captcha-icon').addEventListener('click', function() {
    generateCaptcha();
});
generateCaptcha();
const languages = [
    { code: 'en', name: 'English' },
    { code: 'vi', name: 'Vietnamese' },
];
let currentLanguageIndex = 0;
document.getElementById('languageSelector').addEventListener('click', function() {
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    this.textContent = '' + languages[currentLanguageIndex].name;
    updateLanguage(languages[currentLanguageIndex].code);
});
function updateLanguage(languageCode) {


    if (languageCode === 'en') {
        document.getElementById('username').setAttribute('placeholder', 'Uername');
        document.getElementById('password').setAttribute('placeholder', 'Password');
        document.getElementById('captchaInput').setAttribute('placeholder', 'Captcha');
        document.getElementById('lgin').setAttribute('placeholder', 'Login');
    } else if (languageCode === 'vi') {
        document.getElementById('username').setAttribute('placeholder', 'Tên đăng nhập');
        document.getElementById('password').setAttribute('placeholder', 'Mật khẩu');
        document.getElementById('captchaInput').setAttribute('placeholder', 'Mã kiểm tra');
        document.getElementById('lgin').setAttribute('placeholder', 'Đăng nhập');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const captchaButton = document.getElementById('captchaButton');
    const captchaInput = document.getElementById('captchaInput');
    const languageSelector = document.getElementById('languageSelector');

    captchaButton.addEventListener('click', function() {
        const newCaptcha = generateCaptcha();
        captchaInput.value = newCaptcha;
    });

    languageSelector.addEventListener('click', function() {
        
        console.log('Clicked on language selector');
    });

    function generateCaptcha() {
        const captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
        return captcha;
    }
});