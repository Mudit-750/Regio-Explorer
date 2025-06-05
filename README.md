# 🌍 Regio Explorer

**RegioExplorer** is a sleek, modern web app built with React, TypeScript, and Tailwind CSS that lets users explore countries around the world. It fetches real-time data from the [REST Countries API](https://restcountries.com) to display detailed information about each country, including population, capital, region, flags, and more.
🌐 Live Demo: https://regio-explorer.netlify.app
## 🚀 Features
| Feature                         | Description                                                              |
| ------------------------------- | ------------------------------------------------------------------------ |
| 🔎 **Search by Name**           | Instantly filter countries as you type.                                  |
| 🌐 **Filter by Region**         | Filter results by continent or region.                                   |
| 📄 **Detailed Country Pages**   | Get official name, capital, subregion, currency, map, and population.    |
| 🗺️ **Google Maps Integration**  |  Jump to the country’s location on Google Maps with one click.           |
| 🧭 **Fully Responsive**         | Clean layout that works perfectly on desktops, tablets, and smartphones. |
| ⚡ **Skeleton Loaders**         | Polished loading state that mimics final content layout.                 |
| 🔙 **Go Back Button**           | Navigate easily without losing scroll state or refetching.               |
| 🧠 **Client-Side Caching**      | Caches country list in `sessionStorage` to avoid unnecessary API calls.  |



## 🧪 Tech Stack

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🔄 React Router DOM
- 📦 Axios
- 🛰️ REST Countries API
- 🧠 sessionStorage for caching
- 🖼️ Skeleton loaders and spinners

## 🧠 Caching Mechanism

Why refetch when you don’t have to?

On the first fetch from the REST Countries API, the response is stored in sessionStorage.
Navigating back to the main list doesn’t trigger a refetch, resulting in faster performance and lower API usage.
To avoid refetching country data every time the user navigates back to the list, the app uses sessionStorage to cache the fetched data in memory.



## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/Mudit-750/Regio-Explorer.git
cd Regio-Explorer
npm install
npm run dev
```

