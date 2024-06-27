import current_team from '~/assets/team/current.json'
import former_team from '~/assets/team/former.json'

export const getAuthors = (ids: Array<string>) => {
  const authors = []

  for (const author of current_team) {
    if (ids.includes(author.id)) {
      authors.push(author)
    }
  }
  for (const author of former_team) {
    if (ids.includes(author.id)) {
      authors.push(author)
    }
  }

  return authors
}
