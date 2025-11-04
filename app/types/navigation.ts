import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import type { CompositeScreenProps } from "@react-navigation/native"

export type RootStackParamList = {
  Login: undefined
  Main: undefined
  ManageFactory: undefined
  Workers: undefined
  AddWorker: undefined
  Supervisors: undefined
  AddSupervisor: undefined
  Departments: undefined
  AddDepartment: undefined
  Projects: undefined
  AddProject: undefined
}

export type MainTabParamList = {
  Home: undefined
  CustomersTab: undefined
  Logout: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
