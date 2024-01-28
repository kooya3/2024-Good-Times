import type { Project, User } from './payload-cloud-types'

export const checkRole = (allRoles: User['roles'], user: User): boolean => {
    if (user) {
      if (
        (allRoles || []).some(role => {
          return user?.roles?.some(individualRole => {
            return individualRole === role
          })
        })
      ) {
        return true
      }
    }
  
    return false
  }

  export const canUserMangeProject = ({
    project,
    user,
  }: {
  project: Project | null | undefined
  user: User | null | undefined
})