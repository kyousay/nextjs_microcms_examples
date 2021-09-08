import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@/components/atoms/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Button />
	  <img src='/' alt='' />
    </div>
  )
}
