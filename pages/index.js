import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { Collapsible, color, fontSize, Text, space } from '@ticketswap/solar'
import styled from '@emotion/styled'
import PopularEvents from '~/components/PopularEvents'

const StyledCollapsible = styled(Collapsible)`
  color: ${color.space};

  & + & {
    margin-top: ${space[8]};
  }
`

const List = styled.ul`
  list-style: disc;
  margin-left: ${space[16]};
`

const Description = styled(Text)`
  font-size: ${fontSize[18]};
  margin: ${space[32]} 0 ${space[16]};
`

const SubTitle = styled.h3`
  margin-top: ${space[32]};
  margin-bottom: ${space[16]};
`

const Emoji = styled.span`
  font-family: initial;
`

const Home = () => (
  <>
    <Cover />

    <Container>
      <Description as="p">
        <strong>Welcome to the TicketSwap challenger.</strong> The goal of this
        challenger is to finish the todo list stated below <Emoji>☑️</Emoji> Of
        course if you see anything that can be improved apart from the todo
        list, you're welcome to do so <Emoji>☺️</Emoji>
      </Description>

      <StyledCollapsible buttonLabel="Todo list">
        <List>
          <li>
            <strong>Improvement:</strong> The Challenger should be mobile
            friendly
          </li>
          <li>
            <strong>Bugfix:</strong> There are some browser console errors that
            need to be addressed
          </li>
          <li>
            <strong>Feature:</strong> The event page should be completely
            server-side rendered
          </li>
          <li>
            <strong>Improvement:</strong> The event page need some nice styling
            for a better overview of all the information
          </li>
          <li>
            <strong>Story:</strong> As a user I want to be able to navigate to a
            search page and search all the events. I want to see the results and
            be able to navigate to an event.
          </li>
        </List>
      </StyledCollapsible>

      <Description as="p">
        <strong>Tip:</strong> Below is a list of references you can use to get
        started if you have little experience with the tech stack. Also below is
        a reference to our component library, there are many components that you
        can use in the Challenger (for example for the search page). If you have
        any question you can always{' '}
        <a href="mailto:rob@ticketswap.com">contact us</a> <Emoji>💪</Emoji>
      </Description>

      <StyledCollapsible buttonLabel="References">
        <List>
          <li>
            We are using our own component library in this project, if you want
            to check it out go to{' '}
            <a href="https://github.com/TicketSwap/solar">Github Solar</a> or{' '}
            <a href="https://ticketswap.github.io/solar">Storybook Solar</a>
          </li>
          <li>
            We also have an icon library that you can use, if you want to check
            it out go to{' '}
            <a href="https://github.com/TicketSwap/comets">Github Comets</a> or{' '}
            <a href="https://ticketswap.github.io/comets-playground/">
              Playground Comets
            </a>
          </li>
          <li>
            The React framework we use for this challenger is{' '}
            <a href="https://nextjs.org/docs">Next.js</a>
          </li>
          <li>
            For CSS we use the css-in-js package called{' '}
            <a href="https://emotion.sh/docs/introduction">Emotion</a>
          </li>
          <li>
            We use GraphQL to get our data and the client that is able to read
            that data is{' '}
            <a href="https://www.apollographql.com/docs/react/">Apollo</a>
          </li>
          <li>
            The local API server is also from Apollo, see the docs for the{' '}
            <a href="https://www.apollographql.com/docs/apollo-server/">
              server
            </a>{' '}
            and explore the local API in the{' '}
            <a href="/api/graphql">playground</a>.
          </li>
        </List>
      </StyledCollapsible>

      <SubTitle>Popular events</SubTitle>
      <PopularEvents />
    </Container>

    <Footer />
  </>
)

export default Home
