class LocalStorage {
  private static instance: LocalStorage

  private prefix: string

  private userSettingKey: string

  private constructor() {
    this.prefix = 'bruce'
    this.userSettingKey = 'user.settings'
  }

  public static Instance(): LocalStorage {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage()
    }

    return LocalStorage.instance
  }

  private buildKey = (key: string): string => `${this.prefix}.${key}`

  public GetUserKey(): string {
    return this.userSettingKey
  }

  private Validations(key: string): void {
    if (!key) throw new Error('Storage key is null or empty')
  }

  public Get(key: string): string | null {
    this.Validations(key)

    return localStorage.getItem(this.buildKey(key))
  }

  public Set(key: string, value: unknown): void {
    localStorage.setItem(this.buildKey(key), JSON.stringify(value))
  }

  public checkLocalStorage(): boolean {
    try {
      const tmpKey = this.buildKey('__test__')
      localStorage.setItem(tmpKey, '{}')
      localStorage.removeItem(tmpKey)
      return true
    } catch (error) {
      return false
    }
  }
}

export default LocalStorage
