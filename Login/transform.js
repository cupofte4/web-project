// Hiển thị form đăng nhập
document.getElementById('show-login').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
});

// Hiển thị form đăng ký
document.getElementById('show-register').addEventListener('click', function () {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
});

// Hiển thị form quên mật khẩu
document.getElementById('show-forgot-password').addEventListener('click', function () {
    document.getElementById('forgot-password-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
});

// Hiển thị form đăng nhập từ quên mật khẩu
document.getElementById('back-login').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
});
 
// Ẩn wrapper khi nhấn nút "X"
document.querySelectorAll('.close-button').forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
        document.getElementById('form-wrapper').style.display = 'none';
    });
});

// Hiển thị wrapper khi nhấn nút "Login" ở góc trên màn hình
document.querySelector('.button-account').addEventListener('click', function () {
    document.getElementById('form-wrapper').style.display = 'flex';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});