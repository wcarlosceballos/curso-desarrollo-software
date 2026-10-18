// gate.js — el botón de "puerta superada", idéntico en los 13 módulos.
function renderGate(id, texto){
  const done = isGateDone(id);
  document.getElementById('gate-estado').innerHTML =
    done
      ? '<span class="chip chip-ok">✓ Puerta superada ' + new Date(getProgress().puertas[id]).toLocaleDateString('es-CO') + '</span>'
      : '<span class="chip chip-pend">Pendiente</span>';

  document.getElementById('gate-btn').textContent = done ? 'Desmarcar' : (texto || '✓ Superé esta puerta');
  document.getElementById('gate-btn').classList.toggle('btn-desmarcar', done);
}

function toggleGate(id, texto){
  if(isGateDone(id)){ unmarkGate(id); }
  else {
    markGate(id);
    const pct = getProgressPercent();
    const bar = document.getElementById('progreso-barra');
    if(bar) bar.value = pct;
    const val = document.getElementById('progreso-valor');
    if(val) val.textContent = pct + '%';
    const sig = nextGate();
    const aviso = document.getElementById('gate-siguiente');
    if(aviso && sig){
      aviso.innerHTML = 'Siguiente puerta: <a href="' + RUTAS[sig] + '">' + NOMBRES[sig] + '</a>';
      aviso.style.display = 'block';
    }
  }
  renderGate(id, texto);
}

// Marca automáticamente si el checklist de la puerta está completo.
function bindChecklist(gateId){
  const cbs = document.querySelectorAll('[data-check]');
  if(!cbs.length) return;
  const check = () => {
    const todos = Array.from(cbs).every(c => c.checked);
    cbs.forEach(c => c.closest('label').classList.toggle('check-ok', c.checked));
    if(todos && !isGateDone(gateId)) markGate(gateId);
    renderGate(gateId);
  };
  cbs.forEach(c => {
    if(isGateDone(gateId)) c.checked = true;
    c.addEventListener('change', check);
  });
  check();
}