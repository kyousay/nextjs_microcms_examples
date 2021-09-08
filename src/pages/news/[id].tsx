import { useRouter } from "next/router"

export default function News () {
	const router = useRouter();
	return (
		<span>News {`${router.query.id}`}</span>
	)
}