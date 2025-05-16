import styled from "styled-components";
import { motion } from "framer-motion";

// Dữ liệu đánh giá mẫu (có thể thay bằng dữ liệu từ backend sau này)
const reviewData = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    comment:
      "Great service! I had a memorable trip in Da Nang thanks to Locatrip.",
    date: "20/04/2025",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    comment:
      "The hotel is very nice, but I wish there were more detailed instructions.",
    date: "18/04/2025",
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    comment:
      "The support team is very enthusiastic, I will come back to use the service!",
    date: "15/04/2025",
  },
];

const Reviews = () => {
  return (
    <Section>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Appreciation from customers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover great experiences from LocaTrip customers!
        </motion.p>
      </Header>

      <ReviewList>
        {reviewData.map((review) => (
          <ReviewCard
            key={review.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: review.id * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <Avatar src={review.avatar} alt={review.name} />
            <ReviewContent>
              <ReviewHeader>
                <h3>{review.name}</h3>
                <Rating>
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index}>★</Star>
                  ))}
                </Rating>
              </ReviewHeader>
              <p>{review.comment}</p>
              <ReviewDate>{review.date}</ReviewDate>
            </ReviewContent>
          </ReviewCard>
        ))}
      </ReviewList>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    #e0f7fa 0%,
    #b2ebf2 100%
  ); /* Gradient nhẹ nhàng */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a3c5e; /* Màu xanh đậm sang trọng */
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    font-style: italic;
  }
`;

const ReviewList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
`;

const ReviewCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Bóng đổ mềm mại */
  padding: 1.5rem;
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #1a3c5e; /* Viền xanh đậm */
`;

const ReviewContent = styled.div`
  flex: 1;
  text-align: left;

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin: 0.5rem 0;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1a3c5e;
  }
`;

const Rating = styled.div`
  display: flex;
`;

const Star = styled.span`
  color: #f4c430; /* Màu vàng cho sao */
  font-size: 1.2rem;
`;

const ReviewDate = styled.span`
  font-size: 0.9rem;
  color: #999;
  font-style: italic;
`;

export default Reviews;
