// Chuyển qua lại giữa đăng nhập và đăng ký
document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
});

// Điều hướng về trang index.html khi nhấn nút đăng nhập hoặc đăng ký
document.getElementById('login-btn').addEventListener('click', function() {
    alert('Đăng nhập thành công!');
    window.location.href = '/index-logined.html';
});

document.getElementById('signup-btn').addEventListener('click', function() {
    alert('Đăng ký thành công!');
    window.location.href = '/index-logined.html';
});
