import React from 'react';

const ShippingPolicies = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-12 mt-8 mb-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Shipping Policies and Rates</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">International Shipping</h2>
        <p className="text-gray-700 mb-2">
          We ship worldwide from <span className="font-semibold">Peru</span>, except for some countries where coverage is not available.
          All our jewelry is made to order, so <span className="font-semibold">prepayment</span> is required to start the process.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>Payment is made via <span className="font-semibold">Western Union deposit</span> or <span className="font-semibold">mobile transfer</span>, depending on the destination country.</li>
          <li>The cost of international shipping is calculated according to the weight of the product and is quoted once the order is confirmed.</li>
          <li>We use the <span className="font-semibold">Serpost</span> postal service, with an estimated delivery time of up to <span className="font-semibold">20 business days</span>.</li>
          <li>As a reference, shipping prices vary by region: more affordable in America and higher rates for Europe.</li>
        </ul>
        <p className="text-gray-700">
          For more information or questions, you can write to us on WhatsApp <span className="font-semibold">+51 960282376</span>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Shipping within Peru</h2>
        <p className="text-gray-700 mb-2">
          Nationwide, we work with <span className="font-semibold">Olva Courier</span>, offering shipments with pickup at the agency or home delivery, both in Lima and provinces.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>The average delivery time is <span className="font-semibold">2 business days</span>, with a cost of <span className="font-semibold">S/10.00</span> for Lima.</li>
          <li>Option of free pickup at the store, located in Carabayllo, Lima, with prior coordination.</li>
          <li>Payment methods: bank transfer, digital wallets (<span className="font-semibold">Yape, Plin</span>) or direct payment at the store.</li>
          <li>Once your order is shipped, you will receive the corresponding tracking number.</li>
        </ul>
        <p className="text-gray-700">
          For inquiries within the country, contact us on WhatsApp <span className="font-semibold">96282376</span>.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicies;