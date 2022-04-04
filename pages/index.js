import { server } from '../config'
import Head from 'next/head' //Head can be used for meta tags or keywords
import ArticleList from '../components/ArticleList'
export default function Home({articles}) {
  
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming"/>
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

//Three Methods to fetch data
// - Get Static Props which will allow us to fetch at build
// - Get Server Side Props which on every request
// - Get Static Paths to generate dynamic pathes based on the data we are fetching