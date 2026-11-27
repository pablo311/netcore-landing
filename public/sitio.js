// Mejoras que suma el navegador. El sitio se lee y se usa completo sin este archivo.
;(function () {
  var doc = document

  // Menú en celular
  var abrir = doc.querySelector('.cab .abrir')
  var menu = doc.getElementById('menu')
  if (abrir && menu) {
    abrir.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto')
      abrir.setAttribute('aria-expanded', abierto ? 'true' : 'false')
      abrir.textContent = abierto ? 'Cerrar' : 'Menú'
    })
  }

  // El plano: cada servicio de la leyenda enciende su capa
  var plano = doc.querySelector('.plano')
  if (plano) {
    var base = plano.getAttribute('data-base') || 'todo'
    var poner = function (capa) {
      plano.setAttribute('data-capa', capa)
    }
    doc.querySelectorAll('[data-capa-de]').forEach(function (el) {
      var capa = el.getAttribute('data-capa-de')
      el.addEventListener('pointerenter', function (e) {
        if (e.pointerType !== 'touch') poner(capa)
      })
      el.addEventListener('pointerleave', function () {
        poner(base)
      })
      el.addEventListener('focus', function () {
        poner(capa)
      })
      el.addEventListener('blur', function () {
        poner(base)
      })
    })

    var pausa = doc.querySelector('[data-pausa]')
    if (pausa) {
      pausa.addEventListener('click', function () {
        var quieto = plano.classList.toggle('pausa')
        pausa.setAttribute('aria-pressed', quieto ? 'true' : 'false')
        pausa.textContent = quieto ? 'Reanudar el movimiento' : 'Pausar el movimiento'
      })
    }
  }

  // El detalle técnico queda como lo dejó la persona, en todas las páginas
  var tecnico = doc.querySelector('details.tecnico')
  if (tecnico) {
    try {
      if (localStorage.getItem('netcore-tecnico') === '1') tecnico.open = true
    } catch (e) {}
    tecnico.addEventListener('toggle', function () {
      try {
        localStorage.setItem('netcore-tecnico', tecnico.open ? '1' : '0')
      } catch (e) {}
    })
  }
})()
