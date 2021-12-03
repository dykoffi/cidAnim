import React, { useState } from "react"
import { useSprings, animated } from 'react-spring'

import doc from '../../assets/images/doc.jpg'
import equip from '../../assets/images/equip.jpg'
import membres from '../../assets/images/membres.jpg'
import cel from '../../assets/images/cel.jpg'
import projets from '../../assets/images/projets.jpg'
import Membre from "../membres"

const index = () => {

    const menu = [
        {
            titre: "Equipes",
            desc: "Des troupeaux qui travaillent ensemble",
            img: equip,
            color: "#92737B"
        },
        {
            titre: "Projets",
            desc: "Des projets Innovants à forte valeur ajoutée",
            img: projets,
            color: "#C79755"
        },
        {
            titre: "Membres",
            desc: "Liste et descriptions des membres",
            img: membres,
            color: "#3955a3",
            page: <Membre />
        },
        {
            titre: "Documents",
            desc: "Références et documentations de nos équipes",
            img: doc,
            color: "#C5C9BE"
        },
        {
            titre: "Célébrations",
            desc: "Nos moments de joies et de célébrations",
            img: cel,
            color: "#31752f"
        }
    ]

    const [activeMenu, setActiveMenu] = useState(null)

    const springs = useSprings(menu.length, menu.map((m, i) => {
        if (activeMenu === null) {
            return ({
                flex: 2,
                filter: 'grayscale(40%)',
                opacity: 0,
                backgroundColor: m.color,
                color: "white",
                justifyContent: "center",
                config: { tension: 300 }
            })

        } else {
            if (i === activeMenu) {
                return ({
                    flex: 20,
                    filter: 'grayscale(30%)',
                    opacity: 0.95,
                    backgroundColor: m.color,
                    color: "white",
                    justifyContent: "center",
                    config: { tension: 700 }
                })
            } else {
                return ({
                    flex: 1,
                    filter: 'grayscale(90%)',
                    opacity: 0,
                    color: "transparent",
                    backgroundColor: m.color,
                    justifyContent: "center",
                    config: { tension: 400 }
                })
            }
        }
    }
    ))



    return (
        <div className="  flex flex-col md:flex-row justify-center items-center h-screen flex-nowrap">
            {
                springs.map((sp, i) =>
                    <animated.div
                        key={i}
                        style={{ ...sp, backgroundImage: `url(${menu[i].img})`, backgroundBlendMode: "multiply", opacity: 1 }}
                        className="
                        h-screen flex md:flex-col justify-end 
                        bg-center bg-no-repeat bg-cover overflow-hidden 
                        bg-opacity-70
                        filter"

                    >
                        <animated.div style={{ backgroundColor: sp.backgroundColor }} className={`p-0 2xl:py-10 md:py-20 px-5 opacity-75  flex flex-col justify-end flex-1 overflow-hidden select-none cursor-pointer`} onClick={() => {
                            let index = activeMenu === i ? null : i
                            setActiveMenu(index)
                        }}>
                            <span className="text-sm md:text-4xl font-bold">{menu[i].titre}</span>
                            <p className="text-xs md:text-lg">{menu[i].desc}</p>
                        </animated.div>
                        <animated.div className={`p-5 bg-white overflow-x-hidden`} style={{ opacity: sp.opacity, flex: sp.flex }}>
                            {menu[i].page}
                        </animated.div>
                    </animated.div>
                )
            }
        </div>
    )
}

export default index