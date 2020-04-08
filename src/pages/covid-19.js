import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Divider from '@material-ui/core/Divider'
import { lightestTextColor } from 'src/themes/theme'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import WHOPhoto from 'src/img/covid-19/who-covid-19.png'
import foodBankNYCPhoto from 'src/img/covid-19/food-bank-for-nyc-covid-19.png'
import EvidenceActionPhoto from 'src/img/covid-19/chlorine-dispenser.jpg'

const installButtonBlock = (
  <div
    style={{
      display: 'flex',
      padding: '30px 0px',
      justifyContent: 'center',
    }}
  >
    <InstallButton
      size={'medium'}
      onUnsupportedBrowserInstallClick={() => {
        redirect(homeURL)
      }}
    />
  </div>
)

const faqs = [
  {
    question: 'How can I help the COVID-19 response efforts?',
    answerElem: (
      <div>
        <p style={{ marginBottom: 0 }}>
          Join Tab for a Cause! After it's added, every tab you open during
          these campaigns will support COVID-19 relief efforts.
        </p>
        {installButtonBlock}
        <p>
          If you're already using Tab for a Cause, get your friends on board to
          increase our community's impact.
        </p>
      </div>
    ),
  },
  {
    question: "Wait, it's free?",
    answerElem: (
      <p>
        Yes! Tab for a Cause is a free way for you to do good every single day.
        You just have to open tabs in your browser, and we send money raised
        from ads to some spectacular nonprofits.
      </p>
    ),
  },
  {
    question: 'Why now?',
    answerElem: (
      <div>
        <p>
          The world is facing an unprecedented challenge in the spread of
          coronavirus, and it needs an unprecedented response.
        </p>
        <p>
          As a way to raise money for free from the safety of our homes, Tab for
          a Cause is a great way to support communities in need as we confront
          this pandemic.
        </p>
      </div>
    ),
  },
]

const Covid19 = props => {
  const { location } = props
  const openGraphTitle = 'Support COVID-19 Relief for Free'
  const openGraphDescription =
    'To support COVID-19 relief, we are raising money for organizations that help those affected.'

  const campaignLabelStyle = {
    color: 'white',
    background: '#d82138',
    padding: '6px 14px',
    borderRadius: 3,
    display: 'inline-block',
    marginTop: 10,
    marginBottom: 10,
  }
  return (
    <Layout brand={'tab'} location={location}>
      <TextPageContent>
        <Helmet title={openGraphTitle}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader>Support COVID-19 Relief for Free</TextPageHeader>
        <div style={{ paddingTop: 8 }}>
          <div
            style={{
              marginBottom: 40,
            }}
          >
            <p>
              The spread of COVID-19 has been swift and destructive. We need a
              global response to support the health systems and community
              organizations working to keep us all safe.
            </p>
            <p
              style={{
                marginBottom: 0,
              }}
            >
              Tab for a Cause is a free, simple, and at-home way to raise money
              for important causes, and we are raising funds for critical relief
              efforts. Join in to support the fight against COVID-19:
            </p>
            {installButtonBlock}
            <p>
              So far, we have given 10,000 meals to families in need and
              thousands of dollars to the World Health Organization. Now, we're
              aiming to give{' '}
              <span style={{ fontWeight: 'bold' }}>
                2,000 people access to clean water
              </span>
              .
            </p>
            <Divider
              style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
            />
          </div>

          <div>
            <div
              style={{
                marginTop: 60,
                marginBottom: 40,
              }}
            >
              <h5 style={campaignLabelStyle}>Campaign #3: April 8 – ongoing</h5>

              <h2 style={{ fontSize: '1.8rem' }}>
                Giving 2,000 People Access to Clean Water
              </h2>
              <p>
                The pandemic's impact on low-income countries will likely be
                devastating, especially where people do not have access to clean
                water, soap, or an adequate health system.
              </p>
              <p>
                This phase of our relief efforts supports{' '}
                <a
                  href={
                    'https://www.evidenceaction.org/responding-to-covid-19/'
                  }
                >
                  Evidence Action
                </a>{' '}
                as they rapidly provide access to clean water and sanitation to
                people who need it most.
              </p>
              <p>
                Our goal is to give{' '}
                <span style={{ fontWeight: 'bold' }}>
                  2,000 people access to clean water
                </span>{' '}
                for one year, helping vulnerable communities to bolster their
                efforts against COVID-19.
              </p>
              <p>Can you help out? Join in:</p>
              {installButtonBlock}
            </div>
            <div
              style={{
                marginTop: 40,
                marginBottom: 6,
                // Full page width CSS
                display: 'flex',
                justifyContent: 'center',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                // End full page width CSS
              }}
            >
              <img
                alt={"Information on the World Health Organization's impact"}
                src={EvidenceActionPhoto}
                style={{ width: '100%', maxWidth: 1000 }}
              />
            </div>
            <p style={{ marginBottom: 60 }}>
              Photo Credit:{' '}
              <a
                href={'https://www.evidenceaction.org/responding-to-covid-19/'}
              >
                Evidence Action
              </a>
            </p>
            <Divider
              style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
            />
          </div>

          <div>
            <div
              style={{
                marginTop: 60,
                marginBottom: 40,
              }}
            >
              <h5 style={campaignLabelStyle}>Campaign #2: April 1 – April 8</h5>

              <h2 style={{ fontSize: '1.8rem' }}>
                Giving 10,000 Meals to Families in Need
              </h2>
              <p>
                COVID-19 has strained the ability of food banks to take care of
                people in need. We highlighted the work of the{' '}
                <a href={'https://www.foodbanknyc.org/covid-19/'}>
                  Food Bank for New York City
                </a>
                , which is keeping families fed during this crisis.
              </p>
              <p>
                Our community{' '}
                <span style={{ fontWeight: 'bold' }}>gave 10,000 meals</span> to
                people in NYC who need it most—just by opening tabs.
              </p>
            </div>
            <div
              style={{
                marginTop: 40,
                marginBottom: 60,
                // Full page width CSS
                display: 'flex',
                justifyContent: 'center',
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                // End full page width CSS
              }}
            >
              <img
                alt={"Information on the World Health Organization's impact"}
                src={foodBankNYCPhoto}
                style={{ width: '100%', maxWidth: 1000 }}
              />
            </div>
            <Divider
              style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
            />
          </div>

          <div
            style={{
              marginTop: 60,
              marginBottom: 40,
            }}
          >
            <h5 style={campaignLabelStyle}>Campaign #1: March 17 – April 1</h5>

            <h2 style={{ fontSize: '1.8rem' }}>
              Supporting the WHO COVID-19 Solidarity Fund
            </h2>
            <p>
              Our community{' '}
              <span style={{ fontWeight: 'bold' }}>
                raised thousands of dollars
              </span>{' '}
              for the World Health Organization's{' '}
              <a
                href={
                  'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate'
                }
              >
                COVID-19 Solidarity Fund
              </a>{' '}
              and their partners in a massive effort to help countries prevent,
              detect, and manage the novel coronavirus, particularly where the
              needs are the greatest.
            </p>
          </div>
          <div
            style={{
              marginTop: 40,
              marginBottom: 40,
              // Full page width CSS
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
              position: 'relative',
              left: '50%',
              right: '50%',
              marginLeft: '-50vw',
              marginRight: '-50vw',
              // End full page width CSS
            }}
          >
            <img
              alt={"Information on the World Health Organization's impact"}
              src={WHOPhoto}
              style={{ width: '100%', maxWidth: 1000 }}
            />
          </div>
          <Divider
            style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
          />
        </div>

        <div style={{ marginTop: 60 }}>
          <h2>FAQ</h2>
          {faqs.map(faq => {
            return (
              <div key={faq.question} style={{ padding: '10px 0px' }}>
                <p style={{ fontWeight: 'bold' }}>{faq.question}</p>
                {faq.answerElem}
              </div>
            )
          })}
        </div>
      </TextPageContent>
    </Layout>
  )
}

Covid19.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

Covid19.displayName = 'Covid19'

export default Covid19
