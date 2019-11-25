import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [playerStats, setPlayerStats] = useState([])
  const [loading, setLoading] = useState(true)

  const getDate = () => {}

  useEffect(() => {
    if (loading && playerStats.length === 0) {
      axios("https://api.fortnitetracker.com/v1/profile/pc/hagoona_matata", {
        headers: {
          "TRN-Api-Key": process.env.FORTNITE_API_KEY,
        },
      }).then(res => {
        console.log("res", res)
        setLoading(false)
      })
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
