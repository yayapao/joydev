import inquirer from 'inquirer'
import { question } from 'zx'

/**
 * queryCommand 选择命令
 * @param {*} cmds
 * @returns {object} {command: string}
 */
export const queryCommand = async (cmds) => {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'command',
        message: `What do you want to do next?`,
        default: 'build',
        choices: cmds,
      },
    ])
    return answer
  } catch (error) {
    const chooseCommand = await question(`What do you want to do next?`, {
      choices: cmds,
    })
    const answer = {
      command: chooseCommand.trim(),
    }
    return answer
  }
}

/**
 * queryCommand 选择 package
 * @param {*} cmds
 * @returns {object} {command: string}
 */
export const queryPackage = async (packages) => {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'package',
        message: `Which packages?`,
        default: '',
        choices: packages,
      },
    ])
    return answer
  } catch (error) {
    const chooseCommand = await question(`Which packages?`, {
      choices: packages,
    })
    const answer = {
      package: chooseCommand.trim(),
    }
    return answer
  }
}
