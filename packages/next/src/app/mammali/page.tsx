'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'

export default function Mammali() {
  const endTime = new Date('2025-06-12T08:00:00Z').getTime()
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [remainingTime, setRemainingTime] = useState(endTime - currentTime)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setRemainingTime(endTime - currentTime)
  }, [currentTime, endTime])

  setInterval(() => {
    setCurrentTime(Date.now())
  }, 1000)

  function formatRemainingTime(remainingTime: number) {
    const days = Math.floor(remainingTime / 86400000)
    const hours = Math.floor(remainingTime / 3600000) % 24
    const minutes = Math.floor(remainingTime / 60000) % 60
    const seconds = Math.floor(remainingTime / 1000) % 60
    let counter = ''

    if (days > 0) {
      const dayString = days === 1 ? `${days} day` : `${days} days`
      counter = dayString
    }

    const hourString = hours < 10 ? `0${hours}` : hours.toString()
    const minuteString = minutes < 10 ? `0${minutes}` : minutes.toString()
    const secondString = seconds < 10 ? `0${seconds}` : seconds.toString()
    const timeString = `${hourString}:${minuteString}:${secondString}`
    counter =
      counter.length > 0 ? counter.concat(' and   ', timeString) : timeString

    return counter
  }

  return (
    <>
      <h1 className={styles.counter}>
        {isClient && formatRemainingTime(remainingTime)}
      </h1>
    </>
  )
}
