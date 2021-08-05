import React from 'react'
import { gql, useQuery } from '@apollo/client'

interface RatesInventory {
    currency: string
    rate: string
}

interface RatesInventoryData {
    rates: RatesInventory[]
}

interface RatesInventoryVars {
    currency: string
    rate: string
}

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const Apollo: any = () => {
    const { loading, error, data } = useQuery<RatesInventoryData, RatesInventoryVars>(EXCHANGE_RATES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return data!.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ))
}

export default Apollo