
function Home() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-10 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300 to-orange-500 text-5xl shadow-xl shadow-orange-200 transition duration-300 hover:-rotate-6 hover:scale-110">
        🛍️
      </div>

      <p className="mb-4 rounded-full bg-amber-100 px-4 py-2 text-xs font-bold tracking-[0.2em] text-amber-800">
        YOUR SHOPPING SPACE
      </p>

      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
        Welcome to
        <span className="mt-2 block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
          Amazon Home
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
        Manage your shopping experience in one place. Explore your cart,
        track current orders, and revisit your order history.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <div className="rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
          <span className="text-2xl">📦</span>
          <p className="mt-2 font-bold text-slate-800">Track Orders</p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
          <span className="text-2xl">🛒</span>
          <p className="mt-2 font-bold text-slate-800">View Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
