import Cafe01 from '../../assets/coffee-1.png'
import Cafe02 from '../../assets/coffee-2.png'
import Cafe03 from '../../assets/coffee-3.png'

export function Footer() {
  return (
    <footer className="py-12 pl-24 pr-52 w-full rounded-t-[50px] bg-[#4E2A23] shadow-lg shadow-[rgba(0, 0, 0, 0, 30)] relative flex justify-between">
      <div>
        <div className="bg-[#2C120D] py-2 px-3 flex gap-2 w-40 h-12 rounded-[50px] top-[-1.5rem] absolute">
          <p className="text-xl">cupom:</p>
          <p className="font-bold text-xl">BIRO</p>
        </div>
        <span className="w-80 block">Além disso, você também receberá mensalmente um mimo surpresa para deixar a sua experiência ainda mais gostosa. </span>
      </div>

      <div className='flex gap-9 top-[-4rem] right-[25rem] absolute'>
        <img src={Cafe01} alt="Cafe 01" className='' />
        <img src={Cafe02} alt="Cafe 02" className='' />
        <img src={Cafe03} alt="Cafe 03" className='' />
      </div>
    </footer>
  )
}