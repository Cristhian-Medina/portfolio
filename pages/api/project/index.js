import DB from '@database'

const allProjects = async (request, response) => {
  try {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length
  
    response.setHeader('Content-type', 'application/json')
    response.status(200).json({ length, data: allEntries })
  } catch(e) {
    console.error(e)
    response.status(500).json({
      length: 0,
      data: [],
      error: 'Lo que podia salir mal, salio'
    })
  }
}

export default allProjects
