document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.getElementsByClassName("login-form")[0];
  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = formLogin.elements.email;
    const passwordInput = formLogin.elements.password;
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      alert("Заповніть усі поля форми.");
      return;
    }
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };
    console.log(formData);
    formLogin.reset();
  });
});