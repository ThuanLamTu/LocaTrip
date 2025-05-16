import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dữ liệu và hooks
import { domesticData } from "../data/destinations";
import { useItinerary } from "../hooks/useItinerary";

// Components
import HeaderBanner from "./HeaderBanner";

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = domesticData.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  // State để quản lý modal phóng to hình ảnh
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // State để quản lý modal đặt phòng
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    checkInDate: "",
  });
  const [bookingMessage, setBookingMessage] = useState("");
  // State để quản lý modal chi tiết khách sạn
  const [isHotelDetailsModalOpen, setIsHotelDetailsModalOpen] = useState(false);
  const [selectedHotelDetails, setSelectedHotelDetails] = useState(null);
  // State để quản lý modal đánh giá
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [hotelReviews, setHotelReviews] = useState([
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      text: "Amazing experience! The staff was super friendly and the rooms were luxurious.",
      date: "2025-04-20",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 4,
      text: "Great location and amenities, but the service could be improved.",
      date: "2025-04-18",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ]);
  const [newHotelReview, setNewHotelReview] = useState({
    rating: 0,
    text: "",
  });

  const {
    days,
    itinerary,
    newActivity,
    selectedDay,
    shareMessage,
    setNewActivity,
    setSelectedDay,
    handleDayChange,
    handleAddActivity,
    handleRemoveActivity,
    handleShareItinerary,
    handleExportToPDF,
  } = useItinerary(destination);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([
        ...reviews,
        {
          id: reviews.length + 1,
          text: newReview,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewReview("");
    }
  };

  // Hàm mở modal phóng to hình ảnh
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Hàm đóng modal phóng to hình ảnh
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Hàm mở modal đặt phòng
  const openBookingModal = (hotel) => {
    setSelectedHotel(hotel.name || hotel);
    setIsBookingModalOpen(true);
  };

  // Hàm đóng modal đặt phòng
  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedHotel(null);
    setBookingForm({
      fullName: "",
      email: "",
      phone: "",
      roomType: "",
      checkInDate: "",
    });
    setBookingMessage("");
  };

  // Hàm mở modal chi tiết khách sạn
  const openHotelDetailsModal = (hotel) => {
    setSelectedHotelDetails(hotel);
    setIsHotelDetailsModalOpen(true);
  };

  // Hàm đóng modal chi tiết khách sạn
  const closeHotelDetailsModal = () => {
    setIsHotelDetailsModalOpen(false);
    setSelectedHotelDetails(null);
  };

  // Hàm mở modal đánh giá
  const openReviewsModal = () => {
    setIsReviewsModalOpen(true);
  };

  // Hàm đóng modal đánh giá
  const closeReviewsModal = () => {
    setIsReviewsModalOpen(false);
    setNewHotelReview({ rating: 0, text: "" });
  };

  // Hàm xử lý thay đổi dữ liệu form đặt phòng
  const handleBookingFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hàm gửi dữ liệu đặt phòng đến backend
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      hotel: selectedHotel,
      fullName: bookingForm.fullName,
      email: bookingForm.email,
      phone: bookingForm.phone,
      roomType: bookingForm.roomType,
      checkInDate: bookingForm.checkInDate,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();
      if (response.ok) {
        setBookingMessage("Booking submitted successfully!");
        setTimeout(() => {
          closeBookingModal();
        }, 2000);
      } else {
        setBookingMessage(result.message || "Failed to submit booking.");
      }
    } catch (error) {
      setBookingMessage("Error submitting booking. Please try again.");
    }
  };

  // Hàm mở Google Maps
  const handleViewOnMap = (location) => {
    const encodedLocation = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(googleMapsUrl, "_blank");
  };

  // Hàm xử lý gửi đánh giá khách sạn
  const handleHotelReviewSubmit = (e) => {
    e.preventDefault();
    if (newHotelReview.text.trim() && newHotelReview.rating > 0) {
      setHotelReviews([
        ...hotelReviews,
        {
          id: hotelReviews.length + 1,
          user: "Anonymous User",
          rating: newHotelReview.rating,
          text: newHotelReview.text,
          date: new Date().toLocaleDateString(),
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
        },
      ]);
      setNewHotelReview({ rating: 0, text: "" });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const hotelCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Section isDarkMode={isDarkMode}>
      <button
        className="dark-mode-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      {destination ? (
        <motion.div
          className="destination-details"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeaderBanner
            image={destination.image}
            title={destination.title}
            subTitle={destination.subTitle}
          />

          <motion.div
            className="details-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {destination.gallery ? (
              <div className="carousel-container">
                <Slider {...settings}>
                  {destination.gallery.map((img, index) => (
                    <div key={index}>
                      <img
                        src={img}
                        alt={`${destination.title} ${index + 1}`}
                        onClick={() => openModal(img)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <motion.img
                src={destination.image}
                alt={destination.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
            )}

            <motion.div
              className="text-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p>{destination.subTitle}</p>
              <div className="quick-facts">
                <h3>Quick Facts</h3>
                <div className="fact-item">
                  <span className="icon">🌤️</span>
                  <p>{destination.weather}</p>
                </div>
                <div className="fact-item">
                  <span className="icon">📅</span>
                  <p>Best time: {destination.bestMonths}</p>
                </div>
                <div className="fact-item">
                  <span className="icon">💰</span>
                  <p>Cost: {destination.cost} VND</p>
                </div>
              </div>
              <div className="hotels">
                <h3>Recommended Hotels</h3>
                <ul>
                  {destination.hotels.map((hotel, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
                    >
                      <span>
                        {typeof hotel === "string" ? hotel : hotel.name}
                      </span>
                      <div className="hotel-actions">
                        {typeof hotel !== "string" && (
                          <button
                            className="details-btn"
                            onClick={() => openHotelDetailsModal(hotel)}
                          >
                            Details
                          </button>
                        )}
                        <button
                          className="book-now"
                          onClick={() => openBookingModal(hotel)}
                        >
                          Book Now
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <div className="itinerary-planner">
            <h3>Plan Your Trip to {destination.title}</h3>
            <div className="planner-form">
              <label>
                Number of Days:
                <select value={days} onChange={handleDayChange}>
                  {[...Array(7)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </label>
              <div className="activity-form">
                <label>
                  Add Activity for Day:
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                  >
                    {[...Array(days)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <input
                  type="text"
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  placeholder="Enter activity (e.g., Visit Ben Thanh Market)"
                />
                <button onClick={handleAddActivity}>Add Activity</button>
              </div>
            </div>
            <div className="itinerary-list">
              {itinerary.length > 0 ? (
                itinerary.map((dayActivities, dayIndex) => (
                  <div key={dayIndex} className="day-plan">
                    <h4>Day {dayIndex + 1}</h4>
                    {dayActivities.length > 0 ? (
                      <ul>
                        {dayActivities.map((activity, activityIndex) => (
                          <li key={activityIndex}>
                            {activity}
                            <button
                              className="remove-btn"
                              onClick={() =>
                                handleRemoveActivity(dayIndex, activityIndex)
                              }
                            >
                              ✕
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No activities planned for this day.</p>
                    )}
                  </div>
                ))
              ) : (
                <p>Start planning your trip by selecting the number of days!</p>
              )}
            </div>
            <div className="action-buttons">
              <button className="share-btn" onClick={handleShareItinerary}>
                Share Itinerary
              </button>
              <button className="export-btn" onClick={handleExportToPDF}>
                Export to PDF
              </button>
            </div>
            {shareMessage && <p className="share-message">{shareMessage}</p>}
          </div>

          <div className="reviews-section">
            <h3>Reviews</h3>
            <div className="review-form">
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write your review..."
                rows="4"
                required
              />
              <button onClick={handleReviewSubmit}>Submit Review</button>
            </div>
            <div className="reviews-list">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <p>{review.text}</p>
                    <span className="review-date">{review.date}</span>
                  </div>
                ))
              ) : (
                <p>No reviews yet. Be the first to leave a review!</p>
              )}
            </div>
          </div>

          <motion.button
            onClick={() => navigate(-1)}
            className="back-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Quay lại
          </motion.button>
        </motion.div>
      ) : (
        <p>Destination not found</p>
      )}

      {/* Modal phóng to hình ảnh */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={selectedImage} alt="Zoomed Image" />
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal đặt phòng */}
      {isBookingModalOpen && (
        <ModalOverlay onClick={closeBookingModal}>
          <BookingModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeBookingModal}>×</CloseButton>
            <h3>Book Your Stay at {selectedHotel}</h3>
            <BookingForm onSubmit={handleBookingSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={bookingForm.fullName}
                  onChange={handleBookingFormChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleBookingFormChange}
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleBookingFormChange}
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                Room Type:
                <select
                  name="roomType"
                  value={bookingForm.roomType}
                  onChange={handleBookingFormChange}
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Suite">Suite</option>
                </select>
              </label>
              <label>
                Check-In Date:
                <input
                  type="date"
                  name="checkInDate"
                  value={bookingForm.checkInDate}
                  onChange={handleBookingFormChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </label>
              <button type="submit">Submit Booking</button>
              {bookingMessage && (
                <p className="booking-message">{bookingMessage}</p>
              )}
            </BookingForm>
          </BookingModalContent>
        </ModalOverlay>
      )}

      {/* Modal chi tiết khách sạn */}
      {isHotelDetailsModalOpen && selectedHotelDetails && (
        <ModalOverlay onClick={closeHotelDetailsModal}>
          <HotelDetailsModalContent
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CloseButton onClick={closeHotelDetailsModal}>×</CloseButton>
            <h3>{selectedHotelDetails.name}</h3>
            {selectedHotelDetails.images &&
            selectedHotelDetails.images.length > 0 ? (
              <motion.div
                className="hotel-carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Slider {...hotelCarouselSettings}>
                  {selectedHotelDetails.images.map((img, index) => (
                    <div key={index}>
                      <HotelImage
                        src={img}
                        alt={`${selectedHotelDetails.name} ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </motion.div>
            ) : (
              <p>No images available</p>
            )}
            <motion.div
              className="hotel-info"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p>
                <strong>Price:</strong> {selectedHotelDetails.price}
              </p>
              <p>
                <strong>Description:</strong> {selectedHotelDetails.description}
              </p>
              {selectedHotelDetails.amenities && (
                <div className="amenities">
                  <h4>Amenities:</h4>
                  <ul>
                    {selectedHotelDetails.amenities.map((amenity, index) => (
                      <li key={index}>
                        <span className="amenity-icon">✨</span> {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedHotelDetails.location && (
                <p>
                  <strong>Location:</strong> {selectedHotelDetails.location}
                </p>
              )}
            </motion.div>
            <motion.div
              className="hotel-actions"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {selectedHotelDetails.location && (
                <button
                  className="map-btn"
                  onClick={() => handleViewOnMap(selectedHotelDetails.location)}
                >
                  View on Map
                </button>
              )}
              <button className="reviews-btn" onClick={openReviewsModal}>
                Read Reviews
              </button>
            </motion.div>
          </HotelDetailsModalContent>
        </ModalOverlay>
      )}

      {/* Modal đánh giá khách sạn */}
      {isReviewsModalOpen && selectedHotelDetails && (
        <ModalOverlay onClick={closeReviewsModal}>
          <ReviewsModalContent
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CloseButton onClick={closeReviewsModal}>×</CloseButton>
            <h3>Reviews for {selectedHotelDetails.name}</h3>
            <div className="reviews-list">
              {hotelReviews.length > 0 ? (
                hotelReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    className="review-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <div className="review-header">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="avatar"
                      />
                      <div>
                        <h4>{review.user}</h4>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={i < review.rating ? "filled" : ""}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p>{review.text}</p>
                    <span className="review-date">{review.date}</span>
                  </motion.div>
                ))
              ) : (
                <p>No reviews yet. Be the first to leave a review!</p>
              )}
            </div>
            <div className="review-form">
              <h4>Leave a Review</h4>
              <div className="rating-input">
                <label>Rating:</label>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      onClick={() =>
                        setNewHotelReview({ ...newHotelReview, rating: i + 1 })
                      }
                      className={i < newHotelReview.rating ? "filled" : ""}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <textarea
                value={newHotelReview.text}
                onChange={(e) =>
                  setNewHotelReview({ ...newHotelReview, text: e.target.value })
                }
                placeholder="Write your review..."
                rows="4"
                required
              />
              <button onClick={handleHotelReviewSubmit}>Submit Review</button>
            </div>
          </ReviewsModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(135deg, #1c2526 0%, #2c3e50 100%)"
      : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};

  .dark-mode-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background: ${(props) => (props.isDarkMode ? "#4caf50" : "#333")};
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    z-index: 1000;
    transition: background 0.3s ease;

    &:hover {
      background: ${(props) => (props.isDarkMode ? "#45a049" : "#555")};
    }
  }

  .destination-details {
    background: ${(props) => (props.isDarkMode ? "#2c3e50" : "#ffffff")};
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }
  }

  .details-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;

    .carousel-container {
      max-width: 400px;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 15px;
      }

      .slick-dots li button:before {
        color: #4caf50;
      }

      .slick-arrow {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        z-index: 1;

        &:hover {
          background: rgba(0, 0, 0, 0.7);
        }
      }

      .slick-prev {
        left: 10px;
      }

      .slick-next {
        right: 10px;
      }
    }

    img {
      max-width: 400px;
      height: 250px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .text-content {
      flex: 1;
      text-align: left;
      font-size: 1.1rem;
      color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};

      p {
        line-height: 1.6;
        color: ${(props) => (props.isDarkMode ? "#b0b0b0" : "#666")};
      }

      .quick-facts,
      .hotels {
        margin-top: 1.5rem;
        background: ${(props) => (props.isDarkMode ? "#34495e" : "#f9f9f9")};
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }

      .quick-facts {
        h3 {
          font-size: 1.5rem;
          color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2c3e50")};
          margin-bottom: 1rem;
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
        }

        .fact-item {
          display: flex;
          align-items: center;
          margin: 0.75rem 0;

          .icon {
            font-size: 1.5rem;
            margin-right: 1rem;
          }

          p {
            margin: 0;
            font-size: 1rem;
            color: ${(props) => (props.isDarkMode ? "#b0b0b0" : "#666")};
          }
        }
      }

      .hotels {
        h3 {
          font-size: 1.5rem;
          color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2c3e50")};
          margin-bottom: 1rem;
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
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1rem 0;
          padding: 0.5rem 0;
          font-weight: 500;
          color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#34495e")};
          position: relative;
          padding-left: 20px;

          &:before {
            content: "✔";
            color: #4caf50;
            position: absolute;
            left: 0;
          }

          .hotel-actions {
            display: flex;
            gap: 0.5rem;
          }

          .details-btn {
            padding: 5px 15px;
            background: #2196f3;
            color: white;
            border: none;
            border-radius: 15px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background 0.3s ease;

            &:hover {
              background: #1e88e5;
            }
          }

          .book-now {
            padding: 5px 15px;
            background: #ff6f61;
            color: white;
            border: none;
            border-radius: 15px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background 0.3s ease;

            &:hover {
              background: #e65b50;
            }
          }
        }
      }
    }
  }

  .itinerary-planner {
    margin-top: 2rem;
    background: ${(props) => (props.isDarkMode ? "#34495e" : "#f9f9f9")};
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 1.5rem;
      color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2c3e50")};
      margin-bottom: 1rem;
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
    }

    .planner-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.5rem;

      label {
        font-size: 1.1rem;
        color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};
        display: flex;
        align-items: center;
        gap: 0.5rem;

        select {
          padding: 5px;
          border-radius: 5px;
          border: 1px solid ${(props) => (props.isDarkMode ? "#555" : "#ddd")};
          background: ${(props) => (props.isDarkMode ? "#444" : "#fff")};
          color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};
        }
      }

      .activity-form {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        input {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid ${(props) => (props.isDarkMode ? "#555" : "#ddd")};
          background: ${(props) => (props.isDarkMode ? "#444" : "#fff")};
          color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};
          font-size: 1rem;

          &:focus {
            outline: none;
            border-color: #4caf50;
          }
        }

        button {
          padding: 10px 20px;
          background: #4caf50;
          color: white;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;

          &:hover {
            background: #45a049;
          }
        }
      }
    }

    .itinerary-list {
      p {
        color: ${(props) => (props.isDarkMode ? "#b0b0b0" : "#666")};
      }

      .day-plan {
        background: ${(props) => (props.isDarkMode ? "#3a506b" : "#f0f0f0")};
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;

        h4 {
          font-size: 1.2rem;
          color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2c3e50")};
          margin-bottom: 0.5rem;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          font-size: 1rem;
          color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};

          .remove-btn {
            background: #ff6f61;
            color: white;
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background 0.3s ease;

            &:hover {
              background: #e65b50;
            }
          }
        }

        p {
          margin: 0;
          font-style: italic;
        }
      }
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .share-btn {
      padding: 10px 20px;
      background: #2196f3;
      color: white;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;

      &:hover {
        background: #1e88e5;
      }
    }

    .export-btn {
      padding: 10px 20px;
      background: #f06292;
      color: white;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;

      &:hover {
        background: #ec407a;
      }
    }

    .share-message {
      margin-top: 1rem;
      font-size: 1rem;
      color: ${(props) => (props.isDarkMode ? "#4caf50" : "#388e3c")};
    }
  }

  .reviews-section {
    margin-top: 2rem;
    background: ${(props) => (props.isDarkMode ? "#34495e" : "#f9f9f9")};
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 1.5rem;
      color: ${(props) => (props.isDarkMode ? "#ffffff" : "#2c3e50")};
      margin-bottom: 1rem;
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
    }

    .review-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.5rem;

      textarea {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid ${(props) => (props.isDarkMode ? "#555" : "#ddd")};
        background: ${(props) => (props.isDarkMode ? "#444" : "#fff")};
        color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};
        font-size: 1rem;
        resize: none;

        &:focus {
          outline: none;
          border-color: #4caf50;
        }
      }

      button {
        padding: 10px 20px;
        background: #4caf50;
        color: white;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.3s ease;

        &:hover {
          background: #45a049;
        }
      }
    }

    .reviews-list {
      p {
        color: ${(props) => (props.isDarkMode ? "#b0b0b0" : "#666")};
      }

      .review-item {
        background: ${(props) => (props.isDarkMode ? "#3a506b" : "#f0f0f0")};
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;

        p {
          margin: 0;
          font-size: 1rem;
          color: ${(props) => (props.isDarkMode ? "#e0e0e0" : "#333")};
        }

        .review-date {
          display: block;
          font-size: 0.9rem;
          color: ${(props) => (props.isDarkMode ? "#b0b0b0" : "#666")};
          margin-top: 0.5rem;
        }
      }
    }
  }

  .back-button {
    margin-top: 2rem;
    padding: 12px 30px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: #45a049;
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;

    .details-content {
      flex-direction: column;
      align-items: center;

      .carousel-container,
      img {
        max-width: 100%;
      }

      .text-content {
        text-align: center;

        .quick-facts h3:after,
        .hotels h3:after,
        .itinerary-planner h3:after,
        .reviews-section h3:after {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .action-buttons {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

// Styles cho Modal phóng to hình ảnh
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  background: #ff6f61;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: #e65b50;
  }

  @media screen and (max-width: 768px) {
    top: -30px;
    right: -30px;
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
  }
`;

// Styles cho Modal đặt phòng
const BookingModalContent = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #2c3e50;
  }
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1rem;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input,
  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #4caf50;
    }
  }

  button {
    padding: 10px 20px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
    margin-top: 1rem;

    &:hover {
      background: #45a049;
    }
  }

  .booking-message {
    margin-top: 1rem;
    text-align: center;
    color: ${(props) => (props.error ? "#ff6f61" : "#4caf50")};
  }
`;

// Styles cho Modal chi tiết khách sạn
const HotelDetailsModalContent = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 700;
    position: relative;
    &:after {
      content: "";
      width: 60px;
      height: 3px;
      background: #ff6f61;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .hotel-carousel {
    margin-bottom: 1.5rem;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    .slick-dots li button:before {
      color: #ff6f61;
    }

    .slick-arrow {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      z-index: 1;

      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }

    .slick-prev {
      left: 10px;
    }

    .slick-next {
      right: 10px;
    }
  }

  .hotel-info {
    p {
      font-size: 1rem;
      color: #333;
      margin: 0.5rem 0;
      line-height: 1.6;

      strong {
        color: #2c3e50;
      }
    }

    .amenities {
      margin: 1rem 0;
      h4 {
        font-size: 1.2rem;
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
      }

      li {
        background: #ff6f61;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .amenity-icon {
        font-size: 1rem;
      }
    }
  }

  .hotel-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;

    .map-btn {
      padding: 10px 20px;
      background: #2196f3;
      color: white;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;

      &:hover {
        background: #1e88e5;
      }
    }

    .reviews-btn {
      padding: 10px 20px;
      background: #f06292;
      color: white;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;

      &:hover {
        background: #ec407a;
      }
    }
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
`;

// Styles cho Modal đánh giá khách sạn
const ReviewsModalContent = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    font-weight: 700;
    position: relative;
    &:after {
      content: "";
      width: 60px;
      height: 3px;
      background: #f06292;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .reviews-list {
    margin-bottom: 2rem;
    p {
      color: #666;
      font-style: italic;
    }

    .review-item {
      background: #f9f9f9;
      padding: 1rem;
      border-radius: 15px;
      margin-bottom: 1rem;
      text-align: left;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

      .review-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        h4 {
          font-size: 1.1rem;
          margin: 0;
          color: #2c3e50;
        }

        .rating {
          span {
            font-size: 1.2rem;
            color: #ccc;
            &.filled {
              color: #f06292;
            }
          }
        }
      }

      p {
        font-size: 1rem;
        color: #333;
        margin: 0.5rem 0;
      }

      .review-date {
        display: block;
        font-size: 0.9rem;
        color: #666;
      }
    }
  }

  .review-form {
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 15px;
    h4 {
      font-size: 1.2rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .rating-input {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;

      label {
        font-size: 1rem;
        color: #333;
      }

      span {
        font-size: 1.5rem;
        color: #ccc;
        cursor: pointer;
        &.filled {
          color: #f06292;
        }
        &:hover {
          color: #ec407a;
        }
      }
    }

    textarea {
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #ddd;
      font-size: 1rem;
      resize: none;
      margin-bottom: 1rem;

      &:focus {
        outline: none;
        border-color: #f06292;
      }
    }

    button {
      padding: 10px 20px;
      background: #f06292;
      color: white;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;

      &:hover {
        background: #ec407a;
      }
    }
  }
`;

export default DestinationDetails;
