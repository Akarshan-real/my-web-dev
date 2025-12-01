import "./Card.css"
const Card = ({info}) => {
  return (
    <div className="outerBox">
      <h3 className="title w-fit">{`Title : ${info.title}`}</h3>
      <div className="idContainer flex items-center gap-1.5">
        <span>{`User Id : ${info.userId}`}</span>
        <span>{`Id : ${info.id}`}</span>
      </div>
      <p className="max-w-[40vw]">{`Description : ${info.body}`}</p>
    </div>
  )
}

export default Card