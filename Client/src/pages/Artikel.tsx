import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Article from '../../Server/src/models/article.model'; // Sesuaikan dengan path yang benar


const Artikel = () => {
  const [fetchedArticles, setFetchedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const newLocal = 'BASE_URL/articles';
        // Ganti BASE_URL dengan URL backend NestJS Anda
        const response = await fetch(newLocal);
        const data = await response.json();
        setFetchedArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className='w-full font-andika bg-white py-32 lg:py-50'>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
        <p className='text-md sm:text-[16px] text-white pl-4 sm:pl-[70px]'>
          Beranda &gt; Artikel
        </p>
      </div>
      <p className='sm:text-[36px] text-2xl sm:px-20 px-7 sm:py-10 pt-5 text-[#EF841A]'>
        Artikel
      </p>
      {fetchedArticles.map((article) => (
        <div key={article.id} className='sm:px-20 p-7 sm:flex'>
          <img
            src={article.image}
            alt='artikel'
            className='rounded-md w-[487.5px] h-[315.75px]'
          />
          <div className='sm:mx-10 pt-5'>
            <p className='text-gray-400 xl:text-[16px] text-xs'>
              {article.date}
            </p>
            <h3 className='sm:text-[32px] text-[25px] font-bold my-5'>
              {article.title}
            </h3>
            <p className='text-[15px] sm:text-[16px]'>
              {article.description}{' '}
              <Link to='Detailartikel' className='text-blue-400'>
                Baca selengkapnya
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artikel;
