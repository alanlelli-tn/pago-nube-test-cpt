import './globals.css';

export const metadata = {
  title: 'Test A/B CPT – Pago Nube | Resultados',
  description: 'Resultados del test A/B de Costo por Transacción (CPT) de Pago Nube AR: grupos A, B y Control.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
