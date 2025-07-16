import Image from "next/image";

interface campProps{
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined} : campProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat
    lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-[color:#30AF5B] p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          {/*59.53*/}
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container relative flex flex-col
    py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
      overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage="bg-[url('/img-1.png')]"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite/>
      </div>
      
    </section>
  )
}

export default Camp