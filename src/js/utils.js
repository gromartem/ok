export const darkModeHandle = () => {
  const darkMode = document.getElementById("toggleDarkMode");
  const htmlElement = document.documentElement;

  if (localStorage.getItem("mode") === "dark") {
    // проверка, есть ли темная тема по-умл
    htmlElement.classList.add("dark");
    darkMode.checked = true;
  }

  darkMode.addEventListener("input", () => {
    //переключатель темы
    htmlElement.classList.toggle("dark");
    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  });
};
