import { SWRInfiniteConfiguration } from 'swr/infinite'

// type TokensQuery = paths['/tokens/v6']['get']['parameters']['query']

type TokensQuery = unknown

export function useTokens(
  options?: TokensQuery | false,
  swrOptions?: SWRInfiniteConfiguration,
  chainId?: number
): UseToken {
  // TODO: use swr fetch data
  return {} as UseToken
}

type UseToken = {
  data: {
    token?:
      | {
          contract: string
          tokenId: string
          name?: string | undefined
          description?: string | undefined
          image?: string | undefined
          imageSmall?: string | undefined
          imageLarge?: string | undefined
          metadata?:
            | {
                [key: string]: unknown
              }
            | undefined
          media?: string | undefined
          kind?: string | undefined
          isFlagged?: boolean | undefined
          lastFlagUpdate?: string | undefined
          lastFlagChange?: string | undefined
          supply?: number | undefined
          remainingSupply?: number | undefined
          rarity?: number | undefined
          rarityRank?: number | undefined
          collection?:
            | {
                id?: string | undefined
                name?: string | undefined
                image?: string | undefined
                slug?: string | undefined
              }
            | undefined
          lastSale?:
            | {
                id?: string | undefined
                saleId?: string | undefined
                token?:
                  | {
                      contract?: string | undefined
                      tokenId?: string | undefined
                      name?: string | undefined
                      image?: string | undefined
                      collection?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                orderSource?: string | undefined
                orderSide?: 'ask' | 'bid' | undefined
                orderKind?: string | undefined
                orderId?: string | undefined
                from?: string | undefined
                to?: string | undefined
                amount?: string | undefined
                fillSource?: string | undefined
                block?: number | undefined
                txHash?: string | undefined
                logIndex?: number | undefined
                batchIndex?: number | undefined
                timestamp?: number | undefined
                price?:
                  | {
                      currency?:
                        | {
                            contract?: string | undefined
                            name?: string | undefined
                            symbol?: string | undefined
                            decimals?: number | undefined
                          }
                        | undefined
                      amount?:
                        | {
                            raw?: string | undefined
                            decimal?: number | undefined
                            usd?: number | undefined
                            native?: number | undefined
                          }
                        | undefined
                      netAmount?:
                        | {
                            raw?: string | undefined
                            decimal?: number | undefined
                            usd?: number | undefined
                            native?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                washTradingScore?: number | undefined
                royaltyFeeBps?: number | undefined
                marketplaceFeeBps?: number | undefined
                paidFullRoyalty?: boolean | undefined
                feeBreakdown?:
                  | {
                      kind?: string | undefined
                      bps?: number | undefined
                      recipient?: string | undefined
                      source?: string | undefined
                      rawAmount?: string | undefined
                    }[]
                  | undefined
                isDeleted?: boolean | undefined
                createdAt?: string | undefined
                updatedAt?: string | undefined
              }
            | undefined
          owner?: string | undefined
          attributes?:
            | {
                key?: string | undefined
                kind?: string | undefined
                value: string
                tokenCount?: number | undefined
                onSaleCount?: number | undefined
                floorAskPrice?: number | undefined
                topBidValue?: number | undefined
                createdAt?: string | undefined
              }[]
            | undefined
        }
      | undefined
    market?:
      | {
          floorAsk?:
            | {
                id?: string | undefined
                price?:
                  | {
                      currency?:
                        | {
                            contract?: string | undefined
                            name?: string | undefined
                            symbol?: string | undefined
                            decimals?: number | undefined
                          }
                        | undefined
                      amount?:
                        | {
                            raw?: string | undefined
                            decimal?: number | undefined
                            usd?: number | undefined
                            native?: number | undefined
                          }
                        | undefined
                      netAmount?:
                        | {
                            raw?: string | undefined
                            decimal?: number | undefined
                            usd?: number | undefined
                            native?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                maker?: string | undefined
                validFrom?: number | undefined
                validUntil?: number | undefined
                quantityFilled?: number | undefined
                quantityRemaining?: number | undefined
                dynamicPricing?:
                  | {
                      kind?: 'dutch' | 'pool' | undefined
                      data?:
                        | {
                            [key: string]: unknown
                          }
                        | undefined
                    }
                  | undefined
                source?:
                  | {
                      [key: string]: unknown
                    }
                  | undefined
              }
            | undefined
          topBid?:
            | {
                id?: string | undefined
                price?:
                  | {
                      currency?:
                        | {
                            contract?: string | undefined
                            name?: string | undefined
                            symbol?: string | undefined
                            decimals?: number | undefined
                          }
                        | undefined
                      amount?:
                        | {
                            raw?: string | undefined
                            decimal?: number | undefined
                            usd?: number | undefined
                            native?: number | undefined
                          }
                        | undefined
                      netAmount?:
                        | {
                            raw?: string | undefined
                            decimal?: number | undefined
                            usd?: number | undefined
                            native?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                maker?: string | undefined
                validFrom?: number | undefined
                validUntil?: number | undefined
                source?:
                  | {
                      [key: string]: unknown
                    }
                  | undefined
                feeBreakdown?:
                  | {
                      kind?: string | undefined
                      recipient?: string | undefined
                      bps?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
      | undefined
  }[]
  hasNextPage: boolean
  isFetchingInitialData: boolean
  isFetchingPage: any
  resetCache: () => Promise<void>
  fetchNextPage: () => void
  size: number
  setSize: (size: number | ((_size: number) => number)) => Promise<
    | {
        tokens?:
          | {
              token?:
                | {
                    contract: string
                    tokenId: string
                    name?: string | undefined
                    description?: string | undefined
                    image?: string | undefined
                    imageSmall?: string | undefined
                    imageLarge?: string | undefined
                    metadata?:
                      | {
                          [key: string]: unknown
                        }
                      | undefined
                    media?: string | undefined
                    kind?: string | undefined
                    isFlagged?: boolean | undefined
                    lastFlagUpdate?: string | undefined
                    lastFlagChange?: string | undefined
                    supply?: number | undefined
                    remainingSupply?: number | undefined
                    rarity?: number | undefined
                    rarityRank?: number | undefined
                    collection?:
                      | {
                          id?: string | undefined
                          name?: string | undefined
                          image?: string | undefined
                          slug?: string | undefined
                        }
                      | undefined
                    lastSale?:
                      | {
                          id?: string | undefined
                          saleId?: string | undefined
                          token?:
                            | {
                                contract?: string | undefined
                                tokenId?: string | undefined
                                name?: string | undefined
                                image?: string | undefined
                                collection?:
                                  | {
                                      id?: string | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          orderSource?: string | undefined
                          orderSide?: 'ask' | 'bid' | undefined
                          orderKind?: string | undefined
                          orderId?: string | undefined
                          from?: string | undefined
                          to?: string | undefined
                          amount?: string | undefined
                          fillSource?: string | undefined
                          block?: number | undefined
                          txHash?: string | undefined
                          logIndex?: number | undefined
                          batchIndex?: number | undefined
                          timestamp?: number | undefined
                          price?:
                            | {
                                currency?:
                                  | {
                                      contract?: string | undefined
                                      name?: string | undefined
                                      symbol?: string | undefined
                                      decimals?: number | undefined
                                    }
                                  | undefined
                                amount?:
                                  | {
                                      raw?: string | undefined
                                      decimal?: number | undefined
                                      usd?: number | undefined
                                      native?: number | undefined
                                    }
                                  | undefined
                                netAmount?:
                                  | {
                                      raw?: string | undefined
                                      decimal?: number | undefined
                                      usd?: number | undefined
                                      native?: number | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          washTradingScore?: number | undefined
                          royaltyFeeBps?: number | undefined
                          marketplaceFeeBps?: number | undefined
                          paidFullRoyalty?: boolean | undefined
                          feeBreakdown?:
                            | {
                                kind?: string | undefined
                                bps?: number | undefined
                                recipient?: string | undefined
                                source?: string | undefined
                                rawAmount?: string | undefined
                              }[]
                            | undefined
                          isDeleted?: boolean | undefined
                          createdAt?: string | undefined
                          updatedAt?: string | undefined
                        }
                      | undefined
                    owner?: string | undefined
                    attributes?:
                      | {
                          key?: string | undefined
                          kind?: string | undefined
                          value: string
                          tokenCount?: number | undefined
                          onSaleCount?: number | undefined
                          floorAskPrice?: number | undefined
                          topBidValue?: number | undefined
                          createdAt?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              market?:
                | {
                    floorAsk?:
                      | {
                          id?: string | undefined
                          price?:
                            | {
                                currency?:
                                  | {
                                      contract?: string | undefined
                                      name?: string | undefined
                                      symbol?: string | undefined
                                      decimals?: number | undefined
                                    }
                                  | undefined
                                amount?:
                                  | {
                                      raw?: string | undefined
                                      decimal?: number | undefined
                                      usd?: number | undefined
                                      native?: number | undefined
                                    }
                                  | undefined
                                netAmount?:
                                  | {
                                      raw?: string | undefined
                                      decimal?: number | undefined
                                      usd?: number | undefined
                                      native?: number | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          maker?: string | undefined
                          validFrom?: number | undefined
                          validUntil?: number | undefined
                          quantityFilled?: number | undefined
                          quantityRemaining?: number | undefined
                          dynamicPricing?:
                            | {
                                kind?: 'dutch' | 'pool' | undefined
                                data?:
                                  | {
                                      [key: string]: unknown
                                    }
                                  | undefined
                              }
                            | undefined
                          source?:
                            | {
                                [key: string]: unknown
                              }
                            | undefined
                        }
                      | undefined
                    topBid?:
                      | {
                          id?: string | undefined
                          price?:
                            | {
                                currency?:
                                  | {
                                      contract?: string | undefined
                                      name?: string | undefined
                                      symbol?: string | undefined
                                      decimals?: number | undefined
                                    }
                                  | undefined
                                amount?:
                                  | {
                                      raw?: string | undefined
                                      decimal?: number | undefined
                                      usd?: number | undefined
                                      native?: number | undefined
                                    }
                                  | undefined
                                netAmount?:
                                  | {
                                      raw?: string | undefined
                                      decimal?: number | undefined
                                      usd?: number | undefined
                                      native?: number | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          maker?: string | undefined
                          validFrom?: number | undefined
                          validUntil?: number | undefined
                          source?:
                            | {
                                [key: string]: unknown
                              }
                            | undefined
                          feeBreakdown?:
                            | {
                                kind?: string | undefined
                                recipient?: string | undefined
                                bps?: number | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }[]
          | undefined
        continuation?: string | undefined
      }[]
    | undefined
  >
  error: any
  mutate: import('swr/_internal').KeyedMutator<
    {
      tokens?:
        | {
            token?:
              | {
                  contract: string
                  tokenId: string
                  name?: string | undefined
                  description?: string | undefined
                  image?: string | undefined
                  imageSmall?: string | undefined
                  imageLarge?: string | undefined
                  metadata?:
                    | {
                        [key: string]: unknown
                      }
                    | undefined
                  media?: string | undefined
                  kind?: string | undefined
                  isFlagged?: boolean | undefined
                  lastFlagUpdate?: string | undefined
                  lastFlagChange?: string | undefined
                  supply?: number | undefined
                  remainingSupply?: number | undefined
                  rarity?: number | undefined
                  rarityRank?: number | undefined
                  collection?:
                    | {
                        id?: string | undefined
                        name?: string | undefined
                        image?: string | undefined
                        slug?: string | undefined
                      }
                    | undefined
                  lastSale?:
                    | {
                        id?: string | undefined
                        saleId?: string | undefined
                        token?:
                          | {
                              contract?: string | undefined
                              tokenId?: string | undefined
                              name?: string | undefined
                              image?: string | undefined
                              collection?:
                                | {
                                    id?: string | undefined
                                    name?: string | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        orderSource?: string | undefined
                        orderSide?: 'ask' | 'bid' | undefined
                        orderKind?: string | undefined
                        orderId?: string | undefined
                        from?: string | undefined
                        to?: string | undefined
                        amount?: string | undefined
                        fillSource?: string | undefined
                        block?: number | undefined
                        txHash?: string | undefined
                        logIndex?: number | undefined
                        batchIndex?: number | undefined
                        timestamp?: number | undefined
                        price?:
                          | {
                              currency?:
                                | {
                                    contract?: string | undefined
                                    name?: string | undefined
                                    symbol?: string | undefined
                                    decimals?: number | undefined
                                  }
                                | undefined
                              amount?:
                                | {
                                    raw?: string | undefined
                                    decimal?: number | undefined
                                    usd?: number | undefined
                                    native?: number | undefined
                                  }
                                | undefined
                              netAmount?:
                                | {
                                    raw?: string | undefined
                                    decimal?: number | undefined
                                    usd?: number | undefined
                                    native?: number | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        washTradingScore?: number | undefined
                        royaltyFeeBps?: number | undefined
                        marketplaceFeeBps?: number | undefined
                        paidFullRoyalty?: boolean | undefined
                        feeBreakdown?:
                          | {
                              kind?: string | undefined
                              bps?: number | undefined
                              recipient?: string | undefined
                              source?: string | undefined
                              rawAmount?: string | undefined
                            }[]
                          | undefined
                        isDeleted?: boolean | undefined
                        createdAt?: string | undefined
                        updatedAt?: string | undefined
                      }
                    | undefined
                  owner?: string | undefined
                  attributes?:
                    | {
                        key?: string | undefined
                        kind?: string | undefined
                        value: string
                        tokenCount?: number | undefined
                        onSaleCount?: number | undefined
                        floorAskPrice?: number | undefined
                        topBidValue?: number | undefined
                        createdAt?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            market?:
              | {
                  floorAsk?:
                    | {
                        id?: string | undefined
                        price?:
                          | {
                              currency?:
                                | {
                                    contract?: string | undefined
                                    name?: string | undefined
                                    symbol?: string | undefined
                                    decimals?: number | undefined
                                  }
                                | undefined
                              amount?:
                                | {
                                    raw?: string | undefined
                                    decimal?: number | undefined
                                    usd?: number | undefined
                                    native?: number | undefined
                                  }
                                | undefined
                              netAmount?:
                                | {
                                    raw?: string | undefined
                                    decimal?: number | undefined
                                    usd?: number | undefined
                                    native?: number | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        maker?: string | undefined
                        validFrom?: number | undefined
                        validUntil?: number | undefined
                        quantityFilled?: number | undefined
                        quantityRemaining?: number | undefined
                        dynamicPricing?:
                          | {
                              kind?: 'dutch' | 'pool' | undefined
                              data?:
                                | {
                                    [key: string]: unknown
                                  }
                                | undefined
                            }
                          | undefined
                        source?:
                          | {
                              [key: string]: unknown
                            }
                          | undefined
                      }
                    | undefined
                  topBid?:
                    | {
                        id?: string | undefined
                        price?:
                          | {
                              currency?:
                                | {
                                    contract?: string | undefined
                                    name?: string | undefined
                                    symbol?: string | undefined
                                    decimals?: number | undefined
                                  }
                                | undefined
                              amount?:
                                | {
                                    raw?: string | undefined
                                    decimal?: number | undefined
                                    usd?: number | undefined
                                    native?: number | undefined
                                  }
                                | undefined
                              netAmount?:
                                | {
                                    raw?: string | undefined
                                    decimal?: number | undefined
                                    usd?: number | undefined
                                    native?: number | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        maker?: string | undefined
                        validFrom?: number | undefined
                        validUntil?: number | undefined
                        source?:
                          | {
                              [key: string]: unknown
                            }
                          | undefined
                        feeBreakdown?:
                          | {
                              kind?: string | undefined
                              recipient?: string | undefined
                              bps?: number | undefined
                            }[]
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }[]
        | undefined
      continuation?: string | undefined
    }[]
  >
  isValidating: boolean
  isLoading: boolean
}
