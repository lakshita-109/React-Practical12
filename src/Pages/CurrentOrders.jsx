
function CurrentOrders() {
  const products = [
    { name: "Laptop", icon: "💻", status: "In Progress" },
    { name: "Mobile Phone", icon: "📱", status: "In Progress" },
    { name: "Smart Watch", icon: "⌚", status: "In Progress" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Current Orders
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Your ongoing purchases
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-3xl">{product.icon}</span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                {product.status}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-800">
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Your order is listed here.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;
