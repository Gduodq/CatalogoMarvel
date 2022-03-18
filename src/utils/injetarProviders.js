import React from 'react'

export const injetarProviders = (Component, providers) => {
  return ComposeProviders(Component, providers, 0)
}

const ComposeProviders = (Component, providers, index) => (props) => {
  if (index === providers.length) return <Component {...props} />
  const Provider = providers[index]
  const NextComposeProviders = ComposeProviders(Component, providers, index + 1)
  return (
    <Provider.Consumer>{(value) => NextComposeProviders({ ...props, [Provider.propName]: value })}</Provider.Consumer>
  )
}
