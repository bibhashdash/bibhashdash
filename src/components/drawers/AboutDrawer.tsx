interface AboutDrawerProps {
  isOpen: boolean,
  onClickClose: () => void,
}

export const AboutDrawer = ({onClickClose, isOpen}: AboutDrawerProps) => {
  return (
    <div className="bg-gray-50 py-4 px-4 h-full w-full"
         style={{
           transform: `translateY(${isOpen ? 0 : 100}%)`,
           transition: 'transform 0.5s ease-in-out',
           position: 'fixed',
           top: 0,
           right: 0,
           height: '100vh',
           width: '100vw',
           zIndex: 1000,
         }}
    >
      <div className="flex justify-between">
        <h1 className="font-display">About</h1>
        <p onClick={onClickClose}>X</p>
      </div>
    </div>
  )
}
