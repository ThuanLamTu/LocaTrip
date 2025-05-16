import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderBanner = ({ image, title, subTitle }) => (
  <Banner image={image}>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      {title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {subTitle}
    </motion.p>
  </Banner>
);

const Banner = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 5rem 2rem;
  color: white;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  height: 400px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  h1,
  p {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 300;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
    height: 300px;
    background-attachment: scroll;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default HeaderBanner;
