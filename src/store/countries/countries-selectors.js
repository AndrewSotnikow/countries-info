import throttle from 'lodash.throttle'

export const selectAllCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
})

export const selectAllCountries = (state) => state.countries.list

const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  )
}

export const throttledSelectVisibleCountries = throttle(
  selectVisibleCountries,
  500
)
