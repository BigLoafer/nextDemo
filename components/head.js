import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'next 你好'
const defaultOGURL = ''
const defaultOGImage = ''

const Head= props =>(
  <NextHead>
  <meta charSet="UTF-8" />
  <title>{props.title || ''}</title>
  <meta
    name="description"
    content={props.description || defaultDescription}
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
  <link rel="apple-touch-icon" href="/static/touch-icon.png" />
  <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
  <link rel="icon" href="/static/favicon.ico" />
  {/* <meta property="og:url" content={props.url || defaultOGURL} /> */}
  {/* <meta property="og:title" content={props.title || ''} /> */}
</NextHead>
) 
 

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
