// Hiển thị form đăng ký và ẩn form đăng nhập
document.getElementById('show-register').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

// Hiển thị form đăng nhập và ẩn form đăng ký
document.getElementById('show-login').addEventListener('click', function () {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Ẩn wrapper khi nhấn nút "X"
document.querySelectorAll('.close-btn').forEach(function(closeButton) {
    closeButton.addEventListener('click', function () {
        document.getElementById('form-wrapper').style.display = 'none';
    });
});

// Hiển thị wrapper khi nhấn nút "Login" ở góc trên màn hình
document.querySelector('.btLogin').addEventListener('click', function () {
    document.getElementById('form-wrapper').style.display = 'flex';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});