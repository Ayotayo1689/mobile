// export interface LoginResponse {
//   userid: number
//   name: string
//   created: string
//   user_type_id: number
//   active: number
// }

// export interface AuthUser {
//   userid: number
//   name: string
//   user_type_id: number
//   active: number
//   created: string
// }

// export interface AuthContextType {
//   user: AuthUser | null
//   loading: boolean
//   error: string | null
//   login: (username: string, password: string) => Promise<void>
//   logout: () => void
// }





export interface LoginResponse {
  userid: number
  name: string
  created: string
  user_type_id: number
  active: number
}

export interface AuthUser {
  userid: number
  name: string
  user_type_id: number
  active: number
  created: string
}

export interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  isLoginLoading: boolean
  error: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}
