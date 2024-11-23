import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';


//----------------------------    Import Pages   ----------------------------------------------------------------

const Layout = React.lazy(() => import('../layout/layout'));
const HomePage = React.lazy(() => import('../pages/board-pages/homePage'));
const QuestionSelection = React.lazy(() => import('../pages/action-pages/questionSelection'));
const VideoQuestionPreparationPage = React.lazy(() => import('../pages/action-pages/videoQuestionPreparationPage'));
const VideoRecordingPage = React.lazy(() => import('../pages/action-pages/videoRecordingPage'));
const CodingPage = React.lazy(() => import('../pages/action-pages/codingPage'));
const ResultPage = React.lazy(() => import('../pages/board-pages/resultPage'));


const ErrorPage = React.lazy(() => import('../pages/utility-pages/errorPage'));
const LoadingPage = React.lazy(() => import('../pages/utility-pages/loadingPage'));
//----------------------------    Routes  ----------------------------------------------------------------

const RouteList = () => (
    <>
        <Suspense fallback={<LoadingPage/>}>
            <Routes>
                <Route element={<Layout/>}>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/question-pg" element={<VideoQuestionPreparationPage/>}/>
                    <Route exact path="/recording-pg" element={<VideoRecordingPage/>}/>
                    <Route exact path="/questionSelection-pg" element={<QuestionSelection/>}/>
                    <Route exact path="/coding-pg" element={<CodingPage/>}/>
                    <Route exact path="/result-pg" element={<ResultPage/>}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Suspense>
    </>
);

export default RouteList;
