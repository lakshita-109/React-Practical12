
import { Link, Outlet, useLocation } from "react-router-dom";

function Orders() {
  const location = useLocation();

  const tabs = [
    { path: "current", label: "Current Orders", icon: "📦", color: "blue" },
    { path: "history", label: "Order History", icon: "🕘", color: "violet" },
    { path: "cancelled", label: "Cancelled Orders", icon: "❌", color: "rose" },
  ];

  const activeTab = (path) =>
    location.pathname === `/orders/${path}`;

  return (
    <div className="p-1 sm:p-3">
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
          📦
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Your purchases
          </p>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Amazon Orders
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage and review your orders
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3 border-b border-slate-200 pb-5">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`rounded-xl px-4 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
              activeTab(tab.path)
                ? "bg-slate-900 text-white shadow-lg"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="min-h-64 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;
