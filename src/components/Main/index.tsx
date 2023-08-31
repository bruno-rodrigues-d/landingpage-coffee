import Cafe from '../../assets/coffee.png'

export function Main() {
  return(
    <main className='flex items-center gap-[9.375rem] mx-auto max-w-[90rem]'>
      <img src={Cafe} alt="Imagem café" className='w-[43rem] h-[43rem]' />

      <div className='flex flex-col gap-2.5'>
        <h4 className='text-[#D8A661] uppercase text-base font-bold'>cafés especiais todo mês</h4>
        <h1 className='font-bold text-[50px]'>Café não é</h1>
        <h1 className='font-bold text-[50px]'>só uma bebida</h1>
        <span className='w-[24rem] block'>Ao entrar para o Clube Veroo, todo mês você receberá uma box com o café inédito do mês, recém torrado e produzido por pequenos produtores de todo o país. </span>
        <a href="https://veroo.cafe/biro">
          <button className='text-[#000] uppercase font-bold py-3 px-7 mt-8 text-[11.165px] rounded-full bg-[#D8A661] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] hover:shadow-[#D8A661]'>Assine e receba</button>
        </a>
      </div>
    </main>
  )
}