import { makeAutoObservable } from 'mobx'
import * as API from 'api/Api'

export interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user?: API.User
  error?: string | { [key: string]: string }
  reloadAuthentication: () => void
  login: () => void
  logout: () => void
}

class AuthStore {
  isAuthenticated = false
  isLoading = false
  user?: API.User = undefined
  error?: string | { [key: string]: string } = undefined

  constructor() {
    makeAutoObservable(this)
  }

  setIsLoading(value: boolean) {
    this.isLoading = value
  }

  login(user: API.User) {
    this.user = user
  }

  logout() {
    this.user = undefined
  }

  reloadAuthentication() {
    console.log('authStore -> reloadAuthentication')
  }
}

const authStore = new AuthStore()
export default authStore
