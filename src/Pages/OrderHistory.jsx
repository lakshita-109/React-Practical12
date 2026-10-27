
function OrderHistory() {
  const products = [
    { name: "Shoes", icon: "👟" },
    { name: "Headphones", icon: "🎧" },
    { name: "Keyboard", icon: "⌨️" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Order History
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Products from your previous orders
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-3xl">{product.icon}</span>
            <h3 className="mt-4 text-lg font-bold text-slate-800">
              {product.name}
            </h3>
            <span className="mt-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
              Previous Order
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
