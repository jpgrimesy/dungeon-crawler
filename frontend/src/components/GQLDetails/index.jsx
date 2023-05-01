import { useState, useEffect } from "react";
import getDetails from "../../GraphQL/Queries";

function GQLDetails(props) {
    const { data, loading, error } = getDetails(props.race, props.class)
    const [details, setDetails] = useState()

    useEffect(() => {
        setDetails(data)
    }, [data])

    if(loading) {
        return (
            <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div class="border-t-transparent border-solid animate-spin  rounded-full border-red-400 border-8 h-64 w-64"></div>
            </div>
        )
    }

    return (
        <>
        <div class="rounded-xl bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md max-sm:px-8">
            <p className="text-4xl text-white text-center mt-40">{props.character.name}</p>
            <p className="text-2xl text-white text-center mb-10">{details && <>{details.race.name} {details.class.name}</>}</p>
        </div>
        <section className="antialiased  text-gray-600 px-4 mb-10">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-3">
                        <div className="">
                            <table className="table-auto w-full">
                                <thead className="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Dexterity</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Constitution</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Strength</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Wisdom</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Intelligence</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Charisma</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div className="font-medium text-gray-800">{props.character.dex} </div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div className="font-medium text-gray-800">{props.character.con}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div className="font-medium text-gray-800">{props.character.str}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div className="font-medium text-gray-800">{props.character.wis}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div className="font-medium text-gray-800">{props.character.int}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div className="font-medium text-gray-800">{props.character.cha}</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="flex justify-evenly w-full">
            <section className="antialiased  text-gray-600 px-4">
                <div className="flex flex-col justify-center w-full h-full">
                    <div className=" mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="">
                                <table className="table-auto w-full">
                                    <thead className="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Ability Bonus</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        
                                        {details && details.race.ability_bonuses.map((ability, i) =>
                                            <tr key={i}>
                                            <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-4 h-10 flex-shrink-0 text-center"></div>
                                                <div className="font-medium text-gray-800">{ability.ability_score.name} +{ability.bonus}</div>
                                            </div>
                                        </td>
                                        </tr>
                                            )}
                                    </tbody>
                                    <thead className="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Hit Die</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-4 h-10 flex-shrink-0 text-center"></div>
                                                    <div className="font-medium text-gray-800">{details && details.class.hit_die}  </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <thead className="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Speed</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-4 h-10 flex-shrink-0 text-center"></div>
                                                    <div className="font-medium text-gray-800">{details && details.race.speed}  </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="antialiased  text-gray-600 px-4">
                <div className="flex flex-col justify-center h-full">
                    <div className=" mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="">
                                <table className="table-auto w-full">
                                    <thead className="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Proficiencies</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {details && details.class.proficiencies.map((proficiency, i) => 
                                        <tr key={i}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className=" h-10 flex-shrink-0 text-center"></div>
                                                    <div className="font-medium text-gray-800">{proficiency.name}  </div>
                                                </div>
                                            </td>
                                        </tr>
                                            )}
                                        {props.character.proficiencies[0] && props.character.proficiencies[0].map(proficiency =>
                                            <tr key={proficiency}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className=" h-10 flex-shrink-0 text-center"></div>
                                                        <div className="font-medium text-gray-800">{proficiency} </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="antialiased  text-gray-600 px-4">
                <div className="flex flex-col justify-center h-full">
                    <div className=" mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="">
                                <table className="table-auto w-full">
                                    <thead className="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Languages</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {details && details.race.languages.map((language, i) => 
                                        <tr key={i}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className=" h-10 flex-shrink-0 text-center"></div>
                                                    <div className="font-medium text-gray-800">{language.name}  </div>
                                                </div>
                                            </td>
                                        </tr>
                                            )}
                                        {props.character.languages.length > 0 && props.character.languages[0].map(language =>
                                            <tr key={language}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className=" h-10 flex-shrink-0 text-center"></div>
                                                        <div className="font-medium text-gray-800">{language} </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default GQLDetails