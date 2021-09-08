import { client } from '@/utils/client';
import type { GetStaticProps } from 'next';
import Link from 'next/link'

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	const data = await client
// 	.get({
// 	  endpoint: 'article',
// 	});
// 	return { props: { data }}
// }

export const getStaticProps: GetStaticProps = async (ctx) => { 
	const data = await client
	.get({
		endpoint: 'article',
	});
	return { props: { data }, revalidate: 30}
}


export default function Articles(props: any) {
  return (
    <div>
      {props.data.contents.map((content: any) => (
		  <div key={content.id}>
			<Link href={`/articles/${content.id}`} passHref>
				<a key={content.id}>{content.title}</a>
			</Link>
		  </div>
		  ))}
    </div>
  )
}
