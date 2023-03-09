export class Writer {
  private _tool: Tool | null = null
  constructor (private _name: string) {}

  get writerName(): string {
    return this._name
  }

  set writerTool(receivedTool: Tool | null) {
    this._tool = receivedTool
  }

  get writerTool(): Tool | null {
    return this._tool
  }

  write(): void {
    if (this.writerTool === null) {
      console.log('I cant write whitout tool...')
      return
    }

    this.writerTool.write()
  }
}

export abstract class Tool {
  constructor (private _name: string) {}

  get toolName(): string {
    return this._name
  }

  abstract write(): void
}

export class Pen extends Tool {
  write(): void {
    console.log(`${ this.toolName } is writing...`)
  }
}
export class Typewriter extends Tool {
  write(): void {
    console.log(`${ this.toolName } is typing...`)
  }
}

const writer = new Writer('Lucas')
const pen = new Pen('Bic')
const typewriter = new Typewriter('Machine')

writer.writerTool = pen
writer.writerTool = typewriter
writer.write()
