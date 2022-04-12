import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Avatar from './components/UI/Avatar/Avatar';
import Description from './components/UI/Description/Description';
import Title from './components/UI/Title/Title';

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

  const handleAvatarClick = () => {
    console.log('avatar clicked')
  }

  const handlePrinClick = () => {
    console.log('print clicked')
  }

  return (
    <div className="ui-wrapper">
      <Header onClick={handlePrinClick} />
      <div className="ui-content-wrapper">
        <Wrapper>
          <div className="ui-container">
            <Row itemsCenter>
              <Avatar isSquare onClick={handleAvatarClick} />
              <div>
                <Title size='2'>Hello world!</Title>
                <Description>hello descr</Description>
              </div>
            </Row>
            <Row>
              <Sidebar>sidebar</Sidebar>
              <Content>Content</Content>
            </Row>
          </div>
        </Wrapper>
      </div>

      <Footer />
    </div>
  );
}

export default App;
