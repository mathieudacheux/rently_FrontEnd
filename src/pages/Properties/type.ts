export type PropertyFormikType = {
  status: boolean
  searchCity: string
  property_type: number | string
  price: number | string
  rooms_number: string
  surface: string
  bedroom: string
  bathroom: string
  kitchen: string
  toilet: string
  build_year: string
  dpe: string
  land_size: string
  elevator: boolean
  terrace: boolean
  balcony: boolean
  cellar: boolean
  parking: boolean
  garden: boolean
  garage: boolean
  pool: boolean
  keeper: boolean
  fiber: boolean
  duplex: boolean
  ground_floor: boolean
  top_floor: boolean
  life_annuity: boolean
  work_done: boolean
}

export type MarkerType = {
  id: number
  property_id: number
  position: [number, number]
}
