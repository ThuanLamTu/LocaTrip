import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa"; // Thêm icon TikTok
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <FooterContainer>
      <motion.div
        className="copyright"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>Copyright © 2025 LocaTrip. All rights reserved</span>
        <span className="author">OOAD Team</span>
      </motion.div>
      <motion.ul
        className="links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Recommend</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </motion.ul>
      <motion.ul
        className="social__links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <li>
          <a
            href="https://www.facebook.com/thuan.lam.tu.2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/locatrip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/locatrip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@locatrip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </li>
      </motion.ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(135deg, #023e8a, #4361ee);
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 3rem 2.5rem;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2);
  color: white;

  .copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    span {
      font-family: "Playfair Display", serif;
      font-size: 1.1rem;
      font-weight: 400;
    }

    .author {
      margin-top: 0.5rem;
      font-weight: 700;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, #ffffff, #a3bffa);
      border-radius: 2px;
    }
  }

  ul.links {
    display: flex;
    list-style-type: none;
    gap: 2rem;

    li {
      a {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        text-decoration: none;
        color: #e2e8f0;
        transition: 0.3s ease-in-out;

        &:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }
  }

  ul.social__links {
    display: flex;
    list-style-type: none;
    gap: 1.5rem;

    li {
      a {
        text-decoration: none;
        color: inherit;

        svg {
          font-size: 1.5rem;
          color: #e2e8f0;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.2);
            color: #ffffff;
            background: linear-gradient(135deg, #a3bffa, #ffffff);
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

    .copyright {
      text-align: center;
    }

    ul.links {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    ul.social__links {
      flex-direction: row;
      gap: 2rem;
    }
  }
`;
