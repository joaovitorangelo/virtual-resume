import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationcontainer.sass'

export function InformationContainer(){
    return (
        <section id='information'>
      <div className='info-card'>
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Celular</h3>
          <p>(51) 99439-3030</p>
        </div>
      </div>
      <div className='info-card'>
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>joaovitorangelo05@gmail</p>
        </div>
      </div>
      <div className='info-card'>
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>Florianópolis / SC</p>
        </div>
      </div>
    </section>
    )
}

