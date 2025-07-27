import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import Orders from "./pages/Orders/Orders";
import Categories from "./pages/Categories/Categories";
import CheckOut from "./pages/CheckOut/CheckOut";
import SearchProducts from "./pages/SearchProducts/SearchProducts";
import Brands from "./pages/Brands/Brands";
import { ToastContainer, toast } from 'react-toastify';
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductsProvider, { ProductsContext } from "./Context/Products.context";
import CategoriesProvider from "./Context/Categories.context";
import AuthProvider from "./Context/Auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Account from "./pages/Account/Account";
import Compare from "./pages/Compare/Compare";
import CartProvider, { CartContext } from "./Context/Cart.context";
import WishlistProvider from "./Context/Wishlist.context";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyResetCode from "./pages/VerifyResetCode/VerifyResetCode";
import BrandsProvider from "./Context/Brands.context";
import BrandDetails from "./pages/BrandDetails/BrandDetails";
import CategoryDetails from "./pages/Account/CategoryDetails/CategoryDetails";
import SubCategoryDetails from "./pages/SubCategoryDetails/SubCategoryDetails";
import AllOrders from "./pages/AllOrders/AllOrders";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
            {
          path:'/',
          index:true,
          element:<Home/>
        }
        ,
        {
        path:'/signup',element:<SignUp/>
      },
       {
        path:'/login',element:<Login />
      },
       {
        path:'/forgetpassword',element:<ForgetPassword/>
      },
       {
        path:'/verifyemail',element:<VerifyEmail />
      },
       {
        path:'*',element:<NotFound/>
      },
       {
        path:'/cart',element:<ProtectedRoute>
          <Cart/>
        </ProtectedRoute>
      },
       {
        path:'/product/:id',element:
          <ProductDetails/>
        
      },
      {
        path:'/brands/:id',element:
          <BrandDetails/>
        
      },
       {
        path:'/categories/:id',element:
          <CategoryDetails/>
        
      },
      {
        path:'/subcategories/:id',element:
          <SubCategoryDetails/>
        
      },
       {
        path:'/wishlist',element:<ProtectedRoute>
          <WishList/>
        </ProtectedRoute>
      },
       {
        path:'/home',element:<Home/>
      },
       {
        path:'/favourites',element:<ProtectedRoute>
          <Favourites/>
        </ProtectedRoute>
      },
       {
        path:'/account',element:<ProtectedRoute>
          <Account/>
        </ProtectedRoute>
      },
      {
        path:'/compare',element:<ProtectedRoute>
          <Compare />
        </ProtectedRoute>
      },
       {
        path:'/Orders',element:<ProtectedRoute>
          <Orders/>
        </ProtectedRoute>
      },
       {
        path:'/allorders',element:<ProtectedRoute>
          <AllOrders/>
        </ProtectedRoute>
      },
      {
        path:'/resetpassword',element:
          <ResetPassword/>
        
      },
      {
        path:'/verifyresetcode',element:
          <VerifyResetCode/>
      },
       {
        path:'/categories',element:<Categories/>
      },{
        path:'/checkout',element:<ProtectedRoute>
          <CheckOut/>
        </ProtectedRoute>
      },{
        path:'/searchproducts',element:<ProtectedRoute>
          <SearchProducts/>
        </ProtectedRoute>
      },
      {
        path:'/brands',element:
          <Brands/>
        
      },
      ]
    },
   
  ])
  return <>
      
         <AuthProvider>
          <BrandsProvider>
            <WishlistProvider>
              <CartProvider>
              <CategoriesProvider>
                    <ProductsProvider>
                      <RouterProvider router={router} />
                      <ToastContainer closeOnClick pauseOnHover />
                      <ScrollToTopButton/>
                    </ProductsProvider>
              </CategoriesProvider>
            </CartProvider>
          </WishlistProvider>
          </BrandsProvider>
         </AuthProvider>
  </>
}
