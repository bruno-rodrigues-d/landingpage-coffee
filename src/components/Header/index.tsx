import Logo from '../../assets/logo-veroo.svg'

export function Header() {
  return (
    <header className='py-9 px-28 flex justify-between font-bold border border-transparent border-b-[#8C6553]'>
      <img src={Logo} alt="Logo Veroo" className='w-32 h-11' />

      <nav>
        <ul className="flex gap-8">
          <a href="#" className='pb-2 hover:border-2 border-transparent border-b-[#8C6553]'>
            <li>
              Início
            </li>
          </a>

          <a href="https://veroo.com.br/loja" target="_blank" className='pb-2 hover:border-2 border-transparent border-b-[#8C6553]'>
            <li>
              Loja
            </li>
          </a>

          <a href="https://veroo.cafe/nossos-kits" target="_blank" className='pb-2 hover:border-2 border-transparent border-b-[#8C6553]'>
            <li>
              Kits passados
            </li>
          </a>

          <a href="https://veroo.com.br/produtores" target="_blank" className='pb-2 hover:border-2 border-transparent border-b-[#8C6553]'>
            <li>
              Produtores
            </li>
          </a>

          <a href="https://blog.veroo.com.br/" target="_blank" className='pb-2 hover:border-2 border-transparent border-b-[#8C6553]'>
            <li>
              Blog
            </li>
          </a>
        </ul>
      </nav>
    </header>
  )
}