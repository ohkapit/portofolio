import React from "react";
import MiniCard from "./mini-card";

export default function Skills() {
    const skillList = {
        programing: [
            { imageUrl: "./img/skills/komunikasi.png", title: "Komunikasi" },
            {
                imageUrl: "./img/skills/percayadiri.jpg",
                title: "Percaya Diri",
            },
            {
                imageUrl: "./img/skills/teamwork.jpg",
                title: "Team Work",
            },
             {
                imageUrl: "./img/skills/fleksibilitas.png",
                title: "Fleksibilitas",
            },
            {
                imageUrl: "./img/skills/kreatif.jpg",
                title: "Kreatif dan Inovatif",
            },
            {
                imageUrl: "./img/skills/adaptasi.png",
                title: "Adaptasi",
            },
        ],
        framework: [
            { imageUrl: "./img/skills/dm.jpg", title: "digital marketing" },
            { imageUrl: "./img/skills/cp.png", title: "content planning" },
            { imageUrl: "./img/skills/smm.png", title: "social media management" },
            { imageUrl: "./img/skills/da.png", title: "data analis" },
            { imageUrl: "./img/skills/cw.png", title: "copy writing" },
            { imageUrl: "./img/skills/mr.png", title: "market research" },
        ],
        others: [
            { imageUrl: "./img/skills/git.png", title: "git" },
            { imageUrl: "./img/skills/vs.png", title: "vs code" },
            { imageUrl: "./img/skills/netlify.png", title: "netlify" },
            { imageUrl: "./img/skills/mysql.png", title: "mysql" },
        ],
    };

    return (
        <div
            className="pb-5 overflow-x-hidden overflow-y-auto"
            style={{ height: "70vh" }}
        >
            <h3 className="mb-3 text-gray-500 dark:text-gray-300">
                [{skillList.programing.length}] Soft Skill
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillList.programing.map((el, index) => {
                    return (
                        <MiniCard
                            key={index}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    );
                })}
            </div>
            <h3 className="mb-3 text-gray-500 mt-10 dark:text-gray-300">
                [{skillList.framework.length}] Hard Skill
            </h3>
            <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillList.framework.map((el, idx) => {
                    return (
                        <MiniCard
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    );
                })}
            </div>
            <h3 className="mb-3 text-gray-500 mt-10 dark:text-gray-300">
                [{skillList.others.length}] Others
            </h3>
            <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillList.others.map((el, idx) => {
                    return (
                        <MiniCard
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    );
                })}
            </div>
        </div>
    );
}
