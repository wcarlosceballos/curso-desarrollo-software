// progress.js — refleja el estado de las puertas en la barra y en el menú lateral.
document.addEventListener('DOMContentLoaded', () => {

  const pct = getProgressPercent();
  const val = document.getElementById('progreso-valor');
  if(val) val.textContent = pct + '%';
  const bar = document.getElementById('progreso-barra');
  if(bar) bar.value = pct;

  // "X de 13 puertas superadas"
  const done = getProgress().puertas || {};
  const n = PUERTAS.filter(id => done[id]).length;
  const cuenta = document.getElementById('progreso-cuenta');
  if(cuenta) cuenta.textContent = n + ' de ' + PUERTAS.length + ' puertas superadas';

  // Botón "seguir": apunta a la primera puerta pendiente
  const seguir = document.getElementById('btn-seguir');
  if(seguir){
    const sig = nextGate();
    if(sig){
      seguir.href = RUTAS[sig] || '#';
      seguir.textContent = (n === 0 ? 'Comenzar → ' : 'Continuar en → ') + NOMBRES[sig];
      seguir.classList.remove('btn-vacia');
    } else {
      seguir.textContent = '✓ Todas las puertas superadas';
      seguir.classList.add('btn-vacia');
    }
  }

  // Menú lateral: verde = superada, atenuada = pendiente
  document.querySelectorAll('.sidebar a[data-gate]').forEach(a => {
    a.classList.add(isGateDone(a.dataset.gate) ? 'done' : 'pending');
  });
});

const RUTAS = {
  m0:'modulo0/index.html', m1:'modulo1/index.html', m2:'modulo2/index.html',
  m3:'modulo3/index.html', m4:'modulo4/index.html', m5:'modulo5/index.html',
  m6:'modulo6/index.html', m7:'modulo7/index.html', m8:'modulo8/index.html',
  m9:'modulo9/index.html', m10:'modulo10/index.html', m11:'modulo11/index.html',
  m12:'modulo12/index.html', m13:'modulo13/index.html',
  proyecto:'proyecto.html'
};

const NOMBRES = {
  m0:'M0 · Método', m1:'M1 · Lógica', m2:'M2 · Programación',
  m3:'M3 · HTML y CSS', m4:'M4 · JavaScript', m5:'M5 · Git',
  m6:'M6 · Bases de datos', m7:'M7 · Programación a objetos',
  m8:'M8 · Requisitos y UML', m9:'M9 · Backend y API',
  m10:'M10 · Publicar', m11:'M11 · Probar',
  m12:'M12 · Accesibilidad', m13:'M13 · Seguridad web', proyecto:'M14 · Proyecto real'
};