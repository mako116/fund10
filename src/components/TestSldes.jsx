import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const testimonials = [
  { id: 1, imageSrc: '/path/to/image1.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper'},
  { id: 2, imageSrc: '/path/to/image2.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper'},
  { id: 3, imageSrc: '/path/to/image3.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper' },
  { id: 4, imageSrc: '/path/to/image4.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper' },
  { id: 5, imageSrc: '/path/to/image5.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper' },
  { id: 6, imageSrc: '/path/to/image6.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper'},
  // Add more testimonials as needed
];

const Testimonials = () => {
  const controls = useAnimation();

  const animateSlider = async () => {
    while (true) {
      await controls.start({ x: '-200%', transition: { duration: 20, ease: 'linear' } }); // Adjust duration as needed
      await controls.start({ x: '0%', transition: { duration: 0 } }); // Instant jump to start
    }
  };

  useEffect(() => {
    animateSlider();
  }, []);

  return (
    <div className="relative test_size overflow-hidden ">
      <motion.div
        className="flex  absolute w-full"
        animate={controls}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0 lg:w-[500px] w-full mx-[20px] lg:mx-[40px]">
            <div className="lg:px-[40px] px-[10px] py-[10px] lg:py-[30px] bg-gradient-to-r shadowedin border-[#000] from-linear1 to-linear2 lg:w-[444.8px] w-[200px] h[100px] lg:h-full rounded-[19.93px] border-[1.51px]">
              <h3 className="lg:text-[26.43px] text-[16px] leading-[19px] lg:leading-[36.71px] font-semibold mb-2 ">{testimonial.heading}</h3>
              <div className="flex gap-[10px] lg:gap-[30px] mt-[10px] lg:mt-[40px]">
              <img src={testimonial.imageSrc} alt={`Testimonial ${testimonial.id}`} className="lg:w-[79.47px] w-[30px] lg:h-[79.47px] h-[30px] border-[2.85px] object-contain rounded-full shadow mb-4" />              
              <div className="flex flex-col gap-[5px] lg:w-[154px] w-full h-full lg:h-[48px]">
               <h5 className=" font-semibold text-[15px] leading-[15px] lg:text-[17.88px] lg:leading-[23.58px]">{testimonial.names}</h5>
               <p className="font-normal text-[11px] lg:text-[17.88px] leading-[23.58px]">{testimonial.text}</p>
              </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;