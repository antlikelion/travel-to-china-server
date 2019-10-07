import { initServer } from './server'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const InWooServer = async () => {
    if (process.env.NODE_ENV === 'development') {
        return initServer()
    }
    throw Error(`${process.env.NODE_ENV} is NOT SUPPORTED`)
}

InWooServer()