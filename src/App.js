import React, {useState, useEffect} from 'react';
import ResponsiveMenu from 'react-responsive-navbar';

import './App.css';
import Cookies from 'universal-cookie';

function Card(props){
  return(
    <div className={'card ' + props.custom}>
      <div className="card-img-container">
        <img alt="card-img" src={"./" + props.img}></img>
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
        <a className="copy-link" onClick={props.onClickCopy}>Copy</a>
        <a className="delete-link" onClick={props.onClick}>X</a>
      </div>
    </div>
  );
}

function App() {

  const [links, setLinks] = useState([]);
  const [linkValue, setLinkValue] = useState('');
  const [linkEmpty, setLinkEmpty] = useState(false);

  const cookies = new Cookies();
  var classnames = require('classnames');

  useEffect(() => {

    const getCookies = cookies.get('linkList');

    console.log("cookies : " + JSON.stringify(getCookies))
    if(getCookies === undefined){
      console.log("There is nothing!")
      setLinks([])
    }else{
      console.log("there is something!")
      setLinks(getCookies)
    }
    
  }, [])

  const copyLink = (link) =>{
    navigator.clipboard.writeText('https://short.ly/'+link);
  }

  const removeLink = (index) =>{

    let d = new Date();
    d.setTime(d.getTime() + (60*60*1000));

    const newLinksList = [...links];
    newLinksList.splice(index, 1);
    setLinks(newLinksList);
    cookies.set('linkList', newLinksList, {path: '/' , expires: d})

  }

  const shortenLink = () =>{
    if(linkValue === ""){
      setLinkEmpty(true);
    }else{
      console.log("Before : "+links)

      let d = new Date();
      d.setTime(d.getTime() + (60*60*1000));

      const random = Math.random().toString(36).substr(2, 5);
      const newLinksList = [...links, {link: linkValue, shortLink: random}]
      setLinks(newLinksList);
      cookies.set('linkList', newLinksList, {path: '/' , expires: d})
    }
  }

  return (
    <div className="App">
      <div className="container">
        <ResponsiveMenu
          menuOpenButton={
          <div className="mobile-navbar">
            <h1 className="">Shortly</h1>
            <i className="fas fa-bars menu"></i>
          </div>
        }
          menuCloseButton={
            <div className="mobile-navbar">
            <h1 className="">Shortly</h1>
            <i className="fas fa-times menu"></i>
          </div>
        }
          changeMenuOn="1130px"
          largerMenuClassName="navigation-desktop"
          smallMenuClassName="navigation-mobile"
          menu={
            <ul className="navigation">
              <li><h1 className="desktop-logo">Shortly</h1></li>
              <div className="nav-links-container">
                <ul className="nav-links">
                  <a href="#"><li className="mr-5 nav-link">Features</li></a>
                  <a href="#"><li className="mr-5 nav-link">Pricing</li></a>
                  <a href="#"><li className="mr-5 nav-link">Resources</li></a>
                </ul>
                <hr className="mobile-hr"/>
                <ul className="nav-log-reg">
                  <a href="#"><li className="nav-login">Login</li></a>
                  <a href="#"><li className="register-button">Sign Up</li></a>
                </ul>
              </div>
            </ul>
          }
        />
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
              <img alt="illustration" src="./illustration-working.svg" className="header-img"></img>
            </div>
          </div> 
        </div>

        <div className="input-container-fluid">
          <div className="input-container">
            <div className="form-container">
            <input className={classnames({ 'input' : true, 'input-red' : linkEmpty})} type="text" placeholder="Shorten a link here.." value={linkValue} onChange={(e)=>{setLinkValue(e.target.value)}}></input>
            <button className="input-button" onClick={() => shortenLink()}>Shorten it!</button>
            </div>
            <p className={linkEmpty ? 'empty-link' : 'full-link'}>Please add a link</p>
          </div>
        </div>
      </div>
      <div className="container-gray">

        <div className="links-container">
          {
            links ? 
              links.map((link, index) =>
              <ShortLink link={link.link} key={index} shortLink={link.shortLink} onClick={() =>{removeLink(index)}} onClickCopy={() => {copyLink(link.shortLink)}}/>
              ) : null
              }
        </div>

        <div className="statistics-container">
          <h1>Advanced Statistics</h1>
          <h4>Track how your links are performing across the web kwith our advanced statistics board.</h4>
        </div>

        <div className="cards-container">
          <Card header="Brand Recognition" desc="Boost your brand recognition with each click. Generic links don't mean a thing. Brended links helllp instil confidlence in your content." img ="icon-brand-recognition.svg"/>
          <Card custom="mt-6" header="Detailed Records" desc="Gain Insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." img="icon-detailed-records.svg"/>
          <Card custom="mt-6" header="Full Customizable" desc="Improve brand awareness and content discoverability through comizable links, superchargning audience engagement" img="icon-fully-customizable.svg"/>
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
