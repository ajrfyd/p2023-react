const link = () => {
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      console.log(targetEl);
      if(targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

export default link;