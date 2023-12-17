import React from "react";

interface ContentCardWrapperProps {
  title: string,
  imageSource: string,
  children: React.ReactNode
}

export const ContentCardWrapper = ({title, imageSource, children}: ContentCardWrapperProps) => {
  return (
     <div className="flex flex-col items-center justify-start w-full px-4 md:px-12 md:gap-6">
       <p className="w-full text-lg text-center md:text-left font-bold">{title}</p>
       <div className="flex flex-col items-center lg:grid lg:grid-cols-12 gap-4 justify-center">
         <img src={imageSource} className="w-full sm:px-8 rounded-lg col-span-6"/>
         <div className="text-sm h-full col-span-6">
           {children}
         </div>
       </div>
     </div>
  )
}
