export default defineEventHandler(async () => {
    
    interface ILogout {
        status: number
        statusMessage: string
        message: string
    }
   
    return {
        message: 'OK',
        status: 200,
        statusMessage: 'OK',
    } satisfies ILogout
    
  })
    