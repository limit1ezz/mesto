(() => {
  const ru = document.querySelector("#ru");
  const en = document.querySelector("#en");

  ru.addEventListener("click", () => {
    if (en.classList.contains("lang-links__link_active")) {
      en.classList.remove("lang-links__link_active");
      ru.classList.add("lang-links__link_active");
    }
  });

  en.addEventListener("click", () => {
    if (ru.classList.contains("lang-links__link_active")) {
      ru.classList.remove("lang-links__link_active");
      en.classList.add("lang-links__link_active");
    }
  });
})();

