import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AllUsers from "../pages/dashboard/AllUsers";
import CashAgent from "../pages/dashboard/CashAgent";
import Affiliators from "../pages/dashboard/Affiliators";
import GameCategories from "../pages/dashboard/GameCategories";
import UserProfile from "../pages/dashboard/UserProfile";
import AgentProfile from "../pages/dashboard/AgentProfile";
import GamesApi from "../pages/dashboard/GamesApi";
import AddGamesCategories from "../pages/dashboard/AddGamesCategories";
import FrontendSlider from "../pages/dashboard/FrontendSlider";
import PromotionOffer from "../pages/dashboard/PromotionOffer";
import DepositHistory from "../pages/dashboard/DepositHistory";
import WithdrawHistory from "../pages/dashboard/WithdrawHistory";
import AdminLogin from "../pages/admin-login/AdminLogin";
import ActiveGames from "../pages/dashboard/ActiveGames";
import InActiveGames from "../pages/dashboard/InActiveGames";
import HomeControl from "../pages/dashboard/HomeControl";
import AdminRoute from "./AdminRoute";
import Promotion from "../components/home/promotion/Promotion";
import CashAgentLayout from "../layout/CashAgentLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/promotion",
        element: <Promotion />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "all-user", element: <AllUsers /> },
      { path: "agent-tree", element: <CashAgent /> },
      { path: "affiliators", element: <Affiliators /> },
      { path: "game-categories", element: <GameCategories /> },
      { path: "active-games", element: <ActiveGames /> },
      { path: "inactive-games", element: <InActiveGames /> },
      { path: "games-api/:id", element: <GamesApi /> },
      { path: "user-profile", element: <UserProfile /> },
      { path: "agent-profile", element: <AgentProfile /> },
      { path: "add-games-categories", element: <AddGamesCategories /> },
      { path: "home-control", element: <HomeControl /> },
      { path: "frontend-slider", element: <FrontendSlider /> },
      { path: "promotion-offer", element: <PromotionOffer /> },
      { path: "deposits", element: <DepositHistory /> },
      { path: "withdraws", element: <WithdrawHistory /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/cash-agent",
    element: <CashAgentLayout />,
  },
]);

export default router;
