import React from "react"
import express from "express"
import { renderToString } from "react-dom/server"

import Meta from "../src/Meta"

const FAKE_API = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        title: "React SSR",
        desc: "How to using SSR in React?",
        image:
          "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
      })
    }, ms)
  })
}

const app = express()

app.get("/*", async (req, res) => {
  const apiResponse = await FAKE_API(3000)
  const metaHTML = renderToString(<Meta {...apiResponse} />)
  res.send(metaHTML)
})

app.listen(3000)
