/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-escape */
import dotenv from 'dotenv'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import fetch from 'node-fetch'
import path from 'path'
import remarkGfm from 'remark-gfm'

dotenv.config()

const __dirname = path.resolve()

const decodeBase64 = string => {
  const buff = Buffer.from(string, 'base64')
  return buff.toString('utf8')
}
