import { client } from '@/utils/client';
import type { GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	const contentId = ctx.query.id;
// 	if(typeof contentId !== 'string') {
// 		throw Error('invalid query');
// 	}
// 	const data = await client
// 	.get({
// 	  endpoint: 'article',
// 	  contentId: contentId,
// 	});
// 	return { props: { data }}
// }

export const getStaticProps: GetStaticProps = async (ctx) => {
	const contentId = ctx.params?.id;
	if(typeof contentId !== 'string') {
		throw Error('invalid query');
	}
	const data = await client
	.get({
	  endpoint: 'article',
	  contentId: contentId,
	});
	return { props: { data } }
}

export const getStaticPaths: GetStaticPaths = async(ctx) => {
  return { paths: [], fallback: true }
}


export default function Page(props: any) {
  const router = useRouter();
  if(router.isFallback) {
	  return null;
  }
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.data.body }}/>
    </div>
  )
}