
import { Link } from 'react-router-dom'
import travel from '../assets/Travel.jpeg'
import explore from '../assets/explore.svg'


const Home = () => {
  return (
    <div className='main mx-auto w-6xl flex gap-5 mt-48'>
      <div className='flex flex-col w-1/2 gap-8'>
        <h1 className='text-5xl font-bold'>
          <span>Explore Countries with </span>
          <span className='text-indigo-700'>Real-Time Data</span>
        </h1>
        <p className='pl-8 pr-20 text-xl text-slate-700'>Discover details about every country around the world-from capitals to regions!</p>

        <div className='btn flex  items-center gap-3.5 text-lg'>
          <Link to={"/countries"} className='flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-md '>
              <div>Explore Now</div>
              <div><img src={explore} alt="explore" className='size-6 invert' /></div>
          </Link>
          <Link to={'/about'} className='bg-gray-200 text-gray-500 hover:ng-gray-300 hover:text-gray-600 py-3 px-6 rounded-md'>
          Learn More
          </Link>
        </div>

      </div>
      <div className='w-1/2'>
        <img src={travel} alt='Explore Picture' className='rounded-sm' />
      </div>
    </div>
  )
}

export default Home
