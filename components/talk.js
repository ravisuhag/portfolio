import Link from 'next/link'

function card(item) {
  return (
    <div className="list" key={item.link}>
      <Link href={item.link} target='_blank'>
        <h4 className='list__title'>{item.title}</h4>
        <div className="list__date">{item.publisher} - {item.date}</div>
      </Link>
    </div >
  )
}

export default function Videos(props) {
  return (
    <div>
      {props.contents.map(card, this)}
    </div>
  )
}


