import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout"
import HomePage from "../pages/home/HomePage"
import { RouteType } from "./config"
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashBoardIndex from "../pages/dashboard/DashBoardIndex";
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
const appRoutes: RouteType[]= [
    {
        index:true,
        element: <HomePage/>,
        state:"home"
    },
    {
        path:"/home",
        element:<HomePage/>,
        state:"home",
        sidebarProps:{
            displayText:"Trang chủ",
            icon:<HouseSharpIcon/>
        }
      
    },
    {
        path:"/dashboard",
        element:<DashboardPageLayout/>,
        state:"dashboard",
        sidebarProps:{
            displayText:"Lịch sử GD",
            icon:<ManageSearchOutlinedIcon/>
        },
        child:[
            {
                index:true,
                element:<DashBoardIndex/>,
                state:"dashboard.index",
            },
            {
                path:"/dashboard/default",
                element:<DefaultPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử đặt lệnh"
                }
            },  
             {
                path:"/dashboard/analytics",
                element:<AnalyticsPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử khớp lệnh"
                }
            }
            ,  
             {
                path:"/dashboard/analytics",
                element:<AnalyticsPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử lệnh khớp chờ thanh toán"
                }
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardPageLayout/>,
        state:"dashboard",
        sidebarProps:{
            displayText:"GD tiền",
            icon:<AttachMoneyTwoToneIcon/>
        },
        child:[
            {
                index:true,
                element:<DashBoardIndex/>,
                state:"dashboard.index",
            },
            {
                path:"/dashboard/default",
                element:<DefaultPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử đặt lệnh"
                }
            },  
             {
                path:"/dashboard/analytics",
                element:<AnalyticsPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử khớp lệnh"
                }
            }
            ,  
             {
                path:"/dashboard/analytics",
                element:<AnalyticsPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử lệnh khớp chờ thanh toán"
                }
            }
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardPageLayout/>,
        state:"dashboard",
        sidebarProps:{
            displayText:"Lịch sử GD",
            icon:<ManageSearchOutlinedIcon/>
        },
        child:[
            {
                index:true,
                element:<DashBoardIndex/>,
                state:"dashboard.index",
            },
            {
                path:"/dashboard/default",
                element:<DefaultPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử đặt lệnh"
                }
            },  
             {
                path:"/dashboard/analytics",
                element:<AnalyticsPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử khớp lệnh"
                }
            }
            ,  
             {
                path:"/dashboard/analytics",
                element:<AnalyticsPage/>,
                state:"dashboard.default",
                sidebarProps:{
                    displayText:"Lịch sử lệnh khớp chờ thanh toán"
                }
            }
        ]
    },
] 

export default appRoutes