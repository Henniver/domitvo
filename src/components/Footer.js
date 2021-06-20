import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const fontawesomeCodes = [
    { code: faLinkedinIn, url: "/link/linkedin" },
    { code: faFacebookF, url: "/link/facebook" },
    { code: faInstagram, url: "/link/instagram" },
    ];

    const socialMediaIcons = fontawesomeCodes.map((object, idx) => (
        <a 
            href={object.url} 
            key={idx} target="_blank" 
            rel="noreferrer"
            className="hover:opacity-50"
        >
            <span className="fa-layers fa-fw fa-3x">
                <FontAwesomeIcon icon={faCircle} style={{ color: "#A41912" }} />
                <FontAwesomeIcon
                icon={object.code}
                style={{ color: "white"}}
                transform={"shrink-7"}
                />
            </span>
        </a>
    ));
    return(
    <footer className="bg-gold flex flex-col items=center text-white justify-between h-auto px-12 py-3">
        <div>
            <h1>Contact</h1>
            <p>domitvo@outlook.com</p>
            <p>DOMITVO - BE26 0637 0978 7229</p>
        </div>
        <div className="flex justify-center items-center mt-3">
            {socialMediaIcons}
        </div>
    </footer>

    )
};