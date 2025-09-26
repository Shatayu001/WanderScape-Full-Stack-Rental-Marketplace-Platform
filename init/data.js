const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Rustic Lake House",
    description:
      "Experience the tranquility of lakeside living in this cozy rustic house. Perfect for fishing and relaxation.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Charming Cottage in the Woods",
    description:
      "Escape to this idyllic cottage surrounded by trees. A peaceful retreat from the hustle and bustle.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Seaside Villa with Pool",
    description:
      "Luxurious villa with a private pool and breathtaking views of the sea. Your dream vacation awaits!",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Downtown Apartment with Skyline View",
    description:
      "Enjoy stunning views of the city skyline from this modern downtown apartment.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Peaceful Desert Retreat",
    description:
      "Find serenity in the desert landscape with this beautiful and peaceful retreat.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Step back in time and experience the grandeur of a historic castle with modern amenities.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Tropical Bungalow",
    description:
      "Relax in this tropical paradise bungalow surrounded by palm trees and sandy beaches.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Ski Lodge Escape",
    description:
      "Hit the slopes during the day and relax by the fire at night in this cozy ski lodge.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1600585154363-67eb9e2e7b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Beach Hut Paradise",
    description:
      "Stay right on the sand in this rustic beach hut. Perfect for a true seaside experience.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Goa",
    country: "India",
  },
  {
    title: "Luxury Penthouse",
    description:
      "A high-rise penthouse with panoramic city views, top-class amenities, and private terrace.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Get back to nature in this charming countryside farmhouse surrounded by fields and greenery.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Treehouse Adventure",
    description:
      "Live among the trees in this adventurous treehouse stay. A unique escape from the ordinary.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Desert Dome Stay",
    description:
      "A futuristic geodesic dome in the desert offering star-filled skies and tranquility.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Joshua Tree",
    country: "United States",
  },
  {
    title: "Waterfront Cabin",
    description:
      "Enjoy fishing, kayaking, and peaceful sunsets in this cabin right on the water.",
    image: {
      filename: "Listing image",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Vancouver",
    country: "Canada",
  },
];

module.exports = { data: sampleListings };
