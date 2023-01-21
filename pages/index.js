import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomeComponent from "../src/components/home/HomeComponent";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeComponent />
    </>
  )
}
