import React from "react";
import Navbar from "./sections/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
import AllAnimeEntries from "./pages/AllAnimeEntries";
import QuoteByAnime from "./pages/QuoteByAnime";
import QuoteByCharacter from "./pages/QuoteByCharacter";

const Root = () => {
  return (
    <main className="w-full px-4 py-3 bg-[#2b2b2b] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "animelist",
          element: <AllAnimeEntries />
        },
        {
          path: "quotebyanime/:anime",
          element: <QuoteByAnime />
        },
        {
          path: "quotebycharacter/:character",
          element: <QuoteByCharacter />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
