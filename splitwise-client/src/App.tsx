import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/dashboard/Dashboard";
import Groups from "./pages/groups/Groups";
import GroupDetail from "./pages/group-detail/GroupDetail";
import AddExpense from "./modals/add-expense/AddExpense";
import EditExpense from "./modals/edit-expense/EditExpense";
import Activity from "./pages/activity/Activity";
import Profile from "./pages/profile/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/groups"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Groups />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/group/:groupId"
          element={
            <ProtectedRoute>
              <AppLayout>
                <GroupDetail />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/group/:groupId/add"
          element={
            <ProtectedRoute>
              <AppLayout>
                <AddExpense />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/expense/:expenseId/edit"
          element={
            <ProtectedRoute>
              <AppLayout>
                <EditExpense />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/activity"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Activity />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Profile />
              </AppLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
