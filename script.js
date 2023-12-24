window.onload = () => {
  const url = document.getElementById('url')
  const size = document.getElementById('choose-size')
  const darkColor = document.getElementById('dark-color')
  const lightColor = document.getElementById('light-color')
  const btn = document.getElementById('generator-btn')
  const qrElement = document.querySelector('.qr-code')
  let qr = new QRious()

  function generateQR() {
    qr.set({
      value: url.value,
      size: parseInt(size.value),
      background: lightColor.value,
      foreground: darkColor.value
    })

    const img = document.createElement('img')
    img.src = qr.toDataURL()

    qrElement.innerHTML = ''

    qrElement.appendChild(img)
  }

  btn.addEventListener('click', generateQR)
}
