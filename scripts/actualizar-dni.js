function actualizarDNI() {
  const surname = document.getElementById('dni-surname-input').value;
  const name = document.getElementById('dni-name-input').value;
  const number = document.getElementById('dni-number-input').value;
  const sex = document.getElementById('dni-sex-input').value;
  const ejemplar = document.getElementById('dni-ejemplar-input').value;
  const birth = document.getElementById('dni-birth-input').value;
  const issue = document.getElementById('dni-issue-input').value;
  const expiration = document.getElementById('dni-expiration-input').value;
  const tramiteNum = document.getElementById('dni-tramite-num-input').value;

  // Limpiar campos anteriores en la tarjeta de DNI
  document.getElementById('dni-surname').innerText = `Apellido: ${surname}`;
  document.getElementById('dni-name').innerText = `Nombre: ${name}`;
  document.getElementById('dni-number').innerText = `${number}`;
  document.getElementById('dni-sex').innerText = `Sexo: ${sex}`;
  document.getElementById('dni-ejemplar').innerText = `Ejemplar: ${ejemplar}`;
  document.getElementById('dni-birth').innerText = `Fecha de Nacimiento: ${birth}`;
  document.getElementById('dni-issue').innerText = `Fecha de Emisión: ${issue}`;
  document.getElementById('dni-expiration').innerText = `Fecha de Expiración: ${expiration}`;
  document.getElementById('dni-tramite-num').innerText = `Número de Trámite: ${tramiteNum}`;

  // Actualizar última fecha de actualización
  const now = new Date();
  const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} hs`;
  document.getElementById('last-updated-label').innerText = `Última actualización ${formattedDate}`;

  // Ocultar el formulario después de actualizar
  document.getElementById('form-container').style.display = 'none';
}
