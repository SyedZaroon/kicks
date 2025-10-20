import Sidebar from "@/components/layout/Sidebar";
;

const PrivacyPolicy = () => {
  return (
    <div className="section-margin flex mt-2 mb-8 flex-col gap-8 xl:flex-row xl:my-16 xl:gap-0">
      <Sidebar />
      <div>
        <h1 className="font-rubik text-2xl font-semibold">Privacy Policy</h1>

        <div className="mt-6 font-open-sans text-dark-gray text-[16px]">
          <p className="mb-6">
            Welcome to <span className="font-semibold">Kicks</span>. By
            accessing or using our website, you agree to be bound by the
            following Terms and Conditions. Please read them carefully before
            placing any orders.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">1. General</h2>
          <p className="mb-6">
            These Terms apply to all visitors and customers of our store. We may
            update them at any time without prior notice, so please review this
            page regularly.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            2. Products and Availability
          </h2>
          <p className="mb-6">
            All products are subject to availability. We reserve the right to
            modify, discontinue, or update products without notice.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            3. Pricing and Payment
          </h2>
          <p className="mb-6">
            Prices are listed in [your currency]. While we strive for accuracy,
            errors may occur. If we find an error in your order, we’ll notify
            you before proceeding. Payments are processed securely through
            trusted payment gateways.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">4. Shipping</h2>
          <p className="mb-6">
            We offer nationwide or international shipping. Estimated delivery
            times are provided for convenience but are not guaranteed due to
            courier delays.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            5. Returns and Exchanges
          </h2>
          <p className="mb-6">
            You can request a return or exchange within [X] days of receiving
            your order, provided the item is unused and in its original
            packaging. Please review our Returns Policy for details.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            6. Intellectual Property
          </h2>
          <p className="mb-6">
            All content, including text, images, logos, and graphics, are the
            property of
            <span className="font-semibold"> Kicks </span>and may not be used
            without permission.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            7. Limitation of Liability
          </h2>
          <p className="mb-6">
            We are not liable for any indirect or consequential damages arising
            from the use of our products or website.
          </p>

          <p className="mt-10 text-gray-600 text-sm">
            Last updated: <span className="font-semibold">October 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
