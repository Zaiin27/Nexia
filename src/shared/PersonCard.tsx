import React from 'react';
import Image from 'next/image';

interface PersonCardProps {
  name: string;
  company: string;
  location: string;
  image: string;
  buttonText?: string;
  buttonHref?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  company,
  location,
  image,
  buttonText = "View Profile",
  buttonHref = "#"
}) => {
  return (
    <div className="bg-[#00323C] rounded-2xl shadow-lg overflow-hidden max-w-[330px] sm:max-w-[394px] min-h-[140px] sm:min-h-[160px]">
      <div className="flex h-full">
        {/* Image Section */}
        <div className="w-28 h-32 sm:w-32 sm:h-36 bg-gray-300 flex-shrink-0 m-3 rounded">
          <Image
            src={image}
            alt={name}
            width={128}
            height={144}
            className="w-full h-full object-cover rounded"
          />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 text-white p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{name}</h3>
            <p className="text-teal-200 text-sm sm:text-base mb-2">{company}</p>
            <p className="text-white text-sm sm:text-base">{location}</p>
          </div>
          
          <button className="bg-[#00b9b9] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-4xl text-sm sm:text-base font-medium hover:bg-transparent hover:text-[#00b9b9] hover:border hover:border-[#00b9b9] transition-colors mt-3 w-fit">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
