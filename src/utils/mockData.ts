
// Mock data for e-waste device types
export const deviceTypes = [
  {
    id: 1,
    name: "Smartphones",
    points: 100,
    description: "Mobile phones, iPhones, Android phones",
    image: "/placeholder.svg",
    examples: ["iPhone X", "Samsung Galaxy S10", "Google Pixel"]
  },
  {
    id: 2,
    name: "Tablets",
    points: 80,
    description: "iPads, Android tablets, e-readers",
    image: "/placeholder.svg",
    examples: ["iPad Pro", "Samsung Tab", "Kindle Paperwhite"]
  },
  {
    id: 3,
    name: "Laptops",
    points: 150,
    description: "All types of laptop computers",
    image: "/placeholder.svg",
    examples: ["MacBook", "Dell XPS", "HP Spectre"]
  },
  {
    id: 4,
    name: "Batteries",
    points: 20,
    description: "Rechargeable batteries, laptop batteries",
    image: "/placeholder.svg",
    examples: ["AA Rechargeable", "Laptop Battery", "Power Bank"]
  },
  {
    id: 5,
    name: "Chargers",
    points: 15,
    description: "Phone chargers, laptop adapters",
    image: "/placeholder.svg",
    examples: ["Phone Charger", "Laptop Adapter", "USB-C Cable"]
  },
  {
    id: 6,
    name: "Headphones",
    points: 30,
    description: "Wired and wireless headphones, earbuds",
    image: "/placeholder.svg",
    examples: ["AirPods", "Sony Headphones", "Earbuds"]
  },
];

// Mock rewards for marketplace
export const rewards = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    points: 200,
    category: "Daily Essentials",
    image: "/placeholder.svg",
    store: "Green Living",
    description: "Reusable stainless steel water bottle - 750ml"
  },
  {
    id: 2,
    name: "Coffee Shop Voucher",
    points: 150,
    category: "Food & Drink",
    image: "/placeholder.svg",
    store: "Local Brew Coffee",
    description: "₹200 voucher for any purchase at Local Brew Coffee"
  },
  {
    id: 3,
    name: "Organic Cotton T-shirt",
    points: 350,
    category: "Clothing",
    image: "/placeholder.svg",
    store: "EcoWear",
    description: "100% organic cotton t-shirt with eco-friendly dyes"
  },
  {
    id: 4,
    name: "Movie Tickets",
    points: 250,
    category: "Entertainment",
    image: "/placeholder.svg",
    store: "City Cinemas",
    description: "Two movie tickets valid for any standard screening"
  },
  {
    id: 5,
    name: "Plant a Tree",
    points: 100,
    category: "Donations",
    image: "/placeholder.svg",
    store: "Forest Foundation",
    description: "Contribute to planting a tree in urban green spaces"
  },
  {
    id: 6,
    name: "Grocery Store Discount",
    points: 300,
    category: "Daily Essentials",
    image: "/placeholder.svg",
    store: "Organic Market",
    description: "15% off on your next purchase at Organic Market"
  },
  {
    id: 7,
    name: "Bamboo Cutlery Set",
    points: 180,
    category: "Daily Essentials",
    image: "/placeholder.svg",
    store: "EcoHome",
    description: "Portable bamboo cutlery set with carrying case"
  },
  {
    id: 8,
    name: "Online Course Voucher",
    points: 400,
    category: "Education",
    image: "/placeholder.svg",
    store: "EcoLearn",
    description: "Voucher for online sustainability courses"
  },
];

// Mock user data
export const userData = {
  name: "Guest User",
  points: 325,
  deposits: [
    { 
      id: 1, 
      date: "2025-04-25", 
      device: "Smartphone", 
      location: "Central Mall", 
      points: 100 
    },
    { 
      id: 2, 
      date: "2025-04-20", 
      device: "Headphones", 
      location: "Tech Park", 
      points: 30 
    },
    { 
      id: 3, 
      date: "2025-04-12", 
      device: "Laptop Battery", 
      location: "University Campus", 
      points: 45 
    },
    { 
      id: 4, 
      date: "2025-04-05", 
      device: "Chargers (x3)", 
      location: "Metro Station", 
      points: 45 
    },
    { 
      id: 5, 
      date: "2025-03-28", 
      device: "Old Tablet", 
      location: "Shopping Center", 
      points: 80 
    },
  ],
  redemptions: [
    {
      id: 1,
      date: "2025-04-15",
      reward: "Coffee Shop Voucher",
      points: 150
    }
  ]
};
