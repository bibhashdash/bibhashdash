import {ReactNode} from "react";

export const PageWrapper = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex h-full flex-col w-full pb-12">
      {children}
    </div>
  )
}
