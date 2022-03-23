export const routesAPI = Object.freeze({
  baseUrl: () => 'https://gateway.marvel.com/v1/public/',
  getPersonagens: () => 'characters',
  getPersonagemById: (id = ':id') => `characters/${id}`,
  getPersonagemQuadrinhos: (id = ':id') => `characters/${id}/comics`,
})
