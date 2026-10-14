"use client";
import { useState, useEffect } from 'react';
import { META, GROUPS, CONTROL, UPLIFT, INSIGHTS, GPV_NOTE, METHODOLOGY } from './content';

const Kpis = ({ items }) => (
  <div className="kv">
    {items.map(([v, l, hl]) => (
      <div key={l} className={'kpi' + (hl ? ' hl' : '')}>
        <b>{v}</b>
        <span>{l}</span>
      </div>
    ))}
  </div>
);

export default function Page() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);
  const g = GROUPS.find((x) => x.key === open);

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Pago Nube · Lifecycle AR</div>
          <h1>Resultados Test A/B: Costo por Transacción (CPT)</h1>
          <p>
            ¿Los merchants entienden mejor "costo por transacción" o "comisiones por venta"? ¿Cuál convierte más y hay
            uplift vs. merchants no impactados? Audiencia: merchants sin Pago Nube activo, plan esencial (plan-a).
          </p>
          <div className="pills">
            <span className="pill">Responsable: {META.responsable}</span>
            <span className="pill">Envío: {META.envio}</span>
            <span className="pill">Corte: {META.corte}</span>
            <span className="pill">Conversión: {META.criterio}</span>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap">
          <h2>Resultados generales por grupo</h2>
          <p className="sub">Grupo A: 2.140 merchants · Grupo B: 2.139 · Control: 2.139 (sin comunicaciones)</p>
          <div className="grid">
            {GROUPS.map((x) => (
              <div className="card" key={x.key}>
                <span className={'tag ' + x.tagClass}>{x.tag}</span>
                <h3>{x.title}</h3>
                <p className="concept">{x.concept}</p>
                <div className="sec">Inapp</div>
                <Kpis items={x.inapp} />
                <div className="sec">Email</div>
                <Kpis items={x.email} />
                <div className="sec">Impacto y conversión</div>
                <Kpis items={x.impact} />
                <button className="btn" onClick={() => setOpen(x.key)}>👁 Ver comunicación</button>
              </div>
            ))}
            <div className="card">
              <span className="tag tc">Control</span>
              <h3>Sin comunicaciones</h3>
              <p className="concept">Base de referencia para medir uplift.</p>
              <div className="sec">Base</div>
              <Kpis items={CONTROL.base} />
              <div className="sec">Conversión</div>
              <Kpis items={CONTROL.conv.map(([v, l]) => [v, l, true])} />
              <div className="note">{CONTROL.note}</div>
            </div>
          </div>

          <h2>Uplift vs. Control</h2>
          <p className="sub">Comparación sobre la base completa de cada grupo (impactados o no).</p>
          <div className="card scroll">
            <table>
              <thead><tr>{UPLIFT.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>{UPLIFT.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
            </table>
          </div>

          <h2>Insights</h2>
          <div className="card">
            <ul className="insights">
              {INSIGHTS.map((t, i) => <li key={i} dangerouslySetInnerHTML={{ __html: t }} />)}
            </ul>
            <div className="note" dangerouslySetInnerHTML={{ __html: GPV_NOTE }} />
          </div>

          <h2>Metodología</h2>
          <div className="card">
            <ul>
              {METHODOLOGY.map((t, i) => <li key={i} dangerouslySetInnerHTML={{ __html: t }} />)}
            </ul>
          </div>
        </div>
      </main>

      <footer>Tablero point-in-time · datos al 14 oct 2026 · Lifecycle Marketing AR</footer>

      <div className={'modal' + (g ? ' on' : '')} onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
        <div className="box">
          <div className="top">
            <span>{g ? g.tag + ' · ' + g.title : ''}</span>
            <button onClick={() => setOpen(null)}>Cerrar</button>
          </div>
          {g && <img src={g.img} alt={'Preview de la comunicación ' + g.tag} />}
        </div>
      </div>
    </>
  );
}
