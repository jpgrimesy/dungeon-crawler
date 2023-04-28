import { useState, useEffect } from "react";
import getDetails from "../../GraphQL/Queries";

function GQLDetails(props) {
    const { data, loading, error } = getDetails(props.race, props.class)
    const [details, setDetails] = useState()

    useEffect(() => {
        setDetails(data)
    }, [data])

    return (
        <>
        <p className="text-4xl">{props.character.name}</p>
        <p className="text-2xl">{details && <>{details.race.name} {details.class.name}</>}</p>
        <section class="antialiased  text-gray-600 px-4 mb-10">
            <div class="flex flex-col justify-center h-full">
                <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div class="p-3">
                        <div class="">
                            <table class="table-auto w-full">
                                <thead class="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Dexterity</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Constitution</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Strength</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Wisdom</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Intelligence</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Charisma</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div class="font-medium text-gray-800">{props.character.dex} </div>
                                            </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div class="font-medium text-gray-800">{props.character.con}</div>
                                            </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div class="font-medium text-gray-800">{props.character.str}</div>
                                            </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div class="font-medium text-gray-800">{props.character.wis}</div>
                                            </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div class="font-medium text-gray-800">{props.character.int}</div>
                                            </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                                                <div class="font-medium text-gray-800">{props.character.cha}</div>
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
            <section class="antialiased  text-gray-600 px-4">
                <div class="flex flex-col justify-center w-full h-full">
                    <div class=" mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div class="p-3">
                            <div class="">
                                <table class="table-auto w-full">
                                    <thead class="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Ability Bonus</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        
                                        {details && details.race.ability_bonuses.map(ability =>
                                            <tr>
                                            <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-4 h-10 flex-shrink-0 text-center"></div>
                                                <div class="font-medium text-gray-800">{ability.ability_score.name} +{ability.bonus}</div>
                                            </div>
                                        </td>
                                        </tr>
                                            )}
                                    </tbody>
                                    <thead class="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Hit Die</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-4 h-10 flex-shrink-0 text-center"></div>
                                                    <div class="font-medium text-gray-800">{details && details.class.hit_die}  </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <thead class="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Speed</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-4 h-10 flex-shrink-0 text-center"></div>
                                                    <div class="font-medium text-gray-800">{details && details.race.speed}  </div>
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
            <section class="antialiased  text-gray-600 px-4">
                <div class="flex flex-col justify-center h-full">
                    <div class=" mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div class="p-3">
                            <div class="">
                                <table class="table-auto w-full">
                                    <thead class="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Proficiencies</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {details && details.class.proficiencies.map(proficiency => 
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class=" h-10 flex-shrink-0 text-center"></div>
                                                    <div class="font-medium text-gray-800">{proficiency.name}  </div>
                                                </div>
                                            </td>
                                        </tr>
                                            )}
                                        {props.character && props.character.proficiencies[0].map(proficiency =>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class=" h-10 flex-shrink-0 text-center"></div>
                                                        <div class="font-medium text-gray-800">{proficiency} </div>
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
            <section class="antialiased  text-gray-600 px-4">
                <div class="flex flex-col justify-center h-full">
                    <div class=" mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div class="p-3">
                            <div class="">
                                <table class="table-auto w-full">
                                    <thead class="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Languages</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {details && details.race.languages.map(language => 
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class=" h-10 flex-shrink-0 text-center"></div>
                                                    <div class="font-medium text-gray-800">{language.name}  </div>
                                                </div>
                                            </td>
                                        </tr>
                                            )}
                                        {props.character.languages.length > 0 && props.character.languages[0].map(language =>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class=" h-10 flex-shrink-0 text-center"></div>
                                                        <div class="font-medium text-gray-800">{language} </div>
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