// Mejora que suma el navegador: abrir y cerrar el menú en celular.
// El sitio se lee y se usa completo sin este archivo.
;(function () {
  var abrir = document.querySelector('.lateral .abrir')
  var menu = document.getElementById('menu')
  if (!abrir || !menu) return
  abrir.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto')
    abrir.setAttribute('aria-expanded', abierto ? 'true' : 'false')
    abrir.textContent = abierto ? 'Cerrar' : 'Menú'
  })
})()
