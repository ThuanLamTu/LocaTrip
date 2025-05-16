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
import SaigonImg1 from "../assets/saigon1.jpg";
import SaigonImg2 from "../assets/saigon2.jpg";
import SaigonImg3 from "../assets/saigon3.jpg";
import HanoiImg1 from "../assets/hanoi1.jpg";
import HanoiImg2 from "../assets/hanoi2.jpg";
import HanoiImg3 from "../assets/hanoi3.jpg";
import HueImg1 from "../assets/hue1.jpg";
import HueImg2 from "../assets/hue2.jpg";
import HueImg3 from "../assets/hue3.png";
import DanangImg1 from "../assets/danang1.png";
import DanangImg2 from "../assets/danang2.jpg";
import DanangImg3 from "../assets/danang3.jpg";
import SingaporeImg1 from "../assets/singapore1.jpg";
import SingaporeImg2 from "../assets/singapore2.jpg";
import SingaporeImg3 from "../assets/singapore3.jpg";
import SingaporeImg4 from "../assets/singapore4.jpg";
import NinhthuanImg from "../assets/ninhthuan.jpg";
import NinhthuanImg1 from "../assets/ninhthuan1.jpg";
import NinhthuanImg2 from "../assets/ninhthuan2.jpg";
import NinhthuanImg3 from "../assets/ninhthuan3.jpg";
import NinhthuanImg4 from "../assets/ninhthuan4.jpg";

// Giả định hình ảnh cho khách sạn ở Sài Gòn
import ReverieSaigonImg from "../assets/ReverieSaigon.jpg";
import ReverieSaigonImg2 from "../assets/reverie-saigon2.jpg";
import ReverieSaigonImg3 from "../assets/reverie-saigon3.jpg";
import ParkHyattSaigonImg from "../assets/park-hyatt-saigon.jpg";
import ParkHyattSaigonImg2 from "../assets/park-hyatt-saigon2.jpg";
import ParkHyattSaigonImg3 from "../assets/park-hyatt-saigon3.jpg";
import SheratonSaigonImg from "../assets/sheraton-saigon.jpg";
import SheratonSaigonImg2 from "../assets/shreaton-saigon2.jpg";
import SheratonSaigonImg3 from "../assets/sheraton-saigon3.jpg";
import OperahnImg from "../assets/operahn.jpg";
import OperahnImg2 from "../assets/operahn2.jpg";
import OperahnImg3 from "../assets/operahn3.jpg";
import SiestaImg from "../assets/siestahn.jpg";
import SiestaImg2 from "../assets/siestahn2.jpg";
import SiestaImg3 from "../assets/siestahn3.jpg";
import SiestaImg4 from "../assets/siestahn4.jpg";
import SofitelImng from "../assets/sofitelhn.jpg";
import SofitelImng2 from "../assets/sofitelhn2.jpg";
import SofitelImng3 from "../assets/sofitelhn3.jpg";
import SofitelImng4 from "../assets/sofitelhn4.jpg";
import MandaraImg from "../assets/mandara.jpg";
import MandaraImg2 from "../assets/mandara2.jpg";
import MandaraImg3 from "../assets/mandara3.jpg";
import MandaraImg4 from "../assets/mandara4.jpg";
import Pilgrimage from "../assets/pilgrimage.jpg";
import Pilgrimage2 from "../assets/pilgrimage2.jpg";
import Pilgrimage3 from "../assets/pilgrimage3.jpg";
import Pilgrimage4 from "../assets/pilgrimage4.jpg";
import Imperial from "../assets/imperial.jpg";
import Imperial2 from "../assets/imperial2.jpg";
import Imperial3 from "../assets/imperial3.jpg";
import Imperial4 from "../assets/imperial4.jpg";
import Peninsula from "../assets/peninsula.jpg";
import Peninsula2 from "../assets/peninsula2.jpg";
import Peninsula3 from "../assets/peninsula3.png";
import Peninsula4 from "../assets/peninsula4.jpg";
import Fusion from "../assets/fusion.jpg";
import Fusion2 from "../assets/fusion2.jpg";
import Fusion3 from "../assets/fusion3.jpg";
import Fusion4 from "../assets/fusion4.jpg";
import Fusion5 from "../assets/fusion5.jpg";
import Novotel from "../assets/novotel.jpg";
import Novotel2 from "../assets/novotel2.jpg";
import Novotel3 from "../assets/novotel3.jpeg";
import Novotel4 from "../assets/novotel4.jpg";
import Novotel5 from "../assets/novotel5.webp";
import TTC from "../assets/TTC.png";
import TTC1 from "../assets/TTC1.jpg";
import TTC2 from "../assets/TTC2.jpg";
import TTC3 from "../assets/TTC3.jpg";
import TTC4 from "../assets/TTC4.jpg";
import Amanoi from "../assets/amanoi.webp";
import Amanoi2 from "../assets/amanoi2.jpg";
import Amanoi3 from "../assets/amanoi3.jpeg";
import Amanoi4 from "../assets/amanoi4.jpg";
import Amanoi1 from "../assets/amanoi1.jpg";
import Hoanmy from "../assets/hoanmy.jpg";
import Hoanmy1 from "../assets/hoanmy1.jpg";
import Hoanmy2 from "../assets/hoanmy2.jpg";
import Hoanmy3 from "../assets/hoanmy3.jpg";
import Hoanmy4 from "../assets/hoanmy4.jpg";

export const domesticData = [
  {
    id: 1,
    image: HanoiImage,
    title: "Hà Nội",
    subTitle:
      "Hà Nội, the capital of Vietnam, known for its rich history and culture.",
    cost: "20,000,000",
    duration: "Approx 2 night trip",
    weather: "Thời tiết đẹp từ tháng 9 đến tháng 11",
    bestMonths: "Tháng 9 đến tháng 11",
    hotels: [
      {
        name: "Hotel De L'Opera Hanoi",
        images: [OperahnImg, OperahnImg2, OperahnImg3], // Bạn có thể thêm hình ảnh nếu có
        price: "4,500,000 VND/night",
        description:
          "Hotel De L'Opera Hanoi offers a blend of colonial charm and modern luxury in the heart of Hanoi.",
        amenities: ["Swimming Pool", "Spa", "Restaurant", "Gym"],
        location: "29 Trang Tien Street, Hoan Kiem District, Hanoi",
      },
      {
        name: "Hanoi La Siesta Hotel",
        images: [SiestaImg, SiestaImg2, SiestaImg3, SiestaImg4], // Bạn có thể thêm hình ảnh nếu có
        price: "3,200,000 VND/night",
        description:
          "Hanoi La Siesta Hotel provides a cozy and elegant stay with exceptional service in the Old Quarter.",
        amenities: ["Restaurant", "Spa", "Gym", "Free Wi-Fi"],
        location: "94 Ma May Street, Hoan Kiem District, Hanoi",
      },
      {
        name: "Sofitel Legend Metropole Hanoi",
        images: [SofitelImng, SofitelImng2, SofitelImng3, SofitelImng4], // Bạn có thể thêm hình ảnh nếu có
        price: "6,800,000 VND/night",
        description:
          "Sofitel Legend Metropole Hanoi is a historic luxury hotel offering a timeless experience in Hanoi.",
        amenities: ["Swimming Pool", "Spa", "Fine Dining", "Gym"],
        location: "15 Ngo Quyen Street, Hoan Kiem District, Hanoi",
      },
    ],
    gallery: [HanoiImg1, HanoiImg2, HanoiImg3],
  },
  {
    id: 2,
    image: SaigonImage,
    title: "Sài Gòn",
    subTitle:
      "Sài Gòn, Vietnam's largest city, a vibrant and dynamic metropolis.",
    cost: "25,000,000",
    duration: "Approx 2 night trip",
    weather: "Thời tiết đẹp từ tháng 12 đến tháng 4",
    bestMonths: "Tháng 12 đến tháng 4",
    hotels: [
      {
        name: "The Reverie Saigon",
        images: [ReverieSaigonImg, ReverieSaigonImg2, ReverieSaigonImg3],
        price: "8,500,000 VND/night",
        description:
          "The Reverie Saigon offers luxurious accommodations with stunning views of the city skyline, featuring opulent interiors and world-class amenities.",
        amenities: ["Swimming Pool", "Spa", "Fine Dining", "Gym"],
        location: "22-36 Nguyen Hue Boulevard, District 1, Ho Chi Minh City",
      },
      {
        name: "Park Hyatt Saigon",
        images: [ParkHyattSaigonImg, ParkHyattSaigonImg2, ParkHyattSaigonImg3],
        price: "7,000,000 VND/night",
        description:
          "Park Hyatt Saigon is a 5-star hotel in the heart of Ho Chi Minh City, known for its elegant design and exceptional service.",
        amenities: ["Swimming Pool", "Spa", "Bar", "Gym"],
        location: "2 Lam Son Square, District 1, Ho Chi Minh City",
      },
      {
        name: "Sheraton Saigon Hotel",
        images: [SheratonSaigonImg, SheratonSaigonImg2, SheratonSaigonImg3],
        price: "5,500,000 VND/night",
        description:
          "Sheraton Saigon Hotel provides a blend of modern comfort and Vietnamese hospitality, located near major attractions.",
        amenities: ["Swimming Pool", "Restaurant", "Gym", "Casino"],
        location: "88 Dong Khoi Street, District 1, Ho Chi Minh City",
      },
    ],
    gallery: [SaigonImg1, SaigonImg2, SaigonImg3],
  },
  {
    id: 3,
    image: HueImage,
    title: "Huế",
    subTitle: "Huế, a historic city in Vietnam, known for its ancient citadel.",
    cost: "18,500,000",
    duration: "Approx 1 night trip",
    weather: "Thời tiết đẹp từ tháng 5 đến tháng 10",
    bestMonths: "Tháng 5 đến tháng 10",
    hotels: [
      {
        name: "Ana Mandara Hue Beach Resort",
        images: [MandaraImg, MandaraImg2, MandaraImg3, MandaraImg4], // Bạn có thể thêm hình ảnh nếu có
        price: "3,800,000 VND/night",
        description:
          "Ana Mandara Hue Beach Resort offers a serene beachfront escape with luxurious accommodations.",
        amenities: ["Beach Access", "Swimming Pool", "Spa", "Restaurant"],
        location: "Thuan An Beach, Phu Vang District, Hue",
      },
      {
        name: "Pilgrimage Village Boutique Resort & Spa",
        images: [Pilgrimage, Pilgrimage2, Pilgrimage3, Pilgrimage4], // Bạn có thể thêm hình ảnh nếu có
        price: "2,500,000 VND/night",
        description:
          "Pilgrimage Village Boutique Resort & Spa provides a tranquil retreat with a focus on wellness.",
        amenities: ["Spa", "Swimming Pool", "Restaurant", "Yoga Classes"],
        location: "130 Minh Mang Road, Hue",
      },
      {
        name: "Imperial Hotel Hue",
        images: [Imperial, Imperial2, Imperial3, Imperial4], // Bạn có thể thêm hình ảnh nếu có
        price: "2,800,000 VND/night",
        description:
          "Imperial Hotel Hue offers elegant rooms and stunning views of the Perfume River.",
        amenities: ["Swimming Pool", "Restaurant", "Gym", "Bar"],
        location: "8 Hung Vuong Boulevard, Hue",
      },
    ],
    gallery: [HueImg1, HueImg2, HueImg3],
  },
  {
    id: 4,
    image: DanangImage,
    title: "Đà Nẵng",
    subTitle:
      "Đà Nẵng, a coastal city in Vietnam, famous for its beaches and mountains.",
    cost: "20,000,000",
    duration: "Approx 3 night trip",
    weather: "Thời tiết đẹp từ tháng 3 đến tháng 8",
    bestMonths: "Tháng 3 đến tháng 8",
    hotels: [
      {
        name: "InterContinental Danang Sun Peninsula Resort",
        images: [Peninsula, Peninsula2, Peninsula3, Peninsula4], // Bạn có thể thêm hình ảnh nếu có
        price: "9,000,000 VND/night",
        description:
          "InterContinental Danang Sun Peninsula Resort is a luxurious retreat nestled in a lush hillside.",
        amenities: ["Private Beach", "Swimming Pool", "Spa", "Fine Dining"],
        location: "Son Tra Peninsula, Danang",
      },
      {
        name: "Fusion Maia Danang",
        images: [Fusion, Fusion2, Fusion3, Fusion4, Fusion5], // Bạn có thể thêm hình ảnh nếu có
        price: "6,500,000 VND/night",
        description:
          "Fusion Maia Danang offers an all-inclusive spa experience with modern villas.",
        amenities: ["Spa", "Swimming Pool", "Beach Access", "Restaurant"],
        location: "My Khe Beach, Danang",
      },
      {
        name: "Novotel Danang Premier Han River",
        images: [Novotel, Novotel2, Novotel3, Novotel4, Novotel5], // Bạn có thể thêm hình ảnh nếu có
        price: "3,500,000 VND/night",
        description:
          "Novotel Danang Premier Han River provides modern comfort with panoramic river views.",
        amenities: ["Swimming Pool", "Gym", "Restaurant", "Bar"],
        location: "36 Bach Dang Street, Danang",
      },
    ],
    gallery: [DanangImg1, DanangImg2, DanangImg3],
  },
  {
    id: 5,
    image: NinhthuanImg,
    title: "Ninh Thuận",
    subTitle: "Ninh Thuận, a beautiful coastal destination in Vietnam.",
    cost: "15,000,000",
    duration: "Approx 3 night trip",
    weather: "Thời tiết đẹp từ tháng 6 đến tháng 2",
    bestMonths: "Tháng 7 đến tháng 5",
    hotels: [
      {
        name: "TTC Resort Premium",
        images: [TTC, TTC1, TTC2, TTC3, TTC4], // Bạn có thể thêm hình ảnh nếu có
        price: "1,800,000 VND/night",
        description:
          "TTC Resort Premium offers a cozy stay with easy access to Ninh Chu Beach.",
        amenities: ["Beach Access", "Restaurant", "Free Wi-Fi", "Parking"],
        location: "Ninh Chu Beach, Ninh Thuan",
      },
      {
        name: "Amanoi Resort",
        images: [Amanoi, Amanoi1, Amanoi2, Amanoi3, Amanoi4], // Bạn có thể thêm hình ảnh nếu có
        price: "11,500,000 VND/night",
        description:
          "Amanoi provides a relaxing stay with a focus on local culture and nature.",
        amenities: ["Garden", "Restaurant", "Free Wi-Fi", "Bicycle Rental"],
        location: "Vinh Hy Bay, Ninh Thuan",
      },
      {
        name: "Hoàn Mỹ Resort",
        images: [Hoanmy, Hoanmy1, Hoanmy2, Hoanmy3, Hoanmy4], // Bạn có thể thêm hình ảnh nếu có
        price: "2,000,000 VND/night",
        description:
          " Hoàn Mỹ Resort offers a beachfront experience with modern amenities.",
        amenities: ["Beach Access", "Swimming Pool", "Restaurant", "Spa"],
        location: "Yen Ninh, Phan Rang Thap Cham, Ninh Thuan",
      },
    ],
    gallery: [NinhthuanImg1, NinhthuanImg2, NinhthuanImg3, NinhthuanImg4],
  },
  {
    id: 6,
    image: Destination1,
    title: "Singapore",
    subTitle: "Singapore, officially the Republic of Singapore, is a",
    cost: "38,000,000 VND",
    duration: "Approx 2 night trip",
    weather: "Thời tiết đẹp quanh năm",
    bestMonths: "Tháng 2 đến tháng 4",
    hotels: [
      {
        name: "Marina Bay Sands",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "SGD 600/night",
        description:
          "Marina Bay Sands is an iconic luxury hotel with an infinity pool overlooking the city skyline.",
        amenities: ["Infinity Pool", "Casino", "Fine Dining", "Shopping Mall"],
        location: "10 Bayfront Avenue, Singapore",
      },
      {
        name: "Raffles Hotel",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "SGD 800/night",
        description:
          "Raffles Hotel is a historic colonial-style hotel known for its elegance and heritage.",
        amenities: ["Spa", "Fine Dining", "Bar", "Gardens"],
        location: "1 Beach Road, Singapore",
      },
      {
        name: "The Fullerton Hotel Singapore",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "SGD 450/night",
        description:
          "The Fullerton Hotel Singapore offers a blend of heritage and modern luxury in the heart of the city.",
        amenities: ["Swimming Pool", "Gym", "Restaurant", "Spa"],
        location: "1 Fullerton Square, Singapore",
      },
    ],
    gallery: [SingaporeImg1, SingaporeImg2, SingaporeImg3, SingaporeImg4],
  },
  {
    id: 7,
    image: Destination2,
    title: "Thailand",
    subTitle: "Thailand is a Southeast Asia country. It's known for",
    cost: "24,200,000 VND",
    duration: "Approx 2 night trip",
    weather: "Thời tiết đẹp từ tháng 11 đến tháng 2",
    bestMonths: "Tháng 11 đến tháng 2",
    hotels: [
      {
        name: "Anantara Riverside Bangkok Resort",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "THB 5,000/night",
        description:
          "Anantara Riverside Bangkok Resort offers a serene escape along the Chao Phraya River.",
        amenities: ["Riverside Pool", "Spa", "Fine Dining", "Boat Shuttle"],
        location: "257/1-3 Charoennakorn Road, Bangkok",
      },
      {
        name: "Mandarin Oriental Bangkok",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "THB 12,000/night",
        description:
          "Mandarin Oriental Bangkok is a legendary luxury hotel with a rich history and exceptional service.",
        amenities: ["Spa", "Riverside Dining", "Swimming Pool", "Gym"],
        location: "48 Oriental Avenue, Bangkok",
      },
      {
        name: "The Siam Hotel",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "THB 15,000/night",
        description:
          "The Siam Hotel is a boutique luxury hotel with an Art Deco design and private pool villas.",
        amenities: ["Private Pool Villas", "Spa", "Fine Dining", "Gym"],
        location: "3/2 Thanon Khao, Vachirapayabal, Dusit, Bangkok",
      },
    ],
  },
  {
    id: 8,
    image: Destination3,
    title: "Paris",
    subTitle: "Paris, France's capital, is a major European city and a",
    cost: "25,500,000 VND",
    duration: "Approx 2 night trip",
    weather: "Thời tiết đẹp từ tháng 4 đến tháng 6 và tháng 9 đến tháng 10",
    bestMonths: "Tháng 4 đến tháng 6 và tháng 9 đến tháng 10",
    hotels: [
      {
        name: "The Ritz Paris",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "EUR 1,200/night",
        description:
          "The Ritz Paris is a legendary hotel known for its opulence and historic charm.",
        amenities: ["Spa", "Fine Dining", "Indoor Pool", "Gardens"],
        location: "15 Place Vendôme, 75001 Paris",
      },
      {
        name: "Le Meurice",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "EUR 1,000/night",
        description:
          "Le Meurice offers a regal experience with stunning views of the Tuileries Garden.",
        amenities: ["Spa", "Fine Dining", "Bar", "Fitness Center"],
        location: "228 Rue de Rivoli, 75001 Paris",
      },
      {
        name: "Shangri-La Hotel Paris",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "EUR 900/night",
        description:
          "Shangri-La Hotel Paris provides luxury accommodations with Eiffel Tower views.",
        amenities: ["Indoor Pool", "Spa", "Fine Dining", "Gardens"],
        location: "10 Avenue d'Iéna, 75116 Paris",
      },
    ],
  },
  {
    id: 9,
    image: Destination4,
    title: "New Zealand",
    subTitle: "New Zealand is an island country in the",
    cost: "24,100",
    duration: "Approx 1 night trip",
    weather: "Thời tiết đẹp từ tháng 12 đến tháng 2",
    bestMonths: "Tháng 12 đến tháng 2",
    hotels: [
      {
        name: "Eagle's Nest",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "NZD 2,500/night",
        description:
          "Eagle's Nest offers luxury villas with stunning views of the Bay of Islands.",
        amenities: ["Private Pool", "Spa", "Fine Dining", "Helicopter Pad"],
        location: "60 Tapeka Road, Russell, Bay of Islands",
      },
      {
        name: "The Lodge at Kauri Cliffs",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "NZD 1,800/night",
        description:
          "The Lodge at Kauri cliffs is a luxury retreat with a world-class golf course.",
        amenities: ["Golf Course", "Spa", "Fine Dining", "Beach Access"],
        location: "139 Tepene Tablelands Road, Matauri Bay",
      },
      {
        name: "Matakauri Lodge",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "NZD 2,000/night",
        description:
          "Matakauri Lodge offers a scenic lakeside stay with views of the Southern Alps.",
        amenities: ["Spa", "Fine Dining", "Lake Views", "Gym"],
        location: "569 Glenorchy Road, Queenstown",
      },
    ],
  },
  {
    id: 10,
    image: Destination5,
    title: "Bora Bora",
    subTitle: "Bora Bora is a small South Pacific island northwest of",
    cost: "95,400",
    duration: "Approx 2 night 2 day trip",
    weather: "Thời tiết đẹp quanh năm",
    bestMonths: "Tháng 5 đến tháng 10",
    hotels: [
      {
        name: "Four Seasons Resort Bora Bora",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "USD 1,200/night",
        description:
          "Four Seasons Resort Bora Bora offers overwater bungalows with stunning lagoon views.",
        amenities: ["Overwater Bungalows", "Spa", "Snorkeling", "Fine Dining"],
        location: "Motu Tehotu, Bora Bora",
      },
      {
        name: "The St. Regis Bora Bora Resort",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "USD 1,500/night",
        description:
          "The St. Regis Bora Bora Resort provides luxury accommodations with private beach access.",
        amenities: ["Private Beach", "Spa", "Swimming Pool", "Water Sports"],
        location: "Motu Ome'e, Bora Bora",
      },
      {
        name: "InterContinental Bora Bora Resort & Thalasso Spa",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "USD 1,300/night",
        description:
          "InterContinental Bora Bora Resort offers eco-friendly luxury with a focus on wellness.",
        amenities: [
          "Thalasso Spa",
          "Overwater Bungalows",
          "Fine Dining",
          "Snorkeling",
        ],
        location: "Motu Piti Aau, Bora Bora",
      },
    ],
  },
  {
    id: 11,
    image: Destination6,
    title: "London",
    subTitle: "London, the capital of England and the United",
    cost: "38,800",
    duration: "Approx 3 night 2 day trip",
    weather: "Thời tiết đẹp từ tháng 5 đến tháng 9",
    bestMonths: "Tháng 5 đến tháng 9",
    hotels: [
      {
        name: "The Ritz London",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "GBP 800/night",
        description:
          "The Ritz London is an iconic luxury hotel known for its elegance and afternoon tea.",
        amenities: ["Fine Dining", "Spa", "Bar", "Fitness Center"],
        location: "150 Piccadilly, St. James's, London",
      },
      {
        name: "Claridge's",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "GBP 900/night",
        description:
          "Claridge's offers a timeless Art Deco experience in the heart of Mayfair.",
        amenities: ["Spa", "Fine Dining", "Bar", "Gym"],
        location: "Brook Street, Mayfair, London",
      },
      {
        name: "The Dorchester",
        images: [], // Bạn có thể thêm hình ảnh nếu có
        price: "GBP 850/night",
        description:
          "The Dorchester is a luxury hotel with a rich history and exceptional service.",
        amenities: ["Spa", "Fine Dining", "Bar", "Gardens"],
        location: "Park Lane, Mayfair, London",
      },
    ],
  },
];
