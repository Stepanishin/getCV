import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Avatar from './components/UI/Avatar/Avatar';
import Description from './components/UI/Description/Description';
import Range from './components/UI/Range/Range';
import Title from './components/UI/Title/Title';
import { ReactComponent as MailIcon } from './components/icons/mail.svg'
import { ReactComponent as PhoneIcon } from './components/icons/phone.svg'

// import 

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

function App() {

  const [skillsCounter, setSkillsCounter] = useState(1)
  const [worksCounter, setWorksCounter] = useState(1)

  const componentRef = useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
<div className='ui-wrapper'>
      <Header onClick={handlePrintClick} />
      <div className='ui-content-wrapper'>
        <Wrapper>
          <div className='ui-container' 
          ref={componentRef}
          >
            <Row itemsCenter>
              <Sidebar>
                <Avatar />
              </Sidebar>
              <Content>
                <Title  size='3'>Marina Zalowsski</Title>
                <Description>
                  Description
                </Description>
              </Content>
            </Row>

            <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me:
                </Title>
                <Description>Frontend developer</Description>
                <Description isSecondary>Ljubljana, Slovenia</Description>

                <Description isPrimary style={{ marginTop: '2rem' }}>
                  <MailIcon style={{ marginRight: '0.6rem' }} />
                  stepanishin@gmail.com
                </Description>
                <Description isPrimary>
                  <PhoneIcon style={{ marginRight: '0.6rem' }} />
                  +386 69630614
                </Description>
              </Sidebar>

              <Content>
                <Title size='3' isUppercase>
                  Education:
                </Title>
                <Description>Stanford University</Description>

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setWorksCounter(worksCounter + 1)}
                  style={{ marginTop: '3.6rem' }}
                >
                  Work experience:
                </Title>
                {new Array(worksCounter).fill(1).map((_, i) => (
                  <Description key={i}>{i + 1}. Frontend developer</Description>
                ))}

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setSkillsCounter(skillsCounter + 1)}
                  style={{ marginTop: '3rem' }}
                >
                  Skills:
                </Title>
                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range key={i} />
                ))}
              </Content>
            </Row>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
}

export default App;
