import React from 'react';
const data = [
  {
    title: 'Konvesional',
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

const Tabelkurikulum2 = () => {
  return (
    <div className='font-andika'>
      {data.map((item, index) => (
        <div key={index}>
          <div className='bg-[#EF841A] text-md text-center p-2'>
            <h3>{item.title}</h3>
          </div>
          <div className='space-y-2 text-xs'>
            {item.paragraphs.map((paragraph, idx) => (
              <p key={idx} className='bg-[#FFF5EC] pt-2 px-2 sm:px-5'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabelkurikulum2;
