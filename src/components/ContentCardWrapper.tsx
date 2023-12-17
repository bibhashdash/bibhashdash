import React from "react";
import {CloseIcon} from "@/components/CloseIcon";

interface ContentCardWrapperProps {
  title: string,
  imageSource: string,
  children: React.ReactNode,
  onClickCloseButton?: () => void,
}

export const ContentCardWrapper = ({title, imageSource, children, onClickCloseButton}: ContentCardWrapperProps) => {
  return (
     <div className="flex flex-col items-center justify-start w-full px-4 md:px-12 md:gap-6 h-full">
       <div className="w-full flex justify-between">
         <p className="w-full text-lg text-center md:text-left font-bold">{title}</p>
         {
           onClickCloseButton && (
             <div onClick={onClickCloseButton} className="cursor-pointer">
               <CloseIcon />
             </div>
           )
         }
       </div>
       <div className="flex flex-col items-center lg:grid lg:grid-cols-12 gap-4 justify-center">
         <img src={imageSource} className="w-full rounded-lg col-span-6"/>
         <div className="text-sm h-full col-span-6">
           {children}
         </div>
       </div>
     </div>
  )
}
