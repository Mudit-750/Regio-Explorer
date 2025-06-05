import { useEffect, useState, useMemo } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import { SkeletonLoader } from "../components/Loader";


const Countries = () => {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState<string>("")
  const [region, setRegion] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const cacheData = sessionStorage.getItem("countries")
      if (cacheData) {
        setdata(JSON.parse(cacheData))
        setLoading(false)
      }
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all")
        setdata(res.data)
        sessionStorage.setItem("countries", JSON.stringify(res.data))
      } catch (error) {
        console.error("unable to fetch data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredCountries = useMemo(() => {
    return data.filter((country: any) => {
      const matchesRegions = !region || country.region.toLowerCase() === region.toLowerCase()
      const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase())
      return matchesSearch && matchesRegions;
    }
    );
  }, [data, search, region]);



  return (
    <div className="mx-10 sm:mx-20 p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">Countries🗺️</h2>
      <div className="flex flex-col sm:flex-row gap-7 items-center  mb-6">
        <input type="text" value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search by Name"
          className="border-2 border-gray-400 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
        />
        <select value={region} onChange={(e) => setRegion(e.target.value)}
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

      { }
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? <SkeletonLoader /> :
          filteredCountries.length === 0 ? <div className="text-xl">No Countries match your filters</div> :
            filteredCountries.map((country: any) => {
              return (
                <li key={country.cca3}
                  className="border border-gray-300 rounded-xl p-4 shadow hover:shadow-xl transition hover:bg-gray-100"
                >
                  <Link to={`/countries/${country.name.common}`} className="block">
                    <h3 className="text-indigo-600 hover:underline text-lg font-bold">
                      {country.name.common}
                    </h3>
                    <div className="text-gray-600  mt-1">
                      Region: {country.region} <br />
                      Population: {country.population.toLocaleString()}
                    </div>
                  </Link>

                </li>)
            })}
      </ul>
    </div>
  )
}

export default Countries
