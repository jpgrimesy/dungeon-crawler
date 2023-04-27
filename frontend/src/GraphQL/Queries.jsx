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