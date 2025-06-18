import { Link } from "next-view-transitions";
import { formatDate } from "@/lib/utils";

function card(item) {
  return (
    <div className="list" key={item.link}>
      <Link
        href={item.link}
        target={item.external ? "_blank" : undefined}
        key={item.link}
      >
        <div className="list__row">
          <h4 className="list__title">{item.title}</h4>
          <div className="list__date">
            {item.publisher
              ? `${item.publisher} - ${item.date}`
              : formatDate(item.date)}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function List({ contents = [] }) {
  return <div>{contents.map(card)}</div>;
}
