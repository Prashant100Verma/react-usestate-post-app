

const style = { width: 200, backgroundColor: "gray", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, margin: 5  }

export function PostComponent({name,  title, time, image, description}) {
  return <div style={style }> 
    <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div>{title}</div>
        {(time !== undefined) ? <div style={{display: 'flex'}}>
          <div>{time}</div>      
         
        </div> : null}
      </div>
    </div>
    <div style={{fontSize: 12}}>
     {description}
    </div>
 </div>
}