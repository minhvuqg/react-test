const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export const convertToCurrency: any = (currency: number): string => {
  return formatter.format(currency || 0)
}
