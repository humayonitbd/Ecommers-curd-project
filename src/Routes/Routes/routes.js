import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllAddProduct from "../../Pages/AllAddProduct/AllAddProduct";
import ConfromPage from "../../Pages/ConfromPage/ConfromPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Register from "../../Pages/Register/Register";
import UpdatePage from "../../Pages/UpdatePage/UpdatePage";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/', element:<Home></Home>},
        {path:'/about', element:<About></About>},
        {path:'/orders', element:<PrivetRoutes><Orders></Orders></PrivetRoutes>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},
        {path:`/products/:id`, element:<PrivetRoutes><ConfromPage></ConfromPage></PrivetRoutes>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
    },
    {path:'/addProduct', element:<AddProduct></AddProduct>},
    {path:'/allAddProduct', element:<AllAddProduct></AllAddProduct>},
    {path:'/updatePage/:id',
    loader:({params})=>fetch(`http://localhost:5000/addProductsAdd/${params.id}`),
     element:<UpdatePage></UpdatePage>}
    ]}
])

export default router;