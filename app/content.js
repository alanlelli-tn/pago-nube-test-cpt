// Contenido del tablero. Para actualizar números, editar solo este archivo.
export const META = {
  responsable: 'Alan Lelli',
  envio: '28 sep 2026',
  corte: '14 oct 2026',
  criterio: 'Activación de Pago Nube',
};

export const GROUPS = [
  {
    key: 'a', tag: 'Grupo A', tagClass: 'ta', title: 'Costo por transacción',
    concept: 'Concepto habitual: "no tenés costo por transacción".',
    img: '/PN_CPT_Grupo_A.png',
    inapp: [['1.537', 'Views totales'], ['1.537', 'Views únicos'], ['68', 'Clicks únicos'], ['4,4%', 'CTR']],
    email: [['1.507', 'Enviados'], ['1.499', 'Entregados'], ['649', 'Aperturas'], ['43,3%', 'Open rate'], ['14', 'Clics'], ['2,2%', 'CTOR']],
    impact: [['1.566', 'Merchants únicos impactados', false], ['19', 'Conversiones', true], ['1,21%', 'CVR', true], ['19 · 100%', 'Conversiones con GPV > 0', true]],
  },
  {
    key: 'b', tag: 'Grupo B', tagClass: 'tb', title: 'Comisiones por venta',
    concept: 'Concepto alternativo: "ahorrás las comisiones por venta".',
    img: '/PN_CPT_Grupo_B.png',
    inapp: [['1.522', 'Views totales'], ['1.522', 'Views únicos'], ['64', 'Clicks únicos'], ['4,2%', 'CTR']],
    email: [['1.527', 'Enviados'], ['1.523', 'Entregados'], ['684', 'Aperturas'], ['44,9%', 'Open rate'], ['10', 'Clics'], ['1,5%', 'CTOR']],
    impact: [['1.561', 'Merchants únicos impactados', false], ['14', 'Conversiones', true], ['0,90%', 'CVR', true], ['14 · 100%', 'Conversiones con GPV > 0', true]],
  },
];

export const CONTROL = {
  base: [['2.136', 'Base'], ['—', 'Impactados']],
  conv: [['19', 'Conversiones (activaciones)'], ['0,89%', 'CVR (sobre base total)'], ['18 · 94,7%', 'Conversiones con GPV > 0']],
  note: 'Activaciones de Pago Nube entre el 28 sep y el 13 oct, sin haber recibido ninguna comunicación del test.',
};

export const UPLIFT = {
  head: ['Grupo', 'Base', 'Conv. atribuidas a impactados', 'CVR s/ base total', 'Activaciones del grupo (todas)', '% s/ base total'],
  rows: [
    ['Grupo A', '2.140', '19', '0,89%', '23', '1,07%'],
    ['Grupo B', '2.139', '14', '0,65%', '19', '0,89%'],
    ['Control', '2.136', '19', '0,89%', '19', '0,89%'],
  ],
};

export const INSIGHTS = [
  '<b>Sin uplift detectable.</b> Los grupos con comunicación activan a tasas similares a Control (1,07% A y 0,89% B vs. 0,89% en Control: A levemente arriba, B igual). Con 14 a 23 conversiones por grupo, las diferencias están dentro del ruido; no se corrió un test estadístico formal.',
  '<b>Inapp y email se comportan parecido en ambos conceptos.</b> CTR inapp 4,4% (A) vs. 4,2% (B); open rate 43,3% vs. 44,9%; CTOR 2,2% vs. 1,5%. Los volúmenes de clics de email (14 y 10) son demasiado chicos para concluir.',
  '<b>Mayor CVR de A (1,21% vs. 0,90%)</b> es una diferencia de 5 conversiones; no alcanza para declarar un ganador de concepto.',
  '<b>El canal principal es inapp:</b> 981 merchants del grupo A y 955 del B fueron impactados solo por inapp; 165 y 167 solo por email; 420 y 439 por ambos.',
];

export const GPV_NOTE = '<b>Calidad de las conversiones (GPV 30d > 0):</b> 19 de 19 en A, 14 de 14 en B y 18 de 19 en Control. Casi todos los convertidos ya transaccionan con Pago Nube, con o sin comunicación.';

export const METHODOLOGY = [
  '<b>Inapp (Userflow):</b> flows "Q4-26 Educación CPT – Test A / Test B". Cada view es una sesión de un usuario distinto, por eso views totales y únicos coinciden. Clicks únicos: botón "Activar Pago Nube" (eventos pn_q_3_26_cpt_a / _b).',
  '<b>Email (HubSpot):</b> ambos envíos el 28 sep. Aperturas y clics únicos excluyendo bots; Open rate sobre entregados; CTOR = clics / aperturas.',
  '<b>Merchants únicos impactados:</b> Store IDs únicos que vieron el inapp y/o abrieron el email (unión, sin sumar canales), restringidos a los miembros de cada grupo.',
  '<b>Conversión:</b> merchant impactado cuya activación de Pago Nube (first_activation, comeback o phoenix, NuvemLens) ocurrió en fecha igual o posterior a su primer impacto. Cruce por Store ID. Control: activaciones desde el 28 sep sobre la base total. No se considera la exposición a otras campañas en A y B.',
  '<b>Conversiones con GPV > 0:</b> propiedad gpv_30d_fintech de HubSpot (export al 14 oct), cruzada por Store ID.',
  '<b>Limitaciones:</b> el export de email no trae fecha de apertura, así que para quienes solo abrieron el email se usó la fecha de envío (28 sep) como fecha de impacto. Hay 2 merchants de Control que vieron el inapp de A y 2 el de B (no cuentan como impactados). Views totales incluyen sesiones de Company IDs fuera del grupo (14 en A, 12 en B).',
];
