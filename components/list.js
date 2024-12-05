import { Link } from "next-view-transitions"

function card(item) {
  return (
    <div className="list" key={item.link}>
      <Link href={item.link} key={item.link}>
        <h4 className='list__title'>{item.title}</h4>
        <div className="list__date">{item.date} - {item.time} min read</div>
      </Link>
    </div>
  )
}

export default function List(props) {
  return (
    <div>
      {props.contents.map(card, this)}
    </div>
  )
}