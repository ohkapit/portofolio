import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div
            className="pb-5 overflow-x-hidden overflow-y-auto"
            style={{ height: "70vh" }}
        >
            <div className="flex justify-center mb-5">
                <img
                    src="./img/profil.jpg"
                    className="w-48 rounded border-2 border-gray-800 dark:border-white"
                />
            </div>
            <div className="mb-2 font-medium dark:text-white">
                <FontAwesomeIcon
                    className="mr-2 inline-block"
                    style={{ maxWidth: "1.33em" }}
                    icon={faInfoCircle}
                />
                About Me
            </div>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
               Halowww, nama saya Kafit Mustofa.Lulusan S1-Sarjana Komputer
                yang menyukai dunia digital. saya memiliki pengalaman sebagai 
                Social Media Specialist,Content Creator dan Digital arketing. 
                Rasanya luar biasa melihat diri saya berkembang, dan saya berharap 
                dapat terus berkembang dan menjadi lebih baik dari sekarang.
            </p>
        </div>
    );
}
