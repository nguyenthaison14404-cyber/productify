import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import Homepage from "./pages/Homepage";
import EditProductPage from "./pages/EditProductPage";


function App() {

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar/>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/create" element={<CreatePage />}/>
          <Route path="/edit/:id" element={<EditProductPage />}/>
        </Routes>

      </main>
    </div>
  )
}

export default App;
