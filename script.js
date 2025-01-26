const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Carregar o PNG
const img = new Image();
img.src = 'iot_device.png'; // Caminho para o PNG

img.onload = () => {
  // Definir o tamanho do canvas
  canvas.width = img.width;
  canvas.height = img.height;

  // Desenhar a imagem no canvas
  ctx.drawImage(img, 0, 0);

  // Aplicar a cor (exemplo: vermelho)
  ctx.globalCompositeOperation = 'source-in'; // Apenas manter as partes opacas
  ctx.fillStyle = 'red'; // Cor desejada
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Inserir o canvas na página (opcional)
  document.body.appendChild(canvas);

  // Obter a imagem alterada como base64 (opcional)
  const updatedImage = canvas.toDataURL();
  console.log(updatedImage);
};
