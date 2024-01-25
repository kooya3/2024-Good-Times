/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-escape */
import dotenv from 'dotenv'

import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'

dotenv.config()