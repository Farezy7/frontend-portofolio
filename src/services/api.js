const API_URL = import.meta.env.VITE_API_URL

async function request (path, options = {}) {
  const res = await fetch(API_URL + path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options.headers
    }
  })

  if (!res.ok) {
    let message = 'Server error ' + res.status
    try {
      const body = await res.json()
      if (body.message) message = body.message
    } catch (e) {
      // balasan bukan JSON, pakai pesan bawaan di atas
    }
    throw new Error(message)
  }

  if (res.status === 204) return null

  const json = await res.json()
  return json.data
}

function createResource (path) {
  return {
    getAll: () => request(path),
    getOne: id => request(path + '/' + id),
    create: payload =>
      request(path, {
        method: 'POST',
        body: JSON.stringify(payload)
      }),
    update: (id, payload) =>
      request(path + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(payload)
      }),
    remove: id =>
      request(path + '/' + id, {
        method: 'DELETE'
      })
  }
}

export const achievementsApi = createResource('/achievements')
export const certificationsApi = createResource('/certifications')
export const contactMessagesApi = createResource('/contact-messages')
export const educationsApi = createResource('/educations')
export const experiencesApi = createResource('/experiences')
export const projectsApi = createResource('/projects')
export const skillsApi = createResource('/skills')
export const trainingsApi = createResource('/trainings')

export const profileApi = {
  get: () => request('/profile'),
  update: payload =>
    request('/profile', { method: 'PUT', body: JSON.stringify(payload) })
}
