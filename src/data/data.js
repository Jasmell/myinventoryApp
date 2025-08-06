// ==========================================================================
// This file contains the data for the inventory app. It includes the categories of items
const categories = [
  { emoji: "🪑", label: "Furniture" },
  { emoji: "🧊", label: "Appliances" },
  { emoji: "🍽️", label: "Kitchenware" },
  { emoji: "🧼", label: "Cleaning Supplies" },
  { emoji: "💻", label: "Electronics" },
  { emoji: "🛏️", label: "Bedding & Linens" },
  { emoji: "👕", label: "Clothing & Accessories" },
  { emoji: "🧴", label: "Personal Care & Cosmetics" },
  { emoji: "🪥", label: "Toiletries" },
  { emoji: "🛒", label: "Food & Groceries" },
  { emoji: "📎", label: "Office & Stationery" },
  { emoji: "🛠️", label: "Tools & Maintenance" },
  { emoji: "🖼️", label: "Decor & Home Accessories" },
  { emoji: "🌟", label: "Entertainment & Subscriptions" },
  { emoji: "🚲", label: "Transport & Mobility" },
  { emoji: "💊", label: "Health & Wellness" },
  { emoji: "🔌", label: "Utilities & Services" },
  { emoji: "🐶", label: "Pets & Pet Supplies" },
  { emoji: "🎨", label: "Hobbies & Leisure" },
  { emoji: "🚨", label: "Emergency Supplies" },
  { emoji: "📄", label: "Documents & Admin" }
];

// ==========================================================================
// This function will get the current date and time in the format YYYY-MM-DD and HH:MM:SS
// and will be used to create the items in the database, so I can know when they were created.
const date = new Date();
// Get the current date 
// Get current year, month, and day
const currentYear = date.getFullYear();
// Months are zero-based in JavaScript
const currentMonth = date.getMonth() + 1; 
// Get the current day of the month
const currentDay = date.getDate();  
const currentDate = `${currentYear}-${currentMonth < 10 ? '0' : ''}${currentMonth}-${currentDay < 10 ? '0' : ''}${currentDay}`;
// Get the current time in HH:MM:SS format      
const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;             

// ==========================================================================
// These are the states of the items in the inventory: 
const statusIcons = {
  bought: { icon: "✅", label: "Bought" },
  paying: { icon: "💳", label: "Paying" },
  wish: { icon: "🌠", label: "Wish" },
};

// ==========================================================================
// Function that formats the numbers(Adds the comma whenever it's needed)
const  formatPrice= value => {
  if (isNaN(value)) return 'Invalid number';
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}



export { categories, currentDate, currentTime, statusIcons, formatPrice };

