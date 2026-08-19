"use client";

const BuyButton = () => {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();

    window.location.href = data.url;
  };

  return (
    <button onClick={handleCheckout} className="btn btn-primary btn-block">
      Buy Now
    </button>
  );
};

export default BuyButton;
