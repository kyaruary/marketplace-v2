import { GoTradingSDKClientContext } from '../store'
import { useContext } from 'react'

export function useGoTradingClient() {
  return useContext(GoTradingSDKClientContext)
}
