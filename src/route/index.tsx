import React, { ReactElement, ReactNode } from "react";
import { Routes,Route } from 'react-router-dom'
import * as View from "../pages/view";
import LoadingMine from "../components/loadingmine";

const RouteConfig = (): ReactElement<ReactNode> => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<LoadingMine />}>
            <View.IndexView />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <React.Suspense fallback={<LoadingMine />}>
              <View.HomeView />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/funds"
          element={
            <React.Suspense fallback={<LoadingMine />}>
              <View.FundsView />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/strategies"
          element={
            <React.Suspense fallback={<LoadingMine />}>
              <View.StrategiesView />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/insights"
          element={
            <React.Suspense fallback={<LoadingMine />}>
              <View.InsightsView />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/research"
          element={
            <React.Suspense fallback={<LoadingMine />}>
              <View.ResearchView />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<LoadingMine />}>
              <View.AboutView />
            </React.Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default RouteConfig;
