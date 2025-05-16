const services = [
  {
    title: "Get Best Prices",
    description:
      "Pay through our app and save thousands and get amazing rewards",
    icon: "priceIcon.png",
  },
  {
    title: "Covid Safe",
    description:
      "We have all the curated hotels that have all the precaution for a covid safe environment",
    icon: "covidIcon.png",
  },
  {
    title: "Flexible Payment",
    description:
      "Enjoy the flexible payment through our app and get rewards on every payment",
    icon: "paymentIcon.png",
  },
  {
    title: "Find The Best Near You",
    description:
      "Find the best hotels and places to visit near you in a single click",
    icon: "locationIcon.png",
  },
];

services.forEach(async (service) => {
  try {
    const response = await fetch("http://localhost:5000/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    });
    const result = await response.json();
    console.log("Added:", result);
  } catch (error) {
    console.error("Error adding service:", error);
  }
});
