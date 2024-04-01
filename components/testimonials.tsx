'use client'
import Testimonial from '@/components/testimonial'
import TestimonialImg01 from '@/public/images/testimonial-01.jpg'
import TestimonialImg02 from '@/public/images/testimonial-02.jpg'
import TestimonialImg03 from '@/public/images/testimonial-03.jpg'
import TestimonialImg04 from '@/public/images/testimonial-04.jpg'
import TestimonialImg05 from '@/public/images/testimonial-05.jpg'
import TestimonialImg06 from '@/public/images/testimonial-06.jpg'
import TestimonialImg07 from '@/public/images/testimonial-07.jpg'
import TestimonialImg08 from '@/public/images/testimonial-08.jpg'

export default function Testimonials() {

  const testimonials01 = [
    {
      image: TestimonialImg01,
      name: 'Andrei Popescu',
      user: '@andrei_pop',
      link: '#0',
      content: 'Am achiziționat un calculator personalizat de la acest magazin și sunt extrem de impresionat de calitatea produsului. Configurarea personalizată mi-a oferit exact ceea ce aveam nevoie pentru cerințele mele specifice. Recomand cu căldură acest magazin oricui caută soluții de înaltă performanță în domeniul calculatoarelor personalizate.',
    },
    {
      image: TestimonialImg02,
      name: 'Ioana Stanescu',
      user: '@ioanaS',
      link: '#0',
      content: 'Produsele acestui magazin online de calculatoare personalizate sunt pur și simplu extraordinare! Am fost plăcut surprinsă de nivelul de personalizare oferit și de performanța impecabilă a calculatorului pe care l-am achiziționat. Recomand cu încredere acest magazin tuturor pasionaților de tehnologie!',
    },
    {
      image: TestimonialImg03,
      name: 'Mihai Radulescu',
      user: '@mihaiR',
      link: '#0',
      content: 'Sunt extrem de mulțumit de experiența mea de cumpărare de la acest magazin online. Am primit un calculator personalizat care a depășit cu mult așteptările mele. Configurarea flexibilă și calitatea componentelor sunt remarcabile. Recomand cu încredere acest magazin tuturor celor care doresc un calculator personalizat de înaltă calitate.',
    },
    {
      image: TestimonialImg04,
      name: 'Ana Maria Costache',
      user: '@anaMC',
      link: '#0',
      content: 'Am achiziționat de curând un calculator personalizat de la acest magazin online și sunt foarte mulțumită de investiția mea. Performanța și fiabilitatea acestui sistem sunt deosebite. Recomand cu căldură acest magazin oricui caută soluții personalizate și de încredere în domeniul calculatoarelor.',
    },
  ]

const testimonials02 = [
    {
      image: TestimonialImg05,
      name: 'Cristina Ionescu',
      user: '@cristina_i',
      link: '#0',
      content: 'Recomand cu entuziasm acest magazin online de calculatoare personalizate! Am achiziționat de la ei un sistem care se potrivește perfect nevoilor mele de lucru intensiv și gaming. Calitatea componentelor și serviciul clienți excelent m-au convins să revin cu încredere pentru achiziții viitoare.',
    },
    {
      image: TestimonialImg06,
      name: 'Alexandru Dumitrescu',
      user: '@alex_d',
      link: '#0',
      content: 'Am fost impresionat de nivelul de personalizare și atenția la detalii oferite de acest magazin online de calculatoare personalizate. Calculatorul pe care l-am achiziționat este exact așa cum l-am dorit și performanța sa este excepțională. Recomand cu încredere acest magazin tuturor celor care caută soluții personalizate și fiabile în domeniul IT.',
    },
    {
      image: TestimonialImg07,
      name: 'Elena Gheorghe',
      user: '@elenaG',
      link: '#0',
      content: 'Achiziția mea de la acest magazin online de calculatoare personalizate a fost una dintre cele mai bune decizii pe care le-am luat. Configurarea flexibilă, calitatea componentelor și serviciul clienți impecabil m-au convins că am făcut alegerea corectă. Recomand cu căldură acest magazin tuturor celor interesați de soluții IT personalizate și de încredere.',
    },
    {
      image: TestimonialImg08,
      name: 'Dragos Mihai',
      user: '@dragosM',
      link: '#0',
      content: 'Experiența mea de cumpărare de la acest magazin online de calculatoare personalizate a fost foarte plăcută. Am primit exact ceea ce mi-am dorit și mai mult decât atât. Performanța și fiabilitatea calculatorului sunt remarcabile. Recomand cu încredere acest magazin tuturor celor care caută soluții IT de înaltă calitate și personalizate.',
    },
  ]


  return (
    <section className="bg-zinc-800">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">Review-urile ultimilor clienti</h2>
          </div>
        </div>
        <div className="max-w-[94rem] mx-auto space-y-6">
          {/* Row #1 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
          {/* Row #2 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]" aria-hidden="true">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div >
        </div >
      </div >
    </section >
  )
}