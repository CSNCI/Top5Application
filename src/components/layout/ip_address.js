import React, { useEffect, useState } from 'react'

function IpAddress() {
  let [ip, setIp] = useState(null)
  let [loading, setLoading] = useState(false)
  useEffect(async () => {
    const fetchIp = async () => {
      const response = await fetch('https://api.ipify.org/?format=json')
      const ipData = await response.json()
      setIp(ipData.ip)
      setTimeout(() => {
        setLoading(true)
      }, 900)
    }
    fetchIp()
  }, [])
  return (
    <>
      <button className="btn btn-secondary btn-lg  mt-2 disabled">
        <span className="mx-2">Your Current IP address is :</span>
        {loading ? (
          ip
        ) : (
          <div className="spinner-border spinner-border-sm" role="status" />
        )}
      </button>
    </>
  )
}

export default IpAddress
