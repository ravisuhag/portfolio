import Link from 'next/link'
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?showinfo=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

function card(item) {
  return (
    <div className="row list videos" key={item.link}>
      {/* <div className="column right">
        <YoutubeEmbed embedId={item.embed} />
      </div> */}
      <div className="column">
        <Link href={item.link}>
          <a target="_blank">
            <div className="list__title">{item.title}</div>
            <div className="list__sub">{item.subtitle}</div>
            <div className="list__date">{item.publisher} - {item.date}</div>
          </a>
        </Link>
      </div>
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


