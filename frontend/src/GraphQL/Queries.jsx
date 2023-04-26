import {  gql, useQuery } from "@apollo/client";

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