
export const formateDate =(Date, config)=> {
    const defaultOptions = {day :'numeric', month:'short' ,year: 'numeric' }
    const options = config ? config : defaultOptions
    return new Date(Date).tolocalDateString('en-US', options)
}