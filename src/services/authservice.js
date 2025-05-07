export const login = (formData) => {
  const validUsername = sessionStorage.getItem("username");
  const validPassword = sessionStorage.getItem("password");

  return (
    formData.username === validUsername && formData.password === validPassword
  );
};

export const logout = (setIsLoggedIn) => {
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("password");
  window.location.reload();
};
