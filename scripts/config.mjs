function defineConfig(config) {
  return config
}

export const cmds = defineConfig(['build', 'release'])

export const packages = defineConfig(['joylint', 'joyutils'])

export const semverisons = defineConfig(['patch', 'minor', 'major'])
