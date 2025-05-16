import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Recommend from "./Components/Recommend";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import DestinationDetails from "./Components/DestinationDetails";
import About from "./Components/About"; // Component cho trang Giới Thiệu
import Reviews from "./Components/Reviews"; // Component cho trang Đánh Giá
import scrollreveal from "scrollreveal";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
      `,
      {
        opacity: 0.8,
        interval: 300,
      }
    );
  }, []);

  return (
    <Router>
      <Main>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Trang chủ hiển thị tất cả các section */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Recommend />
                <Testimonials />
                <Footer />
              </>
            }
          />
          {/* Route cho trang Giới Thiệu */}
          <Route path="/gioi-thieu" element={<About />} />
          {/* Route cho trang Đánh Giá */}
          <Route path="/danh-gia" element={<Reviews />} />
          <Route path="/diem-den" element={<Recommend />} />
          {/* Route cho trang chi tiết điểm đến */}
          <Route path="/destination/:id" element={<DestinationDetails />} />
        </Routes>
      </Main>
    </Router>
  );
}

const Main = styled.main``;
