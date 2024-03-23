const Businesscard = ({props})=>{
    return(
    <div id="card">
      <h1 id="name">{props.name}</h1>
      <p id="description">{props.description}</p>
      <h3 id="interest">{props.interestheader}</h3>
      <ul>
        {props.interests.map((interest)=>(
          <li key = {interest}>  {interest}</li>
        ))}
      </ul>
      <h4>Imp Link</h4><br />
      <div id="sociallink">
        <a id="link" href={props.linkedin}>Linkedin</a><br />
        <a id="link" href={props.instagram}>Instagram</a><br />
      </div>
    </div>
    )
}

export default Businesscard;

