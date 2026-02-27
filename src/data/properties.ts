import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface Property {
  id: number;
  images: string[];
  price: string;
  title: string;
  description: string;
  location: string;
  type: string;
  beds: number;
  baths: number;
  area: string;
  category: "sale" | "rent" | "offplan";
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  reference: string;
  permitNumber: string;
  yearBuilt: number;
  furnishing: string;
  parking: number;
  floor: string;
}

export const properties: Property[] = [
  {
    id: 1,
    images: [property1, property2, property3],
    price: "USD 816,771",
    title: "High Floor | Partial Sea View | High ROI",
    description: "A stunning 1-bedroom apartment located in the prestigious Palace Beach Residence at Emaar Beachfront. This unit offers partial sea views from its high floor position, making it an excellent investment opportunity with high ROI potential. The apartment features modern finishes, an open-plan kitchen, and access to world-class amenities including a private beach, swimming pool, and state-of-the-art fitness center.",
    location: "Palace Beach Residence, Emaar Beachfront, Dubai",
    type: "Apartment",
    beds: 1,
    baths: 1,
    area: "728 sq ft",
    category: "sale",
    features: ["Sea View", "Balcony", "Built-in Wardrobes", "Central A/C", "Covered Parking", "Gym", "Swimming Pool", "Private Beach", "24/7 Security", "Concierge Service"],
    agent: { name: "Ahmed Al Mansouri", phone: "+971 50 123 4567", email: "ahmed@hexahomerealty.com" },
    reference: "HHR-001",
    permitNumber: "DXB-2024-001234",
    yearBuilt: 2022,
    furnishing: "Semi-Furnished",
    parking: 1,
    floor: "32nd Floor",
  },
  {
    id: 2,
    images: [property2, property1, property3],
    price: "USD 2,450,000",
    title: "Panoramic Skyline Views | Private Pool | Luxury Living",
    description: "An extraordinary 3-bedroom penthouse in the heart of Downtown Dubai with unobstructed views of the Burj Khalifa and the Dubai skyline. This luxurious residence features floor-to-ceiling windows, a private plunge pool on the terrace, premium marble flooring, and a gourmet kitchen equipped with top-of-the-line appliances. Residents enjoy exclusive access to the building's premium amenities.",
    location: "Downtown Dubai, Burj Khalifa District",
    type: "Penthouse",
    beds: 3,
    baths: 4,
    area: "3,200 sq ft",
    category: "sale",
    features: ["Burj Khalifa View", "Private Pool", "Marble Flooring", "Smart Home", "Walk-in Closet", "Maid's Room", "Private Elevator", "Gym", "Spa", "Valet Parking"],
    agent: { name: "Sarah Johnson", phone: "+971 50 987 6543", email: "sarah@hexahomerealty.com" },
    reference: "HHR-002",
    permitNumber: "DXB-2024-002345",
    yearBuilt: 2023,
    furnishing: "Fully Furnished",
    parking: 3,
    floor: "56th Floor",
  },
  {
    id: 3,
    images: [property3, property1, property2],
    price: "USD 5,890,000",
    title: "Waterfront Villa | Private Beach | Smart Home",
    description: "A magnificent 5-bedroom waterfront villa on the iconic Palm Jumeirah featuring direct beach access and breathtaking views of the Arabian Gulf. This smart home boasts a private infinity pool, landscaped gardens, a home cinema, and a dedicated staff quarters. Every detail has been crafted to deliver the ultimate luxury living experience in one of Dubai's most sought-after addresses.",
    location: "Palm Jumeirah, Dubai",
    type: "Villa",
    beds: 5,
    baths: 6,
    area: "7,345 sq ft",
    category: "sale",
    features: ["Private Beach", "Infinity Pool", "Home Cinema", "Smart Home System", "Landscaped Garden", "Staff Quarters", "Wine Cellar", "Private Garage", "BBQ Area", "Rooftop Terrace"],
    agent: { name: "Mohammed Al Rashi", phone: "+971 55 456 7890", email: "mohammed@hexahomerealty.com" },
    reference: "HHR-003",
    permitNumber: "DXB-2024-003456",
    yearBuilt: 2021,
    furnishing: "Fully Furnished",
    parking: 4,
    floor: "Ground + 2",
  },
  {
    id: 4,
    images: [property1, property3, property2],
    price: "USD 95,000/yr",
    title: "Fully Furnished | Marina View | Modern Design",
    description: "A beautifully furnished 2-bedroom apartment in Dubai Marina with stunning marina views. The apartment features a modern open-plan living area, a fully equipped kitchen, and a spacious balcony perfect for entertaining. Located within walking distance of the beach, restaurants, and the Marina Walk promenade.",
    location: "Dubai Marina, Dubai",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
    category: "rent",
    features: ["Marina View", "Fully Furnished", "Balcony", "Built-in Kitchen", "Gym", "Swimming Pool", "Children's Play Area", "24/7 Security", "Metro Access", "Retail Outlets"],
    agent: { name: "Fatima Al Zahra", phone: "+971 52 111 2233", email: "fatima@hexahomerealty.com" },
    reference: "HHR-004",
    permitNumber: "DXB-2024-004567",
    yearBuilt: 2019,
    furnishing: "Fully Furnished",
    parking: 1,
    floor: "18th Floor",
  },
  {
    id: 5,
    images: [property2, property3, property1],
    price: "USD 208,276",
    title: "Stylish Residences in a Vibrant Community",
    description: "A stylish studio apartment in the upcoming Binghatti Etherea project at Jumeirah Village Circle. This off-plan property offers a modern design with high-quality finishes, efficient layouts, and access to premium community amenities. An excellent entry point into the Dubai property market with attractive payment plans available.",
    location: "Binghatti Etherea, Jumeirah Village Circle",
    type: "Apartment",
    beds: 0,
    baths: 1,
    area: "336 sq ft",
    category: "offplan",
    features: ["Modern Design", "Community Pool", "Fitness Center", "Retail Space", "Landscaped Gardens", "Children's Area", "Covered Parking", "Smart Home Ready", "Payment Plan", "High ROI"],
    agent: { name: "Ahmed Al Mansouri", phone: "+971 50 123 4567", email: "ahmed@hexahomerealty.com" },
    reference: "HHR-005",
    permitNumber: "DXB-2024-005678",
    yearBuilt: 2026,
    furnishing: "Unfurnished",
    parking: 1,
    floor: "12th Floor",
  },
  {
    id: 6,
    images: [property3, property2, property1],
    price: "USD 1,200,000",
    title: "Modern Townhouse | Garden View | Family Living",
    description: "A contemporary 3-bedroom townhouse in Dubai Hills Estate, one of Dubai's most family-friendly communities. This property features a private garden, an open-plan living and dining area, and a modern kitchen. Residents enjoy access to an 18-hole championship golf course, parks, schools, and the Dubai Hills Mall.",
    location: "Dubai Hills Estate, Dubai",
    type: "Townhouse",
    beds: 3,
    baths: 3,
    area: "2,100 sq ft",
    category: "offplan",
    features: ["Private Garden", "Golf Course View", "Maid's Room", "Storage Room", "Community Pool", "Parks & Green Spaces", "Schools Nearby", "Shopping Mall", "Covered Parking", "Pet Friendly"],
    agent: { name: "Sarah Johnson", phone: "+971 50 987 6543", email: "sarah@hexahomerealty.com" },
    reference: "HHR-006",
    permitNumber: "DXB-2024-006789",
    yearBuilt: 2025,
    furnishing: "Semi-Furnished",
    parking: 2,
    floor: "Ground + 2",
  },
];
