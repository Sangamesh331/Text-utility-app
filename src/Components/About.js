import React, {useState} from "react"

export default function About(props) {
      const [myStyle, setMystyle] = useState({
        color: 'white',
        backgroundColor: 'grey'
    })


   const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMystyle({
                color: 'grey',
                backgroundColor: 'white',
                border: '1px solid black' 
            })
        }
        else{
            setMystyle({
                color: 'white',
                backgroundColor: 'grey',
                border: '1px solid white'
        })
    }
    }
  return (
    <div className = "container" style={props.mode}>
        <h1 className='my-4'>This is about us</h1>
      <div className="accordion" id="accordionExample" style={props.mode}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={props.mode} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={props.mode}>
        <strong>Hello NERDS!!!</strong> This is a portfolio of a nerd who is a mechanical engineer and tryin to learn coding, yes the irony in this is actually what you have been thinking. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={props.mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={props.mode}>
        <strong>Holy moly!! you guys clicked more about me</strong> eyy! i ont have stuff to express my feelings buddd, yeah thats all i can say and thats all the cheddar i have left, hehehe <code>.accordion-body</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={props.mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={props.mode}>
        <strong>Dang you wanna know more</strong> okay let me start, do you know that french fries where actually not made in france..... <code>.accordion-body</code>, Preeee any order for us your highness, hahahahaha.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
