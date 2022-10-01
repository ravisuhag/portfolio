import Link from 'next/link'

function card(item) {
  return (
    <Link href={item.link} key={item.link}>
      <a className="row list">
        <div className="column">
          <div>
            <h4>{item.title}</h4>
            <div className="list__sub">{item.subtitle}</div>
            <div className="list__date">{item.date} - {item.time} min read</div>
          </div>
        </div>
      </a>
    </Link >
  )
}

export default function List(props) {
  return (
    <div>
      {props.contents.map(card, this)}
    </div>
  )
}


