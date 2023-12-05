export interface ButtonMainProps {
  text: string,
  type: "filled" | "outlined",
  onClickButton: () => void,
}

export const ButtonMain = ({onClickButton, text, type}: ButtonMainProps) => {
  return (
    <button
      onClick={onClickButton}
      className={`${type === 'filled' ? 'bg-stone-600 text-gray-100' : 'bg-gray-100 text-stone-600 border-2 border-stone-600' } w-36 py-2 rounded-xl`}>
      { text }
    </button>
  )
}
