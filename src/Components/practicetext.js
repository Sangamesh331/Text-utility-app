const removeBodyclasses = ()=>{
    document.body.classList.remove ('bg-light')
    document.body.classList.remove ('bg-dark')
    document.body.classList.remove ('bg-warning')
    document.body.classList.remove ('bg-danger')
    // document.body.classList.remove ('bg-success') all these will go in app js when switching between colors for a website 
    const toggleMode = (cls)=>{
        removeBodyclasses();
        console.log(cls)
        // document.body.classList.add ('bg-' + cls) even these 


        // The upcoming stuff will all go in navbar
        <div className='d-flex'>
<div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'20px', width:'20px', cursor: 'pointer'}}></div>
<div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'20px', width:'20px', cursor: 'pointer'}}></div>
<div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'20px', width:'20px', cursor: 'pointer'}}></div>
<div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'20px', width:'20px', cursor: 'pointer'}}></div>
</div>

<div className="form-check form-switch text-dark">
  <input className="form-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>  
    




    style={{marginRight: spacing + 'em'}}

























