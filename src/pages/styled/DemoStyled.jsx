import React from "react";
import styled from "styled-components";
import { keyframes, ThemeProvider} from "styled-components";
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;
  &:hover {
    color: red; // <Thing> when hovered
  }
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  & + & {
    background: lime; // <Thing> next to <Thing>
  }
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// Define our button, but with the use of props.theme this time
const Button1 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button1.defaultProps = {
  theme: {
    main: "palevioletred",
  },
};
// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};

export default class DemoStyled extends React.Component {
  render() {
    return (
      <Container>
        <Button>测试</Button>
        <Button primary>Primary</Button>
        <TomatoButton>Tomato Button</TomatoButton>

        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>

        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>

        <div>
          <Input placeholder="A small text input" />
          <br />
          <Input placeholder="A bigger text input" size="2em" />
        </div>

        <Rotate>&lt; 💅🏾 &gt;</Rotate>

        <Button1>Normal</Button1>
        <ThemeProvider theme={theme}>
          <Button1>Themed</Button1>
        </ThemeProvider>
      </Container>
    );
  }
}
