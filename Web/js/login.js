// 登录表单提交验证
document.getElementById('loginForm').addEventListener('submit', function(e) {
  // 阻止默认提交行为先进行验证
  e.preventDefault();
  
  // 清除之前的错误信息
  clearErrors();
  
  // 验证表单
  if (validateForm()) {
    // 验证通过则手动提交表单
    this.submit();
  }
});

function validateForm() {
  return checkUsername() && checkPassword();
}

function checkUsername() {
  const username = document.getElementById('username').value;
  
  if (!username) {
    showError('usernameError', '用户名不能为空');
    return false;
  }
  
  if (username.length < 3) {
    showError('usernameError', '用户名长度不能少于3个字符');
    return false;
  }
  
  if (username.length > 20) {
    showError('usernameError', '用户名长度不能超过20个字符');
    return false;
  }
  
  // 用户名只能包含字母、数字和下划线
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    showError('usernameError', '用户名只能包含字母、数字和下划线');
    return false;
  }
  
  return true;
}

// 验证密码
function checkPassword() {
  const password = document.getElementById('password').value;
  if (!password) {
    showError('passwordError', '密码不能为空');
    return false;
  }
  
  if (password.length < 6) {
    showError('passwordError', '密码长度不能少于6个字符');
    return false;
  }
  
  return true;
}

// 显示错误信息
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

// 清除所有错误信息
function clearErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(element => {
    element.textContent = '';
    element.style.display = 'none';
  });
} 