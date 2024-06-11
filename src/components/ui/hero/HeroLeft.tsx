import { FC } from "react";

const HeroLeft: FC = () => {
  return (
    <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40'>
      <h1 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl'>
        Top Fashion for the top price
      </h1>
      <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        laudantium recusandae, aperiam quisquam non maxime vel consequuntur
        dolores reprehenderit, consequatur voluptatum sit minus sunt libero.
      </p>
    </div>
  );
};

export default HeroLeft;
