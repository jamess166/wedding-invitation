import React from "react";

export default function PaypalButton() {
  return (
    <div
      style={{
        display: "grid", // Cambiado de "inline-grid" a "grid"
        justifyContent: "center", // Centrar horizontalmente
        alignItems: "start", // Alinear elementos al inicio verticalmente
        gap: "0.5rem",
        height: "100%", // Asegúrate de ocupar todo el alto disponible si es necesario
      }}
    >
      <style jsx>{`
        .pp-H98QBWLY35HV6 {
          color: var(--color-1); /* Color verde oscuro */
          border: 1px solid var(--color-1); /* Borde en verde oscuro */
          font-family: var(--font-opensans);
          border-radius: 50px;
          padding: 8px 16px;
          margin-bottom: 16px;
          background-color: transparent;
          cursor: pointer;
          transition: background-color 0.3s, border-color 0.3s;
        }
        .pp-H98QBWLY35HV6:hover {
          background-color: var(--color-4); /* Fondo claro al pasar el ratón */
          border-color: var(--color-2); /* Cambio de borde en hover */
        }
      `}</style>

      <form
        action="https://www.paypal.com/ncp/payment/H98QBWLY35HV6"
        method="post"
        target="_top"
      >
        <input
          className="pp-H98QBWLY35HV6"
          type="submit"
          value="Tu regalo vía PayPal"
        />
      </form>
    </div>
  );
}

