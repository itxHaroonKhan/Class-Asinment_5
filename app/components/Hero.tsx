import Image from "next/image";

const Hero = () => {
  return (
    <>
    <section className='flex'>
        <div className='w-1/2'>
        <div className="mt-[170px] h-[189px]  ml-[65px] text-[40px] font-serif font-semibold">
  IMPECCABLE CRAFTSMANSHIP AND FINESSE
</div>
<div className="w-[800px] h-[147px] ml-[61px] font-[500px] text-[30px] tracking-[0.025em] text-[#787054] font-['Libre_Bodoni']">
An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
</div>
<button className="bg-[#A29875] text-[30px] font-['Libre_Bodoni'] p-[10px] ml-16 rounded text-white h-[58px] w-[288px] mt-4 flex justify-center">
  Explore Now
</button>



        </div>
        <div className="flex ml-52 mr-8 mt-14">
      <Image src="/image/rs-group-wrap ⏵ rs-group.svg" alt="Apna" width={442} height={611}
        />

    </div>
    
    </section>
    </>
  );
}

export default Hero;
