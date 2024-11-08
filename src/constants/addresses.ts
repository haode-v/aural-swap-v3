import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', false)
export const MULTICALL2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696', false),
  [SupportedChainId.SEPOLIA]: '0xbAAE4aD41bfEF7aC9F9a203158Aed4a8ce0Bf79C',
}
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS, false)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap(
  '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  false
)

// most current governance contract address should always be the 0 index
// only support governance on mainnet
export const GOVERNANCE_ADDRESSES: AddressMap[] = [
  {
    [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
  },
  {
    [SupportedChainId.MAINNET]: '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
  },
]
export const TIMELOCK_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC',
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap('0x0227628f3F023bb0B980b67D528571c95c6DaC1c', true)
export const QUOTER_ADDRESSES: AddressMap = constructSameAddressMap('0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD', true)
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x1238536071E1c677A632429e3655c799b22cDA52',
  true
)
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.SEPOLIA]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E',
  true
)
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap(
  '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  true
)
