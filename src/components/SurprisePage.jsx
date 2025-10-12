import React, { useEffect, useRef } from 'react';

// Importando o Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// 1. IMPORTANDO A NOVA BIBLIOTECA
import { TypeAnimation } from 'react-type-animation';

// Importando nossos arquivos
import './SurprisePage.css';
import foto1 from '../assets/images/foto1.jpg'; // Altere se o nome/formato for diferente
import foto2 from '../assets/images/foto2.jpg';
import foto3 from '../assets/images/foto3.jpg';
import foto4 from '../assets/images/foto4.jpg';
import foto5 from '../assets/images/foto5.jpg';
import nossaMusica from '../assets/music/nossa-musica.mp3';

const photos = [foto1, foto2, foto3, foto4, foto5];

function SurprisePage() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Audio play foi bloqueado pelo navegador:", error);
      });
    }
  }, []);

  return (
    <div className="surprise-container">
      <audio ref={audioRef} src={nossaMusica} loop />

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo} alt={`Lembrança ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-area">
        {/* 2. ADICIONANDO O COMPONENTE DE TEXTO ANIMADO */}
        <TypeAnimation
          sequence={[
            // A animação começa aqui
            'Meu amor...',
            2000, // Pausa de 2 segundos
            'Desde o momento em que te conheci, tudo mudou.',
            2000,
            'Cada foto sua é um pedaço do universo de tão linda',
            1500,
            '...e do amor que só cresce a cada dia.',
            2000,
            'Você é a minha alegria, minha parceira e meu porto seguro.',
            2500,
            'Eu te quero mais do que as palavras podem expressar. ❤️',
            // A animação termina aqui
          ]}
          wrapper="p" // O texto será renderizado dentro de uma tag <p>
          cursor={true} // Mostra o cursor de digitação
          speed={50} // Velocidade da digitação
          style={{ fontSize: '1.5em', textAlign: 'center' }} // Estilo do texto
          repeat={0} // Faz a animação acontecer apenas uma vez
        />
      </div>
    </div>
  );
}

export default SurprisePage;