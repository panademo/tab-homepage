/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import redirect from 'src/utils/redirect'
import {
  chromeExtensionURL,
  homeURL,
  firefoxExtensionURL,
} from 'src/utils/navigation'

jest.mock('browser-detect')
jest.mock('src/utils/redirect')

const createMockBrowserInfo = (browser = 'chrome', mobile = false) => {
  return {
    name: browser,
    version: '58.0.3029',
    versionNumber: 58.03029,
    mobile: mobile,
    os: 'Windows NT 10.0',
  }
}

const getMockProps = () => ({
  location: {
    search: '',
  },
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('GetExtensionRedirectPage', () => {
  it('renders without error', () => {
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo())

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on desktop', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on mobile', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chrome', true))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is Chrome on iOS', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('crios', true))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Chrome Web Store when the browser is a Chromium browser', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('chromium', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(chromeExtensionURL)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on desktop', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(firefoxExtensionURL)
  })

  it('redirects to the Firefox Add-ons page when the browser is Firefox on mobile', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('firefox', true))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(firefoxExtensionURL)
  })

  it('redirects to the homepage when it is an unsupported browser', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo('safari', false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })

  it('redirects to the homepage when the browser value is null', async () => {
    expect.assertions(1)
    const detectBrowser = require('browser-detect').default
    detectBrowser.mockReturnValueOnce(createMockBrowserInfo(null, false))

    const GetExtensionRedirectPage = require('../get').default
    const mockProps = getMockProps()
    shallow(<GetExtensionRedirectPage {...mockProps} />)
    expect(redirect).toHaveBeenCalledWith(homeURL)
  })
})
