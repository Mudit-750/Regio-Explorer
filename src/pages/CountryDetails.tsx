import { useParams } from "react-router-dom"


const CountryDetails = () => {
    const params = useParams()
  return (
    <div>{params.countryName}</div>
  )
}

export default CountryDetails