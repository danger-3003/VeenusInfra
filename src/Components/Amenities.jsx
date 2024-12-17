import Marquee from 'react-fast-marquee'
import carParking from "../assets/Amenities/car parking.png"
import cctv from "../assets/Amenities/cctv.png"
import generator from "../assets/Amenities/generator.png"
import lift from "../assets/Amenities/lift.png"

function Amenities() {
  return (
    <div>
      <Marquee gradient gradientColor='#e8f7ff' gradientWidth={25} pauseOnHover autoFill className='text-white'>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={carParking} alt="carParking" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Car Parking</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={cctv} alt="cctv" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>CCTV</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={generator} alt="generator" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Generator</p>
            </div>
        </div>
        <div className='bg-white rounded-lg h-28 md:h-36 lg:h-40 group w-max flex items-center justify-center relative flex-col mx-3 my-2' style={{boxShadow:"0px 0px 10px #00000038"}}>
            <img src={lift} alt="lift" className='h-28 md:h-36 lg:h-40 rounded-lg object-cover'/>
            <div className='absolute bottom-0 bg-gradient-to-b from-[#00000000] to-[#000000] w-full py-2 h-10 group-hover:h-full transition-all duration-300 flex items-center justify-center rounded-b-lg'>
                <p className='font-bold tracking-widest'>Lift</p>
            </div>
        </div>
      </Marquee>
    </div>
  )
}

export default Amenities