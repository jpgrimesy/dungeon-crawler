import {  gql, useQuery } from "@apollo/client";

export const RACES = gql`
    query {
        races {
            traits {
              desc
              name
              index
            }
            name
            index
            language_desc
          }
    }
`
export const CLASSES = gql`
    query {
        classes {
        name
        index
        hit_die
        proficiencies {
            name
            index
        }
        spellcasting {
            level
            info {
            name
            desc
            }
            spellcasting_ability {
            name
            desc
            index
            }
        }
        saving_throws {
            index
            name
        }
        starting_equipment {
            quantity
            equipment {
                name
                index
              }
        }
        }
    }
`