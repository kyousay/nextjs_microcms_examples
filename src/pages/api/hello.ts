import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
	if(!req.query.test) {
		res.status(400).json({ err: 'Qeury param に　test がありません！'});
	}
	res.status(200).json({ name: "Takepepe" });
}