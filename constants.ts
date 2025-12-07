import { Branch, Product } from './types';

export const COMPANY_NAME = "Ezzu Autotech Trading PLC";
export const COMPANY_SLOGAN = "Driving Innovation, Empowering Industry.";

export const BRANCHES: Branch[] = [
  {
    id: "b1",
    name: "Automotive Parts & Tech",
    shortDescription: "Specialized in high-end engine components and electronic diagnostics.",
    fullDescription: "Our Automotive Parts branch is the heart of Ezzu Autotech. We import and distribute cutting-edge engine treatment devices, diagnostic tools, and OEM spare parts. We serve workshops and individual car owners looking for reliability.",
    location: "Bole District, Addis Ababa",
    coordinates: { lat: 9.005401, lng: 38.763611 },
    contactPhone: "+251 911 000 000",
    email: "parts@ezzuautotech.com",
    imageUrl: "https://picsum.photos/id/111/800/600",
    services: ["Diagnostic Calibration", "Wholesale Supply", "Technical Training"]
  },
  {
    id: "b2",
    name: "Industrial Machinery & Tools",
    shortDescription: "Heavy machinery and precision tools for manufacturing.",
    fullDescription: "Supporting the industrial sector with robust machinery imports. From CNC machines to hydraulic presses and hand tools, we provide the backbone for factories and workshops across the region.",
    location: "Kality Industrial Zone, Addis Ababa",
    coordinates: { lat: 8.9376, lng: 38.7634 },
    contactPhone: "+251 911 222 222",
    email: "machinery@ezzuautotech.com",
    imageUrl: "https://picsum.photos/id/450/800/600",
    services: ["Machine Installation", "Maintenance Contracts", "Spare Parts Procurement"]
  },
  {
    id: "b3",
    name: "Chemicals & Lubricants",
    shortDescription: "Advanced synthetic lubricants and automotive chemicals.",
    fullDescription: "Ensuring longevity for your engines and machines. We are the official distributors for Moletech-inspired fuel additives and high-performance synthetic lubricants.",
    location: "Lebu, Addis Ababa",
    coordinates: { lat: 8.9554, lng: 38.7100 },
    contactPhone: "+251 911 333 333",
    email: "fluids@ezzuautotech.com",
    imageUrl: "https://picsum.photos/id/21/800/600",
    services: ["Fluid Analysis", "Bulk Delivery", "Eco-friendly Disposal Consulting"]
  }
];

export const PRODUCTS: Product[] = [
  // B1 Products
  {
    id: "p1",
    branchId: "b1",
    name: "Moletech Fuel Saver Kit",
    category: "Engine Technology",
    description: "A molecular technology device designed to improve fuel efficiency and reduce emissions by up to 15%.",
    stockStatus: "In Stock",
    specs: {
      "Compatibility": "Petrol & Diesel",
      "Lifespan": "5 Years",
      "Installation": "Plug & Play"
    },
    imageUrl: "https://picsum.photos/id/133/400/400",
    price: 150
  },
  {
    id: "p2",
    branchId: "b1",
    name: "OBD-II Professional Scanner",
    category: "Diagnostics",
    description: "Advanced diagnostic tablet for all major vehicle brands. Reads and clears codes, live data stream.",
    stockStatus: "Low Stock",
    specs: {
      "Screen": "10 inch Touch",
      "Connectivity": "WiFi/Bluetooth",
      "Update": "2 Years Free"
    },
    imageUrl: "https://picsum.photos/id/3/400/400",
    price: 899
  },
  // B2 Products
  {
    id: "p3",
    branchId: "b2",
    name: "Hydraulic Shop Press 20T",
    category: "Workshop Equipment",
    description: "Heavy-duty H-frame floor shop press. Ideal for straightening, bending, and removing gears.",
    stockStatus: "In Stock",
    specs: {
      "Capacity": "20 Tons",
      "Stroke": "145mm",
      "Weight": "95kg"
    },
    imageUrl: "https://picsum.photos/id/250/400/400",
    price: 450
  },
  {
    id: "p4",
    branchId: "b2",
    name: "CNC Laser Cutter",
    category: "Machinery",
    description: "Precision fiber laser cutting machine for metal fabrication.",
    stockStatus: "Pre-Order",
    specs: {
      "Power": "1500W",
      "Area": "1500x3000mm",
      "Material": "Steel, Aluminum"
    },
    imageUrl: "https://picsum.photos/id/257/400/400",
    price: 12000
  },
  // B3 Products
  {
    id: "p5",
    branchId: "b3",
    name: "Synthetic Nano-Oil 5W-30",
    category: "Lubricants",
    description: "Full synthetic motor oil enriched with nano-particles for extreme heat protection.",
    stockStatus: "In Stock",
    specs: {
      "Viscosity": "5W-30",
      "Volume": "4 Liters",
      "Standard": "API SP"
    },
    imageUrl: "https://picsum.photos/id/319/400/400",
    price: 45
  }
];
