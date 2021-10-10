import Link from 'next/link'

function card(item) {
  return (
    <Link href={item.link} key={item.link}>
      <a className="row list" target="_blank">
        <div className="column right">
          <div className="list__thumbnail" style={{ backgroundImage: `url(${item.image})` }} />
        </div>
        <div className="column left">
          <div>
            <div className="list__title">{item.title}</div>
            <div className="list__sub">{item.subtitle}</div>
            <div className="list__date">{item.date} - {item.time}min read</div>
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


