
import { Link } from 'react-router-dom'
import travel from '../assets/Travel.jpeg'
import explore from '../assets/explore.svg'


const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-300 via-white to-purple-300 min-h-screen flex items-center">
      <div className='main mx-auto max-w-7xl py-12 px-6 flex flex-col-reverse sm:flex-row gap-10 items-center justify-between '>

        {/* Text Section */}
        <div className='flex flex-col w-full sm:w-1/2 gap-8'>
          <h1 className='text-4xl sm:text-5xl font-bold leading-tight'>
            <span>Explore Countries with </span>
            <span className='text-indigo-700'>Real-Time Data</span>
          </h1>
          <p className=' text-base sm:text-xl text-slate-700 px-2 sm:pl-8 sm:pr-20 '>Discover details about every country around the world-from capitals to regions!</p>

          <div className='btn flex flex-col sm:flex-row items-center gap-4 text-lg'>
            <Link to={"/countries"}
              className='flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-md transition duration-200  '>
              <span>Explore Now</span>
              <img src={explore} alt="explore" className='size-6 invert' />
            </Link>
            <Link to={'/about'} 
            className='bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-600 py-3 px-6 rounded-md transition duration-200'>
              Learn More
            </Link>
          </div>

        </div>
        <div className='w-full sm:w-1/2'>
          <img src={travel} alt='Explore Picture' className='rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default Home
