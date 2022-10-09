import {loader} from '../assets'

const Loader = ({ title }) => (
  <div className='flex items-center justify-center
    flex-col w-full'>
    <img src={loader} alt='loader'  className='w-32 h-322 object-contain'/>
    <h1 className='font-bold text-2xl text-white mt-2'>{title || "..Loading..."}</h1>
  </div>
);

export default Loader;
