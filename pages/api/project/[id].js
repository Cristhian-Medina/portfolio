import DB from '@database/'

const allProjects = async (request, response) => {
  const db = new DB()
  const id = request.query.id
  const project = await db.getById(id)

  response.status(200).json(project)
}

export default allProjects
