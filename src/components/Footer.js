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
                <FontAwesomeIcon icon={faCircle} style={{ color: "red" }} />
                <FontAwesomeIcon
                icon={object.code}
                style={{ color: "white"}}
                transform={"shrink-7"}
                />
            </span>
        </a>
    ));
    return(
    <footer className="bg-gray-300 flex flex-col items=center justify-between h-auto px-12 py-5">
        <div>
            <h1>Contact</h1>
            <p>DOMITVO</p>
            <p>domitvo@outlook.com</p>
            <p>Bankrekeningnummer</p>
        </div>
        <div className="flex justify-center items-center my-5">
            {socialMediaIcons}
        </div>
    </footer>

    )
};