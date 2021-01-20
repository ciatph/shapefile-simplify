require('dotenv').config()
const mapshaper = require('mapshaper')
const path = require('path')

const inputPath = path.join(__dirname, '..', 'shapefiles')
const outputPath = path.join(__dirname, '..', 'formatted')

// Mapshaper cli command
const cliCommand = `-i ${inputPath}/*.shp 
  -simplify ${process.env.PERCENTAGE} keep-shapes 
  -o ${outputPath}/ format=${process.env.OUTPUT_FORMAT}`

// Convert and simplify a directory of shapefiles to OUTPUT_FORMAT 
mapshaper.runCommands(cliCommand, (err) => {
  if (err) {
    console.log(`Simplification encountered some errors.\n${err.message}`)
    process.exit(1)
  }

  console.log('Simplification process has finished.')
  process.exit(0)
})