import React from 'react'
import Button from 'material-ui/Button'

import Section from 'components/Section'
import ReviewCarousel from 'components/ReviewCarousel'
import Review from 'components/Review'
import InstallButton from 'components/InstallButton'
import CharitableImpactText from 'components/CharitableImpactText'
import ChromeInstallInProgressScreen from 'components/ChromeInstallInProgressScreen'
import ChromeInstallReconsiderScreen from 'components/ChromeInstallReconsiderScreen'
import Link from 'components/Link'
import {
  chromeExtensionURL,
  financialsURL,
  firefoxExtensionURL,
  githubTabRepoURL,
  githubTabExtensionsRepoURL,
  githubTabHomepageRepoURL,
  pressHuffingtonPostURL,
  pressLATimesURL,
  pressMashableURL,
  pressUSATodayURL,
} from 'utils/navigation'
import { lighterTextColor, lightestTextColor } from 'themes/theme'
import UnsupportedBrowserDialog from 'components/UnsupportedBrowserDialog'

// Icons
import Star from '@material-ui/icons/Star'
import StarHalf from '@material-ui/icons/StarHalf'
import Firefox from 'mdi-material-ui/Firefox'
import GoogleChrome from 'mdi-material-ui/GoogleChrome'

// Images
import browserLandingPageImg from 'img/browser-landing-page-cut-off.png'
import placholderImgPink from 'img/placeholder-pink.png'

// Press logos
import logoHuffingtonPost from 'img/press/huffington-post-grey.svg'
import logoUSAToday from 'img/press/usa-today-grey.svg'
import logoLATimes from 'img/press/los-angeles-times-grey.svg'
import logoMashable from 'img/press/mashable-grey.svg'

// Reviewer images
import reviewImgAbbyH from 'img/reviews/abby_h.png'
import reviewImgAlfonzoG from 'img/reviews/alfonzo_g.png'
import reviewImgAnaL from 'img/reviews/ana_l.png'
import reviewImgBenjaminK from 'img/reviews/benjamin_k.png'
import reviewImgCameronB from 'img/reviews/cameron_b.png'
import reviewImgChaseR from 'img/reviews/chase_r.png'
import reviewImgJohnathanB from 'img/reviews/johnathan_b.png'
import reviewImgLucasN from 'img/reviews/lucas_n.png'
import reviewImgShayneW from 'img/reviews/shayne_w.png'
import reviewImgTobyS from 'img/reviews/toby_s.png'

import styles from './index.module.css'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chromeInstallInProgress: false,
      isReconsideringInstall: false,
      showUnsupportedBrowserMessage: false,
    }
  }

  // When modals are open, prevent scroll.
  changeBodyScrollable(shouldScroll) {
    const className = styles['body-unscrollable']
    if (shouldScroll) {
      try {
        window.document.body.classList.remove(className)
      } catch (e) {
        console.error(e)
      }
    } else {
      try {
        window.document.body.classList.add(className)
      } catch (e) {
        console.error(e)
      }
    }
  }

  showReconsideringInstallScreen() {
    this.setState({
      chromeInstallInProgress: false,
      isReconsideringInstall: true,
    })
    this.changeBodyScrollable(false)
  }

  hideInstallReconsiderScreen() {
    this.setState({
      isReconsideringInstall: false,
    })
    this.changeBodyScrollable(true)
  }

  showChromeInstallPrompt() {
    this.setState({
      chromeInstallInProgress: true,
      isReconsideringInstall: false,
    })
    this.changeBodyScrollable(false)
  }

  hideChromeInstallPrompt() {
    this.setState({
      chromeInstallInProgress: false,
    })
    this.changeBodyScrollable(true)
  }

  showUnsupportedBrowserMessage() {
    console.log('Called showUnsupportedBrowserMessage')
    this.setState({
      showUnsupportedBrowserMessage: true,
    })
  }

  hideUnsupportedBrowserMessage() {
    this.setState({
      showUnsupportedBrowserMessage: false,
    })
  }

  render() {
    const installButton = (
      <InstallButton
        onChromeInstallBegin={this.showChromeInstallPrompt.bind(this)}
        onChromeInstallCanceled={this.showReconsideringInstallScreen.bind(this)}
        onChromeInstallSuccess={this.hideChromeInstallPrompt.bind(this)}
        onUnsupportedBrowserInstallClick={this.showUnsupportedBrowserMessage.bind(
          this
        )}
      />
    )
    return (
      <div>
        <Section wrap={'reverse'}>
          <img
            src={browserLandingPageImg}
            className={styles['homepage-img']} // responsive styling
            style={{
              width: '67%',
              maxWidth: 720,
              height: '67%',
              marginTop: 20,
              marginRight: 20,
              marginBottom: 20,
            }}
          />
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: 220,
              marginTop: 20,
              marginBottom: 40,
              marginLeft: 50,
              marginRight: 40,
            }}
          >
            <h1>
              Raise money for charity every time you open a new browser tab
            </h1>
            <p>
              It's easier than putting on socks—and unlike socks, it warms your
              heart.
            </p>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              {installButton}
            </div>
            <div style={{ margin: 0 }}>
              <div>
                <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                <Star style={{ color: '#ffc533', width: 18, height: 18 }} />
                <StarHalf style={{ color: '#ffc533', width: 18, height: 18 }} />
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: lightestTextColor,
                  marginBottom: 0,
                }}
              >
                170,000+ people are Tabbing on Chrome
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    color: lightestTextColor,
                    marginRight: 6,
                    marginBottom: 0,
                  }}
                >
                  Available on:
                </p>
                <Link
                  to={chromeExtensionURL}
                  style={{ color: lightestTextColor }}
                  hoverStyle={{ color: lighterTextColor }}
                >
                  <GoogleChrome
                    style={{
                      margin: '0px 2px',
                      width: 20,
                      height: 20,
                    }}
                  />
                </Link>
                <Link
                  to={firefoxExtensionURL}
                  style={{ color: lightestTextColor }}
                  hoverStyle={{ color: lighterTextColor }}
                >
                  <Firefox
                    style={{
                      margin: '0px 2px',
                      width: 20,
                      height: 20,
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              minHeight: 84, // height as header
              padding: '20px 40px', // same as header
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ margin: 0 }}>$504,300.29</p>
            <p style={{ margin: 0, fontSize: 12, color: lightestTextColor }}>
              raised for charity
            </p>
          </div>
        </Section>
        <Section
          background={'dark'}
          fullWidth={true}
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: 80,
            paddingBottom: 40,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <div style={{ textAlign: 'center', flex: 1 }}>
            {/* Or: "Your browser tabs will help empower commmunities" -The Huffington Post  */}
            <h1>"One of the simplest ways to raise money"</h1>
            <p>- USA Today</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 30,
            }}
          >
            <Link to={pressHuffingtonPostURL}>
              <img
                src={logoHuffingtonPost}
                style={{
                  width: 144,
                  margin: 20,
                }}
              />
            </Link>
            <Link to={pressUSATodayURL}>
              <img
                src={logoUSAToday}
                style={{
                  height: 60,
                  margin: 20,
                }}
              />
            </Link>
            <Link to={pressLATimesURL}>
              <img
                src={logoLATimes}
                style={{
                  height: 64,
                  margin: 20,
                }}
              />
            </Link>
            <Link to={pressMashableURL}>
              <img
                src={logoMashable}
                style={{
                  width: 134,
                  margin: 20,
                }}
              />
            </Link>
          </div>
        </Section>
        <Section>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: 220,
              marginTop: 40,
              marginBottom: 40,
              marginLeft: 80,
              marginRight: 60,
            }}
          >
            <h1>A new tab you'll fall in love with</h1>
            <p>
              Browse better with gorgeous photos, notes, to-do lists, and more,
              all just a new tab away.
            </p>
          </div>
          <img
            src={placholderImgPink}
            className={styles['homepage-img']} // responsive styling
            style={{
              width: '60%',
              maxWidth: 700,
              height: '60%',
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 20,
            }}
          />
        </Section>
        <Section wrap={'reverse'}>
          <img
            src={placholderImgPink}
            className={styles['homepage-img']} // responsive styling
            style={{
              width: '60%',
              maxWidth: 700,
              height: '60%',
              marginTop: 20,
              marginRight: 20,
              marginBottom: 20,
            }}
          />
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: 220,
              marginTop: 40,
              marginBottom: 40,
              marginLeft: 80,
              marginRight: 60,
            }}
          >
            <h1>Support your favorite cause, effortlessly</h1>
            <p>
              Ads on the new tab page raise money, and you tell us where the
              money goes.
            </p>
            <p>
              Open tabs to <CharitableImpactText cycleSpeedMs={2000} />
            </p>
          </div>
        </Section>
        <Section
          background={'dark'}
          fullWidth={true}
          style={{
            display: 'block',
            flexDirection: 'unset',
            justifyContent: 'unset',
            alignContent: 'unset',
            flexWrap: 'unset',
            overflow: 'hidden',
            position: 'relative',
            paddingTop: 60,
            paddingBottom: 60,
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              marginTop: 0,
              marginBottom: 40,
              marginLeft: 40,
              marginRight: 40,
            }}
          >
            Here's what people have to say:
          </h1>
          <ReviewCarousel>
            <Review
              name="Shayne Walton"
              imgUrl={reviewImgShayneW}
              starCount={5}
            >
              FANTASTIC app that lets you do a lot of good things while doing
              your day to day work, studying for finals, or just surfing the
              web!
            </Review>
            <Review
              name="Cameron Brohier-Wood"
              imgUrl={reviewImgCameronB}
              starCount={5}
            >
              As a person who frequently enters wikipedia holes opening 20 tabs
              at a time.. its great to know that my procrastination can be of
              some use! Great app, brilliant idea
            </Review>
            <Review name="Chase Rosen" imgUrl={reviewImgChaseR} starCount={5}>
              It's wonderful. Unobtrusive, useful, well designed, easy to
              navigate, and actually pretty fun! There is no reason to not have
              this extension. It has not affected performance and is never an
              inconvenience.
            </Review>
            <Review
              name="Jonathon Buchanan"
              imgUrl={reviewImgJohnathanB}
              starCount={5}
            >
              Love that this gives me, a fool with no money, a way to donate to
              charity. :)
            </Review>
            <Review name="Ana Logstic" imgUrl={reviewImgAnaL} starCount={5}>
              It's a great way to raise money for charity when you don't have a
              lot of money and don't have the time to go out and try to raise
              money on your own. Plus I can decide what charity to donate to,
              and do it on my own time. I love it!
            </Review>
            <Review
              name="Benjamin King"
              imgUrl={reviewImgBenjaminK}
              starCount={5}
            >
              Raise money for charity by browsing the internet. Perfectly
              executed!
            </Review>
            <Review
              name="Alfonzo Ginibi"
              imgUrl={reviewImgAlfonzoG}
              starCount={5}
            >
              Wonderful service that does great things for people in need, and
              all you have to do is click a button. So really it's a no brainer,
              AND as a plus their new UI is really attractive and useful as
              well. Way better than the default chrome new tab page. So what do
              you have to lose?
            </Review>
            <Review name="Lucas Norr" imgUrl={reviewImgLucasN} starCount={5}>
              Awesome way to give back while browsing, with absolutely no effort
              on your end!
            </Review>
            <Review name="Abby Hill" imgUrl={reviewImgAbbyH} starCount={5}>
              Wonderful and thoughtful idea for an extension! Helping save the
              world one tab at a time.
            </Review>
            <Review name="Toby Strange" imgUrl={reviewImgTobyS} starCount={5}>
              Amazing extension. Such an awesome idea to use ad revenue from
              people's new tab to donate to charity. I'd rate 6 stars if I
              could.
            </Review>
          </ReviewCarousel>
        </Section>
        <Section
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '80px 40px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: 760, padding: 10 }}>
            <h1>We show our work</h1>
            <div style={{ maxWidth: 560 }}>
              <p>
                We know that trust must be earned. That's why the code for our{' '}
                <Link to={githubTabRepoURL}>new tab page</Link>,{' '}
                <Link to={githubTabExtensionsRepoURL}>browser extensions</Link>
                , and even{' '}
                <Link to={githubTabHomepageRepoURL}>this webpage</Link> are open
                source.
              </p>
              <p>
                Even better, we publish quarterly financial reports, so you can
                see exactly how much we give to each charity and what our other
                costs are.
              </p>
              <Link to={financialsURL}>
                <Button variant="raised" color="primary">
                  See our financials
                </Button>
              </Link>
            </div>
          </div>
        </Section>
        {this.state.chromeInstallInProgress ? (
          <ChromeInstallInProgressScreen />
        ) : null}
        {this.state.isReconsideringInstall ? (
          <ChromeInstallReconsiderScreen
            onCloseClick={this.hideInstallReconsiderScreen.bind(this)}
            installButton={installButton}
          />
        ) : null}
        <UnsupportedBrowserDialog
          open={this.state.showUnsupportedBrowserMessage}
          onClose={this.hideUnsupportedBrowserMessage.bind(this)}
        />
      </div>
    )
  }
}

export default IndexPage
