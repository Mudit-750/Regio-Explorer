import { useEffect, useState, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Spinner } from "../components/Loader"

const CountryDetails = () => {
    const { countryName } = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState<any>(null)


    useEffect(() => {
        ; (async () => {
            try {
                const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
                setCountry(res.data[0])
            } catch (error) {
                console.error("Unable to fetch data", error)
            }
        })()

    }, [countryName])

    const countryInfo = useMemo(() => {
        if (!country) return null

        const currencyKeys = country.currencies ? Object.keys(country.currencies) : []
        const currencyList = currencyKeys.map((key) => {
            const { name, symbol } = country.currencies[key]
            return `${name} (${symbol})`
        })

        return {
            name: country?.name.common || "N/A",
            officialName: country?.name.official || "N/A",
            capital: country?.capital[0] || "N/A",
            region: country?.region || "N/A",
            subregion: country?.subregion || "N/A",
            population: country?.population.toLocaleString() || "N/A",
            googleMaps: country?.maps?.googleMaps || "N/A",
            flagUrl: country?.flags.svg || "N/A",
            flagAlt: country?.flags.alt || "N/A",
            currencyList: currencyList.length > 0 ? currencyList.join(', ') : "N/A"
        }
    }, [country])

    if (!countryInfo) return <Spinner />

    return (
        <div className="w-full h-[93vh] bg-gray-200">
            <button onClick={() => navigate(-1)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full mb-4 mx-4 mt-4 cursor-pointer">
                ← Go Back
            </button>

            <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col sm:flex-row items-center justify-around gap-7 sm:gap-0">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{countryInfo.name}</h2>
                    {/* Details */}
                    <ul className="space-y-2 text-gray-700 text-lg ">
                        <li><strong>Official Name:</strong> {countryInfo.officialName}</li>
                        <li><strong>Capital:</strong> {countryInfo.capital}</li>
                        <li><strong>Region:</strong> {countryInfo.region}</li>
                        <li><strong>Subregion:</strong> {countryInfo.subregion}</li>
                        <li><strong>Population:</strong> {countryInfo.population}</li>
                        <li><strong>Currency:</strong> {countryInfo.currencyList}</li>
                    </ul>
                    <a href={countryInfo.googleMaps} target="_blank" rel="noopener noreferrer"
                        className="text-indigo-700 font-bold text-lg mt-2.5 block  hover:underline">
                        Open Maps📌🗺️
                    </a>
                </div>

                {countryInfo.flagUrl && (
                    <div className="">
                        <img src={countryInfo.flagUrl} alt={countryInfo.flagAlt} className="w-64 h-auto  sm:h-52 sm:w-auto rounded shadow-lg hover:shadow-xl border border-gray-200" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CountryDetails