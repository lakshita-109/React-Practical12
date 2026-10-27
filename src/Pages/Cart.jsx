
function Cart() {
  return (
    <div className="p-2 sm:p-5">
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
          🛒
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Shopping
          </p>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Shopping Cart
          </h1>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center sm:p-12">
        <div className="text-5xl">🛍️</div>
        <h2 className="mt-5 text-xl font-bold text-slate-800">
          Your cart is ready
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Your shopping cart items will appear here.
        </p>
      </div>
    </div>
  );
}

export default Cart;
