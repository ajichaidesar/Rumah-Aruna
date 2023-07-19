import React from 'react';
import Tabelkurikulum2 from './Tabelkurikulum2';

const Tabelkurikulum = () => {
  const data = [
    {
      classType: 'Konvensional',
      firstParagraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi.',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi.',
      ],
    },
  ];

  return (
    <div className='font-andika'>
      <div className='text-sm px-5'>
        <p>
          {data.map((item, index) => (
            <span key={index}>
              {index !== 0 && <br />}
              {item.firstParagraph}
            </span>
          ))}
        </p>
      </div>
      <div className='flex mt-5 px-5 sm:mr-[150px]'>
        {data.map((item, index) => (
          <div key={index}>
            <div
              className={`bg-[#3BB3C3] text-md text-center p-2 ${item.classType
                .toLowerCase()
                .replace(/\s/g, '-')}`}
            >
              <h3>{item.classType}</h3>
            </div>
            <div className='space-y-2 text-xs'>
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  className={`bg-[#E7FCFF] pt-2 px-2 sm:px-5`}
                  key={paragraphIndex}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
        <Tabelkurikulum2 />
      </div>
    </div>
  );
};

export default Tabelkurikulum;
