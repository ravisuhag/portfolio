import { Link } from "next-view-transitions";
import { formatDate, formatReadingTime } from "@/lib/utils";

function card(item) {
	return (
		<div className="list" key={item.link}>
			<Link href={item.link} key={item.link}>
				<h4 className="list__title">{item.title}</h4>
				<div className="list__date">
					{formatDate(item.date)} -{" "}
					{formatReadingTime(item.time || item.readingTime)}
				</div>
			</Link>
		</div>
	);
}

export default function List(props) {
	return <div>{props.contents.map(card, this)}</div>;
}
