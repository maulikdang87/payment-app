"use client";


import { useBalance } from "@repo/store/balance"

const Balance = () => {
  const balance = useBalance()
  return (
    <div>{balance}</div>
  )
}

export default Balance