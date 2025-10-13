import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full flex mt-2 mb-8 flex-col gap-8 xl:flex-row xl:my-16 xl:gap-0">
      <Sidebar />
      <div>
        <h1 className="font-rubik text-2xl font-semibold">
          Terms and Conditions
        </h1>

        <div className="mt-6 font-open-sans text-[var(--color-dark-gray)]  text-[16px]">
          <p className="mb-6">
            At <span className="font-semibold">Kicks</span>, we value your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard your
            information.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Name and contact details</li>
            <li>Billing and shipping information</li>
            <li>Order history</li>
            <li>Website usage data via cookies</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>To process and deliver your orders</li>
            <li>To improve our products and services</li>
            <li>To communicate offers, updates, and promotions</li>
            <li>To ensure secure transactions</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            3. Sharing Your Information
          </h2>
          <p className="mb-6">
            We do not sell or rent your data. We may share it only with trusted
            partners such as payment gateways and shipping providers to fulfill
            your orders, or with legal authorities when required by law.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your data from
            unauthorized access, alteration, or disclosure. Your information is
            encrypted and stored securely.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">5. Your Rights</h2>
          <p className="mb-6">
            You can request to access, update, or delete your personal
            information by contacting us at{" "}
            <a
              href="mailto:support@kicks.com"
              className="text-blue-600 underline"
            >
              support@kicks.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">6. Cookies</h2>
          <p className="mb-6">
            We use cookies to enhance your shopping experience. You can manage
            or disable cookies in your browser settings.
          </p>

          <p className="mt-10 text-gray-600 text-sm">
            Last updated: <span className="font-semibold">October 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
