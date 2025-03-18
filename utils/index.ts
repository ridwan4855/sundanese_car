export const listCars = [
  {
    merk: "Ford Mustang",
    year: "2022",
    unit: "378",
    countSell: "89",
    from: "USA",
    linkImage: "/images/ford-mustang-yellow.svg", // default image
    description: "A modern American muscle car, known for its powerful engine and iconic design.",
    varianImages: [
      { color: "yellow", hex: "#FFD700", linkImage: "/images/ford-mustang-yellow.svg", isActive: true },
      { color: "red", hex: "#FF0000", linkImage: "/images/ford-mustang-red.svg", isActive: false },
      { color: "blue", hex: "#0000FF", linkImage: "/images/ford-mustang-blue.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/images/ford-mustang-black.svg", isActive: false },
    ],
  },
  {
    merk: "Tesla Model 3",
    year: "2023",
    unit: "512",
    countSell: "203",
    from: "USA",
    linkImage: "/images/tesla-model-3-white.svg", // default image
    description: "A popular all-electric sedan known for its minimalist design and advanced technology.",
    varianImages: [
      { color: "White", hex: "#FFFFFF", linkImage: "/images/tesla-model-3-white.svg", isActive: true },
      { color: "red", hex: "#FF0000", linkImage: "/images/tesla-model-3-red.svg", isActive: false },
      { color: "blue", hex: "#0000FF", linkImage: "/images/tesla-model-3-blue.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/images/tesla-model-3-black.svg", isActive: false },
    ],
  },
  {
    merk: "Toyota Camry",
    year: "2022",
    unit: "645",
    countSell: "178",
    from: "Japan",
    linkImage: "/images/toyota-camry-silver.svg", // default image
    description: "A reliable mid-size sedan, popular for its comfort and fuel efficiency.",
    varianImages: [
      { color: "Silver", hex: "#C0C0C0", linkImage: "/images/toyota-camry-silver.svg", isActive: true },
      { color: "White", hex: "#FFFFFF", linkImage: "/images/toyota-camry-white.svg", isActive: false },
      { color: "blue", hex: "#0000FF", linkImage: "/images/toyota-camry-blue.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/images/toyota-camry-black.svg", isActive: false },
    ],
  },
  {
    merk: "BMW 3 Series",
    year: "2023",
    unit: "423",
    countSell: "156",
    from: "Germany",
    linkImage: "/images/bmw-3-series-blue.svg", // default image
    description: "A luxury compact executive car known for its sporty handling and premium features.",
    varianImages: [
      { color: "blue", hex: "#0000FF", linkImage: "/images/bmw-3-series-blue.svg", isActive: true },
      { color: "red", hex: "#FF0000", linkImage: "/images/bmw-3-series-red.svg", isActive: false },
      { color: "Silver", hex: "#C0C0C0", linkImage: "/images/bmw-3-series-silver.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/images/bmw-3-series-black.svg", isActive: false },
    ],
  },
  {
    merk: "Honda Civic",
    year: "2023",
    unit: "721",
    countSell: "289",
    from: "Japan",
    linkImage: "/icon/honda-civic.svg",
    description: "A compact car known for its reliability, fuel efficiency, and sporty handling.",
    varianImages: [
      { color: "blue", hex: "#1E90FF", linkImage: "/icon/honda-civic.svg", isActive: true },
      { color: "red", hex: "#FF0000", linkImage: "/icon/honda-civic.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/honda-civic.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/icon/honda-civic.svg", isActive: false },
    ],
  },
  {
    merk: "Chevrolet Malibu",
    year: "2022",
    unit: "543",
    countSell: "176",
    from: "USA",
    linkImage: "/icon/chevrolet-malibu.svg",
    description: "A mid-size sedan offering a comfortable ride and modern features at an affordable price.",
    varianImages: [
      { color: "red", hex: "#DC143C", linkImage: "/icon/chevrolet-malibu.svg", isActive: true },
      { color: "Silver", hex: "#C0C0C0", linkImage: "/icon/chevrolet-malibu.svg", isActive: false },
      { color: "blue", hex: "#0000FF", linkImage: "/icon/chevrolet-malibu.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/chevrolet-malibu.svg", isActive: false },
    ],
  },
  {
    merk: "Volkswagen Golf",
    year: "2023",
    unit: "612",
    countSell: "231",
    from: "Germany",
    linkImage: "/icon/volkswagen-golf.svg",
    description: "A versatile hatchback known for its refined driving experience and practical design.",
    varianImages: [
      { color: "Green", hex: "#32CD32", linkImage: "/icon/volkswagen-golf.svg", isActive: true },
      { color: "blue", hex: "#0000FF", linkImage: "/icon/volkswagen-golf.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/volkswagen-golf.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/icon/volkswagen-golf.svg", isActive: false },
    ],
  },
  {
    merk: "Hyundai Sonata",
    year: "2022",
    unit: "489",
    countSell: "198",
    from: "South Korea",
    linkImage: "/icon/hyundai-sonata.svg",
    description: "A stylish mid-size sedan with a spacious interior and advanced safety features.",
    varianImages: [
      { color: "Purple", hex: "#4B0082", linkImage: "/icon/hyundai-sonata.svg", isActive: true },
      { color: "Silver", hex: "#C0C0C0", linkImage: "/icon/hyundai-sonata.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/hyundai-sonata.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/icon/hyundai-sonata.svg", isActive: false },
    ],
  },
  {
    merk: "Nissan Altima",
    year: "2023",
    unit: "578",
    countSell: "213",
    from: "Japan",
    linkImage: "/icon/nissan-altima.svg",
    description: "A reliable mid-size sedan with optional all-wheel drive and good fuel economy.",
    varianImages: [
      { color: "Orange", hex: "#FF8C00", linkImage: "/icon/nissan-altima.svg", isActive: true },
      { color: "blue", hex: "#0000FF", linkImage: "/icon/nissan-altima.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/nissan-altima.svg", isActive: false },
      { color: "Gray", hex: "#808080", linkImage: "/icon/nissan-altima.svg", isActive: false },
    ],
  },
  {
    merk: "Mazda CX-5",
    year: "2023",
    unit: "687",
    countSell: "254",
    from: "Japan",
    linkImage: "/icon/mazda-cx-5.svg",
    description: "A compact SUV with upscale interior, sharp handling, and attractive styling.",
    varianImages: [
      { color: "Brown", hex: "#8B4513", linkImage: "/icon/mazda-cx-5.svg", isActive: true },
      { color: "red", hex: "#FF0000", linkImage: "/icon/mazda-cx-5.svg", isActive: false },
      { color: "blue", hex: "#0000FF", linkImage: "/icon/mazda-cx-5.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/mazda-cx-5.svg", isActive: false },
    ],
  },
  {
    merk: "Kia Optima",
    year: "2022",
    unit: "456",
    countSell: "187",
    from: "South Korea",
    linkImage: "/icon/kia-optima.svg",
    description: "A mid-size sedan offering good value, with a spacious cabin and many standard features.",
    varianImages: [
      { color: "Dark Green", hex: "#2F4F4F", linkImage: "/icon/kia-optima.svg", isActive: true },
      { color: "Silver", hex: "#C0C0C0", linkImage: "/icon/kia-optima.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/kia-optima.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/icon/kia-optima.svg", isActive: false },
    ],
  },
  {
    merk: "Subaru Outback",
    year: "2023",
    unit: "598",
    countSell: "229",
    from: "Japan",
    linkImage: "/icon/subaru-outback.svg",
    description: "A rugged wagon-like SUV with standard all-wheel drive and excellent off-road capability.",
    varianImages: [
      { color: "Green", hex: "#006400", linkImage: "/icon/subaru-outback.svg", isActive: true },
      { color: "blue", hex: "#0000FF", linkImage: "/icon/subaru-outback.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/subaru-outback.svg", isActive: false },
      { color: "Gray", hex: "#808080", linkImage: "/icon/subaru-outback.svg", isActive: false },
    ],
  },
  {
    merk: "Lexus ES",
    year: "2023",
    unit: "389",
    countSell: "142",
    from: "Japan",
    linkImage: "/icon/lexus-es.svg",
    description: "A luxury mid-size sedan known for its comfortable ride, quiet cabin, and high-quality interior.",
    varianImages: [
      { color: "Gold", hex: "#B8860B", linkImage: "/icon/lexus-es.svg", isActive: true },
      { color: "Silver", hex: "#C0C0C0", linkImage: "/icon/lexus-es.svg", isActive: false },
      { color: "black", hex: "#000000", linkImage: "/icon/lexus-es.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/lexus-es.svg", isActive: false },
    ],
  },
  {
    merk: "Audi A6",
    year: "2023",
    unit: "312",
    countSell: "98",
    from: "Germany",
    linkImage: "/icon/audi-a6.svg",
    description: "A luxury mid-size sedan offering advanced technology, refined performance, and elegant design.",
    varianImages: [
      { color: "Gray", hex: "#708090", linkImage: "/icon/audi-a6.svg", isActive: true },
      { color: "black", hex: "#000000", linkImage: "/icon/audi-a6.svg", isActive: false },
      { color: "White", hex: "#FFFFFF", linkImage: "/icon/audi-a6.svg", isActive: false },
      { color: "blue", hex: "#0000FF", linkImage: "/icon/audi-a6.svg", isActive: false },
    ],
  },
];


export const whyUsList = [
  {
    id: 1,
    title: "High Quality",
    description:
      "Our products are made from the finest materials, ensuring durability and performance.",
    style:
      "bg-indigo-500 hover:bg-indigo-600 text-white hover:w-[80px] hover:h-[80px] transition-all duration-500",
    link:"/icon/whyus/guarantee.png"
  },
  {
    id: 2,
    title: "Innovative Designs",
    description:
      "We focus on cutting-edge designs that are both functional and stylish.",
    style:
      "bg-teal-500 hover:bg-teal-600 text-white hover:w-[80px] hover:h-[80px] transition-all duration-500",
    link:"/icon/whyus/idea.png"
  },
  {
    id: 3,
    title: "Affordable Pricing",
    description:
      "We offer premium products at competitive prices, making quality accessible.",
    style:
      "bg-yellow-500 hover:bg-yellow-600 text-white hover:w-[80px] hover:h-[80px] transition-all duration-500",
    link:"/icon/whyus/pricing.png"
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description:
      "We prioritize customer satisfaction with excellent service and support.",
    style: `bg-orange-500 hover:bg-orange-600 text-white hover:w-[80px] hover:h-[80px] transition-all duration-500`,
    link:"/icon/whyus/satisfaction.png"
  },
  {
    id: 5,
    title: "Sustainable Practices",
    description:
      "We use eco-friendly materials and practices to reduce our environmental impact.",
    style:
      "bg-slate-500 hover:bg-slate-600 text-white hover:w-[80px] hover:h-[80px] transition-all duration-500",
      link:"/icon/whyus/sustainable.png"
  },
  {
    id: 6,
    title: "Trusted by Experts",
    description:
      "Our products are trusted and recommended by industry professionals worldwide.",
    style:
      "bg-red-400 hover:bg-red-600 text-white hover:w-[80px] hover:h-[80px] transition-all duration-500",
    link:"/icon/whyus/verified.png"
  },
];


const url = 'https://cars-database-with-image.p.rapidapi.com/api/models/generations/variants/%7Bgeneration_id%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '69778c734fmsh2cf3e8a8d5d192ap196351jsna3077b77fb05',
		'x-rapidapi-host': 'cars-database-with-image.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
  console.log("result disini : ");
	console.log(result);
} catch (error) {
	console.error(error);
}
