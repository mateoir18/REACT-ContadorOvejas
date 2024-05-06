export const SheepList = ({tamaño}) => {
    const ovejas = Array(tamaño).fill(
        "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"
      );
  return (
    <>
    <div>{ovejas.map((oveja, index)=>(<img key={index} src={oveja} alt="" />))}</div>
    </>
  )
}
