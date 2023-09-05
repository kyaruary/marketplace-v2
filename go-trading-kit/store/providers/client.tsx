import { Config } from '@nftgo/gotrading'

import { PropsWithChildren } from 'react'
import { GoTradingSDKClientContext } from '../contexts/client'
import { useGoTradingClientService } from '../services/client'

interface GoTradingClientProviderProps {
  options: Partial<Config>
}

type Props = PropsWithChildren<GoTradingClientProviderProps>

export function GoTradingClientProvider(props: Props) {
  const { children, options } = props

  const client = useGoTradingClientService(options)

  return (
    <GoTradingSDKClientContext.Provider value={client}>
      {children}
    </GoTradingSDKClientContext.Provider>
  )
}
