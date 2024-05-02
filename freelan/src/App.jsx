import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth/Auth";
import CompleteProfile from "./pages/auth/CompleteProfile";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import Projects from "./pages/owner/Projects";
import Project from "./pages/owner/Project";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashboard from "./pages/freelancer/FreelancerDashboard";
import SubmittedProjects from "./pages/freelancer/SubmittedProjects";
import Proposals from "./pages/freelancer/Proposals";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />

        <Route
          path="/owner"
          element={
            <ProtectedRoute>
              <OwnerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace={true} />} />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>

        <Route
          path="/freelancer"
          element={
            <ProtectedRoute>
              <FreelancerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace={true} />} />
          <Route path="dashboard" element={<FreelancerDashboard />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="projects" element={<SubmittedProjects />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace={true} />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="projects" element={<SubmittedProjects />} />
          <Route path="proposals" element={<Proposals />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// className="container xl:max-w-screen-xl"
