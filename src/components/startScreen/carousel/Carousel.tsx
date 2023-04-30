import { faBackward, faCircle, faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import style from './Carousel.module.scss'

interface CarouselProps {
  children: Array<ReactNode>
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const updateCarouselIndex = (newIndex: number) => {
    if (newIndex >= children.length) setActiveIndex(0)
    else if (newIndex < 0) setActiveIndex(children.length - 1)
    else setActiveIndex(newIndex)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) updateCarouselIndex(activeIndex + 1)
    }, 3000)

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  })

  const indicatorArray: Array<ReactNode> = Array.from({ length: children.length }, (_, i) => {
    const isActiveElement = i === activeIndex ? style.active : ''
    return (
      <button
        className={`${style.indicator} ${isActiveElement}`}
        data-index={i}
        onClick={() => updateCarouselIndex(i)}
        key={i}
      >
        <FontAwesomeIcon className={style.faIcon} icon={faCircle} />
      </button>
    )
  })

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => updateCarouselIndex(activeIndex + 1),
    onSwipedRight: () => updateCarouselIndex(activeIndex - 1)
  })

  return (
    <div
      {...swipeHandlers}
      className={style.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={style.inner} style={{ transform: `translateX(${activeIndex * -100}%)` }}>
        {children}
      </div>
      <div className={style.carouselIndicators}>
        <button onClick={() => updateCarouselIndex(activeIndex - 1)}>
          <FontAwesomeIcon className={style.faIcon} icon={faBackward} />
        </button>
        {indicatorArray}
        <button onClick={() => updateCarouselIndex(activeIndex + 1)}>
          <FontAwesomeIcon className={style.faIcon} icon={faForward} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
