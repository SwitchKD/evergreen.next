import './hero.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div className='hero_parent'>
      <div className='hero_container'>
          <div className='hero_text_container'>
          <p className='hero_text'>Buy your dream plants</p>
          <div className='text_sub'>
            <div className='text_left'>
            <p id='count'>100+</p>
            <p id='count_text'>Plant species</p>
            </div>
            <div className='text_right'>
            <p id='count'>50+</p>
            <p id='count_text'>Customers</p>
            </div>
          </div>
          </div>

          <div className='hero_image_container'>
          <Image
            className='hero_image'
            src="/plant.png"
            height={500}
            width={500}
            quality={100}
            alt="Picture of the author"
          />
          </div>
      </div>
    </div>
    </>
  )
}
