import React, {useState} from 'react';

import './App.css';

function Card(props){
  return(
    <div className="card" style={props.top}>
      <div className="card-img-container">
        <img src={"./" + props.img}></img>
      </div>
      <h4>{props.header}</h4>
      <h5>{props.desc}</h5>
    </div>
  );
}

function ShortLink(props){
  return(
    <div className="link-container">
      <h4>{props.link}</h4>
      <div className="short-link-container">
        <h4>{'https://short.ly/'+props.shortLink}</h4>
        <a href="#">Copy</a>
      </div>
    </div>
  );
}

function App() {

  const [links, setLinks] = useState([]);
  const [linkValue, setLinkValue] = useState('');

  const shortenLink = () =>{
    console.log(linkValue);
    const random = Math.random().toString(36).substr(2, 5);
    const newLinksList = [...links, {link: linkValue, shortLink: random}]
    setLinks(newLinksList);

    console.log(links)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="navigation">
          <h1 className="">Shortly</h1>
          <div className="nav-links">
            <a href="#"><h4 className="mr-5 nav-link">Features</h4></a>
            <a href="#"><h4 className="mr-5 nav-link">Pricing</h4></a>
            <a href="#"><h4 className="mr-5 nav-link">Resources</h4></a>
          </div>
          <div className="nav-log-reg">
            <a href="#"><h4 className="nav-login">Login</h4></a>
            <a href="#"><span>Sign Up</span></a>
          </div>
          <i className="fas fa-bars menu"></i>
        </div>

        <div className="header">
          <div className="header-right">
            <h1 className="heading-text">More than just shorter links</h1>
            <p className="heading-kicker">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <div className="get-started-container">
              <a href="#" className="get-started"><span>Get Started</span></a>
            </div>
          </div>
          <div className="header-left">
            <div>
              <img src="./illustration-working.svg"></img>
            </div>
          </div> 
        </div>

        <div className="input-container-fluid">
          <div className="input-container">
            <input className="input" type="text" placeholder="Shorten a link here.." value={linkValue} onChange={(e)=>{setLinkValue(e.target.value)}}></input>
            <button className="input-button" onClick={() => shortenLink()}>Shorten it!</button>
          </div>
        </div>
      </div>
      <div className="container-gray">

        <div className="links-container">
          {
          links.map((link, index) =>
          <ShortLink link={link.link} key={index} shortLink={link.shortLink}/>
        )}
        </div>

        <div className="statistics-container">
          <h1>Advanced Statistics</h1>
          <h4>Track how your links are performing across the web kwith our advanced statistics board.</h4>
        </div>

        <div className="cards-container">
          <Card header="Brand Recognition" desc="Boost your brand recognition with each click. Generic links don't mean a thing. Brended links helllp instil confidlence in your content." img ="icon-brand-recognition.svg"/>
          <Card top={{marginTop: '2em'}} header="Detailed Records" desc="Gain Insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." img="icon-detailed-records.svg"/>
          <Card top={{marginTop: '4em'}} header="Full Customizable" desc="Improve brand awareness and content discoverability through comizable links, superchargning audience engagement" img="icon-fully-customizable.svg"/>
        </div>
      </div>

      <div className="boost-container">
        <h1>Boost your links today</h1>
        <a href="#">Get Started</a>
      </div>

      <div className="footer">
        <div className="footer-container">
          <div className="footer-column ">
            <h1>Shortly</h1>
          </div>
          <div className="footer-column">
            <h4>Features</h4>
            <a href="#">Link Shortening</a>
            <a href="#">Branded Links</a>
            <a href="#">Analytics</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Our Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-column footer-column-flex">
            <a href="#"><i className="fab fa-facebook-f icon"></i></a>
            <a href="#"><i className="fab fa-github icon"></i></a>
            <a href="#"><i className="fab fa-linkedin icon"></i></a>
            <a href="#"><i className="fab fa-instagram icon"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
