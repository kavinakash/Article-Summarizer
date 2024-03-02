import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 p-3'>
            <img src={logo} alt='summarizer logo' className='w-23 object-contain'/>
            <button type='button' 
                    onClick={() => window.open('https://github.com/kavinakash')} 
                    className='black_btn'>
                        Github
                    </button>
        </nav>
    <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>Sumz GPT</span>
    </h1>
    <h2 className='desc'>
        Artical summarizer which converts the 
        lengthy articals into shot summary without changing the meaning,
        Summarize the article with a URL and a click. 
    </h2>
    </header>
  )
}

export default Hero
