import styled from "styled-components";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import avatarImage from "../assets/avatar.png";

export default function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      text: "LocaTrip gave me a great experience! Professional service and very thoughtfully arranged itinerary.",
      name: "Nguyễn An",
      role: "Visitor",
      rating: 5, // Thêm rating
    },
    {
      id: 2,
      text: "I was very satisfied with the trip organized by Travelo. The support team was enthusiastic and everything exceeded expectations!",
      name: "Trần Bình",
      role: "Freelance journalist",
      rating: 5,
    },
    {
      id: 3,
      text: "A memorable trip! The destinations were carefully chosen and I had unforgettable memories.",
      name: "Lê Minh",
      role: "Photographer",
      rating: 5,
    },
  ];

  return (
    <Section id="testimonials">
      <div className="title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Happy Customers
        </motion.h2>
      </div>
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="testimonial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p>{testimonial.text}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="info">
              <img src={avatarImage} alt={testimonial.name} />
              <div className="details">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;

  .title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;

    h2 {
      font-family: "Playfair Display", serif;
      font-weight: 700;
      font-size: 2.5rem;
      background: linear-gradient(90deg, #4361ee, #023e8a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;
      display: inline-block;

      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 3px;
        background: linear-gradient(90deg, #4361ee, #023e8a);
        border-radius: 2px;
      }
    }
  }

  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 3rem;

    .testimonial {
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid transparent;
      background: linear-gradient(to right, #ffffff, #ffffff),
        linear-gradient(135deg, #4361ee, #023e8a);
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      transition: all 0.3s ease-in-out;
      width: 300px;

      &:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        border: 1px solid transparent;
        background: linear-gradient(to right, #ffffff, #ffffff),
          linear-gradient(135deg, #a3bffa, #ffffff);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;

        .rating svg {
          color: #e67e22; /* Đổi màu sao khi hover */
        }
      }

      p {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        color: #333;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: center;
      }

      .rating {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        margin-bottom: 1rem;

        svg {
          font-size: 1.2rem;
          color: #f1c40f; /* Màu vàng cho sao */
          transition: color 0.3s ease-in-out;
        }
      }

      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;

        img {
          border-radius: 50%;
          height: 3.5rem;
          width: 3.5rem;
          border: 2px solid transparent;
          background: linear-gradient(to right, #ffffff, #ffffff),
            linear-gradient(135deg, #4361ee, #023e8a);
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
        }

        .details {
          h4 {
            font-family: "Playfair Display", serif;
            font-size: 1.2rem;
            color: #023e8a;
            margin-bottom: 0.2rem;
          }

          span {
            font-family: "Roboto", sans-serif;
            font-size: 0.9rem;
            color: #666;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      align-items: center;
      margin: 0;

      .testimonial {
        width: 100%;
        max-width: 350px;

        .info {
          flex-direction: column;
          text-align: center;
        }
      }
    }

    .title {
      h2 {
        font-size: 2rem;
      }
    }
  }
`;
