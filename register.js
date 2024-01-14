// console.log(loginBtnText)
const registerForm = document.getElementById('register-form')

// Xu ly khi nguoi dung bam nut Dang nhap
registerForm.onsubmit = function (event) {
  event.preventDefault()
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const confirmpassword = document.getElementById('password')

  const usernameError = document.getElementById('username-error')
  const passwordError = document.getElementById('password-error')
  const confirmpasswordError = document.getElementById('confirm-password-error')
  const registerError = document.getElementById('login-error')

  // Kiểm tra
  if (username.value === '') {
    usernameError.innerHTML = 'Vui lòng nhập Tên đăng nhập'
  } else {
    usernameError.innerHTML = ''
  }

  if (password.value === '') {
    passwordError.innerHTML = 'Vui lòng nhập Mật khẩu'
  } else {
    passwordError.innerHTML = ''
  }

  if (confirmpassword.value === '') {
    confirmpasswordError.innerHTML = 'Vui lòng nhập Mật khẩu'
  }else if (confirmpassword.value !== password) {
    confirmpasswordError.innerHTML = 'Mật khẩu không trùng'
  }
   else { 
    confirmpasswordError.innerHTML = ''
  }

  if (username.value !== 'trung' || password.value !== '123456') {
    loginError.innerHTML = 'Sai Tên đăng nhập hoặc Mật khẩu'
  } else {
    loginError.innerHTML = ''
    window.location.href = '../index.html'
  }
}

localStorage.setItem('message','hello')
const value = localStorage.getItem('message')

console.log(value);