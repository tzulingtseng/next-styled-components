import React from "react";
import theme from "../../lib/theme";
import Card from "../../lib/Card";
import CardHeader from "../../lib/CardHeader";
import CardBody from "../../lib/CardBody";
import CardFooter from "../../lib/CardFooter";
import ThemeProvider from "../../lib/ThemeProvider";

const styles = {
  card: {
    width: '100%',
    maxWidth: '1000px',
    minWidth: '400px'
  }
}

const Provider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const Template = args => {
  return (
    <Provider>
      <Card style={styles.card}>
        <CardHeader title='Header' subtitle='subtitle' />
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Provider>
  );
}

export const Default = Template.bind({});

export default {
  component: Card,
  title: "Components/Card",
};
