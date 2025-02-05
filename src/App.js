// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ModalPopup from "./components/ModalPopup";
// import Navbar from "./common/Navbar";
// import SubNavbar from "./common/SubNav";
// import RenderPost from "./components/RenderPost";
// import "react-toastify/dist/ReactToastify.css";
// import "react-toastify/dist/ReactToastify.css";
// import Packages from "./pages/Packages";
// import Video from "./pages/Video";
// import HeroSection from "./pages/HeroSection";
// import { ToastContainer } from "react-toastify";

// function App() {
//   const [showPostModal, setShowPostModal] = useState(false);

//   useEffect(() => {
//     const hasVisitedPostRoute = localStorage.getItem("visitedPostRoute");
//     if (!hasVisitedPostRoute) {
//       setShowPostModal(true);
//     }
//   }, []);

//   const closeModal = () => {
//     setShowPostModal(false);
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Navbar />
//                 <section id="hero">
//                   <HeroSection />
//                 </section>

//                 <section id="video">
//                   <Video />
//                 </section>

//                 <section id="pricing">
//                   <Packages />
//                 </section>
//               </div>
//             }
//           />
//           <Route
//             path="/post"
//             element={
//               <div>
//                 <SubNavbar />
//                 <RenderPost />
//               </div>
//             }
//           />
//         </Routes>
//       </BrowserRouter>

//       {showPostModal && <ModalPopup onClose={closeModal} />}

//       <ToastContainer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ModalPopup from "./components/ModalPopup";
import Navbar from "./common/Navbar";
import SubNavbar from "./common/SubNav";
import RenderPost from "./components/RenderPost";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import Packages from "./pages/Packages";
import Video from "./pages/Video";
import HeroSection from "./pages/HeroSection";
import { ToastContainer } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Profile from "./components/Profile";
import EmailVerifyModal from "./components/EmailVerifyModal"
import { useDispatch } from "react-redux";
import { resetAuthState, setAuthState } from "./slices/AuthSlice";

function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [localAuth, setAuth] = useState(false);
  console.log(auth.currentUser)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      dispatch(setAuthState());
      setAuth(true);
      // ...
    } else {
      // User is signed out
      // ...

      dispatch(resetAuthState());
      setAuth(false);
    }
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <section id="hero">
                  <HeroSection />
                </section>

                <section id="video">
                  <Video />
                </section>

                <section id="pricing">
                  <Packages />
                </section>
              </div>
            }
          />
          <Route
            path="/post"
            element={
              <div>
                <SubNavbar />
                <RenderPost />
              </div>
            }
          />
          {localAuth && (
            <>
              <Route
                path="/profile"
                element={
                  <div>
                    <SubNavbar />
                    <Profile />
                  </div>
                }
              />
              <Route
                path="/myposts"
                element={
                  <div>
                    <SubNavbar />
                    <Profile />
                  </div>
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
      {auth.currentUser && !auth.currentUser.emailVerified && <EmailVerifyModal />}
      <ToastContainer />
    </div>
  );
}

export default App;
