import { client } from '@/utils/client'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  const data = await client
  .get({
    endpoint: 'article',
  });
  return { props: { data }}
}

// export const getStaticProps = () => {

// }

// export const getStaticPaths = () => {

// }

export default function Home(props: any) {
  console.log(props);
  return (
    <div className={styles.container}>
      {props.data.contents.map((content: any, index: number) => (<p key={index}>{content.title}</p>))}
    </div>
  )
}
