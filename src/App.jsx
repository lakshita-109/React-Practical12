
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import CurrentOrders from "./Pages/CurrentOrders";
import OrderHistory from "./Pages/OrderHistory";
import CancelledOrders from "./Pages/CancelledOrders";

function App() {
  const location = useLocation();

  const navStyle = (path) =>
    `rounded-lg px-4 py-2.5 text-sm font-semibold transition duration-300 ${
      location.pathname === path || (path === "/orders" && location.pathname.startsWith("/orders/"))
        ? "bg-white text-slate-900 shadow-sm"
        : "text-white hover:bg-white/15"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-sky-100 text-slate-800">
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white shadow-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 sm:flex-row">
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            amazon<span className="text-amber-400">.</span>
            <span className="ml-2 text-sm font-medium text-slate-300">
              Order Center
            </span>
          </Link>

          <ul className="flex flex-wrap justify-center gap-2">
            <li>
              <Link to="/" className={navStyle("/")}>🏠 Home</Link>
            </li>
            <li>
              <Link to="/cart" className={navStyle("/cart")}>🛒 Cart</Link>
            </li>
            <li>
              <Link to="/orders" className={navStyle("/orders")}>📦 Orders</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="min-h-[75vh] rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl shadow-slate-200/70 sm:p-8 md:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />}>
              <Route path="current" element={<CurrentOrders />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>
          </Routes>
        </div>

        <footer className="py-8 text-center text-sm text-slate-500">
          Made with 💙 using React & Tailwind CSS
        </footer>
      </main>
    </div>
  );
}

export default App;
