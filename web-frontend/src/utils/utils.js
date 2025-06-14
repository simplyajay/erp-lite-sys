export const scrollToTop = () => {
  setTimeout(() => {
    const container = document.getElementById("root-public");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, 0);
};
