import React from 'react'
import BannerImage from '@/assets/images/collectionBanner/mensCollectionBanner.png'
import Image from 'next/image'

const CollectionBanner = () => {
  return (
    <>
      <div className='relative'>
        <Image src={BannerImage} alt='mensCollectionBanner' className=' min-h-[149px] object-cover rounded-2xl lg:rounded-4xl' />
        <div className="text-[var(--color-light-gray)] flex flex-col max-w-[95%] absolute bottom-[10%] left-[10px] lg:left-[20px] lg:bottom-[20%] lg:max-w-[49%] xl:max-w-[40%] lg:gap-2">
          <h4 className="h6 lg:h4">Limited time only</h4>
          <h1 className="lg:section-heading text-2xl">Get 30% off</h1>
          <h6 className="lg:p leading-[100%] text-[12px]">
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </h6>
        </div>
      </div>
    </>
  );
}

export default CollectionBanner