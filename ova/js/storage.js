// storage.js — progreso por PUERTAS DE SALIDA, no por horas.
// El avance lo decide una evidencia verificable, nunca un cronómetro.
const KEY = 'cds_progress';

// Las 13 puertas del curso, en orden. M12 (proyecto) se llama 'proyecto'.
const PUERTAS = [
  'm0','m1','m2','m3','m4','m5','m6',
  'm7','m8','m9','m10','m11','proyecto'
];

function getProgress(){
  try { return JSON.parse(localStorage.getItem(KEY)) || {} }
  catch { return {} }
}

function saveProgress(d){ localStorage.setItem(KEY, JSON.stringify(d)); }

// Marca una puerta como superada. Guarda fecha porque el orden importa
// más que la fecha: el curso se puede repetir, pero el recorrido no se puede hacer al revés.
function markGate(id){
  const p = getProgress();
  p.puertas = p.puertas || {};
  if(!p.puertas[id]) p.puertas[id] = new Date().toISOString();
  saveProgress(p);
}

function isGateDone(id){
  const p = getProgress();
  return !!(p.puertas && p.puertas[id]);
}

function unmarkGate(id){
  const p = getProgress();
  if(p.puertas){ delete p.puertas[id]; saveProgress(p); }
}

// La siguiente puerta pendiente, para el botón "seguir donde quedaste".
function nextGate(){
  const done = getProgress().puertas || {};
  return PUERTAS.find(id => !done[id]) || null;
}

// 0-100. Cuenta solo puertas superadas, sin castigar el orden.
function getProgressPercent(){
  const done = getProgress().puertas || {};
  const n = PUERTAS.filter(id => done[id]).length;
  return Math.round(n / PUERTAS.length * 100);
}

function getProject(){
  return getProgress().proyecto || {};
}

function saveProject(field, value){
  const p = getProgress();
  p.proyecto = p.proyecto || {};
  p.proyecto[field] = value;
  saveProgress(p);
}

function resetProgress(){
  localStorage.removeItem(KEY);
}

function exportJSON(){ return JSON.stringify(getProgress(), null, 2); }