import React from "react";
//import icons
import { Im500Px, ImTwitter, ImWhatsapp, ImTelegram, ImSkype } from "react-icons/im";

const Socials = () => {
    return (
        <div className="hidden xl:flex ml-24">
            <ul className="flex gap-x-4">
                <li>
                    <a href="https://500px.com/" target="_blank">
                        <Im500Px />
                    </a>
                </li>
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
                <li>
                    <a href="https://www.telegram.org/" target="_blank">
                        <ImTelegram />
                    </a>
                </li>
                <li>
                    <a href="https://www.skype.com/en/" target="_blank">
                        <ImSkype />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Socials;