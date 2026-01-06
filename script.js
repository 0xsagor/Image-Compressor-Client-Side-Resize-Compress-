function compress() {
  const file = document.getElementById("file").files[0];
  const quality = document.getElementById("quality").value;
  const output = document.getElementById("output");

  if (!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const compressed = canvas.toDataURL("image/jpeg", quality);
    output.innerHTML = `<img src="${compressed}" style="max-width:100%">`;
  };
}
