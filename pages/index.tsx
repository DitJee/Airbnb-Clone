import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactChild, ReactFragment, ReactPortal } from 'react'
import { addAbortSignal } from 'stream'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard, { SmallCardData } from '../components/SmallCard'
import SmallCardHolder from '../components/SmallCardHolder'

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  )
  // var fetchedData = await fetch("https://links.papareact.com/pyp")
  // const exploreData = await fetchedData.json()

  return {
    props:{
      exploreData:exploreData
    },
  }
}


export type exploreData = {
  exploreData: SmallCardData[];
}

export default function Home(props: exploreData){
 
  return (
    <div className="4er">
      <Head>
        <title>Jee's App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-4xl mx-auto px-8 sm:px-16'>
        <section className = "pt-4">
          <SmallCardHolder exploreData={props.exploreData}/>
        </section>
      </main>
    </div>
  )
}

