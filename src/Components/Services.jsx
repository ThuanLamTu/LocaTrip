import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {
  FaFire,
  FaTag,
  FaMountain,
  FaStar,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedLocationHotels, setSelectedLocationHotels] = useState(null);

  const data = [
    {
      title: "Địa Điểm Đang Hot",
      subTitle:
        "Khám phá những điểm đến đang được yêu thích nhất bởi hàng ngàn du khách.",
      color: "#4361ee",
      icon: <FaFire />,
      image: "https://picsum.photos/400/200?random=1",
      modalContent: (
        <div>
          <ModalTitle>The destination are hot</ModalTitle>
          <LocationGrid>
            <LocationCard>
              <LocationImage
                src="https://picsum.photos/150/100?random=11"
                alt="Đà Nẵng"
              />
              <LocationInfo>
                <LocationName>Đà Nẵng</LocationName>
                <LocationStats>
                  Booked by 5,000 travelers last week
                </LocationStats>
                <ExploreButton onClick={() => openHotelModal("Đà Nẵng")}>
                  Discover Now
                </ExploreButton>
              </LocationInfo>
            </LocationCard>
            <LocationCard>
              <LocationImage
                src="https://picsum.photos/150/100?random=12"
                alt="Phú Quốc"
              />
              <LocationInfo>
                <LocationName>Phú Quốc</LocationName>
                <LocationStats>
                  Booked by 3,000 travelers last week
                </LocationStats>
                <ExploreButton onClick={() => openHotelModal("Phú Quốc")}>
                  Discover Now
                </ExploreButton>
              </LocationInfo>
            </LocationCard>
            <LocationCard>
              <LocationImage
                src="https://picsum.photos/150/100?random=13"
                alt="Sapa"
              />
              <LocationInfo>
                <LocationName>Sapa</LocationName>
                <LocationStats>
                  Booked by 2,800 travelers last week
                </LocationStats>
                <ExploreButton onClick={() => openHotelModal("Sapa")}>
                  Discover Now
                </ExploreButton>
              </LocationInfo>
            </LocationCard>
          </LocationGrid>
        </div>
      ),
    },
    {
      title: "Những Nơi Đang Giảm Giá",
      subTitle:
        "Săn ngay các khách sạn đang có ưu đãi hấp dẫn, tiết kiệm chi phí cho chuyến đi của bạn.",
      color: "#023e8a",
      icon: <FaTag />,
      image: "https://picsum.photos/400/200?random=2",
      modalContent: (
        <div>
          <ModalTitle>Attractive Offers</ModalTitle>
          <ul>
            <li>
              Khách sạn A - Đà Nẵng - Giảm 25% - Chỉ còn 1.200.000 VNĐ/đêm -{" "}
              <button>Book Now</button>
            </li>
            <li>
              Khách sạn B - Hội An - Giảm 30% - Chỉ còn 900.000 VNĐ/đêm -{" "}
              <button>Book Now</button>
            </li>
            <li>
              Khách sạn C - Hà Nội - Giảm 20% - Chỉ còn 1.500.000 VNĐ/đêm -{" "}
              <button>Book Now</button>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Unique Local Experiences",
      subTitle:
        "Participate in cultural activities and unique experiences at your destination.",
      color: "#4361ee",
      icon: <FaMountain />,
      image: "https://picsum.photos/400/200?random=3",
      modalContent: (
        <div>
          <ModalTitle>Unique Experience</ModalTitle>
          <ul>
            <li>
              Dalat Flower Festival - Join the biggest flower festival of the
              year - <button>Learn More</button>
            </li>
            <li>
              Hanoi Street Food - Explore the Old Quarter and its Special Dishes
              - <button>Learn More</button>
            </li>
            <li>
              Kayaking Ha Long - Experience Ha Long Bay from a new perspective -{" "}
              <button>Learn More</button>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Beautiful Hotel Highly Rated",
      subTitle:
        "List of hotels highly rated for beautiful space and quality service.",
      color: "#023e8a",
      icon: <FaStar />,
      image: "https://picsum.photos/400/200?random=4",
      modalContent: (
        <div>
          <ModalTitle>Beautiful Hotel Highly Rated</ModalTitle>
          <ul>
            <li>
              D Hotel - Dalat - Score 4.9/5 - Romantic space-{" "}
              <button>See Details</button>
            </li>
            <li>
              E Hotel - Phu Quoc - Score 4.8/5 - Beautiful sea view -{" "}
              <button>See Details</button>
            </li>
            <li>
              F Hotel - Nha Trang - Score 4.7/5 - 5 star service-{" "}
              <button>See Details</button>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const hotelsData = {
    "Đà Nẵng": [
      {
        name: "Vinpearl Resort & Spa Đà Nẵng",
        price: "2.500.000 VNĐ/đêm",
        rating: "4.8/5",
        image: "https://picsum.photos/100/100?random=21",
      },
      {
        name: "InterContinental Đà Nẵng",
        price: "3.800.000 VNĐ/đêm",
        rating: "4.9/5",
        image: "https://picsum.photos/100/100?random=22",
      },
      {
        name: "Hyatt Regency Đà Nẵng",
        price: "2.200.000 VNĐ/đêm",
        rating: "4.7/5",
        image: "https://picsum.photos/100/100?random=23",
      },
    ],
    "Phú Quốc": [
      {
        name: "JW Marriott Phu Quoc",
        price: "4.000.000 VNĐ/đêm",
        rating: "4.9/5",
        image: "https://picsum.photos/100/100?random=24",
      },
      {
        name: "Vinpearl Resort & Golf Phú Quốc",
        price: "2.800.000 VNĐ/đêm",
        rating: "4.6/5",
        image: "https://picsum.photos/100/100?random=25",
      },
      {
        name: "Sol by Meliá Phú Quốc",
        price: "1.900.000 VNĐ/đêm",
        rating: "4.5/5",
        image: "https://picsum.photos/100/100?random=26",
      },
    ],
    Sapa: [
      {
        name: "Topas Ecolodge Sapa",
        price: "2.300.000 VNĐ/đêm",
        rating: "4.8/5",
        image: "https://picsum.photos/100/100?random=27",
      },
      {
        name: "Silk Path Grand Resort & Spa Sapa",
        price: "2.600.000 VNĐ/đêm",
        rating: "4.7/5",
        image: "https://picsum.photos/100/100?random=28",
      },
      {
        name: "Sapa Horizon Hotel",
        price: "1.500.000 VNĐ/đêm",
        rating: "4.6/5",
        image: "https://picsum.photos/100/100?random=29",
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const openHotelModal = (location) => {
    setSelectedLocationHotels(hotelsData[location]);
    setIsHotelModalOpen(true);
  };

  const closeHotelModal = () => {
    setIsHotelModalOpen(false);
    setSelectedLocationHotels(null);
  };

  const goBackToLocationModal = () => {
    setIsHotelModalOpen(false);
    setIsModalOpen(true);
  };

  return (
    <Section id="services">
      <h2>Discover your Trip</h2>
      <Slider {...settings}>
        {data.map((service, index) => (
          <div key={index}>
            <ServiceCard
              color={service.color}
              onClick={() => openModal(service)}
            >
              <ServiceImage src={service.image} alt={service.title} />
              <h3>
                <IconWrapper>{service.icon}</IconWrapper>
                {service.title}
              </h3>
              <p>{service.subTitle}</p>
            </ServiceCard>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {selectedService?.modalContent}
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {isHotelModalOpen && (
        <ModalOverlay onClick={closeHotelModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>
              Hotel At{" "}
              {selectedLocationHotels &&
                Object.keys(hotelsData).find(
                  (key) => hotelsData[key] === selectedLocationHotels
                )}
            </ModalTitle>
            <LocationGrid>
              {selectedLocationHotels?.map((hotel, index) => (
                <LocationCard key={index}>
                  <LocationImage src={hotel.image} alt={hotel.name} />
                  <LocationInfo>
                    <LocationName>{hotel.name}</LocationName>
                    <LocationStats>
                      {hotel.price} - Point{hotel.rating}
                    </LocationStats>
                    <ExploreButton>Book Now</ExploreButton>
                  </LocationInfo>
                </LocationCard>
              ))}
            </LocationGrid>
            <BackButton onClick={goBackToLocationModal}>
              <FaArrowLeft /> Back
            </BackButton>
            <CloseButton onClick={closeHotelModal}>
              <FaTimes />
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f7fa;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #03045e;
    margin-bottom: 2rem;
  }

  .slick-slide {
    padding: 0 15px;
  }

  .slick-dots li button:before {
    color: #4361ee;
  }

  .slick-dots li.slick-active button:before {
    color: #023e8a;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2.5rem;
  background-color: aliceblue;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-left: 4px solid ${(props) => props.color};
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  height: 300px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: #e6f0fa;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  h3 {
    font-size: 1.6rem;
    color: #03045e;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    text-align: center;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: #4361ee;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  position: relative;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  font-size: 1.8rem;
  color: #03045e;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const LocationCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const LocationImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${LocationCard}:hover & {
    transform: scale(1.05);
  }
`;

const LocationInfo = styled.div`
  padding: 1rem;
`;

const LocationName = styled.h4`
  font-size: 1.2rem;
  color: #03045e;
  margin-bottom: 0.5rem;
`;

const LocationStats = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.8rem;
`;

const ExploreButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #023e8a;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  color: #4361ee;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1.2rem;
`;
