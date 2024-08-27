import React from "react";

const SupportPanel = () => {
  const redirectToSupport = () => {
    // Add your redirection logic here
  };

  return (
    <div className="p-3 text-center mb-3 sm:w-full sm:px-2" id="supportPanel">
      <div className="flex flex-row gap-2 justify-center items-center">
        <i className="bi bi-headset"></i>
        <div>
          We're Providing
          <br />
          <strong>24/7 Support</strong>
        </div>
      </div>
    </div>
  );
};

const CallSalesPanel = () => {
  return (
    <div className="p-3 text-center mb-3 sm:w-full sm:px-2" id="callSalesPanel">
      <div className="flex flex-row gap-2 justify-center items-center">
        <i className="bi bi-telephone-outbound"></i>
        <strong>Call Sales Now</strong>
      </div>
      <em>+972-4-990-1785</em>
    </div>
  );
};

const SalesHoursPanel = () => {
  return (
    <div className="p-3 text-center mb-3 sm:w-full sm:px-2" id="salesHoursPanel">
      <div className="flex flex-row gap-2 justify-center items-center">
        <i className="bi bi-clock-history"></i>
        <strong>Sales Hours</strong>
      </div>
      <em>08:30am - 06:00pm</em>
    </div>
  );
};

const AddressPanel = () => {
  return (
    <div className="p-3 text-center sm:w-full sm:px-2" id="addressPanel">
      <div className="flex flex-row gap-2 justify-center items-center">
        <i className="bi bi-envelope-open"></i>
        <strong>Mailing Address</strong>
      </div>
      <div>
        MarketPath
        <br />
        CryptoLedger Division
        <br />
        Blockchain Blvd 320
        <br />
        Karmeil, Snunit 51, 113
        <br />
        Israel
      </div>
    </div>
  );
};

const ContactusRight = () => {
  return (
    <div>
      <SupportPanel />
      <CallSalesPanel />
      <SalesHoursPanel />
      <AddressPanel />
    </div>
  );
};

export default ContactusRight;
