const fetch = require("node-fetch");

const testimonials = [
  {
    author: "John Doe",
    content: "Amazing experience! The best travel website I've ever used.",
    rating: 5,
    image: "johnDoe.png", // Thay bằng tên file ảnh thực tế (nếu có)
  },
  {
    author: "Jane Smith",
    content: "Great service and easy booking process. Highly recommend!",
    rating: 4,
    image: "janeSmith.png",
  },
  {
    author: "Mike Johnson",
    content: "Found the best deals and had a fantastic trip!",
    rating: 5,
    image: "mikeJohnson.png",
  },
];

testimonials.forEach(async (testimonial) => {
  try {
    const response = await fetch("http://localhost:5000/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testimonial),
    });
    const result = await response.json();
    console.log("Added:", result);
  } catch (error) {
    console.error("Error adding testimonial:", error);
  }
});
