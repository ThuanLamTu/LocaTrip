import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import HanoiImage from "../assets/hanoi.jpg";
import SaigonImage from "../assets/saigon.jpg";
import HueImage from "../assets/hue.jpg";
import DanangImage from "../assets/danang.jpg";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import NinhthuanImg from "../assets/ninhthuan.jpg";

export default function Recommend() {
  const location = useLocation();
  const { address, checkInDate, checkOutDate } = location.state || {};

  const domesticData = [
    {
      id: 1,
      image: HanoiImage,
      title: "Hà Nội",
      subTitle:
        "Hà Nội, the capital of Vietnam, known for its rich history and culture.",
      area: "3,358.6 km²",
      duration: "Approx 2 night trip",
      weather: "Thời tiết đẹp từ tháng 9 đến tháng 11",
      bestMonths: "Tháng 9 đến tháng 11",
      hotels: [
        "Hotel De L'Opera Hanoi",
        "Hanoi La Siesta Hotel",
        "Sofitel Legend Metropole Hanoi",
      ],
    },
    {
      id: 2,
      image: SaigonImage,
      title: "Sài Gòn",
      subTitle:
        "Sài Gòn, Vietnam's largest city, a vibrant and dynamic metropolis.",
      area: "2,095.6 km²",
      duration: "Approx 2 night trip",
      weather: "Thời tiết đẹp từ tháng 12 đến tháng 4",
      bestMonths: "Tháng 12 đến tháng 4",
      hotels: [
        "The Reverie Saigon",
        "Park Hyatt Saigon",
        "Sheraton Saigon Hotel",
      ],
    },
    {
      id: 3,
      image: HueImage,
      title: "Huế",
      subTitle:
        "Huế, a historic city in Vietnam, known for its ancient citadel.",
      area: "70.99 km²",
      duration: "Approx 1 night trip",
      weather: "Thời tiết đẹp từ tháng 5 đến tháng 10",
      bestMonths: "Tháng 5 đến tháng 10",
      hotels: [
        "Ana Mandara Hue Beach Resort",
        "Pilgrimage Village Boutique Resort & Spa",
        "Imperial Hotel Hue",
      ],
    },
    {
      id: 4,
      image: DanangImage,
      title: "Đà Nẵng",
      subTitle:
        "Đà Nẵng, a coastal city in Vietnam, famous for its beaches and mountains.",
      area: "1,285.4 km²",
      duration: "Approx 3 night trip",
      weather: "Thời tiết đẹp từ tháng 3 đến tháng 8",
      bestMonths: "Tháng 3 đến tháng 8",
      hotels: [
        "InterContinental Danang Sun Peninsula Resort",
        "Fusion Maia Danang",
        "Novotel Danang Premier Han River",
      ],
    },
    {
      id: 5,
      image: NinhthuanImg,
      title: "Ninh Thuận",
      subTitle: "Ninh Thuận, a beautiful coastal destination in Vietnam.",
      area: "3.358 km²",
      duration: "Approx 3 night trip",
      weather: "Thời tiết đẹp từ tháng 6 đến tháng 2",
      bestMonths: "Tháng 7 đến tháng 5",
      hotels: [
        "TTC Resort Premium",
        "Amanoi Resort",
        "Hoàn Mỹ Resort Phan Rang",
      ],
    },
  ];

  const internationalData = [
    {
      id: 6,
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      area: "728.6 km²",
      duration: "Approx 2 night trip",
      weather: "Thời tiết đẹp quanh năm",
      bestMonths: "Tháng 2 đến tháng 4",
      hotels: [
        "Marina Bay Sands",
        "Raffles Hotel",
        "The Fullerton Hotel Singapore",
      ],
    },
    {
      id: 7,
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      area: "513,120 km²",
      duration: "Approx 2 night trip",
      weather: "Thời tiết đẹp từ tháng 11 đến tháng 2",
      bestMonths: "Tháng 11 đến tháng 2",
      hotels: [
        "Anantara Riverside Bangkok Resort",
        "Mandarin Oriental Bangkok",
        "The Siam Hotel",
      ],
    },
    {
      id: 8,
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      area: "105.4 km²",
      duration: "Approx 2 night trip",
      weather: "Thời tiết đẹp từ tháng 4 đến tháng 6 và tháng 9 đến tháng 10",
      bestMonths: "Tháng 4 đến tháng 6 và tháng 9 đến tháng 10",
      hotels: ["The Ritz Paris", "Le Meurice", "Shangri-La Hotel Paris"],
    },
    {
      id: 9,
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      area: "268,021 km²",
      duration: "Approx 1 night trip",
      weather: "Thời tiết đẹp từ tháng 12 đến tháng 2",
      bestMonths: "Tháng 12 đến tháng 2",
      hotels: ["Eagle's Nest", "The Lodge at Kauri Cliffs", "Matakauri Lodge"],
    },
    {
      id: 10,
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      area: "30.55 km²",
      duration: "Approx 2 night 2 day trip",
      weather: "Thời tiết đẹp quanh năm",
      bestMonths: "Tháng 5 đến tháng 10",
      hotels: [
        "Four Seasons Resort Bora Bora",
        "The St. Regis Bora Bora Resort",
        "InterContinental Bora Bora Resort & Thalasso Spa",
      ],
    },
    {
      id: 11,
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      area: "1,572 km²",
      duration: "Approx 3 night 2 day trip",
      weather: "Thời tiết đẹp từ tháng 5 đến tháng 9",
      bestMonths: "Tháng 5 đến tháng 9",
      hotels: ["The Ritz London", "Claridge's", "The Dorchester"],
    },
  ];

  const filteredDomesticData = address
    ? domesticData.filter((destination) =>
        destination.title.toLowerCase().includes(address.toLowerCase())
      )
    : domesticData;

  const filteredInternationalData = address
    ? internationalData.filter((destination) =>
        destination.title.toLowerCase().includes(address.toLowerCase())
      )
    : internationalData;

  return (
    <Section id="recommend">
      {address && (
        <div className="search-info">
          <h3>
            Search result for "{address}" from{" "}
            {checkInDate?.toLocaleDateString()} to{" "}
            {checkOutDate?.toLocaleDateString()}
          </h3>
        </div>
      )}

      <div className="title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Domestic Destinations
        </motion.h2>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover destination in our country.
        </motion.p>
      </div>
      {filteredDomesticData.length > 0 ? (
        <div className="destinations">
          {filteredDomesticData.map((destination) => (
            <Link
              to={`/destination/${destination.id}`}
              key={destination.id}
              className="destination-link"
            >
              <div className="destination">
                <img src={destination.image} alt={destination.title} />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <h4>{destination.area}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <motion.p
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          can not find suitable destination in our country.
        </motion.p>
      )}

      <div className="title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          International Destinations
        </motion.h2>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover international destination.
        </motion.p>
      </div>
      {filteredInternationalData.length > 0 ? (
        <div className="destinations">
          {filteredInternationalData.map((destination) => (
            <Link
              to={`/destination/${destination.id}`}
              key={destination.id}
              className="destination-link"
            >
              <div className="destination">
                <img src={destination.image} alt={destination.title} />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <h4>{destination.area}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <motion.p
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Can not find suitable international destination.
        </motion.p>
      )}
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  padding-top: 80px; /* Thêm padding-top để tránh bị che bởi Navbar */

  .search-info {
    text-align: center;
    margin-bottom: 2rem;
    h3 {
      font-size: 1.5rem;
      color: #03045e;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;

    h2 {
      font-family: "Playfair Display", serif;
      font-weight: 700;
      font-size: 3rem;
      background: linear-gradient(90deg, #4361ee, #023e8a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
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

    .subtitle {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-style: italic;
      color: #4361ee;
      margin-top: 0.5rem;
    }
  }

  .no-results {
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    font-style: italic;
    color: #4361ee;
    text-align: center;
    margin: 1rem 0;
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .destination-link {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding-top: 60px; /* Giảm padding-top trên mobile vì Navbar có thể nhỏ hơn */
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }

    .title {
      h2 {
        font-size: 2rem;
      }
    }
  }
`;
