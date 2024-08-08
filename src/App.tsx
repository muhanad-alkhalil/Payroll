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
import Salaries from "./features/salaries/Saleries";
import SalaryHistory from "./features/salaries/SalaryHistory";

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
          <Route index path="/employees" element={<EmployeeList />} />
          <Route path="/salaries" element={<Salaries />} />
          <Route path="/salaries/history" element={<SalaryHistory />} />
        </Route>
        </Route>
        
        {/* Group with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/employees" replace />} />
      </Routes>
      <ToastContainer />
    </Router>
    </>
  )
}

export default App
