import DefaultLayout from "./components/Layouts/DefaultLayout";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import AuthLayout from "./components/Layouts/AuthLayout";
import Login from "./features/auth/Login";
import Logout from "./features/auth/Logout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./features/auth/Register";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import EmployeeList from "./features/employees/EmployeeList";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />

  return (
    <>
    <Router>
      <Routes>
        {/* Group with DefaultLayout */}
        <Route element={<ProtectedRoute />}>
        <Route element={<DefaultLayout />}>
          {/* <Route index element={<EmployeeList />} /> */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
        </Route>
        
        {/* Group with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </Router>
    </>
  )
}

export default App
