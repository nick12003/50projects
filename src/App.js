import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css'



function App() {

    const Pages = [
        { title: "ExpandingCards" },
        { title: "ProgressSteps" },
        { title: "RotatingNavigationAnimation" },
        { title: "HiddenSearchWidget" },
        { title: "BlurryLoading" },
        { title: "ScrollAnimation" },
        { title: "SplitLandingPage" },
        { title: "FormWave" },
        { title: "SoundBoard" },
        { title: "DadJokes" },
        { title: "EventKeycodes" },
        { title: "FaqCollapse" },
        { title: "RandomChoicePicker" },
        { title: "AnimatedNavigation" },
        { title: "IncrementingCounter" },
        { title: "DrinkWater" },
        { title: "MovieApp" },
        { title: "BackgroundSlider" },
        { title: "ThemeClock" },
        { title: "ButtonRippleEffect" },
        { title: "DragNDrop" },
        { title: "DrawingApp" },
        { title: "KineticLoader" },
        { title: "ContentPlaceholder" },
        { title: "StickyNavbar" },
        { title: "DoubleVerticalSlider" },
        { title: "ToastNotification" },
        { title: "GithubProfiles" },
        { title: "DoubleClickHeart" },
        { title: "AutoTextEffect" },
        { title: "PasswordGenerator" },
        { title: "GoodCheapFast" },
        { title: "NotesApp" },
        { title: "AnimatedCountdown" },
        { title: "ImageCarousel" },
        { title: "Hoverboard" },
        { title: "Pokedex" },
        { title: "MobileTabNavigation" },
        { title: "PasswordStrengthBackground" },
        { title: "ThreeDBackgroundBoxes" },
        { title: "VerifyAccountUi" },
        { title: "LiveUserFilter" },
        { title: "FeedbackUiDesign" },
        { title: "CustomRangeSlider" },
        { title: "NetflixMobileNavigation" },
        { title: "QuizApp" },
        { title: "TestimonialBoxSwitcher" },
        { title: "RandomImageFeed" },
        { title: "TodoList" },
        { title: "InsectCatchGame" },
        { title: "MovieSeatBooking" }
    ]

    Pages.forEach(item => item.component = lazy(() => import(`./components/${item.title}`)));


    return (
        <>
            <Router>
                <Navbar Pages={Pages} />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {
                            Pages.map(({ title, component }, i) => {
                                return <Route key={i} path={`/${title}`} component={component} />
                            })
                        }
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
}

export default App;
