import React from 'react';

const PoliticasEnvios = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-12 mt-8 mb-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Políticas de envío y tarifas</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Envíos internacionales</h2>
        <p className="text-gray-700 mb-2">
          Realizamos envíos a nivel mundial desde <span className="font-semibold">Perú</span>, con excepción de algunos países donde no hay cobertura disponible.
          Todas nuestras joyas se elaboran a pedido, por lo que se requiere la <span className="font-semibold">cancelación previa</span> para iniciar el proceso.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>El pago se realiza vía <span className="font-semibold">depósito por Western Union</span> o <span className="font-semibold">transferencia móvil</span>, según disponibilidad del país de destino.</li>
          <li>El costo del envío internacional se calcula según el peso del producto y se cotiza una vez confirmado el pedido.</li>
          <li>Utilizamos el servicio postal de <span className="font-semibold">Serpost</span>, con un tiempo estimado de entrega de hasta <span className="font-semibold">20 días hábiles</span>.</li>
          <li>Como referencia, los precios de envío varían según la región: más accesibles en América y con una tarifa mayor para Europa.</li>
        </ul>
        <p className="text-gray-700">
          Para más información o dudas, puedes escribirnos al WhatsApp <span className="font-semibold">+51 960282376</span>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Envíos dentro de Perú</h2>
        <p className="text-gray-700 mb-2">
          A nivel nacional trabajamos con <span className="font-semibold">Olva Courier</span>, ofreciendo envíos con recojo en agencia o entrega a domicilio, tanto en Lima como en provincias.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>El tiempo promedio de entrega es de <span className="font-semibold">2 días hábiles</span>, con un costo de <span className="font-semibold">S/10.00</span> para Lima.</li>
          <li>Opción de recojo gratuito en tienda, ubicada en Carabayllo, Lima, previa coordinación.</li>
          <li>Formas de pago: transferencia bancaria, billeteras digitales (<span className="font-semibold">Yape, Plin</span>) o cancelación directa en tienda.</li>
          <li>Una vez enviado tu pedido, recibirás el número de seguimiento correspondiente.</li>
        </ul>
        <p className="text-gray-700">
          Para consultas dentro del país, contáctanos al WhatsApp <span className="font-semibold">980282376</span>.
        </p>
      </section>
    </div>
  );
};

export default PoliticasEnvios;