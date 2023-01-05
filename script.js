const root = document.documentElement;
const btnWildMode = document.getElementById("wild-mode");

function resetPropertyValues() {
  root.style.setProperty("--x", 0);
  root.style.setProperty("--y", 0);
}

Observer.create({
  preventDefault: true,
  onChangeX(self) {
    const delta = self.isDragging ? -self.deltaX : self.deltaX;
    const x = root.style.getPropertyValue("--x");
    root.style.setProperty("--x", parseInt(x) + delta);
  },
  onChangeY(self) {
    const delta = self.isDragging ? -self.deltaY : self.deltaY;
    const y = root.style.getPropertyValue("--y");
    root.style.setProperty("--y", parseInt(y) - delta);
  }
});

btnWildMode.addEventListener("click", () => resetPropertyValues());

resetPropertyValues();