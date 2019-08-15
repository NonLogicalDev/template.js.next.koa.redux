import React from 'react'
import App, { Container } from 'next/app'
import { Provider as ReduxProvider } from "react-redux"

import store from '../store'

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <ReduxProvider store={store}>
                    <Component {...pageProps} />
                </ReduxProvider>
            </Container>
        )
    }
}
