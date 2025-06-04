import axios from "axios"
import { useEffect, useState, useMemo } from "react"
import { Link } from 'react-router-dom';


const Countries = () => {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState<string>("")
  const [region, setRegion] = useState<string>("")
  console.log(search)
  console.log(region)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all")
        setdata(res.data)
        console.log(res.data);
      } catch (error) {
        console.error("unable to fetch data", error)
      }
    }
    fetchData()
  }, [])

  const filteredCountries = useMemo(() => { // explain this entire function in detail
    return data.filter((country: any) => {
      const matchesRegions = !region || country.region.toLowerCase() === region.toLowerCase()
      const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase())
      return matchesSearch && matchesRegions;
    }
    );
  }, [data, search, region]);

  return (
    <div className="mx-8 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Countries</h2>
      <div className="flex flex-col sm:flex-row gap-7 items-center  mb-6">
        <input type="text" value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search by Name"
          className="border-2 border-gray-400 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
        />
        <select onChange={(e) => setRegion(e.target.value)}
          className="border-2 border-gray-400 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
        >
          <option value="">All regions</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 && <div className="text-xl">No Countries match your filters</div>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCountries.map((country: any, key: number) => {
          return (
            <li key={country.cca3}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <Link to={`/countries/${country.name.common}`}
                className="text-indigo-600 hover:underline text-lg font-bold">
                {country.name.common}
              </Link>
              <div className="text-gray-600  mt-1">
                Region: {country.region} <br />
                Population: {country.population.toLocaleString()}
              </div>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default Countries
