export interface Worker {
  id: number
  name: string
  basic: number
  allowance: number
  total: number
  regularHr: number
  evaluation: number
  department?: string
  mobile?: string
  email?: string
  dateOfBirth?: string
  jobStartingDate?: string
  visaCost?: number
  otherCost?: number
  accommodationCost?: number
  transportationCost?: number
  overtimeHr?: number
  holidayHr?: number
}

export interface Department {
  name: string
  workers: Worker[]
}

export interface Project {
  id: number
  jobNo: string
  customer: string
  type: string
  boat: string
  hull: string
  description: string
  dueDate: string
  createdDate: string
  status: "DONE" | "PENDING" | "ONGOING"
  salesPerson?: string
  deliveryDate?: string
  boatModel?: string
  specification?: "Standard" | "Custom"
  engineRequired?: "Yes" | "No"
  engineType?: string
  notes?: string
}

export interface Supervisor {
  id: number
  name: string
  department: string
  username?: string
}

export interface RecentUpdate {
  text: string
  time: string
}

export interface WorkingHours {
  weekDays: string
  dayHours: string
}

export interface Task {
  id: number
  supervisor: string
  jobNo: string
  customer: string
  area: string
  description: string
  dueDate: string
  assignDate: string
  boat: string
  hull: string
  status: "DONE" | "PENDING" | "ONGOING"
  department: string
  taskType: "Single" | "Multi"
  priority: "Normal" | "Urgent"
}

export interface Boat {
  id: number
  name: string
  hullNo: string
  length?: number
  beam?: number
  draft?: number
  dryWeight?: number
  fuelTank?: number
  waterTank?: number
  dieselTank?: number
  blackTank?: number
}

export interface Customer {
  id: number
  name: string
  phone: string
  email?: string
  address?: string
  location: string
  boats: Boat[]
}

export interface ClientRequirement {
  id: number
  description: string
  qty: number
  remarks: string
}
