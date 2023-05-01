import { gql, useQuery } from "@apollo/client";

export const RACES = gql`
    query {
        races {
            traits {
              desc
              name
              index
              proficiency_choices {
                desc
                from {
                  options {
                    ... on ProficiencyReferenceOption {
                      item {
                        name
                        index
                      }
                    }
                  }
                }
                choose
                type
              }
            }
            name
            index
            language_desc
            language_options {
                from {
                  options {
                    item {
                      name
                      index
                    }
                  }
                }
                choose
              }
          }
    }
`
export const CLASSES = gql`
    query {
        classes {
            index
            name
            hit_die
            saving_throws {
              index
              full_name
            }
            spellcasting {
              info {
                desc
                name
              }
              spellcasting_ability {
                full_name
              }
            }
            class_levels {
              features {
                name
                desc
              }
            }
            proficiency_choices {
              desc
              choose
              type
              from {
                options {
                  ... on ProficiencyReferenceOption {
                    item {
                      name
                      index
                      type
                    }
                  }
                }
              }
            }
          }
    }
`
export const ABILITIES = gql`
    query {
        abilityScores {
            full_name
            index
            desc
        }
    }
`

const RACE_DETAILS = gql `
    query Race($index: String, $index2: String) {
        race(index: $index) {
        index
        name
        ability_bonuses {
            bonus
            ability_score {
            index
            name
            }
        }
        languages {
            name
        }
        starting_proficiencies {
            name
            index
        }
        size_description
        alignment
        traits {
            name
        }
        age
        speed
        }
        class(index: $index2){
            name
            hit_die
            proficiencies {
            name
            }
            saving_throws {
            full_name
            }
        }
    }
`
export const EDIT_CHOICES = gql `
    query {
        classes {
            name
            index
          }
          races {
            index
            name
          }
    }
`


export default function getDetails(index, index2) {
    const { data, error, loading } = useQuery(RACE_DETAILS, {
        variables: {
            index,
            index2, 
        }
    })

    return { data, error, loading }
}
