import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import ArticleDetail from "../components/ArticleDetail";
import AboutUs from "../components/AboutUs";
import FromTheEditorsDesk from "../components/FromTheEditorsDesk";
import BoardPage from "../components/BoardPage";
import BoardMembers from "../components/BoardMembers";
import SubboardMembers from "../components/SubboardMembers";
import Login from "../components/Login";
import AdminDashboard from "../components/AdminDashboard";
import AdminArticlesList from "../components/AdminArticlesList";
import EditArticle from "../components/EditArticle";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = ({ articles }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage articles={articles} />} />
      <Route
        path="/articles/:id"
        element={<ArticleDetail articles={articles} />}
      />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/fromTheEditorsDesk" element={<FromTheEditorsDesk />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/board/members" element={<BoardMembers />} />
      <Route path="/board/subboard" element={<SubboardMembers />} />

      <Route path="/login" element={<Login />} />
      <Route
        path="/admin/"
        element={
          <ProtectedRoute>
            <AdminDashboard articles={articles} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/articles"
        element={
          <ProtectedRoute>
            <AdminArticlesList articles={articles} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/edit/:id"
        element={
          <ProtectedRoute>
            <EditArticle />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
