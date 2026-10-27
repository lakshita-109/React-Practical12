
function CancelledOrders() {
  const products = [
    { name: "Bluetooth Speaker", icon: "🔊" },
    { name: "Gaming Mouse", icon: "🖱️" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Cancelled Orders
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Review your cancelled purchases
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl border border-rose-100 bg-gradient-to-br from-white to-rose-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">{product.icon}</span>
              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">
                Cancelled
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-800">
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              This order is listed as cancelled.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;
