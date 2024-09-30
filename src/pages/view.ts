import React from 'react';

const IndexView = React.lazy(() => import('./index/index'));
const HomeView = React.lazy(() => import('./home/index'));
const FundsView = React.lazy(() => import('./funds/index'));
const StrategiesView = React.lazy(() => import('./strategies/index'));
const InsightsView = React.lazy(() => import('./insights/index'));
const ResearchView = React.lazy(() => import('./research/index'));
const AboutView = React.lazy(() => import('./about/index'));


export {
    IndexView,
    HomeView,
    FundsView,
    StrategiesView,
    InsightsView,
    ResearchView,
    AboutView
}