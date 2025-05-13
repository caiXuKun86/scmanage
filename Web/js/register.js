document.getElementById('registerForm').addEventListener('submit', function(e) {
    // 阻止默认提交行为先进行验证
    e.preventDefault();
    
    // 验证表单
    if (validateForm()) {
        // 验证通过则手动提交表单
        this.submit();
    }
});

function validateForm() {
    let isValid = true;
    
    // 重置所有错误信息
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.style.display = 'none';
        element.textContent = '';
    });

    // 验证用户名
    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!username) {
        showError('usernameError', '用户名不能为空');
        isValid = false;
    } else if (!usernameRegex.test(username)) {
        showError('usernameError', '用户名只能包含字母、数字和下划线，且长度在3-20个字符之间');
        isValid = false;
    }

    // 验证邮箱
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('emailError', '邮箱不能为空');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', '请输入有效的邮箱地址');
        isValid = false;
    }

    // 验证密码
    const password = document.getElementById('password').value;
    if (!password) {
        showError('passwordError', '密码不能为空');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', '密码长度不能少于6个字符');
        isValid = false;
    }

    // 验证确认密码
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!confirmPassword) {
        showError('confirmPasswordError', '请确认密码');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', '两次输入的密码不一致');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// 添加实时验证
document.getElementById('username').addEventListener('blur', function() {
    validateUsername();
});

document.getElementById('email').addEventListener('blur', function() {
    validateEmail();
});

document.getElementById('password').addEventListener('blur', function() {
    validatePassword();
});

document.getElementById('confirmPassword').addEventListener('blur', function() {
    validateConfirmPassword();
});

function validateUsername() {
    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    
    if (!username) {
        showError('usernameError', '用户名不能为空');
        return false;
    } else if (!usernameRegex.test(username)) {
        showError('usernameError', '用户名只能包含字母、数字和下划线，且长度在3-20个字符之间');
        return false;
    } else {
        document.getElementById('usernameError').style.display = 'none';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showError('emailError', '邮箱不能为空');
        return false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', '请输入有效的邮箱地址');
        return false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    
    if (!password) {
        showError('passwordError', '密码不能为空');
        return false;
    } else if (password.length < 6) {
        showError('passwordError', '密码长度不能少于6个字符');
        return false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!confirmPassword) {
        showError('confirmPasswordError', '请确认密码');
        return false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', '两次输入的密码不一致');
        return false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
        return true;
    }
} 