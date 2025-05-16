import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaEnvelope } from "react-icons/fa";

// Hình ảnh minh họa (em có thể thay bằng hình ảnh thực tế)
const bannerImage =
  "https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/d1(21).jpg";

const About = () => {
  return (
    <Section>
      {/* Banner Section */}
      <Banner
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <BannerImage src={bannerImage} alt="Travel Banner" />
        <BannerOverlay>
          <BannerTitle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover the world with LOCATRIP
          </BannerTitle>
        </BannerOverlay>
      </Banner>

      {/* About Us Section */}
      <ContentSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <SectionTitle>About us</SectionTitle>
        <SectionDescription>
          LOCATRIP is the leading travel platform, helping you discover the most
          wonderful destinations in the world. We offer tailor-made itineraries,
          suitable for all tastes and budgets. Let us make your travel dreams
          come true!
        </SectionDescription>
      </ContentSection>

      {/* Mission Section */}
      <ContentSection
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <SectionTitle>
          <FaRocket style={{ marginRight: "10px" }} />
          Our Mission
        </SectionTitle>
        <SectionDescription>
          We are committed to providing memorable, safe and sustainable travel
          experiences. Every trip is a story, and we are here to help you write
          your own.
        </SectionDescription>
      </ContentSection>

      {/* Team Section */}
      <ContentSection
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <SectionTitle>
          <FaUsers style={{ marginRight: "10px" }} /> LOCATRIP Team
        </SectionTitle>
        <TeamContainer>
          <TeamCard
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <TeamImage
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/275612014_1034358710481379_7027970331077647968_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=uGDcC_eRBt8Q7kNvwEdmT6X&_nc_oc=AdlUqBizDXhEGyzSZTZYXvtI4YlS58qPK9VUZVCUMqND2VZkJpnpMmYtE0XjmD8Jdu6NTwmJwySsUBhHGjRSafMw&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=bP5AxrHaCsrmvR9nPkJRBQ&oh=00_AfLxHjV4T0j-sHnaKL_Ien0ywstG6g2a8nDBL3cJIBkC6g&oe=682A6E41"
              alt="Team Member 1"
            />
            <TeamName>Thuận Lâm Tự</TeamName>
            <TeamRole>Founder & CEO</TeamRole>
          </TeamCard>
          <TeamCard
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <TeamImage
              src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-9/83295157_605257243380175_6728007260628320256_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=EOqduBi_wlgQ7kNvwGfwf1q&_nc_oc=Adn8VXVgNFbdUFsZZyQ1dLqsVd8mK_-t8zjrYpw76OifY-Awg6aQ6YF6W5Jio47rQLvf9C8Iqg2hmaJpg-L5RO0M&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=tUl_aO4VWkmfjij4F2-xMA&oh=00_AfGFKrozNB9tau6ormy09mu9CURKZVGTbqKhfJZt0wDx6Q&oe=683132E3"
              alt="Team Member 2"
            />
            <TeamName>Lê Nguyễn Văn Phát</TeamName>
            <TeamRole>Travel Expert</TeamRole>
          </TeamCard>
          <TeamCard
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <TeamImage
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Team Member 3"
            />
            <TeamName>Hoàng Việt Tân</TeamName>
            <TeamRole>Marketing Lead</TeamRole>
          </TeamCard>
        </TeamContainer>
      </ContentSection>

      {/* Contact Section */}
      <ContentSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <SectionTitle>
          <FaEnvelope style={{ marginRight: "10px" }} />
          Contact Us
        </SectionTitle>
        <SectionDescription>
          Have questions or need assistance? Contact us via email:{" "}
          <a href="mailto:support@locatrip.com">LocaTrip@gmail.com.com</a> or
          hotline: 0123 456 789.
        </SectionDescription>
      </ContentSection>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const Banner = styled(motion.div)`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerTitle = styled(motion.h1)`
  color: white;
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ContentSection = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto 4rem auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    width: 50px;
    height: 3px;
    background: #4caf50;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;

  a {
    color: #0077b6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const TeamCard = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 30%;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const TeamName = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default About;
