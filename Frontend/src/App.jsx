import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./user/pages/Login";
import Signup from "./user/pages/Signup";
import LandingPage from "./user/pages/LandingPage";
import OTPverify from "./user/pages/OTPverify";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminAddProduct from "./admin/pages/AdminAddProduct";
import PublicRoute from "./user/components/PublicRoute";
import { useEffect } from "react";
import { useRefreshTokenQuery } from "./services/authApi";
import { useDispatch } from "react-redux";
import { adminLogOut, logOut, setAdminCredentials, setCredentials } from "./store/authSlice";
import { RotatingLines } from "react-loader-spinner";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminUsers from "./admin/pages/AdminUsers";
import AdminProtetedRoutes from "./admin/components/AdminProtetedRoutes";
import AdminPublicRoutes from "./admin/components/AdminPublicRoutes";
import { useAdminRefreshTokenQuery } from "./services/adminFethApi";
import AdminAddCatagories from "./admin/pages/AdminAddCatagories";
import AdminCatagories from "./admin/pages/AdminCatagories";

function App() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useRefreshTokenQuery();
  const {data:adminData,error:adminError,isLoading:adminIsLoading} = useAdminRefreshTokenQuery()
  useEffect(() => {
    if (data) {
      dispatch(setCredentials(data));
    } else if (error) {
      dispatch(logOut());
    }
    if(adminData)
      dispatch(setAdminCredentials(adminData))
    else if(adminError)
      dispatch(adminLogOut())

  }, [data,adminData,adminError, error, dispatch]);

  if (isLoading || adminIsLoading){
    return (
      <div className="w-full min-h-screen flex justify-center items-center ">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperClass="stroke-black"
        />
      </div>
    );}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route path="/verifyOtp/:userId" element={<OTPverify />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />{" "}
        <Route path="/admin/login" element={
          <AdminPublicRoutes>
            <AdminLogin />
          </AdminPublicRoutes>
          } />
        <Route path="/admin" element={
          <AdminProtetedRoutes>
            <AdminDashboard />
          </AdminProtetedRoutes>
          } />
        <Route path="/admin/products" element={
          <AdminProtetedRoutes>
          <AdminProducts />
        </AdminProtetedRoutes>
          } />
        <Route path="/admin/addProducts" element={<AdminAddProduct />} />
        <Route path="/admin/users" element={
          <AdminProtetedRoutes>
          <AdminUsers />
        </AdminProtetedRoutes>
        } />
        <Route path="/admin/addCatagories" element={
          <AdminProtetedRoutes>
          <AdminAddCatagories />
        </AdminProtetedRoutes>
        } />
        <Route path="/admin/catagories" element={
          <AdminProtetedRoutes>
          <AdminCatagories />
        </AdminProtetedRoutes>
        } />
      </Routes>
    </Router>
  );
}

export default App;
