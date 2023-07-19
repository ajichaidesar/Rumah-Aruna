import React from "react";
import { artikel1 } from "../assets/img/galery/index";

const Sekolah = () => {
  return (
    <div className="w-full bg-white  py-32 lg:py-50   ">
      <div></div>
      <div className="bg-[#EF841A] w-full p-3  mt-[-24px] ">
        <p className="text-md">Beranda &gt; Rumah Aruna &gt; Program Kami </p>
      </div>
      <div className="xl:p-20 p-5 xl:flex ">
        <img src={artikel1} alt="artikel1" className="xl:w-1/2  rounded-xl" />
        <div className="xl:mx-10">
          <h3 className="xl:text-2xl mt-5  text-xl font-bold">Sekolah Anak</h3>
          <p className="xl:text-2xl text-xl my-5">3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak</p>
          <hr />
          <p className="xl:text-2xl text-xl my-5">3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak</p>
          <hr />
          <p className="xl:text-2xl text-xl my-5">3 Metode Pembelajaran PAUD dan Manfaatnya untuk Perkembangan Anak</p>
        </div>
      </div>
      <div className="px-10  xl:w-1/2 justify-text-center">
        <h3 className="xl:text-3xl text-xl  font-bold">Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya</h3>
        <p className="my-3 ">05 April, 2023</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
          eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
          ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
          eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
          ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </div>
    </div>
  );
};

export default Sekolah;
