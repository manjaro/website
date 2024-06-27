import current_team from '~/assets/team/current.json'
import former_team from '~/assets/team/former.json'

export const getAuthorPicture = (user_id: string): string | null => {
  for (const author of current_team) {
    if (user_id == author.id) {
      if (author.image) {
        return '/team/' + user_id + '.' + author.image
      }
      return null
    }
  }
  for (const author of former_team) {
    if (user_id == author.id) {
      if (author.image) {
        return '/team/' + user_id + '.' + author.image
      }
      return null
    }
  }
  return null
}
