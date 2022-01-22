import { fuckwitPath } from "./path.js";

import { canvasElement as c, fileSelector, saveButton } from "./elements.js";
const ctx = c.getContext("2d");

const render = () => {
  if (fileSelector.files.length < 1) return;
  const uploadedImage = new Image();
  uploadedImage.src = URL.createObjectURL(fileSelector.files[0]);
  uploadedImage.onload = () => {
    c.width = 200;
    c.height = 200;
    ctx.translate(10, 10);
    ctx.scale(0.9, 0.9);
    ctx.translate(0, 6);
    ctx.beginPath();
    ctx.clip(new Path2D(fuckwitPath));
    ctx.resetTransform();
    ctx.drawImage(uploadedImage, 0, 0, 200, 200);
    saveButton.href = c.toDataURL();
  };
};

fileSelector.addEventListener("change", () => render());
