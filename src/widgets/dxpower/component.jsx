import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";
// import { useTranslation } from "next-i18next";

export default function Component({ service }) {
  // const { t } = useTranslation();

  const { widget } = service;

  const { data: power, error } = useWidgetAPI(widget, "power");
  // && error.data.error.message==="Invalid data"
  // {JSON.stringify(error)}

  if(error && error.message==="Invalid data" ){
    return (
      <Container service={service}>
        <Block label="power" value="WE HAVE IT2!!!" />
      </Container>
    );
  }
  
  if (error) {
    return <Container error={error} />;
  }

  return (
    <Container service={service}>
      <Block label="power" value="WE HAVE IT!!!" />
    </Container>
  );
}