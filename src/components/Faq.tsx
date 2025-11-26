import { useState } from "react"
import PlusIcon from "./icons/PlusIcon.tsx"
import MinusIcon from "./icons/MinusIcon.tsx"

type FaqProps = {
  faq: {
    q: string
    a: string
  }
}

const iconStyles = {
  height: 31,
  fill: 'var(--color-purple-accent)'
}

export default function Faq({ faq }: FaqProps) {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <details open={isVisible}>
      <summary
        className="
          flex justify-between items-center gap-2
				  cursor-pointer
				text-purple-950 hover:text-purple-accent
				  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-100"
          onClick={(e) => {
            e.preventDefault()       
            setIsVisible(prev => !prev)
          }}>
            
        <p className="font-bold my-4">{faq.q}</p>
        <span className="flex-none">    
          {isVisible 
            ? <MinusIcon {...iconStyles} fill= "var(--color-purple-950)" />
            : <PlusIcon {...iconStyles} />
          }
        </span>
      </summary>
      <p className="text-purple-600 text-base mb-4">{faq.a}</p>
    </details>
  )
}
