import React from "react";
import { ImTwitter, ImWhatsapp, ImSkype } from "react-icons/im";

const Socials = () => {

    return (
        <div className="hidden xl:flex ml-24">
            <ul className="flex gap-x-4">
                <li>
                    <a href="https://www.twitter.com" target="_blank">
                        <ImTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://www.whatsapp.com/" target="_blank">
                        <ImWhatsapp />
                    </a>
                </li>
                {/* <li>
                    <label>
                        <FaRegUserCircle />
                    </label>
                    <input onChange={changeHandler} />
                </li> */}
            </ul>
        </div>
    );
}

export default Socials;